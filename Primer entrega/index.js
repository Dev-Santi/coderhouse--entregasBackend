/* Desafío clase 2: realizar una clase “ProductManager” que gestione un conjunto de productos. */

class ProductManager {
  //Al crear un objeto de la clase ProductManager, este comienza con un array vacío.
  constructor() {
    this.products = [];
  }

  //Método para agregar productos
  addProduct(title, description, price, thumbnail, code, stock) {
    //Se comprueba que todos los campos sean válidos.
    if (
      title == undefined ||
      description == undefined ||
      typeof price !== "number" ||
      typeof code !== "string" ||
      thumbnail == undefined ||
      typeof stock !== "number"
    ) {
      console.log(`Error! Check that:
      -All fields are complete
      -The order of the fields is correct
      -Type of "price" and "stock" are numeric (without quotes)
      -Type of "code" is string (with quotes)
      `);
    } else {
      //Verificación de que el código no se encuentre presente en ningún producto.
      let isRepeated = false;

      this.products.map((object) => {
        if (object.code == code) {
          isRepeated = true;
        }
      });

      //Si el código no está repetido, se genera el ID y se agrega el objeto.
      if (!isRepeated) {
        //Se genera el ID
        let id = this.products.length + 1;

        //Se agrega el objeto
        this.products.push({
          id: id,
          title: title,
          description: description,
          code: code,
          price: price,
          thumbnail: thumbnail,
          stock: stock,
        });

        //Se muestra un mensaje comunicando que la operación ha sido exitosa o ha ocurrido un error.
        console.log(`The product has been successfully added.
        Title:"${title}"
        Id:"${id}"
        `);
      } else {
        console.log(`Error! The product code is already in use.
        Title:"${title}"
        Code:"${code}"
        `);
      }
    }
  } //Cómo usar: ejemplo.addProduct('titulo' , 'descripcion' , precio , 'thumbnail' , 'codigo' , stock)

  //Método para obtener todos los productos
  getProducts() {
    console.log("Products:");
    console.log(this.products);
  } //Cómo usar: ejemplo.getProducts();

  //Método para obtener un producto con su ID
  getProductById(value) {
    let found = false;
    console.log("Product:");

    this.products.map((e) => {
      if (value === e.id) {
        console.log(e);
        found = true;
      }
    });
    if (!found) console.log("Error: Not found");
  } //Cómo usar: ejemplo.getProductById(el ID del producto);
}
