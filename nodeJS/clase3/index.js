class Product{
    constructor(_title, _description, _price, _thumbnail, _code, _stock){
        this.title = _title;
        this.description = _description;
        this.price = _price;
        this.thumbnail = _thumbnail;
        this.code = _code;
        this.stock = _stock;
    }
}

class ProductManager{
    products;

    constructor() {
        this.products = [];
    }

    getProducts() {
        return(this.products);
    }

    existProduct(_code){
        console.log(_code)
        console.log(this.products)
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

//instancia
const products = new ProductManager();

console.warn("controlo que imprima array vacio")
console.log(products.getProducts());

console.warn("carga de productos")
products.addProduct("Manzanas", "Fruta", 50, null, 1, 10)
products.addProduct("Pera", "Fruta", 10, null, 2, 10)
products.addProduct("Durazno", "Fruta", 20, null, 3, 10)
console.log(products.getProducts());

console.warn("prueba de duplicado")
products.addProduct("Manzanas", "Fruta", 50, null, 1, 10)
console.log(products.getProducts());//verifico si lo carga

console.warn("buscar elemento por id")
console.log(products.getProductById(1))
console.log(products.getProductById(50))

console.log(products.existProduct(1))
