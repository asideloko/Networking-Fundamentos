<p class="tema-num">TEMA 10</p>

# INFRAESTRUCTURA WAN Y CORE

La infraestructura de red de área extensa (*WAN, Wide Area Network*) y el núcleo (*core*) son la columna vertebral de las comunicaciones a escala geográfica, ya sea dentro de una organización con varias sedes o en los proveedores de servicios de Internet (ISP). Estas infraestructuras deben ofrecer alta disponibilidad, bajo retardo, capacidad suficiente y mecanismos de ingeniería de tráfico para sostener los flujos de datos entre sitios distantes.

Las VPN del Tema 9 conectan sedes a través de redes que el usuario no controla. La infraestructura WAN y de núcleo es precisamente esa red intermedia, y este tema examina cómo se diseña y se opera.

En términos simples, la WAN interconecta redes situadas en ubicaciones geográficas distintas, y el *core* es la red troncal de alta velocidad que agrega y distribuye el tráfico entre ellas. Su diseño abarca desde los enlaces físicos (fibra óptica, radioenlaces, satélite) hasta los protocolos de ingeniería de tráfico, como MPLS, y las arquitecturas definidas por *software*, como SD-WAN.

El recorrido de este tema empieza con MPLS y SD-WAN, compara ambas tecnologías, describe el *backbone* y el *peering*, y termina con la migración de MPLS hacia SD-WAN (Figura 10.1).

<div class="diagram" id="figura-10-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1001" viewBox="0 0 1200 412" role="img" aria-labelledby="g1001-title">
<title id="g1001-title">Mapa del Tema 10</title>
<defs></defs>
<g id="g1001-c" transform="translate(20 20)"><rect x="0" y="0" width="370.67" height="158" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="370.67" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="185.33" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">10.1 MPLS</text>
<g transform="translate(185.33 78.64) scale(0.7)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#003ecc"></circle></g>
<text x="185.33" y="139" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Conmutación por etiquetas</text>
<rect x="394.67" y="0" width="370.67" height="158" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="394.67" y1="34" x2="765.33" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="580" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">10.2 SD-WAN</text>
<g transform="translate(580 78.64) scale(0.7)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="580" y="139" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">WAN definida por software</text>
<rect x="789.33" y="0" width="370.67" height="158" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="789.33" y1="34" x2="1160" y2="34" stroke="#dd3a00" stroke-width="1.5"/>
<text x="974.67" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">10.3 MPLS frente a SD-WAN</text>
<g transform="translate(974.67 78.64) scale(0.7)" data-lib="fork"><g fill="none" stroke="#dd3a00" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-30 0 H-6 L20 -18 M-6 0 L20 18"></path><path d="M12 -26 L22 -18 L12 -10 M12 10 L22 18 L12 26"></path></g><circle cx="-30" cy="0" r="5" fill="#dd3a00"></circle></g>
<text x="974.67" y="139" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Comparación de tecnologías</text>
<rect x="0" y="182" width="370.67" height="158" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="0" y1="216" x2="370.67" y2="216" stroke="#009254" stroke-width="1.5"/>
<text x="185.33" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">10.4 Backbone de red</text>
<g transform="translate(185.33 260.64) scale(0.7)" data-lib="fiber"><path d="M-40 0 H-20 L-10 -12 L0 12 L10 -12 L20 12 L30 0 H40" fill="none" stroke="#009254" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="185.33" y="321" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Red troncal de alta capacidad</text>
<rect x="394.67" y="182" width="370.67" height="158" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="394.67" y1="216" x2="765.33" y2="216" stroke="#d40000" stroke-width="1.5"/>
<text x="580" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">10.5 Peering</text>
<g transform="translate(580 260.64) scale(0.7)" data-lib="nodes"><g stroke="#d40000" stroke-width="3" fill="none"><path d="M0 -22 L-22 14 M0 -22 L22 14 M-22 14 H22"></path></g><circle cx="0" cy="-22" r="9" fill="#f4bfbf" stroke="#d40000" stroke-width="3"></circle><circle cx="-22" cy="14" r="9" fill="#f4bfbf" stroke="#d40000" stroke-width="3"></circle><circle cx="22" cy="14" r="9" fill="#f4bfbf" stroke="#d40000" stroke-width="3"></circle></g>
<text x="580" y="321" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Interconexión entre redes</text>
<rect x="789.33" y="182" width="370.67" height="158" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="789.33" y1="216" x2="1160" y2="216" stroke="#364e6c" stroke-width="1.5"/>
<text x="974.67" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">10.6 Migración de MPLS a SD-WAN</text>
<g transform="translate(974.67 260.64) scale(0.7)" data-lib="sync"><g fill="none" stroke="#364e6c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 -4 A26 26 0 0 1 20 -16"></path><path d="M24 4 A26 26 0 0 1 -20 16"></path><path d="M12 -22 L22 -16 L14 -8"></path><path d="M-12 22 L-22 16 L-14 8"></path></g></g>
<text x="974.67" y="321" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Transición entre tecnologías</text></g><text x="600" y="394" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 10.1. Mapa del Tema 10.</text></svg>
</div>

## 10.1 MPLS

MPLS (*Multiprotocol Label Switching*) es una tecnología de transporte que usa etiquetas (*labels*) para dirigir el reenvío de paquetes dentro de un dominio MPLS, apoyándose en el encaminamiento IP para establecer y alcanzar las rutas de etiquetas. Como opera sobre tecnologías de enlace y se integra con la capa de red, suele describirse de forma didáctica como una tecnología de "capa 2.5"; esa expresión no corresponde a una capa formal del modelo OSI.

Su objetivo inicial fue acelerar el reenvío mediante conmutación de etiquetas. En las redes actuales se emplea sobre todo para ingeniería de tráfico, VPN y transporte multiservicio en operadores y grandes organizaciones.

En una red MPLS, los paquetes reciben una o varias etiquetas al ingresar al dominio. Los *routers* de conmutación de etiquetas (LSR) del núcleo suelen decidir el reenvío a partir de la etiqueta superior de la pila, que pueden intercambiar o retirar según la operación configurada; en el *router* de salida, el paquete puede volver a procesarse mediante el encaminamiento IP. Por eso el comportamiento concreto depende de la posición del equipo en la ruta y del servicio MPLS utilizado.

Esta arquitectura permite construir trayectorias predefinidas llamadas *Label Switched Paths* (LSP), que pueden optimizarse según requisitos operativos específicos. La Figura 10.2 representa el reenvío por etiquetas.

### Componentes principales

#### Ingress LSR

Es el *router* de entrada a la red MPLS. Clasifica el tráfico y asigna las etiquetas correspondientes según las políticas de reenvío configuradas.

#### LSR

Son los dispositivos intermedios que intercambian, añaden o eliminan etiquetas mientras el tráfico atraviesa la red.

#### Egress LSR

Es el punto de salida del dominio MPLS: entrega el tráfico a la red de destino. Según la configuración, la última etiqueta la retira este *router* o ya la retiró el penúltimo salto (*Penultimate Hop Popping*).

### Operaciones básicas

#### Push

Añade una etiqueta al paquete.

#### Swap

Sustituye una etiqueta existente por otra.

#### Pop

Elimina una etiqueta antes de entregar el tráfico al siguiente dominio de red.

<div class="diagram" id="figura-10-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1002" viewBox="0 0 1200 327.187" role="img" aria-labelledby="g1002-title">
<title id="g1002-title">Reenvío por etiquetas en una ruta MPLS (LSP)</title>
<defs><marker id="g1002m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g1002n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g1002-c" transform="translate(-8.778 -8.762) scale(1.0142)"><g transform="translate(0 -21)"><g transform="translate(80 80) scale(0.6)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#364e6c" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#364e6c"></rect></g>
<text x="80" y="140" font-size="11.832pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Red de origen</text>
<g transform="translate(1120 80) scale(0.6)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#364e6c" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#364e6c"></rect></g>
<text x="1120" y="140" font-size="11.832pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Red de destino</text>
<g transform="translate(320 80) scale(0.64)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#d40000" stroke-width="3"></circle><circle r="34" fill="#fbe6e6"></circle><g stroke="#d40000" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="320" y="140" font-size="11.832pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Ingress LSR</text>
<rect x="292.08" y="153" width="55.84" height="22" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.6"></rect>
<text x="320" y="168.67" font-size="10.353pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Push</text>
<line x1="380" y1="80" x2="470" y2="80" stroke="#364e6c" stroke-width="2" marker-end="url(#g1002m)"></line>
<g transform="translate(425 50) scale(0.5)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#7c3aed"></circle></g>
<g transform="translate(530 80) scale(0.64)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="530" y="140" font-size="11.832pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">LSR</text>
<rect x="501.27" y="153" width="57.45" height="22" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="530" y="168.67" font-size="10.353pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Swap</text>
<line x1="590" y1="80" x2="680" y2="80" stroke="#364e6c" stroke-width="2" marker-end="url(#g1002m)"></line>
<g transform="translate(635 50) scale(0.5)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#7c3aed"></circle></g>
<g transform="translate(740 80) scale(0.64)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="740" y="140" font-size="11.832pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">LSR</text>
<rect x="711.27" y="153" width="57.45" height="22" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="740" y="168.67" font-size="10.353pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Swap</text>
<line x1="800" y1="80" x2="890" y2="80" stroke="#364e6c" stroke-width="2" marker-end="url(#g1002m)"></line>
<g transform="translate(845 50) scale(0.5)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#7c3aed"></circle></g>
<g transform="translate(950 80) scale(0.64)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#009254" stroke-width="3"></circle><circle r="34" fill="#e6f4ee"></circle><g stroke="#009254" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="950" y="140" font-size="11.832pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Egress LSR</text>
<rect x="926.91" y="153" width="46.17" height="22" rx="4" fill="#ffffff" stroke="#009254" stroke-width="1.6"></rect>
<text x="950" y="168.67" font-size="10.353pt" font-weight="700" fill="#065f46" text-anchor="middle">Pop</text>
<line x1="132" y1="80" x2="260" y2="80" stroke="#364e6c" stroke-width="2" marker-end="url(#g1002m)"></line>
<line x1="1010" y1="80" x2="1068" y2="80" stroke="#364e6c" stroke-width="2" marker-end="url(#g1002m)"></line>
<text x="600" y="200" font-size="10.353pt" font-weight="700" fill="#5b21b6" text-anchor="middle">LSP: camino predefinido por el que viajan los paquetes etiquetados</text>
<rect x="20" y="230" width="360" height="70" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(70 265) scale(0.6)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#fbe6e6" stroke="#d40000" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#d40000"></circle></g>
<text x="120" y="258" font-size="11.832pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Push</text>
<text x="120" y="282" font-size="10.353pt" font-weight="400" fill="#7f1d1d" text-anchor="start">añade una etiqueta</text>
<rect x="420" y="230" width="360" height="70" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(470 265) scale(0.6)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#003ecc"></circle></g>
<text x="520" y="258" font-size="11.832pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Swap</text>
<text x="520" y="282" font-size="10.353pt" font-weight="400" fill="#1e3a8a" text-anchor="start">sustituye la etiqueta</text>
<rect x="820" y="230" width="360" height="70" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(870 265) scale(0.6)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#009254"></circle></g>
<text x="920" y="258" font-size="11.832pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Pop</text>
<text x="920" y="282" font-size="10.353pt" font-weight="400" fill="#065f46" text-anchor="start">elimina la etiqueta antes de entregar</text>
</g></g><text x="600" y="310.829" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 10.2. Reenvío por etiquetas en una ruta MPLS (LSP).</text></svg>
</div>

