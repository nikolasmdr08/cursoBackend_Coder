const Product = require('./product.js')

class ProductManager{
    products;

    constructor() {
        this.products = [];
    }

    getProducts() {
        return(this.products);
    }

    existProduct(_code){
        return this.products.find((product) => product.product.code === _code) ? true : false; 
    }

    addProduct(_title, _description, _price, _thumbnail, _code, _stock){
        //chequear si existe en array productos
        if(this.existProduct(_code)){
            console.error("El producto ya existe");
            return;
        }
        //chequeo que no falte ningun dato
        if(_title === "" || _description === "" || _price === "" || _thumbnail === "" || _code === "" || _stock === ""){
            console.error("Debe brindar todos los parametros");
            return;
        }
        //si no existe
        let product = new Product(_title,
            _description,
            _price,
            _thumbnail,
            _code,
            _stock);

        let countProducts = this.products.length
        let item = {id:countProducts+1, product:product}
        this.products.push(item);
    } 

    getProductById(_id){
        return this.products.find((product) => product.id === _id) ? this.products.find((product) => product.id === _id ): "Not Found";
    }
}

module.exports = ProductManager