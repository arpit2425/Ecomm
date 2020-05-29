// helper functions
export function featuredProducts(data) {
  return data.filter((product) => product.featured === true);
}
