//Prueba clase Product
/*
const Product = require('./product.js')
const product = new Product(1,"Manzana","Fruta",50,"",1,10)
product.imprimir()
*/
//Prueba class ProductManager

const ProductManager = require('./productManager.js')
const products = new ProductManager()
products.addProduct("Manzanas", "Fruta", 50, null, 1, 10)
products.addProduct("Pera", "Fruta", 10, null, 2, 10)
products.addProduct("Durazno", "Fruta", 20, null, 3, 10)
console.log(products.getProducts())

