<p class="tema-num">TEMA 01</p>

# FUNDAMENTOS DE REDES Y COMUNICACIÓN

Las redes de computadoras constituyen la infraestructura que permite interconectar dispositivos y transportar información entre sistemas. Su funcionamiento depende de la interacción coordinada entre dispositivos, medios de transmisión y protocolos que establecen las reglas necesarias para intercambiar información de manera interoperable.

Una red puede conectar unos pocos dispositivos en un entorno doméstico o integrar miles de sistemas distribuidos entre instalaciones empresariales, centros de datos y servicios en la nube. Aunque su escala y complejidad varían, todas deben resolver problemas relacionados con la representación de los datos, su transporte, el direccionamiento de los sistemas participantes y la entrega de la información a los servicios de destino (Figura 1.1).

<div class="diagram" id="figura-1-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g401" viewBox="0 0 1200 402" role="img" aria-labelledby="g401-title">
<title id="g401-title">Mapa del Tema 1</title>
<defs></defs>
<g id="g401-c" transform="translate(20 20)"><rect x="0" y="0" width="370.67" height="153" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="0" y1="34" x2="370.67" y2="34" stroke="#dd3a00" stroke-width="1.5"/>
<text x="185.33" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1.1 Concepto de red de computadoras</text>
<g transform="translate(185.33 76.84) scale(0.7)" data-lib="nodes"><g stroke="#dd3a00" stroke-width="3" fill="none"><path d="M0 -22 L-22 14 M0 -22 L22 14 M-22 14 H22"></path></g><circle cx="0" cy="-22" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle><circle cx="-22" cy="14" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle><circle cx="22" cy="14" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle></g>
<text x="185.33" y="134.95" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Definición, componentes y propósito de una red</text>
<rect x="394.67" y="0" width="370.67" height="153" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="394.67" y1="34" x2="765.33" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="580" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1.2 Evolución de las redes</text>
<g transform="translate(580 76.84) scale(0.7)" data-lib="clock"><circle cx="0" cy="0" r="28" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"></circle><path d="M0 -16 V0 L12 8" fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="580" y="134.95" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">De las primeras redes a la Internet actual</text>
<rect x="789.33" y="0" width="370.67" height="153" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="789.33" y1="51" x2="1160" y2="51" stroke="#d40000" stroke-width="1.5"/>
<text x="974.67" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1.3 Arquitecturas cliente-servidor y</text>
<text x="974.67" y="40" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">distribuidas</text>
<g transform="translate(974.67 87.72) scale(0.7)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<text x="974.67" y="138.18" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Roles de los equipos y reparto de funciones</text>
<rect x="197.33" y="177" width="370.67" height="153" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="197.33" y1="211" x2="568" y2="211" stroke="#7c3aed" stroke-width="1.5"/>
<text x="382.67" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1.4 Flujo de datos</text>
<g transform="translate(382.67 253.84) scale(0.7)" data-lib="fork"><g fill="none" stroke="#7c3aed" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-30 0 H-6 L20 -18 M-6 0 L20 18"></path><path d="M12 -26 L22 -18 L12 -10 M12 10 L22 18 L12 26"></path></g><circle cx="-30" cy="0" r="5" fill="#7c3aed"></circle></g>
<text x="382.67" y="311.95" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Recorrido de la información entre dispositivos</text>
<rect x="592" y="177" width="370.67" height="153" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="592" y1="211" x2="962.67" y2="211" stroke="#009254" stroke-width="1.5"/>
<text x="777.33" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1.5 Encapsulación</text>
<g transform="translate(777.33 253.84) scale(0.7)" data-lib="layers"><path d="M0 2 L34 14 L0 26 L-34 14 Z" fill="#bfe4d4" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -12 L34 0 L0 12 L-34 0 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -26 L34 -14 L0 -2 L-34 -14 Z" fill="#ffffff" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="777.33" y="311.95" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Adición y retiro de cabeceras por capa</text></g><text x="600" y="384" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 1.1. Mapa del Tema 1.</text></svg>
</div>

## 1.1 CONCEPTO DE RED DE COMPUTADORAS

La comunicación entre dispositivos informáticos permite intercambiar información, compartir recursos y acceder a servicios que no necesariamente se encuentran en el mismo equipo. Para hacerlo posible, los sistemas deben disponer de medios que transporten los datos y de reglas que regulen cómo se interpreta y se coordina el intercambio.

Desde una perspectiva técnica, una red de computadoras es un conjunto de dispositivos interconectados que intercambian información mediante enlaces y protocolos de comunicación. Estos dispositivos pueden incluir computadoras personales, servidores, impresoras, equipos de comunicaciones y sistemas especializados, entre otros.

<div class="diagram" id="figura-1-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g101" viewBox="0 0 1200 401.891" role="img" aria-labelledby="g101-title">
<title id="g101-title">Comunicación entre equipo y servidor a través de dos switches y un router</title>
<defs><marker id="g101m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker></defs>
<g id="g101-c" transform="translate(-19.757 -52.801) scale(1.033)"><rect x="80" y="72" width="220" height="58" rx="5.81" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.937"/>
<text x="190" y="98" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Aplicación</text>
<text x="190" y="119" font-size="10.165pt" fill="#5b21b6" text-anchor="middle" font-weight="400">HTTP · DNS · SMTP</text>
<rect x="900" y="72" width="220" height="58" rx="5.81" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.937"/>
<text x="1010" y="98" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Aplicación</text>
<text x="1010" y="119" font-size="10.165pt" fill="#5b21b6" text-anchor="middle" font-weight="400">HTTP · DNS · SMTP</text>
<rect x="40" y="160" width="150" height="230" rx="5.81" fill="#fbe6e6" stroke="#d40000" stroke-width="1.937"/>
<line x1="40" y1="202" x2="190" y2="202" stroke="#d40000" stroke-width="1.453"/>
<text x="115" y="190" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">PC / Host</text>
<rect x="55" y="302" width="120" height="22" fill="#f4bfbf" stroke="#d40000" stroke-width="1.453"/>
<text x="115" y="318" font-size="10.165pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Capas 1-5</text>
<text x="115" y="344" font-size="10.165pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Dispositivo final</text>
<text x="115" y="366" font-size="10.165pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Origina o recibe</text>
<rect x="250" y="160" width="150" height="230" rx="5.81" fill="#e6f4ee" stroke="#009254" stroke-width="1.937"/>
<line x1="250" y1="202" x2="400" y2="202" stroke="#009254" stroke-width="1.453"/>
<text x="325" y="190" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Switch</text>
<rect x="265" y="302" width="120" height="22" fill="#bfe4d4" stroke="#009254" stroke-width="1.453"/>
<text x="325" y="318" font-size="10.165pt" font-weight="700" fill="#065f46" text-anchor="middle">Capas 1-2</text>
<text x="325" y="344" font-size="10.165pt" font-weight="700" fill="#065f46" text-anchor="middle">Intermedio · Enlace</text>
<text x="325" y="366" font-size="10.165pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Conmuta tramas (MAC)</text>
<rect x="460" y="160" width="280" height="230" rx="5.81" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.937"/>
<line x1="460" y1="202" x2="740" y2="202" stroke="#003ecc" stroke-width="1.453"/>
<text x="600" y="190" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router</text>
<rect x="475" y="302" width="250" height="22" fill="#bfcff2" stroke="#003ecc" stroke-width="1.453"/>
<text x="600" y="318" font-size="10.165pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Capas 1-3</text>
<text x="600" y="344" font-size="10.165pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Intermedio · Red</text>
<text x="600" y="366" font-size="10.165pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Reenvía paquetes IP</text>
<rect x="800" y="160" width="150" height="230" rx="5.81" fill="#e6f4ee" stroke="#009254" stroke-width="1.937"/>
<line x1="800" y1="202" x2="950" y2="202" stroke="#009254" stroke-width="1.453"/>
<text x="875" y="190" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Switch</text>
<rect x="815" y="302" width="120" height="22" fill="#bfe4d4" stroke="#009254" stroke-width="1.453"/>
<text x="875" y="318" font-size="10.165pt" font-weight="700" fill="#065f46" text-anchor="middle">Capas 1-2</text>
<text x="875" y="344" font-size="10.165pt" font-weight="700" fill="#065f46" text-anchor="middle">Intermedio · Enlace</text>
<text x="875" y="366" font-size="10.165pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Conmuta tramas (MAC)</text>
<rect x="1010" y="160" width="150" height="230" rx="5.81" fill="#fbe6e6" stroke="#d40000" stroke-width="1.937"/>
<line x1="1010" y1="202" x2="1160" y2="202" stroke="#d40000" stroke-width="1.453"/>
<text x="1085" y="190" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Servidor</text>
<rect x="1025" y="302" width="120" height="22" fill="#f4bfbf" stroke="#d40000" stroke-width="1.453"/>
<text x="1085" y="318" font-size="10.165pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Capas 1-5</text>
<text x="1085" y="344" font-size="10.165pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Dispositivo final</text>
<text x="1085" y="366" font-size="10.165pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Proporciona servicios</text>
<line x1="194" y1="272" x2="246" y2="272" stroke="#364e6c" stroke-width="2.421" marker-end="url(#g101m)"/>
<text x="220" y="289" font-size="10.165pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Enlace</text>
<line x1="404" y1="272" x2="456" y2="272" stroke="#364e6c" stroke-width="2.421" marker-end="url(#g101m)"/>
<text x="430" y="289" font-size="10.165pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Enlace</text>
<line x1="744" y1="272" x2="796" y2="272" stroke="#364e6c" stroke-width="2.421" marker-end="url(#g101m)"/>
<text x="770" y="289" font-size="10.165pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Enlace</text>
<line x1="954" y1="272" x2="1006" y2="272" stroke="#364e6c" stroke-width="2.421" marker-end="url(#g101m)"/>
<text x="980" y="289" font-size="10.165pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Enlace</text>
<g transform="translate(115 258.374) scale(0.968)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(325 251) scale(0.968)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g><g transform="translate(600 251) scale(0.968)" data-lib="router"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M-36 -8H30M20 -17l10 9-10 9"/><path d="M36 12H-30M-20 3l-10 9 10 9"/></g></g><g transform="translate(875 251) scale(0.968)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g><g transform="translate(1085 249.765) scale(0.823)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g></g><text x="600" y="384.051" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 1.2. Comunicación entre equipo y servidor a través de dos switches y un router.</text></svg>
</div>

La interconexión física o lógica no garantiza por sí sola una comunicación funcional. Los sistemas participantes deben utilizar tecnologías compatibles o mecanismos de interoperabilidad, disponer de una ruta de comunicación adecuada y aplicar las reglas necesarias para que la información pueda llegar a su destino y ser procesada correctamente (Figura 1.2).

Para empezar, una red puede entenderse a partir de tres componentes: dispositivos, medios de transmisión y protocolos. Es una simplificación útil para una primera mirada, aunque una descripción completa de la arquitectura de red también debe considerar el direccionamiento, la topología, los servicios, la administración y la seguridad.

Los dispositivos originan, reciben, procesan o encaminan información. Según su función, actúan como extremos de la comunicación o como elementos intermedios de la infraestructura.

Los medios y enlaces de transmisión, por su parte, proporcionan el soporte por el que circulan las señales; pueden ser cableado de cobre, fibra óptica o tecnologías inalámbricas, entre otros. Y los protocolos establecen las reglas para el intercambio de información.

Estas reglas pueden definir el formato de los mensajes, el direccionamiento, la detección de errores, la coordinación de la comunicación y otras funciones necesarias para que los sistemas intercambien datos de manera compatible.

<div class="diagram tabla-svg" id="tabla-1-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 470" role="img" aria-labelledby="t0-title"><title id="t0-title">Tabla 1.1. Componentes de una red.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="111.6" y="20.0" dominant-baseline="central" text-anchor="middle">Componente</text>
<text class="tb-ht" x="500.2" y="20.0" dominant-baseline="central" text-anchor="middle">Descripción</text>
<text class="tb-ht" x="988.6" y="20.0" dominant-baseline="central" text-anchor="middle">Ejemplos</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Dispositivos finales</text>
<text class="tb-tx" x="235.3" y="60.8" dominant-baseline="central">Originan o reciben información para utilizar aplicaciones o</text>
<text class="tb-tx" x="235.3" y="83.5" dominant-baseline="central">servicios.</text>
<text class="tb-tx" x="789.2" y="60.8" dominant-baseline="central">Computadoras, servidores, teléfonos, impresoras</text>
<text class="tb-tx" x="789.2" y="83.5" dominant-baseline="central">y dispositivos IoT.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">Dispositivos</text>
<text class="tb-tx tb-b" x="12.0" y="147.0" dominant-baseline="central">intermediarios</text>
<text class="tb-tx" x="235.3" y="124.2" dominant-baseline="central">Conectan segmentos y procesan o reenvían tráfico según su</text>
<text class="tb-tx" x="235.3" y="147.0" dominant-baseline="central">función.</text>
<text class="tb-tx" x="789.2" y="135.6" dominant-baseline="central">Switches, routers, puntos de acceso y firewalls.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Medios de transmisión</text>
<text class="tb-tx" x="235.3" y="187.8" dominant-baseline="central">Transportan las señales que representan la información; pueden</text>
<text class="tb-tx" x="235.3" y="210.5" dominant-baseline="central">ser guiados o no guiados.</text>
<text class="tb-tx" x="789.2" y="187.8" dominant-baseline="central">Par trenzado, cable coaxial, fibra óptica y ondas</text>
<text class="tb-tx" x="789.2" y="210.5" dominant-baseline="central">de radio.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="262.6" dominant-baseline="central">Protocolos</text>
<text class="tb-tx" x="235.3" y="251.2" dominant-baseline="central">Definen reglas, formatos y procedimientos para el intercambio de</text>
<text class="tb-tx" x="235.3" y="274.0" dominant-baseline="central">información.</text>
<text class="tb-tx" x="789.2" y="262.6" dominant-baseline="central">Ethernet, IP, TCP, UDP, DNS y HTTP.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="314.8" dominant-baseline="central">Direcciones e</text>
<text class="tb-tx tb-b" x="12.0" y="337.5" dominant-baseline="central">identificadores</text>
<text class="tb-tx" x="235.3" y="314.8" dominant-baseline="central">Identifican interfaces, sistemas y puntos de comunicación según</text>
<text class="tb-tx" x="235.3" y="337.5" dominant-baseline="central">corresponda el protocolo.</text>
<text class="tb-tx" x="789.2" y="314.8" dominant-baseline="central">Direcciones MAC, direcciones IPv4/IPv6 y puertos</text>
<text class="tb-tx" x="789.2" y="337.5" dominant-baseline="central">TCP/UDP.</text>
<rect class="tb-to" x="0" y="358.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="378.2" dominant-baseline="central">Servicios de</text>
<text class="tb-tx tb-b" x="12.0" y="401.0" dominant-baseline="central">infraestructura</text>
<text class="tb-tx" x="235.3" y="378.2" dominant-baseline="central">Proporcionan funciones de soporte necesarias para la operación</text>
<text class="tb-tx" x="235.3" y="401.0" dominant-baseline="central">de la red.</text>
<text class="tb-tx" x="789.2" y="389.6" dominant-baseline="central">DNS, DHCP y NTP.</text>
<text class="tb-cap" x="600.0" y="447.8" text-anchor="middle">Tabla 1.1. Componentes de una red.</text></svg>
</div>

Estos componentes trabajan de forma coordinada. Los dispositivos procesan la información conforme a los protocolos implementados; los enlaces permiten transportar las señales; y los protocolos determinan cómo se construyen, interpretan y gestionan los datos intercambiados. La Tabla 1.1 resume los componentes de una red y sus funciones.

Los dispositivos de una red pueden desempeñar funciones diferentes: los finales originan o reciben información para una aplicación o un servicio, mientras que los intermedios, como switches y routers, intervienen en el transporte del tráfico y procesan la información necesaria para realizar funciones de conmutación, encaminamiento u otras tareas de infraestructura.

Las características de los medios de transmisión también condicionan el funcionamiento de la red: su capacidad, alcance, susceptibilidad a interferencias y características físicas influyen en el rendimiento y en las condiciones de instalación.

