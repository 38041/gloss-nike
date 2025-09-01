import { useState } from 'react'
import './App.css'
import Liphoney from './assets/gloss-Liphoney.webp'
import bunny from './assets/gloss-bunny.webp'
import gloss from './assets/gloss-3.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Liphoney} alt="" className="img-prod"/>
              <h2>GLOSS FRAN BY FRANCINY EHLKE LIPHONEY</h2>
              <p className="desc">Referência:   40103  Modelo/Marca:  Mboom</p>
              <p className="preco">R$ 69,90</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span>(472)</div>
              <div className="off">- 15%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={gloss} alt="" className="img-prod"/>
              <h2>KIT FRAN GLOSSLICIOUS BY FRANCINY EHLKE</h2>
              <p className="desc">Referência:   12103 Modelo/Marca:   Mboom</p>
              <p className="preco">R$ 109,90</p>
              <div className="avaliacao">  <span>★ ★ ★ ☆ ☆</span>(128)</div>
              <div className="off">- 15%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={bunny} alt="" className="img-prod"/>
              <h2>GLOSS FRAN BY FRANCINY EHLKE LIP BUNNY</h2>
              <p className="desc">Referência:   40104   Modelo/Marca:   Mboom</p>
              <p className="preco">R$ 65,90</p>
              <div className="avaliacao">  <span>★ ★ ★ ★ ★</span>(28)</div>
              <div className="off">- 15%</div>
            </div>
          </a>

        </section>
        <section className="destaque"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
