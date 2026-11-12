<p class="tema-num">TEMA 04</p>

# DIRECCIONAMIENTO IP Y SUBREDES

El direccionamiento IP es el mecanismo que permite identificar dispositivos y organizar la comunicación dentro de redes locales y globales.

Los componentes del Tema 3 necesitan identificarse para comunicarse. El direccionamiento IP proporciona esa identificación lógica y es la base para segmentar y encaminar en los temas siguientes.

La evolución desde IPv4 hacia IPv6 responde al agotamiento del espacio de direcciones de 32 bits y a la necesidad de simplificar el encabezado, incorporar autoconfiguración y restablecer el modelo de comunicación extremo a extremo.

Dominar la representación binaria y decimal, la notación hexadecimal y los mecanismos de autoconfiguración es necesario para diseñar esquemas de direccionamiento eficientes, diagnosticar problemas de conectividad y planificar el crecimiento ordenado de una red. La Figura 4.1 presenta el mapa de las secciones del tema.

<div class="diagram" id="figura-4-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g404" viewBox="0 0 1200 412" role="img" aria-labelledby="g404-title">
<title id="g404-title">Mapa del Tema 4</title>
<defs></defs>
<g id="g404-c" transform="translate(20 20)"><rect x="0" y="0" width="272" height="158" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="272" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="136" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">4.1 IPv4: 32 bits</text>
<g transform="translate(136 78.64) scale(0.7)" data-lib="globe"><g stroke="#003ecc" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#e6ecfa"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<text x="136" y="139" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Estructura de la dirección</text>
<rect x="296" y="0" width="272" height="158" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="296" y1="34" x2="568" y2="34" stroke="#dd3a00" stroke-width="1.5"/>
<text x="432" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">4.2 Binario y decimal</text>
<g transform="translate(432 78.64) scale(0.7)" data-lib="table"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><rect x="-36" y="-28" width="72" height="14" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></rect><path d="M-36 0H36M-36 14H36M-8 -14V28" stroke="#dd3a00" stroke-width="2"></path></g>
<text x="432" y="139" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Conversión entre sistemas</text>
<rect x="592" y="0" width="272" height="158" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="592" y1="51" x2="864" y2="51" stroke="#7c3aed" stroke-width="1.5"/>
<text x="728" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">4.3 Subnetting y segmentación</text>
<text x="728" y="40" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">lógica</text>
<g transform="translate(728 89.52) scale(0.7)" data-lib="funnel"><path d="M-32 -26 H32 L8 4 V28 L-8 20 V4 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="728" y="142.23" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">División en subredes</text>
<rect x="888" y="0" width="272" height="158" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="888" y1="34" x2="1160" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="1024" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">4.4 CIDR y VLSM</text>
<g transform="translate(1024 78.64) scale(0.7)" data-lib="layers"><path d="M0 2 L34 14 L0 26 L-34 14 Z" fill="#bfe4d4" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -12 L34 0 L0 12 L-34 0 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -26 L34 -14 L0 -2 L-34 -14 Z" fill="#ffffff" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="1024" y="139" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Prefijos y máscaras variables</text>
<rect x="0" y="182" width="272" height="158" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="0" y1="216" x2="272" y2="216" stroke="#7c3aed" stroke-width="1.5"/>
<text x="136" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">4.5 IPv6: 128 bits</text>
<g transform="translate(136 260.64) scale(0.7)" data-lib="globe"><g stroke="#7c3aed" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#f2ebfd"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<text x="136" y="321" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Estructura de la dirección</text>
<rect x="296" y="182" width="272" height="158" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="296" y1="216" x2="568" y2="216" stroke="#d40000" stroke-width="1.5"/>
<text x="432" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">4.6 Notación hexadecimal IPv6</text>
<g transform="translate(432 260.64) scale(0.7)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#fbe6e6" stroke="#d40000" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#d40000"></circle></g>
<text x="432" y="321" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Representación y abreviación</text>
<rect x="592" y="182" width="272" height="158" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="592" y1="216" x2="864" y2="216" stroke="#009254" stroke-width="1.5"/>
<text x="728" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">4.7 Autoconfiguración IPv6</text>
<g transform="translate(728 260.64) scale(0.7)" data-lib="sync"><g fill="none" stroke="#009254" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 -4 A26 26 0 0 1 20 -16"></path><path d="M24 4 A26 26 0 0 1 -20 16"></path><path d="M12 -22 L22 -16 L14 -8"></path><path d="M-12 22 L-22 16 L-14 8"></path></g></g>
<text x="728" y="321" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">SLAAC y DHCPv6</text>
<rect x="888" y="182" width="272" height="158" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="888" y1="216" x2="1160" y2="216" stroke="#364e6c" stroke-width="1.5"/>
<text x="1024" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">4.8 Redes, subredes y host</text>
<g transform="translate(1024 260.64) scale(0.7)" data-lib="nodes"><g stroke="#364e6c" stroke-width="3" fill="none"><path d="M0 -22 L-22 14 M0 -22 L22 14 M-22 14 H22"></path></g><circle cx="0" cy="-22" r="9" fill="#cdd3da" stroke="#364e6c" stroke-width="3"></circle><circle cx="-22" cy="14" r="9" fill="#cdd3da" stroke="#364e6c" stroke-width="3"></circle><circle cx="22" cy="14" r="9" fill="#cdd3da" stroke="#364e6c" stroke-width="3"></circle></g>
<text x="1024" y="321" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Relación entre niveles</text></g><text x="600" y="394" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 4.1. Mapa del Tema 4.</text></svg>
</div>

## 4.1 IPv4 ESTRUCTURA DE 32 BITS

El Protocolo de Internet versión 4 (IPv4) es el esquema de direccionamiento más utilizado en las redes de computadoras desde sus inicios. Su diseño permite interpretar una dirección de acuerdo con un prefijo de red y una parte restante, cuya separación depende de la máscara o longitud del prefijo configurado.

IPv4 utiliza direcciones de 32 bits, representadas generalmente en notación decimal punteada, para identificar interfaces en redes IP. La unicidad depende del ámbito de direccionamiento: las direcciones públicas deben ser únicas globalmente para el enrutamiento público, mientras que las direcciones privadas pueden reutilizarse en redes distintas y una interfaz puede tener varias direcciones.

La longitud fija de 32 bits limita el espacio total de direcciones a 4 294 967 296 (2³², aproximadamente 4 295 millones). La estructura de una dirección IPv4 se compone de dos partes lógicas:

La Figura 4.2 sitúa la máscara sobre los 32 bits: los bits en uno delimitan la parte de red y los restantes la parte de host, de modo que una misma dirección puede pertenecer a redes distintas según la máscara que se le aplique.

<div class="diagram" id="figura-4-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g412" viewBox="66.74 0 1064.68 324.163" role="img" aria-labelledby="g412-title">
<title id="g412-title">Dirección IPv4 y máscara de subred</title>
<defs><marker id="g412m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g412n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g412-c" transform="translate(47.917 21.875) scale(1.25)"><text x="96" y="36" font-size="11.2pt" font-weight="700" fill="#1a1a1a" text-anchor="end">IP</text>
<rect x="110" y="0" width="170" height="56" rx="4.8" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<text x="195" y="37" font-size="13.6pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">192</text>
<text x="290" y="37" font-size="13.6pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">.</text>
<rect x="300" y="0" width="170" height="56" rx="4.8" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<text x="385" y="37" font-size="13.6pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">168</text>
<text x="480" y="37" font-size="13.6pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">.</text>
<rect x="490" y="0" width="170" height="56" rx="4.8" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<text x="575" y="37" font-size="13.6pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">1</text>
<text x="670" y="37" font-size="13.6pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">.</text>
<rect x="680" y="0" width="170" height="56" rx="4.8" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<text x="765" y="37" font-size="13.6pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">10</text>
<text x="96" y="126" font-size="11.2pt" font-weight="700" fill="#1a1a1a" text-anchor="end">Máscara</text>
<rect x="110" y="90" width="170" height="56" rx="4.8" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<text x="195" y="127" font-size="13.6pt" font-weight="700" fill="#065f46" text-anchor="middle">255</text>
<text x="290" y="127" font-size="13.6pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">.</text>
<rect x="300" y="90" width="170" height="56" rx="4.8" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<text x="385" y="127" font-size="13.6pt" font-weight="700" fill="#065f46" text-anchor="middle">255</text>
<text x="480" y="127" font-size="13.6pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">.</text>
<rect x="490" y="90" width="170" height="56" rx="4.8" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<text x="575" y="127" font-size="13.6pt" font-weight="700" fill="#065f46" text-anchor="middle">255</text>
<text x="670" y="127" font-size="13.6pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">.</text>
<rect x="680" y="90" width="170" height="56" rx="4.8" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<text x="765" y="127" font-size="13.6pt" font-weight="700" fill="#7c2d12" text-anchor="middle">0</text>
<line x1="110" y1="170" x2="660" y2="170" stroke="#003ecc" stroke-width="2"/>
<line x1="110" y1="162" x2="110" y2="170" stroke="#003ecc" stroke-width="2"/>
<line x1="660" y1="162" x2="660" y2="170" stroke="#003ecc" stroke-width="2"/>
<text x="385" y="196" font-size="11.2pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Parte de red · 24 bits (/24)</text>
<line x1="680" y1="170" x2="850" y2="170" stroke="#d40000" stroke-width="2"/>
<line x1="680" y1="162" x2="680" y2="170" stroke="#d40000" stroke-width="2"/>
<line x1="850" y1="162" x2="850" y2="170" stroke="#d40000" stroke-width="2"/>
<text x="765" y="196" font-size="11.2pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Parte de host · 8 bits</text>
</g><text x="599.08" y="306.323" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 4.2. Dirección IPv4 y máscara de subred.</text></svg>
</div>

