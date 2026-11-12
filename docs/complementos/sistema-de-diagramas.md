# SISTEMA DE DIAGRAMAS

#### Justificación del sistema gráfico

El estándar gráfico de la familia de diagramas no responde únicamente a
criterios estéticos, es el resultado de un proceso iterativo de diseño
orientado a establecer un lenguaje visual coherente, reconocible y
funcional para representar conceptos y relaciones propias de las redes
de computadoras.

La propuesta se fundamenta en cuatro principios generales: consistencia,
para mantener una identidad visual común; diferenciación, para
distinguir funciones, elementos y relaciones; jerarquía, para facilitar
la interpretación de la información; y legibilidad, para asegurar su
comprensión tanto en pantalla como en formatos impresos.

El sistema utiliza diferentes recursos visuales de manera
complementaria, el color permite establecer asociaciones funcionales; la
iconografía facilita el reconocimiento de los elementos representados;
la tipografía mantiene una identidad común; y la disposición espacial y
los conectores permiten expresar relaciones, dependencias y flujos. De
esta manera, la información no depende de un único recurso visual, sino
de la combinación de varios códigos que se refuerzan entre sí.

#### Estructura y coherencia visual

Los diagramas se construyen a partir de una estructura modular que
permite mantener criterios comunes entre diferentes tipos de
representación sin obligarlos a compartir una composición idéntica, cada
diagrama puede adaptarse a la naturaleza de la información que presenta,
conservando al mismo tiempo los elementos que identifican a la familia.

La organización espacial establece una jerarquía visual que diferencia
los elementos principales, secundarios y las relaciones entre ellos. Los
conectores se utilizan con una función semántica definida, evitando que
la ornamentación compita con la información que deben comunicar. La
iconografía se desarrolla directamente mediante SVG y geometría básica,
lo que permite conservar un estilo homogéneo y mantener los elementos
como gráficos vectoriales independientes de bibliotecas externas de
iconos.

#### Mención de la tipografía y licencia

La familia tipográfica Chakra Petch se utiliza como parte del sistema
gráfico y procede de la distribución de esta familia disponible a través
de Google Fonts, bajo la SIL Open Font License, versión 1.1 (OFL-1.1).
La tipografía se incorpora al mecanismo de exportación para garantizar
que la representación visual conserve la misma identidad tipográfica al
generar los archivos gráficos. La fuente se integra en el SVG utilizado
durante la exportación y se mantiene bajo las condiciones de su
licencia.

La codificación Base64 empleada en este proceso constituye únicamente un
mecanismo técnico para incorporar los datos de la fuente al recurso
gráfico. La atribución y la licencia correspondiente se conservan en la
documentación de licencias y atribuciones del proyecto.

El uso de Chakra Petch no implica afiliación ni respaldo por parte de
sus autores o de Google Fonts.

#### Referencias y criterios técnicos

El diseño toma como referencia prácticas de representación y
documentación técnica utilizadas en el ámbito de las redes de
computadoras, junto con principios de normalización, representación
gráfica y documentación de sistemas. Estas referencias se utilizan como
marco de coherencia y familiaridad, no como una reproducción estricta de
un único estándar gráfico.

#### Sistema de exportación

Los diagramas se construyen originalmente como gráficos SVG. Para su
distribución se utiliza un proceso de exportación que genera archivos
PNG a partir de una copia del SVG original. Esto permite conservar
intacta la representación vectorial utilizada en la página y, al mismo
tiempo, producir imágenes rasterizadas adecuadas para su incorporación
al documento.

Durante la exportación, la tipografía se incorpora al SVG para evitar
que el resultado dependa de la disponibilidad de la fuente en el sistema
donde se realiza la conversión, posteriormente, el SVG se serializa y se
rasteriza mediante las capacidades nativas del navegador. El resultado
se genera como archivo PNG y puede utilizarse de forma independiente del
documento HTML.

El procedimiento utiliza exclusivamente JavaScript y API estándar del
navegador, sin depender de bibliotecas externas para la generación o
rasterización de los diagramas, esto mantiene el sistema autocontenido,
facilita su reproducción y reduce dependencias innecesarias.

#### Código utilizado para la exportación

El siguiente bloque corresponde al código JavaScript utilizado para
realizar la exportación de los diagramas SVG a archivos PNG:

    function descargar(id, filename, w, h){
    const svgOriginal = document.getElementById(id);
    const svg = svgOriginal.cloneNode(true);
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    svg.setAttribute('width', w);
    svg.setAttribute('height', h);

    const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    style.setAttribute('type', 'text/css');
    style.textContent = `
    @font-face{font-family:'Chakra Petch';font-style:normal;font-weight:700;font-display:block;
    src:url(data:font/woff2;base64,${FONT_B64}) format('woff2');}
    @font-face{font-family:'Chakra Petch';font-style:normal;font-weight:400;font-display:block;
    src:url(data:font/woff2;base64,${FONT_B64}) format('woff2');}
    text, tspan { font-family: 'Chakra Petch', sans-serif !important; }
    `;
    svg.insertBefore(style, svg.firstChild);

    const svgString = new XMLSerializer().serializeToString(svg);
    const svgBase64 = btoa(unescape(encodeURIComponent(svgString)));
    const dataUrl = 'data:image/svg+xml;base64,' + svgBase64;

    const factor = 4;
    const canvas = document.createElement('canvas');
    canvas.width = w * factor;
    canvas.height = h * factor;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.decoding = 'sync';
    img.onload = function(){
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(function(blob){
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    }, 'image/png');
    };
    img.onerror = function(){ console.error('Falló rasterización del SVG.'); };
    img.src = dataUrl;
    }

    if (document.fonts && document.fonts.load){
    document.fonts.load("700 14pt 'Chakra Petch'")
    .then(() => console.log('Chakra Petch lista.'))
    .catch(err => console.warn('Chakra Petch no cargó:', err));
    }
