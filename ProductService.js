let products = [];
module.exports = {
  init() {
    products.push({
      slug: "pvu-turkov-zenit-350-heco",
      key: 111,
      title: "ПВУ Turkov ZENIT 350 HECO",
      imgURL: "/static/product.png",
      description: "Вентиляционная установка с рекуперацией тепла и влаги",
      details: "Вентиляционная установка с рекуперацией тепла и влаги в легком и универсальном корпусе из вспенненного полипропилена предназначена для поддержания климата в жилых помещениях,или небольших офисах, магазинах.",
      price: 5000
    });

    products.push({
      slug: "beats-studio-wireless-over-ear-headphones",
      key: 222,
      title: "Beats Studio Wireless Over-Ear Headphones",
      imgURL: "/static/product1.png",
      description: "Беспроводные наушники Beats Studio",
      details: "При изготовлении корпуса Beats Studio были использованы прецизионные формы и металлизация поверхности для высокой износостойкости.Наушники поддерживают протокол Bluetooth v4.0 и профили HFP, HSP, A2DP, AVRCP.",
      price: 10000
    });
  },

  getProducts() {
    return products;
  },

  getProductByKey(customKey) {
    return products.find(product => product.key == customKey);
  }
};
