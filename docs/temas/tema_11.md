<p class="tema-num">TEMA 11</p>

# ARQUITECTURA DE RED EMPRESARIAL

La arquitectura de red empresarial define la estructura lógica y física con la que una organización opera, administra y hace crecer sus servicios de red. Su diseño influye de manera directa en el rendimiento, la disponibilidad, la seguridad y la capacidad de crecimiento de la infraestructura.

Los temas anteriores presentan las tecnologías de forma individual. La arquitectura empresarial las integra bajo criterios de disponibilidad, segmentación y seguridad, y es el marco para decidir cómo combinarlas.

Una arquitectura bien diseñada organiza los recursos mediante modelos jerárquicos, segmentación, políticas de seguridad y estrategias de redundancia, para sostener aplicaciones críticas, usuarios distribuidos y servicios corporativos con alta disponibilidad.

Los modelos empresariales actuales suelen adoptar arquitecturas jerárquicas con capas de acceso, distribución y núcleo (*core*), lo que facilita la escalabilidad, simplifica la operación y aísla los fallos. En este tema empezamos por las topologías y los diagramas, vemos después el modelo jerárquico y cerramos con alta disponibilidad, redundancia, segmentación y DMZ (Figura 11.1).

<div class="diagram" id="figura-11-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1101" viewBox="0 0 1200 402" role="img" aria-labelledby="g1101-title">
<title id="g1101-title">Mapa del Tema 11</title>
<defs></defs>
<g id="g1101-c" transform="translate(20 20)"><rect x="0" y="0" width="272" height="153" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="0" y1="34" x2="272" y2="34" stroke="#dd3a00" stroke-width="1.5"/>
<text x="136" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">11.1 Topologías de red</text>
<g transform="translate(136 76.84) scale(0.7)" data-lib="nodes"><g stroke="#dd3a00" stroke-width="3" fill="none"><path d="M0 -22 L-22 14 M0 -22 L22 14 M-22 14 H22"></path></g><circle cx="0" cy="-22" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle><circle cx="-22" cy="14" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle><circle cx="22" cy="14" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle></g>
<text x="136" y="125.45" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Estrella, bus, anillo, malla, árbol y</text>
<text x="136" y="144.45" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">topología lógica</text>
<rect x="296" y="0" width="272" height="153" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="296" y1="34" x2="568" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="432" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">11.2 Diagramas de red</text>
<g transform="translate(432 76.84) scale(0.7)" data-lib="doc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><path d="M-22 -32 H8 L24 -16 V32 H-22 Z"></path><path d="M8 -32 V-16 H24" fill="#e6ecfa"></path><path d="M-12 -4h24M-12 8h24M-12 20h14" stroke-width="3" fill="none" stroke-linecap="round"></path></g></g>
<text x="432" y="125.45" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Físico, lógico, jerárquico y de flujo de</text>
<text x="432" y="144.45" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">datos</text>
<rect x="592" y="0" width="272" height="153" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="592" y1="34" x2="864" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="728" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">11.3 Modelo jerárquico</text>
<g transform="translate(728 76.84) scale(0.7)" data-lib="layers"><path d="M0 2 L34 14 L0 26 L-34 14 Z" fill="#bfcff2" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -12 L34 0 L0 12 L-34 0 Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -26 L34 -14 L0 -2 L-34 -14 Z" fill="#ffffff" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="728" y="134.95" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Acceso, distribución y núcleo</text>
<rect x="888" y="0" width="272" height="153" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="888" y1="34" x2="1160" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="1024" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">11.4 Alta disponibilidad</text>
<g transform="translate(1024 76.84) scale(0.7)" data-lib="gauge"><path d="M-30 18 A30 30 0 1 1 30 18" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><path d="M0 14 L16 -12" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><circle cx="0" cy="14" r="5" fill="#7c3aed"></circle></g>
<text x="1024" y="134.95" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">MTBF, MTTR y principios de diseño</text>
<rect x="148" y="177" width="272" height="153" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="148" y1="211" x2="420" y2="211" stroke="#009254" stroke-width="1.5"/>
<text x="284" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">11.5 Redundancia</text>
<g transform="translate(284 253.84) scale(0.7)" data-lib="sync"><g fill="none" stroke="#009254" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 -4 A26 26 0 0 1 20 -16"></path><path d="M24 4 A26 26 0 0 1 -20 16"></path><path d="M12 -22 L22 -16 L14 -8"></path><path d="M-12 22 L-22 16 L-14 8"></path></g></g>
<text x="284" y="311.95" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Dispositivos, enlaces, rutas y energía</text>
<rect x="444" y="177" width="272" height="153" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="444" y1="211" x2="716" y2="211" stroke="#7c3aed" stroke-width="1.5"/>
<text x="580" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">11.6 Segmentación</text>
<g transform="translate(580 253.84) scale(0.7)" data-lib="funnel"><path d="M-32 -26 H32 L8 4 V28 L-8 20 V4 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="580" y="302.45" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">VLAN, subredes, VRF y</text>
<text x="580" y="321.45" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">microsegmentación</text>
<rect x="740" y="177" width="272" height="153" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="740" y1="211" x2="1012" y2="211" stroke="#d40000" stroke-width="1.5"/>
<text x="876" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">11.7 DMZ</text>
<g transform="translate(876 253.84) scale(0.7)" data-lib="firewall"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><path d="M-36 -9.5H36M-36 9.5H36M-12 -28V-9.5M12 -9.5V9.5M-12 9.5V28" stroke="#d40000" stroke-width="2.5" fill="none"/><rect x="-36" y="-28" width="72" height="18.5" rx="3" fill="#f4bfbf" stroke="#d40000" stroke-width="3"/><path d="M-36 -9.5H36M-12 -28V-9.5M12 -9.5V9.5M-12 9.5V28" stroke="#d40000" stroke-width="2.5" fill="none"/></g>
<text x="876" y="302.45" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Zona intermedia para servicios</text>
<text x="876" y="321.45" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">públicos</text></g><text x="600" y="384" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 11.1. Mapa del Tema 11.</text></svg>
</div>

## 11.1 TOPOLOGÍAS DE RED

La topología de red describe la forma en que los dispositivos y los enlaces se organizan dentro de una infraestructura de comunicaciones. Puede representar tanto la disposición física de los equipos como la manera lógica en que circula el tráfico.

La elección de una topología influye en aspectos como la disponibilidad, la escalabilidad, la tolerancia a fallos, el costo de implementación y la facilidad de administración. La Figura 11.2 muestra las topologías físicas básicas y la Tabla 11.1 compara sus ventajas y limitaciones.

<div class="diagram" id="figura-11-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1102" viewBox="0 0 1200 372" role="img" aria-labelledby="g1102-title">
<title id="g1102-title">Topologías físicas de red</title>
<defs></defs>
<g id="g1102-c" transform="translate(20 20)"><rect x="0" y="0" width="219.2" height="300" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="0" y1="34" x2="219.2" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="109.6" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Estrella</text>
<line x1="109.6" y1="125" x2="109.6" y2="63" stroke="#003ecc" stroke-width="2.5"/>
<line x1="109.6" y1="125" x2="163.29" y2="94" stroke="#003ecc" stroke-width="2.5"/>
<line x1="109.6" y1="125" x2="163.29" y2="156" stroke="#003ecc" stroke-width="2.5"/>
<line x1="109.6" y1="125" x2="109.6" y2="187" stroke="#003ecc" stroke-width="2.5"/>
<line x1="109.6" y1="125" x2="55.91" y2="156" stroke="#003ecc" stroke-width="2.5"/>
<line x1="109.6" y1="125" x2="55.91" y2="94" stroke="#003ecc" stroke-width="2.5"/>
<circle cx="109.6" cy="63" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="2.5"/>
<circle cx="163.29" cy="94" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="2.5"/>
<circle cx="163.29" cy="156" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="2.5"/>
<circle cx="109.6" cy="187" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="2.5"/>
<circle cx="55.91" cy="156" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="2.5"/>
<circle cx="55.91" cy="94" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="2.5"/>
<g transform="translate(109.6 125) scale(0.36)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<text x="109.6" y="236" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Nodo central, normalmente</text>
<text x="109.6" y="255" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">un switch</text>
<rect x="235.2" y="0" width="219.2" height="300" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="235.2" y1="34" x2="454.4" y2="34" stroke="#d40000" stroke-width="1.5"/>
<text x="344.8" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Bus</text>
<line x1="254.8" y1="105" x2="434.8" y2="105" stroke="#364e6c" stroke-width="5"/>
<rect x="251.8" y="93" width="6" height="24" rx="1" fill="#364e6c" stroke="#364e6c" stroke-width="1"/>
<rect x="431.8" y="93" width="6" height="24" rx="1" fill="#364e6c" stroke="#364e6c" stroke-width="1"/>
<line x1="278.8" y1="105" x2="278.8" y2="147" stroke="#d40000" stroke-width="2.5"/>
<circle cx="278.8" cy="159" r="9" fill="#f4bfbf" stroke="#d40000" stroke-width="2.5"/>
<line x1="311.8" y1="105" x2="311.8" y2="147" stroke="#d40000" stroke-width="2.5"/>
<circle cx="311.8" cy="159" r="9" fill="#f4bfbf" stroke="#d40000" stroke-width="2.5"/>
<line x1="344.8" y1="105" x2="344.8" y2="147" stroke="#d40000" stroke-width="2.5"/>
<circle cx="344.8" cy="159" r="9" fill="#f4bfbf" stroke="#d40000" stroke-width="2.5"/>
<line x1="377.8" y1="105" x2="377.8" y2="147" stroke="#d40000" stroke-width="2.5"/>
<circle cx="377.8" cy="159" r="9" fill="#f4bfbf" stroke="#d40000" stroke-width="2.5"/>
<line x1="410.8" y1="105" x2="410.8" y2="147" stroke="#d40000" stroke-width="2.5"/>
<circle cx="410.8" cy="159" r="9" fill="#f4bfbf" stroke="#d40000" stroke-width="2.5"/>
<text x="344.8" y="236" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Medio compartido; obsoleta</text>
<rect x="470.4" y="0" width="219.2" height="300" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="470.4" y1="34" x2="689.6" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="580" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Anillo</text>
<circle cx="580" cy="125" r="56" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
<circle cx="580" cy="69" r="9" fill="#decefa" stroke="#7c3aed" stroke-width="2.5"/>
<circle cx="628.5" cy="97" r="9" fill="#decefa" stroke="#7c3aed" stroke-width="2.5"/>
<circle cx="628.5" cy="153" r="9" fill="#decefa" stroke="#7c3aed" stroke-width="2.5"/>
<circle cx="580" cy="181" r="9" fill="#decefa" stroke="#7c3aed" stroke-width="2.5"/>
<circle cx="531.5" cy="153" r="9" fill="#decefa" stroke="#7c3aed" stroke-width="2.5"/>
<circle cx="531.5" cy="97" r="9" fill="#decefa" stroke="#7c3aed" stroke-width="2.5"/>
<text x="580" y="236" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Circuito cerrado con sentido</text>
<text x="580" y="255" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">de circulación</text>
<rect x="705.6" y="0" width="219.2" height="300" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="705.6" y1="34" x2="924.8" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="815.2" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Malla</text>
<line x1="815.2" y1="65" x2="872.26" y2="106.46" stroke="#003ecc" stroke-width="2.5"/>
<line x1="815.2" y1="65" x2="850.47" y2="173.54" stroke="#003ecc" stroke-width="2.5"/>
<line x1="815.2" y1="65" x2="779.93" y2="173.54" stroke="#003ecc" stroke-width="2.5"/>
<line x1="815.2" y1="65" x2="758.14" y2="106.46" stroke="#003ecc" stroke-width="2.5"/>
<line x1="872.26" y1="106.46" x2="850.47" y2="173.54" stroke="#003ecc" stroke-width="2.5"/>
<line x1="872.26" y1="106.46" x2="779.93" y2="173.54" stroke="#003ecc" stroke-width="2.5"/>
<line x1="872.26" y1="106.46" x2="758.14" y2="106.46" stroke="#003ecc" stroke-width="2.5"/>
<line x1="850.47" y1="173.54" x2="779.93" y2="173.54" stroke="#003ecc" stroke-width="2.5"/>
<line x1="850.47" y1="173.54" x2="758.14" y2="106.46" stroke="#003ecc" stroke-width="2.5"/>
<line x1="779.93" y1="173.54" x2="758.14" y2="106.46" stroke="#003ecc" stroke-width="2.5"/>
<circle cx="815.2" cy="65" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="2.5"/>
<circle cx="872.26" cy="106.46" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="2.5"/>
<circle cx="850.47" cy="173.54" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="2.5"/>
<circle cx="779.93" cy="173.54" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="2.5"/>
<circle cx="758.14" cy="106.46" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="2.5"/>
<text x="815.2" y="236" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Múltiples caminos</text>
<text x="815.2" y="255" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">alternativos</text>
<rect x="940.8" y="0" width="219.2" height="300" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="940.8" y1="34" x2="1160" y2="34" stroke="#dd3a00" stroke-width="1.5"/>
<text x="1050.4" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Árbol</text>
<line x1="1050.4" y1="67" x2="998.4" y2="117" stroke="#dd3a00" stroke-width="2.5"/>
<line x1="1050.4" y1="67" x2="1102.4" y2="117" stroke="#dd3a00" stroke-width="2.5"/>
<line x1="998.4" y1="117" x2="972.4" y2="173" stroke="#dd3a00" stroke-width="2.5"/>
<line x1="998.4" y1="117" x2="1024.4" y2="173" stroke="#dd3a00" stroke-width="2.5"/>
<line x1="1102.4" y1="117" x2="1076.4" y2="173" stroke="#dd3a00" stroke-width="2.5"/>
<line x1="1102.4" y1="117" x2="1128.4" y2="173" stroke="#dd3a00" stroke-width="2.5"/>
<circle cx="972.4" cy="173" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="2.5"/>
<circle cx="1024.4" cy="173" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="2.5"/>
<circle cx="1076.4" cy="173" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="2.5"/>
<circle cx="1128.4" cy="173" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="2.5"/>
<g transform="translate(998.4 117) scale(0.3)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<g transform="translate(1102.4 117) scale(0.3)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<g transform="translate(1050.4 67) scale(0.36)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<text x="1050.4" y="236" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Estrellas organizadas en</text>
<text x="1050.4" y="255" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">jerarquía</text></g><text x="600" y="354" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 11.2. Topologías físicas de red.</text></svg>
</div>

