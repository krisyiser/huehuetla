export default function Historia() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Historia de Huehuetla</h1>
          <p className="text-lg text-gray-700">
            Descubre la rica historia de nuestro municipio, desde sus orígenes prehispánicos hasta la actualidad.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Línea de Tiempo Histórica</h2>

          <div className="space-y-8">
            {/* Época Prehispánica */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Época Prehispánica (600 - 1519 d.C.)</h3>
                <p className="text-gray-700 mb-4">
                  Huehuetla fue habitada originalmente por grupos totonacos, quienes establecieron aquí una importante
                  comunidad. El nombre "Huehuetla" proviene del náhuatl y significa "lugar de los viejos" o "lugar de los ancianos".
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-md">
                    <h4 className="font-semibold text-blue-700">Cultura Totonaca</h4>
                    <p className="text-sm text-gray-600">Los totonacos desarrollaron complejas técnicas agrícolas y artesanales que perduran hasta hoy.</p>
                  </div>
                  <div className="bg-white p-4 rounded-md">
                    <h4 className="font-semibold text-blue-700">Arquitectura</h4>
                    <p className="text-sm text-gray-600">Construcción de centros ceremoniales y terrazas agrícolas en las montañas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Época Colonial */}
            <div className="border-l-4 border-green-600 pl-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="text-xl font-bold text-green-800 mb-2">Época Colonial (1519 - 1821)</h3>
                <p className="text-gray-700 mb-4">
                  La llegada de los españoles transformó la región, introduciendo nuevas costumbres religiosas y
                  administrativas, aunque muchas tradiciones indígenas se mantuvieron.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-md">
                    <h4 className="font-semibold text-green-700">Evangelización</h4>
                    <p className="text-sm text-gray-600">Construcción de la primera iglesia y sincretismo religioso.</p>
                  </div>
                  <div className="bg-white p-4 rounded-md">
                    <h4 className="font-semibold text-green-700">Encomiendas</h4>
                    <p className="text-sm text-gray-600">Sistema de organización territorial y tributos.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* México Independiente */}
            <div className="border-l-4 border-yellow-600 pl-6">
              <div className="bg-yellow-50 rounded-lg p-4">
                <h3 className="text-xl font-bold text-yellow-800 mb-2">México Independiente (1821 - 1910)</h3>
                <p className="text-gray-700 mb-4">
                  Durante el siglo XIX, Huehuetla se consolidó como municipio, enfrentando los retos de la
                  construcción nacional mientras preservaba su identidad cultural.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-md">
                    <h4 className="font-semibold text-yellow-700">Constitución Municipal</h4>
                    <p className="text-sm text-gray-600">Establecimiento formal como municipio del estado de Puebla.</p>
                  </div>
                  <div className="bg-white p-4 rounded-md">
                    <h4 className="font-semibold text-yellow-700">Desarrollo Agrícola</h4>
                    <p className="text-sm text-gray-600">Consolidación de la economía local basada en agricultura de montaña.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Siglo XX */}
            <div className="border-l-4 border-purple-600 pl-6">
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="text-xl font-bold text-purple-800 mb-2">Siglo XX - Actualidad</h3>
                <p className="text-gray-700 mb-4">
                  El siglo XX trajo modernización y nuevos desafíos, pero Huehuetla ha logrado mantener sus
                  tradiciones mientras se adapta a los tiempos modernos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-md">
                    <h4 className="font-semibold text-purple-700">Preservación Cultural</h4>
                    <p className="text-sm text-gray-600">Esfuerzos por mantener viva la lengua totonaca y las tradiciones ancestrales.</p>
                  </div>
                  <div className="bg-white p-4 rounded-md">
                    <h4 className="font-semibold text-purple-700">Desarrollo Sostenible</h4>
                    <p className="text-sm text-gray-600">Equilibrio entre progreso y conservación del patrimonio natural y cultural.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patrimonio Cultural */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Patrimonio Histórico</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-md mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">⛪</span>
              </div>
              <h3 className="font-bold text-blue-800 mb-2">Iglesia Colonial</h3>
              <p className="text-sm text-gray-600">
                Templo del siglo XVII que combina arquitectura española con elementos indígenas.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="w-full h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-md mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🏛️</span>
              </div>
              <h3 className="font-bold text-green-800 mb-2">Sitios Arqueológicos</h3>
              <p className="text-sm text-gray-600">
                Vestigios de la antigua civilización totonaca dispersos por el territorio municipal.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="w-full h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">📜</span>
              </div>
              <h3 className="font-bold text-yellow-800 mb-2">Archivo Histórico</h3>
              <p className="text-sm text-gray-600">
                Documentos que narran la historia del municipio desde la época colonial.
              </p>
            </div>
          </div>
        </div>

        {/* Tradiciones Orales */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Tradición Oral</h2>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Leyendas y Relatos Ancestrales</h3>
            <p className="text-gray-700 mb-4">
              Los ancianos de Huehuetla guardan en su memoria historias que se han transmitido de generación
              en generación, narrando la relación sagrada entre los habitantes y la naturaleza que los rodea.
            </p>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
              "En los cerros de Huehuetla habitan los espíritus guardianes que protegen las cosechas y
              cuidan de las familias que respetan la tierra..."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
