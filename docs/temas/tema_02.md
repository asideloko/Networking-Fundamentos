<p class="tema-num">TEMA 02</p>

# TRANSMISIÓN DE DATOS Y CAPA FÍSICA

La transmisión de datos es el fundamento físico sobre el cual operan todas las redes de comunicación.

Los bits y las PDU del Tema 1 son abstracciones hasta que se transportan sobre un medio físico. Este tema examina cómo se representan como señales y qué límites impone el canal a esa transmisión.

Los conceptos de señal digital y analógica, codificación, modulación, multiplexación, ruido, atenuación, ancho de banda y capacidad de canal conforman el marco teórico necesario para interpretar las limitaciones y posibilidades de los sistemas de comunicación modernos.

Estos principios explican por qué una tecnología alcanza determinada velocidad, por qué pierde integridad con la distancia y cómo se compensan los efectos del entorno (Figura 2.1).

<div class="diagram" id="figura-2-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g402" viewBox="0 0 1200 442" role="img" aria-labelledby="g402-title">
<title id="g402-title">Mapa del Tema 2</title>
<defs></defs>
<g id="g402-c" transform="translate(20 20)"><rect x="0" y="0" width="212.8" height="173" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="0" y1="34" x2="212.8" y2="34" stroke="#364e6c" stroke-width="1.5"/>
<text x="106.4" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2.1 El bit</text>
<g transform="translate(106.4 84.04) scale(0.7)" data-lib="power"><g fill="none" stroke="#364e6c" stroke-width="4" stroke-linecap="round"><path d="M0 -28 V-4"></path><path d="M-16 -18 A24 24 0 1 0 16 -18"></path></g></g>
<text x="106.4" y="141.65" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Unidad mínima de</text>
<text x="106.4" y="160.65" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">información</text>
<rect x="236.8" y="0" width="212.8" height="173" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="236.8" y1="51" x2="449.6" y2="51" stroke="#7c3aed" stroke-width="1.5"/>
<text x="343.2" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2.2 Señales digitales y</text>
<text x="343.2" y="40" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">analógicas</text>
<g transform="translate(343.2 94.92) scale(0.7)" data-lib="fiber"><path d="M-40 0 H-20 L-10 -12 L0 12 L10 -12 L20 12 L30 0 H40" fill="none" stroke="#7c3aed" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="343.2" y="144.88" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Dos formas de representar</text>
<text x="343.2" y="163.88" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">la información</text>
<rect x="473.6" y="0" width="212.8" height="173" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="473.6" y1="51" x2="686.4" y2="51" stroke="#dd3a00" stroke-width="1.5"/>
<text x="580" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2.3 Codificación y</text>
<text x="580" y="40" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">modulación</text>
<g transform="translate(580 94.92) scale(0.7)" data-lib="sync"><g fill="none" stroke="#dd3a00" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 -4 A26 26 0 0 1 20 -16"></path><path d="M24 4 A26 26 0 0 1 -20 16"></path><path d="M12 -22 L22 -16 L14 -8"></path><path d="M-12 22 L-22 16 L-14 8"></path></g></g>
<text x="580" y="144.88" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Representación de los bits</text>
<text x="580" y="163.88" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">en la señal</text>
<rect x="710.4" y="0" width="212.8" height="173" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="710.4" y1="51" x2="923.2" y2="51" stroke="#d40000" stroke-width="1.5"/>
<text x="816.8" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2.4 Ruido y</text>
<text x="816.8" y="40" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">degradación</text>
<g transform="translate(816.8 94.92) scale(0.7)" data-lib="bolt"><path d="M6 -32 L-20 4 H-2 L-8 32 L22 -6 H4 Z" fill="#fbe6e6" stroke="#d40000" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="816.8" y="144.88" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Interferencias y atenuación</text>
<text x="816.8" y="163.88" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">de la señal</text>
<rect x="947.2" y="0" width="212.8" height="173" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="947.2" y1="51" x2="1160" y2="51" stroke="#003ecc" stroke-width="1.5"/>
<text x="1053.6" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2.5 Ancho de banda y</text>
<text x="1053.6" y="40" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">capacidad</text>
<g transform="translate(1053.6 94.92) scale(0.7)" data-lib="gauge"><path d="M-30 18 A30 30 0 1 1 30 18" fill="none" stroke="#003ecc" stroke-width="4" stroke-linecap="round"></path><path d="M0 14 L16 -12" stroke="#003ecc" stroke-width="4" stroke-linecap="round"></path><circle cx="0" cy="14" r="5" fill="#003ecc"></circle></g>
<text x="1053.6" y="154.38" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Límites de la transmisión</text>
<rect x="0" y="197" width="212.8" height="173" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="0" y1="231" x2="212.8" y2="231" stroke="#009254" stroke-width="1.5"/>
<text x="106.4" y="220" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2.6 Medios guiados</text>
<g transform="translate(106.4 281.04) scale(0.7)" data-lib="cable"><path d="M-40 0 C-26 -30 -14 -30 0 0 S26 30 40 0" fill="none" stroke="#009254" stroke-width="4" stroke-linecap="round"></path></g>
<text x="106.4" y="338.65" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Transmisión por cable y</text>
<text x="106.4" y="357.65" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">fibra</text>
<rect x="236.8" y="197" width="212.8" height="173" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="236.8" y1="231" x2="449.6" y2="231" stroke="#7c3aed" stroke-width="1.5"/>
<text x="343.2" y="220" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2.7 Medios no guiados</text>
<g transform="translate(343.2 281.04) scale(0.7)" data-lib="tower"><g fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"><path d="M0 -4 L-14 30 M0 -4 L14 30 M-9 14 H9 M-12 24 H12"></path><path d="M-12 -16 A16 16 0 0 0 -12 8 M12 -16 A16 16 0 0 1 12 8" stroke-width="2.5"></path><path d="M-20 -24 A28 28 0 0 0 -20 16 M20 -24 A28 28 0 0 1 20 16" stroke-width="2.5"></path></g><circle cx="0" cy="-4" r="5" fill="#7c3aed"></circle></g>
<text x="343.2" y="348.15" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Transmisión por el aire</text>
<rect x="473.6" y="197" width="212.8" height="173" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="473.6" y1="248" x2="686.4" y2="248" stroke="#003ecc" stroke-width="1.5"/>
<text x="580" y="220" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2.8 Espectro</text>
<text x="580" y="237" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">electromagnético</text>
<g transform="translate(580 291.92) scale(0.7)" data-lib="globe"><g stroke="#003ecc" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#e6ecfa"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<text x="580" y="351.38" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Bandas utilizadas en redes</text>
<rect x="710.4" y="197" width="212.8" height="173" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="710.4" y1="248" x2="923.2" y2="248" stroke="#dd3a00" stroke-width="1.5"/>
<text x="816.8" y="220" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2.9 Frecuencias de</text>
<text x="816.8" y="237" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">operación</text>
<g transform="translate(816.8 291.92) scale(0.7)" data-lib="wifi"><g fill="none" stroke="#dd3a00" stroke-width="4" stroke-linecap="round"><path d="M-26 -8A38 38 0 0 1 26 -8"/><path d="M-16 4A24 24 0 0 1 16 4"/></g><circle cx="0" cy="18" r="5.5" fill="#dd3a00"/></g>
<text x="816.8" y="351.38" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Bandas de 2,4, 5 y 6 GHz</text>
<rect x="947.2" y="197" width="212.8" height="173" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="947.2" y1="248" x2="1160" y2="248" stroke="#364e6c" stroke-width="1.5"/>
<text x="1053.6" y="220" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2.10 Tiempos de</text>
<text x="1053.6" y="237" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">transmisión</text>
<g transform="translate(1053.6 291.92) scale(0.7)" data-lib="clock"><circle cx="0" cy="0" r="28" fill="#ebedf0" stroke="#364e6c" stroke-width="3"></circle><path d="M0 -16 V0 L12 8" fill="none" stroke="#364e6c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="1053.6" y="351.38" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Cálculo básico de retardos</text></g><text x="600" y="424" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 2.1. Mapa del Tema 2.</text></svg>
</div>

## 2.1 EL BIT COMO UNIDAD MÍNIMA DE INFORMACIÓN

Un bit solo puede adoptar uno de dos valores posibles: 0 o 1. Esta dualidad refleja la naturaleza binaria de los sistemas digitales: niveles de voltaje, presencia o ausencia de luz o inversión de fase codifican los dos estados.

**1 byte (B) equivale a 8 bits (b).**

Las velocidades comerciales suelen anunciarse en bits por segundo, mientras que las aplicaciones normalmente muestran la velocidad en bytes por segundo.

<div class="diagram" id="figura-2-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g301" viewBox="0 0 1200 273.387" role="img" aria-labelledby="g301-title">
<title id="g301-title">El bit, el byte y la conversión de velocidades</title>
<g id="g301-c" transform="translate(-31.006 -73.073) scale(1.052)"><rect x="50" y="90" width="340" height="190" rx="5.705" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.902"/><text x="220" y="122" font-size="13.308pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Bit (b)</text><circle cx="150" cy="185" r="30" fill="#ffffff" stroke="#003ecc" stroke-width="1.902"/><text x="150" y="193" font-size="16.16pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">0</text><circle cx="290" cy="185" r="30" fill="#ffffff" stroke="#003ecc" stroke-width="1.902"/><text x="290" y="193" font-size="16.16pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">1</text><text x="220" y="250" font-size="11.407pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Dos valores posibles</text><text x="220" y="268" font-size="9.981pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">voltaje · luz · fase</text><rect x="430" y="90" width="340" height="190" rx="5.705" fill="#e6f4ee" stroke="#009254" stroke-width="1.902"/><text x="600" y="122" font-size="13.308pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Byte (B)</text><rect x="456" y="150" width="36" height="46" fill="#ffffff" stroke="#009254" stroke-width="1.902"/><text x="474" y="181" font-size="13.308pt" font-weight="700" fill="#065f46" text-anchor="middle">0</text><rect x="492" y="150" width="36" height="46" fill="#ffffff" stroke="#009254" stroke-width="1.902"/><text x="510" y="181" font-size="13.308pt" font-weight="700" fill="#065f46" text-anchor="middle">1</text><rect x="528" y="150" width="36" height="46" fill="#ffffff" stroke="#009254" stroke-width="1.902"/><text x="546" y="181" font-size="13.308pt" font-weight="700" fill="#065f46" text-anchor="middle">0</text><rect x="564" y="150" width="36" height="46" fill="#ffffff" stroke="#009254" stroke-width="1.902"/><text x="582" y="181" font-size="13.308pt" font-weight="700" fill="#065f46" text-anchor="middle">0</text><rect x="600" y="150" width="36" height="46" fill="#ffffff" stroke="#009254" stroke-width="1.902"/><text x="618" y="181" font-size="13.308pt" font-weight="700" fill="#065f46" text-anchor="middle">0</text><rect x="636" y="150" width="36" height="46" fill="#ffffff" stroke="#009254" stroke-width="1.902"/><text x="654" y="181" font-size="13.308pt" font-weight="700" fill="#065f46" text-anchor="middle">0</text><rect x="672" y="150" width="36" height="46" fill="#ffffff" stroke="#009254" stroke-width="1.902"/><text x="690" y="181" font-size="13.308pt" font-weight="700" fill="#065f46" text-anchor="middle">0</text><rect x="708" y="150" width="36" height="46" fill="#ffffff" stroke="#009254" stroke-width="1.902"/><text x="726" y="181" font-size="13.308pt" font-weight="700" fill="#065f46" text-anchor="middle">1</text><text x="600" y="232" font-size="11.407pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1 B = 8 b</text><text x="600" y="256" font-size="9.981pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">ejemplo: 01000001 = «A» (ASCII)</text><rect x="810" y="90" width="340" height="190" rx="5.705" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.902"/><text x="980" y="122" font-size="13.308pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Velocidad de enlace</text><text x="980" y="180" font-size="11.407pt" font-weight="700" fill="#5b21b6" text-anchor="middle">1 Gb/s = 1 000 Mb/s</text><text x="980" y="212" font-size="11.407pt" font-weight="700" fill="#5b21b6" text-anchor="middle">1 000 Mb/s ÷ 8 = 125 MB/s</text><text x="980" y="256" font-size="9.981pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">máximo teórico · sin sobrecargas</text></g><text x="600" y="255.547" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 2.2. El bit, el byte y la conversión de velocidades.</text></svg>
</div>

Por ejemplo, una conexión *Gigabit* Ethernet (1 Gb/s) equivale, mediante conversión directa, a un máximo teórico de 125 MB/s (1000/8) (Figura 2.2).

El bit es la unidad básica de tres procesos: la digitalización de la información, la estandarización de la transmisión y la medición del rendimiento de la red.

### Digitalización de la información

Cualquier tipo de dato (texto, imagen, audio o video) se convierte en secuencias de bits mediante procesos de codificación.

### Estandarización de la transmisión

Los protocolos y sistemas de comunicación operan sobre flujos de bits, independientemente del contenido original.

### Medición del rendimiento de la red

Las velocidades de transmisión se expresan en bits por segundo (b/s) y sus múltiplos: kb/s (10³ b/s), Mb/s (10⁶ b/s), Gb/s (10⁹ b/s) y Tb/s (10¹² b/s).

En el contexto de la capa física, el bit se materializa como una señal que puede ser eléctrica (variaciones de voltaje o corriente), óptica (presencia o ausencia de luz) o electromagnética (cambios de frecuencia o fase en ondas de radio).

## 2.2 SEÑALES DIGITALES Y ANALÓGICAS

Para que los bits puedan transmitirse a través de un medio, es necesario convertirlos en fenómenos físicos que se propaguen en el espacio y el tiempo. Estos fenómenos reciben el nombre de señales. En las redes de computadoras se distinguen dos categorías de señales: digitales y analógicas.

### Señal digital

Una señal digital representa la información mediante valores discretos, normalmente dos niveles (alto o bajo, presencia o ausencia de pulso). Ethernet a 10 Mb/s (10BASE-T) no empleaba niveles de voltaje simples (alto = 1, bajo = 0), sino transiciones de voltaje mediante codificación Manchester. Este mecanismo se aborda con mayor detalle en la sección 2.3.

Las principales características de las señales digitales son:

- Utilizan niveles definidos mediante umbrales de decisión.
- Representan directamente los valores binarios.
- Pueden tolerar determinadas perturbaciones mejor que una señal analógica equivalente, porque el receptor decide qué valor lógico corresponde a la señal recibida y puede regenerarla. Esta ventaja depende de que la señal permanezca dentro de los márgenes de detección; si el ruido, la atenuación o la distorsión los superan, también pueden producirse errores.
- Ofrecen buena integridad de los datos en distancias moderadas y facilitan el procesamiento mediante circuitos lógicos digitales.

