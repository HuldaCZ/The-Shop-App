import PRODUCTS from "../../data/dummy-data";

console.log(PRODUCTS);

const initialState = {
  avilableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action) => {
  return state;
};