### Parte de red

Identifica la red a la que pertenece el dispositivo. Todos los dispositivos de una misma red comparten el mismo prefijo de red.

### Parte de host

Identifica la interfaz dentro de la subred, siempre que la dirección se haya asignado correctamente y no exista un conflicto. Las direcciones IPv4 se clasifican tradicionalmente en las siguientes categorías funcionales:

<div class="diagram" id="figura-4-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g413" viewBox="0 0 1200 237.298" role="img" aria-labelledby="g413-title">
<title id="g413-title">Categorías de direcciones IPv4</title>
<defs><marker id="g413m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g413n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g413-c" transform="translate(21.536 21.536) scale(1.024)"><rect x="0" y="0" width="210" height="160" rx="5.86" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.953"/>
<line x1="0" y1="34" x2="210" y2="34" stroke="#003ecc" stroke-width="1.465"/>
<text x="105" y="23" font-size="13.672pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Pública</text>
<g transform="translate(105 77) scale(1.7) translate(-105 -77)"><path d="M -22 10 A 10 10 0 0 1 -18 -6 A 14 14 0 0 1 8 -12 A 12 12 0 0 1 24 4 A 8 8 0 0 1 20 10 Z" fill="#003ecc" stroke="#003ecc" stroke-width="2" transform="translate(105 77)"/></g>
<rect x="14" y="120" width="182" height="28" rx="5.86" fill="#bfcff2" stroke="#003ecc" stroke-width="1.465"/>
<text x="105" y="140.002" font-size="10.254pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Enrutable en Internet</text>
<rect x="230" y="0" width="210" height="160" rx="5.86" fill="#e6f4ee" stroke="#009254" stroke-width="1.953"/>
<line x1="230" y1="34" x2="440" y2="34" stroke="#009254" stroke-width="1.465"/>
<text x="335" y="23" font-size="13.672pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Privada</text>
<g transform="translate(335 77) scale(1.7) translate(-335 -77)"><path d="M -24 2 L 0 -20 L 24 2 L 18 2 L 18 20 L -18 20 L -18 2 Z" fill="#009254" stroke="#009254" stroke-width="2" transform="translate(335 77)"/><rect x="330" y="83" width="10" height="14" fill="#ffffff" stroke="#009254" stroke-width="1.2"/></g>
<rect x="244" y="120" width="182" height="28" rx="5.86" fill="#bfe4d4" stroke="#009254" stroke-width="1.465"/>
<text x="335" y="140.002" font-size="10.254pt" font-weight="700" fill="#065f46" text-anchor="middle">RFC 1918</text>
<rect x="460" y="0" width="210" height="160" rx="5.86" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.953"/>
<line x1="460" y1="34" x2="670" y2="34" stroke="#dd3a00" stroke-width="1.465"/>
<text x="565" y="23" font-size="13.672pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Loopback</text>
<g transform="translate(565 77) scale(1.7) translate(-565 -77)"><path d="M -18 0 A 18 18 0 1 1 0 18" fill="none" stroke="#dd3a00" stroke-width="2.5" transform="translate(565 77)"/><line x1="565" y1="95" x2="557" y2="89" stroke="#dd3a00" stroke-width="2"/><line x1="565" y1="95" x2="559" y2="102" stroke="#dd3a00" stroke-width="2"/></g>
<rect x="474" y="120" width="182" height="28" rx="5.86" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.465"/>
<text x="565" y="140.002" font-size="10.254pt" font-weight="700" fill="#7c2d12" text-anchor="middle">127.0.0.0/8</text>
<rect x="690" y="0" width="210" height="160" rx="5.86" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.953"/>
<line x1="690" y1="34" x2="900" y2="34" stroke="#7c3aed" stroke-width="1.465"/>
<text x="795" y="23" font-size="13.672pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Link-local (APIPA)</text>
<g transform="translate(795 77) scale(1.7) translate(-795 -77)"><rect x="769" y="69" width="28" height="16" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/><rect x="793" y="69" width="28" height="16" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/></g>
<rect x="704" y="120" width="182" height="28" rx="5.86" fill="#decefa" stroke="#7c3aed" stroke-width="1.465"/>
<text x="795" y="140.002" font-size="10.254pt" font-weight="700" fill="#5b21b6" text-anchor="middle">169.254.0.0/16</text>
<rect x="920" y="0" width="210" height="160" rx="5.86" fill="#fbe6e6" stroke="#d40000" stroke-width="1.953"/>
<line x1="920" y1="34" x2="1130" y2="34" stroke="#d40000" stroke-width="1.465"/>
<text x="1025" y="23" font-size="13.672pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Broadcast limitado</text>
<g transform="translate(1025 77) scale(1.7) translate(-1025 -77)"><path d="M -22 -6 L -22 6 L -8 6 L 18 20 L 18 -20 L -8 -6 Z" fill="#d40000" stroke="#d40000" stroke-width="2" transform="translate(1025 77)"/><line x1="1009" y1="83" x2="1013" y2="93" stroke="#d40000" stroke-width="2"/></g>
<rect x="934" y="120" width="182" height="28" rx="5.86" fill="#f4bfbf" stroke="#d40000" stroke-width="1.465"/>
<text x="1025" y="140.002" font-size="10.254pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">255.255.255.255</text>
</g><text x="600" y="219.458" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 4.3. Categorías de direcciones IPv4.</text></svg>
</div>

#### Direcciones públicas

Asignadas por la IANA (*Internet Assigned Numbers Authority*) a través de los registros regionales (RIR). Son únicas en Internet y permiten la comunicación global.

#### Direcciones privadas

Son direcciones reservadas para redes privadas y no se anuncian como prefijos de origen en el enrutamiento público de Internet.

El RFC 1918 define tres bloques: 10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16.

Estos rangos pueden reutilizarse en organizaciones distintas; para acceder a Internet suelen utilizarse mecanismos de traducción de direcciones, proxies u otras pasarelas de borde.

#### Direcciones especiales

Incluyen el bloque de loopback 127.0.0.0/8 (por ejemplo, 127.0.0.1), la dirección de difusión limitada 255.255.255.255 y el bloque link-local 169.254.0.0/16, definido en el RFC 3927.

En Windows suele denominarse APIPA a la autoconfiguración de direcciones de ese último bloque. Los *hosts* pueden autoconfigurar una dirección de ese bloque cuando no disponen de otra configuración IPv4; esta permite comunicación local en el enlace, pero no proporciona conectividad global.

La Figura 4.3 y la Tabla 4.1 resumen las categorías de direcciones IPv4.

