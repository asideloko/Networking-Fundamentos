<p class="tema-num">TEMA 13</p>

# MONITOREO Y DIAGNÓSTICO DE REDES

El monitoreo y el diagnóstico de redes reúnen las técnicas, herramientas y procedimientos para observar, medir, analizar y resolver el comportamiento de una infraestructura de comunicaciones.

Operar las arquitecturas anteriores exige comprobar que funcionan como se diseñaron. El monitoreo y el diagnóstico proporcionan la evidencia para hacerlo, y la evidencia debe preceder a cualquier corrección.

Estas actividades son fundamentales para garantizar la disponibilidad, el rendimiento, la estabilidad y la seguridad de la red, ya que se detectan anomalías, se identifican degradaciones de servicio y se resuelven incidencias antes de que afecten a los usuarios o a las aplicaciones. La Figura 13.1 presenta el mapa de los subtemas y la Tabla 13.2 resume las herramientas que se estudian.

El monitoreo puede realizarse de forma pasiva, observando el tráfico y los eventos existentes, o de forma activa, mediante la generación de tráfico de prueba para evaluar el comportamiento de enlaces y dispositivos. El diagnóstico complementa este proceso mediante la identificación sistemática de la causa raíz de problemas de conectividad, rendimiento o seguridad. La Figura 13.2 compara ambos enfoques.

<div class="diagram" id="figura-13-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1301" viewBox="0 0 1200 402" role="img" aria-labelledby="g1301-title">
<title id="g1301-title">Mapa del Tema 13</title>
<defs></defs>
<g id="g1301-c" transform="translate(20 20)"><rect x="0" y="0" width="370.67" height="153" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="370.67" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="185.33" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">13.1 Ping, traceroute y nslookup</text>
<g transform="translate(185.33 76.84) scale(0.7)" data-lib="search"><circle cx="-6" cy="-6" r="20" fill="#e6ecfa" stroke="#003ecc" stroke-width="4"></circle><path d="M9 9 L28 28" stroke="#003ecc" stroke-width="6" stroke-linecap="round"></path></g>
<text x="185.33" y="134.95" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Conectividad, ruta y resolución de nombres</text>
<rect x="394.67" y="0" width="370.67" height="153" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="394.67" y1="34" x2="765.33" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="580" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">13.2 MTR</text>
<g transform="translate(580 76.84) scale(0.7)" data-lib="gauge"><path d="M-30 18 A30 30 0 1 1 30 18" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><path d="M0 14 L16 -12" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><circle cx="0" cy="14" r="5" fill="#7c3aed"></circle></g>
<text x="580" y="134.95" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Estadísticas continuas por salto</text>
<rect x="789.33" y="0" width="370.67" height="153" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="789.33" y1="34" x2="1160" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="974.67" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">13.3 Wireshark</text>
<g transform="translate(974.67 76.84) scale(0.7)" data-lib="eye"><path d="M-34 0 C-18 -24 18 -24 34 0 C18 24 -18 24 -34 0 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3"></path><circle cx="0" cy="0" r="9" fill="#009254"></circle></g>
<text x="974.67" y="134.95" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Análisis de paquetes por capas</text>
<rect x="0" y="177" width="370.67" height="153" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="0" y1="211" x2="370.67" y2="211" stroke="#364e6c" stroke-width="1.5"/>
<text x="185.33" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">13.4 tcpdump</text>
<g transform="translate(185.33 253.84) scale(0.7)" data-lib="terminal"><rect x="-38" y="-28" width="76" height="56" rx="5" fill="#ebedf0" stroke="#364e6c" stroke-width="3"/><path d="M-26 -12L-12 0L-26 12" fill="none" stroke="#364e6c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M-4 12h22" stroke="#364e6c" stroke-width="4" stroke-linecap="round"/></g>
<text x="185.33" y="311.95" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Captura en línea de comandos</text>
<rect x="394.67" y="177" width="370.67" height="153" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="394.67" y1="211" x2="765.33" y2="211" stroke="#dd3a00" stroke-width="1.5"/>
<text x="580" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">13.5 iperf3</text>
<g transform="translate(580 253.84) scale(0.7)" data-lib="bolt"><path d="M6 -32 L-20 4 H-2 L-8 32 L22 -6 H4 Z" fill="#fcebe6" stroke="#dd3a00" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="580" y="311.95" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Medición activa de rendimiento</text>
<rect x="789.33" y="177" width="370.67" height="153" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="789.33" y1="211" x2="1160" y2="211" stroke="#d40000" stroke-width="1.5"/>
<text x="974.67" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">13.6 SIEM</text>
<g transform="translate(974.67 253.84) scale(0.7)" data-lib="db"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><path d="M-30 -24 V24 C-30 36 30 36 30 24 V-24"></path><ellipse cx="0" cy="-24" rx="30" ry="11" fill="#fbe6e6"></ellipse><path d="M-30 -4 C-30 8 30 8 30 -4" fill="none"></path><path d="M-30 14 C-30 26 30 26 30 14" fill="none"></path></g></g>
<text x="974.67" y="311.95" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Correlación de eventos de seguridad</text></g><text x="600" y="384" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 13.1. Mapa del Tema 13.</text></svg>
</div>

Desde una perspectiva operativa, el monitoreo consiste en la recolección continua de métricas, eventos y registros provenientes de dispositivos, aplicaciones y servicios de red.

El diagnóstico utiliza dicha información para determinar el origen de una falla o una desviación respecto al comportamiento esperado.