<div class="diagram" id="figura-2-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g201" viewBox="0 0 1200 723.881" role="img" aria-labelledby="g201-title">
<title id="g201-title">Señal digital, señal analógica y codificación Manchester</title>
<g id="g201-c" transform="translate(-19.057 -61.038) scale(1.032)"><rect x="40" y="80" width="560" height="260" rx="5.812" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.937"/>
<line x1="40" y1="122" x2="600" y2="122" stroke="#003ecc" stroke-width="1.453"/>
<text x="320" y="108" font-size="13.566pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Señal digital · detección por umbrales</text>
<text x="170" y="148" font-size="11.628pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">0</text>
<text x="230" y="148" font-size="11.628pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">1</text>
<text x="290" y="148" font-size="11.628pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">1</text>
<text x="350" y="148" font-size="11.628pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">0</text>
<text x="410" y="148" font-size="11.628pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">1</text>
<text x="470" y="148" font-size="11.628pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">0</text>
<rect x="140" y="200" width="360" height="40" fill="#ebedf0" stroke="#364e6c" stroke-width="1.453" stroke-dasharray="5.812 3.875"/>
<text x="320" y="225" font-size="10.174pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">zona de indeterminación</text>
<line x1="140" y1="200" x2="500" y2="200" stroke="#364e6c" stroke-width="1.453" stroke-dasharray="5.812 3.875"/>
<text x="506" y="203" font-size="10.174pt" fill="#1a1a1a" text-anchor="start" font-weight="400">umbral HIGH</text>
<line x1="140" y1="240" x2="500" y2="240" stroke="#364e6c" stroke-width="1.453" stroke-dasharray="5.812 3.875"/>
<text x="506" y="243" font-size="10.174pt" fill="#1a1a1a" text-anchor="start" font-weight="400">umbral LOW</text>
<path d="M 140 260 L 200 260 L 200 180 L 320 180 L 320 260 L 380 260 L 380 180 L 440 180 L 440 260 L 500 260" fill="none" stroke="#003ecc" stroke-width="2.906"/>
<line x1="135" y1="180" x2="135" y2="200" stroke="#009254" stroke-width="1.937"/>
<text x="134" y="196" font-size="10.174pt" fill="#065f46" text-anchor="end" font-weight="400">margen HIGH</text>
<line x1="135" y1="240" x2="135" y2="260" stroke="#009254" stroke-width="1.937"/>
<text x="134" y="256" font-size="10.174pt" fill="#065f46" text-anchor="end" font-weight="400">margen LOW</text>
<rect x="620" y="80" width="540" height="260" rx="5.812" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.937"/>
<line x1="620" y1="122" x2="1160" y2="122" stroke="#dd3a00" stroke-width="1.453"/>
<text x="890" y="108" font-size="13.566pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Señal analógica · variación continua</text>
<path d="M 660 220 Q 720 160 780 220 Q 840 280 900 220 Q 960 160 1020 220 Q 1080 280 1120 220" fill="none" stroke="#dd3a00" stroke-width="2.906"/>
<line x1="660" y1="220" x2="1120" y2="220" stroke="#dd3a00" stroke-width="1.453" stroke-dasharray="5.812 3.875"/><line x1="720" y1="172" x2="720" y2="188" stroke="#dd3a00" stroke-width="1.453"/><line x1="728" y1="190" x2="728" y2="220" stroke="#dd3a00" stroke-width="1.453"/><line x1="724" y1="190" x2="732" y2="190" stroke="#dd3a00" stroke-width="1.453"/><line x1="724" y1="220" x2="732" y2="220" stroke="#dd3a00" stroke-width="1.453"/>
<text x="720" y="166" font-size="10.174pt" fill="#7c2d12" text-anchor="middle" font-weight="400">amplitud</text>
<line x1="660" y1="272" x2="900" y2="272" stroke="#dd3a00" stroke-width="1.453"/><line x1="660" y1="266" x2="660" y2="278" stroke="#dd3a00" stroke-width="1.453"/><line x1="900" y1="266" x2="900" y2="278" stroke="#dd3a00" stroke-width="1.453"/>
<text x="780" y="293" font-size="10.174pt" fill="#7c2d12" text-anchor="middle" font-weight="400">periodo</text>
<text x="890" y="315" font-size="10.174pt" fill="#7c2d12" text-anchor="middle" font-weight="400">Cualquier valor intermedio es posible</text>
<rect x="40" y="360" width="1120" height="350" rx="5.812" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.937"/>
<line x1="40" y1="402" x2="1160" y2="402" stroke="#7c3aed" stroke-width="1.453"/>
<text x="600" y="388" font-size="13.566pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Codificación Manchester · convención: 1 = LOW→HIGH · 0 = HIGH→LOW</text>
<text x="300" y="425" font-size="11.628pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Bit 1</text>
<text x="500" y="425" font-size="11.628pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Bit 0</text>
<text x="700" y="425" font-size="11.628pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Bit 1</text>
<text x="900" y="425" font-size="11.628pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Bit 1</text>
<line x1="200" y1="440" x2="200" y2="600" stroke="#1a1a1a" stroke-width="1.453" stroke-dasharray="5.812 3.875"/>
<line x1="400" y1="440" x2="400" y2="600" stroke="#1a1a1a" stroke-width="1.453" stroke-dasharray="5.812 3.875"/>
<line x1="600" y1="440" x2="600" y2="600" stroke="#1a1a1a" stroke-width="1.453" stroke-dasharray="5.812 3.875"/>
<line x1="800" y1="440" x2="800" y2="600" stroke="#1a1a1a" stroke-width="1.453" stroke-dasharray="5.812 3.875"/>
<line x1="1000" y1="440" x2="1000" y2="600" stroke="#1a1a1a" stroke-width="1.453" stroke-dasharray="5.812 3.875"/>
<line x1="300" y1="460" x2="300" y2="600" stroke="#7c3aed" stroke-width="1.453" stroke-dasharray="5.812 3.875"/>
<line x1="500" y1="460" x2="500" y2="600" stroke="#7c3aed" stroke-width="1.453" stroke-dasharray="5.812 3.875"/>
<line x1="700" y1="460" x2="700" y2="600" stroke="#7c3aed" stroke-width="1.453" stroke-dasharray="5.812 3.875"/>
<line x1="900" y1="460" x2="900" y2="600" stroke="#7c3aed" stroke-width="1.453" stroke-dasharray="5.812 3.875"/>
<path d="M 200 580 L 300 580 L 300 460 L 400 460 L 500 460 L 500 580 L 600 580 L 700 580 L 700 460 L 800 460 L 800 580 L 900 580 L 900 460 L 1000 460" fill="none" stroke="#7c3aed" stroke-width="2.906" stroke-linejoin="miter"/>
<circle cx="300" cy="520" r="5" fill="#7c3aed"/>
<circle cx="500" cy="520" r="5" fill="#7c3aed"/>
<circle cx="700" cy="520" r="5" fill="#7c3aed"/>
<circle cx="900" cy="520" r="5" fill="#7c3aed"/>
<circle cx="800" cy="520" r="6" fill="#ffffff" stroke="#7c3aed" stroke-width="2.422"/>
<line x1="200" y1="625" x2="400" y2="625" stroke="#1a1a1a" stroke-width="1.453"/>
<line x1="200" y1="618" x2="200" y2="632" stroke="#1a1a1a" stroke-width="1.453"/>
<line x1="400" y1="618" x2="400" y2="632" stroke="#1a1a1a" stroke-width="1.453"/>
<text x="300" y="648" font-size="11.628pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">T = intervalo de bit</text>
<line x1="200" y1="668" x2="300" y2="668" stroke="#7c3aed" stroke-width="1.453"/>
<line x1="200" y1="661" x2="200" y2="675" stroke="#7c3aed" stroke-width="1.453"/>
<line x1="300" y1="661" x2="300" y2="675" stroke="#7c3aed" stroke-width="1.453"/>
<text x="250" y="690" font-size="10.174pt" fill="#5b21b6" text-anchor="middle" font-weight="400">T/2 = medio intervalo</text>
<circle cx="620" cy="645" r="5" fill="#7c3aed"/>
<text x="635" y="650" font-size="10.174pt" fill="#1a1a1a" text-anchor="start" font-weight="400">Transición en el punto medio del bit</text>
<circle cx="620" cy="680" r="6" fill="#ffffff" stroke="#7c3aed" stroke-width="2.422"/>
<text x="635" y="685" font-size="10.174pt" fill="#1a1a1a" text-anchor="start" font-weight="400">Transición en la frontera (solo si el patrón lo requiere)</text>
</g><text x="600" y="706.041" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 2.3. Señal digital, señal analógica y codificación Manchester.</text></svg>
</div>

### Señal analógica

Una señal analógica representa la información mediante variaciones continuas de amplitud, frecuencia o fase.

Por ejemplo, la voz humana convertida en señal eléctrica por un micrófono produce una forma de onda que varía continuamente a lo largo del tiempo.

Las principales características de las señales analógicas son:

- Presentan una variación continua, sin niveles discretos.
- Representan directamente fenómenos físicos, como la presión sonora, la temperatura o la intensidad luminosa.
- Son susceptibles al ruido, ya que cualquier perturbación se suma a la señal original y no puede eliminarse completamente.
- Experimentan una degradación progresiva con la distancia debido a la atenuación y la distorsión.

La Figura 2.3 contrapone ambas representaciones: una misma secuencia de bits puede transportarse con una señal digital o con una analógica, y la codificación Manchester ilustra cómo las transiciones de la señal pueden incorporar la referencia de temporización.

Aunque las redes modernas procesan internamente datos digitales, numerosos medios de transmisión, especialmente los inalámbricos y el cable coaxial utilizado en televisión por cable, emplean señales analógicas como portadoras.

Para que ambos tipos de señales puedan interactuar se emplean dispositivos como los módems (modulador-demodulador), que realizan dos procesos básicos:

### Modulación

Modifica una o varias propiedades de una señal portadora —como la amplitud, la frecuencia o la fase— para representar la información que se desea transmitir. En muchos sistemas digitales, la información se representa mediante símbolos modulados sobre una portadora; no toda transmisión digital requiere una portadora sinusoidal independiente.

<div class="diagram tabla-svg" id="tabla-2-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 406" role="img" aria-labelledby="t6-title"><title id="t6-title">Tabla 2.1. Comparación entre señales digitales y analógicas.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="86.9" y="20.0" dominant-baseline="central" text-anchor="middle">Característica</text>
<text class="tb-ht" x="461.7" y="20.0" dominant-baseline="central" text-anchor="middle">Señal digital</text>
<text class="tb-ht" x="974.9" y="20.0" dominant-baseline="central" text-anchor="middle">Señal analógica</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Interpretación</text>
<text class="tb-tx" x="185.8" y="60.8" dominant-baseline="central">Representa información mediante símbolos o niveles discretos que el</text>
<text class="tb-tx" x="185.8" y="83.5" dominant-baseline="central">receptor identifica mediante umbrales de detección.</text>
<text class="tb-tx" x="761.7" y="60.8" dominant-baseline="central">Representa información mediante variaciones</text>
<text class="tb-tx" x="761.7" y="83.5" dominant-baseline="central">continuas de una magnitud física.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Efecto del ruido</text>
<text class="tb-tx" x="185.8" y="124.2" dominant-baseline="central">Puede tolerar perturbaciones mientras la señal permanezca dentro</text>
<text class="tb-tx" x="185.8" y="147.0" dominant-baseline="central">de los márgenes de detección; si se superan, aparecen errores.</text>
<text class="tb-tx" x="761.7" y="124.2" dominant-baseline="central">Las perturbaciones modifican la forma de onda y</text>
<text class="tb-tx" x="761.7" y="147.0" dominant-baseline="central">pueden alterar la información representada.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Degradación</text>
<text class="tb-tx" x="185.8" y="187.8" dominant-baseline="central">Puede regenerarse mediante repetidores o circuitos de recuperación</text>
<text class="tb-tx" x="185.8" y="210.5" dominant-baseline="central">cuando la calidad recibida es suficiente.</text>
<text class="tb-tx" x="761.7" y="187.8" dominant-baseline="central">La amplificación también puede amplificar las</text>
<text class="tb-tx" x="761.7" y="210.5" dominant-baseline="central">perturbaciones presentes en la señal.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="262.6" dominant-baseline="central">Procesamiento</text>
<text class="tb-tx" x="185.8" y="251.2" dominant-baseline="central">Facilita el procesamiento mediante circuitos lógicos y técnicas</text>
<text class="tb-tx" x="185.8" y="274.0" dominant-baseline="central">digitales de detección y corrección de errores.</text>
<text class="tb-tx" x="761.7" y="251.2" dominant-baseline="central">Puede procesarse mediante circuitos analógicos o</text>
<text class="tb-tx" x="761.7" y="274.0" dominant-baseline="central">convertirse a formato digital para su tratamiento.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="314.8" dominant-baseline="central">Representación</text>
<text class="tb-tx tb-b" x="12.0" y="337.5" dominant-baseline="central">física</text>
<text class="tb-tx" x="185.8" y="314.8" dominant-baseline="central">Se transmite mediante magnitudes físicas, como niveles eléctricos,</text>
<text class="tb-tx" x="185.8" y="337.5" dominant-baseline="central">pulsos ópticos o señales electromagnéticas.</text>
<text class="tb-tx" x="761.7" y="314.8" dominant-baseline="central">Se transmite mediante variaciones continuas de</text>
<text class="tb-tx" x="761.7" y="337.5" dominant-baseline="central">amplitud, frecuencia o fase.</text>
<text class="tb-cap" x="600.0" y="384.2" text-anchor="middle">Tabla 2.1. Comparación entre señales digitales y analógicas.</text></svg>
</div>

### Demodulación

Recupera la información a partir de la señal recibida, estimando los símbolos transmitidos y convirtiéndolos en los datos correspondientes.

Incluso en medios guiados como la fibra óptica, los datos digitales se representan mediante pulsos de luz. Aunque estos pulsos representan información binaria, sus propiedades físicas corresponden a una señal óptica.

La distinción entre señal digital y señal analógica depende, entonces, del nivel de abstracción considerado: a nivel lógico la información es digital, mientras que físicamente se transporta mediante magnitudes continuas (voltaje, intensidad luminosa o campo electromagnético).

La Tabla 2.1 contrasta ambos tipos de señal; conviene leerla con el criterio anterior en mente: la diferencia relevante no está en cómo se denomine la señal, sino en el nivel de abstracción en que se analice.

## 2.3 CODIFICACIÓN Y MODULACIÓN DE SEÑALES

La transmisión confiable de bits requiere transformar la secuencia binaria en una señal adecuada al medio físico.

Este proceso comprende dos mecanismos principales: la codificación, utilizada en medios digitales, y la modulación, empleada en medios que utilizan señales analógicas como portadoras.

### Bit y símbolo

Para comprender los mecanismos de transmisión digital es necesario diferenciar dos conceptos: bit y símbolo. El concepto de bit se abordó en el apartado anterior.

Un símbolo es una variación identificable de una señal capaz de representar uno o varios bits, según la técnica de transmisión utilizada. En los sistemas más simples, cada símbolo representa un único bit. Sin embargo, los sistemas modernos emplean técnicas que asocian varios bits a un mismo símbolo, lo que incrementa la información transmitida sin aumentar el ancho de banda.

La cantidad de símbolos transmitidos por segundo se denomina tasa de símbolos y se expresa en baudios (Bd). La tasa de bits y la de símbolos solo coinciden cuando cada símbolo transporta un bit; en los sistemas modernos, un símbolo puede representar varios bits.

### Codificación

La codificación consiste en transformar directamente los bits en símbolos de señal digital. Los distintos esquemas de codificación se seleccionan de acuerdo con las características del medio físico y los requisitos de sincronización del sistema.

Uno de los principales desafíos de la transmisión digital consiste en mantener sincronizados los relojes del transmisor y del receptor. Si el receptor pierde la referencia temporal que determina el inicio y el final de cada bit, la información puede interpretarse incorrectamente, aun cuando la señal conserve suficiente potencia.

Para resolver este problema, numerosos esquemas de codificación incorporan transiciones deliberadas en la señal que permiten al receptor recuperar continuamente la sincronización.

A continuación se describen NRZ, como esquema de referencia que no garantiza transiciones, y dos esquemas que sí las incorporan: Manchester y 4B/5B.

#### NRZ

El nivel de la señal permanece constante durante todo el intervalo correspondiente a un bit. Habitualmente, un nivel alto representa un 1 y uno bajo representa un 0.

Sus principales ventajas son la simplicidad de implementación y el reducido consumo de ancho de banda. Sin embargo, presenta una limitación: largas secuencias consecutivas de ceros o unos generan una señal constante que dificulta la recuperación del reloj por parte del receptor.

#### Manchester

En Manchester (IEEE 802.3, 10BASE-T) se produce una transición obligatoria en la mitad de cada período de bit, y la dirección de dicha transición codifica el valor binario.

Según la convención de IEEE 802.3, una transición de bajo a alto representa un 1 y una de alto a bajo representa un 0 (la convención de G. E. Thomas utiliza la asignación inversa).

Este mecanismo garantiza una transición en cada bit, de modo que el receptor puede recuperar el reloj independientemente de la secuencia de datos transmitida.

A cambio, la señal ocupa el doble de ancho de banda que NRZ: la tasa de símbolos es el doble de la tasa de bits (10 Mb/s equivalen a 20 Mbaudios).

#### 4B/5B

Este método sustituye grupos de cuatro bits por secuencias de cinco bits seleccionadas para garantizar un número suficiente de transiciones en la señal.

