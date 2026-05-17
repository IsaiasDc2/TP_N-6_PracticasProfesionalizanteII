import "./Header.css";

function Header() {
  return (
    <header className="header">

      <h1 className="logo">
        Tgamx
      </h1>

      <nav>
        <ul className="nav-list">

          <li>
            <a href="#productos">
              Productos
            </a>
          </li>

          <li>
            <a href="#Contador">
              Contador
            </a>
          </li>

          <li>
            <a href="#contacto">
              Contacto
            </a>
          </li>

          <li>
            <a href="#productlist">
              Lista Productos
            </a>
          </li>

          <li>
            <a href="#todoapp">
              ToDo App
            </a>
          </li>

        </ul>
      </nav>

    </header>
  );
}

export default Header;