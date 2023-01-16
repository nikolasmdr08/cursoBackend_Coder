/*
const product = new Product(1,"Manzana","Fruta",50,"",1,10)
product.imprimir()
*/

//Prueba class ProductManager
const Product = require('./product.js')
const ProductManager = require('./productManager.js')

//alta de items
const products = new ProductManager()


products.addProduct("Manzanas", "Fruta", 50, null, 1, 10)
products.addProduct("Pera", "Fruta", 10, null, 2, 10)
products.addProduct("Durazno", "Fruta", 20, null, 3, 10)
console.log(products.getProducts())
/*
//actualizar producto por ID
let productoUpdate= new Product("Frutilla", "Fruta", 20, null, 5, 10)
products.updateProduct(2,productoUpdate)
console.log(products.getProducts())

// borrar producto por ID
products.deleteProduct(3)
console.log(products.getProducts())
*/