Ahora bien, el comportamiento de una comunicación no depende solo del medio: también intervienen los protocolos, la configuración, la carga de tráfico y las capacidades de los equipos. La selección de los componentes debe responder a las condiciones de operación de la red.

No basta con considerar la capacidad de transmisión: también deben evaluarse la disponibilidad requerida, el crecimiento previsto, las restricciones de seguridad y los recursos disponibles para su administración.

De ahí que una red deba entenderse como un sistema coordinado en el que la conectividad, el procesamiento y las reglas de comunicación contribuyen conjuntamente al intercambio de información. Este es el punto de partida para analizar la evolución de las redes y las distintas formas en que sus componentes se organizan para transportar datos.

## 1.2 EVOLUCIÓN DE LAS REDES

La evolución de las redes de computadoras ha estado impulsada por la necesidad de aumentar la velocidad de transmisión, mejorar la confiabilidad de las comunicaciones, ampliar la cobertura y conectar un número creciente de dispositivos.

Los primeros sistemas de comunicación entre computadoras se desarrollaron en entornos especializados, con recursos y posibilidades de interconexión limitados en comparación con los sistemas actuales.

Posteriormente, los avances en conmutación, transmisión digital, diseño de protocolos y estandarización permitieron construir redes interconectadas de mayor alcance y complejidad. Uno de los antecedentes de las redes modernas fue ARPANET, una red financiada por la *Advanced Research Projects Agency* (ARPA) del Departamento de Defensa de Estados Unidos y puesta en operación en 1969.

ARPANET fue una de las redes pioneras en la aplicación de la conmutación de paquetes para interconectar sistemas informáticos. Su importancia histórica reside en su contribución al desarrollo de tecnologías y mecanismos de comunicación que influyeron en la evolución de Internet.

No obstante, ARPANET no es el origen de todas las tecnologías que conforman las redes actuales. A partir de estos antecedentes, pueden identificarse varios hitos en la evolución de las redes.

#### Adopción de TCP/IP

Durante las décadas de 1970 y 1980 se desarrolló y consolidó el conjunto de protocolos TCP/IP, diseñado para comunicar redes con características diferentes. Su arquitectura hizo posible la interconexión de sistemas heterogéneos mediante mecanismos comunes de direccionamiento y transporte de información.

El 1 de enero de 1983, ARPANET adoptó oficialmente TCP/IP. Este acontecimiento es uno de los hitos de la evolución de Internet, ya que consolidó una base común para la comunicación entre redes independientes.

La adopción de TCP/IP facilitó el crecimiento de las redes interconectadas y proporcionó una arquitectura sobre la que posteriormente se expandieron numerosos servicios y aplicaciones.

#### Expansión de Internet y de la World Wide Web

Durante la década de 1990, Internet experimentó una rápida expansión más allá de los entornos académicos y de investigación. La aparición y popularización de la *World Wide Web* (WWW) facilitó el acceso a información y servicios mediante interfaces orientadas al usuario, apoyadas en tecnologías como HTTP, HTML y los navegadores web.

Conviene distinguir ambos conceptos. Internet es una infraestructura global de redes interconectadas que utiliza el conjunto de protocolos de Internet. La *World Wide Web* es un sistema de información y servicios que funciona sobre Internet. Otros servicios, como el correo electrónico y diferentes mecanismos de transferencia de archivos, también utilizan Internet sin formar parte de la Web en sentido estricto.

La expansión de estos servicios impulsó el crecimiento de las comunicaciones digitales y consolidó Internet como una infraestructura mundial para el intercambio de información (Figura 1.3).

#### Redes inalámbricas y móviles

Durante las décadas de 1990 y 2000 se amplió la adopción de tecnologías inalámbricas, entre ellas Wi-Fi, basada en la familia de estándares IEEE 802.11, junto con la evolución de las redes celulares.

La conectividad inalámbrica permitió conectar dispositivos sin requerir un cable físico en cada tramo de acceso, lo que favoreció la movilidad de usuarios y equipos. Sin embargo, estas tecnologías no eliminaron la necesidad de infraestructura cableada: los puntos de acceso, las estaciones base y otros componentes suelen conectarse a redes de distribución y transporte mediante enlaces físicos o inalámbricos.

La expansión de estas tecnologías transformó el acceso a las redes y amplió los escenarios de conectividad en hogares, empresas, espacios públicos y dispositivos móviles.

<div class="diagram" id="figura-1-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g102" viewBox="0 0 1200 264.974" role="img" aria-labelledby="g102-title">
<title id="g102-title">Evolución de las redes de computadoras · hitos principales</title>
<g id="g102-c" transform="translate(-31.006 -83.59) scale(1.052)"><rect x="50" y="100" width="140" height="120" rx="5.705" fill="#fbe6e6" stroke="#d40000" stroke-width="1.902"/>
<text x="120" y="128" font-size="13.308pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">ARPANET</text>
<text x="120" y="152" font-size="11.407pt" fill="#7f1d1d" text-anchor="middle" font-weight="400">1969</text>
<text x="120" y="178" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">conmutación</text>
<text x="120" y="194" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">de paquetes</text>
<line x1="120" y1="220" x2="120" y2="250" stroke="#1a1a1a" stroke-width="1.426" stroke-dasharray="5.705 3.803"/>
<circle cx="120" cy="250" r="7" fill="#d40000"/>
<rect x="210" y="100" width="140" height="120" rx="5.705" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.902"/>
<text x="280" y="128" font-size="13.308pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">TCP/IP</text>
<text x="280" y="152" font-size="11.407pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">1970-80s · 1983</text>
<text x="280" y="178" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">NCP → TCP/IP</text>
<text x="280" y="194" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">1 de enero de 1983</text>
<line x1="280" y1="220" x2="280" y2="250" stroke="#1a1a1a" stroke-width="1.426" stroke-dasharray="5.705 3.803"/>
<circle cx="280" cy="250" r="7" fill="#003ecc"/>
<rect x="370" y="100" width="140" height="120" rx="5.705" fill="#e6f4ee" stroke="#009254" stroke-width="1.902"/>
<text x="440" y="128" font-size="13.308pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Ethernet</text>
<text x="440" y="152" font-size="11.407pt" fill="#065f46" text-anchor="middle" font-weight="400">Década de 1970</text>
<text x="440" y="178" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">IEEE 802.3</text>
<text x="440" y="194" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">redes locales</text>
<line x1="440" y1="220" x2="440" y2="250" stroke="#1a1a1a" stroke-width="1.426" stroke-dasharray="5.705 3.803"/>
<circle cx="440" cy="250" r="7" fill="#009254"/>
<rect x="530" y="100" width="140" height="120" rx="5.705" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.902"/>
<text x="600" y="128" font-size="13.308pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">WWW</text>
<text x="600" y="152" font-size="11.407pt" fill="#7c2d12" text-anchor="middle" font-weight="400">1990s</text>
<text x="600" y="178" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">HTTP · HTML</text>
<text x="600" y="194" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">navegadores</text>
<line x1="600" y1="220" x2="600" y2="250" stroke="#1a1a1a" stroke-width="1.426" stroke-dasharray="5.705 3.803"/>
<circle cx="600" cy="250" r="7" fill="#dd3a00"/>
<rect x="690" y="100" width="140" height="120" rx="5.705" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.902"/>
<text x="760" y="128" font-size="13.308pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Móviles</text>
<text x="760" y="152" font-size="11.407pt" fill="#5b21b6" text-anchor="middle" font-weight="400">1990-2000s</text>
<text x="760" y="178" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Wi-Fi · celular</text>
<text x="760" y="194" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">movilidad</text>
<line x1="760" y1="220" x2="760" y2="250" stroke="#1a1a1a" stroke-width="1.426" stroke-dasharray="5.705 3.803"/>
<circle cx="760" cy="250" r="7" fill="#7c3aed"/>
<rect x="850" y="100" width="140" height="120" rx="5.705" fill="#fbe6e6" stroke="#d40000" stroke-width="1.902"/>
<text x="920" y="128" font-size="13.308pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">SDN · virtual.</text>
<text x="920" y="152" font-size="11.407pt" fill="#7f1d1d" text-anchor="middle" font-weight="400">2010s</text>
<text x="920" y="178" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">control y datos</text>
<text x="920" y="194" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">separados</text>
<line x1="920" y1="220" x2="920" y2="250" stroke="#1a1a1a" stroke-width="1.426" stroke-dasharray="5.705 3.803"/>
<circle cx="920" cy="250" r="7" fill="#d40000"/>
<rect x="1010" y="100" width="140" height="120" rx="5.705" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.902"/>
<text x="1080" y="128" font-size="13.308pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Nube · IoT</text>
<text x="1080" y="152" font-size="11.407pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">Actualidad</text>
<text x="1080" y="178" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">5G · edge</text>
<text x="1080" y="194" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">IA · automatización</text>
<line x1="1080" y1="220" x2="1080" y2="250" stroke="#1a1a1a" stroke-width="1.426" stroke-dasharray="5.705 3.803"/>
<circle cx="1080" cy="250" r="7" fill="#003ecc"/>
<line x1="80" y1="250" x2="1120" y2="250" stroke="#1a1a1a" stroke-width="2.377"/>
<text x="1120" y="278" font-size="11.407pt" font-weight="700" fill="#1a1a1a" text-anchor="end">tiempo →</text>
</g><text x="600" y="247.134" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 1.3. Evolución de las redes de computadoras · hitos principales.</text></svg>
</div>

#### Virtualización y redes definidas por software

Durante la década de 2010 adquirieron mayor importancia la virtualización de redes y las redes definidas por *software* (*Software-Defined Networking, SDN*), especialmente en centros de datos y entornos con necesidades avanzadas de automatización y administración.

La virtualización crea representaciones lógicas de recursos de red que no dependen necesariamente de una correspondencia exclusiva con un dispositivo físico. Así, los recursos físicos pueden separarse de determinados servicios o configuraciones de red.

*SDN* promueve una separación funcional entre el plano de control, responsable de determinar cómo debe tratarse el tráfico, y el plano de datos, encargado de aplicar las decisiones de reenvío.

Esta separación da lugar a mecanismos de administración y automatización más flexibles, aunque las implementaciones concretas varían y no todas utilizan una arquitectura idéntica. Ambos enfoques adaptan la infraestructura a las necesidades de las aplicaciones y simplifican determinadas tareas de administración.

#### Tendencias actuales

Las redes contemporáneas evolucionan hacia infraestructuras distribuidas, automatizadas y capaces de atender grandes cantidades de dispositivos y tráfico. Esta evolución responde al crecimiento de los servicios digitales, la movilidad, la distribución geográfica de las aplicaciones y la necesidad de mantener el rendimiento, la disponibilidad y la seguridad.

Entre las tendencias relevantes se encuentran la computación en la nube, el Internet de las cosas (IoT), la computación en el borde (*edge computing*), las redes celulares 5G y la automatización mediante herramientas de *software* y técnicas de inteligencia artificial. Estas tendencias no forman una única etapa que sustituya por completo a las tecnologías anteriores.

En las infraestructuras reales conviven redes tradicionales, virtualizadas, inalámbricas y basadas en servicios en la nube. Entender sus fundamentos comunes permite analizar cómo se integran y qué limitaciones deben considerarse en cada entorno.

## 1.3 ARQUITECTURAS CLIENTE-SERVIDOR Y DISTRIBUIDAS

Las redes permiten que los sistemas intercambien información, pero la forma en que se organizan las funciones de una aplicación determina cómo se solicitan los servicios, dónde se procesan los datos y cómo colaboran los componentes.

Una de las más comunes es el modelo cliente-servidor; otras soluciones distribuyen el procesamiento, los datos o los servicios entre múltiples nodos.

Estas organizaciones no son necesariamente excluyentes, porque describen aspectos diferentes de un sistema: los roles de comunicación, la separación funcional y la distribución de recursos.

### Arquitectura cliente-servidor

El modelo cliente-servidor describe la relación funcional entre los componentes que solicitan servicios y aquellos que los proporcionan.

- Cliente: dispositivo o proceso que solicita un servicio, recurso u operación.
- Servidor: dispositivo o proceso que recibe solicitudes y proporciona el servicio correspondiente.

Los términos cliente y servidor describen roles dentro de una interacción, no necesariamente equipos físicos independientes. Un mismo sistema puede actuar como cliente en una comunicación y como servidor en otra.

Asimismo, un servidor puede atender simultáneamente a múltiples clientes, de acuerdo con sus recursos y los mecanismos utilizados para gestionar las solicitudes (Figura 1.4).

Por ejemplo, cuando un navegador solicita una página web, actúa como cliente HTTP y se comunica con un servidor que procesa la solicitud y devuelve una respuesta.

Aunque la comunicación pueda involucrar otros servicios y dispositivos intermedios, la relación entre la solicitud y la respuesta corresponde al modelo cliente-servidor. La distribución de las funciones de una aplicación puede organizarse mediante diferentes arquitecturas por capas.

<div class="diagram" id="figura-1-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g103" viewBox="0 0 1200 412.964" role="img" aria-labelledby="g103-title"><title id="g103-title">Modelo cliente–servidor · roles dentro de una interacción</title><g id="g103-c" transform="translate(-11.697 4.986) scale(1.112)"><rect x="30" y="15" width="420" height="305" rx="5.395" fill="#fbe6e6" stroke="#d40000" stroke-width="2.697"/><rect x="30" y="15" width="420" height="42" rx="5.395" fill="#f4bfbf" stroke="#d40000" stroke-width="2.697"/><text x="240" y="43" font-size="12.59pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cliente</text><g transform="translate(240,150)"><g transform="translate(0,0) scale(1.214)"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g></g><text x="240" y="235" font-size="10.791pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Solicita un servicio, recurso u operación</text><text x="240" y="256" font-size="9.442pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Ejemplo: un navegador (cliente HTTP)</text><rect x="140" y="275" width="200" height="30" rx="15" fill="#ffffff" stroke="#d40000" stroke-width="1.798"/><text x="240.0" y="295.0" font-size="10.791pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Rol: solicitar</text><rect x="650" y="15" width="420" height="305" rx="5.395" fill="#e6f4ee" stroke="#009254" stroke-width="2.697"/><rect x="650" y="15" width="420" height="42" rx="5.395" fill="#bfe4d4" stroke="#009254" stroke-width="2.697"/><text x="860" y="43" font-size="12.59pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Servidor</text><g transform="translate(860,150)"><g transform="translate(0,0) scale(1.214)"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#009254"/><path d="M-34 -27.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#009254"/><path d="M-34 1.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#009254"/><path d="M-34 30.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"/></g></g><text x="860" y="235" font-size="10.791pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Recibe solicitudes y responde</text><text x="860" y="256" font-size="9.442pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Ejemplo: servidor web que devuelve una página</text><rect x="760" y="275" width="200" height="30" rx="15" fill="#ffffff" stroke="#009254" stroke-width="1.798"/><text x="860.0" y="295.0" font-size="10.791pt" font-weight="700" fill="#065f46" text-anchor="middle">Rol: proporcionar</text><path d="M460 115L640 115" stroke="#d40000" stroke-width="2.697" stroke-linecap="round" fill="none"/><path d="M628.3 120.7L640 115L628.3 109.3" fill="none" stroke="#d40000" stroke-width="2.697" stroke-linecap="round" stroke-linejoin="round"/><text x="550" y="100" font-size="10.791pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">solicitud</text><path d="M640 195L460 195" stroke="#009254" stroke-width="2.697" stroke-linecap="round" fill="none"/><path d="M471.7 189.3L460 195L471.7 200.7" fill="none" stroke="#009254" stroke-width="2.697" stroke-linecap="round" stroke-linejoin="round"/><text x="550" y="222" font-size="10.791pt" font-weight="700" fill="#065f46" text-anchor="middle">respuesta</text></g><text x="600" y="395.124" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 1.4. Modelo cliente–servidor · roles dentro de una interacción.</text></svg>
</div>

#### Arquitectura de dos capas

