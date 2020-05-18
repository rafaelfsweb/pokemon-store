import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { PokemonList } from './styles';

class Home extends Component {

  state = {
    pokemons: [],
  };

  async componentDidMount() {
    const response = await api.get(`/type/${localStorage.getItem('@store/type')}`);

    const data = response.data.pokemon.map(pokemon => ({
      ...pokemon,
      priceFormatted: formatPrice(pokemon.pokemon.url.split('/')[pokemon.pokemon.url.split('/').length - 2])
    }));

    this.setState({pokemons: data});
  }

  handleAddPokemon = pokemon => {
    const { addToCart } = this.props;

    addToCart(pokemon);
  };

  render () {
    const { pokemons } = this.state;

    return (
      <PokemonList>
        { pokemons.map(pokemon => (
              <li key={pokemon.pokemon.name}>
                <img 
                  src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ pokemon.pokemon.url.split('/')[pokemon.pokemon.url.split('/').length - 2] + ".png"}
                  alt="Pokemon"
                />
                <strong>{pokemon.pokemon.name}</strong>
                <span>{pokemon.priceFormatted}</span>
        
                <button 
                  type="button" 
                  onClick={() => this.handleAddPokemon(pokemon)}
                >
                  <div>
                    <MdAddShoppingCart size={16} color="#000" /> 
                  </div>
        
                  <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        )) }
        
      </PokemonList>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);