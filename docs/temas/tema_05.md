<p class="tema-num">TEMA 05</p>

# CONMUTACIÓN Y SEGMENTACIÓN DE RED

La eficiencia en la comunicación dentro de una red local depende de la forma en que los datos son distribuidos entre los dispositivos.

El direccionamiento del Tema 4 define qué dispositivos pertenecen a una misma red; la conmutación y las VLAN determinan cómo se materializa esa pertenencia en la capa de enlace antes de que el tráfico llegue al *router*.

Para lograr este comportamiento, se emplean mecanismos de conmutación y segmentación que aprovechan mejor los enlaces, delimitan el alcance del tráfico de difusión y permiten aplicar políticas de seguridad más precisas.

La conmutación permite reenviar tramas de forma selectiva basándose en direcciones físicas, mientras que la segmentación divide la red en dominios más pequeños, limitando el alcance del tráfico de difusión. La Figura 5.1 presenta el mapa de las secciones del tema.

<div class="diagram" id="figura-5-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g405" viewBox="0 0 1200 402" role="img" aria-labelledby="g405-title">
<title id="g405-title">Mapa del Tema 5</title>
<defs></defs>
<g id="g405-c" transform="translate(20 20)"><rect x="0" y="0" width="370.67" height="153" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="0" y1="34" x2="370.67" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="185.33" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">5.1 Switching y direcciones MAC</text>
<g transform="translate(185.33 76.84) scale(0.7)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<text x="185.33" y="134.95" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Tabla de direcciones y reenvío</text>
<rect x="394.67" y="0" width="370.67" height="153" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="394.67" y1="34" x2="765.33" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="580" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">5.2 VLAN</text>
<g transform="translate(580 76.84) scale(0.7)" data-lib="layers"><path d="M0 2 L34 14 L0 26 L-34 14 Z" fill="#bfcff2" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -12 L34 0 L0 12 L-34 0 Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -26 L34 -14 L0 -2 L-34 -14 Z" fill="#ffffff" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="580" y="134.95" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Dominios de broadcast lógicos</text>
<rect x="789.33" y="0" width="370.67" height="153" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="789.33" y1="34" x2="1160" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="974.67" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">5.3 Trunking IEEE 802.1Q</text>
<g transform="translate(974.67 76.84) scale(0.7)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#7c3aed"></circle></g>
<text x="974.67" y="134.95" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Etiquetado de tramas</text>
<rect x="197.33" y="177" width="370.67" height="153" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="197.33" y1="211" x2="568" y2="211" stroke="#dd3a00" stroke-width="1.5"/>
<text x="382.67" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">5.4 STP y RSTP</text>
<g transform="translate(382.67 253.84) scale(0.7)" data-lib="nodes"><g stroke="#dd3a00" stroke-width="3" fill="none"><path d="M0 -22 L-22 14 M0 -22 L22 14 M-22 14 H22"></path></g><circle cx="0" cy="-22" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle><circle cx="-22" cy="14" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle><circle cx="22" cy="14" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle></g>
<text x="382.67" y="311.95" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Prevención de bucles</text>
<rect x="592" y="177" width="370.67" height="153" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="592" y1="211" x2="962.67" y2="211" stroke="#d40000" stroke-width="1.5"/>
<text x="777.33" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">5.5 Dominios de broadcast</text>
<g transform="translate(777.33 253.84) scale(0.7)" data-lib="funnel"><path d="M-32 -26 H32 L8 4 V28 L-8 20 V4 Z" fill="#fbe6e6" stroke="#d40000" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="777.33" y="311.95" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Alcance del tráfico de difusión</text></g><text x="600" y="384" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 5.1. Mapa del Tema 5.</text></svg>
</div>

## 5.1 SWITCHING Y DIRECCIONES MAC

### MAC

Una dirección MAC (*Media Access Control*) identifica una interfaz en el ámbito de la capa de enlace. En Ethernet se utiliza habitualmente el formato de 48 bits, expresado como seis octetos hexadecimales; su uso y alcance dependen del tipo de dirección y del contexto de la red.

En el esquema clásico de asignación de direcciones MAC de 48 bits, los primeros 24 bits pueden corresponder a un OUI y los 24 restantes se asignan dentro del bloque. IEEE también administra otros tamaños de bloques de asignación, por lo que no todas las direcciones deben interpretarse necesariamente mediante una división fija de 24/24 bits. Las direcciones administradas localmente tampoco permiten inferir de forma fiable el fabricante. La Figura 5.2 muestra la estructura de la dirección y los dos bits especiales del primer octeto.

<div class="diagram" id="figura-5-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g421" viewBox="0 0 1200 388.459" role="img" aria-labelledby="g421-title">
<title id="g421-title">Estructura de una dirección MAC de 48 bits</title>
<defs><marker id="g421m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g421n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g421-c" transform="translate(21.735 21.735) scale(1.157)"><rect x="0" y="0" width="500" height="64" rx="5.188" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.162"/>
<text x="250" y="28" font-size="10.372pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">OUI · 24 bits</text>
<text x="250" y="50" font-size="10.372pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">00:1a:2b</text>
<rect x="500" y="0" width="500" height="64" rx="5.188" fill="#e6f4ee" stroke="#009254" stroke-width="2.162"/>
<text x="750" y="28" font-size="10.372pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Identificador de interfaz · 24 bits</text>
<text x="750" y="50" font-size="10.372pt" fill="#065f46" text-anchor="middle" font-weight="400">3c:4d:5e</text>
<rect x="0" y="0" width="166.667" height="64" rx="5.188" fill="#e6ecfa" stroke="#1e3a8a" stroke-width="2.594" stroke-dasharray="5.188 3.459"/>
<rect x="0" y="150" width="100" height="46" rx="5.188" fill="#ebedf0" stroke="#364e6c" stroke-width="2.162"/>
<text x="50" y="180" font-size="10.372pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">b7</text>
<rect x="108" y="150" width="100" height="46" rx="5.188" fill="#ebedf0" stroke="#364e6c" stroke-width="2.162"/>
<text x="158" y="180" font-size="10.372pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">b6</text>
<rect x="216" y="150" width="100" height="46" rx="5.188" fill="#ebedf0" stroke="#364e6c" stroke-width="2.162"/>
<text x="266" y="180" font-size="10.372pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">b5</text>
<rect x="324" y="150" width="100" height="46" rx="5.188" fill="#ebedf0" stroke="#364e6c" stroke-width="2.162"/>
<text x="374" y="180" font-size="10.372pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">b4</text>
<rect x="432" y="150" width="100" height="46" rx="5.188" fill="#ebedf0" stroke="#364e6c" stroke-width="2.162"/>
<text x="482" y="180" font-size="10.372pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">b3</text>
<rect x="540" y="150" width="100" height="46" rx="5.188" fill="#ebedf0" stroke="#364e6c" stroke-width="2.162"/>
<text x="590" y="180" font-size="10.372pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">b2</text>
<rect x="648" y="150" width="100" height="46" rx="5.188" fill="#f6cebf" stroke="#dd3a00" stroke-width="2.162"/>
<text x="698" y="180" font-size="10.372pt" font-weight="700" fill="#7c2d12" text-anchor="middle">U/L</text>
<rect x="756" y="150" width="100" height="46" rx="5.188" fill="#decefa" stroke="#7c3aed" stroke-width="2.162"/>
<text x="806" y="180" font-size="10.372pt" font-weight="700" fill="#5b21b6" text-anchor="middle">I/G</text>
<line x1="0" y1="64" x2="0" y2="150" stroke="#003ecc" stroke-width="1.297" stroke-dasharray="5.188 3.459"/>
<line x1="166.667" y1="64" x2="856" y2="150" stroke="#003ecc" stroke-width="1.297" stroke-dasharray="5.188 3.459"/>
<rect x="0" y="230" width="14" height="14" rx="2.594" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.297"/>
<text x="24" y="242" font-size="10.372pt" fill="#1a1a1a" text-anchor="start" font-weight="400">U/L · 0 global · 1 administrada localmente</text>
<rect x="0" y="256" width="14" height="14" rx="2.594" fill="#decefa" stroke="#7c3aed" stroke-width="1.297"/>
<text x="24" y="268" font-size="10.372pt" fill="#1a1a1a" text-anchor="start" font-weight="400">I/G · 0 unicast · 1 grupo (multicast y broadcast)</text>
</g><text x="600" y="370.619" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 5.2. Estructura de una dirección MAC de 48 bits.</text></svg>
</div>

Los *switches* toman sus decisiones de reenvío en la capa de enlace de datos (capa 2 del modelo OSI) a partir de la dirección MAC de destino completa; el OUI solo identifica al fabricante de la interfaz.

Además, dos bits del primer octeto tienen significado especial: el bit menos significativo (I/G) distingue las direcciones individuales (*unicast*) de las de grupo (*multicast* y *broadcast*), y el siguiente (U/L) indica si la dirección es global (asignada por el fabricante) o administrada localmente.

### Switching

La conmutación (*switching*) es el proceso mediante el cual un *switch* reenvía o filtra tramas según su dirección MAC de destino, su tabla MAC y las reglas de la VLAN.

Una trama *unicast* conocida suele enviarse por el puerto asociado; una trama *unicast* desconocida se inunda dentro de la VLAN, y las tramas *broadcast* se distribuyen conforme a las reglas del dominio de difusión.

A diferencia de los concentradores (*hubs*), que replican la trama por todos los puertos excepto el de llegada, el *switch* aprende las direcciones MAC asociadas a cada puerto y las registra en una tabla de conmutación (*MAC Address Table*); con ella reenvía cada trama solo por el puerto correcto.

### Características técnicas del *switching*

En la Figura 5.3 puede verse lo que se acaba de explicar.

#### Reducción de dominios de colisión

En Ethernet conmutada, cada puerto es un segmento independiente de capa 2 y, conceptualmente, un dominio de colisión separado. En enlaces *full-duplex* no se producen colisiones; estas se asocian a medios compartidos o enlaces *half-duplex*, como los *hubs*.

#### Propagación selectiva de tráfico