La arquitectura de dos capas, también denominada cliente-servidor tradicional en determinados contextos, organiza las funciones principales de una aplicación en dos niveles lógicos que interactúan directamente. Una distribución habitual sitúa en el cliente la interfaz de usuario y parte de la lógica de la aplicación, mientras que el servidor administra los datos o proporciona servicios compartidos.

<div class="diagram" id="figura-1-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g104" viewBox="0 0 1200 480.143" role="img" aria-labelledby="g104-title"><title id="g104-title">Arquitectura de dos capas y arquitectura de tres capas</title><g id="g104-c" transform="translate(5.405 8.649) scale(1.081)"><rect x="15" y="12" width="500" height="376" rx="5.55" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.312"/><text x="265" y="40" font-size="11.101pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">(a) Dos capas · cliente-servidor</text><rect x="55" y="60" width="420" height="116" rx="5.55" fill="#fbe6e6" stroke="#d40000" stroke-width="2.312"/><g transform="translate(130,118) scale(0.647)"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><text x="300" y="104" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cliente</text><text x="300" y="128" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Interfaz de usuario y</text><text x="300" y="144" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">parte de la lógica</text><path d="M265 180L265 248" stroke="#364e6c" stroke-width="2.775" stroke-linecap="round" fill="none"/><path d="M259.3 236.3L265 248L270.7 236.3" fill="none" stroke="#364e6c" stroke-width="2.775" stroke-linecap="round" stroke-linejoin="round"/><text x="375" y="218" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">interacción directa</text><rect x="55" y="252" width="420" height="116" rx="5.55" fill="#e6f4ee" stroke="#009254" stroke-width="2.312"/><g transform="translate(130,310) scale(0.647)"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#009254"/><path d="M-34 -27.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#009254"/><path d="M-34 1.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#009254"/><path d="M-34 30.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"/></g><text x="300" y="296" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Servidor</text><text x="300" y="320" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Administra los datos o ofrece</text><text x="300" y="336" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">servicios compartidos</text><rect x="560" y="12" width="525" height="376" rx="5.55" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.312"/><text x="822" y="40" font-size="11.101pt" font-weight="700" fill="#5b21b6" text-anchor="middle">(b) Tres capas · separación funcional</text><rect x="590" y="60" width="465" height="90" rx="5.55" fill="#fbe6e6" stroke="#d40000" stroke-width="2.312"/><g transform="translate(660,105) scale(0.647)"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><text x="870" y="98" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1 · Presentación</text><text x="870" y="120" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Interacción con el usuario o el sistema consumidor</text><path d="M822 152L822 166" stroke="#364e6c" stroke-width="2.775" stroke-linecap="round" fill="none"/><path d="M816.3 154.3L822 166L827.7 154.3" fill="none" stroke="#364e6c" stroke-width="2.775" stroke-linecap="round" stroke-linejoin="round"/><rect x="590" y="168" width="465" height="90" rx="5.55" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.312"/><g transform="translate(660,213) scale(0.647)"><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(0)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(45)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(90)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(135)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(180)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(225)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(270)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(315)"/><circle r="28" fill="#bfcff2" stroke="#003ecc" stroke-width="3.5"/><circle r="10" fill="#ffffff" stroke="#003ecc" stroke-width="3"/></g><text x="870" y="206" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2 · Lógica de negocio</text><text x="870" y="228" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Procesa operaciones y aplica reglas</text><path d="M822 260L822 274" stroke="#364e6c" stroke-width="2.775" stroke-linecap="round" fill="none"/><path d="M816.3 262.3L822 274L827.7 262.3" fill="none" stroke="#364e6c" stroke-width="2.775" stroke-linecap="round" stroke-linejoin="round"/><rect x="590" y="276" width="465" height="90" rx="5.55" fill="#e6f4ee" stroke="#009254" stroke-width="2.312"/><g transform="translate(660,321) scale(0.647)"><path d="M-36 -26v52a36 12 0 0 0 72 0v-52" fill="#e6f4ee" stroke="#009254" stroke-width="3"/><ellipse cy="-26" rx="36" ry="12" fill="#e6f4ee" stroke="#009254" stroke-width="3"/><path d="M-36 -2a36 12 0 0 0 72 0M-36 14a36 12 0 0 0 72 0" fill="none" stroke="#009254" stroke-width="2"/></g><text x="870" y="314" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">3 · Datos</text><text x="870" y="336" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Almacenamiento y acceso a la información</text></g><text x="600" y="462.303" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 1.5. Arquitectura de dos capas y arquitectura de tres capas.</text></svg>
</div>

Sin embargo, el reparto de responsabilidades depende de la implementación: el término "dos capas" no garantiza que toda la lógica de negocio resida en un único nivel.

Este modelo puede resultar adecuado para aplicaciones de alcance limitado, sistemas de escritorio y determinados sistemas heredados. Su conveniencia depende de factores como el número de clientes, la distribución de la lógica, los requisitos de seguridad, el mantenimiento y la dependencia de los servicios centrales (Figura 1.5).

#### Arquitectura de tres capas

La arquitectura de tres capas separa las funciones principales de una aplicación en tres niveles lógicos:

- Capa de presentación: gestiona la interacción con el usuario o con el sistema que consume el servicio.
- Capa de lógica de negocio: procesa las operaciones de la aplicación y aplica sus reglas funcionales.
- Capa de datos: administra el almacenamiento y el acceso a la información.

La arquitectura lógica describe cómo se reparten las responsabilidades entre capas, mientras que la arquitectura de despliegue indica dónde se ejecuta cada una; la Figura 1.6 permite observar que ambas vistas no coinciden necesariamente.

<div class="diagram" id="figura-1-07" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g106" viewBox="0 0 1200 510.525" role="img" aria-labelledby="g106-title"><title id="g106-title">Arquitectura lógica y arquitectura de despliegue</title><g id="g106-c" transform="translate(5.473 8.701) scale(1.076)"><rect x="15" y="12" width="420" height="406" rx="5.576" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.323"/><text x="225" y="40" font-size="13.011pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Arquitectura lógica</text><rect x="40" y="62" width="370" height="100" rx="5.576" fill="#fbe6e6" stroke="#d40000" stroke-width="2.323"/><g transform="translate(100,112) scale(0.651)"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><text x="265" y="108" font-size="11.152pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Presentación</text><text x="265" y="130" font-size="9.758pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">funciones de interfaz</text><rect x="40" y="180" width="370" height="100" rx="5.576" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.323"/><g transform="translate(100,230) scale(0.651)"><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(0)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(45)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(90)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(135)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(180)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(225)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(270)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(315)"/><circle r="28" fill="#bfcff2" stroke="#003ecc" stroke-width="3.5"/><circle r="10" fill="#ffffff" stroke="#003ecc" stroke-width="3"/></g><text x="265" y="226" font-size="11.152pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Lógica de negocio</text><text x="265" y="248" font-size="9.758pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">reglas y procesamiento</text><rect x="40" y="298" width="370" height="100" rx="5.576" fill="#e6f4ee" stroke="#009254" stroke-width="2.323"/><g transform="translate(100,348) scale(0.651)"><path d="M-36 -26v52a36 12 0 0 0 72 0v-52" fill="#e6f4ee" stroke="#009254" stroke-width="3"/><ellipse cy="-26" rx="36" ry="12" fill="#e6f4ee" stroke="#009254" stroke-width="3"/><path d="M-36 -2a36 12 0 0 0 72 0M-36 14a36 12 0 0 0 72 0" fill="none" stroke="#009254" stroke-width="2"/></g><text x="265" y="344" font-size="11.152pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Datos</text><text x="265" y="366" font-size="9.758pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">almacenamiento y acceso</text><path d="M442 215L538 215" stroke="#364e6c" stroke-width="2.788" stroke-linecap="round" fill="none"/><path d="M526.3 220.7L538 215L526.3 209.3" fill="none" stroke="#364e6c" stroke-width="2.788" stroke-linecap="round" stroke-linejoin="round"/><text x="490" y="236" font-size="9.758pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">se despliega</text><text x="490" y="251" font-size="9.758pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">en</text><rect x="545" y="12" width="545" height="406" rx="5.576" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.323"/><text x="817" y="40" font-size="13.011pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Arquitectura de despliegue</text><rect x="565" y="62" width="240" height="100" rx="5.576" fill="#ffffff" stroke="#364e6c" stroke-width="2.323"/><g transform="translate(620,112) scale(0.651)"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#364e6c" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#364e6c"/><path d="M-34 -27.5h34" stroke="#364e6c" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#364e6c" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#364e6c"/><path d="M-34 1.5h34" stroke="#364e6c" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#364e6c" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#364e6c"/><path d="M-34 30.5h34" stroke="#364e6c" stroke-width="3" stroke-linecap="round"/></g><text x="663" y="117" font-size="11.152pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Equipos</text><rect x="820" y="62" width="240" height="100" rx="5.576" fill="#ffffff" stroke="#7c3aed" stroke-width="2.323"/><g transform="translate(875,112) scale(0.62)"><path d="M0 -38L36 -18V22L0 42L-36 22V-18z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"/><path d="M-36 -18L0 2L36 -18M0 2V42" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"/></g><text x="906" y="117" font-size="11.152pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Máquinas virtuales</text><rect x="565" y="180" width="240" height="100" rx="5.576" fill="#ffffff" stroke="#dd3a00" stroke-width="2.323"/><g transform="translate(620,230) scale(0.62)"><rect x="-48" y="-26" width="96" height="52" rx="3" fill="#fcebe6" stroke="#dd3a00" stroke-width="3"/><path d="M-24 -26V26" stroke="#dd3a00" stroke-width="3"/><path d="M0 -26V26" stroke="#dd3a00" stroke-width="3"/><path d="M24 -26V26" stroke="#dd3a00" stroke-width="3"/></g><text x="663" y="235" font-size="11.152pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Contenedores</text><rect x="820" y="180" width="240" height="100" rx="5.576" fill="#ffffff" stroke="#364e6c" stroke-width="2.323"/><g transform="translate(875,230) scale(0.62)"><rect x="-54" y="-40" width="48" height="80" rx="4" fill="#ffffff" stroke="#364e6c" stroke-width="3"/><path d="M-46 -28h24" stroke="#364e6c" stroke-width="3" stroke-linecap="round"/><circle cx="-14" cy="-28" r="3" fill="#364e6c"/><path d="M-46 -12h24" stroke="#364e6c" stroke-width="3" stroke-linecap="round"/><circle cx="-14" cy="-12" r="3" fill="#364e6c"/><path d="M-46 4h24" stroke="#364e6c" stroke-width="3" stroke-linecap="round"/><circle cx="-14" cy="4" r="3" fill="#364e6c"/><path d="M-46 20h24" stroke="#364e6c" stroke-width="3" stroke-linecap="round"/><circle cx="-14" cy="20" r="3" fill="#364e6c"/><path d="M-46 36h24" stroke="#364e6c" stroke-width="3" stroke-linecap="round"/><circle cx="-14" cy="36" r="3" fill="#364e6c"/><rect x="6" y="-40" width="48" height="80" rx="4" fill="#ffffff" stroke="#364e6c" stroke-width="3"/><path d="M14 -28h24" stroke="#364e6c" stroke-width="3" stroke-linecap="round"/><circle cx="46" cy="-28" r="3" fill="#364e6c"/><path d="M14 -12h24" stroke="#364e6c" stroke-width="3" stroke-linecap="round"/><circle cx="46" cy="-12" r="3" fill="#364e6c"/><path d="M14 4h24" stroke="#364e6c" stroke-width="3" stroke-linecap="round"/><circle cx="46" cy="4" r="3" fill="#364e6c"/><path d="M14 20h24" stroke="#364e6c" stroke-width="3" stroke-linecap="round"/><circle cx="46" cy="20" r="3" fill="#364e6c"/><path d="M14 36h24" stroke="#364e6c" stroke-width="3" stroke-linecap="round"/><circle cx="46" cy="36" r="3" fill="#364e6c"/></g><text x="918" y="235" font-size="11.152pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Centros de datos</text><rect x="692" y="298" width="240" height="100" rx="5.576" fill="#ffffff" stroke="#003ecc" stroke-width="2.323"/><g transform="translate(747,348) scale(0.62)"><path d="M-44 14a22 22 0 0 1 3-43a30 30 0 0 1 56-8a24 24 0 0 1 22 51z" fill="#bfcff2" stroke="#003ecc" stroke-width="3.5" stroke-linejoin="round"/></g><text x="778" y="353" font-size="11.152pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Servicios externos</text></g><text x="600" y="492.685" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 1.7. Arquitectura lógica y arquitectura de despliegue.</text></svg>
</div>

Gracias a esta separación, las responsabilidades pueden desarrollarse, mantenerse y modificarse de manera diferenciada, y las funciones pueden distribuirse entre distintos sistemas cuando los requisitos de rendimiento, seguridad o administración lo justifican.

Las tres capas representan niveles funcionales; no implican la existencia de tres servidores físicos. Pueden ejecutarse en una misma máquina, distribuirse entre varios equipos o implementarse mediante una combinación de componentes físicos y virtuales.

#### Arquitectura de N capas (lógica y despliegue)

La arquitectura de N capas amplía el principio de separación funcional mediante la incorporación de niveles lógicos adicionales. Una aplicación puede distinguir, por ejemplo, presentación, servicios o API, lógica de negocio, integración y acceso a datos.

Este enfoque delimita responsabilidades y simplifica el mantenimiento y la evolución de los componentes. Sin embargo, aumentar el número de capas también puede introducir más comunicaciones entre componentes, dependencias operativas y complejidad de despliegue.

La separación adicional debe responder a necesidades concretas y no considerarse una mejora automática (Figura 1.7).

<div class="diagram" id="figura-1-06" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g105" viewBox="11.75 0 1175.63 325.492" role="img" aria-labelledby="g105-title"><title id="g105-title">Arquitectura de N capas · separación funcional ampliada</title><g id="g105-c" transform="translate(22.679 5.531) scale(1.072)"><rect x="20" y="15" width="235" height="235" rx="5.598" fill="#fbe6e6" stroke="#d40000" stroke-width="2.333"/><rect x="108" y="27" width="60" height="26" rx="13" fill="#ffffff" stroke="#d40000" stroke-width="1.866"/><text x="138.0" y="45.0" font-size="9.795pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Capa 1</text><g transform="translate(137,125) scale(0.933)"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><text x="137" y="198" font-size="11.194pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Presentación</text><text x="137" y="220" font-size="9.795pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">con el usuario o el sistema consumidor</text><path d="M259 132L286 132" stroke="#364e6c" stroke-width="2.799" stroke-linecap="round" fill="none"/><path d="M274.3 137.7L286 132L274.3 126.3" fill="none" stroke="#364e6c" stroke-width="2.799" stroke-linecap="round" stroke-linejoin="round"/><rect x="290" y="15" width="235" height="235" rx="5.598" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.333"/><rect x="378" y="27" width="60" height="26" rx="13" fill="#ffffff" stroke="#7c3aed" stroke-width="1.866"/><text x="408.0" y="45.0" font-size="9.795pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Capa 2</text><g transform="translate(407,125) scale(0.95)"><polygon points="-20,-34 20,-34 40,0 20,34 -20,34 -40,0" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3.5" stroke-linejoin="round"/><path d="M-12 -12l-12 12 12 12M12 -12l12 12-12 12M4 -16l-8 32" fill="none" stroke="#7c3aed" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g><text x="407" y="198" font-size="11.194pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Servicios / API</text><text x="407" y="220" font-size="9.795pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">exposición de los servicios</text><path d="M529 132L556 132" stroke="#364e6c" stroke-width="2.799" stroke-linecap="round" fill="none"/><path d="M544.3 137.7L556 132L544.3 126.3" fill="none" stroke="#364e6c" stroke-width="2.799" stroke-linecap="round" stroke-linejoin="round"/><rect x="560" y="15" width="235" height="235" rx="5.598" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.333"/><rect x="648" y="27" width="60" height="26" rx="13" fill="#ffffff" stroke="#003ecc" stroke-width="1.866"/><text x="678.0" y="45.0" font-size="9.795pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Capa 3</text><g transform="translate(677,125) scale(0.933)"><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(0)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(45)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(90)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(135)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(180)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(225)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(270)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#003ecc" transform="rotate(315)"/><circle r="28" fill="#bfcff2" stroke="#003ecc" stroke-width="3.5"/><circle r="10" fill="#ffffff" stroke="#003ecc" stroke-width="3"/></g><text x="677" y="198" font-size="11.194pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Lógica de negocio</text><text x="677" y="220" font-size="9.795pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">operaciones y reglas funcionales</text><path d="M799 132L826 132" stroke="#364e6c" stroke-width="2.799" stroke-linecap="round" fill="none"/><path d="M814.3 137.7L826 132L814.3 126.3" fill="none" stroke="#364e6c" stroke-width="2.799" stroke-linecap="round" stroke-linejoin="round"/><rect x="830" y="15" width="235" height="235" rx="5.598" fill="#e6f4ee" stroke="#009254" stroke-width="2.333"/><rect x="918" y="27" width="60" height="26" rx="13" fill="#ffffff" stroke="#009254" stroke-width="1.866"/><text x="948.0" y="45.0" font-size="9.795pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Capa 4</text><g transform="translate(947,125) scale(0.933)"><path d="M-36 -26v52a36 12 0 0 0 72 0v-52" fill="#e6f4ee" stroke="#009254" stroke-width="3"/><ellipse cy="-26" rx="36" ry="12" fill="#e6f4ee" stroke="#009254" stroke-width="3"/><path d="M-36 -2a36 12 0 0 0 72 0M-36 14a36 12 0 0 0 72 0" fill="none" stroke="#009254" stroke-width="2"/></g><text x="947" y="198" font-size="11.194pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Acceso a datos</text><text x="947" y="220" font-size="9.795pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">consultas, almacenamiento y acceso</text></g><text x="599.57" y="307.652" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 1.6. Arquitectura de N capas · separación funcional ampliada.</text></svg>
</div>