De esta forma, mejora la sincronización sin incurrir en el elevado consumo de ancho de banda característico de la codificación Manchester.

Fue ampliamente utilizado en tecnologías como Fast Ethernet (100BASE-TX/FX) y FDDI. Dado que 4B/5B garantiza como máximo tres ceros consecutivos, se combina con un segundo esquema de línea (NRZI en 100BASE-FX y FDDI; MLT-3 en 100BASE-TX).

La elección del esquema de codificación influye en el ancho de banda requerido, la inmunidad al ruido, la capacidad de sincronización y la eficiencia de la transmisión.

### Modulación

Retomando lo expuesto en la sección 2.2, la codificación transforma los bits en señales digitales, mientras que la modulación permite transmitir información digital a través de medios que utilizan señales analógicas portadoras.

Una señal portadora es una onda sinusoidal de alta frecuencia cuyas características pueden modificarse para transportar información.

Son tres las propiedades que pueden alterarse:

- Amplitud: intensidad o nivel de energía de la señal.
- Frecuencia: número de ciclos por segundo que realiza la onda.
- Fase: desplazamiento angular de la señal respecto de una referencia temporal.

Al modificar una o varias de estas propiedades es posible representar información digital sobre una señal analógica.

#### ASK

La información se codifica modificando la amplitud de la señal portadora; en su forma más sencilla, una amplitud elevada puede representar un 1 y una amplitud reducida o nula puede representar un 0. Es una técnica simple de implementar, aunque especialmente sensible al ruido y a las variaciones de potencia del canal.

#### FSK

La información se representa mediante cambios de frecuencia. Una frecuencia determinada representa el bit 0 y otra frecuencia distinta representa el bit 1. Presenta mayor inmunidad al ruido que ASK y fue ampliamente utilizada en los primeros módems y sistemas de radiocomunicación.

#### PSK

La información se transmite modificando la fase de la señal portadora; por ejemplo, una fase de 0° puede representar un valor binario y una fase de 180° otro distinto.

PSK hace un uso más eficiente del ancho de banda y es la base de numerosos sistemas modernos de comunicaciones digitales.

<div class="diagram tabla-svg" id="tabla-2-2" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 343" role="img" aria-labelledby="t7-title"><title id="t7-title">Tabla 2.2. Características de las técnicas de modulación.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="63.5"/>
<text class="tb-ht" x="43.3" y="31.4" dominant-baseline="central" text-anchor="middle">Técnica</text>
<text class="tb-ht" x="171.8" y="20.0" dominant-baseline="central" text-anchor="middle">Propiedad</text>
<text class="tb-ht" x="171.8" y="42.8" dominant-baseline="central" text-anchor="middle">modificada</text>
<text class="tb-ht" x="410.4" y="31.4" dominant-baseline="central" text-anchor="middle">Bits por símbolo</text>
<text class="tb-ht" x="881.9" y="31.4" dominant-baseline="central" text-anchor="middle">Consideraciones</text>
<rect class="tb-te" x="0" y="63.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="94.9" dominant-baseline="central">ASK</text>
<text class="tb-tx" x="98.6" y="94.9" dominant-baseline="central">Amplitud</text>
<text class="tb-tx" x="269.1" y="83.5" dominant-baseline="central">1 en su forma binaria; más en</text>
<text class="tb-tx" x="269.1" y="106.2" dominant-baseline="central">esquemas multinivel.</text>
<text class="tb-tx" x="575.8" y="94.9" dominant-baseline="central">Sensible a variaciones de amplitud y ruido.</text>
<rect class="tb-to" x="0" y="127.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="158.4" dominant-baseline="central">FSK</text>
<text class="tb-tx" x="98.6" y="158.4" dominant-baseline="central">Frecuencia</text>
<text class="tb-tx" x="269.1" y="147.0" dominant-baseline="central">1 en su forma binaria; más en</text>
<text class="tb-tx" x="269.1" y="169.8" dominant-baseline="central">esquemas multinivel.</text>
<text class="tb-tx" x="575.8" y="147.0" dominant-baseline="central">Su comportamiento frente al ruido depende de la separación entre</text>
<text class="tb-tx" x="575.8" y="169.8" dominant-baseline="central">frecuencias, el ancho de banda y el detector.</text>
<rect class="tb-te" x="0" y="190.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">PSK</text>
<text class="tb-tx" x="98.6" y="210.5" dominant-baseline="central">Fase</text>
<text class="tb-tx" x="269.1" y="210.5" dominant-baseline="central">1 en BPSK; 2 en QPSK.</text>
<text class="tb-tx" x="575.8" y="210.5" dominant-baseline="central">Depende de la separación angular entre símbolos y de la sincronización.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="262.6" dominant-baseline="central">QAM</text>
<text class="tb-tx" x="98.6" y="262.6" dominant-baseline="central">Amplitud y fase</text>
<text class="tb-tx" x="269.1" y="251.2" dominant-baseline="central">4 en 16-QAM; 6 en 64-QAM; 8 en</text>
<text class="tb-tx" x="269.1" y="274.0" dominant-baseline="central">256-QAM.</text>
<text class="tb-tx" x="575.8" y="251.2" dominant-baseline="central">Los órdenes superiores aumentan la eficiencia espectral, pero requieren</text>
<text class="tb-tx" x="575.8" y="274.0" dominant-baseline="central">mejores condiciones de señal.</text>
<text class="tb-cap" x="600.0" y="320.8" text-anchor="middle">Tabla 2.2. Características de las técnicas de modulación.</text></svg>
</div>

### QAM

QAM combina simultáneamente variaciones de amplitud y fase para representar múltiples bits por símbolo. En sus formas binarias más simples, ASK, FSK y PSK transportan un bit por símbolo; esquemas como 16-QAM, 64-QAM o 256-QAM permiten representar, respectivamente, cuatro, seis u ocho bits por símbolo.

Gracias a esta característica, QAM puede aumentar la cantidad de bits transmitidos por símbolo dentro de un ancho de banda dado, siempre que la relación señal a ruido y la calidad del canal permitan distinguir de forma fiable los símbolos.

Por eso se emplea en Wi-Fi (hasta 1024-QAM en Wi-Fi 6 y hasta 4096-QAM en Wi-Fi 7) y en numerosos sistemas modernos de comunicaciones, a costa de exigir una SNR mayor. La Tabla 2.2 compara las técnicas de modulación.

### OFDM

OFDM es una técnica de modulación multiportadora que divide un canal en numerosas subportadoras ortogonales, transmitiendo datos en paralelo. Las subportadoras pueden utilizar esquemas de modulación como QPSK o QAM, adaptados a las condiciones del canal.

Una de sus principales ventajas es su capacidad para manejar la propagación multicamino y el desvanecimiento selectivo mediante la distribución de los datos entre subportadoras y el uso de intervalos de guarda. No elimina las interferencias: su efecto depende de la sincronización, la planificación de frecuencias y los mecanismos de corrección de errores.

En los estándares Wi-Fi modernos (802.11a/g/n/ac/ax/be), OFDM —u OFDMA a partir de Wi-Fi 6—, combinado con distintos esquemas de QAM, es el principal mecanismo de transmisión de datos. Esta técnica también forma parte de tecnologías como LTE, 5G, WiMAX y numerosos sistemas de banda ancha.

### Multiplexación

Además de definir cómo se representan los datos sobre una señal, los sistemas modernos deben permitir que múltiples transmisiones compartan un mismo medio físico.

Para ello se emplean técnicas de multiplexación, que combinan varios flujos de información sobre un único canal de transmisión con el fin de optimizar el aprovechamiento de los recursos disponibles. Las técnicas más utilizadas son las siguientes:

#### TDM

El medio se divide en intervalos de tiempo y cada comunicación utiliza el canal durante un período específico.

Es común en sistemas telefónicos digitales y diversas redes de transporte.

#### FDM

El espectro disponible se divide en múltiples bandas de frecuencia independientes; cada comunicación utiliza una frecuencia diferente, de modo que varias transmisiones coexisten sobre un mismo medio físico.

Se ha utilizado en radio, televisión y sistemas de cable coaxial.

<div class="diagram" id="figura-2-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g202" viewBox="0 0 1200 352.408" role="img" aria-labelledby="g202-title">
<title id="g202-title">Codificación, modulación y multiplexación · funciones diferenciadas</title>
<defs><marker id="g202m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker></defs>
<g id="g202-c" transform="translate(-19.768 -61.086) scale(1.033)"><rect x="40" y="80" width="360" height="270" rx="5.809" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.936"/>
<line x1="40" y1="122" x2="400" y2="122" stroke="#7c3aed" stroke-width="1.452"/>
<text x="220" y="108" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Codificación de línea</text>
<text x="130" y="185" font-size="11.617pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1</text>
<text x="210" y="185" font-size="11.617pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">0</text>
<text x="290" y="185" font-size="11.617pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1</text>
<line x1="90" y1="200" x2="330" y2="200" stroke="#7c3aed" stroke-width="1.452" stroke-dasharray="5.809 3.872"/>
<line x1="90" y1="240" x2="330" y2="240" stroke="#7c3aed" stroke-width="1.452" stroke-dasharray="5.809 3.872"/>
<path d="M 90 240 L 130 240 L 130 200 L 210 200 L 210 240 L 290 240 L 290 200 L 330 200" fill="none" stroke="#7c3aed" stroke-width="2.42"/>
<circle cx="130" cy="220" r="3.5" fill="#7c3aed"/>
<circle cx="210" cy="220" r="3.5" fill="#7c3aed"/>
<circle cx="290" cy="220" r="3.5" fill="#7c3aed"/>
<text x="220" y="285" font-size="11.617pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Manchester</text>
<rect x="420" y="80" width="360" height="270" rx="5.809" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.936"/>
<line x1="420" y1="122" x2="780" y2="122" stroke="#003ecc" stroke-width="1.452"/>
<text x="600" y="108" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Modulación</text>
<text x="495" y="185" font-size="11.617pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1</text>
<text x="585" y="185" font-size="11.617pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">0</text>
<text x="675" y="185" font-size="11.617pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1</text>
<line x1="540" y1="200" x2="540" y2="285" stroke="#1a1a1a" stroke-width="1.452" stroke-dasharray="5.809 3.872"/>
<line x1="630" y1="200" x2="630" y2="285" stroke="#1a1a1a" stroke-width="1.452" stroke-dasharray="5.809 3.872"/>
<path d="M 450 240 Q 465 205 480 240 Q 495 275 510 240 Q 525 205 540 240" fill="none" stroke="#003ecc" stroke-width="2.42"/>
<path d="M 540 240 Q 585 190 630 240" fill="none" stroke="#003ecc" stroke-width="2.42"/>
<path d="M 630 240 Q 645 205 660 240 Q 675 275 690 240 Q 705 205 720 240" fill="none" stroke="#003ecc" stroke-width="2.42"/>
<text x="495" y="300" font-size="10.165pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">frec. alta</text>
<text x="585" y="300" font-size="10.165pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">frec. baja</text>
<text x="675" y="300" font-size="10.165pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">frec. alta</text>
<text x="600" y="322" font-size="11.617pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">FSK: dos frecuencias distintas</text>
<rect x="800" y="80" width="360" height="270" rx="5.809" fill="#e6f4ee" stroke="#009254" stroke-width="1.936"/>
<line x1="800" y1="122" x2="1160" y2="122" stroke="#009254" stroke-width="1.452"/>
<text x="980" y="108" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Multiplexación</text>
<text x="830" y="184" font-size="10.165pt" font-weight="700" fill="#7f1d1d" text-anchor="start">A</text>
<path d="M 845 180 Q 855 165 865 180 Q 875 195 885 180 Q 895 165 905 180" fill="none" stroke="#d40000" stroke-width="1.936"/>
<text x="830" y="214" font-size="10.165pt" font-weight="700" fill="#065f46" text-anchor="start">B</text>
<path d="M 845 210 Q 855 195 865 210 Q 875 225 885 210 Q 895 195 905 210" fill="none" stroke="#009254" stroke-width="1.936"/>
<text x="830" y="244" font-size="10.165pt" font-weight="700" fill="#1e3a8a" text-anchor="start">C</text>
<path d="M 845 240 Q 855 225 865 240 Q 875 255 885 240 Q 895 225 905 240" fill="none" stroke="#003ecc" stroke-width="1.936"/>
<line x1="910" y1="210" x2="935" y2="210" stroke="#364e6c" stroke-width="1.936" marker-end="url(#g202m)"/>
<rect x="938" y="175" width="45" height="70" fill="#ebedf0" stroke="#364e6c" stroke-width="1.936"/>
<text x="960" y="217" font-size="11.617pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">MUX</text>
<line x1="987" y1="210" x2="1010" y2="210" stroke="#364e6c" stroke-width="1.936" marker-end="url(#g202m)"/>
<rect x="1013" y="180" width="130" height="60" fill="#ffffff" stroke="#364e6c" stroke-width="1.452"/>
<path d="M 1015 210 Q 1023 195 1031 210 Q 1039 225 1047 210 Q 1055 190 1063 210 Q 1071 230 1079 210 Q 1087 200 1095 210 Q 1103 220 1111 210 Q 1119 195 1127 210 Q 1135 225 1140 210" fill="none" stroke="#7c3aed" stroke-width="1.936"/>
<text x="1078" y="260" font-size="10.165pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">recurso compartido</text>
</g><text x="600" y="334.568" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 2.4. Codificación, modulación y multiplexación · funciones diferenciadas.</text></svg>
</div>

#### CDMA

Técnica de acceso múltiple (más que de multiplexación en sentido estricto) utilizada en sistemas celulares 3G, como W-CDMA (UMTS) y CDMA2000. Múltiples usuarios pueden compartir el mismo rango de frecuencias y distinguirse mediante códigos o secuencias de expansión.

La ortogonalidad depende de la familia de códigos y de las condiciones de sincronización; no todos los códigos utilizados son necesariamente ortogonales. La técnica requiere procesamiento adicional en el transmisor y el receptor.

#### WDM

Aplicado en fibra óptica, transporta múltiples señales de forma simultánea utilizando diferentes longitudes de onda de luz dentro de una misma fibra.

La codificación, la modulación y la multiplexación son los mecanismos que permiten a las redes transportar grandes volúmenes de información. La relación entre bits, símbolos, baudios y los principales métodos de codificación se ilustra en la Figura 2.4.

## 2.4 RUIDO Y DEGRADACIÓN DE LA SEÑAL

Durante la transmisión, la señal original puede verse afectada por diversas perturbaciones que alteran sus características y dificultan su correcta interpretación en el receptor. Estas perturbaciones se agrupan bajo los conceptos de ruido y degradación de la señal.

Su impacto se evalúa mediante la relación señal a ruido (*Signal-to-Noise Ratio, SNR*), expresada en decibelios (dB): una SNR baja incrementa la tasa de error de bit (*Bit Error Rate, BER*). Los principales efectos que degradan una señal durante la transmisión se representan en la Figura 2.5.

