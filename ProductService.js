const MongoClient = require('mongodb').MongoClient;

let shopDatabase;
let productCollection;
module.exports = {

  init() {
    MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
      .then(function(clientInstance) {
        shopDatabase = clientInstance.db("shop");
        productCollection = shopDatabase.collection("product");
      });
  },


  getProducts() {
    return new Promise(function(resolve, reject) {
      const cursor = productCollection.find();
      const promise = cursor.toArray();
      promise.then(function(products) {
        resolve(products);
      });
    });
  },

  getProductByKey(customKey) {
    return new Promise(function(resolve, reject) {
      const product = productCollection.findOne({ key: Number(customKey) });
      resolve(product);
    });
  }
};
