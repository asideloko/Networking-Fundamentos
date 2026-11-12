<p class="tema-num">TEMA 03</p>

# COMPONENTES DE UNA RED

El funcionamiento de una red de computadoras no se limita a la transmisión de datos a través de medios físicos: depende de la interacción coordinada de múltiples elementos que permiten generar, procesar, dirigir y entregar la información.

La encapsulación del Tema 1 y la transmisión del Tema 2 se materializan en equipos concretos. Este tema presenta los componentes que producen, transportan y reciben las tramas, y cómo sus características, por ejemplo la MTU, condicionan lo que ocurre en las capas superiores. Estos elementos, denominados componentes de red, son la base operativa sobre la cual se establece la comunicación entre sistemas.

Desde una perspectiva estructural, los componentes de red se clasifican según su función dentro del proceso de comunicación, distinguiéndose entre dispositivos que generan o consumen información, dispositivos que la transportan o gestionan y los elementos físicos que permiten su interconexión. La Figura 3.1 presenta el mapa de las secciones del tema y la Tabla 3.1 resume la clasificación.

<div class="diagram" id="figura-3-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g403" viewBox="0 0 1200 412" role="img" aria-labelledby="g403-title">
<title id="g403-title">Mapa del Tema 3</title>
<defs></defs>
<g id="g403-c" transform="translate(20 20)"><rect x="0" y="0" width="370.67" height="158" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="0" y1="34" x2="370.67" y2="34" stroke="#d40000" stroke-width="1.5"/>
<text x="185.33" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">3.1 Dispositivos finales</text>
<g transform="translate(185.33 78.64) scale(0.7)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="185.33" y="139" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Origen y destino de la información</text>
<rect x="394.67" y="0" width="370.67" height="158" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="394.67" y1="34" x2="765.33" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="580" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">3.2 Dispositivos intermedios</text>
<g transform="translate(580 78.64) scale(0.7)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<text x="580" y="139" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Reenvío y dirección del tráfico</text>
<rect x="789.33" y="0" width="370.67" height="158" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="789.33" y1="34" x2="1160" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="974.67" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">3.3 Interfaces de red (NIC)</text>
<g transform="translate(974.67 78.64) scale(0.7)" data-lib="plug"><rect x="-14" y="-6" width="28" height="30" rx="3" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"></rect><path d="M-9 -6 V-18 M0 -6 V-18 M9 -6 V-18" stroke="#003ecc" stroke-width="3" stroke-linecap="round"></path></g>
<text x="974.67" y="139" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Conexión entre el equipo y la red</text>
<rect x="0" y="182" width="370.67" height="158" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="0" y1="216" x2="370.67" y2="216" stroke="#dd3a00" stroke-width="1.5"/>
<text x="185.33" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">3.4 Unidad máxima de transmisión (MTU)</text>
<g transform="translate(185.33 260.64) scale(0.7)" data-lib="packet"><rect x="-38" y="-20" width="76" height="40" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><rect x="-38" y="-20" width="26" height="40" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></rect><path d="M-4 -6h30M-4 6h20" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path></g>
<text x="185.33" y="321" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Tamaño máximo de la unidad de datos</text>
<rect x="394.67" y="182" width="370.67" height="158" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="394.67" y1="216" x2="765.33" y2="216" stroke="#7c3aed" stroke-width="1.5"/>
<text x="580" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">3.5 Infraestructura física</text>
<g transform="translate(580 260.64) scale(0.7)" data-lib="cable"><path d="M-40 0 C-26 -30 -14 -30 0 0 S26 30 40 0" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path></g>
<text x="580" y="321" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Elementos físicos de interconexión</text>
<rect x="789.33" y="182" width="370.67" height="158" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="789.33" y1="216" x2="1160" y2="216" stroke="#364e6c" stroke-width="1.5"/>
<text x="974.67" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">3.6 Comunicación en la red</text>
<g transform="translate(974.67 260.64) scale(0.7)" data-lib="fork"><g fill="none" stroke="#364e6c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-30 0 H-6 L20 -18 M-6 0 L20 18"></path><path d="M12 -26 L22 -18 L12 -10 M12 10 L22 18 L12 26"></path></g><circle cx="-30" cy="0" r="5" fill="#364e6c"></circle></g>
<text x="974.67" y="321" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Cómo interactúan los componentes</text></g><text x="600" y="394" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 3.1. Mapa del Tema 3.</text></svg>
</div>

## 3.1 DISPOSITIVOS FINALES

En toda red existen elementos cuya función principal consiste en actuar como origen o destino de la información.

Estos dispositivos representan los extremos del proceso de comunicación y son utilizados directamente por usuarios o aplicaciones. Constituyen el propósito de la red: el intercambio de información entre entidades finales.

Los dispositivos finales abarcan equipos muy distintos entre sí: la Figura 3.2 los agrupa por tipo y la Tabla 3.1 sitúa cada categoría de componentes (finales, intermedios, interfaces e infraestructura) dentro del proceso de comunicación.

<div class="diagram tabla-svg" id="tabla-3-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 343" role="img" aria-labelledby="t13-title"><title id="t13-title">Tabla 3.1. Clasificación de los componentes de red.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="92.0" y="20.0" dominant-baseline="central" text-anchor="middle">Categoría</text>
<text class="tb-ht" x="520.1" y="20.0" dominant-baseline="central" text-anchor="middle">Función</text>
<text class="tb-ht" x="1028.1" y="20.0" dominant-baseline="central" text-anchor="middle">Ejemplos</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Dispositivos finales</text>
<text class="tb-tx" x="196.0" y="60.8" dominant-baseline="central">Generan, envían, reciben o procesan información para utilizar aplicaciones y</text>
<text class="tb-tx" x="196.0" y="83.5" dominant-baseline="central">servicios.</text>
<text class="tb-tx" x="868.2" y="60.8" dominant-baseline="central">Computadoras, servidores, teléfonos,</text>
<text class="tb-tx" x="868.2" y="83.5" dominant-baseline="central">impresoras y dispositivos IoT.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">Dispositivos</text>
<text class="tb-tx tb-b" x="12.0" y="147.0" dominant-baseline="central">intermedios</text>
<text class="tb-tx" x="196.0" y="124.2" dominant-baseline="central">Conectan segmentos y procesan o reenvían tráfico según las funciones de cada</text>
<text class="tb-tx" x="196.0" y="147.0" dominant-baseline="central">equipo.</text>
<text class="tb-tx" x="868.2" y="124.2" dominant-baseline="central">Switches, routers, puntos de acceso y</text>
<text class="tb-tx" x="868.2" y="147.0" dominant-baseline="central">firewalls.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Interfaces de red</text>
<text class="tb-tx" x="196.0" y="187.8" dominant-baseline="central">Proporcionan la conexión entre un dispositivo y el medio de transmisión;</text>
<text class="tb-tx" x="196.0" y="210.5" dominant-baseline="central">implementan las funciones correspondientes a la tecnología de red utilizada.</text>
<text class="tb-tx" x="868.2" y="199.1" dominant-baseline="central">NIC Ethernet y adaptadores Wi-Fi.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">Infraestructura</text>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">física</text>
<text class="tb-tx" x="196.0" y="262.6" dominant-baseline="central">Proporciona el soporte físico para la interconexión y transmisión de señales.</text>
<text class="tb-tx" x="868.2" y="251.2" dominant-baseline="central">Cables, conectores, transceptores,</text>
<text class="tb-tx" x="868.2" y="274.0" dominant-baseline="central">paneles de parcheo y racks.</text>
<text class="tb-cap" x="600.0" y="320.8" text-anchor="middle">Tabla 3.1. Clasificación de los componentes de red.</text></svg>
</div>

En el contexto de las arquitecturas *Zero Trust* (Tema 12), el término *endpoint* se emplea habitualmente para referirse a los dispositivos finales que solicitan acceso a los recursos, como ocurre en NIST SP 800-207 (*Zero Trust Architecture*) y en las guías *Zero Trust* de CISA.

### Características principales

