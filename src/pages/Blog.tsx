export default function Blog() {
  const categorias = ["Todas", "Noticias", "Historias", "Tradiciones", "Eventos", "Naturaleza", "Testimonios"]

  const featuredPost = {
    titulo: "La cosecha de café 2025: Una tradición que une generaciones",
    resumen: "Este año, las familias de Huehuetla celebran una cosecha excepcional de café que fortalece lazos comunitarios y preserva conocimientos ancestrales.",
    autor: "María Elena Jiménez",
    fecha: "15 de junio, 2025",
    categoria: "Tradiciones",
    imagen: "https://images.unsplash.com/photo-1509785307763-d82e0c39f5b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tiempo_lectura: "5 min"
  }

  const blogPosts = [
    {
      titulo: "Nueva escuela bilingüe abre sus puertas",
      resumen: "La comunidad celebra la inauguración de la nueva escuela que ofrecerá educación en español y totonaco.",
      autor: "Profesor Miguel Tlahuel",
      fecha: "12 de junio, 2025",
      categoria: "Noticias",
      imagen: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tiempo_lectura: "3 min"
    },
    {
      titulo: "El regreso de las mariposas monarca",
      resumen: "Los bosques de Huehuetla vuelven a recibir la visita de estas hermosas viajeras en su migración anual.",
      autor: "Carlos Tlahuel",
      fecha: "10 de junio, 2025",
      categoria: "Naturaleza",
      imagen: "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tiempo_lectura: "4 min"
    },
    {
      titulo: "Doña Carmen y sus recetas ancestrales",
      resumen: "A los 78 años, Doña Carmen comparte los secretos de la cocina totonaca con las nuevas generaciones.",
      autor: "Ana Hernández",
      fecha: "8 de junio, 2025",
      categoria: "Historias",
      imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tiempo_lectura: "6 min"
    },
    {
      titulo: "Festival de Artesanías: Preparativos en marcha",
      resumen: "Los artesanos locales se preparan para el festival anual que mostrará lo mejor de las tradiciones creativas.",
      autor: "Roberto Xólotl",
      fecha: "5 de junio, 2025",
      categoria: "Eventos",
      imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tiempo_lectura: "4 min"
    },
    {
      titulo: "Los jóvenes guardianes del totonaco",
      resumen: "Un grupo de estudiantes forma un círculo de conversación para fortalecer el uso de la lengua ancestral.",
      autor: "Sofía Jiménez",
      fecha: "3 de junio, 2025",
      categoria: "Tradiciones",
      imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tiempo_lectura: "5 min"
    },
    {
      titulo: "Mi primer día enseñando en Huehuetla",
      resumen: "Reflexiones de una joven maestra que llegó a nuestra comunidad para compartir conocimientos y aprender de nuestras tradiciones.",
      autor: "Lupita Morales",
      fecha: "1 de junio, 2025",
      categoria: "Testimonios",
      imagen: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tiempo_lectura: "7 min"
    }
  ]

  const colaboradores = [
    {
      nombre: "María Elena Jiménez",
      rol: "Cronista de la comunidad",
      posts: 23,
      especialidad: "Tradiciones y historia oral",
      avatar: "👩‍🦳"
    },
    {
      nombre: "Carlos Tlahuel",
      rol: "Fotógrafo naturalista",
      posts: 18,
      especialidad: "Naturaleza y paisajes",
      avatar: "📷"
    },
    {
      nombre: "Profesor Miguel Tlahuel",
      rol: "Educador bilingüe",
      posts: 15,
      especialidad: "Educación y lengua totonaca",
      avatar: "👨‍🏫"
    },
    {
      nombre: "Roberto Xólotl",
      rol: "Maestro artesano",
      posts: 12,
      especialidad: "Artesanías tradicionales",
      avatar: "🎭"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Blog Comunitario</h1>
          <p className="text-lg text-gray-700">
            Las voces de Huehuetla: donde cada residente puede compartir sus historias, noticias y experiencias que enriquecen nuestra comunidad.
          </p>
        </div>

        {/* Estadísticas del Blog */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">47</div>
            <div className="text-gray-600">Artículos publicados</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">28</div>
            <div className="text-gray-600">Colaboradores activos</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">156</div>
            <div className="text-gray-600">Comentarios</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
            <div className="text-gray-600">Categorías</div>
          </div>
        </div>

        {/* Artículo Destacado */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={featuredPost.imagen}
                alt={featuredPost.titulo}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-2">
                  Destacado
                </span>
                <span className="ml-2 text-sm text-orange-600 font-medium">
                  {featuredPost.categoria}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{featuredPost.titulo}</h2>
              <p className="text-gray-600 mb-4">{featuredPost.resumen}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>👤 {featuredPost.autor}</span>
                  <span>📅 {featuredPost.fecha}</span>
                  <span>⏱️ {featuredPost.tiempo_lectura}</span>
                </div>
              </div>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Leer artículo completo
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Contenido Principal */}
          <div className="lg:col-span-3 space-y-8">
            {/* Filtros */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Categorías</h2>
              <div className="flex flex-wrap gap-2">
                {categorias.map((categoria) => (
                  <button
                    key={categoria}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors"
                  >
                    {categoria}
                  </button>
                ))}
              </div>
            </div>

            {/* Lista de Artículos */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Artículos Recientes</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <article key={post.titulo} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={post.imagen}
                      alt={post.titulo}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          post.categoria === 'Noticias' ? 'bg-red-100 text-red-800' :
                          post.categoria === 'Historias' ? 'bg-purple-100 text-purple-800' :
                          post.categoria === 'Tradiciones' ? 'bg-blue-100 text-blue-800' :
                          post.categoria === 'Eventos' ? 'bg-green-100 text-green-800' :
                          post.categoria === 'Naturaleza' ? 'bg-emerald-100 text-emerald-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {post.categoria}
                        </span>
                        <span className="text-xs text-gray-500">⏱️ {post.tiempo_lectura}</span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
                        {post.titulo}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{post.resumen}</p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>👤 {post.autor}</span>
                        <span>📅 {post.fecha}</span>
                      </div>

                      <button className="mt-4 w-full text-blue-600 font-medium hover:text-blue-800 transition-colors">
                        Leer más →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Formulario de Contribución */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">📝 Comparte tu Historia</h3>
              <p className="text-gray-600 text-sm mb-4">
                ¿Tienes una historia, noticia o experiencia que quieras compartir con la comunidad?
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                  <option>Selecciona una categoría</option>
                  <option>Noticias</option>
                  <option>Historias</option>
                  <option>Tradiciones</option>
                  <option>Eventos</option>
                  <option>Naturaleza</option>
                  <option>Testimonios</option>
                </select>
                <input
                  type="text"
                  placeholder="Título de tu artículo"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <textarea
                  placeholder="Comparte tu historia..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Enviar para Revisión
                </button>
              </form>
            </div>

            {/* Colaboradores Destacados */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">👥 Colaboradores Activos</h3>
              <div className="space-y-4">
                {colaboradores.map((colaborador) => (
                  <div key={colaborador.nombre} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl">{colaborador.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-800 text-sm truncate">{colaborador.nombre}</p>
                      <p className="text-xs text-gray-500">{colaborador.rol}</p>
                      <p className="text-xs text-blue-600">{colaborador.posts} artículos</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                Ver todos los colaboradores →
              </button>
            </div>

            {/* Categorías Populares */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">📊 Categorías Populares</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Tradiciones</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Historias</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">9</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Noticias</span>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Naturaleza</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Eventos</span>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">6</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Llamada a la Acción */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Tu Voz Importa en Huehuetla</h2>
          <p className="text-xl mb-6">
            Cada historia fortalece nuestra comunidad. Comparte tus experiencias y mantengamos viva la memoria colectiva de nuestro pueblo.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Publicar mi Historia
            </button>
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
              Leer más Historias
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
