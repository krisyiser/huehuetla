export default function Artesanias() {
  const artesanias = [
    {
      nombre: "Textiles Bordados",
      descripcion: "Huipiles y blusas con bordados tradicionales totonacos",
      artesano: "Cooperativa de Mujeres Tejedoras",
      precio: "$450 - $1,200 MXN",
      imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tecnica: "Bordado a mano"
    },
    {
      nombre: "Cerámica Totonaca",
      descripcion: "Vasijas y jarros con diseños prehispánicos",
      artesano: "Familia Hernández",
      precio: "$180 - $800 MXN",
      imagen: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tecnica: "Modelado y quema tradicional"
    },
    {
      nombre: "Canastas de Carrizo",
      descripcion: "Cestas tejidas con carrizo de la región",
      artesano: "Don Aurelio García",
      precio: "$120 - $350 MXN",
      imagen: "https://images.unsplash.com/photo-1594736797933-d0a9fcfde7b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tecnica: "Tejido en carrizo"
    },
    {
      nombre: "Instrumentos Musicales",
      descripcion: "Flautas y tambores ceremoniales",
      artesano: "Maestro Miguel Tlahuel",
      precio: "$200 - $600 MXN",
      imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tecnica: "Tallado en madera"
    },
    {
      nombre: "Joyería de Semillas",
      descripcion: "Collares y pulseras con semillas locales",
      artesano: "Taller Familiar Totonac",
      precio: "$80 - $250 MXN",
      imagen: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tecnica: "Engarzado natural"
    },
    {
      nombre: "Máscaras Rituales",
      descripcion: "Máscaras talladas para danzas tradicionales",
      artesano: "Don Roberto Xólotl",
      precio: "$300 - $900 MXN",
      imagen: "https://images.unsplash.com/photo-1580152040915-ad74c4d75dcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      tecnica: "Tallado en madera de cedro"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Artesanías Tradicionales</h1>
          <p className="text-lg text-gray-700">
            Descubre el arte ancestral de Huehuetla, donde cada pieza cuenta una historia de tradición y cultura.
          </p>
        </div>

        {/* Proceso Artesanal */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Proceso de Creación</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">Recolección</h3>
              <p className="text-sm text-gray-600">Materiales naturales de la región</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✋</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Elaboración</h3>
              <p className="text-sm text-gray-600">Técnicas transmitidas por generaciones</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-yellow-800 mb-2">Decoración</h3>
              <p className="text-sm text-gray-600">Diseños con significado cultural</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Finalización</h3>
              <p className="text-sm text-gray-600">Acabados únicos e irrepetibles</p>
            </div>
          </div>
        </div>

        {/* Catálogo de Artesanías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artesanias.map((artesania, index) => (
            <div key={artesania.nombre} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${artesania.imagen})` }}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{artesania.nombre}</h3>
                <p className="text-gray-600 mb-3">{artesania.descripcion}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Artesano:</span>
                    <span className="font-medium">{artesania.artesano}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Técnica:</span>
                    <span className="font-medium">{artesania.tecnica}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Precio:</span>
                    <span className="font-bold text-blue-600">{artesania.precio}</span>
                  </div>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Contactar Artesano
                  </button>
                  <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Talleres y Experiencias */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Talleres Vivenciales</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-3">🧵 Taller de Bordado</h3>
              <p className="text-gray-700 mb-4">
                Aprende las técnicas tradicionales de bordado totonaco con las maestras artesanas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Duración: 4 horas</li>
                <li>• Incluye materiales</li>
                <li>• Máximo 8 personas</li>
                <li>• Certificado de participación</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">$350 MXN</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Reservar
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-800 mb-3">🏺 Taller de Cerámica</h3>
              <p className="text-gray-700 mb-4">
                Crea tu propia vasija usando técnicas ancestrales de modelado y decoración.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Duración: 6 horas</li>
                <li>• Incluye barro y herramientas</li>
                <li>• Máximo 6 personas</li>
                <li>• Te llevas tu creación</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-600">$450 MXN</span>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Compromiso Cultural */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Compromiso con la Tradición</h2>
          <p className="text-gray-700 mb-4">
            Cada artesanía que adquieres contribuye directamente al sustento de las familias artesanas
            y ayuda a preservar nuestras tradiciones ancestrales para las futuras generaciones.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">🌱</div>
              <h4 className="font-semibold text-green-800">Sostenible</h4>
              <p className="text-sm text-gray-600">Materiales locales y renovables</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">👥</div>
              <h4 className="font-semibold text-green-800">Comunitario</h4>
              <p className="text-sm text-gray-600">Beneficia directamente a los artesanos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎭</div>
              <h4 className="font-semibold text-green-800">Auténtico</h4>
              <p className="text-sm text-gray-600">Técnicas ancestrales preservadas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