Un dispositivo final (también denominado *host* o sistema final) es cualquier equipo capaz de generar, enviar, recibir o procesar datos dentro de una red.

Entre sus características principales se encuentran la capacidad para ejecutar aplicaciones de usuario, la generación y consumo de tráfico de red, la interacción directa con el usuario y la asociación a una o varias direcciones IP.

Estos dispositivos operan en los extremos del flujo de datos, encapsulando o desencapsulando la información conforme a los protocolos utilizados, y pueden operar con distintos sistemas operativos y pilas de protocolos.

La estandarización de TCP/IP facilita la interoperabilidad, independientemente del fabricante o de la plataforma.

Dentro de esta categoría se incluyen los siguientes tipos de equipos:

<div class="diagram" id="figura-3-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g406" viewBox="0 0 1200 216.821" role="img" aria-labelledby="g406-title">
<title id="g406-title">Tipos de dispositivos finales</title>
<defs><marker id="g406m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g406n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g406-c" transform="translate(21.536 21.536) scale(1.024)"><rect x="0" y="0" width="210" height="140" rx="5.86" fill="#fbe6e6" stroke="#d40000" stroke-width="1.953"/>
<line x1="0" y1="34" x2="210" y2="34" stroke="#d40000" stroke-width="1.465"/>
<text x="105" y="23" font-size="13.672pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Computadoras</text>
<rect x="230" y="0" width="210" height="140" rx="5.86" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.953"/>
<line x1="230" y1="34" x2="440" y2="34" stroke="#003ecc" stroke-width="1.465"/>
<text x="335" y="23" font-size="13.672pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Servidores</text>
<rect x="460" y="0" width="210" height="140" rx="5.86" fill="#e6f4ee" stroke="#009254" stroke-width="1.953"/>
<line x1="460" y1="34" x2="670" y2="34" stroke="#009254" stroke-width="1.465"/>
<text x="565" y="23" font-size="13.672pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Móviles</text>
<g transform="translate(565 91) scale(1.7) translate(-565 -91)"><rect x="551" y="69" width="28" height="44" fill="#ffffff" stroke="#009254" stroke-width="1.5"/><rect x="555" y="75" width="20" height="28" fill="#bfe4d4" stroke="#009254" stroke-width="1"/><circle cx="565" cy="108" r="2.5" fill="#009254" stroke="#009254" stroke-width="1.5"/></g>
<rect x="690" y="0" width="210" height="140" rx="5.86" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.953"/>
<line x1="690" y1="34" x2="900" y2="34" stroke="#dd3a00" stroke-width="1.465"/>
<text x="795" y="23" font-size="13.672pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Impresoras de red</text>
<g transform="translate(795 91) scale(1.7) translate(-795 -91)"><rect x="777" y="69" width="36" height="16" fill="#ffffff" stroke="#dd3a00" stroke-width="1.5"/><rect x="767" y="85" width="56" height="22" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"/><rect x="777" y="99" width="36" height="14" fill="#ffffff" stroke="#dd3a00" stroke-width="1.5"/><line x1="783" y1="104" x2="807" y2="104" stroke="#dd3a00" stroke-width="1"/></g>
<rect x="920" y="0" width="210" height="140" rx="5.86" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.953"/>
<line x1="920" y1="34" x2="1130" y2="34" stroke="#7c3aed" stroke-width="1.465"/>
<text x="1025" y="23" font-size="13.672pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Dispositivos IoT</text>
<g transform="translate(1025 91) scale(1.7) translate(-1025 -91)"><circle cx="1025" cy="91" r="7" fill="#7c3aed" stroke="#7c3aed" stroke-width="1.5"/><path d="M -14 -10 A 17 17 0 0 0 -14 10" fill="none" stroke="#7c3aed" stroke-width="2" transform="translate(1025 91)"/><path d="M 14 -10 A 17 17 0 0 1 14 10" fill="none" stroke="#7c3aed" stroke-width="2" transform="translate(1025 91)"/><path d="M -22 -16 A 27 27 0 0 0 -22 16" fill="none" stroke="#7c3aed" stroke-width="2" transform="translate(1025 91)"/><path d="M 22 -16 A 27 27 0 0 1 22 16" fill="none" stroke="#7c3aed" stroke-width="2" transform="translate(1025 91)"/></g>
<g transform="translate(105 94.907) scale(0.977)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(335 89.755) scale(0.83)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#003ecc"/><path d="M-34 -27.5h34" stroke="#003ecc" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#003ecc"/><path d="M-34 1.5h34" stroke="#003ecc" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#003ecc"/><path d="M-34 30.5h34" stroke="#003ecc" stroke-width="3" stroke-linecap="round"/></g></g><text x="600" y="198.981" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 3.2. Tipos de dispositivos finales.</text></svg>
</div>

### Computadoras personales y estaciones de trabajo

Equipos de propósito general utilizados por los usuarios finales para acceder a los servicios de la red.

### Servidores

Sistemas dedicados a proporcionar servicios específicos, como almacenamiento de archivos, bases de datos, correo electrónico o aplicaciones web.

### Dispositivos móviles

Teléfonos inteligentes, tabletas y otros dispositivos portátiles que se conectan mediante redes inalámbricas.

### Impresoras de red

Periféricos que reciben trabajos de impresión a través de la red.

### Dispositivos IoT

Sensores, actuadores y dispositivos embebidos que intercambian datos con otros sistemas.

## 3.2 DISPOSITIVOS INTERMEDIOS

A diferencia de los dispositivos finales, los dispositivos intermedios no generan ni consumen directamente datos de aplicación de los usuarios (aunque sí intercambian tráfico de control, como el de los protocolos de enrutamiento).

Su función es transportar, controlar y direccionar los datos; en última instancia, hacer posible que la información llegue del origen al destino a través de la infraestructura disponible, tomando decisiones de reenvío en cada salto de la red. La Figura 3.3 presenta los tipos de dispositivos intermedios que se describen a continuación.