### Protocolos asociados

#### LDP

Distribuye etiquetas entre *routers* adyacentes y permite construir automáticamente los caminos MPLS.

#### RSVP-TE

Permite establecer rutas explícitas con restricciones de ancho de banda, latencia o capacidad.

#### MP-BGP

Se usa ampliamente en los servicios MPLS VPN y para transportar información de clientes. La Tabla 10.1 resume los protocolos asociados.

<div class="diagram tabla-svg" id="tabla-10-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 325" role="img" aria-labelledby="t44-title"><title id="t44-title">Tabla 10.1. Protocolos asociados a MPLS.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="63.5"/>
<text class="tb-ht" x="98.4" y="20.0" dominant-baseline="central" text-anchor="middle">Protocolo o</text>
<text class="tb-ht" x="98.4" y="42.8" dominant-baseline="central" text-anchor="middle">tecnología</text>
<text class="tb-ht" x="431.2" y="31.4" dominant-baseline="central" text-anchor="middle">Función</text>
<text class="tb-ht" x="932.8" y="31.4" dominant-baseline="central" text-anchor="middle">Aplicación</text>
<rect class="tb-te" x="0" y="63.5" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">LDP (Label</text>
<text class="tb-tx tb-b" x="12.0" y="106.2" dominant-baseline="central">Distribution</text>
<text class="tb-tx tb-b" x="12.0" y="129.0" dominant-baseline="central">Protocol)</text>
<text class="tb-tx" x="208.8" y="94.9" dominant-baseline="central">Distribuye etiquetas y las asocia a FEC según la</text>
<text class="tb-tx" x="208.8" y="117.6" dominant-baseline="central">información de encaminamiento disponible.</text>
<text class="tb-tx" x="677.7" y="106.2" dominant-baseline="central">Establecimiento de LSP en redes MPLS convencionales.</text>
<rect class="tb-to" x="0" y="149.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="181.1" dominant-baseline="central">RSVP-TE</text>
<text class="tb-tx" x="208.8" y="169.8" dominant-baseline="central">Señaliza LSP con restricciones y parámetros de</text>
<text class="tb-tx" x="208.8" y="192.5" dominant-baseline="central">ingeniería de tráfico, como ancho de banda reservado.</text>
<text class="tb-tx" x="677.7" y="169.8" dominant-baseline="central">Ingeniería de tráfico y reserva de recursos; las garantías de</text>
<text class="tb-tx" x="677.7" y="192.5" dominant-baseline="central">latencia dependen de extensiones, diseño e implementación.</text>
<rect class="tb-te" x="0" y="213.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="244.6" dominant-baseline="central">MP-BGP</text>
<text class="tb-tx" x="208.8" y="233.2" dominant-baseline="central">Extiende BGP para transportar información de rutas de</text>
<text class="tb-tx" x="208.8" y="256.0" dominant-baseline="central">múltiples familias y servicios.</text>
<text class="tb-tx" x="677.7" y="244.6" dominant-baseline="central">MPLS L3VPN, L2VPN y VPLS, según la arquitectura.</text>
<text class="tb-cap" x="600.0" y="302.8" text-anchor="middle">Tabla 10.1. Protocolos asociados a MPLS.</text></svg>
</div>

### Servicios, ventajas y limitaciones

Entre los servicios habituales de MPLS se encuentran L3VPN, L2VPN, VPLS, la ingeniería de tráfico, el transporte de servicios empresariales y las redes troncales de operadores.

Sus ventajas son el alto rendimiento, la escalabilidad, la ingeniería de tráfico avanzada, la calidad de servicio predecible y la amplia adopción en operadores de telecomunicaciones. Sus limitaciones son la complejidad operativa, la dependencia de infraestructura especializada, los costos superiores frente a soluciones basadas en Internet y la menor flexibilidad en entornos *cloud-first*.

Durante más de dos décadas, MPLS ha sido la tecnología predominante en las WAN empresariales y en los *backbones* de operadores. Aunque hoy comparte protagonismo con SD-WAN, sigue siendo una pieza clave en infraestructuras que requieren rendimiento predecible y acuerdos estrictos de nivel de servicio (SLA).

## 10.2 SD-WAN

SD-WAN es una arquitectura de red que aplica los principios de las redes definidas por *software* (SDN) a las comunicaciones WAN. Su objetivo es simplificar la administración, optimizar el uso de varios enlaces de transporte y dar visibilidad centralizada sobre el tráfico de la organización.

En una WAN tradicional, las decisiones de encaminamiento suelen depender de protocolos distribuidos y de configuraciones locales. SD-WAN incorpora mecanismos centralizados de gestión y orquestación para definir políticas de forma coherente; los dispositivos de borde las aplican y toman localmente las decisiones de reenvío que correspondan. La distribución concreta de las funciones de control y de datos depende de la arquitectura de cada fabricante.

Un principio central es la abstracción del transporte: la plataforma administra distintos medios de conectividad mediante políticas comunes y puede elegir dinámicamente una ruta para cada aplicación. Eso simplifica la gestión, pero no vuelve equivalentes a los enlaces: cada uno conserva su capacidad, latencia, pérdida, disponibilidad y costo. Entre los enlaces utilizados pueden estar MPLS, Internet de banda ancha, fibra dedicada, LTE, 5G y enlaces satelitales.

### Características principales

#### Orquestación centralizada

La configuración, la supervisión y la aplicación de políticas se hacen desde una plataforma de gestión centralizada, lo que reduce la complejidad operativa.

#### Enrutamiento basado en aplicaciones

Las decisiones de tráfico pueden basarse en el tipo de aplicación, el usuario, el nivel de prioridad o los requisitos de rendimiento.

#### Selección dinámica de rutas

Los dispositivos supervisan de forma continua métricas como latencia, *jitter*, pérdida de paquetes y disponibilidad para elegir automáticamente el mejor camino.

#### Cifrado integrado

La mayoría de las implementaciones usan túneles IPsec o tecnologías equivalentes para proteger las comunicaciones sobre redes públicas.

#### Zero-Touch Provisioning

Los dispositivos se incorporan con una configuración mínima: descargan sus parámetros automáticamente desde el controlador.

La Tabla 10.2 vincula cada característica de SD-WAN con su aplicación práctica, de modo que cada capacidad pueda evaluarse frente a una necesidad concreta de la red.