En un *switch*, las tramas *unicast* conocidas se reenvían por el puerto asociado; las *unicast* desconocidas se inundan por los puertos de la VLAN, excepto el de origen.

Las tramas *broadcast* se distribuyen dentro de la VLAN. El tráfico *multicast* también puede inundarse si no se aplican mecanismos como IGMP *snooping* para IPv4, MLD *snooping* para IPv6 o filtros estáticos.

Esto reduce tráfico innecesario comparado con *hubs*, donde todo se propaga a todos los puertos, pero mantiene la funcionalidad de difusión requerida por protocolos como ARP y DHCP.

#### Comunicación punto a punto eficiente

Dos pares de dispositivos pueden comunicarse simultáneamente a través de puertos diferentes.

#### Soporte de comunicación *full-duplex*

Los puertos de un *switch* pueden operar en modo *full-duplex*, transmitiendo y recibiendo de forma simultánea. En *full-duplex*, un enlace de 1 Gb/s puede transmitir hasta 1 Gb/s en cada dirección simultáneamente. Por tanto, el tráfico agregado bidireccional puede sumar hasta 2 Gb/s, pero la tasa nominal en una sola dirección no se duplica.

<div class="diagram" id="figura-5-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g422" viewBox="0 0 1200 432.733" role="img" aria-labelledby="g422-title">
<title id="g422-title">Decisión de reenvío de un switch</title>
<defs><marker id="g422m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g422n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g422-c" transform="translate(21.442 21.442) scale(0.961)"><rect x="0" y="0" width="330" height="90" rx="6.243" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.081"/>
<line x1="0" y1="34" x2="330" y2="34" stroke="#003ecc" stroke-width="1.561"/>
<text x="165" y="23" font-size="12.487pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1 · Recibe</text>
<text x="165" y="70" font-size="10.926pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">la trama en un puerto</text>
<line x1="334" y1="45" x2="381" y2="45" stroke="#364e6c" stroke-width="2.081" marker-end="url(#g422m)"/>
<rect x="385" y="0" width="330" height="90" rx="6.243" fill="#e6f4ee" stroke="#009254" stroke-width="2.081"/>
<line x1="385" y1="34" x2="715" y2="34" stroke="#009254" stroke-width="1.561"/>
<text x="550" y="23" font-size="12.487pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2 · Aprende</text>
<text x="550" y="70" font-size="10.926pt" font-weight="700" fill="#065f46" text-anchor="middle">MAC de origen → puerto</text>
<line x1="719" y1="45" x2="766" y2="45" stroke="#364e6c" stroke-width="2.081" marker-end="url(#g422m)"/>
<rect x="770" y="0" width="330" height="90" rx="6.243" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.081"/>
<line x1="770" y1="34" x2="1100" y2="34" stroke="#dd3a00" stroke-width="1.561"/>
<text x="935" y="23" font-size="12.487pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">3 · Lee</text>
<text x="935" y="70" font-size="10.926pt" font-weight="700" fill="#7c2d12" text-anchor="middle">la MAC de destino</text>
<polyline points="935,90 935,126 600,126 600,150" fill="none" stroke="#364e6c" stroke-width="2.081" marker-end="url(#g422m)"/>
<rect x="410" y="150" width="380" height="70" rx="6.243" fill="#ebedf0" stroke="#364e6c" stroke-width="2.081"/>
<line x1="410" y1="184" x2="790" y2="184" stroke="#364e6c" stroke-width="1.561"/>
<text x="600" y="173" font-size="12.487pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">4 · Consulta la tabla MAC</text>
<text x="600" y="214" font-size="10.926pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">según el destino</text>
<rect x="0" y="290" width="340" height="84" rx="6.243" fill="#e6f4ee" stroke="#009254" stroke-width="2.081"/>
<line x1="0" y1="320" x2="340" y2="320" stroke="#009254" stroke-width="1.561"/>
<text x="170" y="311" font-size="12.487pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Reenvía</text>
<text x="170" y="352" font-size="10.926pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">destino conocido en otro puerto</text>
<polyline points="600,220 600,255 170,255 170,290" fill="none" stroke="#009254" stroke-width="2.081" marker-end="url(#g422m)"/>
<rect x="430" y="290" width="340" height="84" rx="6.243" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.081"/>
<line x1="430" y1="320" x2="770" y2="320" stroke="#dd3a00" stroke-width="1.561"/>
<text x="600" y="311" font-size="12.487pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Filtra</text>
<text x="600" y="352" font-size="10.926pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">destino en el mismo puerto</text>
<polyline points="600,220 600,255 600,255 600,290" fill="none" stroke="#dd3a00" stroke-width="2.081" marker-end="url(#g422m)"/>
<rect x="860" y="290" width="340" height="84" rx="6.243" fill="#fbe6e6" stroke="#d40000" stroke-width="2.081"/>
<line x1="860" y1="320" x2="1200" y2="320" stroke="#d40000" stroke-width="1.561"/>
<text x="1030" y="311" font-size="12.487pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Inunda</text>
<text x="1030" y="352" font-size="10.926pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">destino desconocido: todos menos el de entrada</text>
<polyline points="600,220 600,255 1030,255 1030,290" fill="none" stroke="#d40000" stroke-width="2.081" marker-end="url(#g422m)"/>
</g><text x="600" y="414.893" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 5.3. Decisión de reenvío de un switch.</text></svg>
</div>

### Proceso del *Switching*

- El *switch* recibe una trama por un puerto de entrada.
- Extrae la dirección MAC de origen y la asocia al puerto por el que llegó, actualizando su tabla MAC.
- Lee la dirección MAC de destino de la trama.
- Consulta su tabla MAC:
  - Si la dirección de destino está en la tabla y corresponde a un puerto diferente al de llegada, el *switch* reenvía la trama solo por ese puerto.
  - Si la dirección de destino está en la tabla y corresponde al mismo puerto de llegada, el *switch* descarta la trama (filtrado).
  - Si la dirección de destino no está en la tabla (dirección desconocida), el *switch* envía la trama por todos los puertos excepto el de llegada (inundación).

La tabla MAC se construye dinámicamente mediante el aprendizaje de las direcciones de origen de las tramas recibidas.

Las entradas dinámicas caducan después de un intervalo configurable que depende del fabricante y de la configuración; 300 segundos es un valor típico en muchos equipos, no un requisito universal. La Tabla 5.1 muestra un ejemplo de tabla MAC.

<div class="diagram tabla-svg" id="tabla-5-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 211" role="img" aria-labelledby="t17-title"><title id="t17-title">Tabla 5.1. Ejemplo de tabla de direcciones MAC.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="89.0" y="20.0" dominant-baseline="central" text-anchor="middle">VLAN</text>
<text class="tb-ht" x="385.6" y="20.0" dominant-baseline="central" text-anchor="middle">Dirección MAC</text>
<text class="tb-ht" x="697.0" y="20.0" dominant-baseline="central" text-anchor="middle">Puerto</text>
<text class="tb-ht" x="1000.3" y="20.0" dominant-baseline="central" text-anchor="middle">Tipo de entrada</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">1</text>
<text class="tb-tx" x="190.0" y="60.8" dominant-baseline="central">00:1a:2b:3c:4d:5e</text>
<text class="tb-tx" x="605.3" y="60.8" dominant-baseline="central">Gi0/1</text>
<text class="tb-tx" x="812.6" y="60.8" dominant-baseline="central">Dinámica</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">1</text>
<text class="tb-tx" x="190.0" y="101.5" dominant-baseline="central">a0:b1:c2:d3:e4:f5</text>
<text class="tb-tx" x="605.3" y="101.5" dominant-baseline="central">Gi0/2</text>
<text class="tb-tx" x="812.6" y="101.5" dominant-baseline="central">Dinámica</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">10</text>
<text class="tb-tx" x="190.0" y="142.2" dominant-baseline="central">00:25:9c:5f:3a:01</text>
<text class="tb-tx" x="605.3" y="142.2" dominant-baseline="central">Gi0/5</text>
<text class="tb-tx" x="812.6" y="142.2" dominant-baseline="central">Dinámica</text>
<text class="tb-cap" x="600.0" y="189.0" text-anchor="middle">Tabla 5.1. Ejemplo de tabla de direcciones MAC.</text></svg>
</div>

##### Consulta de la tabla ARP (vecinos) desde *Linux*

En *Linux*, la caché de vecinos del sistema operativo relaciona direcciones de capa de red con direcciones de capa de enlace cuando corresponde.

En IPv4 suele describirse como tabla ARP; en IPv6, como tabla de vecinos. Puede consultarse mediante los siguientes comandos:

```text
Networking@SecOpsMX:~$ ip neigh show
192.168.1.1 dev eth0 lladdr 00:25:9c:5f:3a:01 REACHABLE
192.168.1.20 dev eth0 lladdr a0:b1:c2:d3:e4:f5 STALE
fe80::1 dev eth0 lladdr 00:25:9c:5f:3a:01 router STALE
```

##### También puede utilizarse el comando tradicional:

```text
Networking@SecOpsMX:~$ arp -n
Address HWtype HWaddress Flags Mask Iface
192.168.1.1 ether 00:25:9c:5f:3a:01 C eth0
192.168.1.20 ether a0:b1:c2:d3:e4:f5 C eth0
```

La tabla MAC propiamente dicha (la que utiliza un *bridge* o *switch* por *software* para reenviar tramas) se consulta con:

```text
Networking@SecOpsMX:~$ bridge fdb show br br0
```

## 5.2 VLAN

En una red conmutada sin configuración adicional, todos los dispositivos conectados al mismo *switch* (o a *switches* interconectados) pertenecen a un único dominio de *broadcast*. Esto significa que una trama de difusión (*broadcast*) enviada por cualquier dispositivo llegará a todos los demás.

A medida que la red crece, el tráfico *broadcast* consume ancho de banda y recursos de procesamiento en todos los *hosts*. Para solucionar este problema y mejorar la flexibilidad administrativa, se introducen las VLAN (*Virtual Local Area Networks*).

Una VLAN segmenta de manera lógica la red física y permite agrupar dispositivos en dominios de *broadcast* independientes, sin importar su ubicación física; la Figura 5.4 muestra un *switch* dividido de este modo.