<div class="diagram tabla-svg" id="tabla-13-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 574" role="img" aria-labelledby="t63-title"><title id="t63-title">Tabla 13.1. Métricas comunes de monitoreo.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="124.9" y="20.0" dominant-baseline="central" text-anchor="middle">Métrica</text>
<text class="tb-ht" x="535.6" y="20.0" dominant-baseline="central" text-anchor="middle">Descripción</text>
<text class="tb-ht" x="1010.6" y="20.0" dominant-baseline="central" text-anchor="middle">Herramienta o mecanismo</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Utilización de ancho de</text>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">banda</text>
<text class="tb-tx" x="261.9" y="60.8" dominant-baseline="central">Porcentaje o volumen de capacidad utilizada en una interfaz o</text>
<text class="tb-tx" x="261.9" y="83.5" dominant-baseline="central">enlace.</text>
<text class="tb-tx" x="833.2" y="60.8" dominant-baseline="central">SNMP, contadores de interfaz y streaming</text>
<text class="tb-tx" x="833.2" y="83.5" dominant-baseline="central">telemetry.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Latencia</text>
<text class="tb-tx" x="261.9" y="124.2" dominant-baseline="central">Tiempo que tarda un paquete en viajar entre dos puntos; suele</text>
<text class="tb-tx" x="261.9" y="147.0" dominant-baseline="central">medirse como RTT cuando se utiliza ping.</text>
<text class="tb-tx" x="833.2" y="135.6" dominant-baseline="central">ping, MTR y sondas activas.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Jitter</text>
<text class="tb-tx" x="261.9" y="199.1" dominant-baseline="central">Variación del retardo entre paquetes.</text>
<text class="tb-tx" x="833.2" y="187.8" dominant-baseline="central">iperf3 en modo UDP y herramientas de</text>
<text class="tb-tx" x="833.2" y="210.5" dominant-baseline="central">medición especializadas.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="262.6" dominant-baseline="central">Pérdida de paquetes</text>
<text class="tb-tx" x="261.9" y="251.2" dominant-baseline="central">Proporción de paquetes enviados que no llegan al destino o no</text>
<text class="tb-tx" x="261.9" y="274.0" dominant-baseline="central">reciben respuesta.</text>
<text class="tb-tx" x="833.2" y="262.6" dominant-baseline="central">ping, MTR, iperf3 y telemetría de red.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="326.1" dominant-baseline="central">Errores de interfaz</text>
<text class="tb-tx" x="261.9" y="314.8" dominant-baseline="central">Tramas erróneas, descartes y otros indicadores del estado de un</text>
<text class="tb-tx" x="261.9" y="337.5" dominant-baseline="central">puerto.</text>
<text class="tb-tx" x="833.2" y="326.1" dominant-baseline="central">ethtool e ip -s link.</text>
<rect class="tb-to" x="0" y="358.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="378.2" dominant-baseline="central">Disponibilidad de</text>
<text class="tb-tx tb-b" x="12.0" y="401.0" dominant-baseline="central">dispositivos</text>
<text class="tb-tx" x="261.9" y="378.2" dominant-baseline="central">Indica si un dispositivo responde y si los servicios que ofrece están</text>
<text class="tb-tx" x="261.9" y="401.0" dominant-baseline="central">operativos.</text>
<text class="tb-tx" x="833.2" y="378.2" dominant-baseline="central">ping, sondas de servicio y plataformas de</text>
<text class="tb-tx" x="833.2" y="401.0" dominant-baseline="central">monitoreo.</text>
<rect class="tb-te" x="0" y="421.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="441.8" dominant-baseline="central">Tiempo de respuesta de</text>
<text class="tb-tx tb-b" x="12.0" y="464.5" dominant-baseline="central">aplicaciones</text>
<text class="tb-tx" x="261.9" y="453.1" dominant-baseline="central">Rapidez con la que responde un servicio o una aplicación.</text>
<text class="tb-tx" x="833.2" y="453.1" dominant-baseline="central">curl y pruebas activas.</text>
<rect class="tb-to" x="0" y="485.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="505.2" dominant-baseline="central">Eventos de seguridad</text>
<text class="tb-tx" x="261.9" y="505.2" dominant-baseline="central">Registros, alertas y eventos generados por la infraestructura.</text>
<text class="tb-tx" x="833.2" y="505.2" dominant-baseline="central">SIEM y sistemas de gestión de logs.</text>
<text class="tb-cap" x="600.0" y="552.0" text-anchor="middle">Tabla 13.1. Métricas comunes de monitoreo.</text></svg>
</div>

Nota: *ping* mide alcance ICMP y RTT, pero no demuestra por sí solo que una aplicación esté disponible. La disponibilidad debe verificarse mediante pruebas del servicio correspondiente.

Las métricas más comunes, que se detallan en la Tabla 13.1, incluyen la utilización de ancho de banda, la latencia, el *jitter*, la pérdida de paquetes, los errores de interfaz, la disponibilidad de dispositivos, el tiempo de respuesta de aplicaciones y los eventos de seguridad.

Una estrategia efectiva de monitoreo combina herramientas de observación en tiempo real, análisis de tráfico, pruebas activas de rendimiento y plataformas centralizadas de correlación de eventos.

## 13.1 PING, TRACEROUTE Y NSLOOKUP

*p*ing, *traceroute* (o *tracert*, según el sistema) y *nslookup* son herramientas habituales de diagnóstico, aunque su disponibilidad y sintaxis pueden variar y algunas requieren instalar paquetes adicionales.

Permiten comprobar la respuesta de un destino, explorar el camino de los paquetes y consultar la resolución de nombres. Sus resultados deben interpretarse considerando los filtros, las políticas de ICMP y las particularidades de cada implementación.