<div class="diagram tabla-svg" id="tabla-10-2" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 406" role="img" aria-labelledby="t45-title"><title id="t45-title">Tabla 10.2. Características principales de SD-WAN.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="104.2" y="20.0" dominant-baseline="central" text-anchor="middle">Característica</text>
<text class="tb-ht" x="536.3" y="20.0" dominant-baseline="central" text-anchor="middle">Descripción</text>
<text class="tb-ht" x="1032.1" y="20.0" dominant-baseline="central" text-anchor="middle">Aplicación</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Selección dinámica de</text>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">rutas</text>
<text class="tb-tx" x="220.4" y="60.8" dominant-baseline="central">Supervisa métricas como latencia, jitter, pérdida y disponibilidad para</text>
<text class="tb-tx" x="220.4" y="83.5" dominant-baseline="central">seleccionar rutas según políticas.</text>
<text class="tb-tx" x="876.3" y="72.1" dominant-baseline="central">Optimización de tráfico por aplicación.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Cifrado integrado</text>
<text class="tb-tx" x="220.4" y="124.2" dominant-baseline="central">Puede establecer túneles IPsec u otros mecanismos criptográficos sobre redes</text>
<text class="tb-tx" x="220.4" y="147.0" dominant-baseline="central">públicas.</text>
<text class="tb-tx" x="876.3" y="124.2" dominant-baseline="central">Protección del tráfico entre sedes y</text>
<text class="tb-tx" x="876.3" y="147.0" dominant-baseline="central">centros de datos.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">Zero-Touch</text>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">Provisioning (ZTP)</text>
<text class="tb-tx" x="220.4" y="187.8" dominant-baseline="central">Permite que los dispositivos obtengan automáticamente su configuración</text>
<text class="tb-tx" x="220.4" y="210.5" dominant-baseline="central">desde un servicio de aprovisionamiento u orquestación.</text>
<text class="tb-tx" x="876.3" y="187.8" dominant-baseline="central">Despliegue y puesta en servicio de</text>
<text class="tb-tx" x="876.3" y="210.5" dominant-baseline="central">dispositivos de borde.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">Orquestación</text>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">centralizada</text>
<text class="tb-tx" x="220.4" y="251.2" dominant-baseline="central">Facilita la distribución de políticas, configuración y gestión del ciclo de vida de</text>
<text class="tb-tx" x="220.4" y="274.0" dominant-baseline="central">los dispositivos.</text>
<text class="tb-tx" x="876.3" y="262.6" dominant-baseline="central">Administración de múltiples sedes.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="314.8" dominant-baseline="central">Abstracción del</text>
<text class="tb-tx tb-b" x="12.0" y="337.5" dominant-baseline="central">transporte</text>
<text class="tb-tx" x="220.4" y="314.8" dominant-baseline="central">Permite utilizar distintos medios de conectividad como recursos de transporte</text>
<text class="tb-tx" x="220.4" y="337.5" dominant-baseline="central">gestionados por políticas comunes.</text>
<text class="tb-tx" x="876.3" y="314.8" dominant-baseline="central">Integración de MPLS, Internet, LTE, 5G</text>
<text class="tb-tx" x="876.3" y="337.5" dominant-baseline="central">y enlaces satelitales.</text>
<text class="tb-cap" x="600.0" y="384.2" text-anchor="middle">Tabla 10.2. Características principales de SD-WAN.</text></svg>
</div>

Nota: el cifrado depende de la solución y de la configuración desplegada; no debe asumirse que toda implementación cifra automáticamente todos los flujos de extremo a extremo.

### Componentes de una arquitectura SD-WAN

La Figura 10.3 muestra cómo se reparten funciones el controlador, el orquestador y los dispositivos de borde; la división exacta de responsabilidades depende del fabricante y de la solución.

<div class="diagram" id="figura-10-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1003" viewBox="0 0 1200 580.950" role="img" aria-labelledby="g1003-title">
<title id="g1003-title">Arquitectura SD-WAN: controlador, orquestador y dispositivos de borde</title>
<defs><marker id="g1003m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g1003n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g1003-c" transform="translate(-153.279 -13.225) scale(1.2555)"><g transform="translate(-7.96 -8)"><g transform="translate(380 60) scale(0.8)" data-lib="gear"><g fill="#7c3aed"><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(0)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(45)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(90)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(135)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(180)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(225)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(270)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(315)"></rect></g><circle cx="0" cy="0" r="19" fill="#ffffff" stroke="#7c3aed" stroke-width="4"></circle><circle cx="0" cy="0" r="7" fill="#decefa" stroke="#7c3aed" stroke-width="3"></circle></g>
<text x="380" y="112.8" font-size="11.151pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Controlador</text>
<text x="380" y="133.031" font-size="9.558pt" font-weight="400" fill="#5b21b6" text-anchor="middle">plano de control y políticas</text>
<g transform="translate(820 60) scale(0.8)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><circle cx="30" cy="-27.5" r="4" fill="#003ecc"></circle><path d="M-34 -27.5h34" stroke="#003ecc" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><circle cx="30" cy="1.5" r="4" fill="#003ecc"></circle><path d="M-34 1.5h34" stroke="#003ecc" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><circle cx="30" cy="30.5" r="4" fill="#003ecc"></circle><path d="M-34 30.5h34" stroke="#003ecc" stroke-width="3" stroke-linecap="round"></path></g>
<text x="820" y="112.8" font-size="11.151pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Orquestador</text>
<text x="820" y="133.031" font-size="9.558pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">plantillas, ciclo de vida y ZTP</text>
<line x1="450" y1="70" x2="750" y2="70" stroke="#364e6c" stroke-width="2" marker-end="url(#g1003m)" marker-start="url(#g1003n)"></line>
<line x1="200" y1="210" x2="380" y2="152" stroke="#d40000" stroke-width="1.8" stroke-dasharray="5,4" marker-end="url(#g1003m)"></line>
<g transform="translate(200 250) scale(0.64)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#d40000" stroke-width="3"></circle><circle r="34" fill="#fbe6e6"></circle><g stroke="#d40000" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="200" y="308" font-size="11.151pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Edge · sucursal</text>
<line x1="600" y1="210" x2="600" y2="152" stroke="#009254" stroke-width="1.8" stroke-dasharray="5,4" marker-end="url(#g1003m)"></line>
<g transform="translate(600 250) scale(0.64)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#009254" stroke-width="3"></circle><circle r="34" fill="#e6f4ee"></circle><g stroke="#009254" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="600" y="308" font-size="11.151pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Edge · centro de datos</text>
<line x1="1000" y1="210" x2="820" y2="152" stroke="#dd3a00" stroke-width="1.8" stroke-dasharray="5,4" marker-end="url(#g1003m)"></line>
<g transform="translate(1000 250) scale(0.64)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></circle><circle r="34" fill="#fcebe6"></circle><g stroke="#dd3a00" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="1000" y="308" font-size="11.151pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Edge · nube pública</text>
<g transform="translate(200 390) scale(0.8)" data-lib="cable"><path d="M-40 0 C-26 -30 -14 -30 0 0 S26 30 40 0" fill="none" stroke="#003ecc" stroke-width="4" stroke-linecap="round"></path></g>
<text x="200" y="434" font-size="11.151pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">MPLS</text>
<g transform="translate(467 390) scale(0.8)" data-lib="globe"><g stroke="#009254" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#e6f4ee"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<text x="467" y="434" font-size="11.151pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Internet</text>
<g transform="translate(734 390) scale(0.8)" data-lib="tower"><g fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"><path d="M0 -4 L-14 30 M0 -4 L14 30 M-9 14 H9 M-12 24 H12"></path><path d="M-12 -16 A16 16 0 0 0 -12 8 M12 -16 A16 16 0 0 1 12 8" stroke-width="2.5"></path><path d="M-20 -24 A28 28 0 0 0 -20 16 M20 -24 A28 28 0 0 1 20 16" stroke-width="2.5"></path></g><circle cx="0" cy="-4" r="5" fill="#7c3aed"></circle></g>
<text x="734" y="434" font-size="11.151pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">LTE · 5G</text>
<g transform="translate(1001 390) scale(0.8)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#ebedf0" stroke="#364e6c" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="1001" y="434" font-size="11.151pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Satélite</text>
<text x="600" y="350" font-size="11.151pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Transportes disponibles</text>
</g></g><text x="600" y="564.584" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 10.3. Arquitectura SD-WAN: controlador, orquestador y dispositivos de borde.</text></svg>
</div>

#### Controlador

Mantiene el plano de control y distribuye las políticas a toda la infraestructura.

#### Orquestador

Gestiona el ciclo de vida de los dispositivos, la autenticación, las plantillas y la automatización operativa.

#### Dispositivos de borde

Se ubican en sucursales, centros de datos o nubes públicas. Transportan el tráfico y ejecutan las políticas definidas por el controlador.

Entre las ventajas de SD-WAN están la administración centralizada, la mayor visibilidad del tráfico, la optimización automática de rutas, la reducción de costos WAN y la implementación rápida de nuevas sedes. Entre sus limitaciones, la dependencia de la calidad de los enlaces subyacentes, la curva de aprendizaje para equipos acostumbrados a WAN tradicionales, la complejidad de migrar desde infraestructuras heredadas y la dependencia de la disponibilidad del plano de gestión.

Hoy SD-WAN es uno de los pilares de las arquitecturas WAN modernas y suele integrarse con modelos SASE (*Secure Access Service Edge*), con *Zero Trust* (Tema 12) y con conectividad multinube.

## 10.3 MPLS Y SD-WAN

MPLS y SD-WAN son dos enfoques distintos para construir y operar una WAN. MPLS se centra en ofrecer transporte gestionado con rendimiento predecible; SD-WAN añade automatización, visibilidad y control dinámico sobre varios medios de conectividad. No son tecnologías mutuamente excluyentes: en muchas organizaciones conviven como parte de una estrategia WAN híbrida. La Tabla 10.3 resume la comparación.