<div class="diagram" id="figura-5-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g423" viewBox="0 0 1200 420.842" role="img" aria-labelledby="g423-title">
<title id="g423-title">Un switch físico dividido en tres VLAN</title>
<defs><marker id="g423m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g423n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g423-c" transform="translate(21.735 21.735) scale(1.157)"><rect x="0" y="0" width="1000" height="72" rx="5.188" fill="#ebedf0" stroke="#364e6c" stroke-width="2.162"/>
<rect x="71" y="27" width="30" height="18" rx="2.594" fill="#f4bfbf" stroke="#d40000" stroke-width="1.297"/>
<rect x="107" y="27" width="30" height="18" rx="2.594" fill="#f4bfbf" stroke="#d40000" stroke-width="1.297"/>
<rect x="143" y="27" width="30" height="18" rx="2.594" fill="#f4bfbf" stroke="#d40000" stroke-width="1.297"/>
<rect x="179" y="27" width="30" height="18" rx="2.594" fill="#f4bfbf" stroke="#d40000" stroke-width="1.297"/>
<rect x="215" y="27" width="30" height="18" rx="2.594" fill="#f4bfbf" stroke="#d40000" stroke-width="1.297"/>
<rect x="251" y="27" width="30" height="18" rx="2.594" fill="#f4bfbf" stroke="#d40000" stroke-width="1.297"/>
<rect x="287" y="27" width="30" height="18" rx="2.594" fill="#f4bfbf" stroke="#d40000" stroke-width="1.297"/>
<rect x="323" y="27" width="30" height="18" rx="2.594" fill="#f4bfbf" stroke="#d40000" stroke-width="1.297"/>
<rect x="359" y="27" width="30" height="18" rx="2.594" fill="#bfcff2" stroke="#003ecc" stroke-width="1.297"/>
<rect x="395" y="27" width="30" height="18" rx="2.594" fill="#bfcff2" stroke="#003ecc" stroke-width="1.297"/>
<rect x="431" y="27" width="30" height="18" rx="2.594" fill="#bfcff2" stroke="#003ecc" stroke-width="1.297"/>
<rect x="467" y="27" width="30" height="18" rx="2.594" fill="#bfcff2" stroke="#003ecc" stroke-width="1.297"/>
<rect x="503" y="27" width="30" height="18" rx="2.594" fill="#bfcff2" stroke="#003ecc" stroke-width="1.297"/>
<rect x="539" y="27" width="30" height="18" rx="2.594" fill="#bfcff2" stroke="#003ecc" stroke-width="1.297"/>
<rect x="575" y="27" width="30" height="18" rx="2.594" fill="#bfcff2" stroke="#003ecc" stroke-width="1.297"/>
<rect x="611" y="27" width="30" height="18" rx="2.594" fill="#bfcff2" stroke="#003ecc" stroke-width="1.297"/>
<rect x="647" y="27" width="30" height="18" rx="2.594" fill="#bfe4d4" stroke="#009254" stroke-width="1.297"/>
<rect x="683" y="27" width="30" height="18" rx="2.594" fill="#bfe4d4" stroke="#009254" stroke-width="1.297"/>
<rect x="719" y="27" width="30" height="18" rx="2.594" fill="#bfe4d4" stroke="#009254" stroke-width="1.297"/>
<rect x="755" y="27" width="30" height="18" rx="2.594" fill="#bfe4d4" stroke="#009254" stroke-width="1.297"/>
<rect x="791" y="27" width="30" height="18" rx="2.594" fill="#bfe4d4" stroke="#009254" stroke-width="1.297"/>
<rect x="827" y="27" width="30" height="18" rx="2.594" fill="#bfe4d4" stroke="#009254" stroke-width="1.297"/>
<rect x="863" y="27" width="30" height="18" rx="2.594" fill="#bfe4d4" stroke="#009254" stroke-width="1.297"/>
<rect x="899" y="27" width="30" height="18" rx="2.594" fill="#bfe4d4" stroke="#009254" stroke-width="1.297"/>
<rect x="0" y="150" width="310" height="150" rx="5.188" fill="#fbe6e6" stroke="#d40000" stroke-width="2.162"/>
<line x1="0" y1="184" x2="310" y2="184" stroke="#d40000" stroke-width="1.297"/>
<text x="155" y="173" font-size="12.1pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">VLAN 10 · Datos</text>
<rect x="20" y="256" width="270" height="30" rx="5.188" fill="#f4bfbf" stroke="#d40000" stroke-width="1.297"/>
<text x="155" y="276.752" font-size="9.075pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">192.168.10.0/24 · broadcast propio</text>
<polyline points="212,45 212,100 155,100 155,150" fill="none" stroke="#d40000" stroke-width="2.162"/>
<rect x="345" y="150" width="310" height="150" rx="5.188" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.162"/>
<line x1="345" y1="184" x2="655" y2="184" stroke="#003ecc" stroke-width="1.297"/>
<text x="500" y="173" font-size="12.1pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">VLAN 20 · Voz</text>
<rect x="365" y="256" width="270" height="30" rx="5.188" fill="#bfcff2" stroke="#003ecc" stroke-width="1.297"/>
<text x="500" y="276.752" font-size="9.075pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">192.168.20.0/24 · broadcast propio</text>
<polyline points="500,45 500,100 500,100 500,150" fill="none" stroke="#003ecc" stroke-width="2.162"/>
<rect x="690" y="150" width="310" height="150" rx="5.188" fill="#e6f4ee" stroke="#009254" stroke-width="2.162"/>
<line x1="690" y1="184" x2="1000" y2="184" stroke="#009254" stroke-width="1.297"/>
<text x="845" y="173" font-size="12.1pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">VLAN 30 · Administración</text>
<rect x="710" y="256" width="270" height="30" rx="5.188" fill="#bfe4d4" stroke="#009254" stroke-width="1.297"/>
<text x="845" y="276.752" font-size="9.075pt" font-weight="700" fill="#065f46" text-anchor="middle">192.168.30.0/24 · broadcast propio</text>
<polyline points="788,45 788,100 845,100 845,150" fill="none" stroke="#009254" stroke-width="2.162"/>
<g transform="translate(155 219.421) scale(0.605)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(500 219.421) scale(0.605)" data-lib="pc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6ecfa" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(845 219.421) scale(0.605)" data-lib="pc"><g stroke="#009254" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6f4ee" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g></g><text x="600" y="403.002" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 5.4. Un switch físico dividido en tres VLAN.</text></svg>
</div>

### Características de las VLAN

#### Aislamiento del tráfico

El tráfico *broadcast*, *multicast* y *unicast* desconocido queda restringido a la VLAN de origen.

#### Flexibilidad en la organización

Los miembros de una VLAN pueden estar distribuidos en diferentes *switches*, siempre que estos estén configurados con las mismas VLAN y utilicen un enlace troncal (*trunking*, se aborda en la sección 5.3).

<div class="diagram tabla-svg" id="tabla-5-2" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 256" role="img" aria-labelledby="t18-title"><title id="t18-title">Tabla 5.2. Rangos de VLAN ID y clasificación utilizada por Cisco.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="48.4" y="20.0" dominant-baseline="central" text-anchor="middle">VLAN ID</text>
<text class="tb-ht" x="188.6" y="20.0" dominant-baseline="central" text-anchor="middle">Clasificación</text>
<text class="tb-ht" x="740.2" y="20.0" dominant-baseline="central" text-anchor="middle">Observación</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">0 y 4095</text>
<text class="tb-tx" x="108.8" y="60.8" dominant-baseline="central">Valores reservados</text>
<text class="tb-tx" x="292.4" y="60.8" dominant-baseline="central">Definidos por IEEE 802.1Q; no se asignan como VLAN de usuario ordinarias.</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="112.9" dominant-baseline="central">1–1005</text>
<text class="tb-tx" x="108.8" y="101.5" dominant-baseline="central">Rango normal de</text>
<text class="tb-tx" x="108.8" y="124.2" dominant-baseline="central">Cisco</text>
<text class="tb-tx" x="292.4" y="101.5" dominant-baseline="central">Incluye la VLAN 1 (predeterminada; existe por defecto en muchos switches y su uso depende del fabricante) y las</text>
<text class="tb-tx" x="292.4" y="124.2" dominant-baseline="central">VLAN 1002–1005, reservadas y asociadas históricamente con FDDI y Token Ring.</text>
<rect class="tb-te" x="0" y="145.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="176.4" dominant-baseline="central">1006–4094</text>
<text class="tb-tx" x="108.8" y="165.0" dominant-baseline="central">Rango extendido de</text>
<text class="tb-tx" x="108.8" y="187.8" dominant-baseline="central">Cisco</text>
<text class="tb-tx" x="292.4" y="176.4" dominant-baseline="central">Utilizado para VLAN extendidas en plataformas Cisco compatibles.</text>
<text class="tb-cap" x="600.0" y="234.5" text-anchor="middle">Tabla 5.2. Rangos de VLAN ID y clasificación utilizada por Cisco.</text></svg>
</div>

#### Mejora de la seguridad

Al separar la red mediante VLAN, un dispositivo de una VLAN no puede acceder directamente a otra sin pasar por un dispositivo de capa 3 (*router* o *firewall*), donde se pueden aplicar políticas de control.

No obstante, las VLAN por sí solas no constituyen un mecanismo de seguridad completo (por ejemplo, existen ataques de *VLAN hopping*), por lo que deben complementarse con ACL, *firewalls* y una configuración segura de los puertos troncales.

#### Reducción del tráfico *broadcast*

Cada VLAN es un dominio de *broadcast* independiente, lo que mejora el rendimiento de la red. Las VLAN se identifican mediante un número denominado VLAN ID, en el rango de 1 a 4094.

En la terminología de *Cisco*, el rango de 1 a 1005 corresponde a las VLAN normales (las VLAN 1002 a 1005 están reservadas para FDDI y *Token Ring*), mientras que el rango de 1006 a 4094 corresponde a las VLAN extendidas. La Tabla 5.2 resume esta clasificación.