<div class="diagram tabla-svg" id="tabla-4-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 452" role="img" aria-labelledby="t14-title"><title id="t14-title">Tabla 4.1. Tipos de direcciones IPv4.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="68.2" y="20.0" dominant-baseline="central" text-anchor="middle">Tipo</text>
<text class="tb-ht" x="336.2" y="20.0" dominant-baseline="central" text-anchor="middle">Rango o dirección</text>
<text class="tb-ht" x="668.0" y="20.0" dominant-baseline="central" text-anchor="middle">Enrutable en Internet</text>
<text class="tb-ht" x="1000.0" y="20.0" dominant-baseline="central" text-anchor="middle">Propósito</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">Pública</text>
<text class="tb-tx" x="148.4" y="60.8" dominant-baseline="central">Direcciones asignadas para el espacio de</text>
<text class="tb-tx" x="148.4" y="83.5" dominant-baseline="central">direccionamiento público por los registros</text>
<text class="tb-tx" x="148.4" y="106.2" dominant-baseline="central">regionales de Internet.</text>
<text class="tb-tx" x="548.1" y="60.8" dominant-baseline="central">Sí, sujeto a las políticas de</text>
<text class="tb-tx" x="548.1" y="83.5" dominant-baseline="central">encaminamiento y</text>
<text class="tb-tx" x="548.1" y="106.2" dominant-baseline="central">asignación.</text>
<text class="tb-tx" x="811.9" y="83.5" dominant-baseline="central">Comunicación global.</text>
<rect class="tb-to" x="0" y="127.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="147.0" dominant-baseline="central">Privada (RFC</text>
<text class="tb-tx tb-b" x="12.0" y="169.8" dominant-baseline="central">1918)</text>
<text class="tb-tx" x="148.4" y="158.4" dominant-baseline="central">10.0.0.0/8; 172.16.0.0/12; 192.168.0.0/16.</text>
<text class="tb-tx" x="548.1" y="147.0" dominant-baseline="central">No en el encaminamiento</text>
<text class="tb-tx" x="548.1" y="169.8" dominant-baseline="central">público de Internet.</text>
<text class="tb-tx" x="811.9" y="158.4" dominant-baseline="central">Uso interno en redes privadas.</text>
<rect class="tb-te" x="0" y="190.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="221.9" dominant-baseline="central">Loopback</text>
<text class="tb-tx" x="148.4" y="221.9" dominant-baseline="central">127.0.0.0/8; principalmente 127.0.0.1.</text>
<text class="tb-tx" x="548.1" y="221.9" dominant-baseline="central">No.</text>
<text class="tb-tx" x="811.9" y="210.5" dominant-baseline="central">Pruebas y comunicación local dentro del</text>
<text class="tb-tx" x="811.9" y="233.2" dominant-baseline="central">propio sistema.</text>
<rect class="tb-to" x="0" y="254.0" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="285.4" dominant-baseline="central">Link-local</text>
<text class="tb-tx tb-b" x="12.0" y="308.1" dominant-baseline="central">(RFC 3927)</text>
<text class="tb-tx" x="148.4" y="296.8" dominant-baseline="central">169.254.0.0/16.</text>
<text class="tb-tx" x="548.1" y="296.8" dominant-baseline="central">No.</text>
<text class="tb-tx" x="811.9" y="274.0" dominant-baseline="central">Autoconfiguración IPv4 para comunicación en</text>
<text class="tb-tx" x="811.9" y="296.8" dominant-baseline="central">el enlace local cuando no se dispone de otra</text>
<text class="tb-tx" x="811.9" y="319.5" dominant-baseline="central">configuración.</text>
<rect class="tb-te" x="0" y="340.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="360.2" dominant-baseline="central">Broadcast</text>
<text class="tb-tx tb-b" x="12.0" y="383.0" dominant-baseline="central">limitado</text>
<text class="tb-tx" x="148.4" y="371.6" dominant-baseline="central">255.255.255.255.</text>
<text class="tb-tx" x="548.1" y="371.6" dominant-baseline="central">No.</text>
<text class="tb-tx" x="811.9" y="360.2" dominant-baseline="central">Difusión limitada al segmento o dominio local</text>
<text class="tb-tx" x="811.9" y="383.0" dominant-baseline="central">correspondiente.</text>
<text class="tb-cap" x="600.0" y="429.8" text-anchor="middle">Tabla 4.1. Tipos de direcciones IPv4.</text></svg>
</div>

La IANA agotó su inventario central de bloques IPv4 en febrero de 2011, aunque los registros regionales continuaron asignando direcciones durante años posteriores.

El agotamiento de direcciones IPv4 ha impulsado el uso de técnicas como NAT (*Network Address Translation*) y la transición hacia IPv6.

## 4.2 BINARIO Y DECIMAL

La representación binaria es la forma en que los dispositivos interpretan las direcciones IP: una secuencia de 32 bits (unos y ceros). Para las personas resulta más práctica la representación decimal, que facilita su lectura e interpretación.

En la representación decimal, usada habitualmente por los usuarios, los 32 bits se dividen en cuatro octetos (grupos de 8 bits) y cada uno se convierte en un valor decimal comprendido entre 0 y 255. Comprender ambas notaciones y su equivalencia es condición para hacer *subnetting* (sección 4.3), configurar equipos manualmente y diagnosticar redes.

<div class="diagram" id="figura-4-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g414" viewBox="0 0 1200 308.67" role="img" aria-labelledby="g414-title">
<title id="g414-title">Conversión de un octeto y de una dirección completa</title>
<defs><marker id="g414m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g414n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g414-c" transform="translate(21.637 16.544) scale(1.091)"><text x="249" y="18" font-size="9.624pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">128</text>
<rect x="214" y="28" width="70" height="44" rx="5.498" fill="#bfcff2" stroke="#003ecc" stroke-width="1.833"/>
<text x="249" y="58" font-size="15.582pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">1</text>
<text x="325" y="18" font-size="9.624pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">64</text>
<rect x="290" y="28" width="70" height="44" rx="5.498" fill="#ebedf0" stroke="#364e6c" stroke-width="1.833"/>
<text x="325" y="58" font-size="15.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">0</text>
<text x="401" y="18" font-size="9.624pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">32</text>
<rect x="366" y="28" width="70" height="44" rx="5.498" fill="#bfcff2" stroke="#003ecc" stroke-width="1.833"/>
<text x="401" y="58" font-size="15.582pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">1</text>
<text x="477" y="18" font-size="9.624pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">16</text>
<rect x="442" y="28" width="70" height="44" rx="5.498" fill="#ebedf0" stroke="#364e6c" stroke-width="1.833"/>
<text x="477" y="58" font-size="15.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">0</text>
<text x="553" y="18" font-size="9.624pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">8</text>
<rect x="518" y="28" width="70" height="44" rx="5.498" fill="#bfcff2" stroke="#003ecc" stroke-width="1.833"/>
<text x="553" y="58" font-size="15.582pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">1</text>
<text x="629" y="18" font-size="9.624pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">4</text>
<rect x="594" y="28" width="70" height="44" rx="5.498" fill="#ebedf0" stroke="#364e6c" stroke-width="1.833"/>
<text x="629" y="58" font-size="15.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">0</text>
<text x="705" y="18" font-size="9.624pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">2</text>
<rect x="670" y="28" width="70" height="44" rx="5.498" fill="#ebedf0" stroke="#364e6c" stroke-width="1.833"/>
<text x="705" y="58" font-size="15.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">0</text>
<text x="781" y="18" font-size="9.624pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">1</text>
<rect x="746" y="28" width="70" height="44" rx="5.498" fill="#ebedf0" stroke="#364e6c" stroke-width="1.833"/>
<text x="781" y="58" font-size="15.582pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">0</text>
<text x="516" y="104" font-size="12.832pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">128 + 32 + 8 = 168</text>
<rect x="0" y="150" width="250" height="70" rx="5.498" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.833"/>
<text x="125" y="180" font-size="12.832pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">192</text>
<text x="125" y="206" font-size="12.832pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">11000000</text>
<rect x="270" y="150" width="250" height="70" rx="5.498" fill="#e6f4ee" stroke="#009254" stroke-width="1.833"/>
<text x="395" y="180" font-size="12.832pt" font-weight="700" fill="#065f46" text-anchor="middle">168</text>
<text x="395" y="206" font-size="12.832pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">10101000</text>
<rect x="540" y="150" width="250" height="70" rx="5.498" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.833"/>
<text x="665" y="180" font-size="12.832pt" font-weight="700" fill="#7c2d12" text-anchor="middle">1</text>
<text x="665" y="206" font-size="12.832pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">00000001</text>
<rect x="810" y="150" width="250" height="70" rx="5.498" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.833"/>
<text x="935" y="180" font-size="12.832pt" font-weight="700" fill="#5b21b6" text-anchor="middle">10</text>
<text x="935" y="206" font-size="12.832pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">00001010</text>
</g><text x="600" y="290.83" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 4.4. Conversión de un octeto y de una dirección completa.</text></svg>
</div>

