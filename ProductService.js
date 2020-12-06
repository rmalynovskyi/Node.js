let products = [];
module.exports = {
  init() {
    products.push({
      title: "ПВУ Turkov ZENIT 350 HECO",
      URL: "/product",
      imgURL: "static/product.png",
      description: "Вентиляционная установка с рекуперацией тепла и влаги",
      price: 5000
    });

    products.push({
      title: "Beats Studio Wireless Over-Ear Headphones",
      URL: "/product1",
      imgURL: "static/product1.png",
      description: "Беспроводные наушники Beats Studio",
      price: 10000
    });
  },

  getProducts() {
    return products;
  }
};