### Tipos de VLAN según su propósito

<div class="diagram tabla-svg" id="tabla-5-3" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 343" role="img" aria-labelledby="t19-title"><title id="t19-title">Tabla 5.3. Tipos de VLAN según su propósito.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="72.6" y="20.0" dominant-baseline="central" text-anchor="middle">Tipo de VLAN</text>
<text class="tb-ht" x="395.8" y="20.0" dominant-baseline="central" text-anchor="middle">Propósito</text>
<text class="tb-ht" x="923.3" y="20.0" dominant-baseline="central" text-anchor="middle">Consideración</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Datos</text>
<text class="tb-tx" x="157.1" y="60.8" dominant-baseline="central">Transporta el tráfico generado por los dispositivos finales</text>
<text class="tb-tx" x="157.1" y="83.5" dominant-baseline="central">de los usuarios.</text>
<text class="tb-tx" x="658.6" y="72.1" dominant-baseline="central">Permite segmentar por departamento, función o nivel de acceso.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Voz</text>
<text class="tb-tx" x="157.1" y="135.6" dominant-baseline="central">Se utiliza para separar el tráfico de telefonía IP (VoIP).</text>
<text class="tb-tx" x="658.6" y="124.2" dominant-baseline="central">La priorización requiere políticas de QoS y marcado coherentes;</text>
<text class="tb-tx" x="658.6" y="147.0" dominant-baseline="central">no la proporciona la VLAN por sí sola.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Nativa</text>
<text class="tb-tx" x="157.1" y="187.8" dominant-baseline="central">Identifica la VLAN asociada a las tramas sin etiqueta en un</text>
<text class="tb-tx" x="157.1" y="210.5" dominant-baseline="central">enlace troncal 802.1Q, según la configuración.</text>
<text class="tb-tx" x="658.6" y="187.8" dominant-baseline="central">Debe configurarse de forma coherente en ambos extremos; se</text>
<text class="tb-tx" x="658.6" y="210.5" dominant-baseline="central">recomienda no utilizar la VLAN 1 para tráfico de usuario.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="262.6" dominant-baseline="central">Administración</text>
<text class="tb-tx" x="157.1" y="251.2" dominant-baseline="central">Transporta el tráfico de gestión de switches, routers y otros</text>
<text class="tb-tx" x="157.1" y="274.0" dominant-baseline="central">dispositivos de infraestructura.</text>
<text class="tb-tx" x="658.6" y="251.2" dominant-baseline="central">Debe mantenerse aislada del tráfico de usuario y protegida</text>
<text class="tb-tx" x="658.6" y="274.0" dominant-baseline="central">mediante controles de acceso.</text>
<text class="tb-cap" x="600.0" y="320.8" text-anchor="middle">Tabla 5.3. Tipos de VLAN según su propósito.</text></svg>
</div>

#### VLAN nativa

En un enlace troncal 802.1Q, la VLAN nativa es la VLAN asociada a las tramas que se transmiten sin etiqueta en la configuración habitual.

La posibilidad de etiquetar también esa VLAN depende del fabricante y de la configuración.

Lo recomendable es no usar la VLAN predeterminada para tráfico de usuario y mantener una configuración coherente en ambos extremos del enlace.

#### VLAN de datos

Transporta el tráfico generado por los dispositivos finales de los usuarios.

#### VLAN de voz

Dedicada al tráfico de telefonía IP (VoIP), separada del resto para que el tráfico de voz pueda recibir un tratamiento prioritario mediante QoS y marcado de tráfico; la VLAN por sí sola no lo prioriza.

#### VLAN de administración

Utilizada para la gestión remota de *switches* y *routers*, manteniéndose aislada del tráfico de usuario.

Los tipos de VLAN no son excluyentes entre sí, porque clasifican el propósito del segmento y no la tecnología con que se implementa; la Tabla 5.3 los resume según ese propósito.

##### Implementación de VLAN en *Linux*

En sistemas *Linux*, las interfaces VLAN pueden crearse utilizando el comando ip del paquete *iproute2*.

Es necesario que el módulo del *kernel* 8021q esté cargado.

##### Verificar que el módulo está disponible:

```text
Networking@SecOpsMX:~$ lsmod | grep 8021q
```

##### Si no aparece, cargarlo con:

```text
Networking@SecOpsMX:~$ sudo modprobe 8021q
```

##### Creación de VLAN desde *Linux*

Para crear una interfaz VLAN con ID 10 sobre la interfaz física eth0:

```text
Networking@SecOpsMX:~$ sudo ip link add link eth0 name eth0.10 type vlan id 10
```

##### Para asignar una dirección IP a la interfaz VLAN:

```text
Networking@SecOpsMX:~$ sudo ip addr add 192.168.10.1/24 dev eth0.10
```

##### Para activar la interfaz VLAN:

```text
Networking@SecOpsMX:~$ sudo ip link set dev eth0.10 up
```

##### Consulta de la lista de VLAN desde terminal

Para verificar las interfaces VLAN creadas:

```text
Networking@SecOpsMX:~$ ip -d link show type vlan
4: eth0.10@eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP mode DEFAULT group default qlen 1000
link/ether 00:1a:2b:3c:4d:5e brd ff:ff:ff:ff:ff:ff promiscuity 0
vlan protocol 802.1Q id 10 <REORDER_HDR> addrgenmode eui64 numtxqueues 1 numrxqueues 1 gso_max_size 65536 gso_max_segs 65535
```

También puede consultarse información específica en el sistema de archivos /proc:

```text
Networking@SecOpsMX:~$ cat /proc/net/vlan/config
VLAN Dev name | VLAN ID
Name-Type: VLAN_NAME_TYPE_RAW_PLUS_VID_NO_PAD
eth0.10 | 10 | eth0
```

Los dispositivos de una misma VLAN comparten dominio de *broadcast* y pueden comunicarse en capa 2, aunque estén en *switches* distintos.

Para comunicarse con dispositivos de otra VLAN se requiere enrutamiento mediante un *router* o un *switch* de capa 3.

La diferencia entre una red segmentada y una no segmentada se observa en el **Anexo III.**

## 5.3 TRUNKING IEEE 802.1Q

Cuando múltiples VLAN deben viajar por un mismo enlace físico entre dos *switches*, o entre un *switch* y un *router*, se requiere un mecanismo que permita al dispositivo receptor identificar a qué VLAN pertenece cada trama. IEEE 802.1Q define el etiquetado de VLAN y el modelo de puentes virtuales. El etiquetado añade un campo de 4 bytes (32 bits) entre la dirección MAC de origen y el campo EtherType/Length de la trama Ethernet.

Un enlace que transporta varias VLAN de este modo se denomina enlace troncal (*trunk*): mediante la inserción de una etiqueta (*tag*) en cada trama Ethernet, se identifica la VLAN de pertenencia. El *trunking* permite escalar redes segmentadas mediante VLAN sin necesidad de instalar enlaces físicos independientes para cada una de ellas, lo que reduce la complejidad de la infraestructura y los costos de implementación. La estructura de la trama y el etiquetado del enlace troncal se muestran en la Figura 5.5.

La estructura de la etiqueta 802.1Q es la siguiente:

### TPID

Campo de 16 bits que indica que la trama está etiquetada. En el etiquetado habitual de VLAN de cliente (C-tag) es 0x8100; en contextos de proveedor (S-tag, IEEE 802.1ad) puede ser 0x88A8.

### TCI

Campo de 16 bits subdividido en:

- PCP (*Priority Code Point*): 3 bits utilizados para la asignación de prioridades según IEEE 802.1p y mecanismos de calidad de servicio (QoS).
- DEI (*Drop Eligible Indicator*): 1 bit utilizado para indicar la elegibilidad de descarte de la trama. Anteriormente se denominaba CFI (*Canonical Format Indicator*).
- VID (*VLAN Identifier*): 12 bits que identifican el número de VLAN. El rango teórico es de 0 a 4095, aunque los valores 0 y 4095 están reservados.

Cuando una trama etiquetada llega al *switch* receptor, este procesa el identificador de VLAN y aplica la configuración del puerto de salida.

En un puerto de acceso configurado para esa VLAN, normalmente envía la trama sin etiqueta; en un enlace troncal puede mantener la etiqueta.

Algunas NIC y sistemas operativos también pueden interpretar etiquetas VLAN, de modo que las interfaces de los dispositivos finales no siempre ignoran el etiquetado.

### VLAN *pruning*

En un enlace *trunk* entre dos *switches* no es necesario transportar todas las VLAN definidas en ambos dispositivos.

La poda manual (*pruning*) consiste en limitar la lista de VLAN permitidas en el *trunk* (*allowed VLAN list*), lo que reduce el tráfico innecesario.

Por ejemplo, si el *switch* A solo necesita las VLAN 10, 20 y 30 hacia el *switch* B, el *trunk* se configura con *switchport trunk allowed vlan 10,20,30*.

En equipos *Cisco* existe además VTP *pruning*, un mecanismo dinámico que realiza una poda automática.

