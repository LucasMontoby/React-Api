import React, {useState,useEffect} from "react"
import { getAllProductos } from "../Services/productosService"
import ProductoItem from "./ProductoItem"

function Productos(){
  const titulo = "Listado de productos"
  const [productos,setProductos] = useState([])

  useEffect(
    ()=>{
      const result = async ()=>{
        try{
          const responseData = await getAllProductos()
          console.log(responseData.data)
          setProductos(responseData.data.results)
        }catch(e){
          console.log(e)
        }
       
      }
      result()
    },
    []
  )

  const filtrar = ()=>{
    setProductos([{
      id:3,
      title:"iPhone",
      price:2000,
      category:"Celulares" 
    }])
 }

 
    return (
      <div>
        <h1>{titulo}</h1>
        {productos.map(producto => <ProductoItem id={producto.id} title={producto.title} price={producto.price} category={producto.category} />)}
        <button onClick={filtrar}>Filtrar</button>
      </div>
    )
 } 

export default Productos;

