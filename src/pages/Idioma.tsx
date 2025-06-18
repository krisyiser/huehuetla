export default function Idioma() {
  const frases = [
    {
      totonaco: "Tuku chu?",
      español: "¿Cómo estás?",
      pronunciacion: "tu-ku chu"
    },
    {
      totonaco: "Tuku nitakaxtun",
      español: "Me llamo...",
      pronunciacion: "tu-ku ni-ta-kax-tun"
    },
    {
      totonaco: "Lawa tawán",
      español: "Buenos días",
      pronunciacion: "la-wa ta-wan"
    },
    {
      totonaco: "Kuxtlan",
      español: "Gracias",
      pronunciacion: "kux-tlan"
    },
    {
      totonaco: "Ná talakichiwín",
      español: "Te amo",
      pronunciacion: "na ta-la-ki-chi-win"
    },
    {
      totonaco: "Tawán lhuwa",
      español: "Buen día",
      pronunciacion: "ta-wan lhu-wa"
    }
  ]

  const numeros = [
    { numero: 1, totonaco: "ash", pronunciacion: "ash" },
    { numero: 2, totonaco: "tutu", pronunciacion: "tu-tu" },
    { numero: 3, totonaco: "tutunu", pronunciacion: "tu-tu-nu" },
    { numero: 4, totonaco: "li'i", pronunciacion: "li-i" },
    { numero: 5, totonaco: "kintsu", pronunciacion: "kin-tsu" },
    { numero: 6, totonaco: "uxa", pronunciacion: "u-xa" },
    { numero: 7, totonaco: "wixtu", pronunciacion: "wix-tu" },
    { numero: 8, totonaco: "tuxtu", pronunciacion: "tux-tu" },
    { numero: 9, totonaco: "naxtunu", pronunciacion: "nax-tu-nu" },
    { numero: 10, totonaco: "mak", pronunciacion: "mak" }
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Nuestra Lengua Totonaca</h1>
          <p className="text-lg text-gray-700">
            Descubre la riqueza lingüística de Huehuetla, donde el totonaco sigue siendo el corazón
            de nuestra identidad cultural y medio de comunicación ancestral.
          </p>
        </div>

        {/* Estadísticas del Idioma */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
            <div className="text-gray-600">Población que habla totonaco</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">2,400</div>
            <div className="text-gray-600">Hablantes activos</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Años de historia</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-gray-600">Generaciones transmitiendo</div>
          </div>
        </div>

        {/* Historia de la Lengua */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Historia de Nuestra Lengua</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🗣️ Origen y Evolución</h3>
              <p className="text-gray-700 mb-4">
                El totonaco es una lengua originaria de la familia totonaco-tepehua, hablada en la región
                desde tiempos prehispánicos. En Huehuetla, esta lengua ha mantenido su vitalidad y
                continúa siendo el idioma principal de comunicación entre las familias.
              </p>
              <p className="text-gray-700">
                Nuestros ancianos son los guardianes de las formas más puras del idioma, preservando
                no solo las palabras, sino también los relatos, cantos y conocimientos ancestrales
                que se transmiten oralmente.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">🌱 Preservación Cultural</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">📚</span>
                  Programas educativos bilingües en escuelas locales
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">👴</span>
                  Círculos de conversación con ancianos sabios
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🎵</span>
                  Canciones y poemas en lengua totonaca
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">📖</span>
                  Documentación y diccionarios comunitarios
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Frases Básicas */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Frases Básicas en Totonaco</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {frases.map((frase, index) => (
              <div key={frase.totonaco} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="mb-2">
                  <span className="text-lg font-bold text-blue-800">{frase.totonaco}</span>
                  <button className="ml-2 p-1 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
                    🔊
                  </button>
                </div>
                <p className="text-gray-700 mb-1">{frase.español}</p>
                <p className="text-sm text-gray-500 italic">Pronunciación: {frase.pronunciacion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Números */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Números en Totonaco</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {numeros.map((item, index) => (
              <div key={item.numero} className="text-center bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-800 mb-2">{item.numero}</div>
                <div className="text-lg font-semibold text-gray-800">{item.totonaco}</div>
                <div className="text-sm text-gray-500 italic">{item.pronunciacion}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recursos de Aprendizaje */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Aprende Totonaco</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Clases Presenciales</h3>
              <p className="text-gray-700 mb-4">
                Aprende directamente con hablantes nativos en nuestro centro cultural.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Lunes y miércoles, 5:00 PM</li>
                <li>• Niveles principiante e intermedio</li>
                <li>• Material incluido</li>
                <li>• Certificado de participación</li>
              </ul>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                Inscribirse
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">App Móvil</h3>
              <p className="text-gray-700 mb-4">
                Descarga nuestra aplicación para aprender totonaco desde cualquier lugar.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Lecciones interactivas</li>
                <li>• Pronunciación con audio</li>
                <li>• Juegos y ejercicios</li>
                <li>• Progreso personalizado</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Descargar
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Recursos Escritos</h3>
              <p className="text-gray-700 mb-4">
                Diccionarios, libros de cuentos y material didáctico para todas las edades.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Diccionario totonaco-español</li>
                <li>• Libro de cuentos tradicionales</li>
                <li>• Guía de gramática básica</li>
                <li>• Material para niños</li>
              </ul>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Ver Recursos
              </button>
            </div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Voces de Nuestra Comunidad</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <blockquote className="text-gray-700 italic mb-4">
                "El totonaco es más que un idioma, es nuestra forma de ver y entender el mundo.
                Cada palabra lleva consigo la sabiduría de nuestros antepasados."
              </blockquote>
              <cite className="text-sm font-semibold text-purple-800">
                - Doña Carmen Jiménez, 78 años, Guardiana de tradiciones
              </cite>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <blockquote className="text-gray-700 italic mb-4">
                "Enseñar totonaco a mis hijos es regalarles su identidad. Quiero que sepan
                de dónde vienen y se sientan orgullosos de su herencia."
              </blockquote>
              <cite className="text-sm font-semibold text-purple-800">
                - Profesor Miguel Tlahuel, 45 años, Educador bilingüe
              </cite>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Únete a la Preservación de Nuestra Lengua</h2>
          <p className="text-xl mb-6">
            Cada persona que aprende totonaco contribuye a mantener viva nuestra cultura ancestral.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Comenzar a Aprender
            </button>
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
              Ser Voluntario
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
