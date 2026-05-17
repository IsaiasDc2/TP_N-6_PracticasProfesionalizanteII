import { useState } from "react";
import Card from "./Card";

function ProductList() {

  const productos = [
    {
      id:1,
      nombre: "Logitech G Pro X2 SuperStrike",
      precio:213917,
      categoria:"Periféricos",
      stock:true,
      descripcion:"Mouse RGB",
      imagen:"https://imgs.search.brave.com/_toOAf6tQJRbXiotYBgT92_Joc6CtZ5MHKHzngAwrx0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvbG9n/aXRlY2gtZy1wcm8t/eDItc3VwZXJzdHJp/a2UtcmV2aWV3LWEt/ZmFrZS1jbGljay1j/b3VsZC12MC11NFhK/c2NXamM5V3lZR01J/MFkzSVljUFIyczFG/WXdpemoxU0dYS0lo/Vk8wLmpwZWc_d2lk/dGg9NjQwJmNyb3A9/c21hcnQmYXV0bz13/ZWJwJnM9YThhODI4/NzBlNWU2OGM5MmU0/NzYzNDNmMWNmODYx/Nzg0ZWEyYmEzNA"
    },

    {
      id:2,
      nombre:"Monitor 144Hz",
      precio:180000,
      categoria:"Monitores",
      stock:true,
      descripcion:"Monitor gaming",
      imagen:"https://imgs.search.brave.com/nztOTk7RtDP9MRF-u157Aj26CoCGSzdbj4Ue5gQAdv8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvdmFudGFnZS5j/b20vZnVsbHNpemUv/MTA4NTY1MDg1Ni5K/UEc"
    },

    {
      id:3,
      nombre:"SSD 1TB",
      precio:300000,
      categoria:"Hardware",
      stock:false,
      descripcion:"SSD rápido",
      imagen:"https://imgs.search.brave.com/KXYSfV90AwFNpWSA-k-2xWC_lFlviBP4nvzoRnA3QsA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcHAu/Y29udGFiaWxpdW0u/Y29tL2ZpbGVzL2V4/cGxvcmVyLzcwMjYv/UHJvZHVjdG9zLVNl/cnZpY2lvcy9jb25j/ZXB0by0yMDY3NzE1/NS5qcGc"
    },

    {
      id:4,
      nombre:"Teclado Mecanico Aula",
      precio:90000,
      categoria:"Periféricos",
      stock:true,
      descripcion:"Teclado mecánico",
      imagen:"https://imgs.search.brave.com/v1SZKeACLD3t8fOR22C-py0eDPLgunWPL80CPux2uyE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzYzODA0MC1DQlQ3/ODE5NDA0MjU2OV8w/ODIwMjQtVi53ZWJw"
    },

    {
      id:5,
      nombre:"Notebook",
      precio:650000,
      categoria:"PC",
      stock:false,
      descripcion:"Notebook gamer",
      imagen:"https://imgs.search.brave.com/6eWwaUGYYDtupbD7tITFoTBuOFiqpmpO-cqMvLJ93mU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF85/ODg0NzgtTUxVNzE3/MDg5Nzc0MDRfMDky/MDIzLUYud2VicA"
    },

    {
      id:6,
      nombre:"Auriculares",
      precio:75000,
      categoria:"Periféricos",
      stock:true,
      descripcion:"Auriculares RGB",
      imagen:"https://imgs.search.brave.com/oMykmGMOOf0ykSqXQjPWDGZe5u6GD7OzlEjaZ1dMEjI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY5NzYzOC1NTEE5/OTUxNTUxMDM5MF8x/MTIwMjUtRS53ZWJw"
    }
  ];


  const [categoria,setCategoria] =
  useState("Todas");

  const [soloStock,setSoloStock] =
  useState(false);


  const filtrados =
  productos.filter(producto =>

    (categoria==="Todas"
      ||
    producto.categoria===categoria)

    &&

    (!soloStock
      ||
    producto.stock)

  );


  return(

<div>

<h1>
Lista Productos
</h1>


<select
onChange={
(e)=>
setCategoria(
e.target.value
)
}
>

<option>
Todas
</option>

<option>
Periféricos
</option>

<option>
PC
</option>

<option>
Hardware
</option>

<option>
Monitores
</option>

</select>


<label>

<input
type="checkbox"

onChange={()=>
setSoloStock(
!soloStock
)
}
/>

Solo stock

</label>


<div className="cards-container">

{

filtrados.length > 0

?

filtrados.map(
producto => (

<Card

key={
producto.id
}

titulo={
producto.nombre
}

descripcion={
producto.descripcion
}

imagen={
producto.imagen
}

precio={
producto.precio
}

/>

)
)

:

<h2>
No hay productos
</h2>

}

</div>

</div>

)

}

export default ProductList;