<div class="diagram" id="figura-13-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1302" viewBox="0 0 1200 432" role="img" aria-labelledby="g1302-title">
<title id="g1302-title">Monitoreo pasivo y monitoreo activo</title>
<defs><marker id="g1302m009254" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#009254"/></marker><marker id="g1302n009254" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#009254"/></marker><marker id="g1302m003ecc" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#003ecc"/></marker><marker id="g1302n003ecc" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#003ecc"/></marker></defs>
<g id="g1302-c" transform="translate(20 20)"><rect x="0" y="0" width="560" height="360" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="0" y1="34" x2="560" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="280" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Monitoreo pasivo</text>
<rect x="600" y="0" width="560" height="360" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="600" y1="34" x2="1160" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="880" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Monitoreo activo</text>
<g transform="translate(70 130) scale(0.7)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<g transform="translate(280 130) scale(0.9)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<g transform="translate(490 130) scale(0.7)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<line x1="130" y1="130" x2="220" y2="130" stroke="#364e6c" stroke-width="2.5"/>
<line x1="340" y1="130" x2="430" y2="130" stroke="#364e6c" stroke-width="2.5"/>
<g transform="translate(280 250) scale(0.9)" data-lib="eye"><path d="M-34 0 C-18 -24 18 -24 34 0 C18 24 -18 24 -34 0 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3"></path><circle cx="0" cy="0" r="9" fill="#009254"></circle></g>
<polyline points="280,156 280,218" fill="none" stroke="#009254" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#g1302m009254)"/>
<text x="280" y="300" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Observa el tráfico real que ya circula</text>
<text x="280" y="322" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">y los eventos existentes</text>
<g transform="translate(670 130) scale(0.7)" data-lib="terminal"><rect x="-38" y="-28" width="76" height="56" rx="5" fill="#ebedf0" stroke="#364e6c" stroke-width="3"/><path d="M-26 -12L-12 0L-26 12" fill="none" stroke="#364e6c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M-4 12h22" stroke="#364e6c" stroke-width="4" stroke-linecap="round"/></g>
<g transform="translate(880 130) scale(0.8)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<g transform="translate(1090 130) scale(0.7)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<polyline points="730,118 810,118" fill="none" stroke="#003ecc" stroke-width="2.5" marker-end="url(#g1302m003ecc)"/>
<polyline points="810,142 730,142" fill="none" stroke="#003ecc" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#g1302m003ecc)"/>
<polyline points="950,130 1030,130" fill="none" stroke="#003ecc" stroke-width="2.5" marker-end="url(#g1302m003ecc)"/>
<g transform="translate(880 250) scale(0.9)" data-lib="gauge"><path d="M-30 18 A30 30 0 1 1 30 18" fill="none" stroke="#003ecc" stroke-width="4" stroke-linecap="round"></path><path d="M0 14 L16 -12" stroke="#003ecc" stroke-width="4" stroke-linecap="round"></path><circle cx="0" cy="14" r="5" fill="#003ecc"></circle></g>
<polyline points="880,156 880,218" fill="none" stroke="#003ecc" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#g1302m003ecc)"/>
<text x="880" y="300" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Genera tráfico de prueba para evaluar</text>
<text x="880" y="322" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">el comportamiento de enlaces y dispositivos</text></g><text x="600" y="414" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 13.2. Monitoreo pasivo y monitoreo activo.</text></svg>
</div>

### Ping

*Ping* utiliza el protocolo ICMP (*Internet Control Message Protocol*) para comprobar la alcanzabilidad de un destino y medir el tiempo necesario para intercambiar paquetes entre dos dispositivos.

Su funcionamiento se basa en el envío de mensajes ICMP *Echo Request* (tipo 8) y la recepción de respuestas ICMP *Echo Reply* (tipo 0), como se muestra en la Figura 13.3.

#### Proceso de operación

1. El origen envía uno o varios mensajes ICMP al destino.
2. El destino responde utilizando el mismo identificador y número de secuencia.
3. El origen calcula el tiempo transcurrido entre el envío y la recepción.
4. Se registran pérdidas de paquetes y tiempos de respuesta.

#### Principales métricas obtenidas

- Tiempo mínimo, máximo y promedio (RTT).
- Variación de latencia.
- Porcentaje de pérdida de paquetes.
- Confirmación de alcanzabilidad del destino.

Ejemplo:

```text
Networking@SecOpsMX:~$ ping 8.8.8.8
```

<div class="diagram" id="figura-13-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1303" viewBox="0 0 1200 372" role="img" aria-labelledby="g1303-title">
<title id="g1303-title">Intercambio de mensajes ICMP en ping</title>
<defs><marker id="g1303m003ecc" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#003ecc"/></marker><marker id="g1303n003ecc" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#003ecc"/></marker><marker id="g1303m009254" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#009254"/></marker><marker id="g1303n009254" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#009254"/></marker><marker id="g1303m7c3aed" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#7c3aed"/></marker><marker id="g1303n7c3aed" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#7c3aed"/></marker></defs>
<g id="g1303-c" transform="translate(20 20)"><g transform="translate(160 60) scale(0.7)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="160" y="110" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Origen</text>
<g transform="translate(1000 60) scale(0.7)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<text x="1000" y="110" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Destino</text>
<line x1="160" y1="126" x2="160" y2="290" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5"/>
<line x1="1000" y1="126" x2="1000" y2="290" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5"/>
<polyline points="160,170 1000,170" fill="none" stroke="#003ecc" stroke-width="3" marker-end="url(#g1303m003ecc)"/>
<text x="580" y="154" font-size="10.9pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">ICMP Echo Request (tipo 8) · identificador y número de secuencia</text>
<polyline points="1000,240 160,240" fill="none" stroke="#009254" stroke-width="3" marker-end="url(#g1303m009254)"/>
<text x="580" y="224" font-size="10.9pt" font-weight="700" fill="#065f46" text-anchor="middle">ICMP Echo Reply (tipo 0) · mismo identificador y secuencia</text>
<line x1="110" y1="170" x2="110" y2="240" stroke="#7c3aed" stroke-width="2"/>
<polyline points="110,172 110,238" fill="none" stroke="#7c3aed" stroke-width="2" marker-end="url(#g1303m7c3aed)" marker-start="url(#g1303n7c3aed)"/>
<text x="100" y="200" font-size="11.35pt" font-weight="700" fill="#5b21b6" text-anchor="end">RTT</text></g><text x="600" y="354" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 13.3. Intercambio de mensajes ICMP en ping.</text></svg>
</div>

#### Consideraciones importantes

- Algunos dispositivos bloquean ICMP mediante *firewalls*.
- Un destino puede estar operativo aunque no responda a *ping*.
- La ausencia de respuesta no siempre implica una falla de conectividad.

### Traceroute (tracert en Windows)

*Traceroute* permite inferir los dispositivos intermedios que responden a las sondas enviadas hacia un destino. Para ello incrementa progresivamente el TTL (*Time To Live*) en IPv4 o el *Hop Limit* en IPv6, lo que provoca que cada *router* que agota ese valor pueda generar un mensaje ICMP de tiempo excedido. La Figura 13.4 muestra el procedimiento.

1. Se envía un paquete con TTL igual a 1.
2. El primer *router* reduce el TTL a cero y responde con un mensaje ICMP *Time Exceeded*.
3. El origen registra la dirección IP del *router*.
4. Se incrementa progresivamente el TTL hasta alcanzar el destino final.

El resultado muestra la secuencia de *routers* intermedios, el tiempo de respuesta de cada salto y los posibles puntos de congestión o pérdida. Ejemplos:

