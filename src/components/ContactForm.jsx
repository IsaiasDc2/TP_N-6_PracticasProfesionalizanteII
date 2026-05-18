import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [intentoEnviar, setIntentoEnviar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, email, mensaje });
    alert("Formulario enviado");
  };

  const formularioValido = nombre !== "" && email !== "" && mensaje !== "";

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Contacto</h2>

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {intentoEnviar && nombre === "" && (
          <span className="error">⚠️ El nombre es obligatorio</span>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {intentoEnviar && email === "" && (
          <span className="error">⚠️ El email es obligatorio</span>
        )}

        <textarea
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        {intentoEnviar && mensaje === "" && (
          <span className="error">⚠️ El mensaje es obligatorio</span>
        )}

        <button
          type="submit"
          disabled={!formularioValido}
          onClick={() => setIntentoEnviar(true)}
        >
          Enviar
        </button>
      </form>

      <div className="preview">
        <h3>Preview en vivo</h3>
        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Mensaje:</strong> {mensaje}</p>
      </div>
    </div>
  );
}

export default ContactForm;