<div class="diagram tabla-svg" id="tabla-10-3" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 533" role="img" aria-labelledby="t46-title"><title id="t46-title">Tabla 10.3. Comparación entre MPLS y SD-WAN.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="79.3" y="20.0" dominant-baseline="central" text-anchor="middle">Característica</text>
<text class="tb-ht" x="393.0" y="20.0" dominant-baseline="central" text-anchor="middle">MPLS</text>
<text class="tb-ht" x="913.8" y="20.0" dominant-baseline="central" text-anchor="middle">SD-WAN</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Arquitectura</text>
<text class="tb-tx" x="170.5" y="60.8" dominant-baseline="central">Red de transporte basada en etiquetas y servicios del</text>
<text class="tb-tx" x="170.5" y="83.5" dominant-baseline="central">operador.</text>
<text class="tb-tx" x="639.5" y="72.1" dominant-baseline="central">Capa de control y gestión que puede utilizar múltiples transportes.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Transporte</text>
<text class="tb-tx" x="170.5" y="124.2" dominant-baseline="central">Habitualmente infraestructura del proveedor con</text>
<text class="tb-tx" x="170.5" y="147.0" dominant-baseline="central">servicios MPLS.</text>
<text class="tb-tx" x="639.5" y="135.6" dominant-baseline="central">Puede utilizar MPLS, Internet, LTE, 5G y otros enlaces compatibles.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Gestión</text>
<text class="tb-tx" x="170.5" y="187.8" dominant-baseline="central">Depende en gran medida de la configuración y</text>
<text class="tb-tx" x="170.5" y="210.5" dominant-baseline="central">operación del proveedor y del cliente.</text>
<text class="tb-tx" x="639.5" y="199.1" dominant-baseline="central">Incorpora gestión y aplicación centralizada de políticas.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">Selección de</text>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">rutas</text>
<text class="tb-tx" x="170.5" y="251.2" dominant-baseline="central">Basada en la arquitectura de routing y las políticas del</text>
<text class="tb-tx" x="170.5" y="274.0" dominant-baseline="central">servicio.</text>
<text class="tb-tx" x="639.5" y="251.2" dominant-baseline="central">Puede seleccionar rutas dinámicamente según aplicación, latencia,</text>
<text class="tb-tx" x="639.5" y="274.0" dominant-baseline="central">jitter, pérdida y disponibilidad.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="326.1" dominant-baseline="central">Seguridad</text>
<text class="tb-tx" x="170.5" y="314.8" dominant-baseline="central">Proporciona separación lógica del tráfico, pero no</text>
<text class="tb-tx" x="170.5" y="337.5" dominant-baseline="central">implica cifrado por sí mismo.</text>
<text class="tb-tx" x="639.5" y="314.8" dominant-baseline="central">Puede incorporar túneles IPsec u otros mecanismos de cifrado,</text>
<text class="tb-tx" x="639.5" y="337.5" dominant-baseline="central">según la solución.</text>
<rect class="tb-to" x="0" y="358.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="389.6" dominant-baseline="central">Costos</text>
<text class="tb-tx" x="170.5" y="378.2" dominant-baseline="central">Pueden ser superiores cuando se utilizan servicios</text>
<text class="tb-tx" x="170.5" y="401.0" dominant-baseline="central">dedicados y compromisos de capacidad.</text>
<text class="tb-tx" x="639.5" y="378.2" dominant-baseline="central">Puede reducir costos al combinar enlaces de Internet y otros</text>
<text class="tb-tx" x="639.5" y="401.0" dominant-baseline="central">transportes, aunque depende del diseño y del servicio.</text>
<rect class="tb-te" x="0" y="421.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="453.1" dominant-baseline="central">Casos de uso</text>
<text class="tb-tx" x="170.5" y="441.8" dominant-baseline="central">Redes críticas con requisitos contractuales de SLA y</text>
<text class="tb-tx" x="170.5" y="464.5" dominant-baseline="central">servicios administrados.</text>
<text class="tb-tx" x="639.5" y="441.8" dominant-baseline="central">Organizaciones distribuidas, conectividad cloud y expansión rápida</text>
<text class="tb-tx" x="639.5" y="464.5" dominant-baseline="central">de sucursales.</text>
<text class="tb-cap" x="600.0" y="511.2" text-anchor="middle">Tabla 10.3. Comparación entre MPLS y SD-WAN.</text></svg>
</div>

### Modelo operativo

MPLS utiliza una infraestructura privada gestionada por un proveedor de servicios. El control del tráfico se realiza principalmente mediante protocolos de red y mecanismos de ingeniería de tráfico implementados dentro de la red del operador.

SD-WAN añade una capa de control basada en *software* capaz de utilizar varios enlaces a la vez y tomar decisiones dinámicas según el estado de la red y las necesidades de las aplicaciones.

### Transporte

MPLS depende de circuitos gestionados por operadores. SD-WAN puede utilizar MPLS, Internet, LTE, 5G, satélite y combinaciones híbridas.

### Calidad de servicio

Las redes MPLS ofrecen acuerdos de nivel de servicio (SLA) con parámetros de latencia, disponibilidad y pérdida de paquetes definidos por contrato. SD-WAN compensa la naturaleza variable de Internet mediante monitorización continua, selección dinámica de rutas y mecanismos de corrección de errores.

Al hablar de SLA de disponibilidad conviene recordar que, en un sistema reparable y en condiciones de operación relativamente estables, la disponibilidad inherente puede estimarse mediante **Disponibilidad = MTBF / (MTBF + MTTR) × 100 %.** Es una aproximación basada en el tiempo medio entre fallos y el tiempo medio de reparación; no sustituye la disponibilidad observada cuando existen mantenimientos programados, redundancia, fallos dependientes u otros factores.

### Seguridad

MPLS proporciona aislamiento lógico del tráfico, pero no incorpora cifrado de forma nativa. SD-WAN suele proteger el tráfico entre los dispositivos de borde mediante IPsec u otros mecanismos criptográficos, aunque el cifrado debe verificarse en cada implementación.

### Costos

Los circuitos MPLS suelen costar más por la infraestructura dedicada y los acuerdos de servicio asociados. SD-WAN aprovecha enlaces de Internet de menor costo, lo que reduce los gastos operativos en muchas organizaciones.

### Visibilidad y gestión

Las plataformas SD-WAN ofrecen monitorización detallada por aplicación, usuario, enlace y ubicación. Las redes MPLS tradicionales dependen en mayor medida de las herramientas que proporciona el operador.

### Casos de uso

MPLS sigue siendo una opción adecuada para redes críticas con requisitos estrictos de SLA, infraestructuras financieras, operadores de telecomunicaciones y entornos industriales sensibles. SD-WAN destaca en organizaciones distribuidas, conectividad *cloud*, estrategias multinube, optimización de costos y expansión rápida de sucursales.

La tendencia actual es combinar ambas: MPLS ofrece conectividad de alta calidad para las aplicaciones críticas, mientras SD-WAN optimiza el uso conjunto de todos los recursos de transporte disponibles.

## 10.4 BACKBONE DE RED

El *backbone* es la infraestructura central que transporta el tráfico agregado de una red de gran escala. Es la columna vertebral sobre la que se apoyan las redes de acceso, la distribución, los centros de datos y los servicios externos.

En una organización, conecta edificios, campus y centros de datos; en un operador de telecomunicaciones, enlaza ciudades, regiones e incluso países. Su diseño prioriza tres objetivos: alta capacidad, baja latencia y alta disponibilidad. Debe transportar grandes volúmenes de tráfico sin convertirse en un cuello de botella para el resto de la red.

### Topologías habituales

Un *backbone* puede organizarse en malla parcial, malla completa, anillo o jerarquía de tres niveles (núcleo, distribución y acceso), como muestra la Figura 10.4. Cada topología equilibra costo, redundancia de caminos y complejidad.

