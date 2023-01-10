class Product{
    constructor(_title,
                _description,
                _price,
                _thumbnail,
                _code,
                _stock){
        this.title = _title,
        this.description = _description,
        this.price = _price,
        this.thumbnail = _thumbnail,
        this.code = _code,
        this.stock = _stock
    }

    imprimir(){
        console.log(this.id,
                    this.title,
                    this.description,
                    this.price,
                    this.thumbnail,
                    this.code,
                    this.stock)
    }
}

module.exports = Product