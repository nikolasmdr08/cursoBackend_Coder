const Product = require('./product.js')
const FileManager = require('./fileManager.js')

class ProductManager{
    products;

    constructor() {
        //let fm = new FileManager()
        //this.products = fm.cargarArchivo()
        this.products = []
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
        let fm = new FileManager()
        fm.guardarArchivo(this.products)
    } 

    updateProduct(_id, _Product){
        let producto = this.getProductById(_id)
        if(producto == "Not Found"){
            console.log("No existe el id seleccionado")
        }
        else{
            producto.product = _Product
            let fm = new FileManager()
            fm.guardarArchivo(this.products)
        }
    }

    deleteProduct(_id){
        let producto = this.getProductById(_id)
        if(producto == "Not Found"){
            console.log("No existe el id seleccionado")
        }
        else{
            producto.product = null
            let fm = new FileManager()
            fm.guardarArchivo(this.products)
        }
    }

    getProductById(_id){
        return this.products.find((product) => product.id === _id) ? this.products.find((product) => product.id === _id ): "Not Found";
    }
}

module.exports = ProductManager