<div class="diagram" id="figura-3-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g407" viewBox="0 0 1200 560.673" role="img" aria-labelledby="g407-title">
<title id="g407-title">Dispositivos intermedios</title>
<defs><marker id="g407m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g407n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g407-c" transform="translate(21.807 21.807) scale(1.205)"><rect x="0" y="0" width="300" height="190" rx="4.981" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.075"/>
<line x1="0" y1="34" x2="300" y2="34" stroke="#003ecc" stroke-width="1.66"/>
<text x="150" y="23" font-size="14.108pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Switch (capa 2)</text>
<rect x="14" y="150" width="272" height="28" rx="4.981" fill="#bfcff2" stroke="#003ecc" stroke-width="1.66"/>
<text x="150" y="170.002" font-size="9.959pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Reenvía tramas por MAC</text>
<rect x="330" y="0" width="300" height="190" rx="4.981" fill="#e6f4ee" stroke="#009254" stroke-width="2.075"/>
<line x1="330" y1="34" x2="630" y2="34" stroke="#009254" stroke-width="1.66"/>
<text x="480" y="23" font-size="14.108pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router (capa 3)</text>
<rect x="344" y="150" width="272" height="28" rx="4.981" fill="#bfe4d4" stroke="#009254" stroke-width="1.66"/>
<text x="480" y="170.002" font-size="9.959pt" font-weight="700" fill="#065f46" text-anchor="middle">Reenvía paquetes por IP</text>
<rect x="660" y="0" width="300" height="190" rx="4.981" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.075"/>
<line x1="660" y1="34" x2="960" y2="34" stroke="#7c3aed" stroke-width="1.66"/>
<text x="810" y="23" font-size="14.108pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Punto de acceso</text>
<g transform="translate(810 92) scale(1.7) translate(-810 -92)"><path d="M -5.6 2.4 A 8 8 0 0 1 5.6 2.4" fill="none" stroke="#7c3aed" stroke-width="2" transform="translate(810 92)"/><path d="M -11.2 -3.2 A 16 16 0 0 1 11.2 -3.2" fill="none" stroke="#7c3aed" stroke-width="2" transform="translate(810 92)"/><path d="M -16.8 -8.8 A 24 24 0 0 1 16.8 -8.8" fill="none" stroke="#7c3aed" stroke-width="2" transform="translate(810 92)"/><circle cx="810" cy="100" r="3" fill="#7c3aed" stroke="#7c3aed" stroke-width="1.5"/><rect x="796" y="106" width="28" height="8" fill="#decefa" stroke="#7c3aed" stroke-width="1"/></g>
<rect x="674" y="150" width="272" height="28" rx="4.981" fill="#decefa" stroke="#7c3aed" stroke-width="1.66"/>
<text x="810" y="170.002" font-size="9.959pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Une Wi-Fi y cableado</text>
<rect x="0" y="214" width="300" height="190" rx="4.981" fill="#fbe6e6" stroke="#d40000" stroke-width="2.075"/>
<line x1="0" y1="248" x2="300" y2="248" stroke="#d40000" stroke-width="1.66"/>
<text x="150" y="237" font-size="14.108pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Firewall</text>
<g transform="translate(150 306) scale(1.7) translate(-150 -306)"><path d="M 0 -22 L 20 -14 L 20 2 C 20 14 0 22 0 22 C 0 22 -20 14 -20 2 L -20 -14 Z" fill="#d40000" stroke="#d40000" stroke-width="2" transform="translate(150 306)"/><line x1="142" y1="306" x2="148" y2="313" stroke="#d40000" stroke-width="2"/><line x1="148" y1="313" x2="159" y2="299" stroke="#d40000" stroke-width="2"/></g>
<rect x="14" y="364" width="272" height="28" rx="4.981" fill="#f4bfbf" stroke="#d40000" stroke-width="1.66"/>
<text x="150" y="384.002" font-size="9.959pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Filtra según reglas</text>
<rect x="330" y="214" width="300" height="190" rx="4.981" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.075"/>
<line x1="330" y1="248" x2="630" y2="248" stroke="#dd3a00" stroke-width="1.66"/>
<text x="480" y="237" font-size="14.108pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Balanceador de carga</text>
<g transform="translate(480 306) scale(1.7) translate(-480 -306)"><line x1="454" y1="306" x2="474" y2="306" stroke="#dd3a00" stroke-width="2"/><line x1="474" y1="306" x2="502" y2="292" stroke="#dd3a00" stroke-width="2"/><line x1="474" y1="306" x2="502" y2="306" stroke="#dd3a00" stroke-width="2"/><line x1="474" y1="306" x2="502" y2="320" stroke="#dd3a00" stroke-width="2"/><circle cx="454" cy="306" r="3" fill="#dd3a00" stroke="#dd3a00" stroke-width="1.5"/></g>
<rect x="344" y="364" width="272" height="28" rx="4.981" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.66"/>
<text x="480" y="384.002" font-size="9.959pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Distribuye el tráfico</text>
<rect x="660" y="214" width="300" height="190" rx="4.981" fill="#ebedf0" stroke="#364e6c" stroke-width="2.075"/>
<line x1="660" y1="248" x2="960" y2="248" stroke="#364e6c" stroke-width="1.66"/>
<text x="810" y="237" font-size="14.108pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Proxy inverso / WAF</text>
<g transform="translate(810 306) scale(1.7) translate(-810 -306)"><path d="M 0 -22 L 20 -14 L 20 2 C 20 14 0 22 0 22 C 0 22 -20 14 -20 2 L -20 -14 Z" fill="#364e6c" stroke="#364e6c" stroke-width="2" transform="translate(810 306)"/><line x1="802" y1="306" x2="808" y2="313" stroke="#364e6c" stroke-width="2"/><line x1="808" y1="313" x2="819" y2="299" stroke="#364e6c" stroke-width="2"/></g>
<rect x="674" y="364" width="272" height="28" rx="4.981" fill="#cdd3da" stroke="#364e6c" stroke-width="1.66"/>
<text x="810" y="384.002" font-size="9.959pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Capa 7 · HTTP/HTTPS</text>
<g transform="translate(150 92) scale(0.83)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#003ecc"/><circle cx="-24" cy="-15" r="2.5" fill="#003ecc"/><circle cx="-4" cy="-15" r="2.5" fill="#003ecc"/><circle cx="16" cy="-15" r="2.5" fill="#003ecc"/><circle cx="36" cy="-15" r="2.5" fill="#003ecc"/></g><g transform="translate(480 92) scale(0.83)" data-lib="router"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><g fill="none" stroke="#009254" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M-36 -8H30M20 -17l10 9-10 9"/><path d="M36 12H-30M-20 3l-10 9 10 9"/></g></g></g><text x="600" y="542.833" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 3.3. Dispositivos intermedios.</text></svg>
</div>

Un dispositivo intermedio gestiona el tránsito de datos entre dispositivos y redes mediante funciones como el reenvío de tramas o paquetes, la selección de rutas, el filtrado y la segmentación lógica.

No todos los dispositivos intermedios realizan todas estas funciones, ni todos garantizan por sí mismos la entrega correcta de los datos.

Entre sus funciones están el reenvío entre segmentos de red, la selección de rutas mediante protocolos de enrutamiento, el filtrado según políticas de seguridad y la segmentación de dominios de difusión (*broadcast*) y de colisión.

También pueden realizar control de acceso y registro de eventos. Entre los dispositivos intermedios más representativos se encuentran:

### Switches (conmutadores)

Operan principalmente en la capa de enlace de datos (capa 2) utilizando direcciones MAC.

Los *switches* multicapa (*multilayer switches*) incorporan funcionalidades de capa 3, permitiendo el enrutamiento entre VLAN sin necesidad de un *router* externo.

### Enrutadores (routers)

Operan en la capa de red (capa 3) y dirigen paquetes entre redes diferentes mediante tablas de enrutamiento.

### Puntos de acceso inalámbrico

Permiten la conexión de dispositivos finales a la red cableada mediante Wi-Fi, actuando como puentes entre el medio inalámbrico y el medio cableado.

### Firewalls

Dispositivos de seguridad que inspeccionan y filtran el tráfico de acuerdo con reglas previamente definidas. Generalmente se ubican en los límites de la red.

### Balanceadores de carga

Distribuyen el tráfico entre múltiples servidores para optimizar el rendimiento y la disponibilidad del servicio.

### Dispositivos adicionales en redes modernas

#### Firewalls de aplicaciones web

Inspeccionan y filtran el tráfico utilizando reglas específicas para protocolos y aplicaciones web.

#### Proxies inversos

Reciben las solicitudes de los clientes y las distribuyen entre múltiples servidores de *backend*.

#### Balanceadores de carga de capa 4 y capa 7

Distribuyen conexiones entre servidores utilizando información de transporte (TCP/UDP) o de aplicación (HTTP/HTTPS), según el nivel en el que operan.

#### Proxies (capa 7)

Filtran y redirigen tráfico HTTP y HTTPS.

## 3.3 INTERFACES DE RED (NIC)

Para que un dispositivo pueda conectarse a un medio de transmisión y participar en una red, requiere un componente de *hardware* y *software* encargado de realizar la conversión entre los datos internos del sistema y las señales físicas del medio.

Este componente recibe el nombre de interfaz de red o NIC (*Network Interface Card*); actúa como intermediario entre el bus del sistema (por ejemplo, PCIe) y el medio físico (cable de par trenzado, fibra óptica o aire).

Una NIC implementa funciones de la capa física y de parte de la capa de enlace de datos, lo que permite que un equipo se conecte a un medio de transmisión específico. La Figura 3.4 resume sus funciones principales: control de acceso al medio, gestión de tramas, conversión de datos digitales a señales e identificación única. A continuación se describe cada una.

### Control de acceso al medio

Implementa los mecanismos necesarios para regular el acceso al canal de comunicación.

En Ethernet clásico se utilizaba CSMA/CD (*Carrier Sense Multiple Access with Collision Detection*), mientras que en redes inalámbricas se emplea CSMA/CA (*Carrier Sense Multiple Access with Collision Avoidance*).

