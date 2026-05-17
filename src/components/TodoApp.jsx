import { useState } from "react";
import "./TodoApp.css";

function TodoApp(){

const [texto,setTexto]=useState("");
const [tareas,setTareas]=useState([]);

function agregar(){

if(texto.trim()==="") return;

setTareas([
...tareas,
{
id:Date.now(),
texto,
completada:false
}
]);

setTexto("");
}

function eliminar(id){

setTareas(
tareas.filter(
t=>t.id!==id
)
);

}

function completar(id){

setTareas(
tareas.map(
t=>
t.id===id
?
{
...t,
completada:
!t.completada
}
:
t
)
);

}

const pendientes =
tareas.filter(
t=>!t.completada
).length;

return(

<div className="todo">

<h1>ToDo App</h1>

<input
value={texto}
onChange={(e)=>
setTexto(
e.target.value
)
}
placeholder="Nueva tarea"
/>

<button
onClick={agregar}
>
Agregar
</button>

<h3>
Pendientes:
{pendientes}
</h3>

{

tareas.length===0

?

<p>No hay tareas</p>

:

tareas.map(t=>(

<div
key={t.id}
className="tarea"
>

<span
style={{
textDecoration:
t.completada
?
"line-through"
:
"none"
}}
>

{t.texto}

</span>

<button
onClick={()=>
completar(t.id)
}
>

✓

</button>

<button
onClick={()=>
eliminar(t.id)
}
>

Eliminar

</button>

</div>

))

}

</div>

)

}

export default TodoApp;