<div class="diagram" id="figura-5-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g424" viewBox="0 0 1200 309.67" role="img" aria-labelledby="g424-title">
<title id="g424-title">Trama Ethernet con etiqueta 802.1Q</title>
<defs><marker id="g424m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g424n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g424-c" transform="translate(21.701 21.701) scale(1.134)"><rect x="0" y="0" width="150" height="58" rx="5.291" fill="#ebedf0" stroke="#364e6c" stroke-width="2.205"/>
<text x="75" y="26" font-size="10.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">MAC destino</text>
<text x="75" y="46" font-size="10.582pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">6 B</text>
<rect x="150" y="0" width="150" height="58" rx="5.291" fill="#ebedf0" stroke="#364e6c" stroke-width="2.205"/>
<text x="225" y="26" font-size="10.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">MAC origen</text>
<text x="225" y="46" font-size="10.582pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">6 B</text>
<rect x="300" y="0" width="190" height="58" rx="5.291" fill="#f6cebf" stroke="#dd3a00" stroke-width="2.205"/>
<text x="395" y="26" font-size="10.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Etiqueta 802.1Q</text>
<text x="395" y="46" font-size="10.582pt" fill="#7c2d12" text-anchor="middle" font-weight="400">4 B</text>
<rect x="490" y="0" width="130" height="58" rx="5.291" fill="#ebedf0" stroke="#364e6c" stroke-width="2.205"/>
<text x="555" y="26" font-size="10.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">EtherType</text>
<text x="555" y="46" font-size="10.582pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">2 B</text>
<rect x="620" y="0" width="300" height="58" rx="5.291" fill="#ebedf0" stroke="#364e6c" stroke-width="2.205"/>
<text x="770" y="26" font-size="10.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Datos</text>
<text x="770" y="46" font-size="10.582pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">46–1500 B</text>
<rect x="920" y="0" width="100" height="58" rx="5.291" fill="#ebedf0" stroke="#364e6c" stroke-width="2.205"/>
<text x="970" y="26" font-size="10.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">FCS</text>
<text x="970" y="46" font-size="10.582pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">4 B</text>
<line x1="300" y1="58" x2="95" y2="150" stroke="#dd3a00" stroke-width="1.323" stroke-dasharray="5.291 3.528"/>
<line x1="490" y1="58" x2="925" y2="150" stroke="#dd3a00" stroke-width="1.323" stroke-dasharray="5.291 3.528"/>
<rect x="95" y="150" width="280" height="58" rx="5.291" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.205"/>
<text x="235" y="176" font-size="10.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">TPID</text>
<text x="235" y="196" font-size="10.582pt" fill="#7c2d12" text-anchor="middle" font-weight="400">16 bits · 0x8100</text>
<rect x="375" y="150" width="140" height="58" rx="5.291" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.205"/>
<text x="445" y="176" font-size="10.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">PCP</text>
<text x="445" y="196" font-size="10.582pt" fill="#5b21b6" text-anchor="middle" font-weight="400">3 bits</text>
<rect x="515" y="150" width="110" height="58" rx="5.291" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.205"/>
<text x="570" y="176" font-size="10.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">DEI</text>
<text x="570" y="196" font-size="10.582pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">1 bit</text>
<rect x="625" y="150" width="300" height="58" rx="5.291" fill="#e6f4ee" stroke="#009254" stroke-width="2.205"/>
<text x="775" y="176" font-size="10.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">VID</text>
<text x="775" y="196" font-size="10.582pt" fill="#065f46" text-anchor="middle" font-weight="400">12 bits</text>
<line x1="375" y1="138" x2="925" y2="138" stroke="#7c3aed" stroke-width="2.205"/>
<line x1="375" y1="138" x2="375" y2="148" stroke="#7c3aed" stroke-width="2.205"/>
<line x1="925" y1="138" x2="925" y2="148" stroke="#7c3aed" stroke-width="2.205"/>
<text x="650" y="126" font-size="10.582pt" font-weight="700" fill="#5b21b6" text-anchor="middle">TCI · 16 bits</text>
</g><text x="600" y="291.83" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 5.5. Trama Ethernet con etiqueta 802.1Q.</text></svg>
</div>

##### Configuración típica de *trunking*

Dentro de la interfaz correspondiente (por ejemplo, interface GigabitEthernet0/1), se fija el modo *trunk* (en los equipos *Cisco* que admiten tanto ISL como 802.1Q debe fijarse antes la encapsulación con *switchport trunk encapsulation dot1q*):

```text
switchport mode trunk
```

(el otro extremo debe estar también en modo *trunk* o negociarlo mediante DTP para que el enlace funcione correctamente).

##### Configurar puertos de acceso:

Los puertos de acceso conectan dispositivos finales y pertenecen a una sola VLAN; en ellos se fija el modo *access* y la VLAN correspondiente:

```text
switchport mode access
switchport access vlan X
```

(especifica a qué VLAN pertenece cada dispositivo final).

##### Especificar VLAN permitidas en *trunk* (*pruning*):

```text
switchport trunk allowed vlan 10,20,30
switchport trunk allowed vlan all
```

##### Definir VLAN nativa (sin etiquetado):

```text
switchport trunk native vlan 999
```

(recomendado usar VLAN diferente de 1 y no usar para tráfico de usuario).

##### Verificación de enlaces troncales desde *Cisco*

```text
show interfaces trunk
```

```text
Port Mode Encapsulation Status Native vlan
Gi0/1 on 802.1q trunking 999
Port Vlans allowed on trunk
Gi0/1 10,20,30
Port Vlans allowed and active in management domain
Gi0/1 10,20,30
Port Vlans in spanning tree forwarding state and not pruned
Gi0/1 10,20,30
```

```text
show vlan brief
```

```text
VLAN Name            Status   Ports
---- ---------------- --------- ----------------
1   default         active   Gi0/2, Gi0/3, Gi0/4
10  Datos           active   Gi0/5, Gi0/6
20  Voz             active   Gi0/7, Gi0/8
30  Administracion  active   Gi0/9
999 Nativa          active
1002 fddi-default    act/unsup
1003 token-ring-default act/unsup
1004 fddinet-default  act/unsup
1005 trnet-default    act/unsup
```

##### Verificación de *Trunking* 802.1Q con *Tcpdump*

En sistemas *Linux*, puede capturarse tráfico de una interfaz *trunk* para verificar las etiquetas VLAN:

```text
Networking@SecOpsMX:~$ sudo tcpdump -i eth0 -e vlan -c 10
```

```text
12:34:56.789012 a0:b1:c2:d3:e4:f5 > ff:ff:ff:ff:ff:ff, ethertype 802.1Q (0x8100), length 46: vlan 10, p 0, ethertype ARP, Request who-has 192.168.10.1 tell 192.168.10.100, length 28
12:34:56.789123 00:1a:2b:3c:4d:5e > a0:b1:c2:d3:e4:f5, ethertype 802.1Q (0x8100), length 46: vlan 10, p 0, ethertype ARP, Reply 192.168.10.1 is-at 00:1a:2b:3c:4d:5e, length 28
```

## 5.4 STP, RSTP Y MSTP

En redes conmutadas que requieren redundancia para evitar puntos únicos de falla, es habitual implementar enlaces adicionales entre *switches*. Sin embargo, la existencia de múltiples caminos activos entre dispositivos puede generar bucles de capa 2, provocando tormentas de *broadcast*, duplicación de tramas y degradaciones del rendimiento.

Para resolver este problema sin eliminar la redundancia física, se utiliza el protocolo *Spanning Tree* (STP). El funcionamiento de STP se basa en cuatro decisiones que construyen una topología libre de bucles. La Figura 5.6 las resume.

### Elección del *switch* raíz

Todos los *switches* intercambian mensajes BPDU (*Bridge Protocol Data Units*), que contienen información de prioridad y dirección MAC.

El *switch* con la prioridad más baja se convierte en el *Root Bridge*. En caso de empate, se selecciona el que posea la dirección MAC más baja.

### Determinación del puerto raíz

Cada *switch* que no es raíz selecciona el puerto que ofrece la ruta de menor costo hacia el *Root Bridge*.

### Selección de puertos designados

En cada segmento de red se elige un puerto designado, que es el puerto con la mejor ruta hacia el *Root Bridge* y el encargado de reenviar el tráfico de ese segmento.

Los puertos que no son ni raíz ni designados quedan bloqueados para evitar bucles.

### Bloqueo de los puertos restantes

Los puertos que no son ni puertos raíz ni puertos designados se colocan en estado *Blocking*, donde no reenvían tráfico de usuario y solo procesan información de control.

