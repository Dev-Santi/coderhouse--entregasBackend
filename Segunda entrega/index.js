/* 
const ProductManager = require("./ProductManagerClass");
const Test = new ProductManager("./data/data.json");

const executeApp = async () => {
  console.log("____________ getProducts ____________");

  await Test.getProducts();

  console.log("____________ addProduct ____________");

  await Test.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen2",
    code: "abc123",
    stock: 25,
  });

  console.log("____________ getProducts ____________");

  // await Test.getProducts();

  console.log("____________ getProductById ____________");

  // await Test.getProductById(-ID-);

  console.log("____________ updateProduct ____________");

  // await Test.updateProduct(-ID-, { price: 10 });

  console.log("____________ deleteProduct ____________");

  // await Test.deleteProduct(-ID-);
};

executeApp();
 */