```text
Networking@SecOpsMX:~$ traceroute 8.8.8.8 # Linux/macOS
tracert 8.8.8.8 # Windows
```

**Nota técnica:** en *Linux*/*macOS*, *traceroute* suele enviar sondas UDP a puertos altos por defecto, aunque puede usar ICMP o TCP según la implementación y las opciones; en *Windows*, *tracert* emplea ICMP.

<div class="diagram" id="figura-13-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1304" viewBox="0 0 1200 502" role="img" aria-labelledby="g1304-title">
<title id="g1304-title">Descubrimiento de saltos con traceroute mediante el campo TTL</title>
<defs><marker id="g1304m003ecc" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#003ecc"/></marker><marker id="g1304n003ecc" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#003ecc"/></marker><marker id="g1304mdd3a00" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#dd3a00"/></marker><marker id="g1304ndd3a00" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#dd3a00"/></marker><marker id="g1304m009254" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#009254"/></marker><marker id="g1304n009254" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#009254"/></marker></defs>
<g id="g1304-c" transform="translate(20 20)"><g transform="translate(120 36) scale(0.65)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="120" y="86" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Origen</text>
<line x1="120" y1="98" x2="120" y2="420" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5"/>
<g transform="translate(420 36) scale(0.65)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="420" y="86" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router 1</text>
<line x1="420" y1="98" x2="420" y2="420" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5"/>
<g transform="translate(720 36) scale(0.65)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="720" y="86" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router 2</text>
<line x1="720" y1="98" x2="720" y2="420" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5"/>
<g transform="translate(1020 36) scale(0.65)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<text x="1020" y="86" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Destino</text>
<line x1="1020" y1="98" x2="1020" y2="420" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5"/>
<polyline points="120,140 420,140" fill="none" stroke="#003ecc" stroke-width="3" marker-end="url(#g1304m003ecc)"/>
<text x="270" y="128" font-size="10.35pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Sonda con TTL = 1</text>
<polyline points="420,176 120,176" fill="none" stroke="#dd3a00" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#g1304mdd3a00)"/>
<text x="270" y="196" font-size="10.35pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Time Exceeded (ICMP)</text>
<circle cx="50" cy="158" r="15" fill="#1e3a8a"/>
<text x="50" y="163" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
<polyline points="120,240 720,240" fill="none" stroke="#003ecc" stroke-width="3" marker-end="url(#g1304m003ecc)"/>
<text x="420" y="228" font-size="10.35pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Sonda con TTL = 2</text>
<polyline points="720,276 120,276" fill="none" stroke="#dd3a00" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#g1304mdd3a00)"/>
<text x="420" y="296" font-size="10.35pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Time Exceeded (ICMP)</text>
<circle cx="50" cy="258" r="15" fill="#1e3a8a"/>
<text x="50" y="263" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
<polyline points="120,340 1020,340" fill="none" stroke="#003ecc" stroke-width="3" marker-end="url(#g1304m003ecc)"/>
<text x="570" y="328" font-size="10.35pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Sonda con TTL = 3</text>
<polyline points="1020,376 120,376" fill="none" stroke="#009254" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#g1304m009254)"/>
<text x="570" y="396" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">Respuesta del destino</text>
<circle cx="50" cy="358" r="15" fill="#1e3a8a"/>
<text x="50" y="363" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text></g><text x="600" y="484" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 13.4. Descubrimiento de saltos con traceroute mediante el campo TTL.</text></svg>
</div>

Algunas implementaciones envían tres sondas por valor de TTL o *Hop Limit*, aunque el número y el tipo de sondas pueden configurarse.

Un salto marcado con \* indica que no se recibió respuesta dentro del tiempo de espera; no demuestra por sí solo una falla, porque algunos *routers* limitan o priorizan la generación de mensajes ICMP.

Del mismo modo, una latencia elevada en un salto intermedio no prueba congestión en ese punto: debe compararse con las mediciones de los saltos posteriores y del destino final.

#### Aplicaciones prácticas

- Localizar fallas de conectividad.
- Detectar rutas ineficientes.
- Analizar incrementos de latencia.
- Identificar problemas de enrutamiento.

### nslookup

*Nslookup* es una herramienta de consulta DNS utilizada para verificar la resolución de nombres y diagnosticar problemas relacionados con servidores DNS.

Permite consultar diferentes tipos de registros directamente desde un servidor DNS específico o utilizando la configuración local del sistema.

Las consultas habituales son:

- `nslookup www.ejemplo.com`: obtiene registros A (IPv4).
- `nslookup -type=AAAA www.ejemplo.com`: obtiene registros IPv6.
- `nslookup -type=MX ejemplo.com`: obtiene servidores de correo.
- `nslookup 8.8.8.8`: realiza resolución inversa mediante registros PTR.

**Nota**: aunque *nslookup* sigue disponible, en entornos modernos se recomienda *dig* para el diagnóstico DNS, porque ofrece una salida más explícita y control sobre los tipos de consulta, los servidores y las opciones.

<div class="diagram tabla-svg" id="tabla-13-2" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 402" role="img" aria-labelledby="t64-title"><title id="t64-title">Tabla 13.2. Herramientas de monitoreo y diagnóstico.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="63.2" y="20.0" dominant-baseline="central" text-anchor="middle">Herramienta</text>
<text class="tb-ht" x="441.3" y="20.0" dominant-baseline="central" text-anchor="middle">Función principal</text>
<text class="tb-ht" x="978.1" y="20.0" dominant-baseline="central" text-anchor="middle">Aplicación</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">ping</text>
<text class="tb-tx" x="138.4" y="60.8" dominant-baseline="central">Comprueba respuesta ICMP y mide RTT.</text>
<text class="tb-tx" x="768.2" y="60.8" dominant-baseline="central">Verificación básica de conectividad IP.</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="112.9" dominant-baseline="central">MTR</text>
<text class="tb-tx" x="138.4" y="101.5" dominant-baseline="central">Combina funciones de traceroute y ping para observar saltos, latencia y</text>
<text class="tb-tx" x="138.4" y="124.2" dominant-baseline="central">pérdida reportada.</text>
<text class="tb-tx" x="768.2" y="101.5" dominant-baseline="central">Diagnóstico de rutas y posibles problemas de</text>
<text class="tb-tx" x="768.2" y="124.2" dominant-baseline="central">conectividad.</text>
<rect class="tb-te" x="0" y="145.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="165.0" dominant-baseline="central">Wireshark</text>
<text class="tb-tx" x="138.4" y="165.0" dominant-baseline="central">Captura y analiza paquetes mediante una interfaz gráfica.</text>
<text class="tb-tx" x="768.2" y="165.0" dominant-baseline="central">Inspección de protocolos y diagnóstico detallado.</text>
<rect class="tb-to" x="0" y="185.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="217.1" dominant-baseline="central">tcpdump</text>
<text class="tb-tx" x="138.4" y="217.1" dominant-baseline="central">Captura paquetes desde la línea de comandos.</text>
<text class="tb-tx" x="768.2" y="205.8" dominant-baseline="central">Diagnóstico y análisis de tráfico en servidores y</text>
<text class="tb-tx" x="768.2" y="228.5" dominant-baseline="central">routers Linux.</text>
<rect class="tb-te" x="0" y="249.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="280.6" dominant-baseline="central">iperf3</text>
<text class="tb-tx" x="138.4" y="280.6" dominant-baseline="central">Mide throughput entre dos extremos mediante pruebas activas TCP o UDP.</text>
<text class="tb-tx" x="768.2" y="269.2" dominant-baseline="central">Evaluación de rendimiento de enlaces y caminos de</text>
<text class="tb-tx" x="768.2" y="292.0" dominant-baseline="central">red.</text>
<rect class="tb-to" x="0" y="312.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="332.8" dominant-baseline="central">SIEM</text>
<text class="tb-tx" x="138.4" y="332.8" dominant-baseline="central">Centraliza y correlaciona eventos procedentes de distintas fuentes.</text>
<text class="tb-tx" x="768.2" y="332.8" dominant-baseline="central">Monitoreo de seguridad y análisis de incidentes.</text>
<text class="tb-cap" x="600.0" y="379.5" text-anchor="middle">Tabla 13.2. Herramientas de monitoreo y diagnóstico.</text></svg>
</div>

Nota: *iperf3* mide el rendimiento entre los extremos y bajo las condiciones de la prueba; no mide directamente la capacidad física nominal del enlace ni la utilización global de producción.

### Aplicaciones de diagnóstico

- Verificar el funcionamiento de servidores DNS.
- Detectar errores de resolución de nombres.
- Validar registros DNS publicados.
- Comprobar la propagación de cambios DNS.
- Diferenciar problemas de DNS frente a problemas de conectividad IP.

*ping*, *traceroute* y *nslookup* siguen siendo herramientas básicas para administradores de red, ingenieros de infraestructura y especialistas en soporte, porque permiten aislar rápido problemas de conectividad, rutas y resolución de nombres antes de recurrir a herramientas de análisis más avanzadas.

El uso combinado de *ping*, *traceroute* y *nslookup* para aislar problemas de conectividad, rutas y resolución de nombres se ilustra en el **Anexo VI.**

## 13.2 MTR

*MTR* combina las funciones de *ping* y *traceroute*, proporcionando estadísticas continuas por cada salto de red.

Esta herramienta de diagnóstico envía paquetes ICMP, UDP o TCP de forma continua a cada nodo del camino hacia un destino, calculando estadísticas en tiempo real: pérdida, RTT mínimo, máximo, promedio y desviación.

*MTR* puede usar sondas ICMP, UDP o TCP, según la implementación. Envía las sondas con valores de TTL o *Hop Limit* progresivos, y las respuestas de los *routers* intermedios y del destino permiten estimar pérdida y RTT. Las métricas de un salto intermedio deben interpretarse con cautela, porque algunos *routers* limitan o priorizan las respuestas de control.

### Funcionamiento

- Ejecuta un *traceroute* inicial.
- Envía paquetes continuamente a cada salto.
- Actualiza las estadísticas dinámicamente.

<div class="diagram" id="figura-13-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1305" viewBox="0 0 1200 412" role="img" aria-labelledby="g1305-title">
<title id="g1305-title">Interpretación de la pérdida de paquetes por salto</title>
<defs></defs>
<g id="g1305-c" transform="translate(20 20)"><rect x="0" y="0" width="560" height="340" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="0" y1="34" x2="560" y2="34" stroke="#dd3a00" stroke-width="1.5"/>
<text x="280" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Pérdida solo en un salto intermedio</text>
<rect x="600" y="0" width="560" height="340" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="600" y1="34" x2="1160" y2="34" stroke="#d40000" stroke-width="1.5"/>
<text x="880" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Pérdida que llega al destino</text>
<line x1="40" y1="250" x2="520" y2="250" stroke="#364e6c" stroke-width="2"/>
<text x="90" y="242" font-size="10.35pt" font-weight="700" fill="#7c2d12" text-anchor="middle">0 %</text>
<text x="90" y="272" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Salto 1</text>
<text x="185" y="242" font-size="10.35pt" font-weight="700" fill="#7c2d12" text-anchor="middle">0 %</text>
<text x="185" y="272" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Salto 2</text>
<rect x="258" y="130" width="44" height="120" rx="3" fill="#f6cebf" stroke="#dd3a00" stroke-width="2"/>
<text x="280" y="122" font-size="10.35pt" font-weight="700" fill="#7c2d12" text-anchor="middle">40 %</text>
<text x="280" y="272" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Salto 3</text>
<text x="375" y="242" font-size="10.35pt" font-weight="700" fill="#7c2d12" text-anchor="middle">0 %</text>
<text x="375" y="272" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Salto 4</text>
<text x="470" y="242" font-size="10.35pt" font-weight="700" fill="#7c2d12" text-anchor="middle">0 %</text>
<text x="470" y="272" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Destino</text>
<text x="280" y="300" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Respuesta ICMP limitada por el router;</text>
<text x="280" y="322" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">sin impacto real en el tráfico</text>
<line x1="640" y1="250" x2="1120" y2="250" stroke="#364e6c" stroke-width="2"/>
<text x="690" y="242" font-size="10.35pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">0 %</text>
<text x="690" y="272" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Salto 1</text>
<text x="785" y="242" font-size="10.35pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">0 %</text>
<text x="785" y="272" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Salto 2</text>
<rect x="858" y="160" width="44" height="90" rx="3" fill="#f4bfbf" stroke="#d40000" stroke-width="2"/>
<text x="880" y="152" font-size="10.35pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">30 %</text>
<text x="880" y="272" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Salto 3</text>
<rect x="953" y="157" width="44" height="93" rx="3" fill="#f4bfbf" stroke="#d40000" stroke-width="2"/>
<text x="975" y="149" font-size="10.35pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">31 %</text>
<text x="975" y="272" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Salto 4</text>
<rect x="1048" y="154" width="44" height="96" rx="3" fill="#f4bfbf" stroke="#d40000" stroke-width="2"/>
<text x="1070" y="146" font-size="10.35pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">32 %</text>
<text x="1070" y="272" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Destino</text>
<text x="880" y="300" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Congestión o fallo real a partir del salto 3</text></g><text x="600" y="394" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 13.5. Interpretación de la pérdida de paquetes por salto.</text></svg>
</div>

### Interpretación

La Tabla 13.3 asocia cada resultado de *MTR* con su interpretación posible y con la consideración que debe acompañarla; la Figura 13.5 contrasta los dos patrones de pérdida, el que se limita a un salto y el que se propaga a los siguientes.

<div class="diagram tabla-svg" id="tabla-13-3" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 343" role="img" aria-labelledby="t65-title"><title id="t65-title">Tabla 13.3. Interpretación de los resultados de MTR.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="204.1" y="20.0" dominant-baseline="central" text-anchor="middle">Resultado observado en MTR</text>
<text class="tb-ht" x="591.1" y="20.0" dominant-baseline="central" text-anchor="middle">Interpretación posible</text>
<text class="tb-ht" x="987.0" y="20.0" dominant-baseline="central" text-anchor="middle">Consideración</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Pérdida en un salto sin impacto en los saltos</text>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">posteriores ni en el destino</text>
<text class="tb-tx" x="420.1" y="60.8" dominant-baseline="central">Respuesta ICMP limitada o depriorizada</text>
<text class="tb-tx" x="420.1" y="83.5" dominant-baseline="central">por el router intermedio.</text>
<text class="tb-tx" x="786.0" y="72.1" dominant-baseline="central">No demuestra pérdida real de tráfico de tránsito.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">Pérdida que continúa en los saltos posteriores</text>
<text class="tb-tx tb-b" x="12.0" y="147.0" dominant-baseline="central">y en el destino</text>
<text class="tb-tx" x="420.1" y="124.2" dominant-baseline="central">Posible congestión, fallo o pérdida real en</text>
<text class="tb-tx" x="420.1" y="147.0" dominant-baseline="central">el camino.</text>
<text class="tb-tx" x="786.0" y="124.2" dominant-baseline="central">Debe contrastarse con pruebas adicionales y</text>
<text class="tb-tx" x="786.0" y="147.0" dominant-baseline="central">mediciones de extremo a extremo.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">Latencia elevada en un salto, sin incremento en</text>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">los siguientes</text>
<text class="tb-tx" x="420.1" y="187.8" dominant-baseline="central">Posible demora en la respuesta ICMP del</text>
<text class="tb-tx" x="420.1" y="210.5" dominant-baseline="central">propio router.</text>
<text class="tb-tx" x="786.0" y="199.1" dominant-baseline="central">No demuestra por sí sola un cuello de botella.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">Latencia que aumenta y se mantiene en los</text>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">saltos posteriores y en el destino</text>
<text class="tb-tx" x="420.1" y="251.2" dominant-baseline="central">Posible congestión o demora en el tramo</text>
<text class="tb-tx" x="420.1" y="274.0" dominant-baseline="central">correspondiente.</text>
<text class="tb-tx" x="786.0" y="251.2" dominant-baseline="central">Debe comprobarse mediante pruebas repetidas y</text>
<text class="tb-tx" x="786.0" y="274.0" dominant-baseline="central">métricas adicionales.</text>
<text class="tb-cap" x="600.0" y="320.8" text-anchor="middle">Tabla 13.3. Interpretación de los resultados de MTR.</text></svg>
</div>

### Ventaja principal

Permite un análisis temporal continuo, a diferencia del *traceroute* estático.

## 13.3 WIRESHARK

*Wireshark* es un analizador de protocolos de red que captura y examina paquetes en tiempo real o desde archivos *pcap*. Permite una inspección detallada por capas OSI.

### Capacidades

- Captura en vivo de tráfico de red.
- Filtros de visualización (por ejemplo, `ip.src == 192.168.1.1` o `tcp.port == 443`).
- Decodificación de protocolos.
- Seguimiento de flujos TCP/UDP.
- Estadísticas de tráfico y conversaciones.

### Aplicaciones

- Diagnóstico de retransmisiones TCP, pérdidas y errores.
- Análisis de seguridad (escaneo, DNS anómalo, tráfico sospechoso).
- Depuración de aplicaciones.
- Estudio de protocolos.

### Limitaciones

- La captura de tráfico requiere privilegios suficientes; el análisis de archivos de captura puede realizarse como usuario normal.
- Puede perder paquetes en redes de alto tráfico.
- Existe riesgo de exposición de datos sensibles sin cifrar.

La captura y el análisis de tráfico con *Wireshark*, incluyendo filtros y decodificación por protocolo, se representa en el **Anexo VII.**

## 13.4 TCPDUMP

*Tcpdump* es una herramienta de captura de paquetes en línea de comandos basada en *libpcap*.

Permite una captura eficiente en sistemas sin interfaz gráfica, y los archivos *.pcap* generados pueden analizarse posteriormente en *Wireshark*.

<div class="diagram tabla-svg" id="tabla-13-4" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 333" role="img" aria-labelledby="t66-title"><title id="t66-title">Tabla 13.4. Opciones principales de tcpdump.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="103.0" y="20.0" dominant-baseline="central" text-anchor="middle">Opción</text>
<text class="tb-ht" x="562.6" y="20.0" dominant-baseline="central" text-anchor="middle">Función</text>
<text class="tb-ht" x="1059.7" y="20.0" dominant-baseline="central" text-anchor="middle">Ejemplo</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">-i</text>
<text class="tb-tx" x="218.0" y="60.8" dominant-baseline="central">Define el intervalo entre paquetes de captura.</text>
<text class="tb-tx" x="931.3" y="60.8" dominant-baseline="central">-i eth0</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">-n</text>
<text class="tb-tx" x="218.0" y="101.5" dominant-baseline="central">Evita la resolución de nombres DNS.</text>
<text class="tb-tx" x="931.3" y="101.5" dominant-baseline="central">-n</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">-r</text>
<text class="tb-tx" x="218.0" y="142.2" dominant-baseline="central">Lee una captura guardada desde un archivo.</text>
<text class="tb-tx" x="931.3" y="142.2" dominant-baseline="central">-r captura.pcap</text>
<rect class="tb-to" x="0" y="163.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="183.0" dominant-baseline="central">-v, -vv, -vvv</text>
<text class="tb-tx" x="218.0" y="183.0" dominant-baseline="central">Aumenta el nivel de detalle de la salida.</text>
<text class="tb-tx" x="931.3" y="183.0" dominant-baseline="central">-vv</text>
<rect class="tb-te" x="0" y="203.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="223.8" dominant-baseline="central">-w</text>
<text class="tb-tx" x="218.0" y="223.8" dominant-baseline="central">Guarda la captura en un archivo.</text>
<text class="tb-tx" x="931.3" y="223.8" dominant-baseline="central">-w captura.pcap</text>
<rect class="tb-to" x="0" y="244.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="264.5" dominant-baseline="central">-c</text>
<text class="tb-tx" x="218.0" y="264.5" dominant-baseline="central">Limita el número de paquetes capturados.</text>
<text class="tb-tx" x="931.3" y="264.5" dominant-baseline="central">-c 100</text>
<text class="tb-cap" x="600.0" y="311.2" text-anchor="middle">Tabla 13.4. Opciones principales de tcpdump.</text></svg>
</div>

##### Sintaxis

```text
Networking@SecOpsMX:~$ tcpdump -i eth0 -c 1000 -w captura.pcap
Networking@SecOpsMX:~$ tcpdump -i any -n host 8.8.8.8
Networking@SecOpsMX:~$ tcpdump -i eth0 tcp port 443
```

### Opciones

Las opciones de *tcpdump* determinan qué tráfico se captura y cómo se presenta; la Tabla 13.4 resume las principales.

## 13.5 IPERF

*Iperf3* es una herramienta de medición activa de rendimiento de red que evalúa el ancho de banda entre dos puntos.

Opera en modo cliente-servidor, como se representa en la Figura 13.6: el servidor se inicia con `iperf3 -s` y el cliente se conecta con `iperf3 -c`.

<div class="diagram" id="figura-13-06" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1306" viewBox="0 0 1200 402" role="img" aria-labelledby="g1306-title">
<title id="g1306-title">Modelo cliente-servidor de iperf3</title>
<defs><marker id="g1306m003ecc" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#003ecc"/></marker><marker id="g1306n003ecc" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#003ecc"/></marker><marker id="g1306m009254" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#009254"/></marker><marker id="g1306n009254" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#009254"/></marker></defs>
<g id="g1306-c" transform="translate(20 20)"><g transform="translate(120 70) scale(0.9)" data-lib="terminal"><rect x="-38" y="-28" width="76" height="56" rx="5" fill="#ebedf0" stroke="#364e6c" stroke-width="3"/><path d="M-26 -12L-12 0L-26 12" fill="none" stroke="#364e6c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M-4 12h22" stroke="#364e6c" stroke-width="4" stroke-linecap="round"/></g>
<text x="120" y="125" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cliente</text>
<text x="120" y="144" font-size="10.35pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">iperf3 -c</text>
<g transform="translate(1040 70) scale(0.9)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<text x="1040" y="125" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Servidor</text>
<text x="1040" y="144" font-size="10.35pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">iperf3 -s</text>
<polyline points="200,62 960,62" fill="none" stroke="#003ecc" stroke-width="4" marker-end="url(#g1306m003ecc)"/>
<text x="580" y="46" font-size="11.35pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Flujo de prueba (TCP o UDP)</text>
<polyline points="960,98 200,98" fill="none" stroke="#009254" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#g1306m009254)"/>
<text x="580" y="122" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">Resultados de la medición</text>
<rect x="160" y="180" width="400" height="150" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="160" y1="214" x2="560" y2="214" stroke="#003ecc" stroke-width="1.5"/>
<text x="360" y="203" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Métricas con TCP</text>
<text x="360" y="257.56" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Rendimiento (throughput)</text>
<text x="360" y="276.56" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Retransmisiones</text>
<text x="360" y="295.56" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">RTT estimado</text>
<rect x="600" y="180" width="400" height="150" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="600" y1="214" x2="1000" y2="214" stroke="#7c3aed" stroke-width="1.5"/>
<text x="800" y="203" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Métricas con UDP</text>
<text x="800" y="257.56" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Rendimiento (throughput)</text>
<text x="800" y="276.56" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Pérdida de paquetes</text>
<text x="800" y="295.56" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Jitter</text></g><text x="600" y="384" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 13.6. Modelo cliente-servidor de iperf3.</text></svg>
</div>

### Parámetros

Los parámetros de *iperf3* definen el rol de cada extremo y las condiciones de la prueba (servidor o cliente, protocolo, ancho de banda objetivo, duración y flujos paralelos); la Tabla 13.5 los resume.

<div class="diagram tabla-svg" id="tabla-13-5" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 415" role="img" aria-labelledby="t67-title"><title id="t67-title">Tabla 13.5. Parámetros principales de iperf3.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="94.4" y="20.0" dominant-baseline="central" text-anchor="middle">Parámetro</text>
<text class="tb-ht" x="539.5" y="20.0" dominant-baseline="central" text-anchor="middle">Función</text>
<text class="tb-ht" x="1045.1" y="20.0" dominant-baseline="central" text-anchor="middle">Ejemplo</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">-s</text>
<text class="tb-tx" x="200.7" y="60.8" dominant-baseline="central">Inicia iperf3 en modo servidor.</text>
<text class="tb-tx" x="902.2" y="60.8" dominant-baseline="central">iperf3 -s</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">-c</text>
<text class="tb-tx" x="200.7" y="101.5" dominant-baseline="central">Inicia una prueba como cliente hacia un servidor.</text>
<text class="tb-tx" x="902.2" y="101.5" dominant-baseline="central">iperf3 -c 192.168.1.10</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">-u</text>
<text class="tb-tx" x="200.7" y="142.2" dominant-baseline="central">Utiliza UDP en lugar de TCP.</text>
<text class="tb-tx" x="902.2" y="142.2" dominant-baseline="central">-u</text>
<rect class="tb-to" x="0" y="163.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="183.0" dominant-baseline="central">-b</text>
<text class="tb-tx" x="200.7" y="183.0" dominant-baseline="central">Define la tasa objetivo de transmisión UDP.</text>
<text class="tb-tx" x="902.2" y="183.0" dominant-baseline="central">-b 100M</text>
<rect class="tb-te" x="0" y="203.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="223.8" dominant-baseline="central">-t</text>
<text class="tb-tx" x="200.7" y="223.8" dominant-baseline="central">Define la duración de la prueba en segundos.</text>
<text class="tb-tx" x="902.2" y="223.8" dominant-baseline="central">-t 30</text>
<rect class="tb-to" x="0" y="244.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="264.5" dominant-baseline="central">-P</text>
<text class="tb-tx" x="200.7" y="264.5" dominant-baseline="central">Establece el número de flujos paralelos.</text>
<text class="tb-tx" x="902.2" y="264.5" dominant-baseline="central">-P 4</text>
<rect class="tb-te" x="0" y="285.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="305.2" dominant-baseline="central">-R</text>
<text class="tb-tx" x="200.7" y="305.2" dominant-baseline="central">Invierte la dirección de la prueba.</text>
<text class="tb-tx" x="902.2" y="305.2" dominant-baseline="central">-R</text>
<rect class="tb-to" x="0" y="326.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="346.0" dominant-baseline="central">-J</text>
<text class="tb-tx" x="200.7" y="346.0" dominant-baseline="central">Entrega la salida en formato JSON.</text>
<text class="tb-tx" x="902.2" y="346.0" dominant-baseline="central">-J</text>
<text class="tb-cap" x="600.0" y="392.8" text-anchor="middle">Tabla 13.5. Parámetros principales de iperf3.</text></svg>
</div>

### Métricas

- TCP: *throughput*, retransmisiones, RTT estimado.
- UDP: pérdida de paquetes, *jitter*, *throughput*.

### Aplicaciones

- Validación de enlaces WAN.
- Pruebas de capacidad real de red.
- Comparación de rutas o tecnologías.

### Limitación

El modo estándar es unidireccional (requiere `--bidir` para pruebas simultáneas).

## 13.6 SIEM

SIEM es una plataforma que centraliza la recolección, normalización, correlación y análisis de eventos de seguridad generados por infraestructura de red, servidores y aplicaciones. Integra funciones de SIM (*Security Information Management*) y de SEM (*Security Event Management*).

### Funcionalidades

- Recolección de *logs* (*syslog*, SNMP, agentes, APIs).
- Normalización de eventos.
- Correlación de patrones de ataque.
- *Dashboards* y visualización.
- Alertas en tiempo real.
- Almacenamiento histórico para auditoría.

### Ejemplos de correlación

Un SIEM aporta valor cuando correlaciona eventos que, por separado, serían inocuos; la Tabla 13.6 presenta ejemplos de esos patrones.

<div class="diagram tabla-svg" id="tabla-13-6" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 343" role="img" aria-labelledby="t68-title"><title id="t68-title">Tabla 13.6. Ejemplos de correlación en un SIEM.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="150.4" y="20.0" dominant-baseline="central" text-anchor="middle">Evento observado</text>
<text class="tb-ht" x="510.7" y="20.0" dominant-baseline="central" text-anchor="middle">Interpretación posible</text>
<text class="tb-ht" x="960.3" y="20.0" dominant-baseline="central" text-anchor="middle">Acción o correlación</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Múltiples intentos fallidos de</text>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">autenticación</text>
<text class="tb-tx" x="312.9" y="60.8" dominant-baseline="central">Posible ataque de fuerza bruta o uso de</text>
<text class="tb-tx" x="312.9" y="83.5" dominant-baseline="central">credenciales incorrectas.</text>
<text class="tb-tx" x="732.5" y="60.8" dominant-baseline="central">Correlacionar origen, usuario, frecuencia y registros del</text>
<text class="tb-tx" x="732.5" y="83.5" dominant-baseline="central">sistema.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Incremento del tráfico ICMP</text>
<text class="tb-tx" x="312.9" y="124.2" dominant-baseline="central">Posible ataque tipo flood o actividad de</text>
<text class="tb-tx" x="312.9" y="147.0" dominant-baseline="central">diagnóstico anómala.</text>
<text class="tb-tx" x="732.5" y="135.6" dominant-baseline="central">Analizar volumen, origen, destino y línea base de tráfico.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Conexiones a dominios maliciosos</text>
<text class="tb-tx" x="312.9" y="199.1" dominant-baseline="central">Posible compromiso de un equipo interno.</text>
<text class="tb-tx" x="732.5" y="187.8" dominant-baseline="central">Correlacionar consultas DNS con listas de amenazas y</text>
<text class="tb-tx" x="732.5" y="210.5" dominant-baseline="central">actividad del endpoint.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">Escaneo de puertos desde un</text>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">mismo origen</text>
<text class="tb-tx" x="312.9" y="262.6" dominant-baseline="central">Posible reconocimiento de servicios.</text>
<text class="tb-tx" x="732.5" y="251.2" dominant-baseline="central">Correlacionar eventos de firewall, IDS/IPS y registros de</text>
<text class="tb-tx" x="732.5" y="274.0" dominant-baseline="central">los sistemas destino.</text>
<text class="tb-cap" x="600.0" y="320.8" text-anchor="middle">Tabla 13.6. Ejemplos de correlación en un SIEM.</text></svg>
</div>

### Limitaciones

- Alta complejidad de configuración.
- Costo elevado.
- Requiere personal especializado.

La arquitectura de un SIEM y su integración con fuentes de red, servidores y aplicaciones se muestra en el **Anexo VIII.**

Nota: los eventos son indicadores que requieren correlación y contexto. Un incremento de ICMP o una conexión a un dominio desconocido no demuestra por sí solo un ataque o compromiso.
