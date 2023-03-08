import fs from "fs";
// const fs= require("fs");
// const {Blob}=require ("buffer");

export default class ProductManager {
    constructor() {
        this.path = "./src/files/Productos.json";
        this.products = [];
        
    }
    getProducts = async () => {
        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const result = JSON.parse(data);
            console.log (result);
            return result;
        } else {
            return [];
        }
    };
    addProduct = async(product)=>{ 
        console.log(product);
        const products = await this.getProducts();
        if (!product.title || !product.description || ! product.price || !product.thumbnail || !product.code || !product.stock);
        console.error('Todos los campos son obligatorios');
        
        if (products.length === 0){
            product.id = 1;
        }else{
            product.id= products[products.length -1].id+1  ; //ID AUTOINCREMENTABLE
        }
        products.push(product);
        console.log(product);
        await fs.promises.writeFile(this.path, JSON.stringify(products,null,"\t"));
        return product;
    };

    getProductById= async(id)=>{
        if (fs.existsSync(this.path)) {           
            const result=await this.getProducts();
            let productfound = result.find ((product)=> product.id === id );
            if (!productfound){
                return " Error el Id no existe";
            }else{
                console.log(productfound)
                return productfound;
            }
    }
    };

    // updateProduct = async(id, changes)=>{
    //     try { this.readFile();
    //          const productIndex=this.products.findIndex((product)=>product.id===id);
    //          if(productIndex===-1){
    //             console.log ("producto no encontrado");
    //             return;
    //          }
    //          const updateProduct={...this.products[productIndex],changes};
    //          this.products[productIndex]=updateProduct;
    //          await this.saveProducts();
    //          console.log(`Producto actualizado ${updateProduct.title}`);
    //         }catch (error){
    //             console.log(`Error al leer o actualizar el archivo ${this.path}:${error.message}`);
    //             throw error;
    //         }
    //     };

    updateProduct = async(id,changes)=>{
        const products = await this.getProducts();
        const buscarId =products.find((product)=>product.id===id);
        if (buscarId===-1){
            console.log ("producto encontrado");
            
            try {
                const productUpdate =  {...this.products [productoExistente],changes};
                this.products[productUpdate]=productUpdate;
                }catch (error){
                    console.log(`Error al leer o actualizar el archivo ${this.path}:${error.message}`);
                    throw error;

    }
}

    deleteProduct = async(id)=>{
        const product = await this.getProductById(id);
        if (product != undefined){
            const products=await this.getProducts();
            const newProducts = products.filter(prod=>prod.id != id)
            await fs.promises.writeFile(this.path, JSON.stringify(newProducts, null, '\t'));
            return newProducts;
        }
   
    }
}
}

//writeFile    readFile    appendFile   unlink   exists