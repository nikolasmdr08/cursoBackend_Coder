const fs = require('fs');

class fileManager{
    constructor(){
        this.path = './productos.json'
    }

    async crearArchivo(_info){
        await fs.writeFile('./productos.json','[]',(error)=>{
            if(error) return console.log(error)
        })
    }
}

module.exports = fileManager