<div class="diagram" id="figura-10-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1004" viewBox="0 0 1200 368.895" role="img" aria-labelledby="g1004-title">
<title id="g1004-title">Topologías habituales de un backbone</title>
<defs><marker id="g1004m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g1004n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g1004-c" transform="translate(-8.804 -8.771) scale(1.0147)"><g transform="translate(0 0)"><rect x="20" y="20" width="275" height="300" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<text x="157.5" y="44" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Malla parcial</text>
<line x1="55.47" y1="150" x2="258.53" y2="150" stroke="#003ecc" stroke-width="2"></line>
<line x1="55.47" y1="150" x2="55.47" y2="250" stroke="#003ecc" stroke-width="2"></line>
<line x1="258.53" y1="150" x2="258.53" y2="250" stroke="#003ecc" stroke-width="2"></line>
<line x1="55.47" y1="250" x2="258.53" y2="250" stroke="#003ecc" stroke-width="2"></line>
<line x1="157" y1="200" x2="258.53" y2="150" stroke="#003ecc" stroke-width="2"></line>
<line x1="157" y1="200" x2="55.47" y2="250" stroke="#003ecc" stroke-width="2"></line>
<circle cx="55.47" cy="150" r="24" fill="#ffffff"></circle>
<g transform="translate(55.47 150) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="258.53" cy="150" r="24" fill="#ffffff"></circle>
<g transform="translate(258.53 150) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="55.47" cy="250" r="24" fill="#ffffff"></circle>
<g transform="translate(55.47 250) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="258.53" cy="250" r="24" fill="#ffffff"></circle>
<g transform="translate(258.53 250) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="157" cy="200" r="24" fill="#ffffff"></circle>
<g transform="translate(157 200) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<rect x="315" y="20" width="275" height="300" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<text x="452.5" y="44" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Malla completa</text>
<line x1="352" y1="150" x2="552" y2="150" stroke="#009254" stroke-width="2"></line>
<line x1="352" y1="150" x2="352" y2="250" stroke="#009254" stroke-width="2"></line>
<line x1="352" y1="150" x2="552" y2="250" stroke="#009254" stroke-width="2"></line>
<line x1="552" y1="150" x2="352" y2="250" stroke="#009254" stroke-width="2"></line>
<line x1="552" y1="150" x2="552" y2="250" stroke="#009254" stroke-width="2"></line>
<line x1="352" y1="250" x2="552" y2="250" stroke="#009254" stroke-width="2"></line>
<circle cx="352" cy="150" r="24" fill="#ffffff"></circle>
<g transform="translate(352 150) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#009254" stroke-width="3"></circle><circle r="34" fill="#e6f4ee"></circle><g stroke="#009254" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="552" cy="150" r="24" fill="#ffffff"></circle>
<g transform="translate(552 150) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#009254" stroke-width="3"></circle><circle r="34" fill="#e6f4ee"></circle><g stroke="#009254" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="352" cy="250" r="24" fill="#ffffff"></circle>
<g transform="translate(352 250) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#009254" stroke-width="3"></circle><circle r="34" fill="#e6f4ee"></circle><g stroke="#009254" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="552" cy="250" r="24" fill="#ffffff"></circle>
<g transform="translate(552 250) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#009254" stroke-width="3"></circle><circle r="34" fill="#e6f4ee"></circle><g stroke="#009254" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<rect x="610" y="20" width="275" height="300" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<text x="747.5" y="44" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Anillo</text>
<line x1="747" y1="130" x2="847" y2="190" stroke="#7c3aed" stroke-width="2"></line>
<line x1="847" y1="190" x2="807" y2="270" stroke="#7c3aed" stroke-width="2"></line>
<line x1="807" y1="270" x2="687" y2="270" stroke="#7c3aed" stroke-width="2"></line>
<line x1="687" y1="270" x2="647" y2="190" stroke="#7c3aed" stroke-width="2"></line>
<line x1="647" y1="190" x2="747" y2="130" stroke="#7c3aed" stroke-width="2"></line>
<circle cx="747" cy="130" r="24" fill="#ffffff"></circle>
<g transform="translate(747 130) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#7c3aed" stroke-width="3"></circle><circle r="34" fill="#f2ebfd"></circle><g stroke="#7c3aed" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="847" cy="190" r="24" fill="#ffffff"></circle>
<g transform="translate(847 190) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#7c3aed" stroke-width="3"></circle><circle r="34" fill="#f2ebfd"></circle><g stroke="#7c3aed" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="807" cy="270" r="24" fill="#ffffff"></circle>
<g transform="translate(807 270) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#7c3aed" stroke-width="3"></circle><circle r="34" fill="#f2ebfd"></circle><g stroke="#7c3aed" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="687" cy="270" r="24" fill="#ffffff"></circle>
<g transform="translate(687 270) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#7c3aed" stroke-width="3"></circle><circle r="34" fill="#f2ebfd"></circle><g stroke="#7c3aed" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="647" cy="190" r="24" fill="#ffffff"></circle>
<g transform="translate(647 190) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#7c3aed" stroke-width="3"></circle><circle r="34" fill="#f2ebfd"></circle><g stroke="#7c3aed" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<rect x="905" y="20" width="275" height="300" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<text x="1042.5" y="44" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Jerárquica C-D-A</text>
<line x1="1042" y1="130" x2="968.16" y2="200" stroke="#dd3a00" stroke-width="2"></line>
<line x1="1042" y1="130" x2="1115.84" y2="200" stroke="#dd3a00" stroke-width="2"></line>
<line x1="968.16" y1="200" x2="940.47" y2="270" stroke="#dd3a00" stroke-width="2"></line>
<line x1="968.16" y1="200" x2="995.85" y2="270" stroke="#dd3a00" stroke-width="2"></line>
<line x1="1115.84" y1="200" x2="1088.15" y2="270" stroke="#dd3a00" stroke-width="2"></line>
<line x1="1115.84" y1="200" x2="1143.53" y2="270" stroke="#dd3a00" stroke-width="2"></line>
<circle cx="1042" cy="130" r="24" fill="#ffffff"></circle>
<g transform="translate(1042 130) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></circle><circle r="34" fill="#fcebe6"></circle><g stroke="#dd3a00" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="968.16" cy="200" r="24" fill="#ffffff"></circle>
<g transform="translate(968.16 200) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></circle><circle r="34" fill="#fcebe6"></circle><g stroke="#dd3a00" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="1115.84" cy="200" r="24" fill="#ffffff"></circle>
<g transform="translate(1115.84 200) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></circle><circle r="34" fill="#fcebe6"></circle><g stroke="#dd3a00" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="940.47" cy="270" r="24" fill="#ffffff"></circle>
<g transform="translate(940.47 270) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></circle><circle r="34" fill="#fcebe6"></circle><g stroke="#dd3a00" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="995.85" cy="270" r="24" fill="#ffffff"></circle>
<g transform="translate(995.85 270) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></circle><circle r="34" fill="#fcebe6"></circle><g stroke="#dd3a00" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="1088.15" cy="270" r="24" fill="#ffffff"></circle>
<g transform="translate(1088.15 270) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></circle><circle r="34" fill="#fcebe6"></circle><g stroke="#dd3a00" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<circle cx="1143.53" cy="270" r="24" fill="#ffffff"></circle>
<g transform="translate(1143.53 270) scale(0.272)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></circle><circle r="34" fill="#fcebe6"></circle><g stroke="#dd3a00" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
</g></g><text x="600" y="352.550" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 10.4. Topologías habituales de un backbone.</text></svg>
</div>

Conviene no confundir topología con modo de redundancia. Una arquitectura *spine-leaf*, por ejemplo, usa varios *switches* de cada función y puede aportar redundancia de caminos, pero es una topología de red y no, por sí misma, un modo de redundancia activo-activo. Ese modo se asocia más bien con balanceadores de carga y clústeres diseñados para operar así.

### Características principales

#### Alta capacidad

Los enlaces troncales utilizan tecnologías de alta velocidad capaces de operar a decenas o cientos de gigabits por segundo.

#### Redundancia

Los elementos críticos se implementan de forma redundante para eliminar puntos únicos de fallo.

#### Escalabilidad

La arquitectura debe permitir el crecimiento continuo sin rediseños mayores.

#### Convergencia rápida

Los mecanismos de recuperación ante fallos deben minimizar el impacto sobre los servicios transportados.

La redundancia busca reducir o eliminar puntos únicos de fallo mediante componentes, enlaces o rutas alternativas capaces de asumir la operación cuando ocurre una interrupción. Es uno de los pilares de la alta disponibilidad, aunque su sola presencia no garantiza continuidad: también deben considerarse los dominios de fallo comunes, la configuración, la detección de fallos y la transferencia de servicio.

### Componentes del backbone

#### Core Routers

Dispositivos de alta capacidad diseñados para procesar grandes volúmenes de tráfico con latencias mínimas.

#### Puntos de presencia (PoP)

Ubicaciones donde el *backbone* se conecta con redes de acceso, clientes, centros de datos y otros operadores.

#### Sistemas de transporte óptico

Infraestructura encargada de transportar el tráfico entre nodos troncales.

Un *backbone* bien diseñado debe procurar continuidad operativa, escalabilidad y capacidad suficiente para soportar el crecimiento previsto de la red sin degradar el rendimiento. Estos objetivos requieren dimensionamiento, redundancia, supervisión y pruebas periódicas; la topología por sí sola no los garantiza.

### Tecnologías utilizadas

- **Protocolos de enrutamiento:** los entornos *backbone* suelen utilizar IS-IS, OSPF, MP-BGP y *Segment Routing*.
- **Enlaces ópticos:** la fibra óptica es el medio predominante en las redes troncales modernas por su capacidad, alcance y baja latencia.
- **DWDM:** *Dense Wavelength Division Multiplexing* permite transportar varias longitudes de onda sobre una única fibra y alcanzar capacidades agregadas de varios terabits por segundo. La Figura 10.5 representa esta arquitectura.

<div class="diagram" id="figura-10-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1005" viewBox="0 0 1200 449.684" role="img" aria-labelledby="g1005-title">
<title id="g1005-title">Backbone con puntos de presencia unidos por fibra DWDM</title>
<defs><marker id="g1005m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g1005n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g1005-c" transform="translate(-73.681 -10.771) scale(1.1228)"><g transform="translate(0 24)"><line x1="120" y1="70" x2="600" y2="40" stroke="#7c3aed" stroke-width="3"></line>
<line x1="600" y1="40" x2="1080" y2="70" stroke="#7c3aed" stroke-width="3"></line>
<line x1="120" y1="70" x2="340" y2="200" stroke="#7c3aed" stroke-width="3"></line>
<line x1="600" y1="40" x2="340" y2="200" stroke="#7c3aed" stroke-width="3"></line>
<line x1="600" y1="40" x2="860" y2="200" stroke="#7c3aed" stroke-width="3"></line>
<line x1="1080" y1="70" x2="860" y2="200" stroke="#7c3aed" stroke-width="3"></line>
<line x1="340" y1="200" x2="860" y2="200" stroke="#7c3aed" stroke-width="3"></line>
<circle cx="120" cy="70" r="44" fill="#ffffff"></circle>
<g transform="translate(120 70) scale(0.7)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#003ecc"></rect></g>
<text x="120" y="128" font-size="10.688pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">PoP 1</text>
<circle cx="600" cy="40" r="44" fill="#ffffff"></circle>
<g transform="translate(600 40) scale(0.7)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#003ecc"></rect></g>
<text x="600" y="98" font-size="10.688pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">PoP 2</text>
<circle cx="1080" cy="70" r="44" fill="#ffffff"></circle>
<g transform="translate(1080 70) scale(0.7)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#003ecc"></rect></g>
<text x="1080" y="128" font-size="10.688pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">PoP 3</text>
<circle cx="340" cy="200" r="44" fill="#ffffff"></circle>
<g transform="translate(340 200) scale(0.7)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#003ecc"></rect></g>
<text x="340" y="258" font-size="10.688pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">PoP 4</text>
<circle cx="860" cy="200" r="44" fill="#ffffff"></circle>
<g transform="translate(860 200) scale(0.7)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#003ecc"></rect></g>
<text x="860" y="258" font-size="10.688pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">PoP 5</text>
<g transform="translate(600 300) scale(1)" data-lib="fiber"><path d="M-40 0 H-20 L-10 -12 L0 12 L10 -12 L20 12 L30 0 H40" fill="none" stroke="#7c3aed" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="600" y="334" font-size="10.688pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Enlaces ópticos con DWDM: varias longitudes de onda por fibra, varios Tb/s</text>
</g></g><text x="600" y="433.340" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 10.5. Backbone con puntos de presencia unidos por fibra DWDM.</text></svg>
</div>

### Tecnologías de transporte

Entre las tecnologías de transporte se encuentran MPLS, *Segment Routing MPLS* (SR-MPLS), EVPN, VXLAN y *Ethernet Carrier Grade*. La Tabla 10.4 resume las tecnologías de un *backbone*.

