import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Tgamx</h2>

          <p>
            Tecnología gamer, periféricos premium y
            hardware para una experiencia sin límites.
          </p>
        </div>


        <div className="footer-links">

          <h3>Explorar</h3>

          <a href="#productos">
            Productos
          </a>

          <a href="#Contador">
            Contador
          </a>

          <a href="#contacto">
            Contacto
          </a>

          <a href="#productlist">
            Lista Productos
          </a>

          <a href="#todoapp">
            ToDo App
          </a>

        </div>


        <div className="footer-social">

          <h3>Redes</h3>

          <a href="#">
            Instagram
          </a>

          <a href="#">
            Discord
          </a>

          <a href="#">
            YouTube
          </a>

          <a href="#">
            Twitch
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()}
          {" "}Practicas Profesionalizantes II - Trabajo Practico N°6 - Isaias Ramses Casasola Duran
        </p>

      </div>

    </footer>
  );
}

export default Footer;