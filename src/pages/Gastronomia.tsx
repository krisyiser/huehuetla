export default function Gastronomia() {
  const platillos = [
    {
      nombre: "Mole de Guajolote",
      descripcion: "Mole tradicional totonaco servido con guajolote criado en la región",
      ingredientes: ["Chiles secos", "Chocolate", "Especias locales", "Guajolote"],
      precio: "$180 MXN",
      tiempo: "4 horas",
      imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      categoria: "Plato Principal"
    },
    {
      nombre: "Tamales de Frijol",
      descripcion: "Tamales envueltos en hoja de maíz con frijoles negros y epazote",
      ingredientes: ["Masa de maíz", "Frijoles negros", "Epazote", "Hojas de maíz"],
      precio: "$25 MXN c/u",
      tiempo: "2 horas",
      imagen: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      categoria: "Antojito"
    },
    {
      nombre: "Café de Olla",
      descripcion: "Café local endulzado con piloncillo y canela",
      ingredientes: ["Café de altura", "Piloncillo", "Canela", "Clavos"],
      precio: "$35 MXN",
      tiempo: "15 min",
      imagen: "https://images.unsplash.com/photo-1509785307763-d82e0c39f5b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      categoria: "Bebida"
    },
    {
      nombre: "Quelites Guisados",
      descripcion: "Verduras silvestres de la región guisadas con chile y cebolla",
      ingredientes: ["Quelites", "Chile verde", "Cebolla", "Ajo"],
      precio: "$45 MXN",
      tiempo: "30 min",
      imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      categoria: "Guarnición"
    },
    {
      nombre: "Dulce de Tejocote",
      descripcion: "Postre tradicional con tejocotes en almíbar de piloncillo",
      ingredientes: ["Tejocotes", "Piloncillo", "Canela", "Agua"],
      precio: "$40 MXN",
      tiempo: "1 hora",
      imagen: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      categoria: "Postre"
    },
    {
      nombre: "Pulque Natural",
      descripcion: "Bebida fermentada del maguey, preparación ancestral",
      ingredientes: ["Aguamiel de maguey", "Fermentación natural"],
      precio: "$30 MXN",
      tiempo: "5 días",
      imagen: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      categoria: "Bebida"
    }
  ]

  const categorias = ["Todos", "Plato Principal", "Antojito", "Bebida", "Guarnición", "Postre"]

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Nuestra Gastronomía</h1>
          <p className="text-lg text-gray-700">
            Saborea los auténticos platillos de Huehuetla, donde cada receta guarda el alma de nuestra cultura totonaca.
          </p>
        </div>

        {/* Filosofía Culinaria */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">De la Tierra a la Mesa</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-green-50 rounded-lg p-6">
              <div className="text-4xl mb-4">🌽</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Ingredientes Locales</h3>
              <p className="text-gray-600">
                Utilizamos productos cultivados en nuestras tierras, respetando los ciclos naturales y las tradiciones agrícolas ancestrales.
              </p>
            </div>

            <div className="text-center bg-orange-50 rounded-lg p-6">
              <div className="text-4xl mb-4">👵</div>
              <h3 className="text-xl font-bold text-orange-800 mb-2">Recetas Ancestrales</h3>
              <p className="text-gray-600">
                Cada platillo conserva las técnicas de preparación transmitidas de madres a hijas durante generaciones.
              </p>
            </div>

            <div className="text-center bg-blue-50 rounded-lg p-6">
              <div className="text-4xl mb-4">🏔️</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Sabor de Montaña</h3>
              <p className="text-gray-600">
                La altura y el clima de nuestra región aportan características únicas a los ingredientes que cultivamos.
              </p>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Categorías</h2>
          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platillos.map((platillo, index) => (
            <div key={platillo.nombre} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${platillo.imagen})` }}
              >
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-xs font-medium">
                    {platillo.categoria}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-black bg-opacity-70 text-white rounded-full text-xs">
                    ⏱️ {platillo.tiempo}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{platillo.nombre}</h3>
                <p className="text-gray-600 mb-4">{platillo.descripcion}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Ingredientes principales:</h4>
                  <div className="flex flex-wrap gap-1">
                    {platillo.ingredientes.map((ingrediente) => (
                      <span key={ingrediente} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {ingrediente}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">{platillo.precio}</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                    Ordenar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experiencias Gastronómicas */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Experiencias Culinarias</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-800 mb-3">🏠 Cocina con la Familia</h3>
              <p className="text-gray-700 mb-4">
                Comparte una tarde cocinando con una familia local, aprendiendo los secretos de la cocina totonaca.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Duración: 5 horas</li>
                <li>• Incluye ingredientes y comida</li>
                <li>• Máximo 4 personas</li>
                <li>• Recetario incluido</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">$650 MXN</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Reservar
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">🌽 Tour del Maíz</h3>
              <p className="text-gray-700 mb-4">
                Desde la milpa hasta el plato: conoce todo el proceso del maíz en nuestra cultura.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Duración: 8 horas</li>
                <li>• Visita a milpas</li>
                <li>• Taller de tortillas</li>
                <li>• Comida tradicional</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-yellow-600">$850 MXN</span>
                <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Productos Locales */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Productos para Llevar</h2>
          <p className="text-gray-700 mb-6">
            Llévate un pedacito de Huehuetla con nuestros productos artesanales.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl mb-2">☕</div>
                <h4 className="font-semibold text-gray-800">Café de Altura</h4>
                <p className="text-sm text-gray-600">$120/kg</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl mb-2">🍯</div>
                <h4 className="font-semibold text-gray-800">Miel de Abeja</h4>
                <p className="text-sm text-gray-600">$180/frasco</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl mb-2">🌶️</div>
                <h4 className="font-semibold text-gray-800">Chiles Secos</h4>
                <p className="text-sm text-gray-600">$45/100g</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl mb-2">🫘</div>
                <h4 className="font-semibold text-gray-800">Frijol Criollo</h4>
                <p className="text-sm text-gray-600">$35/kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