<div class="diagram tabla-svg" id="tabla-10-4" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 579" role="img" aria-labelledby="t47-title"><title id="t47-title">Tabla 10.4. Tecnologías de un backbone.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="67.2" y="20.0" dominant-baseline="central" text-anchor="middle">Tecnología</text>
<text class="tb-ht" x="378.2" y="20.0" dominant-baseline="central" text-anchor="middle">Función</text>
<text class="tb-ht" x="910.9" y="20.0" dominant-baseline="central" text-anchor="middle">Aplicación</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">DWDM</text>
<text class="tb-tx" x="146.4" y="72.1" dominant-baseline="central">Multiplexa distintas longitudes de onda sobre una misma</text>
<text class="tb-tx" x="146.4" y="94.9" dominant-baseline="central">fibra óptica.</text>
<text class="tb-tx" x="633.9" y="60.8" dominant-baseline="central">Aumenta la capacidad agregada del transporte óptico; el throughput</text>
<text class="tb-tx" x="633.9" y="83.5" dominant-baseline="central">depende del número de canales, tasa por canal, modulación y</text>
<text class="tb-tx" x="633.9" y="106.2" dominant-baseline="central">equipamiento.</text>
<rect class="tb-to" x="0" y="127.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="158.4" dominant-baseline="central">IS-IS y OSPF</text>
<text class="tb-tx" x="146.4" y="147.0" dominant-baseline="central">Protocolos IGP para intercambiar información de</text>
<text class="tb-tx" x="146.4" y="169.8" dominant-baseline="central">enrutamiento dentro de un dominio.</text>
<text class="tb-tx" x="633.9" y="158.4" dominant-baseline="central">Enrutamiento interno de redes troncales.</text>
<rect class="tb-te" x="0" y="190.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="221.9" dominant-baseline="central">MP-BGP</text>
<text class="tb-tx" x="146.4" y="210.5" dominant-baseline="central">Intercambia rutas y atributos para múltiples servicios y</text>
<text class="tb-tx" x="146.4" y="233.2" dominant-baseline="central">familias de direcciones.</text>
<text class="tb-tx" x="633.9" y="221.9" dominant-baseline="central">Servicios VPN, EVPN e interconexión de dominios.</text>
<rect class="tb-to" x="0" y="254.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">Segment</text>
<text class="tb-tx tb-b" x="12.0" y="296.8" dominant-baseline="central">Routing</text>
<text class="tb-tx" x="146.4" y="274.0" dominant-baseline="central">Permite definir trayectorias mediante segmentos y</text>
<text class="tb-tx" x="146.4" y="296.8" dominant-baseline="central">políticas de encaminamiento.</text>
<text class="tb-tx" x="633.9" y="285.4" dominant-baseline="central">Ingeniería de tráfico y control de caminos.</text>
<rect class="tb-te" x="0" y="317.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="337.5" dominant-baseline="central">MPLS y SR-MPLS</text>
<text class="tb-tx" x="146.4" y="337.5" dominant-baseline="central">Proporcionan transporte basado en etiquetas y</text>
<text class="tb-tx" x="146.4" y="360.2" dominant-baseline="central">encaminamiento por segmentos.</text>
<text class="tb-tx" x="633.9" y="348.9" dominant-baseline="central">Redes troncales y servicios de operador.</text>
<rect class="tb-to" x="0" y="381.0" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="412.4" dominant-baseline="central">EVPN y</text>
<text class="tb-tx tb-b" x="12.0" y="435.1" dominant-baseline="central">VXLAN</text>
<text class="tb-tx" x="146.4" y="401.0" dominant-baseline="central">EVPN distribuye información de control para servicios</text>
<text class="tb-tx" x="146.4" y="423.8" dominant-baseline="central">Ethernet; VXLAN encapsula tráfico de capa 2 sobre redes</text>
<text class="tb-tx" x="146.4" y="446.5" dominant-baseline="central">IP.</text>
<text class="tb-tx" x="633.9" y="423.8" dominant-baseline="central">Overlays de centros de datos y redes multi-tenant.</text>
<rect class="tb-te" x="0" y="467.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="487.2" dominant-baseline="central">Carrier</text>
<text class="tb-tx tb-b" x="12.0" y="510.0" dominant-baseline="central">Ethernet</text>
<text class="tb-tx" x="146.4" y="487.2" dominant-baseline="central">Proporciona servicios Ethernet de operador con atributos</text>
<text class="tb-tx" x="146.4" y="510.0" dominant-baseline="central">y niveles de servicio definidos.</text>
<text class="tb-tx" x="633.9" y="498.6" dominant-baseline="central">Conectividad metropolitana y empresarial.</text>
<text class="tb-cap" x="600.0" y="556.8" text-anchor="middle">Tabla 10.4. Tecnologías de un backbone.</text></svg>
</div>

## 10.5 PEERING

El *peering* es un acuerdo mediante el cual dos sistemas autónomos (AS) intercambian tráfico directamente, sin contratar un servicio de tránsito IP de un tercero para ese intercambio. Las políticas acordadas determinan qué prefijos se anuncian y qué tráfico se acepta; habitualmente incluyen las redes propias y las de los clientes, pero el alcance exacto depende del acuerdo.

El intercambio de rutas suele hacerse mediante BGP (sección 6.5). El *peering* puede establecerse en un punto de intercambio de Internet (IXP) o mediante una interconexión privada, y no es necesariamente gratuito.

### Tipos de peering

#### Peering público

Se establece en un *Internet Exchange Point* (IXP), donde varios operadores se conectan a una infraestructura compartida para intercambiar tráfico. Esta modalidad facilita la interconexión con numerosos participantes a través de una única conexión física (Figura 10.6).

<div class="diagram" id="figura-10-06" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1006" viewBox="0 0 1200 469.520" role="img" aria-labelledby="g1006-title">
<title id="g1006-title">Peering público, peering privado y tránsito entre sistemas autónomos</title>
<defs><marker id="g1006m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g1006n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g1006-c" transform="translate(-70.850 -10.727) scale(1.1204)"><g transform="translate(0 -13.56)"><g transform="translate(130 70) scale(1.4)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#fbe6e6" stroke="#d40000" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="130" y="74" font-size="10.71pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">AS A</text>
<g transform="translate(1070 70) scale(1.4)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="1070" y="74" font-size="10.71pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">AS B</text>
<g transform="translate(130 250) scale(1.4)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="130" y="254" font-size="10.71pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">AS C</text>
<g transform="translate(1070 250) scale(1.4)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#fcebe6" stroke="#dd3a00" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="1070" y="254" font-size="10.71pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">AS D</text>
<g transform="translate(600 70) scale(0.9)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><rect x="-46.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-33.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-21.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-8.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="4.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="16.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="29.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="41.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><circle cx="-44" cy="-15" r="2.5" fill="#003ecc"></circle><circle cx="-24" cy="-15" r="2.5" fill="#003ecc"></circle><circle cx="-4" cy="-15" r="2.5" fill="#003ecc"></circle><circle cx="16" cy="-15" r="2.5" fill="#003ecc"></circle><circle cx="36" cy="-15" r="2.5" fill="#003ecc"></circle></g>
<text x="600" y="127.4" font-size="10.71pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IXP</text>
<text x="600" y="147.631" font-size="9.372pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">infraestructura compartida</text>
<line x1="215" y1="70" x2="520" y2="70" stroke="#d40000" stroke-width="2.5" marker-end="url(#g1006m)" marker-start="url(#g1006n)"></line>
<rect x="295.02" y="41" width="129.96" height="22" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.6"></rect>
<text x="360" y="56.67" font-size="9.372pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">peering público</text>
<line x1="985" y1="70" x2="680" y2="70" stroke="#009254" stroke-width="2.5" marker-end="url(#g1006m)" marker-start="url(#g1006n)"></line>
<rect x="775.02" y="41" width="129.96" height="22" rx="4" fill="#ffffff" stroke="#009254" stroke-width="1.6"></rect>
<text x="840" y="56.67" font-size="9.372pt" font-weight="700" fill="#065f46" text-anchor="middle">peering público</text>
<line x1="215" y1="250" x2="985" y2="250" stroke="#7c3aed" stroke-width="3" marker-end="url(#g1006m)" marker-start="url(#g1006n)"></line>
<rect x="470.57" y="221" width="258.87" height="22" rx="4" fill="#ffffff" stroke="#7c3aed" stroke-width="1.6"></rect>
<text x="600" y="236.67" font-size="9.372pt" font-weight="700" fill="#5b21b6" text-anchor="middle">peering privado · enlace dedicado</text>
<g transform="translate(600 340) scale(0.8)" data-lib="globe"><g stroke="#364e6c" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#ebedf0"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<text x="600" y="390" font-size="10.71pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Proveedor de tránsito: acceso al resto de Internet</text>
<line x1="160" y1="290" x2="540" y2="335" stroke="#364e6c" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#g1006m)"></line>
<line x1="1040" y1="290" x2="660" y2="335" stroke="#364e6c" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#g1006m)"></line>
</g></g><text x="600" y="453.177" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 10.6. Peering público, peering privado y tránsito entre sistemas autónomos.</text></svg>
</div>

#### Peering privado

Se implementa mediante enlaces dedicados entre dos organizaciones. Suele utilizarse cuando el volumen de tráfico justifica una conexión exclusiva y permanente.

El *peering* ofrece varias ventajas potenciales:

- **Reducción potencial de costos:** puede disminuir la dependencia de servicios de tránsito IP contratados a terceros, aunque el resultado depende del volumen, la ubicación y los costos de interconexión.
- **Posible reducción de latencia:** el tráfico puede seguir rutas más directas entre las redes participantes, aunque el resultado depende de la topología y de las políticas de encaminamiento.
- **Mayor control:** los operadores pueden aplicar políticas específicas de enrutamiento mediante BGP.
- **Mayor resiliencia:** la existencia de varias relaciones de *peering* reduce la dependencia de proveedores individuales.