<div class="diagram" id="figura-3-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g408" viewBox="0 0 1200 262.82" role="img" aria-labelledby="g408-title">
<title id="g408-title">Funciones de la interfaz de red (NIC)</title>
<defs><marker id="g408m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g408n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g408-c" transform="translate(21.668 21.668) scale(1.112)"><rect x="0" y="0" width="210" height="170" rx="5.395" fill="#ebedf0" stroke="#364e6c" stroke-width="1.798"/>
<line x1="0" y1="34" x2="210" y2="34" stroke="#364e6c" stroke-width="1.349"/>
<text x="105" y="34" font-size="12.59pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Equipo</text>
<rect x="15" y="126" width="180" height="30" rx="5.395" fill="#cdd3da" stroke="#364e6c" stroke-width="1.349"/>
<text x="105" y="147.002" font-size="9.442pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Bus del sistema (PCIe)</text>
<rect x="300" y="0" width="440" height="170" rx="5.395" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.798"/>
<line x1="300" y1="34" x2="740" y2="34" stroke="#003ecc" stroke-width="1.349"/>
<text x="520" y="23" font-size="12.59pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">NIC</text>
<rect x="318" y="52" width="196" height="36" rx="5.395" fill="#bfcff2" stroke="#003ecc" stroke-width="1.349"/>
<text x="416" y="76.0025" font-size="9.442pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Tramas · MAC · FCS</text>
<rect x="524" y="52" width="196" height="36" rx="5.395" fill="#bfcff2" stroke="#003ecc" stroke-width="1.349"/>
<text x="622" y="76.0025" font-size="9.442pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Acceso al medio</text>
<rect x="318" y="102" width="196" height="36" rx="5.395" fill="#bfcff2" stroke="#003ecc" stroke-width="1.349"/>
<text x="416" y="126.002" font-size="9.442pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Bits y señales</text>
<rect x="524" y="102" width="196" height="36" rx="5.395" fill="#bfcff2" stroke="#003ecc" stroke-width="1.349"/>
<text x="622" y="126.002" font-size="9.442pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Offloading</text>
<rect x="830" y="0" width="210" height="170" rx="5.395" fill="#e6f4ee" stroke="#009254" stroke-width="1.798"/>
<line x1="830" y1="34" x2="1040" y2="34" stroke="#009254" stroke-width="1.349"/>
<text x="935" y="28" font-size="12.59pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Medio físico</text>
<path d="M -32 0 C -20 -22 -8 -22 0 0 C 8 22 20 22 32 0" fill="none" stroke="#009254" stroke-width="2.697" transform="translate(935 86)"/>
<rect x="845" y="126" width="180" height="30" rx="5.395" fill="#bfe4d4" stroke="#009254" stroke-width="1.349"/>
<text x="935" y="147.002" font-size="9.442pt" font-weight="700" fill="#065f46" text-anchor="middle">Cobre · fibra · aire</text>
<line x1="214" y1="85" x2="296" y2="85" stroke="#364e6c" stroke-width="1.798" marker-end="url(#g408m)" marker-start="url(#g408n)"/>
<line x1="744" y1="85" x2="826" y2="85" stroke="#364e6c" stroke-width="1.798" marker-end="url(#g408m)" marker-start="url(#g408n)"/>
<g transform="translate(105 87.518) scale(0.629)" data-lib="pc"><g stroke="#364e6c" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#ebedf0" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g></g><text x="600" y="244.98" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 3.4. Funciones de la interfaz de red (NIC).</text></svg>
</div>

CSMA/CD es el mecanismo de acceso utilizado en Ethernet *half-duplex* y en medios compartidos, como 10BASE5 y 10BASE2, así como en enlaces 10BASE-T conectados a hubs.

Con la adopción generalizada de *switches* y enlaces *full-duplex*, cada puerto pasó a operar como un enlace punto a punto dedicado, lo que elimina las colisiones.

CSMA/CD se considera obsoleto en las redes Ethernet modernas, porque los estándares de 10 Gb/s y superiores ya no definen operación *half-duplex*.

### Gestión de tramas

Construye y procesa tramas conforme al formato definido por el protocolo de enlace correspondiente (Ethernet, IEEE 802.11, entre otros), incorporando elementos como:

- Dirección MAC de origen.
- Dirección MAC de destino.
- Información de control.
- Secuencia de verificación de errores (FCS/CRC).

### Conversión de datos digitales a señales

Transforma los datos en formato binario en señales adecuadas para el medio de transmisión: señales eléctricas en Ethernet sobre cobre, señales ópticas en enlaces de fibra y señales de radiofrecuencia en redes inalámbricas.

### Identificación única

En Ethernet, las interfaces utilizan normalmente direcciones MAC de 48 bits. Una dirección puede estar asignada globalmente por un fabricante o administrada localmente por *software*; por ello, no debe suponerse que toda dirección MAC es inmutable ni que siempre identifica de manera inequívoca al fabricante.

Según el medio de operación, las interfaces de red se clasifican en:

### Interfaces cableadas

Basadas principalmente en Ethernet, utilizan conectores modulares 8P8C —comúnmente llamados RJ-45— para cableado de par trenzado, o módulos/transceptores conectados a puertos SFP/SFP+ para distintos tipos de enlace, incluida la fibra óptica.

Proporcionan velocidades desde 10 Mb/s hasta 100 Gb/s o superiores, dependiendo de la tecnología utilizada.

### Interfaces inalámbricas

Basadas en estándares como IEEE 802.11 (*Wi-Fi*), Bluetooth o tecnologías celulares como 4G y 5G.

Proporcionan movilidad y flexibilidad, aunque presentan una mayor variabilidad de rendimiento debido a interferencias, distancia y condiciones del entorno.

### Interfaces especializadas

Incluyen adaptadores diseñados para aplicaciones específicas, como enlaces de fibra óptica de larga distancia o interfaces utilizadas en redes industriales.

### Optimizaciones de NIC modernas

En redes de alto rendimiento (10 Gb/s o superiores), la capacidad de procesamiento de la CPU puede convertirse en un factor limitante, porque debe tratar de forma constante las cabeceras y demás operaciones de cada paquete. Para aliviar esa carga, algunas NIC modernas incorporan mecanismos de descarga de procesamiento (*offloading*) que trasladan determinadas tareas desde la CPU hacia el *hardware* de red.

Linux permite administrarlos mediante herramientas como *ethtool*; por ejemplo, el siguiente comando muestra el estado de estas funciones en la interfaz eth0:

```text
Networking@SecOpsMX:~$ ethtool -k eth0
```

Estas funciones mejoran el rendimiento efectivo (*throughput*) en redes con anchos de banda elevados. Sin embargo, una configuración inadecuada o controladores defectuosos pueden provocar errores aparentes (por ejemplo, *checksums* incorrectos en las capturas de tráfico) o pérdidas de rendimiento.

A su vez, los fallos físicos en la interfaz o direcciones MAC duplicadas en un mismo segmento pueden impedir completamente la comunicación.

#### TSO / GSO

Permiten que el sistema operativo entregue segmentos grandes y que estos se dividan en paquetes compatibles con el tamaño máximo de transmisión (MTU).

TSO (*TCP Segmentation Offload*) permite que una NIC compatible divida en segmentos TCP más pequeños un bloque grande entregado por el sistema operativo. GSO (*Generic Segmentation Offload*) es un mecanismo genérico del *kernel* Linux que aplaza la segmentación en *software* hasta el punto más tardío posible; puede utilizarse con o sin descarga TSO de *hardware*.

#### Checksum offloading

Permite que la NIC calcule los valores de verificación (*checksums*) en lugar de la CPU. La disponibilidad de esta función depende del soporte de la NIC y de su controlador.

#### LRO / GRO

Agrupan múltiples paquetes pequeños en unidades mayores antes de entregarlos al sistema operativo, reduciendo la cantidad de operaciones necesarias para su procesamiento.