### Topología en estrella

Es la topología predominante en las redes Ethernet modernas. Todos los dispositivos se conectan a un nodo central, normalmente un *switch*, de modo que la falla de un enlace individual solo afecta al equipo conectado a él.

Su principal debilidad es la dependencia del dispositivo central, por lo que suele complementarse con mecanismos de redundancia.

### Topología en bus

Utiliza un único medio compartido al que se conectan todos los dispositivos.

Fue ampliamente utilizada en las primeras implementaciones Ethernet (10BASE2 y 10BASE5), pero actualmente se considera obsoleta debido a su escalabilidad limitada y a que la interrupción del medio afecta a toda la red.

### Topología en anillo

Los dispositivos se conectan formando un circuito cerrado por el que circula el tráfico siguiendo una dirección determinada.

Históricamente fue utilizada en tecnologías como *Token Ring*, FDDI y algunas implementaciones SONET/SDH. Ofrece un acceso ordenado al medio, pero resulta sensible a fallos si no existe redundancia.

### Topología en malla

Cada dispositivo mantiene conexiones con varios nodos vecinos, creando múltiples caminos alternativos para el tráfico. Puede implementarse de dos formas:

- Malla completa: todos los nodos están conectados entre sí.
- Malla parcial: solo algunos nodos mantienen conexiones redundantes.

Es habitual en redes troncales, centros de datos y redes inalámbricas malladas, donde el costo adicional se compensa con la alta disponibilidad.

<div class="diagram" id="figura-11-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1103" viewBox="0 0 1200 402" role="img" aria-labelledby="g1103-title">
<title id="g1103-title">Topología física frente a topología lógica</title>
<defs><marker id="g1103m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1103n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g1103-c" transform="translate(20 20)"><rect x="0" y="0" width="560" height="330" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="560" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="280" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Topología física</text>
<rect x="600" y="0" width="560" height="330" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="600" y1="34" x2="1160" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="880" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Topología lógica</text>
<g transform="translate(280 85) scale(1.0)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<line x1="280" y1="111" x2="55" y2="205" stroke="#d40000" stroke-width="2.5"/>
<g transform="translate(55 232) scale(0.55)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<line x1="280" y1="111" x2="145" y2="205" stroke="#d40000" stroke-width="2.5"/>
<g transform="translate(145 232) scale(0.55)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<line x1="280" y1="111" x2="235" y2="205" stroke="#003ecc" stroke-width="2.5"/>
<g transform="translate(235 232) scale(0.55)" data-lib="pc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6ecfa" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<line x1="280" y1="111" x2="325" y2="205" stroke="#003ecc" stroke-width="2.5"/>
<g transform="translate(325 232) scale(0.55)" data-lib="pc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6ecfa" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<line x1="280" y1="111" x2="415" y2="205" stroke="#009254" stroke-width="2.5"/>
<g transform="translate(415 232) scale(0.55)" data-lib="pc"><g stroke="#009254" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6f4ee" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<line x1="280" y1="111" x2="505" y2="205" stroke="#009254" stroke-width="2.5"/>
<g transform="translate(505 232) scale(0.55)" data-lib="pc"><g stroke="#009254" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6f4ee" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="280" y="292" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Un solo switch y cableado en estrella</text>
<rect x="618" y="62" width="164" height="190" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2" stroke-dasharray="7 5"/>
<text x="700" y="84" font-size="11.35pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">VLAN 10</text>
<text x="700" y="102" font-size="10.35pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Usuarios</text>
<g transform="translate(700 150) scale(0.5)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<g transform="translate(700 212) scale(0.5)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<rect x="798" y="62" width="164" height="190" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2" stroke-dasharray="7 5"/>
<text x="880" y="84" font-size="11.35pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">VLAN 20</text>
<text x="880" y="102" font-size="10.35pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Voz</text>
<g transform="translate(880 150) scale(0.5)" data-lib="pc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6ecfa" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<g transform="translate(880 212) scale(0.5)" data-lib="pc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6ecfa" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<rect x="978" y="62" width="164" height="190" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2" stroke-dasharray="7 5"/>
<text x="1060" y="84" font-size="11.35pt" font-weight="700" fill="#065f46" text-anchor="middle">VLAN 30</text>
<text x="1060" y="102" font-size="10.35pt" font-weight="400" fill="#065f46" text-anchor="middle">Servidores</text>
<g transform="translate(1060 150) scale(0.5)" data-lib="pc"><g stroke="#009254" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6f4ee" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<g transform="translate(1060 212) scale(0.5)" data-lib="pc"><g stroke="#009254" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6f4ee" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="880" y="292" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Tres dominios de broadcast sobre la misma infraestructura</text>
<polyline points="562,165 598,165" fill="none" stroke="#364e6c" stroke-width="2.5" marker-end="url(#g1103m364e6c)"/></g><text x="600" y="384" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 11.3. Topología física frente a topología lógica.</text></svg>
</div>

### Topología en árbol

Organiza la infraestructura mediante una estructura jerárquica formada por múltiples segmentos en estrella.

Esta topología es la base de la mayoría de las redes empresariales actuales y de los modelos jerárquicos de acceso, distribución y núcleo.

### Topología lógica

La topología lógica describe el recorrido que siguen los datos independientemente de la disposición física de los dispositivos. Algunos ejemplos son los dominios de *broadcast* en Ethernet, las redes segmentadas mediante VLAN y los protocolos de paso de testigo como *Token Ring*.

En las redes Ethernet actuales, la topología física suele adoptar estructuras en estrella o árbol, mientras que la topología lógica se organiza mediante VLAN, subredes IP y dominios de difusión controlados. La Figura 11.3 ilustra esta diferencia.

<div class="diagram tabla-svg" id="tabla-11-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 584" role="img" aria-labelledby="t50-title"><title id="t50-title">Tabla 11.1. Comparación de las topologías de red.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="51.5" y="20.0" dominant-baseline="central" text-anchor="middle">Topología</text>
<text class="tb-ht" x="257.1" y="20.0" dominant-baseline="central" text-anchor="middle">Descripción</text>
<text class="tb-ht" x="587.8" y="20.0" dominant-baseline="central" text-anchor="middle">Ventajas</text>
<text class="tb-ht" x="982.1" y="20.0" dominant-baseline="central" text-anchor="middle">Limitaciones</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">Bus</text>
<text class="tb-tx" x="115.0" y="72.1" dominant-baseline="central">Todos los dispositivos comparten</text>
<text class="tb-tx" x="115.0" y="94.9" dominant-baseline="central">un medio de transmisión común.</text>
<text class="tb-tx" x="423.3" y="72.1" dominant-baseline="central">Simplicidad conceptual y bajo costo en</text>
<text class="tb-tx" x="423.3" y="94.9" dominant-baseline="central">diseños históricos.</text>
<text class="tb-tx" x="776.2" y="60.8" dominant-baseline="central">Colisiones y fallos del medio compartido pueden</text>
<text class="tb-tx" x="776.2" y="83.5" dominant-baseline="central">afectar a todo el segmento; no es habitual en</text>
<text class="tb-tx" x="776.2" y="106.2" dominant-baseline="central">Ethernet empresarial actual.</text>
<rect class="tb-to" x="0" y="127.0" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="169.8" dominant-baseline="central">Estrella</text>
<text class="tb-tx" x="115.0" y="147.0" dominant-baseline="central">Los dispositivos se conectan a un</text>
<text class="tb-tx" x="115.0" y="169.8" dominant-baseline="central">nodo central, normalmente un</text>
<text class="tb-tx" x="115.0" y="192.5" dominant-baseline="central">switch.</text>
<text class="tb-tx" x="423.3" y="147.0" dominant-baseline="central">Administración sencilla, aislamiento de</text>
<text class="tb-tx" x="423.3" y="169.8" dominant-baseline="central">fallos de enlaces individuales y facilidad</text>
<text class="tb-tx" x="423.3" y="192.5" dominant-baseline="central">de expansión.</text>
<text class="tb-tx" x="776.2" y="158.4" dominant-baseline="central">Dependencia del dispositivo central si no existe</text>
<text class="tb-tx" x="776.2" y="181.1" dominant-baseline="central">redundancia.</text>
<rect class="tb-te" x="0" y="213.2" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="256.0" dominant-baseline="central">Anillo</text>
<text class="tb-tx" x="115.0" y="244.6" dominant-baseline="central">Los nodos se conectan formando</text>
<text class="tb-tx" x="115.0" y="267.4" dominant-baseline="central">un circuito cerrado.</text>
<text class="tb-tx" x="423.3" y="233.2" dominant-baseline="central">Puede proporcionar caminos alternativos</text>
<text class="tb-tx" x="423.3" y="256.0" dominant-baseline="central">y recuperación ante fallos según el</text>
<text class="tb-tx" x="423.3" y="278.8" dominant-baseline="central">protocolo.</text>
<text class="tb-tx" x="776.2" y="233.2" dominant-baseline="central">Requiere mecanismos de control del anillo; se</text>
<text class="tb-tx" x="776.2" y="256.0" dominant-baseline="central">utiliza en tecnologías específicas y redes de</text>
<text class="tb-tx" x="776.2" y="278.8" dominant-baseline="central">transporte.</text>
<rect class="tb-to" x="0" y="299.5" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="342.2" dominant-baseline="central">Malla</text>
<text class="tb-tx" x="115.0" y="319.5" dominant-baseline="central">Los nodos mantienen múltiples</text>
<text class="tb-tx" x="115.0" y="342.2" dominant-baseline="central">conexiones; puede ser completa o</text>
<text class="tb-tx" x="115.0" y="365.0" dominant-baseline="central">parcial.</text>
<text class="tb-tx" x="423.3" y="330.9" dominant-baseline="central">Alta disponibilidad y múltiples rutas de</text>
<text class="tb-tx" x="423.3" y="353.6" dominant-baseline="central">respaldo.</text>
<text class="tb-tx" x="776.2" y="330.9" dominant-baseline="central">Mayor complejidad de diseño y costo de</text>
<text class="tb-tx" x="776.2" y="353.6" dominant-baseline="central">infraestructura.</text>
<rect class="tb-te" x="0" y="385.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="417.1" dominant-baseline="central">Árbol</text>
<text class="tb-tx" x="115.0" y="405.8" dominant-baseline="central">Segmentos en estrella organizados</text>
<text class="tb-tx" x="115.0" y="428.5" dominant-baseline="central">en una estructura jerárquica.</text>
<text class="tb-tx" x="423.3" y="417.1" dominant-baseline="central">Escalabilidad y segmentación eficiente.</text>
<text class="tb-tx" x="776.2" y="405.8" dominant-baseline="central">Dependencia de los niveles superiores; requiere</text>
<text class="tb-tx" x="776.2" y="428.5" dominant-baseline="central">planificación.</text>
<rect class="tb-to" x="0" y="449.2" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="492.0" dominant-baseline="central">Híbrida</text>
<text class="tb-tx" x="115.0" y="469.2" dominant-baseline="central">Combina dos o más topologías</text>
<text class="tb-tx" x="115.0" y="492.0" dominant-baseline="central">según las necesidades de la</text>
<text class="tb-tx" x="115.0" y="514.8" dominant-baseline="central">infraestructura.</text>
<text class="tb-tx" x="423.3" y="480.6" dominant-baseline="central">Flexibilidad y adaptación a distintos</text>
<text class="tb-tx" x="423.3" y="503.4" dominant-baseline="central">entornos.</text>
<text class="tb-tx" x="776.2" y="492.0" dominant-baseline="central">Mayor complejidad de diseño y operación.</text>
<text class="tb-cap" x="600.0" y="561.5" text-anchor="middle">Tabla 11.1. Comparación de las topologías de red.</text></svg>
</div>

