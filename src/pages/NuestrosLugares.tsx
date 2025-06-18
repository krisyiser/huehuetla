export default function NuestrosLugares() {
  const lugares = [
    {
      nombre: "Plaza Principal",
      descripcion: "Corazón del municipio donde se realizan las festividades más importantes",
      categoria: "Centro Histórico",
      imagen: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "blue"
    },
    {
      nombre: "Cerro del Águila",
      descripcion: "Mirador natural con vistas panorámicas de la Sierra Norte de Puebla",
      categoria: "Naturaleza",
      imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "green"
    },
    {
      nombre: "Cascada de los Ancestros",
      descripcion: "Cascada sagrada donde los antiguos totonacos realizaban ceremonias",
      categoria: "Naturaleza",
      imagen: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "cyan"
    },
    {
      nombre: "Iglesia de San Miguel",
      descripcion: "Templo colonial del siglo XVII con arquitectura barroca",
      categoria: "Patrimonio",
      imagen: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "yellow"
    },
    {
      nombre: "Mercado de Artesanías",
      descripcion: "Espacio donde los artesanos locales exhiben sus creaciones tradicionales",
      categoria: "Cultural",
      imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "purple"
    },
    {
      nombre: "Bosque de Niebla",
      descripcion: "Ecosistema único con flora y fauna endémica de la región",
      categoria: "Naturaleza",
      imagen: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "emerald"
    }
  ]

  const categorias = ["Todos", "Centro Histórico", "Naturaleza", "Patrimonio", "Cultural"]

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Nuestros Lugares</h1>
          <p className="text-lg text-gray-700">
            Explora los sitios más emblemáticos de Huehuetla, donde la naturaleza y la cultura se encuentran.
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Categorías</h2>
          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Lugares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lugares.map((lugar, index) => (
            <div key={lugar.nombre} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${lugar.imagen})` }}
              >
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                    lugar.color === 'blue' ? 'bg-blue-600' :
                    lugar.color === 'green' ? 'bg-green-600' :
                    lugar.color === 'cyan' ? 'bg-cyan-600' :
                    lugar.color === 'yellow' ? 'bg-yellow-600' :
                    lugar.color === 'purple' ? 'bg-purple-600' :
                    'bg-emerald-600'
                  }`}>
                    {lugar.categoria}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{lugar.nombre}</h3>
                <p className="text-gray-600 mb-4">{lugar.descripcion}</p>

                <div className="flex items-center justify-between">
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Ver más detalles →
                  </button>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                      📍
                    </button>
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                      📷
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mapa Interactivo */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Mapa de Ubicaciones</h2>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Mapa Interactivo</h3>
              <p className="text-gray-600">Explora la ubicación de todos nuestros lugares turísticos</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Ver Mapa Completo
              </button>
            </div>
          </div>
        </div>

        {/* Rutas Turísticas */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Rutas Turísticas Recomendadas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-3">🏔️ Ruta de Montaña</h3>
              <p className="text-gray-700 mb-4">
                Recorrido por los principales miradores y espacios naturales de Huehuetla.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cerro del Águila</li>
                <li>• Cascada de los Ancestros</li>
                <li>• Bosque de Niebla</li>
              </ul>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  Duración: 6-8 horas
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">🏛️ Ruta Cultural</h3>
              <p className="text-gray-700 mb-4">
                Descubre el patrimonio histórico y artesanal de nuestro municipio.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Plaza Principal</li>
                <li>• Iglesia de San Miguel</li>
                <li>• Mercado de Artesanías</li>
              </ul>
              <div className="mt-4">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                  Duración: 3-4 horas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