<div class="diagram" id="figura-5-06" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g425" viewBox="0 0 1200 549.332" role="img" aria-labelledby="g425-title"><title id="g425-title">Secuencia de decisiones de STP</title><g id="g425-c" transform="translate(5.405 8.649) scale(1.081)"><rect x="15" y="12" width="670" height="440" rx="5.55" fill="#ffffff" stroke="#364e6c" stroke-width="2.312"/><path d="M280 117L140 304" stroke="#009254" stroke-width="2.775" stroke-linecap="round"/><path d="M380 117L520 304" stroke="#009254" stroke-width="2.775" stroke-linecap="round"/><path d="M182 330L478 330" stroke="#009254" stroke-width="2.775" stroke-linecap="round"/><path d="M410 330L478 330" stroke="#d40000" stroke-width="2.775" stroke-dasharray="5.55 3.7"/><g transform="translate(330,95) scale(0.925)"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#003ecc"/><circle cx="-24" cy="-15" r="2.5" fill="#003ecc"/><circle cx="-4" cy="-15" r="2.5" fill="#003ecc"/><circle cx="16" cy="-15" r="2.5" fill="#003ecc"/><circle cx="36" cy="-15" r="2.5" fill="#003ecc"/></g><g transform="translate(120,330) scale(0.647)"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#364e6c" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#364e6c"/><circle cx="-24" cy="-15" r="2.5" fill="#364e6c"/><circle cx="-4" cy="-15" r="2.5" fill="#364e6c"/><circle cx="16" cy="-15" r="2.5" fill="#364e6c"/><circle cx="36" cy="-15" r="2.5" fill="#364e6c"/></g><g transform="translate(540,330) scale(0.647)"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#364e6c" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#364e6c"/><circle cx="-24" cy="-15" r="2.5" fill="#364e6c"/><circle cx="-4" cy="-15" r="2.5" fill="#364e6c"/><circle cx="16" cy="-15" r="2.5" fill="#364e6c"/><circle cx="36" cy="-15" r="2.5" fill="#364e6c"/></g><text x="330" y="49" font-size="11.101pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Root Bridge</text><text x="120" y="374" font-size="9.713pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Switch B</text><text x="540" y="374" font-size="9.713pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Switch C</text><circle cx="256" cy="81" r="15" fill="#1e3a8a"/><text x="256" y="86" font-size="11.101pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text><circle cx="170" cy="268" r="15" fill="#065f46"/><text x="170" y="273" font-size="11.101pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text><circle cx="490" cy="268" r="15" fill="#065f46"/><text x="490" y="273" font-size="11.101pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text><circle cx="264" cy="147" r="15" fill="#7c2d12"/><text x="264" y="152" font-size="11.101pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text><circle cx="396" cy="147" r="15" fill="#7c2d12"/><text x="396" y="152" font-size="11.101pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text><circle cx="208" cy="314" r="15" fill="#7c2d12"/><text x="208" y="319" font-size="11.101pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text><circle cx="452" cy="314" r="15" fill="#7f1d1d"/><text x="452" y="319" font-size="11.101pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text><path d="M444 324l12 12M456 324l-12 12" stroke="#d40000" stroke-width="2.775" stroke-linecap="round" opacity="0"/><rect x="715" y="40" width="370" height="88" rx="5.55" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.312"/><circle cx="750" cy="84" r="19" fill="#1e3a8a"/><text x="750" y="89" font-size="11.101pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text><text x="785" y="80" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Root Bridge</text><text x="785" y="102" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="start">menor prioridad y MAC</text><path d="M900 130L900 143" stroke="#364e6c" stroke-width="2.312" stroke-linecap="round" fill="none"/><path d="M894.3 131.3L900 143L905.7 131.3" fill="none" stroke="#364e6c" stroke-width="2.312" stroke-linecap="round" stroke-linejoin="round"/><rect x="715" y="145" width="370" height="88" rx="5.55" fill="#e6f4ee" stroke="#009254" stroke-width="2.312"/><circle cx="750" cy="189" r="19" fill="#065f46"/><text x="750" y="194" font-size="11.101pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text><text x="785" y="185" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Puerto raíz</text><text x="785" y="207" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="start">menor costo a la raíz</text><path d="M900 235L900 248" stroke="#364e6c" stroke-width="2.312" stroke-linecap="round" fill="none"/><path d="M894.3 236.3L900 248L905.7 236.3" fill="none" stroke="#364e6c" stroke-width="2.312" stroke-linecap="round" stroke-linejoin="round"/><rect x="715" y="250" width="370" height="88" rx="5.55" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.312"/><circle cx="750" cy="294" r="19" fill="#7c2d12"/><text x="750" y="299" font-size="11.101pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text><text x="785" y="290" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Puerto designado</text><text x="785" y="312" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="start">uno por segmento</text><path d="M900 340L900 353" stroke="#364e6c" stroke-width="2.312" stroke-linecap="round" fill="none"/><path d="M894.3 341.3L900 353L905.7 341.3" fill="none" stroke="#364e6c" stroke-width="2.312" stroke-linecap="round" stroke-linejoin="round"/><rect x="715" y="355" width="370" height="88" rx="5.55" fill="#fbe6e6" stroke="#d40000" stroke-width="2.312"/><circle cx="750" cy="399" r="19" fill="#7f1d1d"/><text x="750" y="404" font-size="11.101pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text><text x="785" y="395" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Bloqueo</text><text x="785" y="417" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="start">Blocking · sin reenvío</text></g><text x="600" y="531.492" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 5.6. Secuencia de decisiones de STP.</text></svg>
</div>

### Estados y Timers de STP (IEEE 802.1D)

- *Hello Time* (por defecto 2 segundos): intervalo entre envío de BPDU.
- *Forward Delay* (por defecto 15 segundos): duración de estados *Listening* y *Learning* (15s × 2 = 30s total).
- *Max Age* (por defecto 20 segundos): tiempo máximo antes de descartar BPDU obsoleto de *Root Bridge*.

Convergencia de STP en el peor caso (fallo indirecto) = *Max Age* + 2 × *Forward Delay* = 20 + 2 × 15 = 50 segundos.

Si el fallo es de un enlace directo, el puerto solo atraviesa los estados *Listening* y *Learning*, es decir, 2 × 15 = 30 segundos.

RSTP reduce este tiempo a unos pocos segundos o incluso menos, gracias al mecanismo *Proposal/Agreement* y a los *edge ports*. La Tabla 5.4 resume los estados de puerto de STP clásico.

<div class="diagram tabla-svg" id="tabla-5-4" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 338" role="img" aria-labelledby="t20-title"><title id="t20-title">Tabla 5.4. Estados de puerto de STP clásico (IEEE 802.1D).</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="63.5"/>
<text class="tb-ht" x="56.9" y="31.4" dominant-baseline="central" text-anchor="middle">Estado</text>
<text class="tb-ht" x="186.7" y="20.0" dominant-baseline="central" text-anchor="middle">Reenvía</text>
<text class="tb-ht" x="186.7" y="42.8" dominant-baseline="central" text-anchor="middle">tráfico</text>
<text class="tb-ht" x="374.5" y="20.0" dominant-baseline="central" text-anchor="middle">Aprende direcciones</text>
<text class="tb-ht" x="374.5" y="42.8" dominant-baseline="central" text-anchor="middle">MAC</text>
<text class="tb-ht" x="559.6" y="20.0" dominant-baseline="central" text-anchor="middle">Procesa</text>
<text class="tb-ht" x="559.6" y="42.8" dominant-baseline="central" text-anchor="middle">BPDU</text>
<text class="tb-ht" x="914.9" y="31.4" dominant-baseline="central" text-anchor="middle">Duración típica</text>
<rect class="tb-te" x="0" y="63.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">Blocking</text>
<text class="tb-tx" x="125.8" y="83.5" dominant-baseline="central">No</text>
<text class="tb-tx" x="271.7" y="83.5" dominant-baseline="central">No</text>
<text class="tb-tx" x="501.4" y="83.5" dominant-baseline="central">Sí</text>
<text class="tb-tx" x="641.8" y="83.5" dominant-baseline="central">Indefinida mientras permanezca en ese estado.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">Listening</text>
<text class="tb-tx" x="125.8" y="124.2" dominant-baseline="central">No</text>
<text class="tb-tx" x="271.7" y="124.2" dominant-baseline="central">No</text>
<text class="tb-tx" x="501.4" y="124.2" dominant-baseline="central">Sí</text>
<text class="tb-tx" x="641.8" y="124.2" dominant-baseline="central">15 segundos con temporizadores predeterminados de STP clásico.</text>
<rect class="tb-te" x="0" y="145.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="165.0" dominant-baseline="central">Learning</text>
<text class="tb-tx" x="125.8" y="165.0" dominant-baseline="central">No</text>
<text class="tb-tx" x="271.7" y="165.0" dominant-baseline="central">Sí</text>
<text class="tb-tx" x="501.4" y="165.0" dominant-baseline="central">Sí</text>
<text class="tb-tx" x="641.8" y="165.0" dominant-baseline="central">15 segundos con temporizadores predeterminados de STP clásico.</text>
<rect class="tb-to" x="0" y="185.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="217.1" dominant-baseline="central">Forwarding</text>
<text class="tb-tx" x="125.8" y="217.1" dominant-baseline="central">Sí</text>
<text class="tb-tx" x="271.7" y="217.1" dominant-baseline="central">Sí</text>
<text class="tb-tx" x="501.4" y="217.1" dominant-baseline="central">Sí</text>
<text class="tb-tx" x="641.8" y="205.8" dominant-baseline="central">Mientras el puerto permanezca habilitado y seleccionado para</text>
<text class="tb-tx" x="641.8" y="228.5" dominant-baseline="central">reenvío.</text>
<rect class="tb-te" x="0" y="249.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="269.2" dominant-baseline="central">Disabled</text>
<text class="tb-tx" x="125.8" y="269.2" dominant-baseline="central">No</text>
<text class="tb-tx" x="271.7" y="269.2" dominant-baseline="central">No</text>
<text class="tb-tx" x="501.4" y="269.2" dominant-baseline="central">No</text>
<text class="tb-tx" x="641.8" y="269.2" dominant-baseline="central">No aplica; puerto deshabilitado o fuera de operación STP.</text>
<text class="tb-cap" x="600.0" y="316.0" text-anchor="middle">Tabla 5.4. Estados de puerto de STP clásico (IEEE 802.1D).</text></svg>
</div>

### Tiempo de convergencia de STP

En el STP clásico, los temporizadores predeterminados pueden producir tiempos de convergencia del orden de 30 a 50 segundos.

El resultado real depende de la topología, del tipo de fallo, de los temporizadores configurados y de la implementación; no es un tiempo fijo garantizado.

Aunque este tiempo era aceptable en redes tradicionales, resulta excesivo para aplicaciones sensibles a la latencia.

##### Verificación de STP en *Linux*

En sistemas *Linux* con *bridge* configurado, puede verificarse el estado de STP mediante:

```text
Networking@SecOpsMX:~$ sudo brctl showstp br0
br0
bridge id 8000.001a2b3c4d5e
designated root 8000.000102030405
root port 1 path cost 4
max age 20.00 bridge max age 20.00
hello time 2.00 bridge hello time 2.00
forward delay 15.00 bridge forward delay 15.00
ageing time 300.00
hello timer 0.00 tcn timer 0.00
topology change timer 0.00 gc timer 0.00
flags
eth0 (1)
port id 8001 state forwarding
designated root 8000.000102030405 path cost 4
designated bridge 8000.000102030405 message age timer 0.00
designated port 8001 forward delay timer 0.00
designated cost 0 hold timer 0.00
flags
eth1 (2)
port id 8002 state blocking
designated root 8000.000102030405 path cost 4
designated bridge 8000.001122334455 message age timer 0.00
designated port 8002 forward delay timer 0.00
designated cost 4 hold timer 0.00
flags
```

El comando *brctl* pertenece al paquete *bridge-utils*, considerado obsoleto; en distribuciones modernas puede utilizarse también *ip -d link show br0* o *bridge link show*.

Además, puede consultarse información de STP a través del sistema de archivos sysfs:

```text
Networking@SecOpsMX:~$ cat /sys/class/net/br0/bridge/stp_state
1
```

Una salida de 1 indica que STP está habilitado; 0 indica que está deshabilitado (el valor 2 indica que el STP lo gestiona un proceso en espacio de usuario).

### RSTP

RSTP, definido originalmente en IEEE 802.1w e integrado posteriormente en IEEE 802.1D, fue desarrollado para mejorar los tiempos de convergencia.