Nota: SONET/SDH utiliza arquitecturas de anillo de transporte para resiliencia; no debe confundirse con una topología de LAN Ethernet. Las topologías de bus y anillo se presentan principalmente como modelos históricos o de aplicación específica.

Elegir bien la topología es uno de los primeros pasos del diseño de red: condiciona la disponibilidad, el rendimiento y la capacidad de crecimiento. Con esa base, pasamos a ver cómo se documenta una arquitectura.

## 11.2 DIAGRAMAS DE RED

Los diagramas de red son la herramienta con la que se documenta, diseña, opera y mantiene una infraestructura de comunicaciones. Representan de forma visual la relación entre dispositivos, enlaces, servicios y dominios de red, y hacen más fácil entender arquitecturas complejas.

La documentación gráfica reduce los tiempos de resolución de incidencias, simplifica los procesos de expansión y proporciona una referencia común para administradores, ingenieros y equipos de soporte. La Figura 11.4 presenta los tipos de diagramas que se describen a continuación.

### Diagrama físico

Representa la disposición real de los componentes dentro de la infraestructura. Resulta especialmente útil durante tareas de instalación, mantenimiento y reemplazo de equipos, y normalmente incluye *racks*, centros de datos, salas de comunicaciones, equipos físicos, puertos utilizados y tipos de cableado.

### Diagrama lógico

Describe la organización funcional de la red independientemente de la ubicación física de los dispositivos. Es el formato más utilizado durante labores de diseño, configuración y resolución de problemas, y suele incluir direccionamiento IP, subredes, VLAN, protocolos de enrutamiento, relaciones de vecindad, resúmenes de rutas y segmentación de servicios.

### Diagrama de arquitectura jerárquica

Facilita la comprensión global de la arquitectura empresarial al representar la red mediante capas funcionales: acceso, distribución y núcleo (*core*), junto con los enlaces redundantes y las conexiones troncales.

### Diagrama de flujo de datos

Muestra el recorrido que sigue la información entre usuarios, aplicaciones y sistemas; por ejemplo: cliente → *firewall* → balanceador → servidor web → base de datos.

Estos diagramas son especialmente útiles para el diseño de seguridad, el análisis de rendimiento, la identificación de dependencias y la evaluación de riesgos. La Tabla 11.2 resume el contenido y el uso de cada tipo.

<div class="diagram" id="figura-11-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1104" viewBox="0 0 1200 322" role="img" aria-labelledby="g1104-title">
<title id="g1104-title">Tipos de diagramas de red</title>
<defs></defs>
<g id="g1104-c" transform="translate(20 20)"><rect x="0" y="0" width="272" height="250" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="0" y1="34" x2="272" y2="34" stroke="#d40000" stroke-width="1.5"/>
<text x="136" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Diagrama físico</text>
<g transform="translate(136 111.76) scale(0.95)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<text x="136" y="204.02" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Racks, salas, puertos y tipos de</text>
<text x="136" y="223.02" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">cableado</text>
<rect x="296" y="0" width="272" height="250" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="296" y1="34" x2="568" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="432" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Diagrama lógico</text>
<g transform="translate(432 111.76) scale(0.95)" data-lib="nodes"><g stroke="#003ecc" stroke-width="3" fill="none"><path d="M0 -22 L-22 14 M0 -22 L22 14 M-22 14 H22"></path></g><circle cx="0" cy="-22" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="3"></circle><circle cx="-22" cy="14" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="3"></circle><circle cx="22" cy="14" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="3"></circle></g>
<text x="432" y="204.02" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">IP, subredes, VLAN y protocolos de</text>
<text x="432" y="223.02" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">enrutamiento</text>
<rect x="592" y="0" width="272" height="250" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="592" y1="34" x2="864" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="728" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Diagrama jerárquico</text>
<g transform="translate(728 111.76) scale(0.95)" data-lib="layers"><path d="M0 2 L34 14 L0 26 L-34 14 Z" fill="#bfe4d4" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -12 L34 0 L0 12 L-34 0 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -26 L34 -14 L0 -2 L-34 -14 Z" fill="#ffffff" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="728" y="204.02" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Capas de acceso, distribución y</text>
<text x="728" y="223.02" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">núcleo</text>
<rect x="888" y="0" width="272" height="250" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="888" y1="34" x2="1160" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="1024" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Diagrama de flujo de datos</text>
<g transform="translate(1024 111.76) scale(0.95)" data-lib="fork"><g fill="none" stroke="#7c3aed" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-30 0 H-6 L20 -18 M-6 0 L20 18"></path><path d="M12 -26 L22 -18 L12 -10 M12 10 L22 18 L12 26"></path></g><circle cx="-30" cy="0" r="5" fill="#7c3aed"></circle></g>
<text x="1024" y="204.02" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Recorrido entre usuarios,</text>
<text x="1024" y="223.02" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">aplicaciones y sistemas</text></g><text x="600" y="304" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 11.4. Tipos de diagramas de red.</text></svg>
</div>

Como elementos básicos, los diagramas de red suelen incluir *routers*, *switches*, *firewalls*, balanceadores de carga, servidores, equipos cliente, enlaces WAN, conexiones VPN, VLAN, direcciones IP, protocolos de enrutamiento y mecanismos de alta disponibilidad, aunque estos pueden variar según las necesidades de cada diagrama.

También es habitual incorporar información complementaria, como números de puerto, identificadores de VLAN, *gateways*, rutas por defecto y protocolos de redundancia como HSRP o VRRP.

### Herramientas de diagramación

Entre las herramientas más utilizadas se encuentran:

- Microsoft Visio.
- draw.io (diagrams.net).
- Lucidchart.
- LibreOffice Draw.
- SolarWinds Network Topology Mapper.

Usar simbología estandarizada y convenciones consistentes mejora la claridad de la documentación y facilita mantenerla en el tiempo.

<div class="diagram tabla-svg" id="tabla-11-2" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 366" role="img" aria-labelledby="t51-title"><title id="t51-title">Tabla 11.2. Tipos de diagramas de red.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="63.5"/>
<text class="tb-ht" x="68.8" y="20.0" dominant-baseline="central" text-anchor="middle">Tipo de</text>
<text class="tb-ht" x="68.8" y="42.8" dominant-baseline="central" text-anchor="middle">diagrama</text>
<text class="tb-ht" x="334.8" y="31.4" dominant-baseline="central" text-anchor="middle">Descripción</text>
<text class="tb-ht" x="688.3" y="31.4" dominant-baseline="central" text-anchor="middle">Elementos representados</text>
<text class="tb-ht" x="1022.2" y="31.4" dominant-baseline="central" text-anchor="middle">Aplicación</text>
<rect class="tb-te" x="0" y="63.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="94.9" dominant-baseline="central">Físico</text>
<text class="tb-tx" x="149.5" y="83.5" dominant-baseline="central">Representa la disposición física de los</text>
<text class="tb-tx" x="149.5" y="106.2" dominant-baseline="central">componentes y sus conexiones.</text>
<text class="tb-tx" x="544.2" y="83.5" dominant-baseline="central">Racks, switches, routers, cableado,</text>
<text class="tb-tx" x="544.2" y="106.2" dominant-baseline="central">paneles y enlaces.</text>
<text class="tb-tx" x="856.4" y="83.5" dominant-baseline="central">Instalación, mantenimiento y</text>
<text class="tb-tx" x="856.4" y="106.2" dominant-baseline="central">documentación física.</text>
<rect class="tb-to" x="0" y="127.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="158.4" dominant-baseline="central">Lógico</text>
<text class="tb-tx" x="149.5" y="147.0" dominant-baseline="central">Representa la organización lógica de la red y</text>
<text class="tb-tx" x="149.5" y="169.8" dominant-baseline="central">la comunicación entre segmentos.</text>
<text class="tb-tx" x="544.2" y="147.0" dominant-baseline="central">VLAN, subredes, routing, dominios</text>
<text class="tb-tx" x="544.2" y="169.8" dominant-baseline="central">de broadcast y políticas.</text>
<text class="tb-tx" x="856.4" y="147.0" dominant-baseline="central">Diseño, segmentación y resolución de</text>
<text class="tb-tx" x="856.4" y="169.8" dominant-baseline="central">incidencias.</text>
<rect class="tb-te" x="0" y="190.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="221.9" dominant-baseline="central">Topológico</text>
<text class="tb-tx" x="149.5" y="210.5" dominant-baseline="central">Muestra las relaciones y conexiones entre los</text>
<text class="tb-tx" x="149.5" y="233.2" dominant-baseline="central">nodos.</text>
<text class="tb-tx" x="544.2" y="210.5" dominant-baseline="central">Dispositivos, enlaces, redundancia y</text>
<text class="tb-tx" x="544.2" y="233.2" dominant-baseline="central">jerarquía.</text>
<text class="tb-tx" x="856.4" y="221.9" dominant-baseline="central">Análisis de conectividad y disponibilidad.</text>
<rect class="tb-to" x="0" y="254.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">Flujo de</text>
<text class="tb-tx tb-b" x="12.0" y="296.8" dominant-baseline="central">datos</text>
<text class="tb-tx" x="149.5" y="274.0" dominant-baseline="central">Representa el recorrido de la información</text>
<text class="tb-tx" x="149.5" y="296.8" dominant-baseline="central">entre usuarios, aplicaciones y sistemas.</text>
<text class="tb-tx" x="544.2" y="274.0" dominant-baseline="central">Cliente, firewall, balanceador,</text>
<text class="tb-tx" x="544.2" y="296.8" dominant-baseline="central">servidor web y base de datos.</text>
<text class="tb-tx" x="856.4" y="274.0" dominant-baseline="central">Diseño de seguridad, análisis de</text>
<text class="tb-tx" x="856.4" y="296.8" dominant-baseline="central">rendimiento, dependencias y riesgos.</text>
<text class="tb-cap" x="600.0" y="343.5" text-anchor="middle">Tabla 11.2. Tipos de diagramas de red.</text></svg>
</div>

Un diagrama actualizado permite entender la infraestructura de un vistazo y reduce el tiempo necesario para implementar cambios o resolver incidencias.

## 11.3 MODELO JERÁRQUICO

El modelo jerárquico es una de las arquitecturas más utilizadas en redes empresariales porque simplifica el diseño, favorece la escalabilidad y reduce el esfuerzo de administración.

Su principio es dividir la infraestructura en capas funcionales con responsabilidades bien definidas. Así se optimiza el rendimiento, se aíslan los problemas, se aplican las políticas de forma ordenada y la red puede crecer sin perder estabilidad.

La arquitectura clásica se compone de tres capas: acceso, distribución y núcleo (*core*). La Figura 11.5 representa el modelo y la Tabla 11.3 resume las funciones de cada capa.