LRO lo hace en el *hardware* de la NIC y GRO en el *kernel*; como LRO puede alterar las cabeceras de los paquetes, suele desactivarse en equipos que enrutan o actúan como bridge, mientras que GRO está diseñado para preservarlas.

La NIC es el punto de intercambio entre el dispositivo y la infraestructura de red. Las funciones y mecanismos de optimización de una NIC se ilustran en el **Anexo I.**

## 3.4 UNIDAD MÁXIMA DE TRANSMISIÓN

La Unidad Máxima de Transmisión (*Maximum Transmission Unit*, MTU) define el tamaño máximo, expresado en bytes, que puede tener un paquete transmitido a través de un enlace de red sin requerir fragmentación.

<div class="diagram" id="figura-3-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g409" viewBox="0 0 1200 414.788" role="img" aria-labelledby="g409-title">
<title id="g409-title">Trama Ethernet, MTU y MSS</title>
<defs><marker id="g409m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g409n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g409-c" transform="translate(21.599 21.599) scale(1.066)"><rect x="0" y="0" width="170" height="60" rx="5.628" fill="#ebedf0" stroke="#364e6c" stroke-width="1.876"/>
<text x="85" y="26" font-size="9.85pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cabecera Ethernet</text>
<text x="85" y="46" font-size="9.85pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">14 B</text>
<rect x="170" y="0" width="620" height="60" rx="5.628" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.876"/>
<text x="480" y="26" font-size="9.85pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Paquete IP · MTU</text>
<text x="480" y="46" font-size="9.85pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">1500 B</text>
<rect x="790" y="0" width="90" height="60" rx="5.628" fill="#ebedf0" stroke="#364e6c" stroke-width="1.876"/>
<text x="835" y="26" font-size="9.85pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">FCS</text>
<text x="835" y="46" font-size="9.85pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">4 B</text>
<line x1="170" y1="60" x2="170" y2="130" stroke="#003ecc" stroke-width="1.407" stroke-dasharray="5.628 3.752"/>
<line x1="790" y1="60" x2="790" y2="130" stroke="#003ecc" stroke-width="1.407" stroke-dasharray="5.628 3.752"/>
<rect x="170" y="130" width="110" height="56" rx="5.628" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.876"/>
<text x="225" y="156" font-size="9.85pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IPv4</text>
<text x="225" y="175" font-size="9.85pt" fill="#5b21b6" text-anchor="middle" font-weight="400">20 B</text>
<rect x="280" y="130" width="110" height="56" rx="5.628" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.876"/>
<text x="335" y="156" font-size="9.85pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">TCP</text>
<text x="335" y="175" font-size="9.85pt" fill="#7c2d12" text-anchor="middle" font-weight="400">20 B</text>
<rect x="390" y="130" width="400" height="56" rx="5.628" fill="#e6f4ee" stroke="#009254" stroke-width="1.876"/>
<text x="590" y="156" font-size="9.85pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Datos · MSS</text>
<text x="590" y="175" font-size="9.85pt" fill="#065f46" text-anchor="middle" font-weight="400">1460 B</text>
<rect x="0" y="236" width="260" height="84" rx="5.628" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.876"/>
<line x1="0" y1="266" x2="260" y2="266" stroke="#003ecc" stroke-width="1.407"/>
<text x="130" y="257" font-size="13.133pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Ethernet</text>
<text x="130" y="300" font-size="11.257pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">1500 B</text>
<rect x="275" y="236" width="260" height="84" rx="5.628" fill="#e6f4ee" stroke="#009254" stroke-width="1.876"/>
<line x1="275" y1="266" x2="535" y2="266" stroke="#009254" stroke-width="1.407"/>
<text x="405" y="257" font-size="13.133pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">PPPoE</text>
<text x="405" y="300" font-size="11.257pt" font-weight="700" fill="#065f46" text-anchor="middle">1492 B</text>
<rect x="550" y="236" width="260" height="84" rx="5.628" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.876"/>
<line x1="550" y1="266" x2="810" y2="266" stroke="#dd3a00" stroke-width="1.407"/>
<text x="680" y="257" font-size="13.133pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">802.1Q</text>
<text x="680" y="300" font-size="11.257pt" font-weight="700" fill="#7c2d12" text-anchor="middle">IP 1500 B · trama +4 B</text>
<rect x="825" y="236" width="260" height="84" rx="5.628" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.876"/>
<line x1="825" y1="266" x2="1085" y2="266" stroke="#7c3aed" stroke-width="1.407"/>
<text x="955" y="257" font-size="13.133pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Jumbo frames</text>
<text x="955" y="300" font-size="11.257pt" font-weight="700" fill="#5b21b6" text-anchor="middle">9000 B o más</text>
</g><text x="600" y="396.948" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 3.5. Trama Ethernet, MTU y MSS.</text></svg>
</div>

Cada tecnología de enlace establece un tamaño máximo de transmisión determinado por sus características de funcionamiento. La relación entre VLAN, MTU, *jumbo frames* y fragmentación se muestra en la Figura 3.5.

Entre los valores más utilizados se encuentran los siguientes:

### Ethernet

Utiliza normalmente una MTU de 1500 bytes para paquetes IP. Este valor no incluye la cabecera Ethernet de 14 bytes ni el campo de verificación de errores FCS (*Frame Check Sequence*) de 4 bytes. Es el tamaño estándar empleado en la mayoría de redes LAN basadas en Ethernet.

### PPPoE (utilizado en conexiones DSL)

Utiliza una MTU de 1492 bytes, debido a que incorpora una sobrecarga adicional de 8 bytes correspondiente a la encapsulación PPPoE.

### Redes con VLAN (IEEE 802.1Q)

La etiqueta VLAN añade 4 bytes adicionales a la trama Ethernet. Aunque esta modificación incrementa el tamaño de la trama, muchos dispositivos mantienen una MTU IP efectiva de 1500 bytes mediante soporte para tramas ligeramente mayores.

### Enlaces con jumbo frames

Permiten utilizar MTU superiores, generalmente de 9000 bytes o más.

Son habituales en centros de datos debido a que reducen la sobrecarga asociada a las cabeceras y mejoran la eficiencia en transferencias de grandes volúmenes de información.

La MTU importa porque los dispositivos de red, especialmente los *routers*, deben determinar qué acción realizar cuando un paquete supera el tamaño permitido por el enlace de salida. Cuando un paquete excede la MTU disponible, el dispositivo puede fragmentarlo o, si la fragmentación no está permitida, descartarlo y avisar al emisor:

### Fragmentación del paquete IP