<div class="diagram tabla-svg" id="tabla-2-3" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 302" role="img" aria-labelledby="t8-title"><title id="t8-title">Tabla 2.3. Relación entre la calidad del canal y la modulación.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="63.5"/>
<text class="tb-ht" x="74.4" y="20.0" dominant-baseline="central" text-anchor="middle">Condición del</text>
<text class="tb-ht" x="74.4" y="42.8" dominant-baseline="central" text-anchor="middle">canal</text>
<text class="tb-ht" x="409.8" y="31.4" dominant-baseline="central" text-anchor="middle">Implicación general</text>
<text class="tb-ht" x="935.4" y="31.4" dominant-baseline="central" text-anchor="middle">Consideraciones</text>
<rect class="tb-te" x="0" y="63.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">Calidad</text>
<text class="tb-tx tb-b" x="12.0" y="106.2" dominant-baseline="central">elevada</text>
<text class="tb-tx" x="160.8" y="83.5" dominant-baseline="central">Permite utilizar modulaciones de orden superior y alcanzar</text>
<text class="tb-tx" x="160.8" y="106.2" dominant-baseline="central">mayores tasas de transmisión.</text>
<text class="tb-tx" x="682.7" y="83.5" dominant-baseline="central">Depende de la relación señal a ruido (SNR), la codificación, la</text>
<text class="tb-tx" x="682.7" y="106.2" dominant-baseline="central">implementación y el objetivo de tasa de error.</text>
<rect class="tb-to" x="0" y="127.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="147.0" dominant-baseline="central">Calidad</text>
<text class="tb-tx tb-b" x="12.0" y="169.8" dominant-baseline="central">intermedia</text>
<text class="tb-tx" x="160.8" y="147.0" dominant-baseline="central">Puede requerir modulaciones más robustas o mayor</text>
<text class="tb-tx" x="160.8" y="169.8" dominant-baseline="central">redundancia para mantener una comunicación estable.</text>
<text class="tb-tx" x="682.7" y="147.0" dominant-baseline="central">Los parámetros de transmisión deben adaptarse a las</text>
<text class="tb-tx" x="682.7" y="169.8" dominant-baseline="central">condiciones del canal.</text>
<rect class="tb-te" x="0" y="190.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">Calidad</text>
<text class="tb-tx tb-b" x="12.0" y="233.2" dominant-baseline="central">reducida</text>
<text class="tb-tx" x="160.8" y="210.5" dominant-baseline="central">Exige modulación robusta, menor tasa útil o mecanismos</text>
<text class="tb-tx" x="160.8" y="233.2" dominant-baseline="central">adicionales de protección.</text>
<text class="tb-tx" x="682.7" y="210.5" dominant-baseline="central">La comunicación puede degradarse o interrumpirse si no se</text>
<text class="tb-tx" x="682.7" y="233.2" dominant-baseline="central">cumplen los requisitos mínimos de recepción.</text>
<text class="tb-cap" x="600.0" y="280.0" text-anchor="middle">Tabla 2.3. Relación entre la calidad del canal y la modulación.</text></svg>
</div>

Una SNR insuficiente puede producir una tasa de error de bit incompatible con el funcionamiento normal de una aplicación. No existe un umbral universal: el resultado depende de la modulación, la codificación, el ancho de banda y los mecanismos de corrección de errores.

Antes de detallar los principales efectos, la Tabla 2.3 relaciona la calidad del canal con la modulación que puede sostenerse.

<div class="diagram" id="figura-2-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g203" viewBox="0 0 1200 884.376" role="img" aria-labelledby="g203-title">
<title id="g203-title">Señal transmitida y degradación del canal</title>
<defs><marker id="g203m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker></defs>
<g id="g203-c" transform="translate(-19.768 -61.086) scale(1.033)"><rect x="40" y="80" width="1120" height="140" rx="5.809" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.936"/>
<line x1="40" y1="122" x2="1160" y2="122" stroke="#003ecc" stroke-width="1.452"/>
<text x="600" y="108" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Señal transmitida · limpia</text>
<path d="M 100.0 180.00 L 102.5 177.49 L 105.0 174.99 L 107.5 172.50 L 110.0 170.05 L 112.5 167.64 L 115.0 165.28 L 117.5 162.97 L 120.0 160.73 L 122.5 158.57 L 125.0 156.49 L 127.5 154.50 L 130.0 152.62 L 132.5 150.84 L 135.0 149.18 L 137.5 147.64 L 140.0 146.23 L 142.5 144.95 L 145.0 143.81 L 147.5 142.81 L 150.0 141.96 L 152.5 141.26 L 155.0 140.71 L 157.5 140.32 L 160.0 140.08 L 162.5 140.00 L 165.0 140.08 L 167.5 140.32 L 170.0 140.71 L 172.5 141.26 L 175.0 141.96 L 177.5 142.81 L 180.0 143.81 L 182.5 144.95 L 185.0 146.23 L 187.5 147.64 L 190.0 149.18 L 192.5 150.84 L 195.0 152.62 L 197.5 154.50 L 200.0 156.49 L 202.5 158.57 L 205.0 160.73 L 207.5 162.97 L 210.0 165.28 L 212.5 167.64 L 215.0 170.05 L 217.5 172.50 L 220.0 174.99 L 222.5 177.49 L 225.0 180.00 L 227.5 182.51 L 230.0 185.01 L 232.5 187.50 L 235.0 189.95 L 237.5 192.36 L 240.0 194.72 L 242.5 197.03 L 245.0 199.27 L 247.5 201.43 L 250.0 203.51 L 252.5 205.50 L 255.0 207.38 L 257.5 209.16 L 260.0 210.82 L 262.5 212.36 L 265.0 213.77 L 267.5 215.05 L 270.0 216.19 L 272.5 217.19 L 275.0 218.04 L 277.5 218.74 L 280.0 219.29 L 282.5 219.68 L 285.0 219.92 L 287.5 220.00 L 290.0 219.92 L 292.5 219.68 L 295.0 219.29 L 297.5 218.74 L 300.0 218.04 L 302.5 217.19 L 305.0 216.19 L 307.5 215.05 L 310.0 213.77 L 312.5 212.36 L 315.0 210.82 L 317.5 209.16 L 320.0 207.38 L 322.5 205.50 L 325.0 203.51 L 327.5 201.43 L 330.0 199.27 L 332.5 197.03 L 335.0 194.72 L 337.5 192.36 L 340.0 189.95 L 342.5 187.50 L 345.0 185.01 L 347.5 182.51 L 350.0 180.00 L 352.5 177.49 L 355.0 174.99 L 357.5 172.50 L 360.0 170.05 L 362.5 167.64 L 365.0 165.28 L 367.5 162.97 L 370.0 160.73 L 372.5 158.57 L 375.0 156.49 L 377.5 154.50 L 380.0 152.62 L 382.5 150.84 L 385.0 149.18 L 387.5 147.64 L 390.0 146.23 L 392.5 144.95 L 395.0 143.81 L 397.5 142.81 L 400.0 141.96 L 402.5 141.26 L 405.0 140.71 L 407.5 140.32 L 410.0 140.08 L 412.5 140.00 L 415.0 140.08 L 417.5 140.32 L 420.0 140.71 L 422.5 141.26 L 425.0 141.96 L 427.5 142.81 L 430.0 143.81 L 432.5 144.95 L 435.0 146.23 L 437.5 147.64 L 440.0 149.18 L 442.5 150.84 L 445.0 152.62 L 447.5 154.50 L 450.0 156.49 L 452.5 158.57 L 455.0 160.73 L 457.5 162.97 L 460.0 165.28 L 462.5 167.64 L 465.0 170.05 L 467.5 172.50 L 470.0 174.99 L 472.5 177.49 L 475.0 180.00 L 477.5 182.51 L 480.0 185.01 L 482.5 187.50 L 485.0 189.95 L 487.5 192.36 L 490.0 194.72 L 492.5 197.03 L 495.0 199.27 L 497.5 201.43 L 500.0 203.51 L 502.5 205.50 L 505.0 207.38 L 507.5 209.16 L 510.0 210.82 L 512.5 212.36 L 515.0 213.77 L 517.5 215.05 L 520.0 216.19 L 522.5 217.19 L 525.0 218.04 L 527.5 218.74 L 530.0 219.29 L 532.5 219.68 L 535.0 219.92 L 537.5 220.00 L 540.0 219.92 L 542.5 219.68 L 545.0 219.29 L 547.5 218.74 L 550.0 218.04 L 552.5 217.19 L 555.0 216.19 L 557.5 215.05 L 560.0 213.77 L 562.5 212.36 L 565.0 210.82 L 567.5 209.16 L 570.0 207.38 L 572.5 205.50 L 575.0 203.51 L 577.5 201.43 L 580.0 199.27 L 582.5 197.03 L 585.0 194.72 L 587.5 192.36 L 590.0 189.95 L 592.5 187.50 L 595.0 185.01 L 597.5 182.51 L 600.0 180.00 L 602.5 177.49 L 605.0 174.99 L 607.5 172.50 L 610.0 170.05 L 612.5 167.64 L 615.0 165.28 L 617.5 162.97 L 620.0 160.73 L 622.5 158.57 L 625.0 156.49 L 627.5 154.50 L 630.0 152.62 L 632.5 150.84 L 635.0 149.18 L 637.5 147.64 L 640.0 146.23 L 642.5 144.95 L 645.0 143.81 L 647.5 142.81 L 650.0 141.96 L 652.5 141.26 L 655.0 140.71 L 657.5 140.32 L 660.0 140.08 L 662.5 140.00 L 665.0 140.08 L 667.5 140.32 L 670.0 140.71 L 672.5 141.26 L 675.0 141.96 L 677.5 142.81 L 680.0 143.81 L 682.5 144.95 L 685.0 146.23 L 687.5 147.64 L 690.0 149.18 L 692.5 150.84 L 695.0 152.62 L 697.5 154.50 L 700.0 156.49 L 702.5 158.57 L 705.0 160.73 L 707.5 162.97 L 710.0 165.28 L 712.5 167.64 L 715.0 170.05 L 717.5 172.50 L 720.0 174.99 L 722.5 177.49 L 725.0 180.00 L 727.5 182.51 L 730.0 185.01 L 732.5 187.50 L 735.0 189.95 L 737.5 192.36 L 740.0 194.72 L 742.5 197.03 L 745.0 199.27 L 747.5 201.43 L 750.0 203.51 L 752.5 205.50 L 755.0 207.38 L 757.5 209.16 L 760.0 210.82 L 762.5 212.36 L 765.0 213.77 L 767.5 215.05 L 770.0 216.19 L 772.5 217.19 L 775.0 218.04 L 777.5 218.74 L 780.0 219.29 L 782.5 219.68 L 785.0 219.92 L 787.5 220.00 L 790.0 219.92 L 792.5 219.68 L 795.0 219.29 L 797.5 218.74 L 800.0 218.04 L 802.5 217.19 L 805.0 216.19 L 807.5 215.05 L 810.0 213.77 L 812.5 212.36 L 815.0 210.82 L 817.5 209.16 L 820.0 207.38 L 822.5 205.50 L 825.0 203.51 L 827.5 201.43 L 830.0 199.27 L 832.5 197.03 L 835.0 194.72 L 837.5 192.36 L 840.0 189.95 L 842.5 187.50 L 845.0 185.01 L 847.5 182.51 L 850.0 180.00 L 852.5 177.49 L 855.0 174.99 L 857.5 172.50 L 860.0 170.05 L 862.5 167.64 L 865.0 165.28 L 867.5 162.97 L 870.0 160.73 L 872.5 158.57 L 875.0 156.49 L 877.5 154.50 L 880.0 152.62 L 882.5 150.84 L 885.0 149.18 L 887.5 147.64 L 890.0 146.23 L 892.5 144.95 L 895.0 143.81 L 897.5 142.81 L 900.0 141.96 L 902.5 141.26 L 905.0 140.71 L 907.5 140.32 L 910.0 140.08 L 912.5 140.00 L 915.0 140.08 L 917.5 140.32 L 920.0 140.71 L 922.5 141.26 L 925.0 141.96 L 927.5 142.81 L 930.0 143.81 L 932.5 144.95 L 935.0 146.23 L 937.5 147.64 L 940.0 149.18 L 942.5 150.84 L 945.0 152.62 L 947.5 154.50 L 950.0 156.49 L 952.5 158.57 L 955.0 160.73 L 957.5 162.97 L 960.0 165.28 L 962.5 167.64 L 965.0 170.05 L 967.5 172.50 L 970.0 174.99 L 972.5 177.49 L 975.0 180.00 L 977.5 182.51 L 980.0 185.01 L 982.5 187.50 L 985.0 189.95 L 987.5 192.36 L 990.0 194.72 L 992.5 197.03 L 995.0 199.27 L 997.5 201.43 L 1000.0 203.51 L 1002.5 205.50 L 1005.0 207.38 L 1007.5 209.16 L 1010.0 210.82 L 1012.5 212.36 L 1015.0 213.77 L 1017.5 215.05 L 1020.0 216.19 L 1022.5 217.19 L 1025.0 218.04 L 1027.5 218.74 L 1030.0 219.29 L 1032.5 219.68 L 1035.0 219.92 L 1037.5 220.00 L 1040.0 219.92 L 1042.5 219.68 L 1045.0 219.29 L 1047.5 218.74 L 1050.0 218.04 L 1052.5 217.19 L 1055.0 216.19 L 1057.5 215.05 L 1060.0 213.77 L 1062.5 212.36 L 1065.0 210.82 L 1067.5 209.16 L 1070.0 207.38 L 1072.5 205.50 L 1075.0 203.51 L 1077.5 201.43 L 1080.0 199.27 L 1082.5 197.03 L 1085.0 194.72 L 1087.5 192.36 L 1090.0 189.95 L 1092.5 187.50 L 1095.0 185.01 L 1097.5 182.51 L 1100.0 180.00" fill="none" stroke="#003ecc" stroke-width="2.904" stroke-linejoin="round"/>
<text x="1130" y="108" font-size="10.165pt" font-weight="700" fill="#1e3a8a" text-anchor="end">Amplitud A · sin perturbaciones</text>
<line x1="600" y1="225" x2="600" y2="255" stroke="#364e6c" stroke-width="2.42" marker-end="url(#g203m)"/>
<text x="618" y="244" font-size="11.617pt" font-weight="700" fill="#1a1a1a" text-anchor="start">propagación por el canal</text>
<rect x="40" y="270" width="360" height="190" rx="5.809" fill="#ebedf0" stroke="#364e6c" stroke-width="1.936"/>
<line x1="40" y1="312" x2="400" y2="312" stroke="#364e6c" stroke-width="1.452"/>
<text x="220" y="298" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Atenuación</text>
<path d="M 70 370 L 90 366 L 110 360 L 130 356 L 150 353 L 170 351 L 190 350 L 210 350 L 230 351 L 250 353 L 270 356 L 290 360 L 310 366 L 330 370 L 350 372 L 370 373" fill="none" stroke="#364e6c" stroke-width="1.936" stroke-dasharray="5.809 3.872"/>
<path d="M 70 370 L 90 367 L 110 364 L 130 361 L 150 359 L 170 357 L 190 356 L 210 356 L 230 357 L 250 359 L 270 361 L 290 364 L 310 367 L 330 370 L 350 372 L 370 373" fill="none" stroke="#364e6c" stroke-width="2.904"/>
<text x="220" y="440" font-size="10.165pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Menor amplitud · misma forma</text>
<rect x="420" y="270" width="360" height="190" rx="5.809" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.936"/>
<line x1="420" y1="312" x2="780" y2="312" stroke="#7c3aed" stroke-width="1.452"/>
<text x="600" y="298" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Interferencia</text>
<path d="M 450 370 Q 480 350 510 370 Q 540 390 570 370 Q 600 350 630 370 Q 660 390 690 370 Q 720 350 750 370" fill="none" stroke="#7c3aed" stroke-width="2.904"/>
<path d="M 450 380 Q 480 360 510 380 Q 540 400 570 380 Q 600 360 630 380 Q 660 400 690 380 Q 720 360 750 380" fill="none" stroke="#d40000" stroke-width="1.936" stroke-dasharray="5.809 3.872"/>
<text x="600" y="440" font-size="10.165pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Señales no deseadas se suman a la señal</text>
<rect x="800" y="270" width="360" height="190" rx="5.809" fill="#fbe6e6" stroke="#d40000" stroke-width="1.936"/>
<line x1="800" y1="312" x2="1160" y2="312" stroke="#d40000" stroke-width="1.452"/>
<text x="980" y="298" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Ruido térmico</text>
<path d="M 830 362 Q 860 340 890 372 Q 920 350 950 382 Q 980 358 1010 378 Q 1040 356 1070 384 Q 1100 360 1130 366" fill="none" stroke="#d40000" stroke-width="1.936"/>
<text x="980" y="424" font-size="10.165pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Agitación aleatoria ·</text><text x="980" y="442" font-size="10.165pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">presente sin señal externa</text>
<rect x="40" y="480" width="360" height="190" rx="5.809" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.936"/>
<line x1="40" y1="522" x2="400" y2="522" stroke="#dd3a00" stroke-width="1.452"/>
<text x="220" y="508" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Ruido impulsivo</text>
<path d="M 70 580 Q 100 560 130 580 Q 150 600 160 530 Q 170 620 180 580 Q 210 560 240 580 Q 260 600 270 540 Q 280 620 290 580 Q 320 560 350 580 Q 370 590 385 582" fill="none" stroke="#dd3a00" stroke-width="2.42" stroke-linejoin="round"/>
<text x="220" y="655" font-size="10.165pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Perturbaciones breves de amplitud elevada</text>
<rect x="420" y="480" width="360" height="190" rx="5.809" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.936"/>
<line x1="420" y1="522" x2="780" y2="522" stroke="#003ecc" stroke-width="1.452"/>
<text x="600" y="508" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Distorsión</text>
<path d="M 450 580 Q 470 560 490 570 Q 510 590 530 575 Q 550 555 570 585 Q 590 605 610 580 Q 630 555 650 590 Q 670 610 690 575 Q 710 550 730 590 Q 740 600 750 580" fill="none" stroke="#003ecc" stroke-width="2.904"/>
<text x="600" y="655" font-size="10.165pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Forma alterada · componentes no uniformes</text>
<rect x="800" y="480" width="360" height="190" rx="5.809" fill="#e6f4ee" stroke="#009254" stroke-width="1.936"/>
<line x1="800" y1="522" x2="1160" y2="522" stroke="#009254" stroke-width="1.452"/>
<text x="980" y="508" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Dispersión</text>
<path d="M 830 580 Q 860 570 890 578 Q 920 590 950 580 Q 980 568 1010 582 Q 1040 596 1070 580 Q 1100 568 1130 580" fill="none" stroke="#009254" stroke-width="2.904"/>
<text x="980" y="655" font-size="10.165pt" font-weight="700" fill="#065f46" text-anchor="middle">Pulsos ensanchados · retardos distintos</text>
<line x1="600" y1="690" x2="600" y2="715" stroke="#364e6c" stroke-width="2.42" marker-end="url(#g203m)"/>
<text x="618" y="707" font-size="11.617pt" font-weight="700" fill="#1a1a1a" text-anchor="start">efectos combinados</text>
<rect x="40" y="725" width="1120" height="140" rx="5.809" fill="#fbe6e6" stroke="#d40000" stroke-width="1.936"/>
<line x1="40" y1="762" x2="1160" y2="762" stroke="#d40000" stroke-width="1.452"/>
<text x="600" y="748" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Señal recibida · degradada</text>
<path d="M 100 810 L 110 805 L 120 808 L 130 800 L 140 804 L 150 798 L 160 808 L 170 802 L 180 800 L 190 806 L 200 802 L 210 810 L 220 806 L 230 812 L 240 808 L 250 818 L 260 812 L 270 820 L 280 814 L 290 822 L 300 816 L 310 820 L 320 814 L 330 818 L 340 810 L 350 814 L 360 806 L 370 810 L 380 804 L 390 802 L 400 800 L 410 796 L 420 800 L 430 804 L 440 808 L 450 806 L 460 810 L 470 808 L 480 814 L 490 818 L 500 814 L 510 820 L 520 816 L 530 822 L 540 818 L 550 824 L 560 818 L 570 820 L 580 814 L 590 818 L 600 812 L 610 816 L 620 810 L 630 814 L 640 808 L 650 810 L 660 806 L 670 808 L 680 806 L 690 808 L 700 804 L 710 806 L 720 810 L 730 806 L 740 812 L 750 814 L 760 818 L 770 814 L 780 820 L 790 816 L 800 822 L 810 818 L 820 820 L 830 816 L 840 818 L 850 812 L 860 808 L 870 810 L 880 804 L 890 808 L 900 800 L 910 806 L 920 800 L 930 806 L 940 802 L 950 806 L 960 808 L 970 806 L 980 810 L 990 814 L 1000 810 L 1010 818 L 1020 814 L 1030 820 L 1040 816 L 1050 820 L 1060 816 L 1070 818 L 1080 812 L 1090 816 L 1100 810" fill="none" stroke="#d40000" stroke-width="2.42" stroke-linejoin="round"/>
<text x="1130" y="748" font-size="10.165pt" font-weight="700" fill="#7f1d1d" text-anchor="end">Amplitud menor que A · con ruido y forma alterada</text>
</g><text x="600" y="866.536" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 2.5. Señal transmitida y degradación del canal.</text></svg>
</div>

