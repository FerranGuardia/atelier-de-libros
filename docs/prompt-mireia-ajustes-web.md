Actua como implementador senior de una web Astro para El Atelier de Libros. Aplica los cambios pedidos por Mireia a partir del documento "Textos web Atelier.docx", respetando la estética editorial existente, sin convertir capturas con texto en imágenes finales y manteniendo el contenido editable en HTML/i18n.

Interpretación de los cambios:

1. Home / hero:
   - Mantener el titular "Estilismo literario / el libro como conector cultural".
   - Mantener el texto: "Comisariamos rincones, eventos e identidades a través del libro —para empresas, espacios, figuras públicas y particulares."
   - Cuando Mireia entregue las imágenes finales, sustituir la imagen hero actual por la imagen indicada como "imagen 1". No usar la captura del Word como asset definitivo si contiene texto.

2. Manifiesto:
   - Mantener los cuatro axiomas del documento:
     "No decoramos estanterías..."
     "Trabajamos el libro como un conector cultural..."
     "Cada selección funciona..."
     "En una era..."
   - Cuando exista el asset final, sustituir el ornamento actual por la "imagen 2".

3. Servicios / El Índice:
   - Debajo de "El Índice", presentar "Nuestros servicios" si encaja en diseño.
   - En Curaduría, cambiar "Curaduría de identidad y storytelling visual" por un bloque de "Gestión de imagen pública" con:
     "Asesoría para marcas, empresas y personas sobre qué libros mostrar en redes o eventos."
     "Selección de it-books para campañas de moda, lanzamientos o branding."
     "Construcción de narrativa visual coherente con los valores del cliente."
   - Mantener "It-books para campañas" como subservicio.
   - En Eventos, usar "Eventos de autor: el nuevo salón literario" y el subservicio "Salones literarios a medida" con lecturas en vivo, debates, microcharlas, encuentros con autores, escenografía literaria, ambientación estética y producción de contenido visual.
   - Eliminar el dibujo ornamental del índice.
   - Debajo de los 4 servicios principales, añadir cuatro módulos secundarios:
     Producciones visuales.
     Gestión de imagen.
     Contenido digital y comunicación literaria.
     Merchandising, papelería y material promocional.

4. Historias:
   - Mantener la sección Historias.
   - Eliminar solo la tercera historia/caso: "Salón literario para figura pública" (`salon-literario`).
   - Antes de eliminar o ocultar nada, conservar copia de seguridad de rutas, componentes e imágenes.

5. Editoriales / colaboraciones de marca:
   - Sustituir el texto largo por:
     "Integración editorial y colaboraciones de marca
     Integramos libros en hoteles boutique, espacios comerciales, restaurantes, sets de rodaje y entornos corporativos, además de seleccionar títulos para campañas visuales, editoriales, eventos y proyectos curatoriales, creando experiencias culturales y proyectando el libro hasta donde nunca había llegado.
     Llevamos los libros allí donde nadie espera encontrarlos y los convertimos en protagonistas de nuevos escenarios."

6. Nota de la autora:
   - Eliminar la imagen/dibujo de firma manuscrita.
   - Mantener solo el crédito textual de Mireia si sigue teniendo sentido.
   - Cuando Mireia entregue la "imagen 3", sustituir el retrato/placeholder actual por esa imagen.

7. Epílogo / contacto:
   - Cuando Mireia entregue la "imagen 4", sustituir el ornamento/imagen actual del epílogo por esa imagen.
   - Mantener el texto:
     "Si has llegado hasta aquí, escríbenos. Cada proyecto tiene una historia que contar. Nosotras averiguamos su título. ¿Quieres encontrar el tuyo?"

Prioridad técnica:
   - Hacer cambios en componentes y diccionario i18n, no como texto incrustado en imágenes.
   - No romper rutas multilenguaje.
   - Ejecutar build al final y corregir errores.
