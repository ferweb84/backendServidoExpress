import ProductManager from "./productManager.js";


const manager = new ProductManager();
    
const env= async()=> {
    let primeraConsulta= await manager.getProducts();
    console.log (primeraConsulta);

    const product ={
        title: "boina",
        description:"lisa color gris",
        price: 4500,
        thumbnail:"sin foto",
        code: "abs123",
        stock: 7,
    };
    const product2 ={
        title: "billetera",
        description:"lisa color gris",
        price: 4500,
        thumbnail:"sin foto",
        code: "abs1223",
        stock: 5,
    };
    const product3 ={
        title: "cinto",
        description:"lisa color gris",
        price: 2500,
        thumbnail:"sin foto",
        code: "abs223",
        stock: 8,
    };

    let segundaConsulta = await manager.getProducts();
    console.log (segundaConsulta);
    
    let productoId = await manager.getProductById(9);
    console.log(productoId);

    let result = await manager.addProduct (product);
    console.log (result);
    let result2= await manager.addProduct (product2);
    console.log (result2);
    let result3= await manager.addProduct (product3);
    console.log (result3);

    const changes = {
        title:  "gorra",
        price: 3555,
        stock: 9999,
    };
    
    await manager.updateProduct(12,changes);
    console.log ();

    await manager.deleteProduct(4);
    console.log ();

}

env();
