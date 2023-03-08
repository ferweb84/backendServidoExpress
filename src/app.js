import ProductManager from "./productManager.js";
import express from "express";
// const express = require ("express")

const manager = new ProductManager();
const app = express();

app.get ("/products",async(req,res)=>{
    try{
        const consulta = await manager.getProducts();
        let limit =  Number.parseInt(req.query.limit)

        if(limit){
            const resultado= consulta.slice(0,limit)
            res.send(resultado);
        }else{
            res.send(consulta);
        }
    }catch(error){
        console.log(error)
    }
});

app.get ("/products/:id",async(req,res)=>{
    try{
        let id = req.params.id
        console.log(id)
        const consultaId = await manager.getProductById(Number.parseInt(id));
        if (!consultaId){
            console.log("ej");
            return res.send({error: "El producto con ese id no se encuentra en el archivo"});
        }else{
            res.send(consultaId);
        }       
    }catch(error){
        console.log(error);
    }
});


app.listen(8080, ()=>{
    try {
        console.log ("Servidor arriba en el puerto 8080");
    }catch (error){
        console.log(error);
    }
    
});

// const app = express();
// const products=[
//     {id:"1",title: "boina",talle: "M", description:"lisa color gris",price: 4500,thumbnail:"sin foto",code: "abs123",stock: 8},
//     {id:"2",title: "gorra",talle: "S",description:"lisa color azul",price: 3500,thumbnail:"sin foto",code: "abs133",stock: 4},
//     {id:"3",title: "bufanda",talle: "L", description:"lisa color gris",price: 4500,thumbnail:"sin foto",code: "abs123",stock: 8},
//     {id:"4",title: "billetera",talle: "XS",description:"lisa color azul",price: 3500,thumbnail:"sin foto",code: "abs133",stock: 4},           
           
// ];

// app.get ("/", (req,res)=>{
//     res.send(products);
// });

// app.get ("/:idProduct", (req, res)=>{
//     const idProduct = req.params.idProduct;
//     const product = products.find((p) => p.id===idProduct);
//     if (!product)return res.send ({error: "Producto no encontrado"});
//     res.send(product);
// });

// app.get ("/", (req,res)=>{
//     const talle = req.query.talle; 
//     if (!talle || (talle !== "M" && talle !== "S"))
//     return res.send({products});

//     let productsFiltrados = products.filter(
//         (product)=> product.talle === talle
//     );
//     res.send({products: productsFiltrados});
// });



// app.get ("/saludo", (req,res)=> {
//     res.send("Hola a todos, pero ahora desde Express");
// });

// app.get ("/bienvenida", (req,res)=> {
//     res.send("Bienvenidos todos a express");
// });

// app.get ("/usuario", (req,res)=> {
//     res.send({nombre:"alfredo", apellido:"mercurio", edad: 60, correo: "alfredo.mercurio@gmail.com"});
// });

