import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, PokemonTable, Total } from './styles';

function Cart({ cart, total, removeFromCart, updateAmount }) {
  function increment(pokemon)
  {
    updateAmount(pokemon.pokemon.name, pokemon.amount + 1);
  }

  function decrement(pokemon)
  {
    updateAmount(pokemon.pokemon.name, pokemon.amount - 1);
  }
  
  return (
    <Container>
      <PokemonTable>
        <thead>
          <tr>
            <th/>
            <th>POKEMON</th>
            <th>QTD</th>
            <th>SUB-TOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(pokemon => (
            <tr>
              <td>
                <img 
                  src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ pokemon.pokemon.url.split('/')[pokemon.pokemon.url.split('/').length - 2] + ".png"}
                  alt={pokemon.pokemon.name}
                />
              </td>
              <td>
                <strong>{pokemon.pokemon.name}</strong>
                <span>{pokemon.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(pokemon)}>
                    <MdRemoveCircleOutline size={20} color={localStorage.getItem('@store/bg-color')} />
                  </button>
                  <input type="number" readOnly value={pokemon.amount} />
                  <button type="button" onClick={() => increment(pokemon)}>
                    <MdAddCircleOutline size={20} color={localStorage.getItem('@store/bg-color')} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{pokemon.subtotal}</strong>
              </td>
              <td>
                <button 
                  type="button" 
                  onClick={() => removeFromCart(pokemon.pokemon.name) }
                >
                  <MdDelete size={20} color={localStorage.getItem('@store/bg-color')} />
                </button>
              </td>
            </tr>
          ))} 
        </tbody>
      </PokemonTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(pokemon => ({
    ...pokemon,
    subtotal: formatPrice(pokemon.pokemon.url.split('/')[pokemon.pokemon.url.split('/').length - 2] * pokemon.amount),
  })),
  total: formatPrice(state.cart.reduce((total, pokemon) => {
    return total + pokemon.pokemon.url.split('/')[pokemon.pokemon.url.split('/').length - 2] * pokemon.amount;
  }, 0)),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);