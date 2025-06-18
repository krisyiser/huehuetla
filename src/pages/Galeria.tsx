export default function Galeria() {
  const categorias = ["Todos", "Paisajes", "Cultura", "Festividades", "Artesanías", "Gastronomía", "Personas"]

  const fotos = [
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      titulo: "Vista del Cerro del Águila",
      categoria: "Paisajes",
      descripcion: "Amanecer desde el mirador principal de Huehuetla"
    },
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      titulo: "Textiles Tradicionales",
      categoria: "Artesanías",
      descripcion: "Bordados totonacos en proceso de elaboración"
    },
    {
      url: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      titulo: "Cascada de los Ancestros",
      categoria: "Paisajes",
      descripcion: "Cascada sagrada en el bosque de niebla"
    },
    {
      url: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      titulo: "Tamales Tradicionales",
      categoria: "Gastronomía",
      descripcion: "Preparación de tamales en hoja de maíz"
    },
    {
      url: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      titulo: "Plaza Principal",
      categoria: "Cultura",
      descripcion: "Centro histórico durante la tarde"
    },
    {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      titulo: "Iglesia Colonial",
      categoria: "Cultura",
      descripcion: "Templo de San Miguel al atardecer"
    },
    {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      titulo: "Bosque de Niebla",
      categoria: "Paisajes",
      descripcion: "Ecosistema único de la sierra norte"
    },
    {
      url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      titulo: "Cerámica Totonaca",
      categoria: "Artesanías",
      descripcion: "Vasijas con diseños prehispánicos"
    },
    {
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      titulo: "Mole Tradicional",
      categoria: "Gastronomía",
      descripcion: "Preparación del mole de guajolote"
    },
    {
      url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      titulo: "Instrumentos Musicales",
      categoria: "Artesanías",
      descripcion: "Flautas ceremoniales talladas a mano"
    },
    {
      url: "https://images.unsplash.com/photo-1580152040915-ad74c4d75dcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      titulo: "Máscaras Rituales",
      categoria: "Cultura",
      descripcion: "Máscaras para danzas tradicionales"
    },
    {
      url: "https://images.unsplash.com/photo-1594736797933-d0a9fcfde7b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      titulo: "Artesanía en Carrizo",
      categoria: "Artesanías",
      descripcion: "Canastas tejidas con materiales locales"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Galería Fotográfica</h1>
          <p className="text-lg text-gray-700">
            Contempla la belleza de Huehuetla a través de imágenes que capturan la esencia de nuestra tierra y cultura.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">240+</div>
            <div className="text-gray-600">Fotografías</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15</div>
            <div className="text-gray-600">Fotógrafos</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
            <div className="text-gray-600">Categorías</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
            <div className="text-gray-600">Ubicaciones</div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Categorías</h2>
          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Galería Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotos.map((foto, index) => (
            <div key={foto.titulo} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={foto.url}
                  alt={foto.titulo}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black bg-opacity-70 text-white rounded-full text-xs font-medium">
                    {foto.categoria}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Ver Completa
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{foto.titulo}</h3>
                <p className="text-gray-600 text-sm mb-3">{foto.descripcion}</p>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-xs">
                      ❤️
                    </button>
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-xs">
                      📤
                    </button>
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-xs">
                      💾
                    </button>
                  </div>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                    Descargar →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Contribuciones */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Comparte tu Perspectiva</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📸 Contribuye a Nuestra Galería</h3>
              <p className="text-gray-700 mb-4">
                ¿Tienes fotografías hermosas de Huehuetla? Compártelas con nosotros y ayuda a mostrar
                la belleza de nuestro municipio al mundo.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Resolución mínima: 1920x1080px</li>
                <li>• Formatos aceptados: JPG, PNG, RAW</li>
                <li>• Incluir ubicación y descripción</li>
                <li>• Respetar privacidad de personas</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Subir Fotografías
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">🏆 Concurso Fotográfico Anual</h3>
              <p className="text-gray-700 mb-4">
                Participa en nuestro concurso anual "Huehuetla en Imágenes" y gana increíbles premios
                mientras compartes tu visión de nuestro territorio.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>🥇 Primer lugar:</span>
                  <span className="font-semibold">$3,000 MXN</span>
                </div>
                <div className="flex justify-between">
                  <span>🥈 Segundo lugar:</span>
                  <span className="font-semibold">$2,000 MXN</span>
                </div>
                <div className="flex justify-between">
                  <span>🥉 Tercer lugar:</span>
                  <span className="font-semibold">$1,000 MXN</span>
                </div>
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Más Información
              </button>
            </div>
          </div>
        </div>

        {/* Fotógrafos Destacados */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Fotógrafos de la Comunidad</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                📷
              </div>
              <h3 className="font-bold text-gray-800 mb-2">María Elena Jiménez</h3>
              <p className="text-sm text-gray-600 mb-2">Especialista en paisajes naturales</p>
              <p className="text-xs text-blue-600">47 fotografías contribuidas</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                🎭
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Carlos Tlahuel</h3>
              <p className="text-sm text-gray-600 mb-2">Documentalista cultural</p>
              <p className="text-xs text-green-600">62 fotografías contribuidas</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                👥
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Comunidad Huehuetla</h3>
              <p className="text-sm text-gray-600 mb-2">Colaboradores diversos</p>
              <p className="text-xs text-orange-600">131 fotografías contribuidas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