<div class="diagram" id="figura-11-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1105" viewBox="0 0 1200 632" role="img" aria-labelledby="g1105-title">
<title id="g1105-title">Modelo jerárquico de tres capas</title>
<defs></defs>
<g id="g1105-c" transform="translate(20 20)"><rect x="0" y="0" width="1160" height="128" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2" stroke-dasharray="7 5"/>
<rect x="14" y="14" width="250" height="100" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="14" y1="46" x2="264" y2="46" stroke="#7c3aed" stroke-width="1.5"/>
<text x="139" y="37" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Núcleo (core)</text>
<text x="139" y="75.06" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Transporte de alta velocidad y</text>
<text x="139" y="94.06" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">baja latencia</text>
<rect x="0" y="160" width="1160" height="128" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2" stroke-dasharray="7 5"/>
<rect x="14" y="174" width="250" height="100" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="14" y1="206" x2="264" y2="206" stroke="#003ecc" stroke-width="1.5"/>
<text x="139" y="197" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Distribución</text>
<text x="139" y="235.06" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Enrutamiento entre VLAN, ACL,</text>
<text x="139" y="254.06" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">QoS y redundancia</text>
<rect x="0" y="320" width="1160" height="128" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2" stroke-dasharray="7 5"/>
<rect x="14" y="334" width="250" height="100" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="14" y1="366" x2="264" y2="366" stroke="#009254" stroke-width="1.5"/>
<text x="139" y="357" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Acceso</text>
<text x="139" y="395.06" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Conexión de usuarios, VLAN, Port</text>
<text x="139" y="414.06" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Security y PoE</text>
<line x1="520" y1="64" x2="520" y2="224" stroke="#364e6c" stroke-width="2.5"/>
<line x1="520" y1="64" x2="800" y2="224" stroke="#364e6c" stroke-width="2.5"/>
<line x1="800" y1="64" x2="520" y2="224" stroke="#364e6c" stroke-width="2.5"/>
<line x1="800" y1="64" x2="800" y2="224" stroke="#364e6c" stroke-width="2.5"/>
<line x1="520" y1="64" x2="800" y2="64" stroke="#364e6c" stroke-width="2.5"/>
<line x1="520" y1="224" x2="800" y2="224" stroke="#364e6c" stroke-width="2.5"/>
<line x1="520" y1="224" x2="400" y2="384" stroke="#364e6c" stroke-width="2"/>
<line x1="520" y1="224" x2="580" y2="384" stroke="#364e6c" stroke-width="2"/>
<line x1="520" y1="224" x2="760" y2="384" stroke="#364e6c" stroke-width="2"/>
<line x1="520" y1="224" x2="940" y2="384" stroke="#364e6c" stroke-width="2"/>
<line x1="800" y1="224" x2="400" y2="384" stroke="#364e6c" stroke-width="2"/>
<line x1="800" y1="224" x2="580" y2="384" stroke="#364e6c" stroke-width="2"/>
<line x1="800" y1="224" x2="760" y2="384" stroke="#364e6c" stroke-width="2"/>
<line x1="800" y1="224" x2="940" y2="384" stroke="#364e6c" stroke-width="2"/>
<g transform="translate(520 64) scale(0.85)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<g transform="translate(800 64) scale(0.85)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<g transform="translate(520 224) scale(0.9)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#003ecc"/><circle cx="-24" cy="-15" r="2.5" fill="#003ecc"/><circle cx="-4" cy="-15" r="2.5" fill="#003ecc"/><circle cx="16" cy="-15" r="2.5" fill="#003ecc"/><circle cx="36" cy="-15" r="2.5" fill="#003ecc"/></g>
<g transform="translate(800 224) scale(0.9)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#003ecc"/><circle cx="-24" cy="-15" r="2.5" fill="#003ecc"/><circle cx="-4" cy="-15" r="2.5" fill="#003ecc"/><circle cx="16" cy="-15" r="2.5" fill="#003ecc"/><circle cx="36" cy="-15" r="2.5" fill="#003ecc"/></g>
<g transform="translate(400 384) scale(0.8)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<g transform="translate(580 384) scale(0.8)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<g transform="translate(760 384) scale(0.8)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<g transform="translate(940 384) scale(0.8)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<line x1="400" y1="410" x2="400" y2="452" stroke="#364e6c" stroke-width="2"/>
<g transform="translate(400 484) scale(0.7)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="400" y="535" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Estaciones</text>
<line x1="580" y1="410" x2="580" y2="452" stroke="#364e6c" stroke-width="2"/>
<g transform="translate(580 484) scale(0.7)" data-lib="phone"><rect x="-17" y="-32" width="34" height="64" rx="6" fill="#ffffff" stroke="#7c3aed" stroke-width="3"/><rect x="-12" y="-24" width="24" height="42" rx="2" fill="#f2ebfd"/><circle cx="0" cy="25" r="3" fill="#7c3aed"/></g>
<text x="580" y="535" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Teléfonos IP</text>
<line x1="760" y1="410" x2="760" y2="452" stroke="#364e6c" stroke-width="2"/>
<g transform="translate(760 484) scale(0.7)" data-lib="wifi"><g fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"><path d="M-26 -8A38 38 0 0 1 26 -8"/><path d="M-16 4A24 24 0 0 1 16 4"/></g><circle cx="0" cy="18" r="5.5" fill="#7c3aed"/></g>
<text x="760" y="535" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Puntos de acceso</text>
<line x1="940" y1="410" x2="940" y2="452" stroke="#364e6c" stroke-width="2"/>
<g transform="translate(940 484) scale(0.7)" data-lib="camera"><rect x="-32" y="-18" width="64" height="40" rx="5" fill="#fbe6e6" stroke="#d40000" stroke-width="3"/><circle cx="0" cy="2" r="12" fill="#ffffff" stroke="#d40000" stroke-width="3"/><path d="M-12 -18l4 -8h16l4 8" fill="none" stroke="#d40000" stroke-width="3" stroke-linejoin="round"/></g>
<text x="940" y="535" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cámaras e IoT</text></g><text x="600" y="614" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 11.5. Modelo jerárquico de tres capas.</text></svg>
</div>

### Capa de acceso

Es la capa más cercana a los dispositivos finales y el punto de entrada de usuarios, estaciones de trabajo, teléfonos IP, impresoras, cámaras y dispositivos IoT.

Sus principales funciones son:

- Proporcionar conectividad a los dispositivos finales.
- Implementar VLAN para segmentación de usuarios y servicios.
- Aplicar mecanismos básicos de seguridad como *Port Security* y 802.1X.
- Suministrar alimentación mediante PoE cuando sea necesario.

En esta capa predominan los *switches* de acceso con alta densidad de puertos y capacidades de administración local.

### Capa de distribución

Actúa como punto de agregación para múltiples *switches* de acceso y representa el límite habitual entre las funciones de capa 2 y capa 3.

Sus responsabilidades incluyen:

- Enrutamiento entre VLAN.
- Aplicación de listas de control de acceso (ACL).
- Implementación de políticas de calidad de servicio (QoS).
- Agregación de enlaces troncales.
- Implementación de mecanismos de redundancia como HSRP, VRRP o GLBP.
- Control y limitación de dominios de *broadcast*.

Esto explica que la capa de distribución concentre buena parte de las decisiones de control de tráfico y de aplicación de políticas corporativas.

<div class="diagram tabla-svg" id="tabla-11-3" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 279" role="img" aria-labelledby="t52-title"><title id="t52-title">Tabla 11.3. Funciones de las capas del modelo jerárquico.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="63.1" y="20.0" dominant-baseline="central" text-anchor="middle">Capa</text>
<text class="tb-ht" x="290.9" y="20.0" dominant-baseline="central" text-anchor="middle">Función principal</text>
<text class="tb-ht" x="651.1" y="20.0" dominant-baseline="central" text-anchor="middle">Características</text>
<text class="tb-ht" x="1023.4" y="20.0" dominant-baseline="central" text-anchor="middle">Aplicación</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Acceso</text>
<text class="tb-tx" x="138.2" y="60.8" dominant-baseline="central">Conectar dispositivos finales a la</text>
<text class="tb-tx" x="138.2" y="83.5" dominant-baseline="central">infraestructura de red.</text>
<text class="tb-tx" x="467.5" y="60.8" dominant-baseline="central">Puertos de acceso, VLAN, PoE, seguridad de</text>
<text class="tb-tx" x="467.5" y="83.5" dominant-baseline="central">puertos y conectividad inalámbrica.</text>
<text class="tb-tx" x="858.7" y="60.8" dominant-baseline="central">Usuarios, teléfonos IP, impresoras y</text>
<text class="tb-tx" x="858.7" y="83.5" dominant-baseline="central">dispositivos IoT.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Distribución</text>
<text class="tb-tx" x="138.2" y="124.2" dominant-baseline="central">Agregar el tráfico de las capas de</text>
<text class="tb-tx" x="138.2" y="147.0" dominant-baseline="central">acceso y aplicar políticas de red.</text>
<text class="tb-tx" x="467.5" y="124.2" dominant-baseline="central">Routing, filtrado, segmentación, redundancia</text>
<text class="tb-tx" x="467.5" y="147.0" dominant-baseline="central">y control de broadcast.</text>
<text class="tb-tx" x="858.7" y="124.2" dominant-baseline="central">Interconexión de bloques de acceso y</text>
<text class="tb-tx" x="858.7" y="147.0" dominant-baseline="central">aplicación de políticas corporativas.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">Núcleo</text>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">(core)</text>
<text class="tb-tx" x="138.2" y="187.8" dominant-baseline="central">Transportar grandes volúmenes de</text>
<text class="tb-tx" x="138.2" y="210.5" dominant-baseline="central">tráfico con baja latencia.</text>
<text class="tb-tx" x="467.5" y="187.8" dominant-baseline="central">Conmutación y enrutamiento de alta</text>
<text class="tb-tx" x="467.5" y="210.5" dominant-baseline="central">velocidad, redundancia y convergencia rápida.</text>
<text class="tb-tx" x="858.7" y="199.1" dominant-baseline="central">Backbone de redes empresariales.</text>
<text class="tb-cap" x="600.0" y="257.2" text-anchor="middle">Tabla 11.3. Funciones de las capas del modelo jerárquico.</text></svg>
</div>

Nota: el modelo de tres capas es una arquitectura de referencia. Algunas redes utilizan diseños de núcleo-distribución colapsados, capa 3 en acceso u otras variantes según escala y requisitos.

### Capa de núcleo

El núcleo es la columna vertebral de la red empresarial y está diseñado para transportar grandes volúmenes de tráfico con la menor latencia posible.

Su objetivo es ofrecer conectividad rápida, confiable y de alta disponibilidad entre las distintas áreas de la infraestructura.

Las características habituales del núcleo incluyen:

- Enrutamiento y conmutación de alta velocidad.
- Baja latencia.
- Alta capacidad de procesamiento.
- Redundancia de dispositivos y enlaces.
- Convergencia rápida ante fallos.

A diferencia de la capa de distribución, el núcleo debe mantenerse lo más simple posible, evitando funciones que puedan introducir procesamiento adicional o afectar el rendimiento.

### Beneficios del modelo jerárquico

- Escalabilidad mediante crecimiento modular.
- Mejor aislamiento de incidencias.
- Mayor disponibilidad mediante redundancia por capas.
- Implementación consistente de políticas de seguridad.
- Optimización del rendimiento de la infraestructura.