Ejemplo de conversión:

- Decimal: 192.168.1.10
- Binario: 11000000.10101000.00000001.00001010

Cada octeto se obtiene mediante la suma de potencias de dos.

- Primer octeto: 128 + 64 = 192
- Segundo octeto: 128 + 32 + 8 = 168
- Tercer octeto: 1
- Cuarto octeto: 8 + 2 = 10

La Figura 4.4 desarrolla paso a paso la conversión del octeto 168 y de la dirección completa. Esa equivalencia entre binario y decimal es la base para:

- Interpretar máscaras de red (por ejemplo, 255.255.255.0, equivalente a un prefijo de /24).
- Realizar operaciones lógicas AND entre la dirección IP y la máscara.
- Calcular direcciones de broadcast, rangos de hosts y subredes.
- Analizar direcciones IP durante tareas de diagnóstico.

Una habilidad práctica para cualquier profesional de redes consiste en convertir mentalmente entre binario y decimal los valores más comunes (0 a 255), especialmente aquellos correspondientes a potencias de dos y a los límites habituales de las subredes.

## 4.3 SUBNETTING Y SEGMENTACIÓN LÓGICA

A medida que las redes crecen en tamaño, es necesario dividirlas en segmentos más pequeños para mejorar su administración, rendimiento y seguridad. Este proceso, denominado *subnetting* (subredes), consiste en dividir lógicamente una red IP en múltiples subredes más pequeñas.

El *subnetting* crea múltiples subredes IP tomando bits de la porción de host para ampliar el prefijo de red y ajustar el tamaño de cada segmento a sus necesidades.

Cuando cada subred se implementa en un segmento de capa 2 separado y el tráfico se enruta entre ellas, también se delimitan los dominios de broadcast y se simplifica la aplicación de políticas de control.

Esta técnica por sí sola no crea automáticamente esa separación en la capa de enlace.

<div class="diagram tabla-svg" id="tabla-4-2" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 252" role="img" aria-labelledby="t15-title"><title id="t15-title">Tabla 4.2. División de 192.168.1.0/24 en cuatro subredes /26.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="83.0" y="20.0" dominant-baseline="central" text-anchor="middle">Subred</text>
<text class="tb-ht" x="324.7" y="20.0" dominant-baseline="central" text-anchor="middle">Dirección de red</text>
<text class="tb-ht" x="719.2" y="20.0" dominant-baseline="central" text-anchor="middle">Hosts utilizables</text>
<text class="tb-ht" x="1077.5" y="20.0" dominant-baseline="central" text-anchor="middle">Broadcast</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">1</text>
<text class="tb-tx" x="177.9" y="60.8" dominant-baseline="central">192.168.1.0/26</text>
<text class="tb-tx" x="495.6" y="60.8" dominant-baseline="central">192.168.1.1 – 192.168.1.62</text>
<text class="tb-tx" x="966.9" y="60.8" dominant-baseline="central">192.168.1.63</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">2</text>
<text class="tb-tx" x="177.9" y="101.5" dominant-baseline="central">192.168.1.64/26</text>
<text class="tb-tx" x="495.6" y="101.5" dominant-baseline="central">192.168.1.65 – 192.168.1.126</text>
<text class="tb-tx" x="966.9" y="101.5" dominant-baseline="central">192.168.1.127</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">3</text>
<text class="tb-tx" x="177.9" y="142.2" dominant-baseline="central">192.168.1.128/26</text>
<text class="tb-tx" x="495.6" y="142.2" dominant-baseline="central">192.168.1.129 – 192.168.1.190</text>
<text class="tb-tx" x="966.9" y="142.2" dominant-baseline="central">192.168.1.191</text>
<rect class="tb-to" x="0" y="163.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="183.0" dominant-baseline="central">4</text>
<text class="tb-tx" x="177.9" y="183.0" dominant-baseline="central">192.168.1.192/26</text>
<text class="tb-tx" x="495.6" y="183.0" dominant-baseline="central">192.168.1.193 – 192.168.1.254</text>
<text class="tb-tx" x="966.9" y="183.0" dominant-baseline="central">192.168.1.255</text>
<text class="tb-cap" x="600.0" y="229.8" text-anchor="middle">Tabla 4.2. División de 192.168.1.0/24 en cuatro subredes /26.</text></svg>
</div>

### Objetivos de la segmentación lógica

#### Aumentar la seguridad

Permite organizar departamentos o servicios en subredes independientes; para que ese aislamiento sea efectivo, debe acompañarse de límites de capa 2 y políticas de control de acceso apropiadas.

#### Reducir la congestión

Cuando las subredes se corresponden con segmentos de capa 2 separados, los dominios de broadcast más pequeños limitan la difusión innecesaria del tráfico.

#### Mejorar el control del tráfico

Cuando las subredes se implementan en segmentos distintos, el tráfico entre ellas debe pasar por un dispositivo de capa 3, donde pueden aplicarse políticas de enrutamiento y filtrado.

#### Facilitar la administración

La asignación de direcciones y la resolución de problemas se simplifican al trabajar con redes de menor tamaño.

### Proceso del subnetting

La Figura 4.5 resume el proceso en cinco pasos; conviene recorrerlo siempre en ese orden, porque la máscara se deriva de los requisitos de subredes y de hosts, y no al revés.

<div class="diagram" id="figura-4-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g415" viewBox="0 0 1200 183.706" role="img" aria-labelledby="g415-title">
<title id="g415-title">Proceso de subnetting en cinco pasos</title>
<defs><marker id="g415m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g415n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g415-c" transform="translate(21.504 21.504) scale(1.003)"><rect x="0" y="0" width="210" height="110" rx="5.984" fill="#e6ecfa" stroke="#003ecc" stroke-width="1.995"/>
<line x1="0" y1="34" x2="210" y2="34" stroke="#003ecc" stroke-width="1.496"/>
<text x="105" y="23" font-size="13.958pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1 · Red base</text>
<text x="105" y="75" font-size="10.469pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">192.168.1.0/24</text>
<line x1="214" y1="55" x2="232" y2="55" stroke="#364e6c" stroke-width="1.995" marker-end="url(#g415m)"/>
<rect x="236" y="0" width="210" height="110" rx="5.984" fill="#e6f4ee" stroke="#009254" stroke-width="1.995"/>
<line x1="236" y1="34" x2="446" y2="34" stroke="#009254" stroke-width="1.496"/>
<text x="341" y="23" font-size="13.958pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2 · Requisito</text>
<text x="341" y="75" font-size="10.469pt" font-weight="700" fill="#065f46" text-anchor="middle">4 subredes</text>
<line x1="450" y1="55" x2="468" y2="55" stroke="#364e6c" stroke-width="1.995" marker-end="url(#g415m)"/>
<rect x="472" y="0" width="210" height="110" rx="5.984" fill="#fcebe6" stroke="#dd3a00" stroke-width="1.995"/>
<line x1="472" y1="34" x2="682" y2="34" stroke="#dd3a00" stroke-width="1.496"/>
<text x="577" y="23" font-size="13.958pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">3 · Bits prestados</text>
<text x="577" y="75" font-size="10.469pt" font-weight="700" fill="#7c2d12" text-anchor="middle">n = 2 bits</text>
<line x1="686" y1="55" x2="704" y2="55" stroke="#364e6c" stroke-width="1.995" marker-end="url(#g415m)"/>
<rect x="708" y="0" width="210" height="110" rx="5.984" fill="#f2ebfd" stroke="#7c3aed" stroke-width="1.995"/>
<line x1="708" y1="34" x2="918" y2="34" stroke="#7c3aed" stroke-width="1.496"/>
<text x="813" y="23" font-size="13.958pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">4 · Nueva máscara</text>
<text x="813" y="75" font-size="10.469pt" font-weight="700" fill="#5b21b6" text-anchor="middle">/26 = 255.255.255.192</text>
<line x1="922" y1="55" x2="940" y2="55" stroke="#364e6c" stroke-width="1.995" marker-end="url(#g415m)"/>
<rect x="944" y="0" width="210" height="110" rx="5.984" fill="#fbe6e6" stroke="#d40000" stroke-width="1.995"/>
<line x1="944" y1="34" x2="1154" y2="34" stroke="#d40000" stroke-width="1.496"/>
<text x="1049" y="23" font-size="13.958pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">5 · Subredes</text>
<text x="1049" y="68" font-size="10.469pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">4 subredes /26</text>
<text x="1049" y="85.4956" font-size="10.469pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">64 direcciones c/u</text>
</g><text x="600" y="165.866" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 4.5. Proceso de subnetting en cinco pasos.</text></svg>
</div>

