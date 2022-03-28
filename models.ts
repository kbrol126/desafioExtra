import * as jsonfile from "jsonfile";

class Product {
  id: number;
  name: string;
}
class ProductCollection {
  getAll() {
    return jsonfile.readFile("./productos.json").then((productos) => {
      return productos;
    });
  }
  getById(id: number) {
    const devolucion = this.getAll().then((productos) => {
      const resultado = productos.find((producto) => {
        return producto.id == id;
      });
      return resultado;
    });
    return devolucion;
  }
}

export { Product, ProductCollection };