Conviene distinguir las capas lógicas de los componentes de infraestructura que las soportan. El balanceo de carga, la autenticación centralizada, las cachés, el almacenamiento y la supervisión pueden intervenir en la arquitectura sin constituir necesariamente un nivel funcional adicional.

### Arquitecturas distribuidas

En una arquitectura distribuida, el procesamiento, los datos o los servicios se reparten entre múltiples nodos que se comunican mediante una red. Los nodos colaboran para proporcionar funciones que, desde la perspectiva del usuario, pueden presentarse como un único servicio.

<div class="diagram" id="figura-1-08" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g107" viewBox="0 0 1200 507.499" role="img" aria-labelledby="g107-title"><title id="g107-title">Arquitectura distribuida · nodos que colaboran mediante la red</title><g id="g107-c" transform="translate(-11.697 -0.575) scale(1.112)"><path d="M290 75H810" stroke="#364e6c" stroke-width="2.697" stroke-dasharray="5.395 3.597" stroke-linecap="round"/><text x="550" y="62" font-size="9.442pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">comunicación entre nodos</text><path d="M160 130V300" stroke="#364e6c" stroke-width="2.697" stroke-dasharray="5.395 3.597" stroke-linecap="round"/><path d="M290 112L495 180" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" fill="none" stroke-dasharray="5.395 3.597"/><path d="M482.1 181.7L495 180L485.7 170.9" fill="none" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" stroke-linejoin="round"/><path d="M495 180L290 112" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" fill="none" stroke-dasharray="5.395 3.597"/><path d="M302.9 110.3L290 112L299.3 121.1" fill="none" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" stroke-linejoin="round"/><path d="M810 112L605 180" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" fill="none" stroke-dasharray="5.395 3.597"/><path d="M614.3 170.9L605 180L617.9 181.7" fill="none" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" stroke-linejoin="round"/><path d="M605 180L810 112" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" fill="none" stroke-dasharray="5.395 3.597"/><path d="M800.7 121.1L810 112L797.1 110.3" fill="none" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" stroke-linejoin="round"/><path d="M290 338L495 250" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" fill="none" stroke-dasharray="5.395 3.597"/><path d="M486.5 259.8L495 250L482.0 249.4" fill="none" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" stroke-linejoin="round"/><path d="M495 250L290 338" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" fill="none" stroke-dasharray="5.395 3.597"/><path d="M298.5 328.2L290 338L303.0 338.6" fill="none" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" stroke-linejoin="round"/><path d="M810 338L605 250" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" fill="none" stroke-dasharray="5.395 3.597"/><path d="M618.0 249.4L605 250L613.5 259.8" fill="none" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" stroke-linejoin="round"/><path d="M605 250L810 338" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" fill="none" stroke-dasharray="5.395 3.597"/><path d="M797.0 338.6L810 338L801.5 328.2" fill="none" stroke="#1e3a8a" stroke-width="2.697" stroke-linecap="round" stroke-linejoin="round"/><rect x="30" y="20" width="260" height="110" rx="5.395" fill="#fbe6e6" stroke="#d40000" stroke-width="2.697"/><g transform="translate(92,75) scale(0.629)"><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#d40000" transform="rotate(0)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#d40000" transform="rotate(45)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#d40000" transform="rotate(90)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#d40000" transform="rotate(135)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#d40000" transform="rotate(180)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#d40000" transform="rotate(225)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#d40000" transform="rotate(270)"/><rect x="-6" y="-38" width="12" height="16" rx="2" fill="#d40000" transform="rotate(315)"/><circle r="28" fill="#fbe6e6" stroke="#d40000" stroke-width="3.5"/><circle r="10" fill="#ffffff" stroke="#d40000" stroke-width="3"/></g><text x="200" y="66" font-size="12.59pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Nodo A</text><text x="200" y="90" font-size="9.442pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Procesamiento</text><rect x="810" y="20" width="260" height="110" rx="5.395" fill="#e6f4ee" stroke="#009254" stroke-width="2.697"/><g transform="translate(872,75) scale(0.629)"><path d="M-36 -26v52a36 12 0 0 0 72 0v-52" fill="#e6f4ee" stroke="#009254" stroke-width="3"/><ellipse cy="-26" rx="36" ry="12" fill="#e6f4ee" stroke="#009254" stroke-width="3"/><path d="M-36 -2a36 12 0 0 0 72 0M-36 14a36 12 0 0 0 72 0" fill="none" stroke="#009254" stroke-width="2"/></g><text x="980" y="66" font-size="12.59pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Nodo B</text><text x="980" y="90" font-size="9.442pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Datos</text><rect x="30" y="300" width="260" height="110" rx="5.395" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.697"/><g transform="translate(92,355) scale(0.66)"><path d="M-36 -26v52a36 12 0 0 0 72 0v-52" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3"/><ellipse cy="-26" rx="36" ry="12" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3"/><path d="M-36 -2a36 12 0 0 0 72 0M-36 14a36 12 0 0 0 72 0" fill="none" stroke="#7c3aed" stroke-width="2"/><g transform="translate(14,10)"><path d="M-36 -26v52a36 12 0 0 0 72 0v-52" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3"/><ellipse cy="-26" rx="36" ry="12" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3"/><path d="M-36 -2a36 12 0 0 0 72 0M-36 14a36 12 0 0 0 72 0" fill="none" stroke="#7c3aed" stroke-width="2"/></g></g><text x="200" y="346" font-size="12.59pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Nodo C</text><text x="200" y="370" font-size="9.442pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Copias de los datos</text><rect x="810" y="300" width="260" height="110" rx="5.395" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.697"/><g transform="translate(872,355) scale(0.66)"><polygon points="-20,-34 20,-34 40,0 20,34 -20,34 -40,0" fill="#fcebe6" stroke="#dd3a00" stroke-width="3.5" stroke-linejoin="round"/><path d="M-12 -12l-12 12 12 12M12 -12l12 12-12 12M4 -16l-8 32" fill="none" stroke="#dd3a00" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g><text x="980" y="346" font-size="12.59pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Nodo D</text><text x="980" y="370" font-size="9.442pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Servicio</text><circle cx="550" cy="215" r="70" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.697" stroke-dasharray="5.395 3.597"/><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><path d="M550 172L528 198L550 224L572 198z" fill="none"/><circle cx="550" cy="172" r="8"/><circle cx="528" cy="198" r="8"/><circle cx="550" cy="224" r="8"/><circle cx="572" cy="198" r="8"/></g><text x="550" y="254" font-size="10.791pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Coordinador</text><text x="550" y="312" font-size="9.442pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">puede existir o no</text></g><text x="600" y="489.659" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 1.8. Arquitectura distribuida · nodos que colaboran mediante la red.</text></svg>
</div>

La distribución puede responder a distintas necesidades: atender a usuarios situados en diferentes regiones, aumentar la capacidad de procesamiento, repartir la carga, mantener copias de los datos o reducir la dependencia de un único componente.

No obstante, distribuir funciones introduce desafíos relacionados con la latencia, las interrupciones de conectividad, los fallos parciales, la coordinación entre nodos y la consistencia de los datos.

El comportamiento del sistema depende tanto de la lógica de la aplicación como de las condiciones de comunicación y de los mecanismos utilizados para gestionar estos problemas. Una arquitectura distribuida puede emplear relaciones cliente-servidor, comunicación entre pares u otros mecanismos de interacción.

Cliente-servidor y distribuida no son, entonces, categorías mutuamente excluyentes: el primer enfoque describe los roles de una interacción; el segundo, cómo se reparten funciones o recursos entre varios nodos (Figura 1.8).

<div class="diagram tabla-svg" id="tabla-1-2" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 366" role="img" aria-labelledby="t1-title"><title id="t1-title">Tabla 1.2. Comparación de arquitecturas de aplicación.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="56.2" y="20.0" dominant-baseline="central" text-anchor="middle">Tipo</text>
<text class="tb-ht" x="208.1" y="20.0" dominant-baseline="central" text-anchor="middle">Estructura</text>
<text class="tb-ht" x="584.9" y="20.0" dominant-baseline="central" text-anchor="middle">Características</text>
<text class="tb-ht" x="1032.9" y="20.0" dominant-baseline="central" text-anchor="middle">Casos de uso</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Dos capas</text>
<text class="tb-tx" x="124.3" y="72.1" dominant-baseline="central">Cliente – servidor</text>
<text class="tb-tx" x="315.9" y="60.8" dominant-baseline="central">El cliente interactúa directamente con el servidor; parte de la lógica</text>
<text class="tb-tx" x="315.9" y="83.5" dominant-baseline="central">de aplicación puede residir en el cliente.</text>
<text class="tb-tx" x="877.8" y="60.8" dominant-baseline="central">Aplicaciones de escritorio y sistemas</text>
<text class="tb-tx" x="877.8" y="83.5" dominant-baseline="central">cliente-servidor tradicionales.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Tres capas</text>
<text class="tb-tx" x="124.3" y="124.2" dominant-baseline="central">Presentación –</text>
<text class="tb-tx" x="124.3" y="147.0" dominant-baseline="central">lógica – datos</text>
<text class="tb-tx" x="315.9" y="124.2" dominant-baseline="central">Separa la interfaz, el procesamiento de las reglas de negocio y el</text>
<text class="tb-tx" x="315.9" y="147.0" dominant-baseline="central">acceso a los datos.</text>
<text class="tb-tx" x="877.8" y="124.2" dominant-baseline="central">Aplicaciones web y sistemas</text>
<text class="tb-tx" x="877.8" y="147.0" dominant-baseline="central">empresariales.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">N capas</text>
<text class="tb-tx" x="124.3" y="187.8" dominant-baseline="central">Cuatro o más niveles</text>
<text class="tb-tx" x="124.3" y="210.5" dominant-baseline="central">funcionales</text>
<text class="tb-tx" x="315.9" y="187.8" dominant-baseline="central">Distribuye responsabilidades entre servicios o componentes</text>
<text class="tb-tx" x="315.9" y="210.5" dominant-baseline="central">especializados.</text>
<text class="tb-tx" x="877.8" y="187.8" dominant-baseline="central">Aplicaciones empresariales complejas</text>
<text class="tb-tx" x="877.8" y="210.5" dominant-baseline="central">y arquitecturas basadas en servicios.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">Distribuida</text>
<text class="tb-tx" x="124.3" y="262.6" dominant-baseline="central">Múltiples nodos que</text>
<text class="tb-tx" x="124.3" y="285.4" dominant-baseline="central">colaboran</text>
<text class="tb-tx" x="315.9" y="251.2" dominant-baseline="central">El procesamiento, los datos o los servicios se reparten entre</text>
<text class="tb-tx" x="315.9" y="274.0" dominant-baseline="central">distintos sistemas. Puede incorporar coordinación centralizada o</text>
<text class="tb-tx" x="315.9" y="296.8" dominant-baseline="central">descentralizada.</text>
<text class="tb-tx" x="877.8" y="262.6" dominant-baseline="central">Clústeres, sistemas distribuidos, CDN</text>
<text class="tb-tx" x="877.8" y="285.4" dominant-baseline="central">y redes P2P.</text>
<text class="tb-cap" x="600.0" y="343.5" text-anchor="middle">Tabla 1.2. Comparación de arquitecturas de aplicación.</text></svg>
</div>

Las funciones del sistema no dependen necesariamente de un único equipo. Diferentes nodos pueden colaborar para proporcionar servicios, procesar información, almacenar datos y realizar otras operaciones. La forma en que se reparten estas responsabilidades depende de los requisitos funcionales y operativos del sistema.

La elección de una arquitectura depende de factores como el número de usuarios, la distribución de los recursos, la disponibilidad requerida, la consistencia de los datos, la latencia, la escalabilidad y los costos de implementación y mantenimiento.

No existe una arquitectura óptima para todos los escenarios: la elección debe responder a las necesidades y restricciones del sistema. La Tabla 1.2 permite contrastar las arquitecturas descritas.

## 1.4 FLUJO DE DATOS

El flujo de datos describe el recorrido que sigue la información desde un dispositivo de origen hasta un dispositivo de destino a través de una red. Durante este recorrido, los datos son procesados por los dispositivos finales, atraviesan dispositivos intermedios cuando corresponde y se transportan mediante diferentes medios físicos o inalámbricos.

Este proceso no se limita a trasladar información de un punto a otro. Los datos se procesan de acuerdo con las funciones definidas por los protocolos y la arquitectura de comunicación utilizada.

El recorrido concreto depende de la topología, las direcciones de origen y destino, las decisiones de encaminamiento y las tecnologías presentes en cada tramo.

En los dispositivos finales intervienen las funciones de comunicación necesarias para que la aplicación intercambie información mediante los protocolos utilizados. Los dispositivos intermedios procesan la información necesaria para su función; por ejemplo, un *switch* Ethernet utiliza principalmente información de la capa de enlace para conmutar tramas, mientras que un *router* utiliza información de la capa de red para encaminar paquetes entre redes.