#### 1. Definir la dirección de red base y su máscara original

Por ejemplo: 192.168.1.0/24.

#### 2. Determinar el requisito

Establecer el número de subredes necesarias o la cantidad de hosts requerida por cada subred.

#### 3. Calcular los bits a prestar

Se toman prestados *n* bits de la porción de host para satisfacer el requisito de segmentación.

#### 4. Obtener la nueva máscara de subred

Se suman los bits prestados a la máscara original. Por ejemplo, /24 + 2 bits = /26 (255.255.255.192).

#### 5. Enumerar las subredes resultantes

Calcular para cada subred la dirección de red, el primer host, el último host y la dirección de broadcast.

Como ejemplo, la Tabla 4.2 muestra la red 192.168.1.0/24 dividida en cuatro subredes /26 (máscara 255.255.255.192), cada una con 64 direcciones, de las cuales 62 son utilizables.

El *subnetting* es necesario para diseñar redes IP, asociar una subred a cada VLAN y configurar el enrutamiento.

## 4.4 CIDR Y VLSM

La evolución de las redes impulsó la implementación de esquemas de direccionamiento más flexibles. CIDR (*Classless Inter-Domain Routing*) reemplazó el modelo tradicional basado en las clases A, B y C, permitiendo la agregación de rutas y la asignación de prefijos de cualquier longitud, sin limitarse a /8, /16 o /24.

La notación CIDR se define formalmente en el RFC 4632 (*Classless Inter-domain Routing (CIDR): The Internet Address Assignment and Aggregation Plan*, 2006), que deja obsoleto al RFC 1519 (1993).

<div class="diagram" id="figura-4-06" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g416" viewBox="0 0 1200 314.085" role="img" aria-labelledby="g416-title">
<title id="g416-title">Reparto VLSM de 192.168.0.0/24</title>
<defs><marker id="g416m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g416n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g416-c" transform="translate(27.011 5.031) scale(1.137)"><rect x="0" y="40" width="250" height="60" rx="5.278" fill="#fbe6e6" stroke="#d40000" stroke-width="2.199"/>
<text x="125" y="78" font-size="12.313pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">/26</text>
<rect x="250" y="40" width="125" height="60" rx="5.278" fill="#e6f4ee" stroke="#009254" stroke-width="2.199"/>
<text x="312.5" y="78" font-size="12.313pt" font-weight="700" fill="#065f46" text-anchor="middle">/27</text>
<rect x="375" y="40" width="15.625" height="60" rx="2.639" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.199"/>
<rect x="390.625" y="40" width="609.375" height="60" rx="5.278" fill="#ebedf0" stroke="#364e6c" stroke-width="2.199" stroke-dasharray="5.278 3.518"/>
<text x="695.312" y="76" font-size="10.554pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Libre</text>
<text x="0" y="28" font-size="9.235pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">0</text>
<text x="250" y="28" font-size="9.235pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">64</text>
<text x="375" y="28" font-size="9.235pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">96</text>
<text x="1000" y="28" font-size="9.235pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">255</text>
<rect x="0" y="150" width="260" height="76" rx="5.278" fill="#fbe6e6" stroke="#d40000" stroke-width="2.199"/>
<line x1="0" y1="182" x2="260" y2="182" stroke="#d40000" stroke-width="1.319"/>
<text x="130" y="172" font-size="12.313pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">192.168.0.0/26</text>
<text x="130" y="208" font-size="9.235pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">60 hosts · 64 direcciones</text>
<polyline points="125,100 125,126 130,126 130,150" fill="none" stroke="#d40000" stroke-width="1.319"/>
<rect x="300" y="150" width="260" height="76" rx="5.278" fill="#e6f4ee" stroke="#009254" stroke-width="2.199"/>
<line x1="300" y1="182" x2="560" y2="182" stroke="#009254" stroke-width="1.319"/>
<text x="430" y="172" font-size="12.313pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">192.168.0.64/27</text>
<text x="430" y="208" font-size="9.235pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">30 hosts · 32 direcciones</text>
<polyline points="312.5,100 312.5,126 430,126 430,150" fill="none" stroke="#009254" stroke-width="1.319"/>
<rect x="600" y="150" width="260" height="76" rx="5.278" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.199"/>
<line x1="600" y1="182" x2="860" y2="182" stroke="#003ecc" stroke-width="1.319"/>
<text x="730" y="172" font-size="12.313pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">192.168.0.96/30</text>
<text x="730" y="208" font-size="9.235pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">enlace de 2 hosts · 4 direcciones</text>
<polyline points="382.812,100 382.812,126 730,126 730,150" fill="none" stroke="#003ecc" stroke-width="1.319"/>
</g><text x="600" y="296.245" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 4.6. Reparto VLSM de 192.168.0.0/24.</text></svg>
</div>

Red base: 192.168.0.0/24.

- 60 hosts → /26 (64 direcciones): 192.168.0.0/26.
- 30 hosts → /27 (32 direcciones): 192.168.0.64/27.
- Enlace serial (2 hosts) → /30 (4 direcciones): 192.168.0.96/30.

Las máscaras son diferentes, pero todas las subredes pertenecen a la misma red base.

Este esquema permite expresar redes de cualquier tamaño mediante la notación de prefijo (CIDR). La Figura 4.6 muestra cómo se reparten las direcciones de la red base.

### Máscara de subred de longitud variable

VLSM (*Variable Length Subnet Mask*) es una técnica relacionada con CIDR que permite dividir una red en subredes con máscaras de distinta longitud, adaptando el tamaño de cada una a la cantidad real de hosts requerida, en lugar de utilizar una única máscara para todas las subredes.

### Reducción del desperdicio de direcciones

Evita asignar una subred para 254 hosts (máscara /24) a un segmento que solo requiere unos cuantos dispositivos.

### Mayor complejidad de planificación

Requiere un cálculo cuidadoso para evitar la superposición de rangos de direcciones y demanda soporte por parte de protocolos de enrutamiento sin clases (*classless*), como RIPv2, OSPF, EIGRP, IS-IS y BGP.

## 4.5 IPv6 ESTRUCTURA DE 128 BITS

El crecimiento exponencial de los dispositivos conectados a Internet, junto con el agotamiento del espacio de direcciones IPv4, hizo necesario el desarrollo de un nuevo esquema de direccionamiento con una capacidad mucho mayor.

La aplicación práctica de IPv6 en una topología de red se muestra en el **Anexo II.**

El Protocolo de Internet versión 6 (IPv6), estandarizado en el RFC 8200 (que sustituye al RFC 2460), proporciona un espacio de direcciones de 128 bits, equivalente a aproximadamente 3.4 × 10³⁸. Ese espacio alcanza para asignar múltiples direcciones a cada dispositivo sin riesgo de agotamiento previsible.

IPv6 se diseñó para sustituir a IPv4. Un esquema habitual de planificación IPv6 (por ejemplo, un sitio con prefijo /48 y subredes /64) puede representarse mediante tres partes.

Esta división es un modelo frecuente, no una estructura obligatoria para todas las asignaciones IPv6; la Figura 4.7 la muestra con una dirección de ejemplo. IPv6 ofrece un espacio de direcciones mucho mayor, una cabecera base simplificada y mecanismos de autoconfiguración como SLAAC. También contempla el uso de IPsec, pero su utilización no es obligatoria ni exclusiva de IPv6.