### Ruido impulsivo

Se manifiesta como picos de energía de corta duración provocados por descargas eléctricas, el encendido de motores u otras interferencias electromagnéticas. Puede ocasionar errores aislados en la transmisión de bits.

### Distorsión

Consiste en la alteración de la forma original de la señal, generalmente causada por las no linealidades del medio de transmisión o por la propagación multicamino en enlaces inalámbricos.

### Interferencia

La interferencia se produce por la superposición de señales procedentes de fuentes ajenas a la comunicación. En medios guiados suele manifestarse como diafonía (*crosstalk*).

### Ruido térmico (o ruido blanco)

Es consecuencia de la agitación térmica de los electrones presentes en los conductores. Se distribuye de manera uniforme en el espectro de frecuencias y está siempre presente.

### Atenuación

Consiste en la pérdida gradual de potencia de la señal a medida que se propaga por el medio de transmisión. Dependiendo de la tecnología empleada, puede compensarse mediante repetidores, regeneradores o amplificadores.

### Dispersión

Consiste en el ensanchamiento de los pulsos al propagarse, porque sus componentes viajan con retardos distintos. Limita la velocidad de símbolo y la distancia alcanzable, por ejemplo en la fibra óptica (dispersión modal y cromática) y en enlaces inalámbricos con propagación multicamino.

## 2.5 ANCHO DE BANDA Y CAPACIDAD DE TRANSMISIÓN

El ancho de banda es uno de los conceptos centrales en redes de computadoras y, al mismo tiempo, uno de los más propensos a interpretaciones erróneas. Dependiendo del contexto, puede referirse tanto a una característica física del medio de transmisión como a la capacidad máxima para transferir información.

Para evitar ambigüedades, es necesario distinguir entre ancho de banda analógico y capacidad de transmisión.

### Ancho de banda analógico (Hz)

El ancho de banda representa el rango de frecuencias que un medio o canal puede transportar de forma adecuada y se calcula como la diferencia entre la frecuencia máxima y la frecuencia mínima que pueden transmitirse con un nivel aceptable de atenuación.

Por ejemplo, un canal capaz de transportar señales entre 100 MHz y 120 MHz posee un ancho de banda de 20 MHz.

Un mayor ancho de banda puede permitir transportar más información, pero la capacidad alcanzable también depende de la relación señal a ruido, la modulación, la codificación y las limitaciones de implementación.

### Capacidad de canal (b/s)

La capacidad de canal representa la cantidad máxima de información que puede transmitirse a través de un medio durante un intervalo de tiempo determinado.

Se expresa en bits por segundo (b/s) y es una medida teórica del rendimiento máximo alcanzable bajo determinadas condiciones.

La capacidad de un canal también está condicionada por la calidad de la señal y el nivel de ruido presente durante la transmisión.

### Teorema de Shannon-Hartley

**C = B log₂ (1 + SNR)**

Este teorema establece el límite teórico máximo de velocidad a la que puede transmitirse información sin errores a través de un canal con un ancho de banda y una relación señal a ruido determinados.

Como la capacidad crece de forma logarítmica con la SNR, aumentar solo la potencia de transmisión produce rendimientos decrecientes: para aumentar la capacidad es necesario ampliar el ancho de banda o reducir el ruido.

Por ejemplo, un canal de 20 MHz con una SNR de 30 dB (equivalente a 1000 en escala lineal) tiene una capacidad máxima teórica de aproximadamente 199 Mb/s.

<div class="diagram" id="figura-2-06" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g204" viewBox="0 0 1200 506.158" role="img" aria-labelledby="g204-title">
<title id="g204-title">Capacidad, tasa nominal, throughput, goodput y componentes de la latencia</title>
<g id="g204-c" transform="translate(-20.49 -66.763) scale(1.052)"><text x="40" y="100" font-size="11.407pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Capacidad teórica</text>
<text x="40" y="118" font-size="9.981pt" fill="#5b21b6" text-anchor="start" font-weight="400">Shannon-Hartley</text>
<rect x="260" y="85" width="880" height="42" rx="5.705" fill="#decefa" stroke="#7c3aed" stroke-width="1.902"/>
<text x="700" y="112" font-size="11.407pt" font-weight="700" fill="#5b21b6" text-anchor="middle">C = B · log₂(1 + SNR) · límite teórico del modelo</text>
<text x="40" y="160" font-size="11.407pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Tasa nominal</text>
<text x="40" y="178" font-size="9.981pt" fill="#1e3a8a" text-anchor="start" font-weight="400">especificación de interfaz</text>
<rect x="260" y="145" width="760" height="42" rx="5.705" fill="#bfcff2" stroke="#003ecc" stroke-width="1.902"/>
<text x="640" y="172" font-size="11.407pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Velocidad especificada para el enlace · ej. 1 Gb/s</text>
<text x="40" y="220" font-size="11.407pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Throughput</text>
<text x="40" y="238" font-size="9.981pt" fill="#065f46" text-anchor="start" font-weight="400">datos transferidos</text>
<rect x="260" y="205" width="620" height="42" rx="5.705" fill="#bfe4d4" stroke="#009254" stroke-width="1.902"/>
<text x="570" y="232" font-size="11.407pt" font-weight="700" fill="#065f46" text-anchor="middle">Datos por unidad de tiempo · nivel de medición</text>
<text x="40" y="280" font-size="11.407pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Goodput</text>
<text x="40" y="298" font-size="9.981pt" fill="#065f46" text-anchor="start" font-weight="400">datos útiles</text>
<rect x="260" y="265" width="460" height="42" rx="5.705" fill="#bfe4d4" stroke="#009254" stroke-width="1.902"/>
<text x="490" y="292" font-size="11.407pt" font-weight="700" fill="#065f46" text-anchor="middle">Carga útil entregada a la aplicación</text>
<text x="40" y="385" font-size="13.308pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Componentes de la latencia</text>
<rect x="80" y="400" width="340" height="58" rx="5.705" fill="#bfcff2" stroke="#003ecc" stroke-width="1.902"/>
<text x="250" y="424" font-size="11.407pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Transmisión</text>
<text x="250" y="444" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">L ÷ R</text>
<rect x="420" y="400" width="280" height="58" rx="5.705" fill="#bfe4d4" stroke="#009254" stroke-width="1.902"/>
<text x="560" y="424" font-size="11.407pt" font-weight="700" fill="#065f46" text-anchor="middle">Propagación</text>
<text x="560" y="444" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">d ÷ v</text>
<rect x="700" y="400" width="160" height="58" rx="5.705" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.902"/>
<text x="780" y="424" font-size="11.407pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Procesamiento</text>
<text x="780" y="444" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">en equipos</text>
<rect x="860" y="400" width="280" height="58" rx="5.705" fill="#decefa" stroke="#7c3aed" stroke-width="1.902"/>
<text x="1000" y="424" font-size="11.407pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Cola</text>
<text x="1000" y="444" font-size="9.981pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">espera en buffers</text>
<line x1="80" y1="470" x2="1140" y2="470" stroke="#1a1a1a" stroke-width="1.426"/>
<line x1="80" y1="462" x2="80" y2="478" stroke="#1a1a1a" stroke-width="1.426"/>
<line x1="1140" y1="462" x2="1140" y2="478" stroke="#1a1a1a" stroke-width="1.426"/>
<text x="610" y="490" font-size="11.407pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Latencia total = suma de los cuatro componentes</text>
</g><text x="600" y="488.318" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 2.6. Capacidad, tasa nominal, throughput, goodput y componentes de la latencia.</text></svg>
</div>

### Capacidad teórica y rendimiento real

Aunque la capacidad de canal proporciona una referencia útil, el rendimiento observado en una red real suele ser inferior. Intervienen numerosos factores que reducen la velocidad efectiva disponible para las aplicaciones, como las retransmisiones provocadas por errores, la congestión de la red, las interferencias, la degradación del medio de transmisión y las limitaciones del *hardware* y del *software*.

### Rendimiento

El *throughput* es la tasa de datos transferidos efectivamente durante un intervalo de tiempo. Su significado exacto depende de la capa y de qué datos se contabilicen; por ello, debe indicarse el punto de medición.

El *goodput* es la tasa de datos útiles entregados a la aplicación, excluyendo la sobrecarga de los protocolos y, normalmente, las retransmisiones. Ambos valores suelen ser inferiores a la tasa nominal del enlace.

Por ejemplo, una interfaz *Gigabit* Ethernet tiene una capacidad nominal de 1 Gb/s, pero el rendimiento efectivo que observa una aplicación suele ser inferior por la sobrecarga de los protocolos, los mecanismos de control y otras condiciones propias de la red. Por eso, dos enlaces con la misma capacidad nominal pueden ofrecer rendimientos reales diferentes.

### Latencia

La latencia es el tiempo que tarda un paquete en viajar del origen al destino; medida en un solo sentido, se llama latencia unidireccional. El tiempo de ida y vuelta se conoce como RTT (*Round-Trip Time*). Se expresa en milisegundos (ms) y permite evaluar la capacidad de respuesta de una red. La Tabla 2.4 compara de forma cualitativa la latencia según el medio de comunicación.

La latencia total se compone de los siguientes elementos:

#### Retardo de propagación

Tiempo necesario para que la señal recorra físicamente el medio de transmisión.

#### Retardo de transmisión

Tiempo requerido para colocar todos los bits de una trama o paquete sobre el medio de transmisión.

#### Retardo de procesamiento

Tiempo empleado por dispositivos como *switches*, *routers* o sistemas finales para analizar y reenviar la información.

#### Retardo de cola

Tiempo durante el cual un paquete permanece esperando en los búferes debido a la congestión o saturación de recursos.

<div class="diagram tabla-svg" id="tabla-2-4" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 343" role="img" aria-labelledby="t9-title"><title id="t9-title">Tabla 2.4. Comparación cualitativa de la latencia según el medio de comunicación.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="95.1" y="20.0" dominant-baseline="central" text-anchor="middle">Medio o tecnología</text>
<text class="tb-ht" x="474.7" y="20.0" dominant-baseline="central" text-anchor="middle">Latencia orientativa</text>
<text class="tb-ht" x="979.6" y="20.0" dominant-baseline="central" text-anchor="middle">Consideraciones</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Red local Ethernet</text>
<text class="tb-tx" x="202.2" y="60.8" dominant-baseline="central">Inferior a pocos milisegundos en redes bien configuradas; puede</text>
<text class="tb-tx" x="202.2" y="83.5" dominant-baseline="central">aumentar con la carga o con trayectos complejos.</text>
<text class="tb-tx" x="771.1" y="60.8" dominant-baseline="central">Depende de la carga, el equipamiento, la trayectoria</text>
<text class="tb-tx" x="771.1" y="83.5" dominant-baseline="central">y el método de medición.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">Banda ancha</text>
<text class="tb-tx tb-b" x="12.0" y="147.0" dominant-baseline="central">terrestre</text>
<text class="tb-tx" x="202.2" y="124.2" dominant-baseline="central">Desde varios milisegundos hasta decenas de milisegundos en</text>
<text class="tb-tx" x="202.2" y="147.0" dominant-baseline="central">numerosos escenarios.</text>
<text class="tb-tx" x="771.1" y="124.2" dominant-baseline="central">Depende de la tecnología de acceso, el</text>
<text class="tb-tx" x="771.1" y="147.0" dominant-baseline="central">encaminamiento, la distancia y la congestión.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Comunicación móvil</text>
<text class="tb-tx" x="202.2" y="187.8" dominant-baseline="central">Desde pocos milisegundos hasta decenas o más, según la</text>
<text class="tb-tx" x="202.2" y="210.5" dominant-baseline="central">tecnología y el escenario.</text>
<text class="tb-tx" x="771.1" y="187.8" dominant-baseline="central">Depende de cobertura, carga, planificación</text>
<text class="tb-tx" x="771.1" y="210.5" dominant-baseline="central">radioeléctrica y núcleo de red.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">Satélite</text>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">geoestacionario</text>
<text class="tb-tx" x="202.2" y="262.6" dominant-baseline="central">RTT aproximadamente entre 500 y 700 ms.</text>
<text class="tb-tx" x="771.1" y="251.2" dominant-baseline="central">La distancia orbital impone un retardo de</text>
<text class="tb-tx" x="771.1" y="274.0" dominant-baseline="central">propagación considerable.</text>
<text class="tb-cap" x="600.0" y="320.8" text-anchor="middle">Tabla 2.4. Comparación cualitativa de la latencia según el medio de comunicación.</text></svg>
</div>