<div class="diagram" id="figura-1-09" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g109" viewBox="0 0 1200 421.765" role="img" aria-labelledby="g109-title"><title id="g109-title">Modalidades de transmisión · sentido de la comunicación</title><g id="g109-c" transform="translate(5.405 4.324) scale(1.081)"><rect x="15" y="16" width="1070" height="100" rx="5.55" fill="#ffffff" stroke="#364e6c" stroke-width="1.85"/><rect x="35" y="52" width="190" height="28" rx="14" fill="#ffffff" stroke="#364e6c" stroke-width="1.85"/><text x="130.0" y="71.0" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Simplex</text><g transform="translate(330,60) scale(0.462)"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(780,60) scale(0.462)"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><text x="330" y="106" font-size="11.101pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">A</text><text x="780" y="106" font-size="11.101pt" font-weight="700" fill="#065f46" text-anchor="middle">B</text><path d="M395 62L715 62" stroke="#003ecc" stroke-width="2.775" stroke-linecap="round" fill="none"/><path d="M703.3 67.7L715 62L703.3 56.3" fill="none" stroke="#003ecc" stroke-width="2.775" stroke-linecap="round" stroke-linejoin="round"/><text x="555" y="106" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">un único sentido</text><rect x="15" y="127" width="1070" height="100" rx="5.55" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.85"/><rect x="35" y="163" width="190" height="28" rx="14" fill="#ffffff" stroke="#dd3a00" stroke-width="1.85"/><text x="130.0" y="182.0" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Semidúplex</text><g transform="translate(330,171) scale(0.462)"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(780,171) scale(0.462)"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><text x="330" y="217" font-size="11.101pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">A</text><text x="780" y="217" font-size="11.101pt" font-weight="700" fill="#065f46" text-anchor="middle">B</text><path d="M395 161L715 161" stroke="#003ecc" stroke-width="2.775" stroke-linecap="round" fill="none"/><path d="M703.3 166.7L715 161L703.3 155.3" fill="none" stroke="#003ecc" stroke-width="2.775" stroke-linecap="round" stroke-linejoin="round"/><path d="M715 183L395 183" stroke="#364e6c" stroke-width="2.775" stroke-linecap="round" fill="none" stroke-dasharray="5.55 3.7"/><path d="M406.7 177.3L395 183L406.7 188.7" fill="none" stroke="#364e6c" stroke-width="2.775" stroke-linecap="round" stroke-linejoin="round"/><text x="555" y="217" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">por turnos · no simultáneo</text><rect x="15" y="238" width="1070" height="100" rx="5.55" fill="#e6f4ee" stroke="#009254" stroke-width="1.85"/><rect x="35" y="274" width="190" height="28" rx="14" fill="#ffffff" stroke="#009254" stroke-width="1.85"/><text x="130.0" y="293.0" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Dúplex completo</text><g transform="translate(330,282) scale(0.462)"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(780,282) scale(0.462)"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><text x="330" y="328" font-size="11.101pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">A</text><text x="780" y="328" font-size="11.101pt" font-weight="700" fill="#065f46" text-anchor="middle">B</text><path d="M395 272L715 272" stroke="#003ecc" stroke-width="2.775" stroke-linecap="round" fill="none"/><path d="M703.3 277.7L715 272L703.3 266.3" fill="none" stroke="#003ecc" stroke-width="2.775" stroke-linecap="round" stroke-linejoin="round"/><path d="M715 294L395 294" stroke="#009254" stroke-width="2.775" stroke-linecap="round" fill="none"/><path d="M406.7 288.3L395 294L406.7 299.7" fill="none" stroke="#009254" stroke-width="2.775" stroke-linecap="round" stroke-linejoin="round"/><text x="555" y="328" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">ambos transmiten a la vez</text></g><text x="600" y="403.925" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 1.9. Modalidades de transmisión · sentido de la comunicación.</text></svg>
</div>

Algunos dispositivos, como los *switches* multicapa, pueden realizar funciones de varias capas. La comunicación puede establecerse en distintos sentidos según las características del medio y de los dispositivos participantes.

- Símplex: la comunicación se realiza en un único sentido.
- Semidúplex (*half-duplex*): ambos extremos pueden transmitir y recibir, pero no de manera simultánea por el mismo canal compartido.
- Dúplex completo (*full-duplex*): ambos extremos pueden transmitir y recibir simultáneamente.

En la Figura 1.9 puede verse lo que se acaba de explicar.

Estas modalidades describen el sentido de la transmisión; no deben confundirse con la velocidad, la capacidad o la fiabilidad del enlace. Su implementación depende de la tecnología y de las características del sistema de comunicación.

### Recorrido de los datos

En una comunicación convencional basada en TCP/IP, el flujo de información desde el dispositivo emisor hasta el receptor puede describirse mediante las siguientes etapas generales:

<div class="diagram" id="figura-1-10" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g110" viewBox="0 0 1200 296.598" role="img" aria-labelledby="g110-title">
<title id="g110-title">Flujo de datos entre sistemas · siete etapas del recorrido</title>
<defs><marker id="g110m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker></defs>
<g id="g110-c" transform="translate(-5.864 -51.507) scale(1.014)"><rect x="40" y="72" width="790" height="26" fill="#f4bfbf" stroke="#d40000" stroke-width="1.479"/>
<text x="435" y="90" font-size="10.355pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Dispositivo emisor · etapas 1-5</text>
<rect x="865" y="72" width="130" height="26" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.479"/>
<text x="930" y="90" font-size="10.355pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Intermediarios</text>
<rect x="1030" y="72" width="130" height="26" fill="#bfe4d4" stroke="#009254" stroke-width="1.479"/>
<text x="1095" y="90" font-size="10.355pt" font-weight="700" fill="#065f46" text-anchor="middle">Receptor</text>
<rect x="40" y="140" width="130" height="100" rx="5.916" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.972"/>
<circle cx="105" cy="170" r="20" fill="#5b21b6"/>
<text x="105" y="178" font-size="13.807pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
<text x="105" y="207" font-size="10.355pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Generación</text>
<text x="105" y="226" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Datos</text>
<text x="105" y="272" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">la aplicación produce</text>
<text x="105" y="288" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">la información</text>
<line x1="174" y1="190" x2="201" y2="190" stroke="#364e6c" stroke-width="1.972" marker-end="url(#g110m)"/>
<rect x="205" y="140" width="130" height="100" rx="5.916" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.972"/>
<circle cx="270" cy="170" r="20" fill="#1e3a8a"/>
<text x="270" y="178" font-size="13.807pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
<text x="270" y="207" font-size="10.355pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Transporte</text>
<text x="270" y="226" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">TCP · UDP</text>
<text x="270" y="272" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">segmento TCP o</text>
<text x="270" y="288" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">datagrama UDP</text>
<line x1="339" y1="190" x2="366" y2="190" stroke="#364e6c" stroke-width="1.972" marker-end="url(#g110m)"/>
<rect x="370" y="140" width="130" height="100" rx="5.916" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.972"/>
<circle cx="435" cy="170" r="20" fill="#7c2d12"/>
<text x="435" y="178" font-size="13.807pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
<text x="435" y="207" font-size="10.355pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Red</text>
<text x="435" y="226" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Paquete IP</text>
<text x="435" y="272" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">IP añade las direcciones</text>
<text x="435" y="288" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">de origen y destino</text>
<line x1="504" y1="190" x2="531" y2="190" stroke="#364e6c" stroke-width="1.972" marker-end="url(#g110m)"/>
<rect x="535" y="140" width="130" height="100" rx="5.916" fill="#e6f4ee" stroke="#009254" stroke-width="1.972"/>
<circle cx="600" cy="170" r="20" fill="#065f46"/>
<text x="600" y="178" font-size="13.807pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text>
<text x="600" y="207" font-size="10.355pt" font-weight="700" fill="#065f46" text-anchor="middle">Enlace</text>
<text x="600" y="226" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Trama</text>
<text x="600" y="272" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Ethernet o Wi-Fi</text>
<text x="600" y="288" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">forma la trama</text>
<line x1="669" y1="190" x2="696" y2="190" stroke="#364e6c" stroke-width="1.972" marker-end="url(#g110m)"/>
<rect x="700" y="140" width="130" height="100" rx="5.916" fill="#ebedf0" stroke="#364e6c" stroke-width="1.972"/>
<circle cx="765" cy="170" r="20" fill="#1e3a5f"/>
<text x="765" y="178" font-size="13.807pt" font-weight="700" fill="#ffffff" text-anchor="middle">5</text>
<text x="765" y="207" font-size="10.355pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Medio</text>
<text x="765" y="226" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Señales</text>
<text x="765" y="272" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">eléctricas, ópticas</text>
<text x="765" y="288" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">o de radiofrecuencia</text>
<line x1="834" y1="190" x2="861" y2="190" stroke="#364e6c" stroke-width="1.972" marker-end="url(#g110m)"/>
<rect x="865" y="140" width="130" height="100" rx="5.916" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.972"/>
<circle cx="930" cy="170" r="20" fill="#7c2d12"/>
<text x="930" y="178" font-size="13.807pt" font-weight="700" fill="#ffffff" text-anchor="middle">6</text>
<text x="930" y="207" font-size="10.355pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Intermedios</text>
<text x="930" y="226" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Switch · router</text>
<text x="930" y="272" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">conmutación,</text>
<text x="930" y="288" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">encaminamiento u otro</text>
<line x1="999" y1="190" x2="1026" y2="190" stroke="#364e6c" stroke-width="1.972" marker-end="url(#g110m)"/>
<rect x="1030" y="140" width="130" height="100" rx="5.916" fill="#e6f4ee" stroke="#009254" stroke-width="1.972"/>
<circle cx="1095" cy="170" r="20" fill="#065f46"/>
<text x="1095" y="178" font-size="13.807pt" font-weight="700" fill="#ffffff" text-anchor="middle">7</text>
<text x="1095" y="207" font-size="10.355pt" font-weight="700" fill="#065f46" text-anchor="middle">Recepción</text>
<text x="1095" y="226" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Desencapsula</text>
<text x="1095" y="272" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">procesa y entrega a</text>
<text x="1095" y="288" font-size="10.355pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">la aplicación</text>
</g><text x="600" y="278.758" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 1.10. Flujo de datos entre sistemas · siete etapas del recorrido.</text></svg>
</div>

1. Generación de los datos: una aplicación produce la información que desea transmitir, como una solicitud, un mensaje o el contenido de un archivo.
2. Procesamiento en la capa de transporte: según el protocolo utilizado, los datos se organizan en segmentos TCP o datagramas UDP. TCP proporciona un flujo de bytes fiable y ordenado mientras la conexión pueda mantenerse operativa, e incorpora mecanismos de control de flujo y retransmisión. UDP proporciona un servicio basado en datagramas sin garantizar por sí mismo la entrega, la ausencia de duplicados ni el orden de recepción.
3. Direccionamiento IP: la capa de Internet incorpora la información necesaria para encaminar los paquetes, incluidas las direcciones IP de origen y destino.
4. Encapsulación en la capa de enlace: el paquete IP se incorpora a una trama adaptada a la tecnología del enlace, como Ethernet o Wi-Fi.
5. Transmisión mediante el medio: la interfaz de red transmite la información mediante señales eléctricas, ópticas o de radiofrecuencia, según la tecnología utilizada.
6. Procesamiento en los dispositivos intermedios: los equipos de infraestructura examinan la información necesaria para realizar sus funciones de conmutación, encaminamiento u otro procesamiento.
7. Recepción y entrega en el destino: el sistema receptor procesa la información mediante los protocolos correspondientes hasta entregarla a la aplicación destinataria, siempre que se cumplan las condiciones necesarias para su recepción y procesamiento.

Esta secuencia es un modelo general, no un recorrido único (Figura 1.10).

Así, no todas las aplicaciones utilizan TCP, no todas las comunicaciones atraviesan los mismos dispositivos y no todos los equipos intermedios procesan las mismas capas. La Tabla 1.3 contrasta TCP y UDP, las dos opciones de transporte más habituales en esta secuencia.

<div class="diagram tabla-svg" id="tabla-1-3" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 447" role="img" aria-labelledby="t2-title"><title id="t2-title">Tabla 1.3. Comparación de TCP y UDP.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="86.0" y="20.0" dominant-baseline="central" text-anchor="middle">Característica</text>
<text class="tb-ht" x="390.2" y="20.0" dominant-baseline="central" text-anchor="middle">TCP</text>
<text class="tb-ht" x="904.3" y="20.0" dominant-baseline="central" text-anchor="middle">UDP</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Tipo de servicio</text>
<text class="tb-tx" x="183.9" y="60.8" dominant-baseline="central">Flujo de bytes orientado a conexión.</text>
<text class="tb-tx" x="620.5" y="60.8" dominant-baseline="central">Servicio basado en datagramas sin conexión.</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="112.9" dominant-baseline="central">Entrega y orden</text>
<text class="tb-tx" x="183.9" y="101.5" dominant-baseline="central">Proporciona entrega fiable y ordenada mientras la</text>
<text class="tb-tx" x="183.9" y="124.2" dominant-baseline="central">conexión puede mantenerse operativa.</text>
<text class="tb-tx" x="620.5" y="112.9" dominant-baseline="central">No garantiza entrega, ausencia de duplicados ni orden de recepción.</text>
<rect class="tb-te" x="0" y="145.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="176.4" dominant-baseline="central">Control de flujo</text>
<text class="tb-tx" x="183.9" y="165.0" dominant-baseline="central">Incorpora mecanismos de control de flujo mediante</text>
<text class="tb-tx" x="183.9" y="187.8" dominant-baseline="central">la ventana anunciada por el receptor.</text>
<text class="tb-tx" x="620.5" y="176.4" dominant-baseline="central">No incorpora control de flujo equivalente.</text>
<rect class="tb-to" x="0" y="208.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="228.5" dominant-baseline="central">Control de</text>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">congestión</text>
<text class="tb-tx" x="183.9" y="239.9" dominant-baseline="central">Incorpora mecanismos de control de congestión.</text>
<text class="tb-tx" x="620.5" y="228.5" dominant-baseline="central">No incorpora un mecanismo general de control de congestión</text>
<text class="tb-tx" x="620.5" y="251.2" dominant-baseline="central">equivalente; la aplicación puede implementar mecanismos propios.</text>
<rect class="tb-te" x="0" y="272.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="292.0" dominant-baseline="central">Límites de</text>
<text class="tb-tx tb-b" x="12.0" y="314.8" dominant-baseline="central">mensaje</text>
<text class="tb-tx" x="183.9" y="292.0" dominant-baseline="central">No conserva los límites de los mensajes de</text>
<text class="tb-tx" x="183.9" y="314.8" dominant-baseline="central">aplicación; proporciona un flujo de bytes.</text>
<text class="tb-tx" x="620.5" y="303.4" dominant-baseline="central">Conserva los límites de cada datagrama.</text>
<rect class="tb-to" x="0" y="335.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="366.9" dominant-baseline="central">Usos frecuentes</text>
<text class="tb-tx" x="183.9" y="355.5" dominant-baseline="central">HTTP/1.1, HTTP/2, SSH, correo y transferencia de</text>
<text class="tb-tx" x="183.9" y="378.2" dominant-baseline="central">archivos, entre otros.</text>
<text class="tb-tx" x="620.5" y="355.5" dominant-baseline="central">DNS en consultas habituales, voz, video en tiempo real y transporte de</text>
<text class="tb-tx" x="620.5" y="378.2" dominant-baseline="central">QUIC.</text>
<text class="tb-cap" x="600.0" y="425.0" text-anchor="middle">Tabla 1.3. Comparación de TCP y UDP.</text></svg>
</div>

Por ejemplo, HTTP/3 utiliza QUIC sobre UDP, con funciones de transporte fiable por flujo y protección criptográfica que no proporciona UDP por sí mismo. Cuando el origen y el destino se encuentran en la misma subred IP, el emisor determina que puede entregar el paquete directamente al destino mediante el enlace local.

En Ethernet, esto requiere conocer la dirección MAC correspondiente al destinatario. En IPv4, esa información puede obtenerse mediante el protocolo ARP; en IPv6, mediante *Neighbor Discovery*.