Puede converger en pocos segundos o menos en determinadas topologías, aunque el resultado depende de la configuración, la topología y la compatibilidad de los equipos. Las principales mejoras introducidas por RSTP son:

- Incorporación de nuevos roles de puerto, como *Alternate* y *Backup*.
- Implementación de un mecanismo explícito de negociación entre *switches* adyacentes mediante el proceso *Proposal/Agreement*.
- Eliminación de ciertas dependencias de temporizadores durante las transiciones controladas.
- Identificación de puertos de borde (*edge ports*), conectados directamente a dispositivos finales, que pueden pasar rápidamente al estado *Forwarding*.

<div class="diagram" id="figura-5-07" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g426" viewBox="0 0 1200 631.494" role="img" aria-labelledby="g426-title"><title id="g426-title">Roles de puerto en RSTP</title><g id="g426-c" transform="translate(5.405 8.649) scale(1.081)"><rect x="15" y="12" width="1070" height="380" rx="5.55" fill="#ffffff" stroke="#364e6c" stroke-width="2.312"/><path d="M500 97L230 224" stroke="#009254" stroke-width="2.775" stroke-linecap="round"/><path d="M600 97L870 224" stroke="#009254" stroke-width="2.775" stroke-linecap="round"/><path d="M260 250L840 250" stroke="#dd3a00" stroke-width="2.775" stroke-linecap="round" stroke-dasharray="5.55 3.7"/><path d="M180 276L170 345" stroke="#009254" stroke-width="2.775" stroke-linecap="round"/><path d="M220 276L230 345" stroke="#d40000" stroke-width="2.775" stroke-linecap="round" stroke-dasharray="5.55 3.7"/><rect x="120" y="345" width="160" height="26" rx="5.55" fill="#ebedf0" stroke="#364e6c" stroke-width="2.312"/><path d="M900 276L900 336" stroke="#009254" stroke-width="2.775" stroke-linecap="round"/><g transform="translate(900,358) scale(0.462)"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(550,75) scale(0.925)"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#003ecc"/><circle cx="-24" cy="-15" r="2.5" fill="#003ecc"/><circle cx="-4" cy="-15" r="2.5" fill="#003ecc"/><circle cx="16" cy="-15" r="2.5" fill="#003ecc"/><circle cx="36" cy="-15" r="2.5" fill="#003ecc"/></g><g transform="translate(200,250) scale(0.647)"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#364e6c" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#364e6c"/><circle cx="-24" cy="-15" r="2.5" fill="#364e6c"/><circle cx="-4" cy="-15" r="2.5" fill="#364e6c"/><circle cx="16" cy="-15" r="2.5" fill="#364e6c"/><circle cx="36" cy="-15" r="2.5" fill="#364e6c"/></g><g transform="translate(900,250) scale(0.647)"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#364e6c" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#364e6c"/><circle cx="-24" cy="-15" r="2.5" fill="#364e6c"/><circle cx="-4" cy="-15" r="2.5" fill="#364e6c"/><circle cx="16" cy="-15" r="2.5" fill="#364e6c"/><circle cx="36" cy="-15" r="2.5" fill="#364e6c"/></g><text x="550" y="29" font-size="11.101pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Root Bridge</text><text x="110" y="254" font-size="9.713pt" font-weight="700" fill="#1a1a1a" text-anchor="end">Switch A</text><text x="990" y="254" font-size="9.713pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Switch B</text><text x="200" y="384" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">segmento compartido</text><rect x="460" y="119" width="44" height="24" rx="2.775" fill="#ffffff" stroke="#009254" stroke-width="2.775"/><text x="482" y="136" font-size="9.713pt" font-weight="700" fill="#065f46" text-anchor="middle">DP</text><rect x="596" y="119" width="44" height="24" rx="2.775" fill="#ffffff" stroke="#009254" stroke-width="2.775"/><text x="618" y="136" font-size="9.713pt" font-weight="700" fill="#065f46" text-anchor="middle">DP</text><rect x="230" y="186" width="44" height="24" rx="2.775" fill="#ffffff" stroke="#003ecc" stroke-width="2.775"/><text x="252" y="203" font-size="9.713pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">RP</text><rect x="826" y="186" width="44" height="24" rx="2.775" fill="#ffffff" stroke="#003ecc" stroke-width="2.775"/><text x="848" y="203" font-size="9.713pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">RP</text><rect x="268" y="222" width="44" height="24" rx="2.775" fill="#ffffff" stroke="#009254" stroke-width="2.775"/><text x="290" y="239" font-size="9.713pt" font-weight="700" fill="#065f46" text-anchor="middle">DP</text><rect x="788" y="222" width="44" height="24" rx="2.775" fill="#ffffff" stroke="#dd3a00" stroke-width="2.775"/><text x="810" y="239" font-size="9.713pt" font-weight="700" fill="#7c2d12" text-anchor="middle">ALT</text><rect x="142" y="302" width="44" height="24" rx="2.775" fill="#ffffff" stroke="#009254" stroke-width="2.775"/><text x="164" y="319" font-size="9.713pt" font-weight="700" fill="#065f46" text-anchor="middle">DP</text><rect x="218" y="302" width="44" height="24" rx="2.775" fill="#ffffff" stroke="#d40000" stroke-width="2.775"/><text x="240" y="319" font-size="9.713pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">BKP</text><rect x="912" y="298" width="44" height="24" rx="2.775" fill="#ffffff" stroke="#364e6c" stroke-width="2.775"/><text x="934" y="315" font-size="9.713pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">EDGE</text><rect x="15" y="410" width="205" height="118" rx="5.55" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.312"/><text x="117" y="436" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Root Port</text><text x="117" y="456" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">mejor ruta a la raíz</text><rect x="37" y="476" width="161" height="30" rx="15" fill="#ffffff" stroke="#003ecc" stroke-width="1.85"/><text x="117.5" y="496.0" font-size="9.713pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Forwarding</text><rect x="230" y="410" width="205" height="118" rx="5.55" fill="#e6f4ee" stroke="#009254" stroke-width="2.312"/><text x="332" y="436" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Designated</text><text x="332" y="456" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">reenvía en su segmento</text><rect x="252" y="476" width="161" height="30" rx="15" fill="#ffffff" stroke="#009254" stroke-width="1.85"/><text x="332.5" y="496.0" font-size="9.713pt" font-weight="700" fill="#065f46" text-anchor="middle">Forwarding</text><rect x="445" y="410" width="205" height="118" rx="5.55" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.312"/><text x="547" y="436" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Alternate</text><text x="547" y="456" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">ruta alterna a la raíz</text><rect x="467" y="476" width="161" height="30" rx="15" fill="#ffffff" stroke="#dd3a00" stroke-width="1.85"/><text x="547.5" y="496.0" font-size="9.713pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Discarding</text><rect x="660" y="410" width="205" height="118" rx="5.55" fill="#fbe6e6" stroke="#d40000" stroke-width="2.312"/><text x="762" y="436" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Backup</text><text x="762" y="456" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">respaldo de designado</text><rect x="682" y="476" width="161" height="30" rx="15" fill="#ffffff" stroke="#d40000" stroke-width="1.85"/><text x="762.5" y="496.0" font-size="9.713pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Discarding</text><rect x="875" y="410" width="205" height="118" rx="5.55" fill="#ebedf0" stroke="#364e6c" stroke-width="2.312"/><text x="977" y="436" font-size="11.101pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Edge Port</text><text x="977" y="456" font-size="9.713pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">host final</text><rect x="897" y="476" width="161" height="30" rx="15" fill="#ffffff" stroke="#364e6c" stroke-width="1.85"/><text x="977.5" y="496.0" font-size="9.713pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Forwarding directo</text></g><text x="600" y="613.654" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 5.7. Roles de puerto en RSTP.</text></svg>
</div>

RSTP es compatible con STP. Sin embargo, cuando un puerto RSTP se conecta con un *switch* que ejecuta STP, ese puerto vuelve al comportamiento de 802.1D en ese enlace, perdiéndose las ventajas de convergencia rápida en ese segmento.

MSTP (*Multiple Spanning Tree Protocol*, IEEE 802.1s) es una evolución de RSTP que permite múltiples instancias de árbol de expansión independientes (MSTI), cada una con su propia topología para un grupo de VLAN. La instancia 0 (IST, que forma parte del CIST, *Common and Internal Spanning Tree*) existe siempre y agrupa por defecto las VLAN no asignadas a otra instancia.

Ejemplo: MSTI 1 para las VLAN 1–500 y MSTI 2 para las VLAN 501–1000. Así pueden aprovecharse los enlaces redundantes que con un único árbol quedarían bloqueados cuando distintas VLAN necesitan caminos diferentes.

Su configuración es más compleja, pero es habitual en redes empresariales de gran escala (Figura 5.7).

Los protocolos STP y RSTP contribuyen a la estabilidad de las redes con redundancia física al eliminar los bucles de capa 2 sin necesidad de retirar enlaces redundantes.

Conviene dominar su funcionamiento y su configuración básica: las prioridades, los costos de puerto y la selección del *Root Bridge* determinan la topología activa de la red.

## 5.5 DOMINIOS DE BROADCAST

En una red Ethernet, al conjunto de dispositivos que reciben una trama de difusión enviada por cualquiera de sus miembros, sin que esta deba atravesar un *router* u otro dispositivo de capa 3, se le denomina dominio de *broadcast*.

Dicho de otro modo, la frontera de un dominio de *broadcast* la marcan los *routers* y las VLAN.

##### Observación de tráfico *broadcast* en *Linux*

Para visualizar el tráfico *broadcast* que circula por una interfaz de red:

```text
Networking@SecOpsMX:~$ sudo tcpdump -i eth0 broadcast -c 10
```

```text
12:34:56.789012 00:1a:2b:3c:4d:5e > ff:ff:ff:ff:ff:ff, ethertype ARP (0x0806), length 42: Request who-has 192.168.1.1 tell 192.168.1.100, length 28
12:34:57.123456 00:1a:2b:3c:4d:5e > ff:ff:ff:ff:ff:ff, ethertype IPv4 (0x0800), length 342: 0.0.0.0.bootpc > 255.255.255.255.bootps: BOOTP/DHCP, Request from 00:1a:2b:3c:4d:5e, length 300
```