### Jitter

El *jitter* representa la variación de la latencia entre paquetes consecutivos. Aunque una red presente una latencia promedio aceptable, fluctuaciones marcadas en los tiempos de entrega pueden afectar negativamente a determinadas aplicaciones.

Este fenómeno afecta sobre todo a los servicios en tiempo real, como voz sobre IP (VoIP), videoconferencias, transmisión multimedia en directo y sistemas de control remoto. Por ejemplo, si algunos paquetes llegan con retrasos mucho mayores que otros, la reproducción de audio o video puede presentar interrupciones, cortes o pérdida de sincronización.

La capacidad real de un enlace depende de numerosos factores físicos y operativos, entre los que destacan el tipo de medio de transmisión, el nivel de ruido e interferencias, la distancia recorrida por la señal y la calidad de los equipos de transmisión y recepción.

El rendimiento efectivo no equivale a la velocidad nominal anunciada por la tecnología. Los límites teóricos de capacidad y su relación con el rendimiento y la latencia se ilustran en la Figura 2.6.

## 2.6 MEDIOS DE TRANSMISIÓN GUIADOS

Los medios de transmisión guiados, también denominados medios confinados, utilizan un conductor físico para transportar la señal desde el origen hasta el destino. La señal se propaga a través del material del conductor, lo que proporciona un mayor control sobre la transmisión y una menor exposición a interferencias externas.

Los principales medios guiados son el par trenzado, el cable coaxial y la fibra óptica.

La Figura 2.7 compara la construcción interna de los tres medios guiados. La disposición de los conductores y del blindaje, o el uso de luz en lugar de corriente eléctrica, explica sus diferencias de sensibilidad a la interferencia, de alcance y de capacidad.

### Cable de par trenzado

El cable de par trenzado está formado por dos conductores de cobre aislados y entrelazados entre sí para reducir la interferencia electromagnética. Es el medio más utilizado en redes de área local (LAN). Ventajas: bajo costo, fácil instalación y amplia disponibilidad. Desventajas: menor alcance que la fibra óptica y susceptibilidad a interferencias en entornos industriales.

- UTP (*Unshielded Twisted Pair*): cable de pares trenzados sin blindaje adicional, habitual en entornos de oficina. Cat5e admite 1 Gb/s hasta 100 m; Cat6 admite 1 Gb/s hasta 100 m y puede admitir 10GBASE-T en tramos de hasta 55 m, según las condiciones del canal; Cat6A admite 10GBASE-T hasta 100 m. Cat7/Class F y Cat7A/Class FA pertenecen al marco ISO/IEC 11801 y utilizan cableado apantallado; no son categorías reconocidas por ANSI/TIA-568. Cat8 está diseñado para canales de hasta 30 m y admite 25/40GBASE-T según la clase, el cableado y los equipos.
- Cableado apantallado: incorpora una o más capas conductoras que reducen el acoplamiento de interferencias electromagnéticas. La designación concreta debe especificar si el blindaje rodea el conjunto de pares, cada par o ambos; el término STP se utiliza de forma variable y puede resultar ambiguo.
- F/UTP: incorpora una lámina conductora que rodea el conjunto de pares, mientras que los pares individuales no tienen blindaje propio.
- S/FTP: combina una lámina de blindaje alrededor de cada par con una pantalla trenzada exterior. La eficacia del apantallamiento depende también de la continuidad, la terminación y la puesta a tierra del sistema.

<div class="diagram tabla-svg" id="tabla-2-5" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 474" role="img" aria-labelledby="t10-title"><title id="t10-title">Tabla 2.5. Comparación de medios de transmisión guiados.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="77.0" y="20.0" dominant-baseline="central" text-anchor="middle">Medio</text>
<text class="tb-ht" x="357.3" y="20.0" dominant-baseline="central" text-anchor="middle">Ventajas</text>
<text class="tb-ht" x="742.3" y="20.0" dominant-baseline="central" text-anchor="middle">Limitaciones</text>
<text class="tb-ht" x="1062.0" y="20.0" dominant-baseline="central" text-anchor="middle">Aplicaciones</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Par trenzado</text>
<text class="tb-tx tb-b" x="12.0" y="94.9" dominant-baseline="central">UTP</text>
<text class="tb-tx" x="166.1" y="72.1" dominant-baseline="central">Bajo costo, instalación sencilla y amplia</text>
<text class="tb-tx" x="166.1" y="94.9" dominant-baseline="central">compatibilidad.</text>
<text class="tb-tx" x="572.5" y="60.8" dominant-baseline="central">Susceptible a interferencias</text>
<text class="tb-tx" x="572.5" y="83.5" dominant-baseline="central">electromagnéticas y diafonía según la</text>
<text class="tb-tx" x="572.5" y="106.2" dominant-baseline="central">categoría y la instalación.</text>
<text class="tb-tx" x="936.1" y="72.1" dominant-baseline="central">Redes locales, oficinas y</text>
<text class="tb-tx" x="936.1" y="94.9" dominant-baseline="central">cableado estructurado.</text>
<rect class="tb-to" x="0" y="127.0" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="158.4" dominant-baseline="central">Par trenzado</text>
<text class="tb-tx tb-b" x="12.0" y="181.1" dominant-baseline="central">apantallado</text>
<text class="tb-tx" x="166.1" y="147.0" dominant-baseline="central">Mayor protección frente a interferencias</text>
<text class="tb-tx" x="166.1" y="169.8" dominant-baseline="central">cuando el apantallamiento y la puesta a tierra</text>
<text class="tb-tx" x="166.1" y="192.5" dominant-baseline="central">se instalan correctamente.</text>
<text class="tb-tx" x="572.5" y="158.4" dominant-baseline="central">Requiere instalación adecuada y</text>
<text class="tb-tx" x="572.5" y="181.1" dominant-baseline="central">continuidad del apantallamiento.</text>
<text class="tb-tx" x="936.1" y="158.4" dominant-baseline="central">Entornos con requisitos</text>
<text class="tb-tx" x="936.1" y="181.1" dominant-baseline="central">electromagnéticos específicos.</text>
<rect class="tb-te" x="0" y="213.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="244.6" dominant-baseline="central">Coaxial</text>
<text class="tb-tx" x="166.1" y="233.2" dominant-baseline="central">Buenas características de radiofrecuencia y</text>
<text class="tb-tx" x="166.1" y="256.0" dominant-baseline="central">apantallamiento.</text>
<text class="tb-tx" x="572.5" y="233.2" dominant-baseline="central">Mayor volumen y menor flexibilidad de</text>
<text class="tb-tx" x="572.5" y="256.0" dominant-baseline="central">instalación que el par trenzado.</text>
<text class="tb-tx" x="936.1" y="233.2" dominant-baseline="central">Televisión por cable, RF y</text>
<text class="tb-tx" x="936.1" y="256.0" dominant-baseline="central">sistemas de acceso.</text>
<rect class="tb-to" x="0" y="276.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="296.8" dominant-baseline="central">Fibra</text>
<text class="tb-tx tb-b" x="12.0" y="319.5" dominant-baseline="central">monomodo</text>
<text class="tb-tx" x="166.1" y="296.8" dominant-baseline="central">Baja atenuación, gran capacidad y soporte para</text>
<text class="tb-tx" x="166.1" y="319.5" dominant-baseline="central">largas distancias.</text>
<text class="tb-tx" x="572.5" y="296.8" dominant-baseline="central">Requiere componentes ópticos e</text>
<text class="tb-tx" x="572.5" y="319.5" dominant-baseline="central">instalación especializada.</text>
<text class="tb-tx" x="936.1" y="296.8" dominant-baseline="central">Telecomunicaciones e</text>
<text class="tb-tx" x="936.1" y="319.5" dominant-baseline="central">interconexión de edificios.</text>
<rect class="tb-te" x="0" y="340.2" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="371.6" dominant-baseline="central">Fibra</text>
<text class="tb-tx tb-b" x="12.0" y="394.4" dominant-baseline="central">multimodo</text>
<text class="tb-tx" x="166.1" y="383.0" dominant-baseline="central">Alta capacidad en distancias cortas y medias.</text>
<text class="tb-tx" x="572.5" y="360.2" dominant-baseline="central">El alcance depende de la categoría de</text>
<text class="tb-tx" x="572.5" y="383.0" dominant-baseline="central">fibra, la velocidad y los transceptores</text>
<text class="tb-tx" x="572.5" y="405.8" dominant-baseline="central">utilizados.</text>
<text class="tb-tx" x="936.1" y="371.6" dominant-baseline="central">Centros de datos y redes</text>
<text class="tb-tx" x="936.1" y="394.4" dominant-baseline="central">empresariales.</text>
<text class="tb-cap" x="600.0" y="452.5" text-anchor="middle">Tabla 2.5. Comparación de medios de transmisión guiados.</text></svg>
</div>

### Cable coaxial

El cable coaxial está compuesto por un conductor central de cobre rodeado por una capa aislante, una malla conductora y una cubierta exterior. La malla actúa como blindaje contra interferencias.

Se utilizó en redes Ethernet (10BASE2 y 10BASE5). Aunque actualmente su uso en redes LAN es limitado, continúa empleándose en redes de televisión por cable y en enlaces de telecomunicaciones.

<div class="diagram" id="figura-2-07" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g205" viewBox="0 0 1200 519.204" role="img" aria-labelledby="g205-title"><title id="g205-title">Estructura del par trenzado, el cable coaxial y la fibra óptica</title><g id="g205-c" transform="translate(5.54 8.753) scale(1.071)"><rect x="15" y="12" width="350" height="416" rx="5.602" fill="#fbe6e6" stroke="#d40000" stroke-width="2.334"/><text x="190" y="40" font-size="13.072pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Par trenzado</text><text x="190" y="408" font-size="9.804pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">sección transversal</text><rect x="380" y="12" width="350" height="416" rx="5.602" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.334"/><text x="555" y="40" font-size="13.072pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cable coaxial</text><text x="555" y="408" font-size="9.804pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">sección transversal</text><rect x="745" y="12" width="350" height="416" rx="5.602" fill="#e6f4ee" stroke="#009254" stroke-width="2.334"/><text x="920" y="40" font-size="13.072pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Fibra óptica</text><text x="920" y="408" font-size="9.804pt" font-weight="700" fill="#065f46" text-anchor="middle">sección transversal</text><rect x="45" y="70" width="290" height="70" rx="35" fill="#ffffff" stroke="#364e6c" stroke-width="2.801"/><polyline points="63,105.0 66,107.4 69,109.8 72,112.2 75,114.5 78,116.6 81,118.6 84,120.4 87,122.1 90,123.5 93,124.7 96,125.7 99,126.4 102,126.8 105,127.0 108,126.9 111,126.5 114,125.9 117,125.0 120,123.9 123,122.5 126,120.9 129,119.1 132,117.2 135,115.1 138,112.8 141,110.5 144,108.1 147,105.7 150,103.2 153,100.8 156,98.4 159,96.2 162,94.0 165,91.9 168,90.0 171,88.4 174,86.9 177,85.6 180,84.6 183,83.8 186,83.3 189,83.0 192,83.0 195,83.3 198,83.9 201,84.7 204,85.8 207,87.1 210,88.6 213,90.4 216,92.3 219,94.3 222,96.5 225,98.9 228,101.2 231,103.7 234,106.1 237,108.5 240,110.9 243,113.2 246,115.4 249,117.5 252,119.5 255,121.2 258,122.8 261,124.1 264,125.2 267,126.0 270,126.6 273,126.9 276,127.0 279,126.8 282,126.3 285,125.5 288,124.5 291,123.3 294,121.8 297,120.1 300,118.3 303,116.2 306,114.1 309,111.8 312,109.4 315,107.0 318,104.6" fill="none" stroke="#d40000" stroke-width="2.801" stroke-linecap="round"/><polyline points="63,105.0 66,102.6 69,100.2 72,97.8 75,95.5 78,93.4 81,91.4 84,89.6 87,87.9 90,86.5 93,85.3 96,84.3 99,83.6 102,83.2 105,83.0 108,83.1 111,83.5 114,84.1 117,85.0 120,86.1 123,87.5 126,89.1 129,90.9 132,92.8 135,94.9 138,97.2 141,99.5 144,101.9 147,104.3 150,106.8 153,109.2 156,111.6 159,113.8 162,116.0 165,118.1 168,120.0 171,121.6 174,123.1 177,124.4 180,125.4 183,126.2 186,126.7 189,127.0 192,127.0 195,126.7 198,126.1 201,125.3 204,124.2 207,122.9 210,121.4 213,119.6 216,117.7 219,115.7 222,113.5 225,111.1 228,108.8 231,106.3 234,103.9 237,101.5 240,99.1 243,96.8 246,94.6 249,92.5 252,90.5 255,88.8 258,87.2 261,85.9 264,84.8 267,84.0 270,83.4 273,83.1 276,83.0 279,83.2 282,83.7 285,84.5 288,85.5 291,86.7 294,88.2 297,89.9 300,91.7 303,93.8 306,95.9 309,98.2 312,100.6 315,103.0 318,105.4" fill="none" stroke="#003ecc" stroke-width="2.801" stroke-linecap="round"/><text x="190" y="170" font-size="9.804pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">dos conductores aislados entrelazados</text><circle cx="190" cy="290" r="70" fill="#ebedf0" stroke="#364e6c" stroke-width="2.801"/><circle cx="160" cy="290" r="27" fill="#ffffff" stroke="#d40000" stroke-width="2.801"/><circle cx="220" cy="290" r="27" fill="#ffffff" stroke="#003ecc" stroke-width="2.801"/><circle cx="160" cy="290" r="12" fill="#d40000"/><circle cx="220" cy="290" r="12" fill="#003ecc"/><rect x="405" y="75" width="300" height="70" rx="5.602" fill="#ebedf0" stroke="#364e6c" stroke-width="2.801"/><rect x="440" y="85" width="265" height="50" fill="#bfcff2" stroke="#003ecc" stroke-width="1.867"/><rect x="470" y="95" width="235" height="30" fill="#ffffff" stroke="#003ecc" stroke-width="1.867"/><rect x="470" y="108" width="235" height="5" fill="#003ecc"/><circle cx="490" cy="290" r="72" fill="#ebedf0" stroke="#364e6c" stroke-width="2.801"/><circle cx="490" cy="290" r="58" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.801"/><circle cx="490" cy="290" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="2.334"/><circle cx="490" cy="290" r="12" fill="#003ecc"/><path d="M542 240L620 226" stroke="#364e6c" stroke-width="1.867"/><circle cx="542" cy="240" r="3.5" fill="#364e6c"/><text x="624" y="230" font-size="9.804pt" font-weight="400" fill="#1a1a1a" text-anchor="start">cubierta</text><path d="M530 260L620 258" stroke="#364e6c" stroke-width="1.867"/><circle cx="530" cy="260" r="3.5" fill="#364e6c"/><text x="624" y="262" font-size="9.804pt" font-weight="400" fill="#1a1a1a" text-anchor="start">blindaje</text><path d="M512 274L620 290" stroke="#364e6c" stroke-width="1.867"/><circle cx="512" cy="274" r="3.5" fill="#364e6c"/><text x="624" y="294" font-size="9.804pt" font-weight="400" fill="#1a1a1a" text-anchor="start">dieléctrico</text><path d="M494 296L620 322" stroke="#364e6c" stroke-width="1.867"/><circle cx="494" cy="296" r="3.5" fill="#364e6c"/><text x="624" y="326" font-size="9.804pt" font-weight="400" fill="#1a1a1a" text-anchor="start">conductor central</text><rect x="770" y="70" width="300" height="80" rx="5.602" fill="#e6f4ee" stroke="#009254" stroke-width="2.801"/><rect x="770" y="94" width="300" height="32" fill="#ffffff" stroke="#009254" stroke-width="2.334"/><polyline points="785,104 811,116 837,104 863,116 889,104 915,116 941,104 967,116 993,104 1019,116 1045,104" fill="none" stroke="#d40000" stroke-width="2.801" stroke-linejoin="round"/><circle cx="785" cy="104" r="8" fill="#dd3a00" stroke="#7c2d12" stroke-width="1.867"/><circle cx="855" cy="290" r="72" fill="#ebedf0" stroke="#364e6c" stroke-width="2.801"/><circle cx="855" cy="290" r="58" fill="#e6f4ee" stroke="#009254" stroke-width="2.801"/><circle cx="855" cy="290" r="38" fill="#e6ecfa" stroke="#009254" stroke-width="2.334"/><circle cx="855" cy="290" r="16" fill="#dd3a00" stroke="#7c2d12" stroke-width="2.334"/><path d="M907 240L985 226" stroke="#364e6c" stroke-width="1.867"/><circle cx="907" cy="240" r="3.5" fill="#364e6c"/><text x="989" y="230" font-size="9.804pt" font-weight="400" fill="#1a1a1a" text-anchor="start">cubierta</text><path d="M895 260L985 258" stroke="#364e6c" stroke-width="1.867"/><circle cx="895" cy="260" r="3.5" fill="#364e6c"/><text x="989" y="262" font-size="9.804pt" font-weight="400" fill="#1a1a1a" text-anchor="start">buffer</text><path d="M881 276L985 290" stroke="#364e6c" stroke-width="1.867"/><circle cx="881" cy="276" r="3.5" fill="#364e6c"/><text x="989" y="294" font-size="9.804pt" font-weight="400" fill="#1a1a1a" text-anchor="start">revestimiento</text><path d="M863 292L985 322" stroke="#364e6c" stroke-width="1.867"/><circle cx="863" cy="292" r="3.5" fill="#364e6c"/><text x="989" y="326" font-size="9.804pt" font-weight="400" fill="#1a1a1a" text-anchor="start">núcleo</text></g><text x="600" y="501.364" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 2.7. Estructura del par trenzado, el cable coaxial y la fibra óptica.</text></svg>
</div>

