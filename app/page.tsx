import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
// Importar el componente Download de lucide-react
import { Calendar, ImageIcon, Video, BookOpen, Download, Eye, FileText } from "lucide-react"

export default function ProyectoSemanas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Protección del Bienestar Socioemocional</h1>
          <p className="text-xl text-gray-600 mb-2">Hogar de la Niña - Intervenciones Lúdicas y Psicoeducativas</p>
          <div className="bg-white rounded-lg p-4 shadow-md inline-block">
            <h2 className="text-lg font-semibold text-purple-700 mb-2">Grupo 5 - Integrantes:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
              <span>• Cortez Gamboa, Alexis Andre</span>
              <span>• De La Cruz Salirrosas, Luana Valeria</span>
              <span>• Díaz Vela, Lucía Milagros</span>
              <span>• Villanueva Bermudez, Ana Belen</span>
              <span>• Villanueva Murga Milagritos Nataly</span>
              <span>• Saucedo Lopez Ronald Omar</span>
            </div>
          </div>
        </div>

        {/* Timeline de Semanas */}
        <Tabs defaultValue="semana9" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="semana9" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Semana 9
            </TabsTrigger>
            <TabsTrigger value="semana10" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Semana 10
            </TabsTrigger>
            <TabsTrigger value="semana11" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Semana 11
            </TabsTrigger>
            <TabsTrigger value="semana12" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Semana 12
            </TabsTrigger>
            <TabsTrigger value="semana13" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Semana 13
            </TabsTrigger>
          </TabsList>

          {/* Semana 9 - Collage */}
          <TabsContent value="semana9">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-purple-600" />
                  Semana 9
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-4">
                  <Button className="flex items-center gap-2 bg-red-600 hover:bg-red-700">
                    <Eye className="w-4 h-4" />
                    Ver PDF
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Download className="w-4 h-4" />
                    Descargar
                  </Button>
                </div>

                <div className="bg-gray-100 p-2 rounded-lg">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-gray-800 text-white p-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm">Semana9.pdf</span>
                      </div>
                      <span className="text-xs">1/1</span>
                    </div>
                    <div className="bg-white h-[600px] flex items-center justify-center">
                      <FileText className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Semana 10 - Imágenes/PDF */}
          <TabsContent value="semana10">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-6 h-6 text-blue-600" />
                  Semana 10 - Documentación del Proyecto
                </CardTitle>
                <CardDescription>Documentos base y materiales de trabajo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md border">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Documento del Proyecto</h3>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-blue-900 text-lg mb-2">
                        "PROTECCIÓN DEL BIENESTAR SOCIOEMOCIONAL DE NIÑAS MENORES DE EDAD EN EL ALBERGUE 'HOGAR DE LA
                        NIÑA' MEDIANTE INTERVENCIONES LÚDICAS Y PSICOEDUCATIVAS"
                      </h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Integrantes del Grupo 5:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Cortez Gamboa, Alexis Andre</li>
                          <li>• De La Cruz Salirrosas, Luana Valeria</li>
                          <li>• Díaz Vela, Lucía Milagros</li>
                          <li>• Villanueva Bermudez, Ana Belen</li>
                          <li>• Villanueva Murga Milagritos Nataly</li>
                          <li>• Saucedo Lopez Ronald Omar</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Enfoque del Proyecto:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Intervenciones lúdicas</li>
                          <li>• Actividades psicoeducativas</li>
                          <li>• Bienestar socioemocional</li>
                          <li>• Protección infantil</li>
                          <li>• Trabajo en equipo</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">Material de Equidad de Género</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <img
                          src="/placeholder.svg?height=300&width=250"
                          alt="Poster de equidad de género"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Contenido del Material</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <span className="text-sm">Lazo púrpura de concientización</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-sm">Símbolo de silencio roto</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-sm">Mensajes de empoderamiento</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm">Igualdad de derechos</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Semana 11 - Videos */}
          <TabsContent value="semana11">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="w-6 h-6 text-green-600" />
                  Semana 11 - Videos de las Actividades
                </CardTitle>
                <CardDescription>Documentación audiovisual de las intervenciones lúdicas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md border">
                      <div className="w-full h-40 bg-gradient-to-br from-green-200 to-green-300 rounded-lg mb-3 flex items-center justify-center">
                        <div className="text-center">
                          <Video className="w-12 h-12 text-green-700 mx-auto mb-2" />
                          <span className="text-green-800 font-semibold">Video 1</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-green-800 mb-2">Juego de la Telaraña</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        "Creamos una red de apoyo lanzando el ovillo y expresando mensajes positivos."
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs text-green-700 mb-2">
                        Objetivo: Construcción de vínculos y mensajes de apoyo mutuo
                      </div>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Reproducir
                      </Button>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md border">
                      <div className="w-full h-40 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg mb-3 flex items-center justify-center">
                        <div className="text-center">
                          <Video className="w-12 h-12 text-blue-700 mx-auto mb-2" />
                          <span className="text-blue-800 font-semibold">Video 2</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-blue-800 mb-2">Pasar el Aro</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        "Superamos el reto de pasar el aro con trabajo en equipo y risas compartidas."
                      </p>
                      <div className="bg-blue-50 p-2 rounded text-xs text-blue-700 mb-2">
                        Objetivo: Cooperación y trabajo en equipo
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Reproducir
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md border">
                      <div className="w-full h-40 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg mb-3 flex items-center justify-center">
                        <div className="text-center">
                          <Video className="w-12 h-12 text-purple-700 mx-auto mb-2" />
                          <span className="text-purple-800 font-semibold">Video 3</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-purple-800 mb-2">Torre de Vasos</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        "Construimos una torre usando coordinación, paciencia y comunicación."
                      </p>
                      <div className="bg-purple-50 p-2 rounded text-xs text-purple-700 mb-2">
                        Objetivo: Coordinación y comunicación efectiva
                      </div>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Reproducir
                      </Button>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md border">
                      <div className="w-full h-40 bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg mb-3 flex items-center justify-center">
                        <div className="text-center">
                          <Video className="w-12 h-12 text-pink-700 mx-auto mb-2" />
                          <span className="text-pink-800 font-semibold">Video 4</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-pink-800 mb-2">Mapa Emocional Colectivo</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        "Formamos un mural colectivo con nuestras emociones y compartimos experiencias."
                      </p>
                      <div className="bg-pink-50 p-2 rounded text-xs text-pink-700 mb-2">
                        Objetivo: Expresión emocional y empatía
                      </div>
                      <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                        Reproducir
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Semana 12 - Imágenes/PDF */}
          <TabsContent value="semana12">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-6 h-6 text-orange-600" />
                  Semana 12 - Resultados y Documentación
                </CardTitle>
                <CardDescription>Análisis de resultados y documentación final</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md border">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">Análisis de Impacto</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Resultados Cualitativos</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                            <h5 className="font-semibold text-green-800">Expresión Emocional</h5>
                            <p className="text-sm text-green-700">
                              Las niñas mostraron mayor apertura para expresar sus emociones a través de dibujos y
                              diálogos.
                            </p>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                            <h5 className="font-semibold text-blue-800">Fortalecimiento de Vínculos</h5>
                            <p className="text-sm text-blue-700">
                              Se observó mayor confianza y colaboración entre las participantes.
                            </p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                            <h5 className="font-semibold text-purple-800">Desarrollo de Habilidades</h5>
                            <p className="text-sm text-purple-700">
                              Mejora en comunicación, coordinación y trabajo en equipo.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Documentación Visual</h4>
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded-lg border">
                            <img
                              src="/placeholder.svg?height=150&width=200"
                              alt="Dibujos emocionales de las niñas"
                              className="w-full h-32 object-cover rounded-lg mb-2"
                            />
                            <p className="text-sm text-gray-600">Dibujos y expresiones emocionales</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg border">
                            <img
                              src="/placeholder.svg?height=150&width=200"
                              alt="Mural colectivo emocional"
                              className="w-full h-32 object-cover rounded-lg mb-2"
                            />
                            <p className="text-sm text-gray-600">Mural colectivo de emociones</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">Conclusiones del Proyecto</h3>
                    <p className="text-orange-700 mb-4">
                      Las intervenciones lúdicas y psicoeducativas han demostrado ser efectivas para promover el
                      bienestar socioemocional de las niñas en el albergue "Hogar de la Niña". Los resultados muestran
                      mejoras significativas en la expresión emocional, fortalecimiento de vínculos y desarrollo de
                      habilidades sociales.
                    </p>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-white p-3 rounded-lg text-center border">
                        <div className="text-2xl font-bold text-blue-600">4</div>
                        <div className="text-sm text-gray-600">Fases principales</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center border">
                        <div className="text-2xl font-bold text-green-600">10</div>
                        <div className="text-sm text-gray-600">Actividades totales</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center border">
                        <div className="text-2xl font-bold text-purple-600">3</div>
                        <div className="text-sm text-gray-600">Juegos cooperativos</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center border">
                        <div className="text-2xl font-bold text-red-600">100%</div>
                        <div className="text-sm text-gray-600">Enfoque emocional</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Semana 13 - Storyboard */}
          <TabsContent value="semana13">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                  Semana 13
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-4">
                  <Button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700">
                    <Eye className="w-4 h-4" />
                    Ver PDF
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Download className="w-4 h-4" />
                    Descargar
                  </Button>
                </div>

                <div className="bg-gray-100 p-2 rounded-lg">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-gray-800 text-white p-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm">Semana13.pdf</span>
                      </div>
                      <span className="text-xs">1/2</span>
                    </div>
                    <div className="bg-white h-[600px] flex items-center justify-center">
                      <FileText className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center mt-8 p-4 bg-white rounded-lg shadow-md">
          <p className="text-gray-600">
            Proyecto desarrollado con enfoque en el bienestar socioemocional de niñas menores de edad
          </p>
          <p className="text-sm text-gray-500 mt-2">Semanas 9-13 | Intervenciones Lúdicas y Psicoeducativas</p>
        </div>
      </div>
    </div>
  )
}
