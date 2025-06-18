import { useEffect, useState } from 'react'
import axios from 'axios'
import { Carousel } from '@/components/ui/carousel' // Asegúrate de tener este componente o usar uno compatible

export default function Home() {
  const [weather, setWeather] = useState<any>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=20.2106&longitude=-97.5925&current_weather=true&daily=temperature_2m_min,temperature_2m_max&timezone=auto`)
        setWeather(res.data)
      } catch (err) {
        console.error('Error al obtener clima:', err)
      }
    }
    fetchWeather()
  }, [])

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Welcome Section */}
          <div className="bg-[#fdfaf6] rounded-lg shadow-md p-6 border border-[#e4d6c4]">
            <div className="mb-4">
              <p className="text-[#967b57] text-sm font-medium mb-2">✨ Bienvenidos a</p>
              <h1 className="text-4xl font-extrabold text-[#5e3b1e] mb-4 tracking-wide">Huehuetla, Puebla</h1>
            </div>
            <div className="space-y-4 text-[#4a3b2a]">
              <p>
                Te damos la más cordial bienvenida a la <strong>Guía Cultural de Huehuetla, Puebla</strong>,
                que recopila información sobre nuestro <strong>patrimonio indígena</strong>, nuestra rica
                <strong> historia</strong>, los hermosos <strong>lugares</strong> que puedes visitar,
                así como nuestras tradicionales <strong>artesanías</strong> y auténtica <strong>gastronomía</strong>.
              </p>
              <p>
                En nuestra plataforma encontrarás información detallada sobre cada aspecto cultural,
                una galería de fotografías de alta calidad, detalles de ubicación e información de contacto.
                Podrás explorar nuestras tradiciones ancestrales, conocer sobre nuestro idioma, y descubrir
                la belleza natural que rodea nuestro querido municipio.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-[#fdfaf6] rounded-lg shadow-md overflow-hidden border border-[#e4d6c4]">
            <div
              className="h-64 flex items-center justify-center relative"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(94, 59, 30, 0.6), rgba(94, 59, 30, 0.6)), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg font-medium">📹: Huehuetla, Puebla | Nuestro Patrimonio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Weather Widget */}
          <div className="bg-[#6e4a2a] text-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[#e0d4c2] text-sm">⛅ Parcialmente nublado</p>
                  <p className="text-3xl font-bold">{weather?.current_weather?.temperature ?? '--'}°</p>
                  <p className="text-[#e0d4c2] text-sm">
                    {weather?.daily?.temperature_2m_min?.[0] ?? '--'} / {weather?.daily?.temperature_2m_max?.[0] ?? '--'} °C
                  </p>
                </div>
                <div className="text-right text-sm text-[#e0d4c2]">
                  <p>{new Date().toLocaleString()}</p>
                  <p>🌬️ {weather?.current_weather?.windspeed ?? '--'} km/h</p>
                  <p className="font-medium">Huehuetla, Puebla</p>
                </div>
              </div>

              {/* Live Photo Section con carrusel */}
              <div className="relative mb-4">
                <Carousel>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-32 rounded-md"
                      style={{
                        backgroundImage:
                          `url(https://source.unsplash.com/random/500x200?sig=${i})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  ))}
                </Carousel>
              </div>

              <p className="text-sm text-[#f3e8dc] mb-4">
                Vista panorámica de la Plaza Principal desde <strong>Centro de Huehuetla</strong>, en Huehuetla, Puebla.
              </p>

              {/* Daily Forecast */}
              <div className="grid grid-cols-4 gap-2 text-center text-sm">
                {[1, 2, 3, 4].map((_, idx) => (
                  <div key={idx}>
                    <p className="text-[#f3e8dc]">D{idx + 1}</p>
                    <p className="text-xs">
                      {weather?.daily?.temperature_2m_min?.[idx] ?? '--'} / {weather?.daily?.temperature_2m_max?.[idx] ?? '--'} °C
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}