### Fibra óptica

La fibra óptica transmite datos mediante pulsos de luz a través de un núcleo de vidrio o plástico. La luz se propaga confinada en el núcleo mediante reflexión interna total, gracias a un revestimiento de menor índice de refracción.

- Multimodo: permite la propagación de varios modos de luz a través del núcleo y se utiliza en redes de campus y centros de datos. El alcance depende de la categoría de fibra, la longitud de onda y el transceptor; como referencia, 10GBASE-SR alcanza hasta 300 m sobre OM3 y 400 m sobre OM4. Las distancias de tecnologías heredadas, como 100BASE-FX, responden a especificaciones diferentes y no deben extrapolarse a velocidades actuales.
- Monomodo: permite la propagación de un único modo de luz, alcanzando distancias de varias decenas de kilómetros. Se utiliza en redes de operadores, interconexión de edificios y redes metropolitanas.

Ventajas: gran capacidad de transmisión, inmunidad a interferencias electromagnéticas y posibilidad de cubrir distancias superiores a las habituales en cobre. La distancia sin regeneración depende del tipo de fibra, la velocidad, la longitud de onda, la potencia óptica y los transceptores; en enlaces extensos pueden requerirse amplificadores o regeneradores.

## 2.7 MEDIOS DE TRANSMISIÓN NO GUIADOS

Los medios de transmisión no guiados, también denominados medios inalámbricos, transmiten señales electromagnéticas a través del espacio, sin necesidad de un conductor físico. Ofrecen movilidad y flexibilidad, aunque su rendimiento puede variar de forma notable según las interferencias, los obstáculos, la distancia y las condiciones del entorno. Comparten las siguientes características generales:

- Proporcionan movilidad y flexibilidad, permitiendo la conexión desde diferentes ubicaciones dentro del área de cobertura.
- Presentan una mayor susceptibilidad a interferencias, ya que la señal puede degradarse por emisiones externas, reflexiones o absorción atmosférica.
- Su uso está sujeto a la regulación del espectro radioeléctrico y de la potencia de transmisión.

Los principales tipos de medios no guiados son los siguientes.

### Infrarrojo

El infrarrojo comprende longitudes de onda equivalentes a frecuencias aproximadas entre 300 GHz y 400 THz. Se emplea en comunicaciones de corto alcance que requieren línea de vista directa y no atraviesan obstáculos como las paredes.

### Tecnologías inalámbricas para IoT

Además de las tecnologías de uso general, existen soluciones específicas para determinadas aplicaciones:

- LoRaWAN: opera en bandas sub-GHz según la región (868 MHz en Europa, 915 MHz en América), ofrece alcances de varios kilómetros (hasta unos 15 km con línea de vista) y un consumo energético muy reducido.
- Zigbee: opera principalmente en 2.4 GHz y proporciona alcances aproximados de entre 10 y 100 metros.
- NB-IoT: utiliza bandas celulares licenciadas para aplicaciones del Internet de las cosas.

### Radiofrecuencia

La radiofrecuencia comprende, de forma teórica, el intervalo de 3 kHz a 300 GHz. Dentro de este intervalo existen bandas ISM (*Industrial, Scientific and Medical*) de uso sin licencia, sujetas a restricciones de potencia de transmisión.

En redes de computadoras se emplean, entre otras, las siguientes bandas; su disponibilidad y las condiciones de uso dependen de la regulación de cada país:

- 2.4 GHz: Wi-Fi, Bluetooth y Zigbee.
- 5 GHz: Wi-Fi y aplicaciones de radar.
- 6 GHz: Wi-Fi 6E y Wi-Fi 7.
- 28 GHz y 39 GHz: redes 5G de ondas milimétricas (mmWave).

### Microondas

Las microondas son un subconjunto de la radiofrecuencia, normalmente comprendido entre 1 GHz y 300 GHz. Estos enlaces suelen requerir línea de vista entre el transmisor y el receptor, pero permiten establecer comunicaciones a varias decenas de kilómetros.

Se utilizan en enlaces de retorno (*backhaul*) de operadores de telecomunicaciones.

## 2.8 ESPECTRO ELECTROMAGNÉTICO EN REDES

El espectro electromagnético comprende la totalidad del rango de frecuencias de la radiación electromagnética. Solo una parte de este espectro resulta adecuada para las comunicaciones inalámbricas, aproximadamente desde 3 kHz hasta 300 GHz. El espectro es un recurso limitado y compartido, por lo que su uso está regulado. Hay bandas con licencia —como las de telefonía celular— y bandas libres o ISM (*Industrial, Scientific and Medical*). Estas últimas no requieren licencia, pero sí están sujetas a restricciones de potencia y emisión.

Las bandas infrarroja y visible se emplean en ciertos sistemas de comunicación óptica; el uso de otras bandas, como la ultravioleta, corresponde a aplicaciones específicas. Los requisitos de línea de vista y los efectos de los obstáculos dependen de la tecnología óptica utilizada. En redes de computadoras, las frecuencias más utilizadas pertenecen a las bandas de radiofrecuencia (RF) y microondas.

<div class="diagram" id="figura-2-08" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g206" viewBox="0 0 1200 329.957" role="img" aria-labelledby="g206-title">
<title id="g206-title">Regiones de radiofrecuencia, microondas e infrarrojo</title>
<defs><marker id="g206m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#1a1a1a"/></marker></defs>
<g id="g206-c" transform="translate(-41.266 -126.721) scale(1.059)"><rect x="80" y="150" width="748" height="50" rx="5.664" fill="#bfcff2" stroke="#003ecc" stroke-width="1.888"/>
<text x="454" y="181" font-size="13.22pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Radiofrecuencia</text>
<text x="454" y="220" font-size="9.915pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">3 kHz – 300 GHz (aprox.)</text>
<rect x="828" y="150" width="292" height="50" rx="5.664" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.888"/>
<text x="974" y="181" font-size="13.22pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Infrarrojo</text>
<text x="974" y="220" font-size="9.915pt" fill="#7c2d12" text-anchor="middle" font-weight="400">300 GHz – 400 THz (aprox.)</text>
<rect x="596" y="235" width="232" height="45" rx="5.664" fill="#bfcff2" stroke="#003ecc" stroke-width="1.888"/>
<text x="712" y="262" font-size="11.331pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Microondas</text>
<text x="712" y="296" font-size="9.915pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">1 – 300 GHz (aprox.)</text>
<line x1="596" y1="140" x2="828" y2="140" stroke="#003ecc" stroke-width="1.416" stroke-dasharray="5.664 3.776"/>
<line x1="596" y1="140" x2="596" y2="150" stroke="#003ecc" stroke-width="1.416" stroke-dasharray="5.664 3.776"/>
<line x1="828" y1="140" x2="828" y2="150" stroke="#003ecc" stroke-width="1.416" stroke-dasharray="5.664 3.776"/>
<line x1="596" y1="235" x2="596" y2="280" stroke="#003ecc" stroke-width="1.416" stroke-dasharray="5.664 3.776"/>
<line x1="828" y1="235" x2="828" y2="280" stroke="#003ecc" stroke-width="1.416" stroke-dasharray="5.664 3.776"/>
<line x1="80" y1="330" x2="1130" y2="330" stroke="#1a1a1a" stroke-width="1.888" marker-end="url(#g206m)"/>
<line x1="80" y1="325" x2="80" y2="335" stroke="#1a1a1a" stroke-width="1.888"/>
<text x="80" y="358" font-size="11.331pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">3 kHz</text>
<line x1="596" y1="325" x2="596" y2="335" stroke="#1a1a1a" stroke-width="1.888"/>
<text x="596" y="358" font-size="11.331pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1 GHz</text>
<line x1="828" y1="325" x2="828" y2="335" stroke="#1a1a1a" stroke-width="1.888"/>
<text x="828" y="358" font-size="11.331pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">300 GHz</text>
<line x1="1120" y1="325" x2="1120" y2="335" stroke="#1a1a1a" stroke-width="1.888"/>
<text x="1120" y="358" font-size="11.331pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">400 THz</text>
<text x="600" y="378" font-size="11.331pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Frecuencia creciente · escala no proporcional</text>
</g><text x="600" y="312.117" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 2.8. Regiones de radiofrecuencia, microondas e infrarrojo.</text></svg>
</div>

### Frecuencias bajas (3 kHz–30 MHz; VLF, LF, MF y HF)

Ofrecen un mayor alcance y una mejor capacidad para atravesar obstáculos, aunque disponen de un ancho de banda limitado. Se utilizan, entre otras aplicaciones, en radiodifusión AM y en comunicaciones marítimas.

### Frecuencias medias (30 MHz–3 GHz; VHF y UHF)

Proporcionan un equilibrio entre alcance y capacidad de transmisión. En este rango se encuentran las bandas ISM de 2.4 GHz, utilizadas por tecnologías como Wi-Fi, Bluetooth y Zigbee.

### Frecuencias altas (3 GHz–30 GHz; SHF)

Permiten mayores anchos de banda, aunque presentan un menor alcance y una mayor sensibilidad a los obstáculos. Se emplean en tecnologías como Wi-Fi de 5 GHz, enlaces satelitales y sistemas de radar.

### Ondas milimétricas (30 GHz–300 GHz; EHF)

Ofrecen un ancho de banda muy elevado, pero un alcance reducido y una capacidad de penetración muy limitada frente a obstáculos. Se utilizan en tecnologías como 5G mmWave y WiGig (60 GHz). En 5G, el término mmWave se aplica por extensión a bandas desde unos 24 GHz, como las de 28 y 39 GHz citadas en la sección 2.7.

La distribución del espectro electromagnético y sus principales rangos de frecuencia se representa en la Figura 2.8.

## 2.9 FRECUENCIAS DE OPERACIÓN

Las redes inalámbricas de área local (WLAN), basadas en los estándares IEEE 802.11 (Wi-Fi), operan principalmente en las bandas de 2.4 GHz y 5 GHz; en los países que la habilitan, también utilizan la banda de 6 GHz.

Cada banda tiene ventajas, limitaciones y usos distintos. Las características y aplicaciones de las bandas Wi-Fi de 2.4, 5 y 6 GHz se comparan en la Figura 2.9 y en la Tabla 2.6.

### Banda de 2.4 GHz

- Rango de frecuencias: de 2.400 a 2.4835 GHz (depende de la regulación de cada país).
- Ventajas: proporciona un mayor alcance y una mejor capacidad de penetración a través de paredes y otros obstáculos debido a su menor frecuencia.
- Desventajas: presenta un elevado nivel de congestión por compartir el espectro con tecnologías como Bluetooth, teléfonos inalámbricos y numerosas redes Wi-Fi.

<div class="diagram" id="figura-2-09" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g207" viewBox="0 0 1200 414.385" role="img" aria-labelledby="g207-title">
<title id="g207-title">Bandas Wi-Fi · 2.4 GHz, 5 GHz y 6 GHz</title>
<g id="g207-c" transform="translate(-19.768 -61.086) scale(1.033)"><rect x="40" y="80" width="360" height="330" rx="5.809" fill="#fbe6e6" stroke="#d40000" stroke-width="1.936"/>
<line x1="40" y1="122" x2="400" y2="122" stroke="#d40000" stroke-width="1.452"/>
<text x="220" y="108" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2.4 GHz</text>
<text x="220" y="196" font-size="11.617pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Canales de 20 MHz</text><text x="220" y="214" font-size="11.617pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">no solapados habituales</text>
<rect x="70" y="235" width="80" height="50" fill="#f4bfbf" stroke="#d40000" stroke-width="1.936"/>
<text x="110" y="267" font-size="11.617pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Canal 1</text>
<rect x="170" y="235" width="80" height="50" fill="#f4bfbf" stroke="#d40000" stroke-width="1.936"/>
<text x="210" y="267" font-size="11.617pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Canal 6</text>
<rect x="270" y="235" width="80" height="50" fill="#f4bfbf" stroke="#d40000" stroke-width="1.936"/>
<text x="310" y="267" font-size="11.617pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Canal 11</text>
<rect x="420" y="80" width="360" height="330" rx="5.809" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.936"/>
<line x1="420" y1="122" x2="780" y2="122" stroke="#dd3a00" stroke-width="1.452"/>
<text x="600" y="108" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">5 GHz</text>
<rect x="450" y="200" width="70" height="44" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.936"/>
<text x="485" y="227" font-size="11.617pt" font-weight="700" fill="#7c2d12" text-anchor="middle">36</text>
<rect x="530" y="200" width="70" height="44" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.936"/>
<text x="565" y="227" font-size="11.617pt" font-weight="700" fill="#7c2d12" text-anchor="middle">40</text>
<rect x="610" y="200" width="70" height="44" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.936"/>
<text x="645" y="227" font-size="11.617pt" font-weight="700" fill="#7c2d12" text-anchor="middle">44</text>
<rect x="690" y="200" width="70" height="44" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.936"/>
<text x="725" y="227" font-size="11.617pt" font-weight="700" fill="#7c2d12" text-anchor="middle">48</text>
<text x="485" y="262" font-size="10.165pt" fill="#7c2d12" text-anchor="middle" font-weight="400">5 180 MHz</text>
<line x1="450" y1="285" x2="760" y2="285" stroke="#dd3a00" stroke-width="1.452"/>
<line x1="450" y1="278" x2="450" y2="292" stroke="#dd3a00" stroke-width="1.452"/>
<line x1="760" y1="278" x2="760" y2="292" stroke="#dd3a00" stroke-width="1.452"/>
<text x="605" y="310" font-size="11.617pt" font-weight="700" fill="#7c2d12" text-anchor="middle">80 MHz · canales 36, 40, 44 y 48</text>
<text x="600" y="375" font-size="11.617pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Anchos: 20 · 40 · 80 · 160 MHz</text>
<rect x="800" y="80" width="360" height="330" rx="5.809" fill="#e6f4ee" stroke="#009254" stroke-width="1.936"/>
<line x1="800" y1="122" x2="1160" y2="122" stroke="#009254" stroke-width="1.452"/>
<text x="980" y="108" font-size="13.553pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">6 GHz</text>
<text x="980" y="212" font-size="11.617pt" font-weight="700" fill="#065f46" text-anchor="middle">EE. UU.: 5 925 – 7 125 MHz</text>
<text x="980" y="230" font-size="10.165pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">hasta 59 canales de 20 MHz</text>
<rect x="830" y="242" width="300" height="30" fill="#bfe4d4" stroke="#009254" stroke-width="1.936"/>
<rect x="830" y="290" width="125" height="30" fill="#bfe4d4" stroke="#009254" stroke-width="1.936"/>
<line x1="830" y1="333" x2="955" y2="333" stroke="#009254" stroke-width="1.452"/>
<line x1="830" y1="326" x2="830" y2="340" stroke="#009254" stroke-width="1.452"/>
<line x1="955" y1="326" x2="955" y2="340" stroke="#009254" stroke-width="1.452"/>
<text x="830" y="356" font-size="11.617pt" font-weight="700" fill="#065f46" text-anchor="start">México: 5 925 – 6 425 MHz</text>
</g><text x="600" y="396.545" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 2.9. Bandas Wi-Fi · 2.4 GHz, 5 GHz y 6 GHz.</text></svg>
</div>