<div class="diagram" id="figura-4-07" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g417" viewBox="0 0 1200 238.11" role="img" aria-labelledby="g417-title">
<title id="g417-title">Estructura de una dirección IPv6 de 128 bits</title>
<defs><marker id="g417m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g417n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g417-c" transform="translate(21.735 21.735) scale(1.157)"><rect x="0" y="0" width="375" height="62" rx="5.188" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.162"/>
<text x="187.5" y="28" font-size="10.372pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Prefijo global</text>
<text x="187.5" y="49" font-size="10.372pt" fill="#1e3a8a" text-anchor="middle" font-weight="400">48 bits</text>
<rect x="0" y="96" width="375" height="46" rx="5.188" fill="#bfcff2" stroke="#003ecc" stroke-width="1.297"/>
<text x="187.5" y="125" font-size="12.1pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">2001:0db8:85a3</text>
<rect x="375" y="0" width="125" height="62" rx="5.188" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.162"/>
<text x="437.5" y="28" font-size="10.372pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Subnet ID</text>
<text x="437.5" y="49" font-size="10.372pt" fill="#7c2d12" text-anchor="middle" font-weight="400">16 bits</text>
<rect x="375" y="96" width="125" height="46" rx="5.188" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.297"/>
<text x="437.5" y="125" font-size="12.1pt" font-weight="700" fill="#7c2d12" text-anchor="middle">0000</text>
<rect x="500" y="0" width="500" height="62" rx="5.188" fill="#e6f4ee" stroke="#009254" stroke-width="2.162"/>
<text x="750" y="28" font-size="10.372pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Identificador de interfaz (IID)</text>
<text x="750" y="49" font-size="10.372pt" fill="#065f46" text-anchor="middle" font-weight="400">64 bits</text>
<rect x="500" y="96" width="500" height="46" rx="5.188" fill="#bfe4d4" stroke="#009254" stroke-width="1.297"/>
<text x="750" y="125" font-size="12.1pt" font-weight="700" fill="#065f46" text-anchor="middle">0000:8a2e:0370:7334</text>
</g><text x="600" y="220.27" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 4.7. Estructura de una dirección IPv6 de 128 bits.</text></svg>
</div>

### Prefijo de enrutamiento global

Es la parte del prefijo asignada a la organización dentro del esquema de direccionamiento. La longitud asignada depende del proveedor, la política de asignación y el diseño de la red; /48 y /56 son tamaños comunes, no obligatorios.

### Identificador de subred

En el ejemplo de un prefijo /48 subdividido en subredes /64, quedan 16 bits para el identificador de subred, lo que permite hasta 65 536 subredes. Esa cantidad depende de las longitudes de prefijo elegidas.

### Identificador de interfaz

En este esquema /64, los últimos 64 bits corresponden al identificador de interfaz. Otras longitudes de prefijo pueden utilizarse según el propósito y las especificaciones aplicables.

Puede derivarse de la dirección MAC mediante el mecanismo EUI-64, generarse de forma estable y opaca conforme al RFC 7217, o generarse de forma temporal y aleatoria conforme al RFC 8981 (que sustituye al RFC 4941).

Ejemplo de una dirección IPv6 completa: 2001:0db8:85a3:0000:0000:8a2e:0370:7334.

IPv6 no es solo una versión de IPv4 con direcciones más largas: modifica el formato de la cabecera, el tratamiento de la fragmentación, el uso de *multicast* y los mecanismos de autoconfiguración.

La coexistencia con IPv4 requiere mecanismos específicos, como *dual stack*, túneles o traducción; ambos protocolos no son directamente interoperables.

### Características principales de IPv6

- Direcciones de 128 bits: en las subredes LAN convencionales suele utilizarse un prefijo de 64 bits y un identificador de interfaz de 64 bits. Esta división es habitual, pero no debe generalizarse a todos los tipos de prefijo o escenarios IPv6.
- Eliminación de la escasez de direcciones: permite una asignación amplia y jerárquica.
- Mayor eficiencia de enrutamiento: mediante la agregación de prefijos y tablas de enrutamiento jerárquicas.
- No requiere NAT para resolver la escasez de direcciones: al disponer de suficientes direcciones públicas, se restablece el modelo de comunicación extremo a extremo. Esto no elimina la necesidad de un *firewall* con estado.
- Encabezado simplificado: campos como el *checksum* y diversas opciones fueron eliminados o trasladados a encabezados de extensión.

## 4.6 NOTACIÓN HEXADECIMAL IPv6

Las direcciones IPv6 tienen 128 bits; en binario serían demasiado extensas y en decimal, poco prácticas. La notación hexadecimal resuelve ese inconveniente y resulta más fácil de leer y manipular.

El formato de las direcciones IPv6 divide los 128 bits en ocho bloques de 16 bits cada uno, expresados en base 16 (hexadecimal) y separados por dos puntos (:) (Figura 4.8).

### Reglas básicas de la notación

- Cada bloque de 16 bits se representa mediante cuatro dígitos hexadecimales.
- Los dígitos hexadecimales utilizan los símbolos 0–9 y a–f. Aunque se aceptan letras mayúsculas y minúsculas, el RFC 5952 recomienda el uso de minúsculas.
- Ejemplo: fe80:0000:0000:0000:0202:b3ff:fe1e:8329.

Para simplificar la escritura, el estándar permite dos mecanismos de compresión:

Regla 1. Eliminar los ceros a la izquierda de cada bloque.

Ejemplos: 0000 → 0, 0202 → 202.

Regla 2. Comprimir una secuencia continua de bloques con valor cero, sustituyéndola por ::.

Esta operación solo puede aplicarse una vez por dirección para evitar ambigüedades. Además, el RFC 5952 recomienda comprimir la secuencia más larga de ceros y no utilizar :: para sustituir un único bloque de 16 bits en cero.

Aplicando ambas reglas al ejemplo anterior: fe80::202:b3ff:fe1e:8329.

<div class="diagram" id="figura-4-08" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g418" viewBox="0 0 1200 442.443" role="img" aria-labelledby="g418-title">
<title id="g418-title">Reglas de compresión de una dirección IPv6</title>
<defs><marker id="g418m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g418n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g418-c" transform="translate(21.83 21.83) scale(1.22)"><rect x="0" y="0" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="54" y="27" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">fe80</text>
<rect x="120" y="0" width="108" height="42" rx="4.919" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.05"/>
<text x="174" y="27" font-size="11.476pt" font-weight="700" fill="#7c2d12" text-anchor="middle">0000</text>
<rect x="240" y="0" width="108" height="42" rx="4.919" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.05"/>
<text x="294" y="27" font-size="11.476pt" font-weight="700" fill="#7c2d12" text-anchor="middle">0000</text>
<rect x="360" y="0" width="108" height="42" rx="4.919" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.05"/>
<text x="414" y="27" font-size="11.476pt" font-weight="700" fill="#7c2d12" text-anchor="middle">0000</text>
<rect x="480" y="0" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="534" y="27" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">0202</text>
<rect x="600" y="0" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="654" y="27" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">b3ff</text>
<rect x="720" y="0" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="774" y="27" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">fe1e</text>
<rect x="840" y="0" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="894" y="27" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">8329</text>
<rect x="0" y="130" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="54" y="157" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">fe80</text>
<rect x="120" y="130" width="108" height="42" rx="4.919" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.05"/>
<text x="174" y="157" font-size="11.476pt" font-weight="700" fill="#7c2d12" text-anchor="middle">0</text>
<rect x="240" y="130" width="108" height="42" rx="4.919" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.05"/>
<text x="294" y="157" font-size="11.476pt" font-weight="700" fill="#7c2d12" text-anchor="middle">0</text>
<rect x="360" y="130" width="108" height="42" rx="4.919" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.05"/>
<text x="414" y="157" font-size="11.476pt" font-weight="700" fill="#7c2d12" text-anchor="middle">0</text>
<rect x="480" y="130" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="534" y="157" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">202</text>
<rect x="600" y="130" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="654" y="157" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">b3ff</text>
<rect x="720" y="130" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="774" y="157" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">fe1e</text>
<rect x="840" y="130" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="894" y="157" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">8329</text>
<rect x="0" y="260" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="54" y="287" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">fe80</text>
<rect x="120" y="260" width="348" height="42" rx="4.919" fill="#fcebe6" stroke="#dd3a00" stroke-width="2.05"/>
<text x="294" y="287" font-size="11.476pt" font-weight="700" fill="#7c2d12" text-anchor="middle">::</text>
<rect x="480" y="260" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="534" y="287" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">202</text>
<rect x="600" y="260" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="654" y="287" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">b3ff</text>
<rect x="720" y="260" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="774" y="287" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">fe1e</text>
<rect x="840" y="260" width="108" height="42" rx="4.919" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.05"/>
<text x="894" y="287" font-size="11.476pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">8329</text>
<line x1="474" y1="46" x2="474" y2="126" stroke="#364e6c" stroke-width="2.05" marker-end="url(#g418m)"/>
<text x="492" y="90" font-size="9.836pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Regla 1 · eliminar los ceros a la izquierda</text>
<line x1="474" y1="176" x2="474" y2="256" stroke="#364e6c" stroke-width="2.05" marker-end="url(#g418m)"/>
<text x="492" y="220" font-size="9.836pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Regla 2 · comprimir ceros consecutivos con ::</text>
</g><text x="600" y="424.603" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 4.8. Reglas de compresión de una dirección IPv6.</text></svg>
</div>