### Requisitos habituales

Entre los requisitos habituales están una infraestructura compatible con BGP, la coordinación entre operadores, la capacidad suficiente para intercambiar tráfico y acuerdos técnicos y operativos claros. En muchos casos, los participantes evalúan el volumen de tráfico, la distribución geográfica, la capacidad de red y el beneficio mutuo.

### Relación entre peering y tránsito

El *peering* permite intercambiar tráfico entre redes específicas, mientras que el tránsito da acceso al resto de Internet. En la práctica, la mayoría de los operadores mantiene al mismo tiempo acuerdos de *peering* y contratos de tránsito. La Tabla 10.5 compara las tres modalidades.

<div class="diagram tabla-svg" id="tabla-10-5" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 279" role="img" aria-labelledby="t48-title"><title id="t48-title">Tabla 10.5. Peering público, peering privado y tránsito.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="68.3" y="20.0" dominant-baseline="central" text-anchor="middle">Modalidad</text>
<text class="tb-ht" x="438.2" y="20.0" dominant-baseline="central" text-anchor="middle">Descripción</text>
<text class="tb-ht" x="970.0" y="20.0" dominant-baseline="central" text-anchor="middle">Aplicación</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Peering</text>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">público</text>
<text class="tb-tx" x="148.5" y="60.8" dominant-baseline="central">Intercambio de tráfico entre sistemas autónomos mediante un punto de</text>
<text class="tb-tx" x="148.5" y="83.5" dominant-baseline="central">intercambio de Internet (IXP).</text>
<text class="tb-tx" x="752.0" y="60.8" dominant-baseline="central">Interconexión eficiente entre operadores y redes</text>
<text class="tb-tx" x="752.0" y="83.5" dominant-baseline="central">participantes.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">Peering</text>
<text class="tb-tx tb-b" x="12.0" y="147.0" dominant-baseline="central">privado</text>
<text class="tb-tx" x="148.5" y="124.2" dominant-baseline="central">Intercambio directo de tráfico mediante enlaces dedicados entre dos</text>
<text class="tb-tx" x="148.5" y="147.0" dominant-baseline="central">organizaciones.</text>
<text class="tb-tx" x="752.0" y="124.2" dominant-baseline="central">Cuando el volumen de tráfico justifica una conexión</text>
<text class="tb-tx" x="752.0" y="147.0" dominant-baseline="central">exclusiva.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Tránsito</text>
<text class="tb-tx" x="148.5" y="187.8" dominant-baseline="central">Servicio contratado a un proveedor que permite alcanzar redes y</text>
<text class="tb-tx" x="148.5" y="210.5" dominant-baseline="central">destinos externos.</text>
<text class="tb-tx" x="752.0" y="187.8" dominant-baseline="central">Acceso al resto de Internet y a redes no cubiertas por</text>
<text class="tb-tx" x="752.0" y="210.5" dominant-baseline="central">acuerdos de peering.</text>
<text class="tb-cap" x="600.0" y="257.2" text-anchor="middle">Tabla 10.5. Peering público, peering privado y tránsito.</text></svg>
</div>

El crecimiento de los IXP y de las grandes plataformas de contenido ha convertido al *peering* en un elemento estratégico para mejorar el rendimiento global de Internet y reducir los costos de interconexión.

## 10.6 MIGRACIÓN DE MPLS HACIA SD-WAN

La migración desde una WAN basada solo en MPLS hacia una arquitectura SD-WAN es una de las transformaciones más relevantes de las redes empresariales actuales. Su objetivo es ganar flexibilidad operativa, optimizar costos, aumentar la visibilidad del tráfico y simplificar la integración con servicios en la nube. Esta transición rara vez implica reemplazar MPLS de inmediato: la mayoría de las organizaciones adopta modelos híbridos donde ambas tecnologías coexisten durante un periodo prolongado, mientras se validan el rendimiento, la disponibilidad y los requisitos de seguridad.

La estrategia debe considerar tanto los aspectos técnicos como los operativos, de modo que se minimice el impacto sobre las aplicaciones críticas y se preserve la continuidad del negocio. La Figura 10.7 representa las fases del proceso.

<div class="diagram" id="figura-10-07" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1007" viewBox="0 0 1200 337.444" role="img" aria-labelledby="g1007-title">
<title id="g1007-title">Fases de la migración de MPLS a SD-WAN</title>
<defs><marker id="g1007m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g1007n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g1007-c" transform="translate(-8.788 -8.770) scale(1.0146)"><g transform="translate(0 1)"><circle cx="136" cy="34" r="15" fill="#7f1d1d"></circle>
<text x="136" y="39" font-size="11.827pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
<rect x="61" y="58" width="150" height="90" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(136 103) scale(1)" data-lib="search"><circle cx="-6" cy="-6" r="20" fill="#fbe6e6" stroke="#d40000" stroke-width="4"></circle><path d="M9 9 L28 28" stroke="#d40000" stroke-width="6" stroke-linecap="round"></path></g>
<text x="136" y="167" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Evaluación y planificación</text>
<text x="136" y="187.231" font-size="10.349pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">inventario, aplicaciones críticas y</text>
<text x="136" y="205.085" font-size="10.349pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">requisitos</text>
<line x1="215" y1="103" x2="289" y2="103" stroke="#364e6c" stroke-width="2" marker-end="url(#g1007m)"></line>
<circle cx="368" cy="34" r="15" fill="#1e3a8a"></circle>
<text x="368" y="39" font-size="11.827pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
<rect x="293" y="58" width="150" height="90" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(368 103) scale(1)" data-lib="sync"><g fill="none" stroke="#003ecc" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 -4 A26 26 0 0 1 20 -16"></path><path d="M24 4 A26 26 0 0 1 -20 16"></path><path d="M12 -22 L22 -16 L14 -8"></path><path d="M-12 22 L-22 16 L-14 8"></path></g></g>
<text x="368" y="167" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Implementación híbrida</text>
<text x="368" y="187.231" font-size="10.349pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">SD-WAN junto a MPLS</text>
<line x1="447" y1="103" x2="521" y2="103" stroke="#364e6c" stroke-width="2" marker-end="url(#g1007m)"></line>
<circle cx="600" cy="34" r="15" fill="#065f46"></circle>
<text x="600" y="39" font-size="11.827pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
<rect x="525" y="58" width="150" height="90" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(600 103) scale(1)" data-lib="fork"><g fill="none" stroke="#009254" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-30 0 H-6 L20 -18 M-6 0 L20 18"></path><path d="M12 -26 L22 -18 L12 -10 M12 10 L22 18 L12 26"></path></g><circle cx="-30" cy="0" r="5" fill="#009254"></circle></g>
<text x="600" y="167" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Migración gradual</text>
<text x="600" y="187.231" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="middle">de menor a mayor sensibilidad</text>
<line x1="679" y1="103" x2="753" y2="103" stroke="#364e6c" stroke-width="2" marker-end="url(#g1007m)"></line>
<circle cx="832" cy="34" r="15" fill="#7c2d12"></circle>
<text x="832" y="39" font-size="11.827pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text>
<rect x="757" y="58" width="150" height="90" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<g transform="translate(832 103) scale(1)" data-lib="gauge"><path d="M-30 18 A30 30 0 1 1 30 18" fill="none" stroke="#dd3a00" stroke-width="4" stroke-linecap="round"></path><path d="M0 14 L16 -12" stroke="#dd3a00" stroke-width="4" stroke-linecap="round"></path><circle cx="0" cy="14" r="5" fill="#dd3a00"></circle></g>
<text x="832" y="167" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Optimización</text>
<text x="832" y="187.231" font-size="10.349pt" font-weight="400" fill="#7c2d12" text-anchor="middle">se reducen o eliminan circuitos</text>
<text x="832" y="205.085" font-size="10.349pt" font-weight="400" fill="#7c2d12" text-anchor="middle">MPLS</text>
<line x1="911" y1="103" x2="985" y2="103" stroke="#364e6c" stroke-width="2" marker-end="url(#g1007m)"></line>
<circle cx="1064" cy="34" r="15" fill="#5b21b6"></circle>
<text x="1064" y="39" font-size="11.827pt" font-weight="700" fill="#ffffff" text-anchor="middle">5</text>
<rect x="989" y="58" width="150" height="90" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(1064 103) scale(1)" data-lib="eye"><path d="M-34 0 C-18 -24 18 -24 34 0 C18 24 -18 24 -34 0 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3"></path><circle cx="0" cy="0" r="9" fill="#7c3aed"></circle></g>
<text x="1064" y="167" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Operación continua</text>
<text x="1064" y="187.231" font-size="10.349pt" font-weight="400" fill="#5b21b6" text-anchor="middle">monitorización, políticas y</text>
<text x="1064" y="205.085" font-size="10.349pt" font-weight="400" fill="#5b21b6" text-anchor="middle">automatización</text>
<rect x="20" y="244" width="1160" height="44" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="271.25" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Rara vez se reemplaza MPLS de forma inmediata: la mayoría adopta modelos híbridos durante un periodo prolongado</text>
</g></g><text x="600" y="321.088" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 10.7. Fases de la migración de MPLS a SD-WAN.</text></svg>
</div>

### Objetivos habituales de la migración

Entre los objetivos habituales están reducir los costos de conectividad WAN, aumentar el ancho de banda disponible, mejorar la conectividad hacia servicios *cloud*, simplificar la administración de sucursales, obtener mayor visibilidad sobre aplicaciones y usuarios, automatizar la ingeniería de tráfico y aumentar la resiliencia mediante varios enlaces.

### Fase 1. Evaluación y planificación

El proceso comienza con un análisis detallado de la infraestructura existente. Conviene reunir, como mínimo:

- Inventario de sedes y enlaces WAN.
- Capacidad contratada en circuitos MPLS.
- Aplicaciones críticas para el negocio.
- Requisitos de latencia, *jitter* y pérdida de paquetes.
- Dependencias de servicios internos y externos.
- Requerimientos regulatorios y de seguridad.

Durante esta fase también se identifican los sitios que pueden migrarse primero con menor riesgo operativo.

### Fase 2. Implementación híbrida

La etapa más común consiste en incorporar SD-WAN manteniendo la infraestructura MPLS existente. Los dispositivos SD-WAN se despliegan en las sucursales y establecen túneles seguros sobre enlaces adicionales de Internet, fibra dedicada, LTE o 5G. Durante este periodo:

- MPLS continúa transportando las aplicaciones críticas.
- Internet soporta el tráfico menos sensible.
- Las políticas de selección dinámica de rutas comienzan a operar.
- Se valida el comportamiento de los nuevos enlaces.

Este enfoque reduce de forma considerable el riesgo asociado a la migración.

### Fase 3. Migración gradual de aplicaciones

Una vez validada la infraestructura híbrida, las aplicaciones comienzan a migrarse de manera progresiva. Normalmente se priorizan el correo electrónico, la navegación web, las aplicaciones SaaS y los servicios de colaboración; después se incorporan las más sensibles, como voz sobre IP, videoconferencia, sistemas transaccionales y aplicaciones industriales. La monitorización continua permite verificar el cumplimiento de los acuerdos de nivel de servicio y ajustar las políticas cuando sea necesario.

### Fase 4. Optimización y consolidación

A medida que crece la confianza en la plataforma SD-WAN, parte de los circuitos MPLS puede reducirse o eliminarse. Las decisiones dependen de la calidad de los enlaces de Internet disponibles, los requisitos contractuales, las necesidades de redundancia y la criticidad de las aplicaciones. Muchas organizaciones conservan algunos circuitos MPLS para servicios especialmente sensibles, mientras que otras migran por completo a arquitecturas basadas en Internet.

### Fase 5. Operación continua

Una vez completada la migración, la plataforma SD-WAN aporta capacidades avanzadas de supervisión y automatización. Entre las funciones más útiles están la monitorización en tiempo real, la selección dinámica de rutas, el análisis por aplicación, la gestión centralizada de políticas, la integración con plataformas SASE y la automatización operativa.

### Desafíos habituales

#### Calidad variable de Internet

A diferencia de MPLS, los enlaces públicos pueden experimentar fluctuaciones de rendimiento. Para mitigarlo, las plataformas SD-WAN incorporan mecanismos como la selección dinámica de rutas, la corrección de errores (FEC), el balanceo inteligente y la conmutación automática ante degradaciones.

#### Direccionamiento y enrutamiento

La coexistencia temporal de varias tecnologías puede requerir ajustes en el diseño IP, las políticas NAT y la redistribución de rutas.

#### Seguridad

Mientras MPLS proporciona aislamiento lógico del tráfico, SD-WAN depende de mecanismos criptográficos para proteger las comunicaciones. Conviene verificar que el cifrado esté habilitado y configurado entre todos los dispositivos de borde.

#### Capacitación operativa

Administrar una plataforma SD-WAN exige conocimientos de automatización, orquestación centralizada y análisis de aplicaciones, competencias que pueden diferir bastante de las de los entornos WAN tradicionales. La Tabla 10.6 resume los desafíos habituales.

<div class="diagram tabla-svg" id="tabla-10-6" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 406" role="img" aria-labelledby="t49-title"><title id="t49-title">Tabla 10.6. Desafíos habituales de la migración a SD-WAN.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="116.4" y="20.0" dominant-baseline="central" text-anchor="middle">Desafío</text>
<text class="tb-ht" x="491.6" y="20.0" dominant-baseline="central" text-anchor="middle">Consideración</text>
<text class="tb-ht" x="975.2" y="20.0" dominant-baseline="central" text-anchor="middle">Acción recomendada</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Compatibilidad de</text>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">infraestructura</text>
<text class="tb-tx" x="244.9" y="60.8" dominant-baseline="central">La migración debe considerar routers, firewalls, enlaces y</text>
<text class="tb-tx" x="244.9" y="83.5" dominant-baseline="central">servicios existentes.</text>
<text class="tb-tx" x="762.4" y="72.1" dominant-baseline="central">Inventario técnico y pruebas de interoperabilidad.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Continuidad operativa</text>
<text class="tb-tx" x="244.9" y="124.2" dominant-baseline="central">Los cambios pueden afectar el tráfico de aplicaciones</text>
<text class="tb-tx" x="244.9" y="147.0" dominant-baseline="central">críticas.</text>
<text class="tb-tx" x="762.4" y="124.2" dominant-baseline="central">Migración gradual, coexistencia temporal y plan de</text>
<text class="tb-tx" x="762.4" y="147.0" dominant-baseline="central">reversión.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Calidad de servicio</text>
<text class="tb-tx" x="244.9" y="187.8" dominant-baseline="central">La experiencia depende de los transportes disponibles y de</text>
<text class="tb-tx" x="244.9" y="210.5" dominant-baseline="central">las políticas aplicadas.</text>
<text class="tb-tx" x="762.4" y="187.8" dominant-baseline="central">Medición de latencia, jitter, pérdida y disponibilidad</text>
<text class="tb-tx" x="762.4" y="210.5" dominant-baseline="central">por aplicación.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="262.6" dominant-baseline="central">Seguridad</text>
<text class="tb-tx" x="244.9" y="251.2" dominant-baseline="central">SD-WAN depende de mecanismos criptográficos y políticas</text>
<text class="tb-tx" x="244.9" y="274.0" dominant-baseline="central">de seguridad configuradas.</text>
<text class="tb-tx" x="762.4" y="251.2" dominant-baseline="central">Verificar cifrado, autenticación, segmentación y</text>
<text class="tb-tx" x="762.4" y="274.0" dominant-baseline="central">controles de extremo a extremo.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="326.1" dominant-baseline="central">Capacitación operativa</text>
<text class="tb-tx" x="244.9" y="314.8" dominant-baseline="central">La operación requiere conocimientos de automatización,</text>
<text class="tb-tx" x="244.9" y="337.5" dominant-baseline="central">orquestación y análisis de aplicaciones.</text>
<text class="tb-tx" x="762.4" y="314.8" dominant-baseline="central">Formación de los equipos de operación y</text>
<text class="tb-tx" x="762.4" y="337.5" dominant-baseline="central">actualización de procedimientos.</text>
<text class="tb-cap" x="600.0" y="384.2" text-anchor="middle">Tabla 10.6. Desafíos habituales de la migración a SD-WAN.</text></svg>
</div>

### Arquitectura híbrida de referencia

Un modelo muy adoptado combina un enlace MPLS para las aplicaciones críticas, uno o más enlaces de Internet de alta capacidad, túneles IPsec gestionados por SD-WAN, políticas dinámicas de selección de rutas y conmutación automática ante fallos (Figura 10.8). Este enfoque permite aprovechar al mismo tiempo la estabilidad de MPLS y la flexibilidad de SD-WAN.

<div class="diagram" id="figura-10-08" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1008" viewBox="0 0 1200 350.636" role="img" aria-labelledby="g1008-title">
<title id="g1008-title">Arquitectura híbrida de referencia MPLS y SD-WAN</title>
<defs><marker id="g1008m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g1008n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g1008-c" transform="translate(-8.775 -8.770) scale(1.0146)"><g transform="translate(0 2)"><g transform="translate(130 110) scale(0.9)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#d40000" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#d40000"></rect></g>
<text x="130" y="167.4" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Sucursal</text>
<text x="130" y="187.6" font-size="10.349pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">dispositivo SD-WAN</text>
<g transform="translate(1070 110) scale(0.9)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#009254"></rect></g>
<text x="1070" y="167.4" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Sede central o nube</text>
<text x="1070" y="187.6" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="middle">dispositivo SD-WAN</text>
<g transform="translate(600 45) scale(1.2)" data-lib="cable"><path d="M-40 0 C-26 -30 -14 -30 0 0 S26 30 40 0" fill="none" stroke="#003ecc" stroke-width="4" stroke-linecap="round"></path></g>
<text x="600" y="93" font-size="10.349pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Enlace MPLS · aplicaciones críticas</text>
<g transform="translate(598 175) scale(1.5)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="600" y="224" font-size="10.349pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Internet · túneles IPsec</text>
<line x1="210" y1="98" x2="530" y2="45" stroke="#364e6c" stroke-width="2" marker-end="url(#g1008m)" marker-start="url(#g1008n)"></line>
<line x1="210" y1="122" x2="520" y2="163" stroke="#364e6c" stroke-width="2" marker-end="url(#g1008m)" marker-start="url(#g1008n)"></line>
<line x1="670" y1="45" x2="990" y2="98" stroke="#364e6c" stroke-width="2" marker-end="url(#g1008m)" marker-start="url(#g1008n)"></line>
<line x1="680" y1="163" x2="990" y2="122" stroke="#364e6c" stroke-width="2" marker-end="url(#g1008m)" marker-start="url(#g1008n)"></line>
<rect x="20" y="256" width="1160" height="44" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="283.25" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Selección dinámica de rutas y conmutación automática ante fallos: estabilidad de MPLS y flexibilidad de SD-WAN</text>
</g></g><text x="600" y="334.272" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 10.8. Arquitectura híbrida de referencia MPLS y SD-WAN.</text></svg>
</div>

La evolución actual del mercado no apunta a la desaparición inmediata de MPLS, sino a su integración dentro de arquitecturas WAN más flexibles, donde SD-WAN actúa como capa de control y automatización. Como resultado, muchas organizaciones reducen sus costos operativos, aumentan su capacidad de red y mejoran la experiencia de usuario sin comprometer los niveles de disponibilidad que el negocio requiere.