<div class="diagram" id="figura-11-06" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1106" viewBox="0 0 1200 492" role="img" aria-labelledby="g1106-title">
<title id="g1106-title">Núcleo colapsado y arquitectura spine-leaf</title>
<defs></defs>
<g id="g1106-c" transform="translate(20 20)"><rect x="0" y="0" width="560" height="420" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="560" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="280" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Campus con núcleo colapsado</text>
<rect x="600" y="0" width="560" height="420" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="600" y1="34" x2="1160" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="880" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Centro de datos spine-leaf</text>
<line x1="185" y1="100" x2="90" y2="250" stroke="#364e6c" stroke-width="2"/>
<line x1="185" y1="100" x2="230" y2="250" stroke="#364e6c" stroke-width="2"/>
<line x1="185" y1="100" x2="370" y2="250" stroke="#364e6c" stroke-width="2"/>
<line x1="185" y1="100" x2="500" y2="250" stroke="#364e6c" stroke-width="2"/>
<line x1="375" y1="100" x2="90" y2="250" stroke="#364e6c" stroke-width="2"/>
<line x1="375" y1="100" x2="230" y2="250" stroke="#364e6c" stroke-width="2"/>
<line x1="375" y1="100" x2="370" y2="250" stroke="#364e6c" stroke-width="2"/>
<line x1="375" y1="100" x2="500" y2="250" stroke="#364e6c" stroke-width="2"/>
<line x1="185" y1="100" x2="375" y2="100" stroke="#364e6c" stroke-width="2.5"/>
<g transform="translate(185 100) scale(0.8)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<g transform="translate(375 100) scale(0.8)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="280" y="68" font-size="10.35pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Distribución + núcleo</text>
<g transform="translate(90 250) scale(0.7)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<line x1="90" y1="272" x2="90" y2="322" stroke="#364e6c" stroke-width="2"/>
<g transform="translate(90 350) scale(0.45)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<g transform="translate(230 250) scale(0.7)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<line x1="230" y1="272" x2="230" y2="322" stroke="#364e6c" stroke-width="2"/>
<g transform="translate(230 350) scale(0.45)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<g transform="translate(370 250) scale(0.7)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<line x1="370" y1="272" x2="370" y2="322" stroke="#364e6c" stroke-width="2"/>
<g transform="translate(370 350) scale(0.45)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<g transform="translate(500 250) scale(0.7)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<line x1="500" y1="272" x2="500" y2="322" stroke="#364e6c" stroke-width="2"/>
<g transform="translate(500 350) scale(0.45)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="280" y="395" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Dos capas: menor costo y complejidad</text>
<line x1="760" y1="100" x2="680" y2="250" stroke="#7c3aed" stroke-width="2"/>
<line x1="760" y1="100" x2="820" y2="250" stroke="#7c3aed" stroke-width="2"/>
<line x1="760" y1="100" x2="960" y2="250" stroke="#7c3aed" stroke-width="2"/>
<line x1="760" y1="100" x2="1100" y2="250" stroke="#7c3aed" stroke-width="2"/>
<line x1="1000" y1="100" x2="680" y2="250" stroke="#7c3aed" stroke-width="2"/>
<line x1="1000" y1="100" x2="820" y2="250" stroke="#7c3aed" stroke-width="2"/>
<line x1="1000" y1="100" x2="960" y2="250" stroke="#7c3aed" stroke-width="2"/>
<line x1="1000" y1="100" x2="1100" y2="250" stroke="#7c3aed" stroke-width="2"/>
<g transform="translate(760 100) scale(0.8)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#7c3aed" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#7c3aed"/><circle cx="-24" cy="-15" r="2.5" fill="#7c3aed"/><circle cx="-4" cy="-15" r="2.5" fill="#7c3aed"/><circle cx="16" cy="-15" r="2.5" fill="#7c3aed"/><circle cx="36" cy="-15" r="2.5" fill="#7c3aed"/></g>
<g transform="translate(1000 100) scale(0.8)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#7c3aed" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#7c3aed"/><circle cx="-24" cy="-15" r="2.5" fill="#7c3aed"/><circle cx="-4" cy="-15" r="2.5" fill="#7c3aed"/><circle cx="16" cy="-15" r="2.5" fill="#7c3aed"/><circle cx="36" cy="-15" r="2.5" fill="#7c3aed"/></g>
<text x="880" y="68" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Spine</text>
<g transform="translate(680 250) scale(0.7)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<line x1="680" y1="272" x2="680" y2="322" stroke="#364e6c" stroke-width="2"/>
<g transform="translate(680 355) scale(0.5)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<g transform="translate(820 250) scale(0.7)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<line x1="820" y1="272" x2="820" y2="322" stroke="#364e6c" stroke-width="2"/>
<g transform="translate(820 355) scale(0.5)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<g transform="translate(960 250) scale(0.7)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<line x1="960" y1="272" x2="960" y2="322" stroke="#364e6c" stroke-width="2"/>
<g transform="translate(960 355) scale(0.5)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<g transform="translate(1100 250) scale(0.7)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<line x1="1100" y1="272" x2="1100" y2="322" stroke="#364e6c" stroke-width="2"/>
<g transform="translate(1100 355) scale(0.5)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<text x="880" y="395" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Todo leaf a todo spine: tráfico este-oeste</text></g><text x="600" y="474" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 11.6. Núcleo colapsado y arquitectura spine-leaf.</text></svg>
</div>

### Variantes arquitectónicas

En organizaciones pequeñas o medianas es habitual combinar las capas de distribución y núcleo en una única capa colapsada, reduciendo costos y complejidad.

A pesar de la evolución de los centros de datos, el modelo jerárquico sigue siendo la referencia para redes de campus y oficinas corporativas. En cambio, los centros de datos modernos suelen adoptar arquitecturas *spine-leaf*, pensadas para cargas virtualizadas, mucho tráfico este-oeste y entornos *cloud* de alta densidad. La Figura 11.6 compara ambas variantes.

## 11.4 ALTA DISPONIBILIDAD

La alta disponibilidad (*HA, High Availability*) es la capacidad de una infraestructura de red para mantener la continuidad de los servicios incluso ante fallos de *hardware*, *software*, enlaces o componentes de soporte. Su objetivo es minimizar las interrupciones y mantener los recursos accesibles el mayor tiempo posible. En entornos empresariales, la disponibilidad es uno de los indicadores de calidad más importantes, porque muchas aplicaciones dependen de una conectividad permanente.

La disponibilidad suele expresarse como porcentaje de tiempo operativo anual. La Tabla 11.4 presenta los valores de referencia más habituales.

<div class="diagram tabla-svg" id="tabla-11-4" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 252" role="img" aria-labelledby="t53-title"><title id="t53-title">Tabla 11.4. Niveles de disponibilidad y tiempo de inactividad anual.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="162.2" y="20.0" dominant-baseline="central" text-anchor="middle">Nivel de disponibilidad</text>
<text class="tb-ht" x="472.2" y="20.0" dominant-baseline="central" text-anchor="middle">Disponibilidad anual</text>
<text class="tb-ht" x="909.9" y="20.0" dominant-baseline="central" text-anchor="middle">Tiempo de inactividad aproximado por año</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Dos nueves</text>
<text class="tb-tx" x="336.5" y="60.8" dominant-baseline="central">99 %</text>
<text class="tb-tx" x="631.8" y="60.8" dominant-baseline="central">3 días, 15 horas y 36 minutos</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">Tres nueves</text>
<text class="tb-tx" x="336.5" y="101.5" dominant-baseline="central">99,9 %</text>
<text class="tb-tx" x="631.8" y="101.5" dominant-baseline="central">8 horas y 45 minutos</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">Cuatro nueves</text>
<text class="tb-tx" x="336.5" y="142.2" dominant-baseline="central">99,99 %</text>
<text class="tb-tx" x="631.8" y="142.2" dominant-baseline="central">52 minutos y 34 segundos</text>
<rect class="tb-to" x="0" y="163.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="183.0" dominant-baseline="central">Cinco nueves</text>
<text class="tb-tx" x="336.5" y="183.0" dominant-baseline="central">99,999 %</text>
<text class="tb-tx" x="631.8" y="183.0" dominant-baseline="central">5 minutos y 15 segundos</text>
<text class="tb-cap" x="600.0" y="229.8" text-anchor="middle">Tabla 11.4. Niveles de disponibilidad y tiempo de inactividad anual.</text></svg>
</div>

Nota: cálculos sobre un año de 365 días. El tiempo de inactividad contractual puede excluir mantenimientos programados y depender de las condiciones específicas del SLA.

La disponibilidad de un sistema depende sobre todo de dos factores:

### MTBF (Mean Time Between Failures)

Representa el tiempo promedio de funcionamiento entre fallos consecutivos. Cuanto mayor sea el MTBF, más confiable será el sistema.

### MTTR (Mean Time To Repair)

Representa el tiempo promedio necesario para restaurar el servicio después de una falla.

La disponibilidad puede estimarse mediante: **Disponibilidad = MTBF / (MTBF + MTTR) × 100 %**.

Donde MTBF es el tiempo medio entre fallos y MTTR el tiempo medio de reparación. La Figura 11.7 muestra ambos conceptos sobre la línea de tiempo de un servicio. De ahí que diseñar para alta disponibilidad exija reducir los tiempos de recuperación y aumentar la confiabilidad de los componentes críticos.

<div class="diagram" id="figura-11-07" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1107" viewBox="0 0 1200 372" role="img" aria-labelledby="g1107-title">
<title id="g1107-title">MTBF y MTTR en la disponibilidad de un servicio</title>
<defs><marker id="g1107m7c3aed" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#7c3aed"/></marker><marker id="g1107n7c3aed" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#7c3aed"/></marker><marker id="g1107md40000" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#d40000"/></marker><marker id="g1107nd40000" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#d40000"/></marker><marker id="g1107m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1107n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g1107-c" transform="translate(20 20)"><rect x="0" y="70" width="330" height="56" rx="4" fill="#bfe4d4" stroke="#009254" stroke-width="2"/>
<rect x="330" y="70" width="70" height="56" rx="4" fill="#f4bfbf" stroke="#d40000" stroke-width="2"/>
<rect x="400" y="70" width="300" height="56" rx="4" fill="#bfe4d4" stroke="#009254" stroke-width="2"/>
<rect x="700" y="70" width="90" height="56" rx="4" fill="#f4bfbf" stroke="#d40000" stroke-width="2"/>
<rect x="790" y="70" width="370" height="56" rx="4" fill="#bfe4d4" stroke="#009254" stroke-width="2"/>
<text x="165" y="104" font-size="10.9pt" font-weight="700" fill="#065f46" text-anchor="middle">Servicio operativo</text>
<text x="550" y="104" font-size="10.9pt" font-weight="700" fill="#065f46" text-anchor="middle">Servicio operativo</text>
<text x="975" y="104" font-size="10.9pt" font-weight="700" fill="#065f46" text-anchor="middle">Servicio operativo</text>
<text x="365" y="104" font-size="10.35pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Falla</text>
<text x="745" y="104" font-size="10.35pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Falla</text>
<line x1="400" y1="64" x2="400" y2="26" stroke="#7c3aed" stroke-width="2"/>
<line x1="700" y1="64" x2="700" y2="26" stroke="#7c3aed" stroke-width="2"/>
<polyline points="404,40 696,40" fill="none" stroke="#7c3aed" stroke-width="2" marker-end="url(#g1107m7c3aed)" marker-start="url(#g1107n7c3aed)"/>
<text x="550" y="32" font-size="11.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">MTBF · tiempo medio entre fallos</text>
<line x1="330" y1="132" x2="330" y2="168" stroke="#d40000" stroke-width="2"/>
<line x1="400" y1="132" x2="400" y2="168" stroke="#d40000" stroke-width="2"/>
<polyline points="333,154 397,154" fill="none" stroke="#d40000" stroke-width="2" marker-end="url(#g1107md40000)" marker-start="url(#g1107nd40000)"/>
<text x="365" y="188" font-size="11.35pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">MTTR · tiempo medio de reparación</text>
<polyline points="0,220 1150,220" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1107m364e6c)"/>
<text x="1150" y="240" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="end">Tiempo</text>
<rect x="330" y="230" width="500" height="56" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<text x="580" y="264" font-size="11.35pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Disponibilidad = MTBF / (MTBF + MTTR) × 100 %</text></g><text x="600" y="354" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 11.7. MTBF y MTTR en la disponibilidad de un servicio.</text></svg>
</div>

### Principios de diseño

#### Eliminación de puntos únicos de fallo

Todo componente cuya falla pueda interrumpir un servicio crítico debe contar con mecanismos alternativos que permitan mantener la operación.

#### Convergencia rápida

La infraestructura debe ser capaz de detectar y corregir fallos en el menor tiempo posible.

#### Automatización de recuperación

Los mecanismos de recuperación automática reducen la dependencia de la intervención humana y disminuyen los tiempos de interrupción.

#### Monitoreo continuo

La supervisión permanente permite detectar degradaciones antes de que se conviertan en incidentes críticos.

#### Pruebas periódicas

Los procedimientos de recuperación deben validarse regularmente para garantizar su funcionamiento cuando sean necesarios.

