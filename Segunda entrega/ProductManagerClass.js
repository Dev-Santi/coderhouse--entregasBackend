const fs = require("fs");

class ProductManager {
  constructor(filename) {
    this.filename = filename;
  }

  async #filenameExists() {
    const filenameExists = fs.existsSync(this.filename);
    if (!filenameExists) {
      await fs.promises.writeFile(this.filename, "[]");
    }
  }

  async #getFileParsed() {
    try {
      const file = await fs.promises.readFile(this.filename, "utf-8");
      const fileParsed = JSON.parse(file);
      return fileParsed;
    } catch (error) {
      throw error;
    }
  }

  async addProduct(newProduct) {
    try {
      if (
        typeof newProduct.title === "string" &&
        typeof newProduct.description === "string" &&
        typeof newProduct.price === "number" &&
        typeof newProduct.thumbnail === "string" &&
        typeof newProduct.code === "string" &&
        typeof newProduct.stock === "number"
      ) {
        const product = {
          id: Date.now(),
          ...newProduct,
        };
        await this.#filenameExists();
        const fileParsed = await this.#getFileParsed();
        fileParsed.push(product);
        await fs.promises.writeFile(this.filename, JSON.stringify(fileParsed));
        console.log("success!");
      } else {
        console.log("Error! There is/are invalid property/ies.");
      }
    } catch (error) {
      throw error;
    }
  }

  async getProducts() {
    try {
      await this.#filenameExists();
      const fileParsed = await this.#getFileParsed();
      console.log(fileParsed);
    } catch (error) {
      throw error;
    }
  }

  async getProductById(ident) {
    try {
      await this.#filenameExists();
      const fileParsed = await this.#getFileParsed();

      const indexOfProduct = fileParsed.findIndex(
        (product) => product.id == ident
      );

      if (indexOfProduct !== -1) console.log(fileParsed[indexOfProduct]);
      else console.log("Product not found");
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(ident, field) {
    try {
      await this.#filenameExists();
      const fileParsed = await this.#getFileParsed();

      const indexOfProduct = fileParsed.findIndex(
        (product) => product.id == ident
      );

      if (indexOfProduct !== -1) {
        fileParsed[indexOfProduct] = {
          ...fileParsed[indexOfProduct],
          ...field,
        };
        await fs.promises.writeFile(this.filename, JSON.stringify(fileParsed));
        console.log("success!");
      } else console.log("Product not found");
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(ident) {
    try {
      await this.#filenameExists();
      const fileParsed = await this.#getFileParsed();

      const indexOfProduct = fileParsed.findIndex(
        (product) => product.id == ident
      );

      if (indexOfProduct !== -1) {
        fileParsed.splice(indexOfProduct, 1);
        await fs.promises.writeFile(this.filename, JSON.stringify(fileParsed));
        console.log("success!");
      } else console.log("Product not found");
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductManager;