### Banda de 5 GHz

- Rango de frecuencias: de 5.150 a 5.850 GHz, distribuido en diversas subbandas.
- Ventajas: puede ofrecer más canales y anchos de canal de 20, 40, 80 y 160 MHz, según la subbanda, el país y la regulación aplicable. La cantidad de canales no solapados depende del ancho de canal y de las frecuencias autorizadas. En general, puede proporcionar velocidades superiores a 2.4 GHz en condiciones comparables.
- Desventajas: ofrece un menor alcance y una capacidad de penetración inferior a la de la banda de 2.4 GHz.
- Disponibilidad: las subbandas disponibles pueden variar según la regulación vigente en cada país.

<div class="diagram tabla-svg" id="tabla-2-6" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 606" role="img" aria-labelledby="t11-title"><title id="t11-title">Tabla 2.6. Comparación orientativa de las bandas Wi-Fi.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="80.9" y="20.0" dominant-baseline="central" text-anchor="middle">Característica</text>
<text class="tb-ht" x="328.3" y="20.0" dominant-baseline="central" text-anchor="middle">Banda de 2.4 GHz</text>
<text class="tb-ht" x="633.3" y="20.0" dominant-baseline="central" text-anchor="middle">Banda de 5 GHz</text>
<text class="tb-ht" x="985.9" y="20.0" dominant-baseline="central" text-anchor="middle">Banda de 6 GHz</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">Frecuencia</text>
<text class="tb-tx" x="173.7" y="83.5" dominant-baseline="central">Aproximadamente 2.400–2.4835 GHz.</text>
<text class="tb-tx" x="506.8" y="60.8" dominant-baseline="central">Aproximadamente 5.150–5.850</text>
<text class="tb-tx" x="506.8" y="83.5" dominant-baseline="central">GHz, según la regulación</text>
<text class="tb-tx" x="506.8" y="106.2" dominant-baseline="central">regional.</text>
<text class="tb-tx" x="783.7" y="60.8" dominant-baseline="central">Aproximadamente 5.925–7.125 GHz en regiones</text>
<text class="tb-tx" x="783.7" y="83.5" dominant-baseline="central">que habilitan todo ese rango; la disponibilidad</text>
<text class="tb-tx" x="783.7" y="106.2" dominant-baseline="central">varía según el país.</text>
<rect class="tb-to" x="0" y="127.0" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="158.4" dominant-baseline="central">Alcance y</text>
<text class="tb-tx tb-b" x="12.0" y="181.1" dominant-baseline="central">penetración</text>
<text class="tb-tx" x="173.7" y="147.0" dominant-baseline="central">Generalmente mayor alcance y mejor</text>
<text class="tb-tx" x="173.7" y="169.8" dominant-baseline="central">penetración de obstáculos que las</text>
<text class="tb-tx" x="173.7" y="192.5" dominant-baseline="central">bandas superiores.</text>
<text class="tb-tx" x="506.8" y="147.0" dominant-baseline="central">Alcance y penetración</text>
<text class="tb-tx" x="506.8" y="169.8" dominant-baseline="central">generalmente inferiores a 2.4</text>
<text class="tb-tx" x="506.8" y="192.5" dominant-baseline="central">GHz.</text>
<text class="tb-tx" x="783.7" y="158.4" dominant-baseline="central">Generalmente menor alcance y penetración que</text>
<text class="tb-tx" x="783.7" y="181.1" dominant-baseline="central">2.4 y 5 GHz.</text>
<rect class="tb-te" x="0" y="213.2" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="256.0" dominant-baseline="central">Congestión</text>
<text class="tb-tx" x="173.7" y="233.2" dominant-baseline="central">Puede ser elevada por la coexistencia</text>
<text class="tb-tx" x="173.7" y="256.0" dominant-baseline="central">de numerosos dispositivos y</text>
<text class="tb-tx" x="173.7" y="278.8" dominant-baseline="central">tecnologías.</text>
<text class="tb-tx" x="506.8" y="244.6" dominant-baseline="central">Variable según la ocupación</text>
<text class="tb-tx" x="506.8" y="267.4" dominant-baseline="central">local y los canales disponibles.</text>
<text class="tb-tx" x="783.7" y="233.2" dominant-baseline="central">Puede presentar menor congestión en entornos</text>
<text class="tb-tx" x="783.7" y="256.0" dominant-baseline="central">compatibles, aunque depende de la regulación y</text>
<text class="tb-tx" x="783.7" y="278.8" dominant-baseline="central">de la cantidad de redes presentes.</text>
<rect class="tb-to" x="0" y="299.5" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="342.2" dominant-baseline="central">Ancho de canal</text>
<text class="tb-tx" x="173.7" y="330.9" dominant-baseline="central">Habitualmente 20 MHz; otros anchos</text>
<text class="tb-tx" x="173.7" y="353.6" dominant-baseline="central">dependen del estándar y del entorno.</text>
<text class="tb-tx" x="506.8" y="330.9" dominant-baseline="central">20, 40, 80 o 160 MHz, según</text>
<text class="tb-tx" x="506.8" y="353.6" dominant-baseline="central">configuración y compatibilidad.</text>
<text class="tb-tx" x="783.7" y="319.5" dominant-baseline="central">Puede admitir canales de hasta 160 MHz con Wi-Fi</text>
<text class="tb-tx" x="783.7" y="342.2" dominant-baseline="central">6E y hasta 320 MHz con Wi-Fi 7, según regulación</text>
<text class="tb-tx" x="783.7" y="365.0" dominant-baseline="central">y dispositivos.</text>
<rect class="tb-te" x="0" y="385.8" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="428.5" dominant-baseline="central">Regulación</text>
<text class="tb-tx" x="173.7" y="417.1" dominant-baseline="central">Varía según el país y las condiciones</text>
<text class="tb-tx" x="173.7" y="439.9" dominant-baseline="central">de uso del espectro.</text>
<text class="tb-tx" x="506.8" y="405.8" dominant-baseline="central">Varía según el país;</text>
<text class="tb-tx" x="506.8" y="428.5" dominant-baseline="central">determinados canales pueden</text>
<text class="tb-tx" x="506.8" y="451.2" dominant-baseline="central">requerir DFS.</text>
<text class="tb-tx" x="783.7" y="417.1" dominant-baseline="central">La disponibilidad y las condiciones de uso varían</text>
<text class="tb-tx" x="783.7" y="439.9" dominant-baseline="central">considerablemente según la jurisdicción.</text>
<rect class="tb-to" x="0" y="472.0" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="514.8" dominant-baseline="central">Compatibilidad</text>
<text class="tb-tx" x="173.7" y="503.4" dominant-baseline="central">Amplia compatibilidad con dispositivos</text>
<text class="tb-tx" x="173.7" y="526.1" dominant-baseline="central">Wi-Fi.</text>
<text class="tb-tx" x="506.8" y="492.0" dominant-baseline="central">Amplia compatibilidad en</text>
<text class="tb-tx" x="506.8" y="514.8" dominant-baseline="central">equipos Wi-Fi modernos, según</text>
<text class="tb-tx" x="506.8" y="537.5" dominant-baseline="central">estándar.</text>
<text class="tb-tx" x="783.7" y="503.4" dominant-baseline="central">Requiere dispositivos compatibles con Wi-Fi 6E o</text>
<text class="tb-tx" x="783.7" y="526.1" dominant-baseline="central">Wi-Fi 7 y autorización de uso en la región.</text>
<text class="tb-cap" x="600.0" y="584.2" text-anchor="middle">Tabla 2.6. Comparación orientativa de las bandas Wi-Fi.</text></svg>
</div>

### Banda de 6 GHz

- Rango de frecuencias: de 5.925 a 7.125 GHz (el rango exacto disponible varía según el país; por ejemplo, en la Unión Europea se habilitan 5.945–6.425 GHz), incorporado con la aparición de Wi-Fi 6E y Wi-Fi 7.
- Ventajas: puede proporcionar un espectro más amplio (hasta 1200 MHz adicionales en países que habilitan toda la banda), admite canales de hasta 160 MHz con Wi-Fi 6E y de hasta 320 MHz con Wi-Fi 7, y presenta un menor nivel de congestión. Con menos congestión y canales más anchos, la latencia puede reducirse y puede aumentar el *throughput*.
- Desventajas: ofrece un alcance aún menor que la banda de 5 GHz y requiere dispositivos compatibles con Wi-Fi 6E o Wi-Fi 7.

## 2.10 CÁLCULO BÁSICO DE TIEMPOS DE TRANSMISIÓN

El tiempo ideal de transmisión es el intervalo necesario para colocar una cantidad determinada de bits sobre un enlace a una tasa constante. Se calcula dividiendo el tamaño en bits entre la tasa de transmisión en bits por segundo.

El cálculo básico no incluye necesariamente cabeceras, pausas entre tramas, retransmisiones ni otras sobrecargas; tampoco equivale a la latencia total, que puede incluir retardos de transmisión, propagación, procesamiento y espera en cola.

La expresión utilizada para calcular el tiempo de transmisión es la siguiente:

**Tiempo de transmisión (s) = Tamaño de los datos (bits) / Velocidad de transmisión (b/s)**

En la Figura 2.10 puede verse lo que se acaba de explicar. Donde: tamaño de los datos es la cantidad de bits que se desea transmitir; velocidad de transmisión es la velocidad efectiva asumida para el cálculo, expresada en bits por segundo (b/s).

Si el tamaño se expresa en bytes, debe convertirse a bits (1 byte = 8 bits).

Para estimar el tiempo de una transferencia real, deben considerarse también las sobrecargas y las condiciones del enlace.

Por ejemplo, transferir un archivo de 100 MB (100 × 8 = 800 Mb) a 100 Mb/s requiere 800 ÷ 100 = 8 s, sin considerar sobrecargas.

<div class="diagram" id="figura-2-10" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g302" viewBox="0 0 1200 294.421" role="img" aria-labelledby="g302-title">
<title id="g302-title">Tiempo de transmisión · tamaño ÷ velocidad</title>
<g id="g302-c" transform="translate(-31.006 -62.557) scale(1.052)"><rect x="300" y="80" width="600" height="90" rx="5.705" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.902"/><text x="600" y="133" font-size="16.16pt" font-weight="700" fill="#5b21b6" text-anchor="middle">t = L ÷ R</text><rect x="50" y="200" width="340" height="90" rx="5.705" fill="#fbe6e6" stroke="#d40000" stroke-width="1.902"/><text x="220" y="226" font-size="13.308pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Tamaño</text><text x="220" y="256" font-size="11.407pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">100 MB × 8 = 800 Mb</text><text x="220" y="276" font-size="9.981pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">bytes → bits</text><rect x="430" y="200" width="340" height="90" rx="5.705" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.902"/><text x="600" y="226" font-size="13.308pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Velocidad</text><text x="600" y="256" font-size="11.407pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">R = 100 Mb/s</text><text x="600" y="276" font-size="9.981pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">tasa del enlace</text><rect x="810" y="200" width="340" height="90" rx="5.705" fill="#e6f4ee" stroke="#009254" stroke-width="1.902"/><text x="980" y="226" font-size="13.308pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Resultado</text><text x="980" y="256" font-size="11.407pt" font-weight="700" fill="#065f46" text-anchor="middle">800 Mb ÷ 100 Mb/s = 8 s</text><text x="980" y="276" font-size="9.981pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">tiempo ideal</text><text x="410" y="254" font-size="16.16pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">÷</text><text x="790" y="254" font-size="16.16pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">=</text></g><text x="600" y="276.581" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 2.10. Tiempo de transmisión · tamaño ÷ velocidad.</text></svg>
</div>

### Conversión de unidades

Los prefijos decimales (SI) se emplean en las velocidades de transmisión y, por lo general, en las capacidades que anuncian los fabricantes; los prefijos binarios (IEC 80000-13) se emplean para cantidades basadas en potencias de 2, como la memoria.

Conviene verificar el sistema de unidades antes de realizar cualquier cálculo.

La norma IEC 80000-13 distingue los prefijos decimales (kB, MB, GB: 10³, 10⁶ y 10⁹ bytes) de los binarios (KiB, MiB, GiB: 2¹⁰, 2²⁰ y 2³⁰ bytes).

El cálculo del tiempo de transmisión permite estimar el rendimiento de un enlace, dimensionar redes de comunicación y evaluar el impacto del ancho de banda disponible sobre la transferencia de información. Se trata de una estimación del mejor caso: el tiempo real aumenta por la latencia, la congestión y los encabezados, de modo que el cálculo sirve para dimensionar con margen y no para predecir un valor exacto. La Tabla 2.7 resume los prefijos decimales y binarios y la diferencia entre ambos, que conviene fijar antes de comparar capacidades expresadas con unidades distintas.

<div class="diagram tabla-svg" id="tabla-2-7" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 252" role="img" aria-labelledby="t12-title"><title id="t12-title">Tabla 2.7. Prefijos decimales y binarios.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="91.2" y="20.0" dominant-baseline="central" text-anchor="middle">Escala</text>
<text class="tb-ht" x="368.1" y="20.0" dominant-baseline="central" text-anchor="middle">Decimal (SI)</text>
<text class="tb-ht" x="724.3" y="20.0" dominant-baseline="central" text-anchor="middle">Binario (IEC 80000-13)</text>
<text class="tb-ht" x="1047.4" y="20.0" dominant-baseline="central" text-anchor="middle">Diferencia aproximada</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Kilo / kibi</text>
<text class="tb-tx" x="194.4" y="60.8" dominant-baseline="central">k = 10³ = 1 000</text>
<text class="tb-tx" x="565.8" y="60.8" dominant-baseline="central">Ki = 2¹⁰ = 1 024</text>
<text class="tb-tx" x="906.8" y="60.8" dominant-baseline="central">2.4 %</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">Mega / mebi</text>
<text class="tb-tx" x="194.4" y="101.5" dominant-baseline="central">M = 10⁶ = 1 000 000</text>
<text class="tb-tx" x="565.8" y="101.5" dominant-baseline="central">Mi = 2²⁰ = 1 048 576</text>
<text class="tb-tx" x="906.8" y="101.5" dominant-baseline="central">4.9 %</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">Giga / gibi</text>
<text class="tb-tx" x="194.4" y="142.2" dominant-baseline="central">G = 10⁹ = 1 000 000 000</text>
<text class="tb-tx" x="565.8" y="142.2" dominant-baseline="central">Gi = 2³⁰ = 1 073 741 824</text>
<text class="tb-tx" x="906.8" y="142.2" dominant-baseline="central">7.4 %</text>
<rect class="tb-to" x="0" y="163.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="183.0" dominant-baseline="central">Tera / tebi</text>
<text class="tb-tx" x="194.4" y="183.0" dominant-baseline="central">T = 10¹² = 1 000 000 000 000</text>
<text class="tb-tx" x="565.8" y="183.0" dominant-baseline="central">Ti = 2⁴⁰ = 1 099 511 627 776</text>
<text class="tb-tx" x="906.8" y="183.0" dominant-baseline="central">10.0 %</text>
<text class="tb-cap" x="600.0" y="229.8" text-anchor="middle">Tabla 2.7. Prefijos decimales y binarios.</text></svg>
</div>