Ejemplos adicionales:

- Dirección de *loopback*: 0:0:0:0:0:0:0:1 → ::1.
- Dirección no especificada: 0:0:0:0:0:0:0:0 → ::.
- Prefijo de red: 2001:db8:1234:5678::/64.

## 4.7 AUTOCONFIGURACIÓN IPv6

IPv6 permite configurar direcciones automáticamente mediante SLAAC, sin un servidor DHCPv6 que asigne la dirección. El *host* sigue necesitando recibir anuncios de *router* y realizar las comprobaciones pertinentes; según la red, DHCPv6 puede complementar la configuración.

Esto simplifica el despliegue y la administración, sobre todo en redes con movilidad o con dispositivos que requieren poca intervención.

Mediante este mecanismo, un dispositivo puede generar automáticamente su propia dirección IPv6 dentro de una red, sin depender de un servidor central. Existen dos métodos principales:

### Autoconfiguración sin estado (SLAAC)

Definida en el RFC 4862, SLAAC permite que un *host* configure una dirección IPv6 a partir de la información de prefijo anunciada por un *router* mediante mensajes ICMPv6 *Router Advertisement* y un identificador de interfaz (IID) generado según el método compatible con el sistema.

En las subredes convencionales con prefijo /64, el IID ocupa 64 bits.

- El *host* envía un mensaje ICMPv6 de tipo *Router Solicitation* (RS) para descubrir los *routers* disponibles en la red local.
- El *router* responde con un mensaje *Router Advertisement* (RA) que incluye, entre otros parámetros, el prefijo de red, normalmente de longitud /64.
- El *host* genera un identificador de interfaz (IID) de 64 bits mediante alguno de los siguientes métodos:
  - Basado en EUI-64: se obtiene a partir de la dirección MAC de 48 bits, insertando los octetos FFFE y modificando el bit universal/local.
  - Opaco o aleatorio: de forma estable y opaca conforme al RFC 7217, o de forma temporal y aleatoria conforme al RFC 8981 (que sustituye al RFC 4941, *Privacy Extensions for SLAAC*), con el propósito de mejorar la privacidad.
- El *host* combina el prefijo recibido (64 bits) con el IID generado (64 bits) para formar una dirección IPv6 completa y válida.

La Figura 4.9 muestra que la dirección formada no entra en uso de inmediato: antes de asignarla, el *host* verifica que ningún otro dispositivo la utilice en el mismo enlace.

Antes de utilizar la dirección, el *host* ejecuta el proceso de Detección de Direcciones Duplicadas (DAD, *Duplicate Address Detection*, RFC 4862), enviando un mensaje *Neighbor Solicitation* para verificar que la dirección generada no esté siendo utilizada por otro dispositivo del mismo enlace.

<div class="diagram" id="figura-4-09" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g419" viewBox="0 0 1200 402.554" role="img" aria-labelledby="g419-title">
<title id="g419-title">Autoconfiguración SLAAC con verificación de duplicados</title>
<defs><marker id="g419m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g419n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g419-c" transform="translate(1.548 21.496) scale(0.997)"><rect x="50" y="0" width="200" height="40" rx="6.016" fill="#e6ecfa" stroke="#003ecc" stroke-width="2.005"/>
<text x="150" y="26" font-size="12.036pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Host</text>
<line x1="150" y1="40" x2="150" y2="330" stroke="#003ecc" stroke-width="1.504" stroke-dasharray="6.016 4.01"/>
<rect x="500" y="0" width="200" height="40" rx="6.016" fill="#e6f4ee" stroke="#009254" stroke-width="2.005"/>
<text x="600" y="26" font-size="12.036pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router</text>
<line x1="600" y1="40" x2="600" y2="330" stroke="#009254" stroke-width="1.504" stroke-dasharray="6.016 4.01"/>
<rect x="920" y="0" width="260" height="40" rx="6.016" fill="#ebedf0" stroke="#364e6c" stroke-width="2.005"/>
<text x="1050" y="26" font-size="12.036pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Otros nodos del enlace</text>
<line x1="1050" y1="40" x2="1050" y2="330" stroke="#364e6c" stroke-width="1.504" stroke-dasharray="6.016 4.01"/>
<line x1="150" y1="90" x2="596" y2="90" stroke="#364e6c" stroke-width="2.005" marker-end="url(#g419m)"/>
<text x="373" y="78" font-size="10.532pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">RS · Router Solicitation</text>
<line x1="600" y1="150" x2="154" y2="150" stroke="#364e6c" stroke-width="2.005" marker-end="url(#g419m)"/>
<text x="377" y="138" font-size="10.532pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">RA · prefijo /64</text>
<rect x="20" y="185" width="260" height="56" rx="6.016" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2.005"/>
<text x="150" y="208" font-size="10.532pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Genera un IID de 64 bits</text>
<text x="150" y="228" font-size="10.532pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">prefijo + IID = dirección</text>
<line x1="150" y1="295" x2="1046" y2="295" stroke="#364e6c" stroke-width="2.005" marker-end="url(#g419m)"/>
<text x="598" y="283" font-size="10.532pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">NS · DAD (¿alguien usa esta dirección?)</text>
</g><text x="600" y="384.714" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 4.9. Autoconfiguración SLAAC con verificación de duplicados.</text></svg>
</div>

### DHCPv6

DHCPv6 (RFC 8415) funciona de manera similar a DHCP para IPv4, aunque incorpora mecanismos específicos para IPv6. Un servidor DHCPv6 puede asignar direcciones IPv6 o proporcionar solo información adicional de configuración, como servidores DNS. DHCPv6 puede operar en dos modalidades (Tabla 4.3), que se describen a continuación:

#### Stateful

El servidor asigna direcciones IPv6 y mantiene información sobre las concesiones. La configuración concreta depende de las opciones habilitadas y de la política de la red.

#### Stateless

Complementa a SLAAC proporcionando información adicional, como servidores DNS o NTP, sin asignar la dirección IPv6. El *router* indica al *host* qué modalidad utilizar mediante los indicadores M (*Managed*) y O (*Other*) del mensaje *Router Advertisement*. DHCPv6 no distribuye la puerta de enlace predeterminada, que el *host* obtiene siempre de los mensajes RA. La Tabla 4.3 compara los métodos de autoconfiguración.

