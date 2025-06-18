import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Historia from './pages/Historia'
import NuestrosLugares from './pages/NuestrosLugares'
import Artesanias from './pages/Artesanias'
import Gastronomia from './pages/Gastronomia'
import Galeria from './pages/Galeria'
import Idioma from './pages/Idioma'
import Blog from './pages/Blog'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/idioma" element={<Idioma />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/lugares" element={<NuestrosLugares />} />
          <Route path="/artesanias" element={<Artesanias />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