<div class="diagram tabla-svg" id="tabla-1-4" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 333" role="img" aria-labelledby="t3-title"><title id="t3-title">Tabla 1.4. Direccionamiento y mecanismos de resolución.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="131.5" y="20.0" dominant-baseline="central" text-anchor="middle">Mecanismo</text>
<text class="tb-ht" x="619.3" y="20.0" dominant-baseline="central" text-anchor="middle">Función</text>
<text class="tb-ht" x="1087.8" y="20.0" dominant-baseline="central" text-anchor="middle">Alcance</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Dirección MAC</text>
<text class="tb-tx" x="275.0" y="60.8" dominant-baseline="central">Identifica una interfaz en una tecnología de enlace compatible.</text>
<text class="tb-tx" x="987.5" y="60.8" dominant-baseline="central">Enlace de datos.</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">Dirección IPv4 o IPv6</text>
<text class="tb-tx" x="275.0" y="101.5" dominant-baseline="central">Identifica una interfaz dentro del sistema de direccionamiento IP.</text>
<text class="tb-tx" x="987.5" y="101.5" dominant-baseline="central">Capa de red.</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">Puerto TCP o UDP</text>
<text class="tb-tx" x="275.0" y="142.2" dominant-baseline="central">Identifica un punto de comunicación de un protocolo de transporte.</text>
<text class="tb-tx" x="987.5" y="142.2" dominant-baseline="central">Transporte.</text>
<rect class="tb-to" x="0" y="163.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="183.0" dominant-baseline="central">DNS</text>
<text class="tb-tx" x="275.0" y="183.0" dominant-baseline="central">Resuelve nombres de dominio a direcciones IP y otros registros.</text>
<text class="tb-tx" x="987.5" y="183.0" dominant-baseline="central">Servicio de nombres.</text>
<rect class="tb-te" x="0" y="203.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="223.8" dominant-baseline="central">ARP</text>
<text class="tb-tx" x="275.0" y="223.8" dominant-baseline="central">Resuelve direcciones IPv4 a direcciones de enlace en redes compatibles.</text>
<text class="tb-tx" x="987.5" y="223.8" dominant-baseline="central">Redes IPv4.</text>
<rect class="tb-to" x="0" y="244.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="264.5" dominant-baseline="central">Neighbor Discovery (ND)</text>
<text class="tb-tx" x="275.0" y="264.5" dominant-baseline="central">Descubre vecinos y resuelve direcciones de enlace en IPv6.</text>
<text class="tb-tx" x="987.5" y="264.5" dominant-baseline="central">Redes IPv6.</text>
<text class="tb-cap" x="600.0" y="311.2" text-anchor="middle">Tabla 1.4. Direccionamiento y mecanismos de resolución.</text></svg>
</div>

Cuando el destino se encuentra en otra red IP, el emisor normalmente envía el paquete al *router* predeterminado. La trama local se dirige a la interfaz del *router* que debe recibirla, mientras que el paquete IP contiene las direcciones de origen y destino correspondientes a la comunicación.

Para ello, el emisor necesita resolver la dirección de enlace del siguiente salto, no la dirección MAC del destino remoto. A medida que el paquete atraviesa *routers*, la trama recibida se procesa y se construye una nueva trama para el siguiente enlace.

Como consecuencia, las direcciones MAC de la trama pueden cambiar entre enlaces, mientras que las direcciones IP de origen y destino normalmente se mantienen durante el encaminamiento, salvo que intervengan mecanismos como la traducción de direcciones de red (NAT), túneles u otras funciones que modifiquen determinados campos.

En IPv4, el campo TTL se reduce durante el encaminamiento y el *router* actualiza el *checksum* de la cabecera correspondiente. En IPv6 se utiliza el campo *Hop Limit*, que cumple una función equivalente para limitar el número de saltos que puede recorrer un paquete. IPv6 no dispone de un *checksum* de cabecera equivalente al de IPv4.

Conviene distinguir la comunicación extremo a extremo del transporte por cada enlace: están relacionadas, pero no son lo mismo. Las direcciones IP identifican los extremos de la comunicación, mientras que las direcciones MAC solo identifican el siguiente salto en cada enlace; la Tabla 1.4 relaciona cada identificador con el mecanismo que lo resuelve.

### Modelos de comunicación

Los modelos OSI y TCP/IP permiten organizar conceptualmente las funciones que intervienen en una comunicación.

El modelo OSI distingue siete capas, mientras que los modelos TCP/IP agrupan esas funciones en un número menor de niveles, según la representación utilizada.

Estos modelos ayudan a identificar responsabilidades y relaciones entre protocolos, pero no implican que cada dispositivo implemente siempre una separación física o un proceso independiente por cada capa.

<div class="diagram" id="figura-1-11" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g108" viewBox="0.78 0 1186.62 578.159" role="img" aria-labelledby="g108-title"><title id="g108-title">Correspondencia funcional entre los modelos OSI y TCP/IP</title><g id="g108-c" transform="translate(-25.355 -8.863) scale(1.178)"><text x="205" y="42" font-size="11.885pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Modelo OSI · 7 capas</text><text x="600" y="42" font-size="11.885pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Modelo TCP/IP · 5 capas</text><rect x="40" y="70" width="330" height="48" rx="5.093" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.547"/><text x="60" y="100" font-size="10.187pt" font-weight="700" fill="#5b21b6" text-anchor="start">L7</text><text x="215" y="100" font-size="11.885pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Aplicación</text><rect x="40" y="126" width="330" height="48" rx="5.093" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.547"/><text x="60" y="156" font-size="10.187pt" font-weight="700" fill="#5b21b6" text-anchor="start">L6</text><text x="215" y="156" font-size="11.885pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Presentación</text><rect x="40" y="182" width="330" height="48" rx="5.093" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.547"/><text x="60" y="212" font-size="10.187pt" font-weight="700" fill="#5b21b6" text-anchor="start">L5</text><text x="215" y="212" font-size="11.885pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Sesión</text><rect x="40" y="238" width="330" height="48" rx="5.093" fill="#bfcff2" stroke="#003ecc" stroke-width="2.547"/><text x="60" y="268" font-size="10.187pt" font-weight="700" fill="#1e3a8a" text-anchor="start">L4</text><text x="215" y="268" font-size="11.885pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Transporte</text><rect x="40" y="294" width="330" height="48" rx="5.093" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.547"/><text x="60" y="324" font-size="10.187pt" font-weight="700" fill="#7c2d12" text-anchor="start">L3</text><text x="215" y="324" font-size="11.885pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Red</text><rect x="40" y="350" width="330" height="48" rx="5.093" fill="#e6f4ee" stroke="#009254" stroke-width="2.547"/><text x="60" y="380" font-size="10.187pt" font-weight="700" fill="#065f46" text-anchor="start">L2</text><text x="215" y="380" font-size="11.885pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Enlace de datos</text><rect x="40" y="406" width="330" height="48" rx="5.093" fill="#ebedf0" stroke="#364e6c" stroke-width="2.547"/><text x="60" y="436" font-size="10.187pt" font-weight="700" fill="#1a1a1a" text-anchor="start">L1</text><text x="215" y="436" font-size="11.885pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Física</text><rect x="500" y="70" width="200" height="160" rx="5.093" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.547"/><text x="518" y="155.0" font-size="10.187pt" font-weight="700" fill="#5b21b6" text-anchor="start">5</text><text x="612" y="155.0" font-size="11.885pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Aplicación</text><rect x="500" y="238" width="200" height="48" rx="5.093" fill="#bfcff2" stroke="#003ecc" stroke-width="2.547"/><text x="518" y="267.0" font-size="10.187pt" font-weight="700" fill="#1e3a8a" text-anchor="start">4</text><text x="612" y="267.0" font-size="11.885pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Transporte</text><rect x="500" y="294" width="200" height="48" rx="5.093" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.547"/><text x="518" y="323.0" font-size="10.187pt" font-weight="700" fill="#7c2d12" text-anchor="start">3</text><text x="612" y="323.0" font-size="11.885pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Red</text><rect x="500" y="350" width="200" height="48" rx="5.093" fill="#e6f4ee" stroke="#009254" stroke-width="2.547"/><text x="518" y="379.0" font-size="10.187pt" font-weight="700" fill="#065f46" text-anchor="start">2</text><text x="612" y="379.0" font-size="11.885pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Enlace de datos</text><rect x="500" y="406" width="200" height="48" rx="5.093" fill="#ebedf0" stroke="#364e6c" stroke-width="2.547"/><text x="518" y="435.0" font-size="10.187pt" font-weight="700" fill="#1a1a1a" text-anchor="start">1</text><text x="612" y="435.0" font-size="11.885pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Física</text><path d="M370 94H500" stroke="#364e6c" stroke-width="2.122" stroke-dasharray="5.093 3.395"/><path d="M370 150H500" stroke="#364e6c" stroke-width="2.122" stroke-dasharray="5.093 3.395"/><path d="M370 206H500" stroke="#364e6c" stroke-width="2.122" stroke-dasharray="5.093 3.395"/><path d="M370 262H500" stroke="#364e6c" stroke-width="2.122" stroke-dasharray="5.093 3.395"/><path d="M370 318H500" stroke="#364e6c" stroke-width="2.122" stroke-dasharray="5.093 3.395"/><path d="M370 374H500" stroke="#364e6c" stroke-width="2.122" stroke-dasharray="5.093 3.395"/><path d="M370 430H500" stroke="#364e6c" stroke-width="2.122" stroke-dasharray="5.093 3.395"/><rect x="725" y="137" width="150" height="26" rx="5.093" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.547"/><path d="M739 146.36h67.5M739 154.16h45.0M818.0 146.36h37.5M818.0 154.16h22.5" stroke="#7c3aed" stroke-width="2.547" stroke-linecap="round"/><rect x="725" y="249" width="40" height="26" rx="5.093" fill="#bfcff2" stroke="#003ecc" stroke-width="2.547"/><text x="745.0" y="267.0" font-size="8.913pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">TCP</text><rect x="768" y="249" width="107" height="26" rx="5.093" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.547"/><path d="M782 258.36h48.15M782 266.16h32.1M834.34 258.36h26.75M834.34 266.16h16.05" stroke="#7c3aed" stroke-width="2.547" stroke-linecap="round"/><rect x="725" y="305" width="32" height="26" rx="5.093" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.547"/><text x="741.0" y="323.0" font-size="8.913pt" font-weight="700" fill="#7c2d12" text-anchor="middle">IP</text><rect x="760" y="305" width="38" height="26" rx="5.093" fill="#bfcff2" stroke="#003ecc" stroke-width="2.547"/><text x="779.0" y="323.0" font-size="8.913pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">TCP</text><rect x="801" y="305" width="77" height="26" rx="5.093" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.547"/><path d="M815 314.36h34.65M815 322.16h23.099999999999998M848.74 314.36h19.25M848.74 322.16h11.549999999999999" stroke="#7c3aed" stroke-width="2.547" stroke-linecap="round"/><rect x="725" y="361" width="34" height="26" rx="5.093" fill="#e6f4ee" stroke="#009254" stroke-width="2.547"/><text x="742.0" y="379.0" font-size="8.913pt" font-weight="700" fill="#065f46" text-anchor="middle">ETH</text><rect x="762" y="361" width="26" height="26" rx="5.093" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.547"/><text x="775.0" y="379.0" font-size="8.913pt" font-weight="700" fill="#7c2d12" text-anchor="middle">IP</text><rect x="791" y="361" width="30" height="26" rx="5.093" fill="#bfcff2" stroke="#003ecc" stroke-width="2.547"/><text x="806.0" y="379.0" font-size="8.913pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">TCP</text><rect x="824" y="361" width="32" height="26" rx="5.093" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.547"/><path d="M838 370.36h14.4M838 378.16h9.6M843.84 370.36h8.0M843.84 378.16h4.8" stroke="#7c3aed" stroke-width="2.547" stroke-linecap="round"/><rect x="859" y="361" width="30" height="26" rx="5.093" fill="#e6f4ee" stroke="#009254" stroke-width="2.547"/><text x="874.0" y="379.0" font-size="8.913pt" font-weight="700" fill="#065f46" text-anchor="middle">FCS</text><rect x="725" y="417" width="22" height="26" rx="2.547" fill="#ffffff" stroke="#364e6c" stroke-width="2.122"/><rect x="751" y="417" width="22" height="26" rx="2.547" fill="#364e6c" stroke="#364e6c" stroke-width="2.122"/><rect x="777" y="417" width="22" height="26" rx="2.547" fill="#364e6c" stroke="#364e6c" stroke-width="2.122"/><rect x="803" y="417" width="22" height="26" rx="2.547" fill="#ffffff" stroke="#364e6c" stroke-width="2.122"/><rect x="829" y="417" width="22" height="26" rx="2.547" fill="#364e6c" stroke="#364e6c" stroke-width="2.122"/><rect x="855" y="417" width="22" height="26" rx="2.547" fill="#ffffff" stroke="#364e6c" stroke-width="2.122"/><text x="895" y="155" font-size="10.187pt" font-weight="400" fill="#1a1a1a" text-anchor="start">HTTP · DNS · SMTP</text><text x="895" y="267" font-size="10.187pt" font-weight="400" fill="#1a1a1a" text-anchor="start">TCP · UDP</text><text x="895" y="323" font-size="10.187pt" font-weight="400" fill="#1a1a1a" text-anchor="start">IPv4 · IPv6 · ICMP</text><text x="895" y="379" font-size="10.187pt" font-weight="400" fill="#1a1a1a" text-anchor="start">Ethernet · 802.11</text><text x="895" y="435" font-size="10.187pt" font-weight="400" fill="#1a1a1a" text-anchor="start">señal en el medio</text><text x="805" y="60" font-size="10.187pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">PDU y protocolos</text></g><text x="594.09" y="560.319" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 1.11. Correspondencia funcional entre los modelos OSI y TCP/IP.</text></svg>
</div>

La correspondencia entre los modelos OSI y TCP/IP (Figura 1.11) permite relacionar las funciones de aplicación, transporte, direccionamiento, enlace y transmisión, sin asumir una equivalencia rígida entre todas las capas de ambos modelos.

## 1.5 ENCAPSULACIÓN

La encapsulación es el proceso mediante el cual cada capa de un modelo de comunicación incorpora la información de control necesaria para cumplir su función. Esta información puede incluir direcciones, identificadores de servicio, números de secuencia y mecanismos de detección de errores, entre otros.

En el dispositivo emisor, los datos generados por una aplicación pasan por las funciones de comunicación correspondientes. Cada protocolo procesa la información recibida del nivel superior y añade, cuando corresponde, sus propios campos de control.

<div class="diagram tabla-svg" id="tabla-1-5" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 406" role="img" aria-labelledby="t4-title"><title id="t4-title">Tabla 1.5. Modelo TCP/IP de cinco capas.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="69.0" y="20.0" dominant-baseline="central" text-anchor="middle">Capa TCP/IP</text>
<text class="tb-ht" x="393.9" y="20.0" dominant-baseline="central" text-anchor="middle">Función principal</text>
<text class="tb-ht" x="760.7" y="20.0" dominant-baseline="central" text-anchor="middle">PDU habitual</text>
<text class="tb-ht" x="1035.8" y="20.0" dominant-baseline="central" text-anchor="middle">Protocolos o tecnologías de ejemplo</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Aplicación</text>
<text class="tb-tx" x="150.0" y="60.8" dominant-baseline="central">Proporciona servicios y protocolos utilizados por las</text>
<text class="tb-tx" x="150.0" y="83.5" dominant-baseline="central">aplicaciones.</text>
<text class="tb-tx" x="661.8" y="72.1" dominant-baseline="central">Datos</text>
<text class="tb-tx" x="883.6" y="72.1" dominant-baseline="central">HTTP, DNS, SMTP, DHCP y SSH.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Transporte</text>
<text class="tb-tx" x="150.0" y="124.2" dominant-baseline="central">Permite la comunicación entre procesos mediante puertos y</text>
<text class="tb-tx" x="150.0" y="147.0" dominant-baseline="central">mecanismos de transporte.</text>
<text class="tb-tx" x="661.8" y="124.2" dominant-baseline="central">Segmento TCP o</text>
<text class="tb-tx" x="661.8" y="147.0" dominant-baseline="central">datagrama UDP</text>
<text class="tb-tx" x="883.6" y="135.6" dominant-baseline="central">TCP y UDP.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">Red o</text>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">Internet</text>
<text class="tb-tx" x="150.0" y="199.1" dominant-baseline="central">Direcciona y encamina paquetes entre redes.</text>
<text class="tb-tx" x="661.8" y="199.1" dominant-baseline="central">Paquete</text>
<text class="tb-tx" x="883.6" y="199.1" dominant-baseline="central">IPv4, IPv6 e ICMP.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">Enlace de</text>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">datos</text>
<text class="tb-tx" x="150.0" y="251.2" dominant-baseline="central">Permite la comunicación dentro de un enlace o segmento y</text>
<text class="tb-tx" x="150.0" y="274.0" dominant-baseline="central">organiza las tramas.</text>
<text class="tb-tx" x="661.8" y="262.6" dominant-baseline="central">Trama</text>
<text class="tb-tx" x="883.6" y="262.6" dominant-baseline="central">Ethernet e IEEE 802.11.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="326.1" dominant-baseline="central">Física</text>
<text class="tb-tx" x="150.0" y="326.1" dominant-baseline="central">Transmite señales a través de un medio físico.</text>
<text class="tb-tx" x="661.8" y="326.1" dominant-baseline="central">Bits</text>
<text class="tb-tx" x="883.6" y="314.8" dominant-baseline="central">Señalización eléctrica, óptica o de</text>
<text class="tb-tx" x="883.6" y="337.5" dominant-baseline="central">radiofrecuencia.</text>
<text class="tb-cap" x="600.0" y="384.2" text-anchor="middle">Tabla 1.5. Modelo TCP/IP de cinco capas.</text></svg>
</div>