### Características de los dominios de *broadcast*

- Todos los dispositivos dentro del mismo dominio reciben y procesan, al menos en la capa de enlace de datos, cada trama de *broadcast*.
- Los *switches* propagan las tramas de *broadcast* por los puertos que pertenecen a la misma VLAN, excepto por el puerto de entrada. Sin segmentación mediante VLAN, los puertos de una misma red de capa 2 suelen pertenecer al mismo dominio de *broadcast*.
- Un *router* que enruta entre redes no reenvía normalmente una trama Ethernet *broadcast* de capa 2 a otra interfaz. Un *relay*, como un *relay* DHCP, recibe la solicitud local y genera o retransmite el mensaje mediante otro mecanismo; no equivale a propagar sin cambios la trama *broadcast* original. Los *firewalls* pueden operar en modo enrutado o transparente de capa 2, por lo que su comportamiento depende del modo de operación y de las reglas configuradas.

Cuanto mayor es un dominio de *broadcast*, mayor es la cantidad de tráfico de difusión generado por protocolos como ARP, DHCP o NetBIOS, lo que incrementa el consumo de ancho de banda y recursos de procesamiento en los dispositivos finales.

### Segmentación de dominios de *broadcast*

Las VLAN son el principal mecanismo para controlar y reducir el tamaño de los dominios de *broadcast*.

Como se explicó en la sección 5.2, cada VLAN es un dominio de *broadcast* independiente. Al dividir una red física en varias VLAN, se reemplaza un único dominio de *broadcast* de gran tamaño por varios dominios más pequeños y controlados. Esta segmentación mejora el rendimiento de la red, limita el impacto de posibles tormentas de *broadcast* y simplifica la aplicación de políticas de seguridad.

<div class="diagram" id="figura-5-08" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g427" viewBox="0 0 1200 347.474" role="img" aria-labelledby="g427-title">
<title id="g427-title">Dominios de colisión y de broadcast</title>
<defs><marker id="g427m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g427n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g427-c" transform="translate(21.522 21.522) scale(1.015)"><rect x="0" y="0" width="360" height="270" rx="5.912" fill="#fbe6e6" stroke="#d40000" stroke-width="1.971"/>
<line x1="0" y1="34" x2="360" y2="34" stroke="#d40000" stroke-width="1.478"/>
<text x="180" y="23" font-size="13.793pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Hub</text>
<rect x="30" y="42" width="300" height="158" rx="5.912" fill="none" stroke="#d40000" stroke-width="1.971" stroke-dasharray="5.912 3.941"/>
<line x1="180" y1="86" x2="70" y2="138" stroke="#d40000" stroke-width="1.478"/>
<line x1="180" y1="86" x2="180" y2="138" stroke="#d40000" stroke-width="1.478"/>
<line x1="180" y1="86" x2="290" y2="138" stroke="#d40000" stroke-width="1.478"/>
<rect x="20" y="224" width="320" height="32" rx="5.912" fill="#f4bfbf" stroke="#d40000" stroke-width="1.478"/>
<text x="180" y="246.002" font-size="10.345pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">1 dominio de colisión</text>
<rect x="390" y="0" width="360" height="270" rx="5.912" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.971"/>
<line x1="390" y1="34" x2="750" y2="34" stroke="#003ecc" stroke-width="1.478"/>
<text x="570" y="23" font-size="13.793pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Switch</text>
<line x1="570" y1="86" x2="460" y2="138" stroke="#003ecc" stroke-width="1.478"/>
<rect x="430" y="134" width="60" height="56" rx="5.912" fill="none" stroke="#003ecc" stroke-width="1.971" stroke-dasharray="5.912 3.941"/>
<line x1="570" y1="86" x2="570" y2="138" stroke="#003ecc" stroke-width="1.478"/>
<rect x="540" y="134" width="60" height="56" rx="5.912" fill="none" stroke="#003ecc" stroke-width="1.971" stroke-dasharray="5.912 3.941"/>
<line x1="570" y1="86" x2="680" y2="138" stroke="#003ecc" stroke-width="1.478"/>
<rect x="650" y="134" width="60" height="56" rx="5.912" fill="none" stroke="#003ecc" stroke-width="1.971" stroke-dasharray="5.912 3.941"/>
<rect x="410" y="224" width="320" height="32" rx="5.912" fill="#bfcff2" stroke="#003ecc" stroke-width="1.478"/>
<text x="570" y="246.002" font-size="10.345pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">1 dominio por puerto</text>
<rect x="780" y="0" width="360" height="270" rx="5.912" fill="#e6f4ee" stroke="#009254" stroke-width="1.971"/>
<line x1="780" y1="34" x2="1140" y2="34" stroke="#009254" stroke-width="1.478"/>
<text x="960" y="23" font-size="13.793pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">VLAN</text>
<line x1="960" y1="86" x2="840" y2="142" stroke="#d40000" stroke-width="1.478"/>
<line x1="960" y1="86" x2="910" y2="142" stroke="#d40000" stroke-width="1.478"/>
<line x1="960" y1="86" x2="1010" y2="142" stroke="#003ecc" stroke-width="1.478"/>
<line x1="960" y1="86" x2="1080" y2="142" stroke="#003ecc" stroke-width="1.478"/>
<rect x="802" y="132" width="150" height="64" rx="5.912" fill="none" stroke="#d40000" stroke-width="1.971" stroke-dasharray="5.912 3.941"/>
<rect x="968" y="132" width="150" height="64" rx="5.912" fill="none" stroke="#003ecc" stroke-width="1.971" stroke-dasharray="5.912 3.941"/>
<rect x="800" y="224" width="320" height="32" rx="5.912" fill="#bfe4d4" stroke="#009254" stroke-width="1.478"/>
<text x="960" y="246.002" font-size="10.345pt" font-weight="700" fill="#065f46" text-anchor="middle">1 dominio de broadcast por VLAN</text>
<g transform="translate(70 163.971) scale(0.493)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(180 163.971) scale(0.493)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(290 163.971) scale(0.493)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(460 163.971) scale(0.493)" data-lib="pc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6ecfa" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(570 163.971) scale(0.493)" data-lib="pc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6ecfa" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(680 163.971) scale(0.493)" data-lib="pc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6ecfa" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(840 163.971) scale(0.493)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(910 163.971) scale(0.493)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(1010 163.971) scale(0.493)" data-lib="pc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6ecfa" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(1080 163.971) scale(0.493)" data-lib="pc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6ecfa" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g><g transform="translate(180 70) scale(0.591)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#d40000" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#d40000"/><circle cx="-24" cy="-15" r="2.5" fill="#d40000"/><circle cx="-4" cy="-15" r="2.5" fill="#d40000"/><circle cx="16" cy="-15" r="2.5" fill="#d40000"/><circle cx="36" cy="-15" r="2.5" fill="#d40000"/></g><g transform="translate(570 70) scale(0.591)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#003ecc"/><circle cx="-24" cy="-15" r="2.5" fill="#003ecc"/><circle cx="-4" cy="-15" r="2.5" fill="#003ecc"/><circle cx="16" cy="-15" r="2.5" fill="#003ecc"/><circle cx="36" cy="-15" r="2.5" fill="#003ecc"/></g><g transform="translate(960 70) scale(0.591)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g></g><text x="600" y="329.634" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 5.8. Dominios de colisión y de broadcast.</text></svg>
</div>

El efecto de la segmentación sobre seguridad y rendimiento se representa en el **Anexo III.**

##### También puede utilizarse ip para verificar la dirección de *broadcast* asociada a una interfaz:

```text
Networking@SecOpsMX:~$ ip addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
link/ether 00:1a:2b:3c:4d:5e brd ff:ff:ff:ff:ff:ff
inet 192.168.1.100/24 brd 192.168.1.255 scope global dynamic noprefixroute eth0
valid_lft 86395sec preferred_lft 86395sec
inet6 fe80::21a:2bff:fe3c:4d5e/64 scope link noprefixroute
valid_lft forever preferred_lft forever
```

### Dominios de *broadcast* y de colisión

Aunque ambos conceptos están relacionados con el funcionamiento de las redes Ethernet, representan fenómenos distintos.

#### Dominio de colisión

Conjunto de dispositivos que comparten un mismo medio de transmisión y donde pueden producirse colisiones de tramas.

En redes modernas basadas en *switches* y enlaces *full-duplex*, cada puerto constituye su propio dominio de colisión, eliminando la posibilidad de colisiones.

#### Dominio de *broadcast*

Conjunto de dispositivos que reciben una trama de difusión dentro de una misma VLAN. Su alcance está definido por la segmentación lógica de la red y no por el medio físico compartido. Como consecuencia, es posible que existan múltiples dominios de colisión dentro de un mismo dominio de *broadcast*, situación habitual en redes conmutadas. La Figura 5.8 contrasta ambos dominios.

Mantener un tamaño adecuado de los dominios de *broadcast* es clave para el rendimiento de la red.

Las VLAN y el *subnetting* IP suelen implementarse de forma conjunta. Habitualmente, cada VLAN se asocia a una subred IP diferente, mientras que el *router* o *gateway* actúa como límite tanto para el tráfico *broadcast* como para la comunicación entre subredes.

##### Verificación del modo dúplex y velocidad de una interfaz en *Linux*

Para comprobar la velocidad y si una interfaz opera en modo *full-duplex* (lo que elimina las colisiones en ese enlace), se consultan las líneas *Speed* y *Duplex* de la salida (se muestra un extracto):

```text
Networking@SecOpsMX:~$ ethtool eth0
```

```text
Settings for eth0:
Supported ports: [ TP ]
Supported link modes: 10baseT/Half 10baseT/Full
100baseT/Half 100baseT/Full
1000baseT/Full
Supported pause frame use: Symmetric
Supports auto-negotiation: Yes
Advertised auto-negotiation: Yes
Speed: 1000Mb/s
Duplex: Full
Port: Twisted Pair
Auto-negotiation: on
Link detected: yes
```