### Alta disponibilidad y continuidad operativa

La alta disponibilidad no elimina los fallos; su propósito es reducir su impacto sobre los servicios, y por eso se integra en estrategias más amplias de continuidad de negocio y recuperación ante desastres. Su alcance es acotado: un diseño de alta disponibilidad protege contra el fallo de un componente, pero no contra un error de configuración replicado en ambos nodos ni contra la pérdida de un sitio completo, que requieren otros controles.

El nivel de disponibilidad requerido debe estar alineado con la criticidad de cada servicio, ya que alcanzar porcentajes elevados implica mayores costos, complejidad operativa y requisitos de infraestructura.

## 11.5 REDUNDANCIA

La redundancia es la estrategia técnica para eliminar puntos únicos de fallo mediante componentes, enlaces o rutas alternativas capaces de asumir la operación cuando ocurre una interrupción. Es uno de los pilares de la alta disponibilidad, porque mantiene activos los servicios aunque fallen uno o varios elementos. Según cómo se implemente, la redundancia puede operar de forma simultánea con los componentes principales o quedar en espera hasta que se necesite.

### Redundancia de dispositivos

Consiste en incorporar equipos redundantes para reducir el impacto de la falla de un componente crítico y facilitar la continuidad operativa.

<div class="diagram" id="figura-11-08" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1108" viewBox="0 0 1200 472" role="img" aria-labelledby="g1108-title">
<title id="g1108-title">Redundancia de dispositivos: activo-pasivo y activo-activo</title>
<defs><marker id="g1108m009254" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#009254"/></marker><marker id="g1108n009254" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#009254"/></marker><marker id="g1108m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1108n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g1108-c" transform="translate(20 20)"><rect x="0" y="0" width="560" height="400" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="560" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="280" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Activo-pasivo</text>
<rect x="600" y="0" width="560" height="400" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="600" y1="34" x2="1160" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="880" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Activo-activo</text>
<g transform="translate(280 90) scale(0.6)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="342" y="96" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Usuarios</text>
<g transform="translate(280 330) scale(0.8)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="342" y="336" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Servicio</text>
<polyline points="268,118 180,180" fill="none" stroke="#009254" stroke-width="3" marker-end="url(#g1108m009254)"/>
<polyline points="170,240 268,304" fill="none" stroke="#009254" stroke-width="3" marker-end="url(#g1108m009254)"/>
<polyline points="292,118 380,180" fill="none" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#g1108m364e6c)"/>
<polyline points="390,240 292,304" fill="none" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#g1108m364e6c)"/>
<g transform="translate(170 210) scale(0.8)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<g transform="translate(390 210) scale(0.8)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<line x1="224" y1="210" x2="336" y2="210" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5"/>
<text x="280" y="200" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Latidos</text>
<rect x="130" y="252" width="80" height="24" rx="12.0" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/>
<text x="170" y="268.66" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">Activo</text>
<rect x="350" y="252" width="80" height="24" rx="12.0" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/>
<text x="390" y="268.66" font-size="10.35pt" font-weight="700" fill="#1e3a5f" text-anchor="middle">En espera</text>
<text x="280" y="380" font-size="10.35pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Un nodo atiende; otro espera</text>
<g transform="translate(880 90) scale(0.6)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="942" y="96" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Usuarios</text>
<g transform="translate(880 330) scale(0.8)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="942" y="336" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Servicio</text>
<polyline points="868,118 780,180" fill="none" stroke="#009254" stroke-width="3" marker-end="url(#g1108m009254)"/>
<polyline points="770,240 868,304" fill="none" stroke="#009254" stroke-width="3" marker-end="url(#g1108m009254)"/>
<polyline points="892,118 980,180" fill="none" stroke="#009254" stroke-width="3" marker-end="url(#g1108m009254)"/>
<polyline points="990,240 892,304" fill="none" stroke="#009254" stroke-width="3" marker-end="url(#g1108m009254)"/>
<g transform="translate(770 210) scale(0.8)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<g transform="translate(990 210) scale(0.8)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<rect x="730" y="252" width="80" height="24" rx="12.0" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/>
<text x="770" y="268.66" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">Activo</text>
<rect x="950" y="252" width="80" height="24" rx="12.0" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/>
<text x="990" y="268.66" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">Activo</text>
<text x="880" y="380" font-size="10.35pt" font-weight="400" fill="#065f46" text-anchor="middle">La carga se reparte entre ambos nodos</text></g><text x="600" y="454" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 11.8. Redundancia de dispositivos: activo-pasivo y activo-activo.</text></svg>
</div>

Entre los esquemas habituales se encuentran los modos activo-activo y activo-pasivo, representados en la Figura 11.8.

#### Activo-pasivo

Un dispositivo procesa el tráfico mientras otro permanece en espera, preparado para asumir la operación en caso de fallo. Ejemplos: HSRP, VRRP, clústeres de *firewall* y sistemas de almacenamiento redundantes.

#### Activo-activo

Múltiples dispositivos procesan tráfico simultáneamente y comparten la carga operativa. Ejemplos: balanceadores de carga y clústeres distribuidos.

### Otros niveles de redundancia

La Figura 11.9 resume los niveles en los que puede aplicarse la redundancia. Cada nivel protege contra un tipo de fallo distinto, por lo que duplicar uno de ellos no compensa la ausencia de otro.

<div class="diagram" id="figura-11-09" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1109" viewBox="0 0 1200 392" role="img" aria-labelledby="g1109-title">
<title id="g1109-title">Niveles de redundancia en una infraestructura de red</title>
<defs></defs>
<g id="g1109-c" transform="translate(20 20)"><rect x="0" y="0" width="219.2" height="320" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="219.2" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="109.6" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Dispositivos</text>
<g transform="translate(109.6 136.96) scale(1.05)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="109.6" y="260.72" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">HSRP, VRRP, clústeres de</text>
<text x="109.6" y="279.72" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">firewall</text>
<rect x="235.2" y="0" width="219.2" height="320" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="235.2" y1="34" x2="454.4" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="344.8" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Enlaces</text>
<g transform="translate(344.8 136.96) scale(1.05)" data-lib="cable"><path d="M-40 0 C-26 -30 -14 -30 0 0 S26 30 40 0" fill="none" stroke="#009254" stroke-width="4" stroke-linecap="round"></path></g>
<text x="344.8" y="260.72" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">EtherChannel, LACP,</text>
<text x="344.8" y="279.72" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">multihoming</text>
<rect x="470.4" y="0" width="219.2" height="320" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="470.4" y1="34" x2="689.6" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="580" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Rutas</text>
<g transform="translate(580 136.96) scale(1.05)" data-lib="fork"><g fill="none" stroke="#7c3aed" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-30 0 H-6 L20 -18 M-6 0 L20 18"></path><path d="M12 -26 L22 -18 L12 -10 M12 10 L22 18 L12 26"></path></g><circle cx="-30" cy="0" r="5" fill="#7c3aed"></circle></g>
<text x="580" y="270.22" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">OSPF, ECMP, rutas flotantes</text>
<rect x="705.6" y="0" width="219.2" height="320" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="705.6" y1="34" x2="924.8" y2="34" stroke="#dd3a00" stroke-width="1.5"/>
<text x="815.2" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Energía</text>
<g transform="translate(815.2 136.96) scale(1.05)" data-lib="plug"><rect x="-14" y="-6" width="28" height="30" rx="3" fill="#fcebe6" stroke="#dd3a00" stroke-width="3"></rect><path d="M-9 -6 V-18 M0 -6 V-18 M9 -6 V-18" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path></g>
<text x="815.2" y="270.22" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Doble fuente, UPS, generador</text>
<rect x="940.8" y="0" width="219.2" height="320" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="940.8" y1="34" x2="1160" y2="34" stroke="#d40000" stroke-width="1.5"/>
<text x="1050.4" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Componentes internos</text>
<g transform="translate(1050.4 136.96) scale(1.05)" data-lib="gear"><g fill="#d40000"><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(0)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(45)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(90)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(135)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(180)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(225)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(270)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(315)"></rect></g><circle cx="0" cy="0" r="19" fill="#ffffff" stroke="#d40000" stroke-width="4"></circle><circle cx="0" cy="0" r="7" fill="#f4bfbf" stroke="#d40000" stroke-width="3"></circle></g>
<text x="1050.4" y="260.72" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Supervisores, ventiladores,</text>
<text x="1050.4" y="279.72" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">módulos fabric</text></g><text x="600" y="374" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 11.9. Niveles de redundancia en una infraestructura de red.</text></svg>
</div>

#### Redundancia de enlaces

Consiste en implementar múltiples conexiones físicas o lógicas entre dispositivos para garantizar conectividad ante fallos de un enlace individual. Las tecnologías más utilizadas incluyen EtherChannel, LACP, ECMP, enlaces WAN múltiples y *multihoming* con varios ISP.

#### Redundancia de rutas

Permite que el tráfico disponga de caminos alternativos hacia un mismo destino. Puede implementarse mediante protocolos de enrutamiento dinámico, rutas estáticas flotantes, ECMP, MPLS *Fast Reroute* y *Segment Routing*.

#### Redundancia eléctrica

Los equipos de red críticos suelen incorporar múltiples mecanismos de alimentación para evitar interrupciones provocadas por fallos energéticos: fuentes de alimentación redundantes, sistemas UPS, bancos de baterías y generadores eléctricos.

#### Redundancia de componentes internos

Muchos equipos empresariales permiten duplicar elementos críticos dentro del mismo chasis, como supervisores, módulos de control, ventiladores y módulos fabric (conmutación interna).

#### Protocolos y tecnologías asociadas

Diversos protocolos contribuyen a la implementación de redundancia dentro de la infraestructura. La Tabla 11.5 los organiza según su ámbito de aplicación.

<div class="diagram tabla-svg" id="tabla-11-5" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 470" role="img" aria-labelledby="t54-title"><title id="t54-title">Tabla 11.5. Protocolos y tecnologías asociadas a la redundancia.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="130.9" y="20.0" dominant-baseline="central" text-anchor="middle">Función</text>
<text class="tb-ht" x="397.7" y="20.0" dominant-baseline="central" text-anchor="middle">Protocolo o tecnología</text>
<text class="tb-ht" x="866.8" y="20.0" dominant-baseline="central" text-anchor="middle">Propósito</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Prevención de bucles de</text>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">capa 2</text>
<text class="tb-tx" x="273.8" y="72.1" dominant-baseline="central">STP, RSTP y MSTP</text>
<text class="tb-tx" x="545.6" y="60.8" dominant-baseline="central">Evitan bucles de conmutación al bloquear o descartar caminos redundantes</text>
<text class="tb-tx" x="545.6" y="83.5" dominant-baseline="central">según la topología.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Gateway redundante</text>
<text class="tb-tx" x="273.8" y="135.6" dominant-baseline="central">HSRP, VRRP y GLBP</text>
<text class="tb-tx" x="545.6" y="124.2" dominant-baseline="central">Proporcionan una puerta de enlace virtual y continuidad del servicio ante fallos</text>
<text class="tb-tx" x="545.6" y="147.0" dominant-baseline="central">de un router.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Agregación de enlaces</text>
<text class="tb-tx" x="273.8" y="199.1" dominant-baseline="central">LACP</text>
<text class="tb-tx" x="545.6" y="187.8" dominant-baseline="central">Agrupa enlaces físicos en un enlace lógico para aumentar capacidad y</text>
<text class="tb-tx" x="545.6" y="210.5" dominant-baseline="central">resiliencia.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">Enrutamiento de múltiples</text>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">caminos</text>
<text class="tb-tx" x="273.8" y="262.6" dominant-baseline="central">ECMP</text>
<text class="tb-tx" x="545.6" y="251.2" dominant-baseline="central">Distribuye tráfico entre rutas de igual costo cuando la plataforma y el protocolo</text>
<text class="tb-tx" x="545.6" y="274.0" dominant-baseline="central">lo permiten.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="326.1" dominant-baseline="central">Detección de fallos</text>
<text class="tb-tx" x="273.8" y="326.1" dominant-baseline="central">BFD</text>
<text class="tb-tx" x="545.6" y="314.8" dominant-baseline="central">Detecta rápidamente fallos de conectividad entre vecinos; no realiza por sí solo</text>
<text class="tb-tx" x="545.6" y="337.5" dominant-baseline="central">la recuperación del tráfico.</text>
<rect class="tb-to" x="0" y="358.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="389.6" dominant-baseline="central">Recuperación avanzada</text>
<text class="tb-tx" x="273.8" y="378.2" dominant-baseline="central">MPLS Fast Reroute y Segment</text>
<text class="tb-tx" x="273.8" y="401.0" dominant-baseline="central">Routing</text>
<text class="tb-tx" x="545.6" y="378.2" dominant-baseline="central">Permiten mecanismos de recuperación rápida ante fallos de ruta, según la</text>
<text class="tb-tx" x="545.6" y="401.0" dominant-baseline="central">arquitectura y la plataforma.</text>
<text class="tb-cap" x="600.0" y="447.8" text-anchor="middle">Tabla 11.5. Protocolos y tecnologías asociadas a la redundancia.</text></svg>
</div>

