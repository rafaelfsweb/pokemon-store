export function addToCart(pokemon) {
  return {
    type: '@cart/ADD',
    pokemon,
  };
}

export function removeFromCart(name) {
  return { 
    type: '@cart/REMOVE', 
    name, 
  };
}

export function updateAmount(name, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    name,
    amount,
  }
}