import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Contador from "./components/Contador";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
import ProductList from "./components/ProductList";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="app">

      <Header />

      <section id="productos">

        <h1>Teclados Mecánicos</h1>

        <div className="cards-container">

          <Card
            titulo="Razer Huntsman V3 Pro TKL"
            descripcion="Utiliza switches ópticos analógicos de 2ª generación para una precisión extrema en gaming competitivo"
            imagen="https://imgs.search.brave.com/H_JfXP2_5H2ztB3t0WoqA4tZetPVyVr9Ad7xgCRyTJE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJhbmRyb2lk/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8xMS9yYXpl/ci1odW50c21hbi12/My10a2wtMTAtMTIw/MHg4MDAuanBn"
            precio={326122}
          >
            <button>
              Comprar
            </button>
          </Card>


          <Card
            titulo="ASUS ROG Strix Scope RX TKL Wireless Deluxe"
            descripcion="Destaca por sus switches ROG RX ópticos-mecánicos y conectividad inalámbrica de bajo retraso."
            imagen="https://imgs.search.brave.com/n3KlEz6bgT3AHV_LEqfa68PNjAcYNaX9m9OqemdX1Ng/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kbGNk/bndlYmltZ3MuYXN1/cy5jb20vZmlsZXMv/bWVkaWEvRjE4QTlB/N0ItOUQ4RS00NTNB/LUJGMEMtRTkwMzEw/NDREM0E1L2ltZy9u/ZXcyMDIyL2Vzcy5q/cGc"
            precio={288913}
          >
            <button>
              Comprar
            </button>
          </Card>


          <Card
            titulo="Corsair K100"
            descripcion="Un modelo completo con switches Cherry MX/Corsair OPX"
            imagen="https://imgs.search.brave.com/f4CiD7UJxokLOPLkjGWrJvs80LoJRdxe2LPUEw_gieU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1Vj/ZjhmNHM4UTJURlo4/YlVFQnVYRUguanBn"
            precio={370000}
          >
            <button>
              Comprar
            </button>
          </Card>

        </div>



        <h1>
          Auriculares Gamers
        </h1>


        <div className="cards-container">

          <Card
            titulo="HyperX Cloud III Wireless"
            descripcion="Excelente opción para jugadores"
            imagen="https://imgs.search.brave.com/jDXSVTL45CXUh0YJ2vNcm8GyKS5XVLINbi2qedLcUrE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0Rw/OG5EcEhweGlmR2Fw/UzdtMlJZVVguanBn"
            precio={264229}
          >
            <button>
              Comprar
            </button>
          </Card>



          <Card
            titulo="Logitech G535 Lightspeed"
            descripcion="Combina ligereza"
            imagen="https://imgs.search.brave.com/8IVz9DcsKrweN2jco1JOOG7h_JDdhjmX9_UuzBl0qmE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dHJ1c3RlZHJldmll/d3MuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zaXRlcy83LzIw/MjIvMDYvTG9naXRl/Y2gtRzUzNS1MaWdo/dHNwZWVkLTctc2Nh/bGVkLTgyMHg0NjEu/anBn"
            precio={208050}
          >
            <button>
              Comprar
            </button>
          </Card>



          <Card
            titulo="Redragon Zeus X H510-WL"
            descripcion="Destaca por relación calidad-precio"
            imagen="https://imgs.search.brave.com/tOc08f3paHhPylhTnZUx2CXTmzucgk0yzQkBpumYsXE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9udW1i/ZXJvbmVzdG9yZS5u/ZXQvaW1hZ2UvY2F0/YWxvZy9QUk9EVUNU/L0FVRElPL0dBTUlO/RyUyMEhFQURTRVQv/UkVEUkFHT04vSDUx/MC1XTCUyMFpFVVMt/WC9yZWRyYWdvbi16/ZXVzLXgtaDUxMC13/aXJlbGVzcy1yZ2It/Ny0xLXN1cnJvdW5k/LXNvdW5kLTUzbW0t/YXVkaW8tZHJpdmVy/cy1pbi1tZW1vcnkt/Zm9hbS1lYXItcGFk/cy1nYW1pbmctaGVh/ZHNldC0oMTQpLmpw/Zw"
            precio={157300}
          >
            <button>
              Comprar
            </button>
          </Card>

        </div>

      </section>



      <section id="Contador">

        <Contador />

      </section>



      <section id="contacto">

        <ContactForm />

      </section>



      <section id="productlist">

        <ProductList />

      </section>



      <section id="todoapp">

        <TodoApp />

      </section>



      <Footer />

    </div>
  );
}

export default App;