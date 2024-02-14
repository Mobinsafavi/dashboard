import APIHandler from "../../ApiHandler/ApiInstance";

class ProductController {
  static getList() {
    return APIHandler.call({
      url: "https://jsonplaceholder.typicode.com/todos",
    });
  }
}

export default ProductController;