En IPv4, un *router* puede fragmentar un paquete si el bit DF (*Don't Fragment*) no está activado y la fragmentación está permitida.

Aunque este mecanismo permite la transmisión, introduce sobrecarga adicional; los fragmentos se vuelven a ensamblar en el destino, no en cada *router* intermedio.

En IPv6, los *routers* no fragmentan los paquetes: solo el nodo de origen puede hacerlo (RFC 8200).

### Mensajes ICMP para descubrimiento de MTU

Cuando la fragmentación no está permitida (indicador *Don't Fragment*, DF, en IPv4) o no es posible (IPv6), el dispositivo intermedio descarta el paquete e informa al emisor, mediante un mensaje ICMP, para que reduzca el tamaño de los paquetes.

En IPv4 se utiliza el mensaje ICMPv4 Tipo 3, Código 4: *Destination Unreachable*, *Fragmentation Needed and Don't Fragment was Set*.

En IPv6 se utiliza el mensaje ICMPv6 Tipo 2, Código 0: *Packet Too Big*.

Estos mecanismos sustentan *Path MTU Discovery* (PMTUD), cuyo objetivo es determinar dinámicamente el tamaño máximo de paquete permitido a lo largo de una ruta. Los estándares relacionados incluyen:

- RFC 1191: *Path MTU Discovery* para IPv4.
- RFC 8201: *Path MTU Discovery* para IPv6.
- RFC 4821: mecanismo *Packetization Layer Path MTU Discovery* (PLPMTUD) para datagramas IPv4 e IPv6.
- RFC 8899: *Datagram Packetization Layer PMTUD* (DPLPMTUD), que actualiza y amplía los mecanismos de PLPMTUD.

### Capa de enlace

En la capa de enlace, el tratamiento de una trama que supera el tamaño admitido depende de la tecnología: muchas interfaces descartan las tramas demasiado grandes. Una configuración incorrecta de la MTU puede provocar pérdida de paquetes, disminución del rendimiento y fallos de conectividad difíciles de diagnosticar.

Por ejemplo, establecer una MTU superior a la soportada por un enlace cuyo valor real es de 1500 bytes puede ocasionar que determinados paquetes sean descartados.

En una red Ethernet convencional:

- MTU: 1500 bytes.
- Cabecera IPv4: 20 bytes.
- Cabecera TCP: 20 bytes.
- MSS resultante habitual: 1460 bytes.

En redes basadas en TCP, este problema se mitiga mediante el anuncio del MSS (*Maximum Segment Size*) durante el establecimiento de la conexión (opción TCP incluida en los segmentos SYN).

El MSS anunciado por un extremo indica la cantidad máxima de datos de segmento TCP (sin incluir las cabeceras IP y TCP) que declara poder recibir. El valor habitual de 1460 bytes se obtiene con una MTU IP de 1500 bytes y cabeceras IPv4 y TCP de 20 bytes cada una, sin opciones.

Conviene notar que el MSS no garantiza por sí solo que el segmento atraviese toda la ruta sin exceder la MTU de algún enlace intermedio; para detectar o evitar ese problema se utilizan mecanismos como PMTUD o PLPMTUD.

## 3.5 INFRAESTRUCTURA FÍSICA

La comunicación en una red requiere una infraestructura física que permita la interconexión de todos sus componentes. Esta infraestructura está conformada por los elementos tangibles que soportan la transmisión de datos, más allá de los dispositivos activos encargados del procesamiento y direccionamiento de la información. La Figura 3.6 resume sus componentes.

<div class="diagram" id="figura-3-06" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g410" viewBox="0 0 1200 506.351" role="img" aria-labelledby="g410-title">
<title id="g410-title">Componentes de la infraestructura física</title>
<defs><marker id="g410m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g410n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g410-c" transform="translate(21.607 21.607) scale(1.071)"><rect x="0" y="0" width="340" height="190" rx="5.602" fill="#fbe6e6" stroke="#d40000" stroke-width="1.867"/>
<line x1="0" y1="34" x2="340" y2="34" stroke="#d40000" stroke-width="1.4"/>
<text x="170" y="23" font-size="13.072pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Racks y gabinetes</text>
<g transform="translate(170 92) scale(1.7) translate(-170 -92)"><rect x="144" y="70" width="52" height="12" fill="#f4bfbf" stroke="#d40000" stroke-width="1.2"/><line x1="150" y1="76" x2="162" y2="76" stroke="#d40000" stroke-width="1.5"/><rect x="144" y="85" width="52" height="12" fill="#f4bfbf" stroke="#d40000" stroke-width="1.2"/><line x1="150" y1="91" x2="162" y2="91" stroke="#d40000" stroke-width="1.5"/><rect x="144" y="100" width="52" height="12" fill="#f4bfbf" stroke="#d40000" stroke-width="1.2"/><line x1="150" y1="106" x2="162" y2="106" stroke="#d40000" stroke-width="1.5"/></g>
<rect x="14" y="150" width="312" height="28" rx="5.602" fill="#f4bfbf" stroke="#d40000" stroke-width="1.4"/>
<text x="170" y="170.002" font-size="9.804pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Estándar de 19 pulgadas</text>
<rect x="370" y="0" width="340" height="190" rx="5.602" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.867"/>
<line x1="370" y1="34" x2="710" y2="34" stroke="#003ecc" stroke-width="1.4"/>
<text x="540" y="23" font-size="13.072pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cables de red</text>
<g transform="translate(540 92) scale(1.7) translate(-540 -92)"><path d="M -32 0 C -20 -22 -8 -22 0 0 C 8 22 20 22 32 0" fill="none" stroke="#003ecc" stroke-width="3" transform="translate(540 92)"/></g>
<rect x="384" y="150" width="312" height="28" rx="5.602" fill="#bfcff2" stroke="#003ecc" stroke-width="1.4"/>
<text x="540" y="170.002" font-size="9.804pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">UTP · fibra · coaxial</text>
<rect x="740" y="0" width="340" height="190" rx="5.602" fill="#e6f4ee" stroke="#009254" stroke-width="1.867"/>
<line x1="740" y1="34" x2="1080" y2="34" stroke="#009254" stroke-width="1.4"/>
<text x="910" y="23" font-size="13.072pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Conectores</text>
<g transform="translate(910 92) scale(1.7) translate(-910 -92)"><rect x="894" y="84" width="32" height="26" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><line x1="901" y1="84" x2="901" y2="76" stroke="#009254" stroke-width="2"/><line x1="907" y1="84" x2="907" y2="76" stroke="#009254" stroke-width="2"/><line x1="913" y1="84" x2="913" y2="76" stroke="#009254" stroke-width="2"/><line x1="919" y1="84" x2="919" y2="76" stroke="#009254" stroke-width="2"/></g>
<rect x="754" y="150" width="312" height="28" rx="5.602" fill="#bfe4d4" stroke="#009254" stroke-width="1.4"/>
<text x="910" y="170.002" font-size="9.804pt" font-weight="700" fill="#065f46" text-anchor="middle">RJ-45 · LC · SC · MPO</text>
<rect x="0" y="214" width="340" height="190" rx="5.602" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.867"/>
<line x1="0" y1="248" x2="340" y2="248" stroke="#dd3a00" stroke-width="1.4"/>
<text x="170" y="237" font-size="13.072pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Paneles de parcheo</text>
<g transform="translate(170 306) scale(1.7) translate(-170 -306)"><rect x="140" y="298" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="148" y="298" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="156" y="298" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="164" y="298" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="172" y="298" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="180" y="298" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="188" y="298" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="196" y="298" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="140" y="310" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="148" y="310" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="156" y="310" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="164" y="310" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="172" y="310" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="180" y="310" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="188" y="310" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/><rect x="196" y="310" width="6" height="8" fill="#f6cebf" stroke="#dd3a00" stroke-width="1"/></g>
<rect x="14" y="364" width="312" height="28" rx="5.602" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.4"/>
<text x="170" y="384.002" font-size="9.804pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Cableado horizontal</text>
<rect x="370" y="214" width="340" height="190" rx="5.602" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.867"/>
<line x1="370" y1="248" x2="710" y2="248" stroke="#7c3aed" stroke-width="1.4"/>
<text x="540" y="237" font-size="13.072pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Canalizaciones</text>
<g transform="translate(540 306) scale(1.7) translate(-540 -306)"><path d="M -28 -12 L -28 12 L 28 12 L 28 -12" fill="none" stroke="#7c3aed" stroke-width="3" transform="translate(540 306)"/><line x1="522" y1="308" x2="558" y2="308" stroke="#7c3aed" stroke-width="2"/></g>
<rect x="384" y="364" width="312" height="28" rx="5.602" fill="#decefa" stroke="#7c3aed" stroke-width="1.4"/>
<text x="540" y="384.002" font-size="9.804pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Bandejas · ductos</text>
<rect x="740" y="214" width="340" height="190" rx="5.602" fill="#ebedf0" stroke="#364e6c" stroke-width="1.867"/>
<line x1="740" y1="248" x2="1080" y2="248" stroke="#364e6c" stroke-width="1.4"/>
<text x="910" y="237" font-size="13.072pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Estándares</text>
<g transform="translate(910 306) scale(1.7) translate(-910 -306)"><rect x="894" y="284" width="32" height="44" fill="#ffffff" stroke="#364e6c" stroke-width="1.5"/><line x1="901" y1="296" x2="919" y2="296" stroke="#364e6c" stroke-width="1.5"/><line x1="901" y1="304" x2="919" y2="304" stroke="#364e6c" stroke-width="1.5"/><line x1="901" y1="312" x2="913" y2="312" stroke="#364e6c" stroke-width="1.5"/></g>
<rect x="754" y="364" width="312" height="28" rx="5.602" fill="#cdd3da" stroke="#364e6c" stroke-width="1.4"/>
<text x="910" y="384.002" font-size="9.804pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">TIA-568 · TIA-942 · ISO/IEC 11801</text>
</g><text x="600" y="488.511" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 3.6. Componentes de la infraestructura física.</text></svg>
</div>

Aunque con frecuencia se la considera un elemento secundario frente a los equipos activos, de ella depende el funcionamiento de toda la red. Su diseño e implementación determinan la confiabilidad, el rendimiento máximo alcanzable, la escalabilidad y la facilidad de mantenimiento de la red.

### Racks y gabinetes

Son estructuras normalizadas, generalmente de 19 pulgadas de ancho, utilizadas para alojar dispositivos activos de red, paneles de parcheo, sistemas de alimentación y otros elementos de infraestructura.

Proporcionan organización, protección física y facilidad de mantenimiento.

### Cables de red

Incluyen medios de transmisión como:

- Par trenzado en categorías 5e, 6, 6A y 8 (ANSI/TIA-568), o en clases F y FA (ISO/IEC 11801).
- Fibra óptica monomodo y multimodo.
- Cable coaxial en aplicaciones específicas o heredadas.

La selección depende de la distancia, el ancho de banda, el entorno de instalación y las interferencias presentes.

### Conectores y terminaciones

Permiten la unión física entre los medios de transmisión y los dispositivos de red; los principales tipos incluyen:

- Conectores modulares 8P8C, denominados habitualmente RJ-45, para cableado de par trenzado.
- LC, SC y MPO para enlaces de fibra óptica.

Estos elementos deben cumplir especificaciones técnicas relacionadas con atenuación, pérdida de inserción y diafonía para garantizar la calidad de la transmisión.

### Canalizaciones y sistemas de cableado estructurado

Incluyen tuberías, bandejas, ductos y otros elementos destinados a proteger y organizar el tendido de cables. Su correcta implementación evita daños físicos, reduce interferencias y facilita futuras ampliaciones de la infraestructura.

### Paneles de parcheo (patch panels)

Son estructuras utilizadas para centralizar las terminaciones del cableado horizontal y simplificar la administración de las conexiones mediante latiguillos (*patch cords*); permiten reorganizar la infraestructura sin modificar el tendido permanente del cableado.

### Factores de diseño

El diseño de una infraestructura física debe considerar múltiples factores técnicos y operativos. Entre los principales se encuentran:

#### Capacidad requerida

La infraestructura debe dimensionarse considerando las necesidades actuales y futuras de ancho de banda. Por ejemplo, la instalación de cableado categoría 6A permite soportar velocidades de hasta 10 Gb/s en determinadas condiciones.

#### Distancia de transmisión

La distancia máxima depende del estándar Ethernet utilizado, el tipo de medio de transmisión y las características del enlace.

#### Interferencia electromagnética

En ambientes industriales o zonas con presencia de motores y equipos eléctricos, puede ser necesario utilizar fibra óptica o cableado blindado en lugar de UTP para reducir los efectos de las interferencias electromagnéticas.

#### Escalabilidad y mantenimiento

El cableado estructurado debe permitir la incorporación de nuevos dispositivos, modificaciones de distribución y tareas de mantenimiento sin requerir reemplazar completamente la infraestructura existente.

### Estándares de cableado estructurado

Los principales estándares utilizados en instalaciones de cableado estructurado incluyen:

- ANSI/TIA-568 (anteriormente TIA/EIA-568): norma de cableado estructurado para edificios comerciales que, entre otros aspectos, define el cableado de par trenzado y la terminación de conectores RJ-45.
- T568A y T568B: son los dos esquemas de terminación (asignación de colores a los pares) reconocidos por ANSI/TIA-568. La norma admite ambos; la selección debe ajustarse a las especificaciones del proyecto y a la instalación existente. En un cable directo se utiliza el mismo esquema en ambos extremos; la combinación de esquemas distintos produce un cable cruzado.
- ANSI/TIA-942: estándar para infraestructura de centros de datos que define cuatro niveles de rating (Rated-1 a Rated-4). Sus niveles describen objetivos de redundancia y mantenibilidad que guardan similitudes conceptuales con los niveles Tier del Uptime Institute, pero no deben considerarse equivalentes ni intercambiables.
- ISO/IEC 11801: estándar internacional para sistemas genéricos de cableado estructurado.

Una infraestructura deficiente, causada por cables con terminaciones incorrectas, etiquetado inadecuado, ausencia de holgura técnica o incumplimiento de estándares, puede provocar fallos intermitentes, errores de trama, negociación incorrecta de velocidad y desconexiones recurrentes.

## 3.6 COMUNICACIÓN EN LA RED

El proceso de comunicación en una red no depende de un único elemento, sino de la interacción coordinada entre todos los componentes descritos anteriormente; cada dispositivo desempeña una función específica que, en conjunto, permite la transmisión efectiva de datos desde un origen hasta un destino.

La comunicación en red surge de la interacción entre dispositivos finales, dispositivos intermedios, interfaces de red e infraestructura física; la correcta integración de estos elementos permite establecer canales de comunicación.

### Flujo de comunicación en una red de datos

#### 1. Generación de datos en el dispositivo final

Una aplicación ejecutándose en un dispositivo final, como una estación de trabajo, genera los datos que serán transmitidos a través de la red. El sistema operativo entrega esta información a la pila de protocolos de comunicación, basada generalmente en el modelo TCP/IP o, con fines académicos, en el modelo OSI.

En este proceso se realiza el encapsulamiento progresivo de la información en segmentos, paquetes y tramas, de acuerdo con la capa correspondiente.

#### 2. Encapsulamiento y transmisión física

La interfaz de red (NIC) del dispositivo origen recibe la información preparada por las capas superiores y genera la trama correspondiente mediante el protocolo de enlace de datos. Posteriormente, la NIC convierte la información en señales y las transmite por el medio: eléctricas en cobre, ópticas en fibra o de radiofrecuencia en el aire.

#### 3. Propagación por la infraestructura física

Las señales recorren la infraestructura de red compuesta por elementos como cables, conectores, paneles de parcheo, sistemas de distribución, entre otros componentes de cableado estructurado.

Durante este recorrido alcanzan los dispositivos intermedios encargados de procesar y reenviar la información; en las redes LAN, el primero suele ser un *switch* (Figura 3.7).

<div class="diagram" id="figura-3-07" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g411" viewBox="0 0 1200 329.04" role="img" aria-labelledby="g411-title"><title id="g411-title">Comunicación en la red en seis etapas</title><g id="g411-c" transform="translate(-0.188 -51.477) scale(1.091)"><rect x="20" y="105" width="150" height="135" rx="5.498" fill="#fbe6e6" stroke="#d40000" stroke-width="2.291"/><circle cx="95" cy="84" r="17" fill="#7f1d1d"/><text x="95" y="89" font-size="10.999pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text><g transform="translate(95,172) scale(0.641)"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><text x="95" y="264" font-size="10.999pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Generación</text><text x="95" y="282" font-size="9.624pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Dispositivo final</text><text x="95" y="297" font-size="9.624pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">genera los datos</text><path d="M173 172L199 172" stroke="#364e6c" stroke-width="2.291" stroke-linecap="round" fill="none"/><path d="M187.3 177.7L199 172L187.3 166.3" fill="none" stroke="#364e6c" stroke-width="2.291" stroke-linecap="round" stroke-linejoin="round"/><rect x="202" y="105" width="150" height="135" rx="5.498" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.291"/><circle cx="277" cy="84" r="17" fill="#1e3a8a"/><text x="277" y="89" font-size="10.999pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text><g transform="translate(277,168) scale(0.85)"><rect x="-44" y="-22" width="88" height="44" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="3"/><rect x="-34" y="22" width="7" height="12" fill="#003ecc"/><rect x="-22" y="22" width="7" height="12" fill="#003ecc"/><rect x="-10" y="22" width="7" height="12" fill="#003ecc"/><rect x="2" y="22" width="7" height="12" fill="#003ecc"/><rect x="14" y="22" width="7" height="12" fill="#003ecc"/><rect x="26" y="22" width="7" height="12" fill="#003ecc"/><rect x="20" y="-12" width="18" height="22" rx="2" fill="#ffffff" stroke="#003ecc" stroke-width="2.5"/><rect x="-30" y="-8" width="28" height="16" rx="2" fill="#ffffff" stroke="#003ecc" stroke-width="2"/></g><text x="277" y="264" font-size="10.999pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Transmisión</text><text x="277" y="282" font-size="9.624pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">NIC: trama</text><text x="277" y="297" font-size="9.624pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">y señal</text><path d="M355 172L381 172" stroke="#364e6c" stroke-width="2.291" stroke-linecap="round" fill="none"/><path d="M369.3 177.7L381 172L369.3 166.3" fill="none" stroke="#364e6c" stroke-width="2.291" stroke-linecap="round" stroke-linejoin="round"/><rect x="384" y="105" width="150" height="135" rx="5.498" fill="#e6f4ee" stroke="#009254" stroke-width="2.291"/><circle cx="459" cy="84" r="17" fill="#065f46"/><text x="459" y="89" font-size="10.999pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text><path d="M397 175h8M513 175h8" stroke="#009254" stroke-width="2.749" stroke-linecap="round"/><polyline points="405,175.0 407,170.5 409,166.3 411,163.0 413,160.9 415,160.0 417,160.6 419,162.5 421,165.6 423,169.5 425,174.0 427,178.6 429,182.8 431,186.4 433,188.8 435,189.9 437,189.7 439,188.0 441,185.2 443,181.3 445,176.9 447,172.3 449,168.0 451,164.3 453,161.6 455,160.2 457,160.2 459,161.5 461,164.1 463,167.8 465,172.1 467,176.7 469,181.1 471,185.0 473,187.9 475,189.6 477,190.0 479,188.9 481,186.5 483,183.0 485,178.8 487,174.3 489,169.8 491,165.8 493,162.6 495,160.6 497,160.0 499,160.8 501,162.9 503,166.2 505,170.2 507,174.8 509,179.3 511,183.5 513,186.8" fill="none" stroke="#009254" stroke-width="2.749" stroke-linejoin="round" stroke-linecap="round"/><text x="459" y="264" font-size="10.999pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Propagación</text><text x="459" y="282" font-size="9.624pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Infraestructura</text><text x="459" y="297" font-size="9.624pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">física</text><path d="M537 172L563 172" stroke="#364e6c" stroke-width="2.291" stroke-linecap="round" fill="none"/><path d="M551.3 177.7L563 172L551.3 166.3" fill="none" stroke="#364e6c" stroke-width="2.291" stroke-linecap="round" stroke-linejoin="round"/><rect x="566" y="105" width="150" height="135" rx="5.498" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.291"/><circle cx="641" cy="84" r="17" fill="#7c2d12"/><text x="641" y="89" font-size="10.999pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text><g transform="translate(611,178) scale(0.458)"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#dd3a00" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#dd3a00"/><circle cx="-24" cy="-15" r="2.5" fill="#dd3a00"/><circle cx="-4" cy="-15" r="2.5" fill="#dd3a00"/><circle cx="16" cy="-15" r="2.5" fill="#dd3a00"/><circle cx="36" cy="-15" r="2.5" fill="#dd3a00"/></g><g transform="translate(677,174) scale(0.42)"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#dd3a00" stroke-width="3"/><circle r="34" fill="#fcebe6"/><g stroke="#dd3a00" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"/></g></g><text x="641" y="264" font-size="10.999pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Reenvío</text><text x="641" y="282" font-size="9.624pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Switch o router</text><text x="641" y="297" font-size="9.624pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">decide el salto</text><path d="M719 172L745 172" stroke="#364e6c" stroke-width="2.291" stroke-linecap="round" fill="none"/><path d="M733.3 177.7L745 172L733.3 166.3" fill="none" stroke="#364e6c" stroke-width="2.291" stroke-linecap="round" stroke-linejoin="round"/><rect x="748" y="105" width="150" height="135" rx="5.498" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.291"/><circle cx="823" cy="84" r="17" fill="#5b21b6"/><text x="823" y="89" font-size="10.999pt" font-weight="700" fill="#ffffff" text-anchor="middle">5</text><g transform="translate(823,175) scale(1.1)"><path d="M-30 6a32 32 0 0 1 54 -22" fill="none" stroke="#7c3aed" stroke-width="5" stroke-linecap="round"/><path d="M24 -16l-2 -18l16 12z" fill="#7c3aed" stroke="#7c3aed" stroke-width="2"/><path d="M30 -6a32 32 0 0 1 -54 22" fill="none" stroke="#7c3aed" stroke-width="5" stroke-linecap="round"/><path d="M-24 16l2 18l-16 -12z" fill="#7c3aed" stroke="#7c3aed" stroke-width="2"/></g><text x="823" y="264" font-size="10.999pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Saltos</text><text x="823" y="282" font-size="9.624pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Se repite</text><text x="823" y="297" font-size="9.624pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">en cada salto</text><path d="M901 172L927 172" stroke="#364e6c" stroke-width="2.291" stroke-linecap="round" fill="none"/><path d="M915.3 177.7L927 172L915.3 166.3" fill="none" stroke="#364e6c" stroke-width="2.291" stroke-linecap="round" stroke-linejoin="round"/><rect x="930" y="105" width="150" height="135" rx="5.498" fill="#ebedf0" stroke="#364e6c" stroke-width="2.291"/><circle cx="1005" cy="84" r="17" fill="#1e3a5f"/><text x="1005" y="89" font-size="10.999pt" font-weight="700" fill="#ffffff" text-anchor="middle">6</text><g transform="translate(1005,176) scale(0.641)"><g stroke="#364e6c" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#ebedf0" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><text x="1005" y="264" font-size="10.999pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Entrega</text><text x="1005" y="282" font-size="9.624pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Destino</text><text x="1005" y="297" font-size="9.624pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">desencapsula</text></g><text x="600" y="311.2" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 3.7. Comunicación en la red en seis etapas.</text></svg>
</div>

#### 4. Conmutación o reenvío en el dispositivo intermedio

El dispositivo intermedio recibe la señal, la interpreta y extrae la información necesaria para determinar su destino. Un *switch* analiza la dirección MAC de destino y consulta su tabla de direcciones MAC para reenviar la trama solo por el puerto correspondiente.

Un *router* analiza la dirección IP de destino, consulta su tabla de enrutamiento y determina el siguiente salto hacia la red destino.

El dispositivo intermedio transmite nuevamente la información por la interfaz adecuada hacia el siguiente nodo de la trayectoria.

#### 5. Repetición de saltos intermedios

El proceso realizado por los dispositivos intermedios se repite en cada punto de la ruta hasta que la información alcanza el último dispositivo de red antes del destino final.

Cada salto puede implicar operaciones de análisis, procesamiento, filtrado y reenvío, dependiendo del tipo de dispositivo y de las políticas configuradas.

#### 6. Entrega al dispositivo destino

El dispositivo receptor obtiene la señal mediante su interfaz de red (NIC), posteriormente ejecuta el proceso de desencapsulación, eliminando progresivamente la información de control correspondiente a cada capa (cabeceras de enlace, de red y de transporte).

Finalmente, los datos originales son entregados al proceso o aplicación correspondiente.

Los componentes de red no operan de forma aislada: el comportamiento del conjunto depende de cómo se combinan sus funciones. Al diseñar o diagnosticar una infraestructura conviene, por tanto, identificar primero qué componente cumple cada función y en qué punto del recorrido de los datos puede fallar.
