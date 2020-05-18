import produce from 'immer'; 

export default function cart(state = [], action) {
  switch(action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const pokemonIndex = draft.findIndex(p => p.pokemon.name === action.pokemon.pokemon.name)

        if (pokemonIndex >= 0) {
          draft[pokemonIndex].amount += 1;
        } else {
          draft.push({
            ...action.pokemon,
            amount: 1,
          });
        }
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const pokemonIndex = draft.findIndex(p => p.pokemon.name === action.name)
        //console.log(action.name);
        if (pokemonIndex >= 0) {
          draft.splice(pokemonIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }
      
      return produce(state, draft => {
        const pokemonIndex = draft.findIndex(p => p.pokemon.name === action.name)

        if (pokemonIndex >= 0) {
          draft[pokemonIndex].amount = Number(action.amount);
        }
      });
    }
      
    default:
      return state;
  }
};