La redundancia mejora la disponibilidad, pero también aumenta los costos, el consumo de recursos y la complejidad operativa. Un buen diseño equilibra esos factores para evitar arquitecturas innecesariamente complejas. A ello se suma que los componentes de respaldo deben mantenerse sincronizados, monitorizados y probados periódicamente, para que puedan asumir la operación cuando ocurra una falla real: la redundancia se demuestra con pruebas de recuperación, no con la mera existencia de equipos duplicados.

## 11.6 SEGMENTACIÓN CORPORATIVA

La segmentación corporativa consiste en dividir la infraestructura de red en dominios lógicos independientes con el objetivo de mejorar la seguridad, optimizar el rendimiento y simplificar la administración. En lugar de operar como una única red plana, la organización se estructura en múltiples segmentos controlados mediante políticas específicas de acceso y comunicación.

Al agrupar usuarios, aplicaciones, dispositivos y servicios según criterios funcionales, operativos o de seguridad, la segmentación reduce la superficie de ataque y limita el alcance de un incidente. Ese efecto depende de que las políticas entre segmentos sean restrictivas: segmentar sin filtrar el tráfico entre zonas solo reorganiza la red.

La segmentación es uno de los principios de las arquitecturas modernas de seguridad y un componente central de los modelos *Zero Trust*.

<div class="diagram" id="figura-11-10" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1110" viewBox="0 0 1200 402" role="img" aria-labelledby="g1110-title">
<title id="g1110-title">Métodos de segmentación según su granularidad</title>
<defs><marker id="g1110m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1110n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g1110-c" transform="translate(20 20)"><rect x="0" y="0" width="272" height="230" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="272" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="136" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">VLAN</text>
<g transform="translate(136 104.56) scale(0.8)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#003ecc"/><circle cx="-24" cy="-15" r="2.5" fill="#003ecc"/><circle cx="-4" cy="-15" r="2.5" fill="#003ecc"/><circle cx="16" cy="-15" r="2.5" fill="#003ecc"/><circle cx="36" cy="-15" r="2.5" fill="#003ecc"/></g>
<text x="136" y="197.32" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Dominio de broadcast independiente</text>
<rect x="296" y="0" width="272" height="230" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="296" y1="34" x2="568" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="432" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Subredes IP</text>
<g transform="translate(432 104.56) scale(0.8)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6f4ee" stroke="#009254" stroke-width="3"/><g fill="none" stroke="#009254" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="432" y="187.82" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Un rango de direcciones por</text>
<text x="432" y="206.82" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">segmento</text>
<rect x="592" y="0" width="272" height="230" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="592" y1="34" x2="864" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="728" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">VRF</text>
<g transform="translate(728 104.56) scale(0.8)" data-lib="table"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#7c3aed" stroke-width="3"></rect><rect x="-36" y="-28" width="72" height="14" fill="#decefa" stroke="#7c3aed" stroke-width="3"></rect><path d="M-36 0H36M-36 14H36M-8 -14V28" stroke="#7c3aed" stroke-width="2"></path></g>
<text x="728" y="187.82" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Tablas de enrutamiento separadas en</text>
<text x="728" y="206.82" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">un mismo equipo</text>
<rect x="888" y="0" width="272" height="230" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="888" y1="34" x2="1160" y2="34" stroke="#d40000" stroke-width="1.5"/>
<text x="1024" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Microsegmentación</text>
<g transform="translate(1024 104.56) scale(0.8)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#d40000" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#d40000"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<text x="1024" y="187.82" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Políticas por carga de trabajo o</text>
<text x="1024" y="206.82" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">aplicación</text>
<polyline points="0,280 1150,280" fill="none" stroke="#364e6c" stroke-width="3" marker-end="url(#g1110m364e6c)"/>
<text x="0" y="316" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Segmentos amplios</text>
<text x="1160" y="316" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="end">Control por flujo individual</text>
<text x="580" y="270" font-size="11.35pt" font-weight="700" fill="#1e3a5f" text-anchor="middle">Granularidad creciente</text></g><text x="600" y="384" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 11.10. Métodos de segmentación según su granularidad.</text></svg>
</div>

### Métodos de segmentación

Los métodos de segmentación se diferencian por el nivel de aislamiento que ofrecen. La Figura 11.10 los ordena según su granularidad y la Tabla 11.6 los compara.

#### VLAN

Las VLAN permiten crear dominios de *broadcast* independientes dentro de una misma infraestructura física de conmutación.

Ejemplos habituales son las VLAN de usuarios, voz, servidores, gestión, invitados y videovigilancia.

La comunicación entre VLAN requiere enrutamiento de capa 3 y puede controlarse mediante ACL o políticas de *firewall*.

#### Subredes IP

Cada segmento lógico suele asociarse a una subred independiente, facilitando la administración, el enrutamiento y la aplicación de políticas de seguridad.

Por ejemplo, 10.10.10.0/24 para Finanzas, 10.20.20.0/24 para Recursos Humanos y 10.30.30.0/24 para Ingeniería.

#### VRF (Virtual Routing and Forwarding)

Las VRF permiten mantener múltiples tablas de enrutamiento independientes dentro de un mismo dispositivo, proporcionando aislamiento lógico avanzado sin necesidad de infraestructura física separada.

Son ampliamente utilizadas en redes multiempresa, proveedores de servicios, segmentación de redes de gestión y entornos de producción y desarrollo.

#### Microsegmentación

Extiende el concepto de segmentación hasta cargas de trabajo individuales, máquinas virtuales, contenedores o aplicaciones específicas.

Las políticas se aplican directamente sobre los flujos de comunicación, independientemente de la ubicación física de los sistemas.

<div class="diagram tabla-svg" id="tabla-11-6" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 366" role="img" aria-labelledby="t55-title"><title id="t55-title">Tabla 11.6. Métodos de segmentación corporativa.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="63.5"/>
<text class="tb-ht" x="91.5" y="31.4" dominant-baseline="central" text-anchor="middle">Método</text>
<text class="tb-ht" x="272.3" y="20.0" dominant-baseline="central" text-anchor="middle">Nivel de</text>
<text class="tb-ht" x="272.3" y="42.8" dominant-baseline="central" text-anchor="middle">aislamiento</text>
<text class="tb-ht" x="614.6" y="31.4" dominant-baseline="central" text-anchor="middle">Descripción</text>
<text class="tb-ht" x="1033.7" y="31.4" dominant-baseline="central" text-anchor="middle">Ejemplo</text>
<rect class="tb-te" x="0" y="63.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="94.9" dominant-baseline="central">VLAN</text>
<text class="tb-tx" x="195.0" y="83.5" dominant-baseline="central">Dominio de</text>
<text class="tb-tx" x="195.0" y="106.2" dominant-baseline="central">broadcast</text>
<text class="tb-tx" x="373.7" y="83.5" dominant-baseline="central">Dominios independientes sobre la misma infraestructura de</text>
<text class="tb-tx" x="373.7" y="106.2" dominant-baseline="central">conmutación; la comunicación entre VLAN requiere capa 3.</text>
<text class="tb-tx" x="879.5" y="83.5" dominant-baseline="central">VLAN de usuarios, voz, servidores,</text>
<text class="tb-tx" x="879.5" y="106.2" dominant-baseline="central">gestión, invitados y videovigilancia.</text>
<rect class="tb-to" x="0" y="127.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="158.4" dominant-baseline="central">Subredes IP</text>
<text class="tb-tx" x="195.0" y="147.0" dominant-baseline="central">Segmento lógico</text>
<text class="tb-tx" x="195.0" y="169.8" dominant-baseline="central">de capa 3</text>
<text class="tb-tx" x="373.7" y="158.4" dominant-baseline="central">Cada segmento se asocia a una subred independiente.</text>
<text class="tb-tx" x="879.5" y="147.0" dominant-baseline="central">10.10.10.0/24 para Finanzas;</text>
<text class="tb-tx" x="879.5" y="169.8" dominant-baseline="central">10.20.20.0/24 para Recursos Humanos.</text>
<rect class="tb-te" x="0" y="190.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="221.9" dominant-baseline="central">VRF</text>
<text class="tb-tx" x="195.0" y="210.5" dominant-baseline="central">Tabla de</text>
<text class="tb-tx" x="195.0" y="233.2" dominant-baseline="central">enrutamiento</text>
<text class="tb-tx" x="373.7" y="210.5" dominant-baseline="central">Múltiples tablas de enrutamiento independientes dentro de</text>
<text class="tb-tx" x="373.7" y="233.2" dominant-baseline="central">un mismo dispositivo.</text>
<text class="tb-tx" x="879.5" y="210.5" dominant-baseline="central">Redes multiempresa, proveedores de</text>
<text class="tb-tx" x="879.5" y="233.2" dominant-baseline="central">servicios y redes de gestión.</text>
<rect class="tb-to" x="0" y="254.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="285.4" dominant-baseline="central">Microsegmentación</text>
<text class="tb-tx" x="195.0" y="285.4" dominant-baseline="central">Carga de trabajo</text>
<text class="tb-tx" x="373.7" y="274.0" dominant-baseline="central">Políticas aplicadas a los flujos entre máquinas virtuales,</text>
<text class="tb-tx" x="373.7" y="296.8" dominant-baseline="central">contenedores o aplicaciones.</text>
<text class="tb-tx" x="879.5" y="274.0" dominant-baseline="central">El servidor web solo alcanza la</text>
<text class="tb-tx" x="879.5" y="296.8" dominant-baseline="central">aplicación por TCP 8080.</text>
<text class="tb-cap" x="600.0" y="343.5" text-anchor="middle">Tabla 11.6. Métodos de segmentación corporativa.</text></svg>
</div>

### Beneficios principales

#### Seguridad

La segmentación limita los movimientos laterales de un atacante y reduce el impacto de compromisos internos.

#### Rendimiento

La reducción de dominios de *broadcast* disminuye el tráfico innecesario y mejora la eficiencia de la red.

#### Cumplimiento normativo

Diversos estándares de seguridad exigen segmentar entornos sensibles para proteger información crítica.

#### Administración

Permite aplicar políticas diferenciadas según usuarios, dispositivos o servicios.

#### Escalabilidad

Facilita el crecimiento de la infraestructura sin necesidad de rediseñar completamente la red existente.

Una segmentación bien diseñada mejora al mismo tiempo la seguridad, el rendimiento y la capacidad de crecimiento de la infraestructura empresarial.

## 11.7 DMZ

La DMZ (*Demilitarized Zone*) es un segmento de red especializado destinado a alojar servicios que deben ser accesibles desde redes externas, principalmente Internet, sin exponer directamente la infraestructura interna de la organización.

Su propósito es establecer una zona intermedia de seguridad donde los servicios públicos puedan operar bajo controles estrictos, reduciendo el riesgo de que un compromiso externo afecte a los sistemas corporativos.

La DMZ es uno de los mecanismos más utilizados en las arquitecturas perimetrales y forma parte de los principios de defensa en profundidad.

### Objetivos de una DMZ

- Separar servicios públicos de la red interna.
- Reducir la superficie de exposición.
- Limitar el movimiento lateral de atacantes.
- Controlar estrictamente los flujos de comunicación.
- Proteger los activos críticos de la organización.