El resultado es una unidad de datos de protocolo (PDU) que se entrega al protocolo inferior. Las PDU reciben nombres diferentes según el protocolo y el modelo utilizado. En una comunicación convencional basada en TCP/IP pueden distinguirse los datos de aplicación, el segmento TCP o datagrama UDP, el paquete IP y la trama de enlace.

No todos los protocolos utilizan la misma estructura ni los mismos nombres para sus PDU. La Tabla 1.5 resume la función, la PDU y los protocolos de ejemplo de cada capa del modelo TCP/IP.

### Proceso de encapsulación

En una comunicación que utiliza TCP/IP sobre Ethernet, el proceso puede describirse mediante las siguientes etapas:

<div class="diagram" id="figura-1-12" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g111" viewBox="0 0 1200 591.4" role="img" aria-labelledby="g111-title"><title id="g111-title">Encapsulación en el emisor · la carga útil crece con cada capa</title><g id="g111-c" transform="translate(3.905 7.482) scale(1.192)"><rect x="15" y="12" width="970" height="66" rx="5.033" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.678"/><text x="35" y="51" font-size="11.745pt" font-weight="700" fill="#5b21b6" text-anchor="start">Aplicación</text><text x="965" y="51" font-size="11.745pt" font-weight="700" fill="#5b21b6" text-anchor="end">Datos</text><path d="M573 78L573 104" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" fill="none"/><path d="M567.3 92.3L573 104L578.7 92.3" fill="none" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" stroke-linejoin="round"/><rect x="468" y="20" width="210" height="50" rx="5.033" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.516"/><path d="M482 38.0h94.5M482 53.0h63.0M598.2 38.0h52.5M598.2 53.0h31.5" stroke="#7c3aed" stroke-width="2.516" stroke-linecap="round"/><rect x="15" y="104" width="970" height="66" rx="5.033" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.678"/><text x="35" y="143" font-size="11.745pt" font-weight="700" fill="#1e3a8a" text-anchor="start">Transporte</text><text x="965" y="143" font-size="11.745pt" font-weight="700" fill="#1e3a8a" text-anchor="end">Segmento</text><path d="M573 170L573 196" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" fill="none"/><path d="M567.3 184.3L573 196L578.7 184.3" fill="none" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" stroke-linejoin="round"/><rect x="468" y="112" width="210" height="50" rx="5.033" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.516"/><path d="M482 130.0h94.5M482 145.0h63.0M598.2 130.0h52.5M598.2 145.0h31.5" stroke="#7c3aed" stroke-width="2.516" stroke-linecap="round"/><rect x="15" y="196" width="970" height="66" rx="5.033" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.678"/><text x="35" y="235" font-size="11.745pt" font-weight="700" fill="#7c2d12" text-anchor="start">Red</text><text x="965" y="235" font-size="11.745pt" font-weight="700" fill="#7c2d12" text-anchor="end">Paquete</text><path d="M573 262L573 288" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" fill="none"/><path d="M567.3 276.3L573 288L578.7 276.3" fill="none" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" stroke-linejoin="round"/><rect x="468" y="204" width="210" height="50" rx="5.033" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.516"/><path d="M482 222.0h94.5M482 237.0h63.0M598.2 222.0h52.5M598.2 237.0h31.5" stroke="#7c3aed" stroke-width="2.516" stroke-linecap="round"/><rect x="15" y="288" width="970" height="66" rx="5.033" fill="#e6f4ee" stroke="#009254" stroke-width="1.678"/><text x="35" y="327" font-size="11.745pt" font-weight="700" fill="#065f46" text-anchor="start">Enlace</text><text x="965" y="327" font-size="11.745pt" font-weight="700" fill="#065f46" text-anchor="end">Trama</text><path d="M573 354L573 380" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" fill="none"/><path d="M567.3 368.3L573 380L578.7 368.3" fill="none" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" stroke-linejoin="round"/><rect x="468" y="296" width="210" height="50" rx="5.033" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.516"/><path d="M482 314.0h94.5M482 329.0h63.0M598.2 314.0h52.5M598.2 329.0h31.5" stroke="#7c3aed" stroke-width="2.516" stroke-linecap="round"/><rect x="15" y="380" width="970" height="66" rx="5.033" fill="#ffffff" stroke="#364e6c" stroke-width="1.678"/><text x="35" y="419" font-size="11.745pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Física</text><text x="965" y="419" font-size="11.745pt" font-weight="700" fill="#1a1a1a" text-anchor="end">Bits</text><rect x="388" y="112" width="72" height="50" rx="5.033" fill="#bfcff2" stroke="#003ecc" stroke-width="2.516"/><text x="424.0" y="142.0" font-size="11.745pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">TCP</text><rect x="388" y="204" width="72" height="50" rx="5.033" fill="#bfcff2" stroke="#003ecc" stroke-width="2.516"/><text x="424.0" y="234.0" font-size="11.745pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">TCP</text><rect x="308" y="204" width="72" height="50" rx="5.033" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.516"/><text x="344.0" y="234.0" font-size="11.745pt" font-weight="700" fill="#7c2d12" text-anchor="middle">IP</text><rect x="388" y="296" width="72" height="50" rx="5.033" fill="#bfcff2" stroke="#003ecc" stroke-width="2.516"/><text x="424.0" y="326.0" font-size="11.745pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">TCP</text><rect x="308" y="296" width="72" height="50" rx="5.033" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.516"/><text x="344.0" y="326.0" font-size="11.745pt" font-weight="700" fill="#7c2d12" text-anchor="middle">IP</text><rect x="228" y="296" width="72" height="50" rx="5.033" fill="#e6f4ee" stroke="#009254" stroke-width="2.516"/><text x="264.0" y="326.0" font-size="11.745pt" font-weight="700" fill="#065f46" text-anchor="middle">ETH</text><rect x="686" y="296" width="72" height="50" rx="5.033" fill="#e6f4ee" stroke="#009254" stroke-width="2.516"/><text x="722.0" y="326.0" font-size="11.745pt" font-weight="700" fill="#065f46" text-anchor="middle">FCS</text><rect x="228" y="396" width="22" height="34" rx="5.033" fill="#ffffff" stroke="#364e6c" stroke-width="2.097"/><rect x="254" y="396" width="22" height="34" rx="5.033" fill="#364e6c" stroke="#364e6c" stroke-width="2.097"/><rect x="280" y="396" width="22" height="34" rx="5.033" fill="#364e6c" stroke="#364e6c" stroke-width="2.097"/><rect x="306" y="396" width="22" height="34" rx="5.033" fill="#ffffff" stroke="#364e6c" stroke-width="2.097"/><rect x="332" y="396" width="22" height="34" rx="5.033" fill="#364e6c" stroke="#364e6c" stroke-width="2.097"/><rect x="358" y="396" width="22" height="34" rx="5.033" fill="#ffffff" stroke="#364e6c" stroke-width="2.097"/><rect x="384" y="396" width="22" height="34" rx="5.033" fill="#ffffff" stroke="#364e6c" stroke-width="2.097"/><rect x="410" y="396" width="22" height="34" rx="5.033" fill="#364e6c" stroke="#364e6c" stroke-width="2.097"/><rect x="436" y="396" width="22" height="34" rx="5.033" fill="#364e6c" stroke="#364e6c" stroke-width="2.097"/><rect x="462" y="396" width="22" height="34" rx="5.033" fill="#ffffff" stroke="#364e6c" stroke-width="2.097"/><rect x="488" y="396" width="22" height="34" rx="5.033" fill="#364e6c" stroke="#364e6c" stroke-width="2.097"/><rect x="514" y="396" width="22" height="34" rx="5.033" fill="#ffffff" stroke="#364e6c" stroke-width="2.097"/><rect x="540" y="396" width="22" height="34" rx="5.033" fill="#364e6c" stroke="#364e6c" stroke-width="2.097"/><rect x="566" y="396" width="22" height="34" rx="5.033" fill="#364e6c" stroke="#364e6c" stroke-width="2.097"/><rect x="592" y="396" width="22" height="34" rx="5.033" fill="#ffffff" stroke="#364e6c" stroke-width="2.097"/><rect x="618" y="396" width="22" height="34" rx="5.033" fill="#364e6c" stroke="#364e6c" stroke-width="2.097"/><rect x="644" y="396" width="22" height="34" rx="5.033" fill="#ffffff" stroke="#364e6c" stroke-width="2.097"/><rect x="670" y="396" width="22" height="34" rx="5.033" fill="#ffffff" stroke="#364e6c" stroke-width="2.097"/><rect x="696" y="396" width="22" height="34" rx="5.033" fill="#364e6c" stroke="#364e6c" stroke-width="2.097"/><rect x="722" y="396" width="22" height="34" rx="5.033" fill="#ffffff" stroke="#364e6c" stroke-width="2.097"/></g><text x="600" y="573.56" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 1.12. Encapsulación en el emisor · la carga útil crece con cada capa.</text></svg>
</div>

- Aplicación: genera los datos que se desean transmitir.
- Transporte: TCP incorpora la información de su cabecera y produce un segmento; si se utiliza UDP, se genera un datagrama UDP.
- Internet: IP añade la información de direccionamiento y otros campos de su cabecera para formar un paquete IP.
- Enlace: Ethernet incorpora la información necesaria para transportar el paquete por el enlace y forma una trama.
- Capa física: la interfaz representa la información como señales que se transmiten mediante el medio correspondiente.

En cada etapa, la unidad de datos procedente del nivel superior se convierte en la carga útil del protocolo inferior, de acuerdo con las reglas que establece dicho protocolo (Figura 1.12).

La trama Ethernet, por ejemplo, transporta el paquete IP como carga útil; no sustituye las funciones de direccionamiento y encaminamiento de IP. Cuando se emplean protocolos seguros, la secuencia de procesamiento puede incluir funciones adicionales.

<div class="diagram tabla-svg" id="tabla-1-6" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 447" role="img" aria-labelledby="t5-title"><title id="t5-title">Tabla 1.6. Funciones de la información de control durante la comunicación.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="128.0" y="20.0" dominant-baseline="central" text-anchor="middle">Función de control</text>
<text class="tb-ht" x="527.8" y="20.0" dominant-baseline="central" text-anchor="middle">Propósito</text>
<text class="tb-ht" x="999.8" y="20.0" dominant-baseline="central" text-anchor="middle">Ejemplos</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Direccionamiento</text>
<text class="tb-tx" x="267.9" y="60.8" dominant-baseline="central">Identifica los extremos o interfaces que participan en la</text>
<text class="tb-tx" x="267.9" y="83.5" dominant-baseline="central">comunicación.</text>
<text class="tb-tx" x="811.7" y="72.1" dominant-baseline="central">Direcciones MAC, direcciones IPv4/IPv6.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">Identificación del protocolo</text>
<text class="tb-tx tb-b" x="12.0" y="147.0" dominant-baseline="central">superior</text>
<text class="tb-tx" x="267.9" y="124.2" dominant-baseline="central">Indica qué protocolo o tipo de información debe procesarse a</text>
<text class="tb-tx" x="267.9" y="147.0" dominant-baseline="central">continuación.</text>
<text class="tb-tx" x="811.7" y="124.2" dominant-baseline="central">EtherType, Protocol (IPv4), Next Header (IPv6) y</text>
<text class="tb-tx" x="811.7" y="147.0" dominant-baseline="central">puertos de transporte.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">Secuenciación y control de</text>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">flujo</text>
<text class="tb-tx" x="267.9" y="187.8" dominant-baseline="central">Permite ordenar datos, confirmar su recepción y regular el envío</text>
<text class="tb-tx" x="267.9" y="210.5" dominant-baseline="central">cuando el protocolo lo contempla.</text>
<text class="tb-tx" x="811.7" y="187.8" dominant-baseline="central">Números de secuencia y confirmación, ventana</text>
<text class="tb-tx" x="811.7" y="210.5" dominant-baseline="central">TCP.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">Límite de vida</text>
<text class="tb-tx" x="267.9" y="251.2" dominant-baseline="central">Evita que los paquetes circulen indefinidamente por la red.</text>
<text class="tb-tx" x="811.7" y="251.2" dominant-baseline="central">TTL en IPv4 y Hop Limit en IPv6.</text>
<rect class="tb-te" x="0" y="272.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="303.4" dominant-baseline="central">Delimitación y longitud</text>
<text class="tb-tx" x="267.9" y="292.0" dominant-baseline="central">Permite identificar la longitud o los límites de las unidades</text>
<text class="tb-tx" x="267.9" y="314.8" dominant-baseline="central">transmitidas.</text>
<text class="tb-tx" x="811.7" y="292.0" dominant-baseline="central">Campos de longitud en IP/UDP y delimitación</text>
<text class="tb-tx" x="811.7" y="314.8" dominant-baseline="central">de tramas Ethernet.</text>
<rect class="tb-to" x="0" y="335.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="366.9" dominant-baseline="central">Detección de errores</text>
<text class="tb-tx" x="267.9" y="355.5" dominant-baseline="central">Permite detectar determinadas alteraciones producidas durante</text>
<text class="tb-tx" x="267.9" y="378.2" dominant-baseline="central">la transmisión.</text>
<text class="tb-tx" x="811.7" y="366.9" dominant-baseline="central">FCS de Ethernet y checksums de protocolos.</text>
<text class="tb-cap" x="600.0" y="425.0" text-anchor="middle">Tabla 1.6. Funciones de la información de control durante la comunicación.</text></svg>
</div>

En una conexión HTTPS convencional que utiliza HTTP/1.1 o HTTP/2, los datos HTTP se procesan mediante TLS antes de entregarse a TCP, que proporciona el transporte. La Tabla 1.6 resume las funciones de la información de control añadida en cada capa.

En ese caso, TLS protege la comunicación mediante mecanismos criptográficos y utiliza su propio formato de registros. HTTP/3 utiliza una arquitectura diferente: se basa en QUIC, que funciona sobre UDP e integra funciones de transporte y protección criptográfica basadas en TLS 1.3. QUIC proporciona mecanismos de transporte fiable por flujo, control de congestión y otras funciones que no ofrece UDP por sí mismo (Figura 1.13).

La secuencia depende de la versión de HTTP, de modo que HTTPS no siempre transporta los datos directamente sobre TCP. El proceso de encapsulación también puede involucrar protocolos de túnel, VPN y otros mecanismos que incorporan información adicional. En consecuencia, el número y el orden de las cabeceras dependen de la arquitectura concreta; no son idénticos en todas las comunicaciones.

