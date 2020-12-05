let products = [];
module.exports = {
  init() {
    products.push({
      product: {
        title: "ПВУ Turkov ZENIT 350 HECO",
        URL: "/product",
        imgURL: "static/product.png",
        description: "Вентиляционная установка с рекуперацией тепла и влаги",
        price: 5000
      }
    });
  },

  getProducts() {
    return products;
  }
};
