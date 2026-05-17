import "./Card.css";

function Card({
  titulo,
  descripcion,
  imagen,
  precio,
  children,
}) {
  return (
    <div className="card">

      <img
        src={imagen}
        alt={titulo}
      />

      <h2>{titulo}</h2>

      <p>{descripcion}</p>

      <h3>${precio}</h3>

      {children}

    </div>
  );
}

export default Card;