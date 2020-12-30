const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
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

  getProducts(where) {
    return new Promise(function(resolve, reject) {
      let cursor;
      if (where) {
        if (where.key) {
          where.key = Number(where.key);
        }
        cursor = productCollection.find(where);
      }
      else {
        cursor = productCollection.find();
      }
      const promise = cursor.toArray();
      promise.then(function(products) {
        resolve(products);
      });
    });
  },

  getProductByKey(customKey) {
    return new Promise(function(resolve, reject) {
      let productKey;
      try {
        productKey = Number(customKey);
      }
      catch (err) {
        reject(err);
      }
      const product = productCollection.findOne({ key: productKey });
      resolve(product);
    });
  },

  findById(customId) {
    return new Promise(function(resolve, reject) {
      let productId;
      try {
        productId = ObjectID(customId);
      }
      catch (err) {
        reject(err);
      }
      resolve(productCollection.findOne({ _id: productId }));
    });
  }
};