<div class="diagram" id="figura-1-13" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g113" viewBox="0 0 1200 587.062" role="img" aria-labelledby="g113-title"><title id="g113-title">HTTPS sobre TCP y sobre QUIC · dos arquitecturas de transporte seguro</title><g id="g113-c" transform="translate(-76.564 2.163) scale(1.23)"><text x="290" y="32" font-size="13.821pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">HTTPS sobre TCP</text><text x="290" y="52" font-size="9.756pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">HTTP/1.1 o HTTP/2</text><text x="810" y="32" font-size="13.821pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">HTTPS sobre QUIC</text><text x="810" y="52" font-size="9.756pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">HTTP/3</text><rect x="80" y="80" width="420" height="68" rx="4.878" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.439"/><text x="290" y="110" font-size="11.382pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">HTTP/1.1 o HTTP/2</text><text x="290" y="132" font-size="9.756pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">aplicación</text><path d="M290 150L290 173" stroke="#364e6c" stroke-width="2.439" stroke-linecap="round" fill="none"/><path d="M284.3 161.3L290 173L295.7 161.3" fill="none" stroke="#364e6c" stroke-width="2.439" stroke-linecap="round" stroke-linejoin="round"/><rect x="80" y="175" width="420" height="68" rx="4.878" fill="#e6f4ee" stroke="#009254" stroke-width="2.439"/><text x="290" y="205" font-size="11.382pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">TLS</text><text x="290" y="227" font-size="9.756pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">protege la comunicación y añade registros</text><g transform="translate(468,209) scale(0.9)"><rect x="-14" y="-4" width="28" height="22" rx="4" fill="#065f46"/><path d="M-9 -4v-8a9 9 0 0 1 18 0v8" fill="none" stroke="#065f46" stroke-width="4"/></g><path d="M290 245L290 268" stroke="#364e6c" stroke-width="2.439" stroke-linecap="round" fill="none"/><path d="M284.3 256.3L290 268L295.7 256.3" fill="none" stroke="#364e6c" stroke-width="2.439" stroke-linecap="round" stroke-linejoin="round"/><rect x="80" y="270" width="420" height="68" rx="4.878" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.439"/><text x="290" y="300" font-size="11.382pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">TCP</text><text x="290" y="322" font-size="9.756pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">transporte fiable y ordenado</text><path d="M290 340L290 363" stroke="#364e6c" stroke-width="2.439" stroke-linecap="round" fill="none"/><path d="M284.3 351.3L290 363L295.7 351.3" fill="none" stroke="#364e6c" stroke-width="2.439" stroke-linecap="round" stroke-linejoin="round"/><rect x="80" y="365" width="420" height="68" rx="4.878" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.439"/><text x="290" y="395" font-size="11.382pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IP</text><text x="290" y="417" font-size="9.756pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">direccionamiento y entrega entre redes</text><rect x="600" y="80" width="420" height="68" rx="4.878" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.439"/><text x="810" y="110" font-size="11.382pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">HTTP/3</text><text x="810" y="132" font-size="9.756pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">aplicación</text><path d="M810 150L810 173" stroke="#364e6c" stroke-width="2.439" stroke-linecap="round" fill="none"/><path d="M804.3 161.3L810 173L815.7 161.3" fill="none" stroke="#364e6c" stroke-width="2.439" stroke-linecap="round" stroke-linejoin="round"/><rect x="600" y="175" width="420" height="68" rx="4.878" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.439"/><text x="810" y="205" font-size="11.382pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">QUIC · con TLS 1.3 integrado</text><text x="810" y="227" font-size="9.756pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">transporte con multiplexación y seguridad</text><g transform="translate(988,209) scale(0.9)"><rect x="-14" y="-4" width="28" height="22" rx="4" fill="#065f46"/><path d="M-9 -4v-8a9 9 0 0 1 18 0v8" fill="none" stroke="#065f46" stroke-width="4"/></g><path d="M810 245L810 268" stroke="#364e6c" stroke-width="2.439" stroke-linecap="round" fill="none"/><path d="M804.3 256.3L810 268L815.7 256.3" fill="none" stroke="#364e6c" stroke-width="2.439" stroke-linecap="round" stroke-linejoin="round"/><rect x="600" y="270" width="420" height="68" rx="4.878" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.439"/><text x="810" y="300" font-size="11.382pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">UDP</text><text x="810" y="322" font-size="9.756pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">datagramas sin conexión</text><path d="M810 340L810 363" stroke="#364e6c" stroke-width="2.439" stroke-linecap="round" fill="none"/><path d="M804.3 351.3L810 363L815.7 351.3" fill="none" stroke="#364e6c" stroke-width="2.439" stroke-linecap="round" stroke-linejoin="round"/><rect x="600" y="365" width="420" height="68" rx="4.878" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.439"/><text x="810" y="395" font-size="11.382pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IP</text><text x="810" y="417" font-size="9.756pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">direccionamiento y entrega entre redes</text></g><text x="600" y="569.222" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 1.13. HTTPS sobre TCP y sobre QUIC · dos arquitecturas de transporte seguro.</text></svg>
</div>

La encapsulación mantiene separadas las responsabilidades de cada capa sin que ninguna conozca los detalles internos de las demás. Esta organización facilita el desarrollo, la interoperabilidad y el análisis de las comunicaciones.

### Desencapsulación

Cuando la información llega al dispositivo de destino, se realiza el proceso complementario, denominado desencapsulación. En este proceso, cada protocolo procesa la información que le corresponde y entrega la carga útil al nivel superior cuando se cumplen las condiciones necesarias.

En una comunicación basada en Ethernet, IP y TCP, la interfaz recibe la trama y la capa de enlace procesa sus campos antes de entregar el paquete IP al protocolo correspondiente. IP examina la información de red y, si el paquete está destinado al sistema y cumple las condiciones de procesamiento, entrega la carga útil al protocolo de transporte. TCP procesa su información de control, reconstruye el flujo de bytes según corresponda y entrega la información a la aplicación destinataria.

<div class="diagram" id="figura-1-14" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g112" viewBox="0 0 1200 591.4" role="img" aria-labelledby="g112-title"><title id="g112-title">Desencapsulación en el receptor · cada capa procesa y entrega al nivel superior</title><g id="g112-c" transform="translate(3.905 7.482) scale(1.192)"><rect x="15" y="12" width="970" height="66" rx="5.033" fill="#ffffff" stroke="#364e6c" stroke-width="1.678"/><text x="35" y="51" font-size="11.745pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Física</text><text x="965" y="46" font-size="11.745pt" font-weight="700" fill="#1a1a1a" text-anchor="end">Señal · bits</text><text x="965" y="64" font-size="10.067pt" font-weight="400" fill="#1a1a1a" text-anchor="end">entrada</text><path d="M573 78L573 104" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" fill="none"/><path d="M567.3 92.3L573 104L578.7 92.3" fill="none" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" stroke-linejoin="round"/><rect x="15" y="104" width="970" height="66" rx="5.033" fill="#e6f4ee" stroke="#009254" stroke-width="1.678"/><text x="35" y="143" font-size="11.745pt" font-weight="700" fill="#065f46" text-anchor="start">Enlace</text><text x="965" y="138" font-size="11.745pt" font-weight="700" fill="#065f46" text-anchor="end">Trama → paquete IP</text><text x="965" y="156" font-size="10.067pt" font-weight="400" fill="#1a1a1a" text-anchor="end">quita ETH y FCS</text><path d="M573 170L573 196" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" fill="none"/><path d="M567.3 184.3L573 196L578.7 184.3" fill="none" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" stroke-linejoin="round"/><rect x="15" y="196" width="970" height="66" rx="5.033" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.678"/><text x="35" y="235" font-size="11.745pt" font-weight="700" fill="#7c2d12" text-anchor="start">Red</text><text x="965" y="230" font-size="11.745pt" font-weight="700" fill="#7c2d12" text-anchor="end">Paquete → segmento</text><text x="965" y="248" font-size="10.067pt" font-weight="400" fill="#1a1a1a" text-anchor="end">quita la cabecera IP</text><path d="M573 262L573 288" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" fill="none"/><path d="M567.3 276.3L573 288L578.7 276.3" fill="none" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" stroke-linejoin="round"/><rect x="15" y="288" width="970" height="66" rx="5.033" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.678"/><text x="35" y="327" font-size="11.745pt" font-weight="700" fill="#1e3a8a" text-anchor="start">Transporte</text><text x="965" y="322" font-size="11.745pt" font-weight="700" fill="#1e3a8a" text-anchor="end">Segmento → datos</text><text x="965" y="340" font-size="10.067pt" font-weight="400" fill="#1a1a1a" text-anchor="end">quita la cabecera TCP</text><path d="M573 354L573 380" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" fill="none"/><path d="M567.3 368.3L573 380L578.7 368.3" fill="none" stroke="#364e6c" stroke-width="2.516" stroke-linecap="round" stroke-linejoin="round"/><rect x="15" y="380" width="970" height="66" rx="5.033" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.678"/><text x="35" y="419" font-size="11.745pt" font-weight="700" fill="#5b21b6" text-anchor="start">Aplicación</text><text x="965" y="414" font-size="11.745pt" font-weight="700" fill="#5b21b6" text-anchor="end">Mensaje</text><text x="965" y="432" font-size="10.067pt" font-weight="400" fill="#1a1a1a" text-anchor="end">recibe los datos</text><polyline points="250,45.0 252,40.8 254,36.9 256,33.7 258,31.4 260,30.2 262,30.2 264,31.4 266,33.7 268,36.9 270,40.8 272,45.0 274,49.2 276,53.1 278,56.4 280,58.7 282,59.9 284,59.8 286,58.6 288,56.3 290,53.1 292,49.2 294,45.0 296,40.7 298,36.9 300,33.6 302,31.3 304,30.1 306,30.2 308,31.4 310,33.7 312,36.9 314,40.8 316,45.1 318,49.3 320,53.2 322,56.4 324,58.7 326,59.9 328,59.8 330,58.6 332,56.3 334,53.0 336,49.2 338,44.9 340,40.7 342,36.8 344,33.6 346,31.3 348,30.1 350,30.2 352,31.4 354,33.7 356,37.0 358,40.9 360,45.1 362,49.3 364,53.2 366,56.4 368,58.7 370,59.9 372,59.8 374,58.6 376,56.3 378,53.0 380,49.1 382,44.9 384,40.7 386,36.8 388,33.6 390,31.3 392,30.1 394,30.2 396,31.4 398,33.7 400,37.0 402,40.9 404,45.1 406,49.4 408,53.2 410,56.4 412,58.7 414,59.9 416,59.8 418,58.6 420,56.2 422,53.0 424,49.1 426,44.8 428,40.6 430,36.8 432,33.6 434,31.3 436,30.1 438,30.2 440,31.4 442,33.8 444,37.0 446,40.9 448,45.2 450,49.4 452,53.3 454,56.5 456,58.7 458,59.9 460,59.8 462,58.6 464,56.2 466,53.0 468,49.0 470,44.8 472,40.6 474,36.7 476,33.5 478,31.3 480,30.1 482,30.2 484,31.4 486,33.8 488,37.1 490,41.0 492,45.2 494,49.4 496,53.3 498,56.5 500,58.7 502,59.9 504,59.8 506,58.6 508,56.2 510,52.9 512,49.0 514,44.8 516,40.6 518,36.7 520,33.5 522,31.3 524,30.1 526,30.2 528,31.5 530,33.8 532,37.1 534,41.0 536,45.2 538,49.5 540,53.3 542,56.5 544,58.7 546,59.9 548,59.8 550,58.5 552,56.2 554,52.9 556,49.0 558,44.7 560,40.5 562,36.7 564,33.5 566,31.2 568,30.1 570,30.2 572,31.5 574,33.8 576,37.1 578,41.0 580,45.3 582,49.5 584,53.4 586,56.5 588,58.8 590,59.9 592,59.8 594,58.5 596,56.1 598,52.9 600,48.9 602,44.7 604,40.5 606,36.6 608,33.5 610,31.2 612,30.1 614,30.2 616,31.5 618,33.9 620,37.2 622,41.1 624,45.3 626,49.5 628,53.4 630,56.5 632,58.8 634,59.9 636,59.8 638,58.5 640,56.1 642,52.8 644,48.9 646,44.7 648,40.4 650,36.6 652,33.4 654,31.2 656,30.1 658,30.2 660,31.5 662,33.9 664,37.2 666,41.1 668,45.4 670,49.6 672,53.4 674,56.6 676,58.8 678,59.9 680,59.8 682,58.5 684,56.1 686,52.8 688,48.9 690,44.6 692,40.4 694,36.6 696,33.4 698,31.2 700,30.1 702,30.2 704,31.5 706,33.9 708,37.2 710,41.2 712,45.4 714,49.6 716,53.4 718,56.6 720,58.8 722,59.9 724,59.8 726,58.5 728,56.1" fill="none" stroke="#364e6c" stroke-width="2.516" stroke-linejoin="round" stroke-linecap="round"/><g><rect stroke-dasharray="5.033 3.355" x="228" y="112" width="72" height="50" rx="5.033" fill="#e6f4ee" stroke="#009254" stroke-width="2.516"/><text x="264.0" y="142.0" font-size="11.745pt" font-weight="700" fill="#065f46" text-anchor="middle">ETH</text></g><path d="M286 104l14 14M300 104l-14 14" stroke="#d40000" stroke-width="2.516" stroke-linecap="round"/><rect x="308" y="112" width="72" height="50" rx="5.033" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.516"/><text x="344.0" y="142.0" font-size="11.745pt" font-weight="700" fill="#7c2d12" text-anchor="middle">IP</text><rect x="388" y="112" width="72" height="50" rx="5.033" fill="#bfcff2" stroke="#003ecc" stroke-width="2.516"/><text x="424.0" y="142.0" font-size="11.745pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">TCP</text><rect x="468" y="112" width="210" height="50" rx="5.033" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.516"/><path d="M482 130.0h94.5M482 145.0h63.0M598.2 130.0h52.5M598.2 145.0h31.5" stroke="#7c3aed" stroke-width="2.516" stroke-linecap="round"/><g><rect stroke-dasharray="5.033 3.355" x="686" y="112" width="72" height="50" rx="5.033" fill="#e6f4ee" stroke="#009254" stroke-width="2.516"/><text x="722.0" y="142.0" font-size="11.745pt" font-weight="700" fill="#065f46" text-anchor="middle">FCS</text></g><path d="M744 104l14 14M758 104l-14 14" stroke="#d40000" stroke-width="2.516" stroke-linecap="round"/><g><rect stroke-dasharray="5.033 3.355" x="308" y="204" width="72" height="50" rx="5.033" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.516"/><text x="344.0" y="234.0" font-size="11.745pt" font-weight="700" fill="#7c2d12" text-anchor="middle">IP</text></g><path d="M366 196l14 14M380 196l-14 14" stroke="#d40000" stroke-width="2.516" stroke-linecap="round"/><rect x="388" y="204" width="72" height="50" rx="5.033" fill="#bfcff2" stroke="#003ecc" stroke-width="2.516"/><text x="424.0" y="234.0" font-size="11.745pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">TCP</text><rect x="468" y="204" width="210" height="50" rx="5.033" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.516"/><path d="M482 222.0h94.5M482 237.0h63.0M598.2 222.0h52.5M598.2 237.0h31.5" stroke="#7c3aed" stroke-width="2.516" stroke-linecap="round"/><g><rect stroke-dasharray="5.033 3.355" x="388" y="296" width="72" height="50" rx="5.033" fill="#bfcff2" stroke="#003ecc" stroke-width="2.516"/><text x="424.0" y="326.0" font-size="11.745pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">TCP</text></g><path d="M446 288l14 14M460 288l-14 14" stroke="#d40000" stroke-width="2.516" stroke-linecap="round"/><rect x="468" y="296" width="210" height="50" rx="5.033" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.516"/><path d="M482 314.0h94.5M482 329.0h63.0M598.2 314.0h52.5M598.2 329.0h31.5" stroke="#7c3aed" stroke-width="2.516" stroke-linecap="round"/><rect x="468" y="388" width="210" height="50" rx="5.033" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.516"/><path d="M482 406.0h94.5M482 421.0h63.0M598.2 406.0h52.5M598.2 421.0h31.5" stroke="#7c3aed" stroke-width="2.516" stroke-linecap="round"/></g><text x="600" y="573.56" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 1.14. Desencapsulación en el receptor · cada capa procesa y entrega al nivel superior.</text></svg>
</div>

La desencapsulación no se limita a retirar cabeceras (Figura 1.14).

Cada protocolo debe procesar los campos pertinentes y puede validar la información, detectar errores, descartar datos no válidos o aplicar otros mecanismos definidos por su funcionamiento.

Finalmente, los datos quedan disponibles para la aplicación receptora. Así, la encapsulación y la desencapsulación permiten que cada capa mantenga responsabilidades específicas y coopere con las demás. Con este modelo de capas como referencia, el siguiente tema examina cómo se representan los bits como señales y qué límites impone el medio físico a su transmisión.
