const fs = require('fs');

class fileManager{
    constructor(){
        this.path = './productos.json'
    }

    existeArchivo(){
        return (!fs.existsSync(this.path)) ? false : true;
    }

    async cargarArchivo(){
        if(this.existeArchivo()){
            let array = await fs.promises.readFile(this.path,"utf-8")
            return await JSON.parse(array);
        }
        else{
            let array = []
            fs.promises.writeFile(this.path, JSON.stringify(array))
            return array
        }
    }

    guardarArchivo(array){
        try{
            fs.writeFile(this.path, JSON.stringify(array))
        }
        catch(error){
            console.log(error)
        }
    }

}

module.exports = fileManager