<div class="diagram" id="figura-11-11" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1111" viewBox="0 0 1200 552" role="img" aria-labelledby="g1111-title">
<title id="g1111-title">DMZ con firewall de tres zonas</title>
<defs><marker id="g1111md40000" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#d40000"/></marker><marker id="g1111nd40000" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#d40000"/></marker><marker id="g1111m009254" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#009254"/></marker><marker id="g1111n009254" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#009254"/></marker><marker id="g1111m003ecc" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#003ecc"/></marker><marker id="g1111n003ecc" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#003ecc"/></marker><marker id="g1111mdd3a00" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#dd3a00"/></marker><marker id="g1111ndd3a00" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#dd3a00"/></marker></defs>
<g id="g1111-c" transform="translate(20 20)"><rect x="0" y="80" width="250" height="230" rx="6" fill="#f2ebfd" fill-opacity="0.55" stroke="#7c3aed" stroke-width="2" stroke-dasharray="7 5"/>
<text x="12" y="102" font-size="12.5pt" font-weight="700" fill="#5b21b6" text-anchor="start">Internet</text>
<g transform="translate(125 190) scale(1.2)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path></g>
<rect x="910" y="80" width="250" height="230" rx="6" fill="#e6ecfa" fill-opacity="0.55" stroke="#003ecc" stroke-width="2" stroke-dasharray="7 5"/>
<text x="922" y="102" font-size="12.5pt" font-weight="700" fill="#1e3a8a" text-anchor="start">LAN corporativa</text>
<g transform="translate(1000 200) scale(0.7)" data-lib="pc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6ecfa" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<g transform="translate(1100 200) scale(0.7)" data-lib="db"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><path d="M-30 -24 V24 C-30 36 30 36 30 24 V-24"></path><ellipse cx="0" cy="-24" rx="30" ry="11" fill="#e6ecfa"></ellipse><path d="M-30 -4 C-30 8 30 8 30 -4" fill="none"></path><path d="M-30 14 C-30 26 30 26 30 14" fill="none"></path></g></g>
<rect x="330" y="330" width="500" height="150" rx="6" fill="#fcebe6" fill-opacity="0.55" stroke="#dd3a00" stroke-width="2" stroke-dasharray="7 5"/>
<text x="342" y="352" font-size="12.5pt" font-weight="700" fill="#7c2d12" text-anchor="start">DMZ</text>
<g transform="translate(400 400) scale(0.7)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<g transform="translate(520 400) scale(0.7)" data-lib="globe"><g stroke="#dd3a00" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#fcebe6"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<g transform="translate(640 400) scale(0.7)" data-lib="mail"><rect x="-32" y="-20" width="64" height="40" rx="4" fill="#fcebe6" stroke="#dd3a00" stroke-width="3"></rect><path d="M-32 -18 L0 6 L32 -18" fill="none" stroke="#dd3a00" stroke-width="3" stroke-linejoin="round"></path></g>
<g transform="translate(760 400) scale(0.7)" data-lib="fork"><g fill="none" stroke="#dd3a00" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-30 0 H-6 L20 -18 M-6 0 L20 18"></path><path d="M12 -26 L22 -18 L12 -10 M12 10 L22 18 L12 26"></path></g><circle cx="-30" cy="0" r="5" fill="#dd3a00"></circle></g>
<text x="400" y="455" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Web</text>
<text x="520" y="455" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">DNS</text>
<text x="640" y="455" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Correo</text>
<text x="760" y="455" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Balanceador</text>
<g transform="translate(580 195) scale(1.3)" data-lib="firewall"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"/><path d="M-36 -9.5H36M-36 9.5H36M-12 -28V-9.5M12 -9.5V9.5M-12 9.5V28" stroke="#dd3a00" stroke-width="2.5" fill="none"/><rect x="-36" y="-28" width="72" height="18.5" rx="3" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"/><path d="M-36 -9.5H36M-12 -28V-9.5M12 -9.5V9.5M-12 9.5V28" stroke="#dd3a00" stroke-width="2.5" fill="none"/></g>
<text x="580" y="245" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Firewall</text>
<polyline points="250,195 500,195" fill="none" stroke="#d40000" stroke-width="3" marker-end="url(#g1111md40000)"/>
<g transform="translate(395 195) scale(0.7)" data-lib="x"><circle cx="0" cy="0" r="28" fill="#d40000"></circle><path d="M-11 -11 L11 11 M11 -11 L-11 11" stroke="#ffffff" stroke-width="5" stroke-linecap="round"></path></g>
<text x="375" y="170" font-size="10.35pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Acceso directo</text>
<text x="375" y="235" font-size="10.35pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">bloqueado</text>
<polyline points="125,310 125,405 330,405" fill="none" stroke="#009254" stroke-width="3" marker-end="url(#g1111m009254)"/>
<text x="90" y="350" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="start">Solo puertos</text>
<text x="90" y="368" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="start">publicados</text>
<polyline points="1035,310 1035,405 830,405" fill="none" stroke="#003ecc" stroke-width="3" marker-end="url(#g1111m003ecc)"/>
<text x="1060" y="350" font-size="10.35pt" font-weight="700" fill="#1e3a8a" text-anchor="start">Administración</text>
<text x="1060" y="368" font-size="10.35pt" font-weight="700" fill="#1e3a8a" text-anchor="start">controlada</text>
<polyline points="580,330 580,262" fill="none" stroke="#dd3a00" stroke-width="3" stroke-dasharray="7 5" marker-end="url(#g1111mdd3a00)"/>
<polyline points="665,195 910,195" fill="none" stroke="#dd3a00" stroke-width="3" stroke-dasharray="7 5" marker-end="url(#g1111mdd3a00)"/>
<text x="790" y="170" font-size="10.35pt" font-weight="700" fill="#7c2d12" text-anchor="middle">De la DMZ a la LAN: solo lo</text>
<text x="790" y="232" font-size="10.35pt" font-weight="700" fill="#7c2d12" text-anchor="middle">estrictamente necesario</text></g><text x="600" y="534" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 11.11. DMZ con firewall de tres zonas.</text></svg>
</div>

Entre los servicios que suelen ubicarse en este segmento se encuentran servidores web, servidores DNS públicos, *gateways* de correo electrónico, *proxies* inversos, balanceadores de carga, portales VPN y servicios de autenticación expuestos externamente.

### Arquitectura típica

La implementación más habitual utiliza un *firewall* con tres zonas principales: la zona externa (Internet), la zona DMZ y la zona interna (LAN corporativa). La Figura 11.11 muestra esta disposición y las políticas de comunicación que se aplican normalmente.

#### Desde Internet hacia la DMZ

Se permite solo el acceso a los servicios estrictamente necesarios mediante puertos específicos.

#### Desde Internet hacia la red interna

El acceso directo debe permanecer bloqueado.

#### Desde la red interna hacia la DMZ

Se permite la administración y la comunicación controlada según las necesidades operativas.

#### Desde la DMZ hacia la red interna

Solo se autorizan conexiones estrictamente necesarias y bajo políticas restrictivas. La Tabla 11.7 resume los cuatro sentidos de comunicación.

<div class="diagram tabla-svg" id="tabla-11-7" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 252" role="img" aria-labelledby="t56-title"><title id="t56-title">Tabla 11.7. Políticas de comunicación en una DMZ.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="63.2" y="20.0" dominant-baseline="central" text-anchor="middle">Origen</text>
<text class="tb-ht" x="188.9" y="20.0" dominant-baseline="central" text-anchor="middle">Destino</text>
<text class="tb-ht" x="394.4" y="20.0" dominant-baseline="central" text-anchor="middle">Política</text>
<text class="tb-ht" x="868.8" y="20.0" dominant-baseline="central" text-anchor="middle">Descripción</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Internet</text>
<text class="tb-tx" x="138.5" y="60.8" dominant-baseline="central">DMZ</text>
<text class="tb-tx" x="263.3" y="60.8" dominant-baseline="central">Permitido de forma limitada</text>
<text class="tb-tx" x="549.6" y="60.8" dominant-baseline="central">Solo los servicios estrictamente necesarios, mediante puertos específicos.</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">Internet</text>
<text class="tb-tx" x="138.5" y="101.5" dominant-baseline="central">Red interna</text>
<text class="tb-tx" x="263.3" y="101.5" dominant-baseline="central">Bloqueado</text>
<text class="tb-tx" x="549.6" y="101.5" dominant-baseline="central">El acceso directo debe permanecer bloqueado.</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">Red interna</text>
<text class="tb-tx" x="138.5" y="142.2" dominant-baseline="central">DMZ</text>
<text class="tb-tx" x="263.3" y="142.2" dominant-baseline="central">Permitido de forma controlada</text>
<text class="tb-tx" x="549.6" y="142.2" dominant-baseline="central">Administración y comunicación según las necesidades operativas.</text>
<rect class="tb-to" x="0" y="163.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="183.0" dominant-baseline="central">DMZ</text>
<text class="tb-tx" x="138.5" y="183.0" dominant-baseline="central">Red interna</text>
<text class="tb-tx" x="263.3" y="183.0" dominant-baseline="central">Restringido</text>
<text class="tb-tx" x="549.6" y="183.0" dominant-baseline="central">Solo conexiones estrictamente necesarias, bajo políticas restrictivas.</text>
<text class="tb-cap" x="600.0" y="229.8" text-anchor="middle">Tabla 11.7. Políticas de comunicación en una DMZ.</text></svg>
</div>

### Modelos de implementación

La DMZ puede implementarse de tres formas, que se comparan en la Tabla 11.8. En la DMZ única, todos los servicios públicos comparten un mismo segmento. La DMZ múltiple incrementa la seguridad mediante un mayor aislamiento (por ejemplo, zonas para servidores web, aplicaciones, servicios externos y socios o terceros). En la DMZ transparente, el *firewall* opera en modo puente e inspecciona el tráfico sin modificar el direccionamiento IP de los sistemas protegidos.

<div class="diagram tabla-svg" id="tabla-11-8" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 279" role="img" aria-labelledby="t57-title"><title id="t57-title">Tabla 11.8. Modelos de implementación de una DMZ.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="76.6" y="20.0" dominant-baseline="central" text-anchor="middle">Modelo</text>
<text class="tb-ht" x="500.4" y="20.0" dominant-baseline="central" text-anchor="middle">Descripción</text>
<text class="tb-ht" x="1023.8" y="20.0" dominant-baseline="central" text-anchor="middle">Adecuado para</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">DMZ única</text>
<text class="tb-tx" x="165.3" y="72.1" dominant-baseline="central">Todos los servicios públicos comparten un mismo segmento.</text>
<text class="tb-tx" x="859.6" y="60.8" dominant-baseline="central">Entornos pequeños o medianos;</text>
<text class="tb-tx" x="859.6" y="83.5" dominant-baseline="central">implementación sencilla.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">DMZ múltiple</text>
<text class="tb-tx" x="165.3" y="124.2" dominant-baseline="central">Los servicios se distribuyen en zonas según su exposición o función: pública, de</text>
<text class="tb-tx" x="165.3" y="147.0" dominant-baseline="central">aplicaciones, de servicios externos y para socios.</text>
<text class="tb-tx" x="859.6" y="124.2" dominant-baseline="central">Entornos que requieren mayor</text>
<text class="tb-tx" x="859.6" y="147.0" dominant-baseline="central">aislamiento y seguridad.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">DMZ</text>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">transparente</text>
<text class="tb-tx" x="165.3" y="187.8" dominant-baseline="central">El firewall opera en modo puente e inspecciona el tráfico sin modificar el</text>
<text class="tb-tx" x="165.3" y="210.5" dominant-baseline="central">direccionamiento IP.</text>
<text class="tb-tx" x="859.6" y="187.8" dominant-baseline="central">Inspección de tráfico sin rediseñar el</text>
<text class="tb-tx" x="859.6" y="210.5" dominant-baseline="central">direccionamiento.</text>
<text class="tb-cap" x="600.0" y="257.2" text-anchor="middle">Tabla 11.8. Modelos de implementación de una DMZ.</text></svg>
</div>

### Controles de seguridad recomendados

- *Firewalls* de nueva generación (NGFW).
- Sistemas IDS/IPS.
- Segmentación interna mediante VLAN.
- Autenticación multifactor para administración.
- Registro y monitorización centralizada.
- Gestión continua de vulnerabilidades.
- Actualización periódica de sistemas expuestos.

Aunque las arquitecturas modernas incorporan modelos *Zero Trust*, SASE y servicios distribuidos en la nube, la DMZ sigue siendo un componente clave para proteger servicios expuestos y marcar límites claros entre entornos públicos y privados.
