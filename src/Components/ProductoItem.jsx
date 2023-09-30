import React, {useEffect} from "react";

import { Link } from "react-router-dom";

function ProductoItem({
    id,
    title,
    category,
    price
})

{
    useEffect(
        ()=>{
            console.log('Este es un mensaje de registro en la consola', title);
        },
        [title]
    )

    return(
        <div className="card">
            <h2>{ title }</h2>
            <p>{ category }</p>
            <p>{ price }</p>
            <button><Link to={`/producto/${id}`}>Ver producto</Link></button>
        </div>
    )
}

export default ProductoItem;