<div class="diagram tabla-svg" id="tabla-4-3" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 325" role="img" aria-labelledby="t16-title"><title id="t16-title">Tabla 4.3. Métodos de autoconfiguración IPv6.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="63.5"/>
<text class="tb-ht" x="63.4" y="31.4" dominant-baseline="central" text-anchor="middle">Método</text>
<text class="tb-ht" x="337.5" y="31.4" dominant-baseline="central" text-anchor="middle">Asignación de la dirección IPv6</text>
<text class="tb-ht" x="720.2" y="31.4" dominant-baseline="central" text-anchor="middle">Información adicional</text>
<text class="tb-ht" x="1046.2" y="20.0" dominant-baseline="central" text-anchor="middle">Indicadores del Router</text>
<text class="tb-ht" x="1046.2" y="42.8" dominant-baseline="central" text-anchor="middle">Advertisement</text>
<rect class="tb-te" x="0" y="63.5" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="106.2" dominant-baseline="central">SLAAC</text>
<text class="tb-tx" x="138.9" y="83.5" dominant-baseline="central">El host genera su dirección utilizando el prefijo</text>
<text class="tb-tx" x="138.9" y="106.2" dominant-baseline="central">anunciado por el router y un identificador de</text>
<text class="tb-tx" x="138.9" y="129.0" dominant-baseline="central">interfaz (IID).</text>
<text class="tb-tx" x="560.0" y="94.9" dominant-baseline="central">No proporciona por sí solo todos los</text>
<text class="tb-tx" x="560.0" y="117.6" dominant-baseline="central">parámetros adicionales, como DNS.</text>
<text class="tb-tx" x="904.4" y="94.9" dominant-baseline="central">M=0, O=0 en el escenario habitual</text>
<text class="tb-tx" x="904.4" y="117.6" dominant-baseline="central">de SLAAC sin DHCPv6 adicional.</text>
<rect class="tb-to" x="0" y="149.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="169.8" dominant-baseline="central">DHCPv6</text>
<text class="tb-tx tb-b" x="12.0" y="192.5" dominant-baseline="central">stateful</text>
<text class="tb-tx" x="138.9" y="169.8" dominant-baseline="central">El servidor DHCPv6 asigna la dirección y</text>
<text class="tb-tx" x="138.9" y="192.5" dominant-baseline="central">mantiene información sobre la concesión.</text>
<text class="tb-tx" x="560.0" y="169.8" dominant-baseline="central">Puede proporcionar DNS, NTP y otros</text>
<text class="tb-tx" x="560.0" y="192.5" dominant-baseline="central">parámetros según la implementación.</text>
<text class="tb-tx" x="904.4" y="181.1" dominant-baseline="central">M=1.</text>
<rect class="tb-te" x="0" y="213.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="233.2" dominant-baseline="central">DHCPv6</text>
<text class="tb-tx tb-b" x="12.0" y="256.0" dominant-baseline="central">stateless</text>
<text class="tb-tx" x="138.9" y="244.6" dominant-baseline="central">La dirección se obtiene mediante SLAAC.</text>
<text class="tb-tx" x="560.0" y="233.2" dominant-baseline="central">DHCPv6 proporciona información</text>
<text class="tb-tx" x="560.0" y="256.0" dominant-baseline="central">adicional, como servidores DNS.</text>
<text class="tb-tx" x="904.4" y="244.6" dominant-baseline="central">M=0, O=1.</text>
<text class="tb-cap" x="600.0" y="302.8" text-anchor="middle">Tabla 4.3. Métodos de autoconfiguración IPv6.</text></svg>
</div>

La autoconfiguración reduce la complejidad administrativa y es uno de los pilares del despliegue masivo de IPv6.

## 4.8 RELACIÓN REDES-SUBREDES-HOST

El direccionamiento IP se basa en una estructura jerárquica que organiza los dispositivos en distintos niveles lógicos.

Esto es clave para diseñar, implementar y mantener redes eficientes, ya que permite dividir una dirección IP en segmentos que identifican la red principal, sus subdivisiones y los dispositivos individuales dentro de cada una de ellas.

Esta organización refleja la estructura administrativa y funcional de la red; los tres niveles se definen a continuación y se representan en la Figura 4.10.

### Red principal

Corresponde al bloque de direcciones más amplio asignado a una organización o a un dominio de enrutamiento.

Por ejemplo: 10.0.0.0/8.

### Subred

Es una subdivisión lógica de la red principal, creada mediante *subnetting* o VLSM; las subredes agrupan dispositivos con requisitos comunes de acceso, administración o seguridad. Ejemplos: 10.1.0.0/16 y 10.2.0.0/16.

### Host

Es un dispositivo individual dentro de una subred. Cada *host* posee una dirección única dentro del rango asignado a dicha subred.

Ejemplo: 10.1.0.25/16.

Un prefijo más largo implica más bits destinados a la identificación de subredes y menos bits disponibles para *hosts*; por el contrario, un prefijo más corto permite una mayor cantidad de *hosts*, pero un menor número de subredes.

<div class="diagram" id="figura-4-10" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g420" viewBox="204.0 0 792.0 474.163" role="img" aria-labelledby="g420-title">
<title id="g420-title">Jerarquía red, subred y host</title>
<defs><marker id="g420m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g420n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g420-c" transform="translate(-150 21.875) scale(1.25)"><rect x="480" y="0" width="240" height="60" rx="4.8" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<text x="600" y="26" font-size="11.2pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Red principal</text>
<text x="600" y="47" font-size="11.2pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">10.0.0.0/8</text>
<rect x="300" y="130" width="240" height="60" rx="4.8" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<text x="420" y="156" font-size="11.2pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Subred</text>
<text x="420" y="177" font-size="11.2pt" font-weight="700" fill="#065f46" text-anchor="middle">10.1.0.0/16</text>
<polyline points="600,60 600,95 420,95 420,130" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g420m)"/>
<rect x="660" y="130" width="240" height="60" rx="4.8" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<text x="780" y="156" font-size="11.2pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Subred</text>
<text x="780" y="177" font-size="11.2pt" font-weight="700" fill="#065f46" text-anchor="middle">10.2.0.0/16</text>
<polyline points="600,60 600,95 780,95 780,130" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g420m)"/>
<rect x="300" y="260" width="240" height="60" rx="4.8" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<text x="420" y="286" font-size="11.2pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Host</text>
<text x="420" y="307" font-size="11.2pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">10.1.0.25/16</text>
<line x1="420" y1="190" x2="420" y2="256" stroke="#364e6c" stroke-width="2" marker-end="url(#g420m)"/>
<rect x="660" y="260" width="240" height="60" rx="4.8" fill="#ebedf0" stroke="#364e6c" stroke-width="2" stroke-dasharray="4.8 3.2"/>
<text x="780" y="296" font-size="11.2pt" fill="#1a1a1a" text-anchor="middle" font-weight="400">Otros hosts</text>
<line x1="780" y1="190" x2="780" y2="256" stroke="#364e6c" stroke-width="2" marker-end="url(#g420m)"/>
</g><text x="600.0" y="456.323" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 4.10. Jerarquía red, subred y host.</text></svg>
</div>

### Fórmulas clave

- Número de subredes posibles: 2ⁿ, donde n representa la cantidad de bits prestados de la porción de host.
- Número de hosts por subred: 2ᵐ − 2, donde m corresponde a los bits restantes para host.

Se restan dos direcciones, ya que una identifica la red y la otra corresponde al broadcast. Como excepción, en enlaces punto a punto IPv4 pueden utilizarse prefijos /31, con dos direcciones utilizables y sin dirección de red ni de broadcast (RFC 3021).

IPv6 no utiliza una dirección de broadcast, por lo que no se aplica la regla de restar la dirección de red y la de broadcast usada en las subredes IPv4 convencionales. No existe una fórmula universal de *hosts* asignables equivalente a 2ᵐ − 2 para todos los prefijos IPv6: las direcciones reservadas, *anycast* y las reglas de asignación dependen del tipo de subred y de su uso.

En particular, la dirección Subnet-Router *Anycast* se define en RFC 4291; esto no justifica restar automáticamente una dirección en todos los cálculos de capacidad IPv6.

### Beneficios de la organización jerárquica

- Escalabilidad: el enrutamiento permite resumir rutas a nivel de red o subred, reduciendo el tamaño de las tablas de enrutamiento.
- Mejor administración del direccionamiento: facilita la asignación de bloques de direcciones a departamentos, sedes o funciones específicas.
- Control eficiente del tráfico: el tráfico entre subredes puede filtrarse o priorizarse mediante ACL y mecanismos de QoS.
- Optimización del enrutamiento: los *routers* solo necesitan conocer rutas hacia redes y subredes, en lugar de mantener rutas individuales para cada *host*.

Cada bit que se destina a subredes se resta a los *hosts*, y a la inversa; por eso el esquema de direccionamiento debe dimensionarse según el crecimiento previsto de cada segmento y no solo según su tamaño actual. Con las direcciones ya organizadas, el siguiente tema examina cómo se conmuta el tráfico dentro de cada red.
