<p class="tema-num">TEMA 08</p>

# SEGURIDAD EN REDES

La seguridad en redes es un área transversal: protege la confidencialidad, la integridad y la disponibilidad de la información que viaja por la red, y también de los propios dispositivos y servicios.

Los servicios del Tema 7 y el enrutamiento del Tema 6 amplían la superficie de exposición de una red. Este tema introduce los principios y controles que permiten limitarla.

Las redes modernas se enfrentan a amenazas internas y externas, que van desde ataques pasivos (escucha) hasta activos (modificación, denegación de servicio).

Las amenazas, entendidas como circunstancias o acciones con potencial para explotar una vulnerabilidad, se definen y clasifican en el apartado 8.7.

Este tema desarrolla los principios y mecanismos que protegen una red. El recorrido comienza con la tríada CIA y los *firewalls*, continúa con la zona desmilitarizada, las listas de control de acceso y la criptografía, y aborda posteriormente IPsec, las amenazas de red y la seguridad en capas. El mapa del tema se presenta en la Figura 8.1.

<div class="diagram" id="figura-8-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g801" viewBox="0 0 1200 412" role="img" aria-labelledby="g801-title">
<title id="g801-title">Mapa del Tema 8</title>
<defs></defs>
<g id="g801-c" transform="translate(20 20)"><rect x="0" y="0" width="272" height="158" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="0" y1="51" x2="272" y2="51" stroke="#364e6c" stroke-width="1.5"/>
<text x="136" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">8.1 Principios de seguridad</text>
<text x="136" y="40" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">(CIA)</text>
<g transform="translate(136 89.52) scale(0.7)" data-lib="shield"><path d="M 0 -26 L 22 -17 L 22 2 C 22 16 0 26 0 26 C 0 26 -22 16 -22 2 L -22 -17 Z" fill="#364e6c" stroke="#364e6c" stroke-width="2"></path><path d="M-10 0 L-3 8 L11 -9" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="136" y="132.73" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Confidencialidad, integridad y</text>
<text x="136" y="151.73" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">disponibilidad</text>
<rect x="296" y="0" width="272" height="158" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="296" y1="34" x2="568" y2="34" stroke="#d40000" stroke-width="1.5"/>
<text x="432" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">8.2 Firewalls</text>
<g transform="translate(432 78.64) scale(0.7)" data-lib="firewall"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><path d="M-36 -9.5H36M-36 9.5H36M-12 -28V-9.5M12 -9.5V9.5M-12 9.5V28" stroke="#d40000" stroke-width="2.5" fill="none"/><rect x="-36" y="-28" width="72" height="18.5" rx="3" fill="#f4bfbf" stroke="#d40000" stroke-width="3"/><path d="M-36 -9.5H36M-12 -28V-9.5M12 -9.5V9.5M-12 9.5V28" stroke="#d40000" stroke-width="2.5" fill="none"/></g>
<text x="432" y="139" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Filtrado de tráfico</text>
<rect x="592" y="0" width="272" height="158" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="592" y1="34" x2="864" y2="34" stroke="#dd3a00" stroke-width="1.5"/>
<text x="728" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">8.3 DMZ</text>
<g transform="translate(728 78.64) scale(0.7)" data-lib="funnel"><path d="M-32 -26 H32 L8 4 V28 L-8 20 V4 Z" fill="#fcebe6" stroke="#dd3a00" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="728" y="139" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Zona intermedia de servicios</text>
<rect x="888" y="0" width="272" height="158" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="888" y1="34" x2="1160" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="1024" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">8.4 ACL</text>
<g transform="translate(1024 78.64) scale(0.7)" data-lib="list"><rect x="-28" y="-32" width="56" height="64" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><path d="M-8 -16h24" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="-16" r="3.5" fill="#009254"></circle><path d="M-8 -2h24" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="-2" r="3.5" fill="#009254"></circle><path d="M-8 12h24" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="12" r="3.5" fill="#009254"></circle></g>
<text x="1024" y="139" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Listas de control de acceso</text>
<rect x="0" y="182" width="272" height="158" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="216" x2="272" y2="216" stroke="#003ecc" stroke-width="1.5"/>
<text x="136" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">8.5 Criptografía (TLS, SSH)</text>
<g transform="translate(136 260.64) scale(0.7)" data-lib="key"><g stroke="#003ecc" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="-22" cy="0" r="12" fill="#bfcff2"></circle><path d="M-10 0 H34 M24 0 V12 M14 0 V9"></path></g></g>
<text x="136" y="321" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Cifrado de comunicaciones</text>
<rect x="296" y="182" width="272" height="158" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="296" y1="216" x2="568" y2="216" stroke="#7c3aed" stroke-width="1.5"/>
<text x="432" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">8.6 IPsec</text>
<g transform="translate(432 260.64) scale(0.7)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#7c3aed" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#7c3aed"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<text x="432" y="321" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Seguridad en la capa de red</text>
<rect x="592" y="182" width="272" height="158" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="592" y1="216" x2="864" y2="216" stroke="#d40000" stroke-width="1.5"/>
<text x="728" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">8.7 Amenazas de red</text>
<g transform="translate(728 260.64) scale(0.7)" data-lib="bolt"><path d="M6 -32 L-20 4 H-2 L-8 32 L22 -6 H4 Z" fill="#fbe6e6" stroke="#d40000" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="728" y="321" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Ataques frecuentes</text>
<rect x="888" y="182" width="272" height="158" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="888" y1="216" x2="1160" y2="216" stroke="#364e6c" stroke-width="1.5"/>
<text x="1024" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">8.8 Defensa en profundidad</text>
<g transform="translate(1024 260.64) scale(0.7)" data-lib="layers"><path d="M0 2 L34 14 L0 26 L-34 14 Z" fill="#cdd3da" stroke="#364e6c" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -12 L34 0 L0 12 L-34 0 Z" fill="#ebedf0" stroke="#364e6c" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -26 L34 -14 L0 -2 L-34 -14 Z" fill="#ffffff" stroke="#364e6c" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="1024" y="321" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Controles en múltiples capas</text></g><text x="600" y="394" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 8.1. Mapa del Tema 8.</text></svg>
</div>

## 8.1 PRINCIPIOS DE SEGURIDAD (TRÍADA CIA)

La tríada CIA consta de tres objetivos fundamentales de la seguridad de la información, que deben ser equilibrados según los requisitos de cada sistema o red: confidencialidad (acceso solo a autorizados), integridad (sin modificaciones no autorizadas) y disponibilidad (acceso confiable cuando sea necesario). La Figura 8.2 representa los tres objetivos y los mecanismos de apoyo, y la Tabla 8.1 los resume.

<div class="diagram" id="figura-8-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g802" viewBox="0 0 1200 385.131" role="img" aria-labelledby="g802-title">
<title id="g802-title">Tríada CIA y mecanismos de apoyo</title>
<defs><marker id="g802m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g802n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g802-c" transform="translate(-8.777 -8.770) scale(1.0146)"><g transform="translate(0 0)"><rect x="20" y="20" width="360" height="210" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect><line x1="20" y1="54" x2="380" y2="54" stroke="#d40000" stroke-width="1.5"></line>
<text x="200" y="43" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Confidencialidad</text>
<g transform="translate(200 114) scale(0.95)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#d40000" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#d40000"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<text x="200" y="176" font-size="10.349pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Acceso solo a autorizados</text>
<rect x="34" y="194" width="332" height="26" rx="4" fill="#f4bfbf" stroke="#d40000" stroke-width="1.6"></rect>
<text x="200" y="211.9" font-size="10.349pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Cifrado · ACL · firewalls</text>
<rect x="420" y="20" width="360" height="210" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect><line x1="420" y1="54" x2="780" y2="54" stroke="#003ecc" stroke-width="1.5"></line>
<text x="600" y="43" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Integridad</text>
<g transform="translate(600 114) scale(0.95)" data-lib="doc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><path d="M-22 -32 H8 L24 -16 V32 H-22 Z"></path><path d="M8 -32 V-16 H24" fill="#e6ecfa"></path><path d="M-12 -4h24M-12 8h24M-12 20h14" stroke-width="3" fill="none" stroke-linecap="round"></path></g></g>
<text x="600" y="176" font-size="10.349pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Sin modificaciones no autorizadas</text>
<rect x="434" y="194" width="332" height="26" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="600" y="211.9" font-size="10.349pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Hash · HMAC · firmas</text>
<rect x="820" y="20" width="360" height="210" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect><line x1="820" y1="54" x2="1180" y2="54" stroke="#009254" stroke-width="1.5"></line>
<text x="1000" y="43" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Disponibilidad</text>
<g transform="translate(1000 114) scale(0.95)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="-27.5" r="4" fill="#009254"></circle><path d="M-34 -27.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="1.5" r="4" fill="#009254"></circle><path d="M-34 1.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="30.5" r="4" fill="#009254"></circle><path d="M-34 30.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path></g>
<text x="1000" y="176" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="middle">Acceso confiable cuando se necesita</text>
<rect x="834" y="194" width="332" height="26" rx="4" fill="#bfe4d4" stroke="#009254" stroke-width="1.6"></rect>
<text x="1000" y="211.9" font-size="10.349pt" font-weight="700" fill="#065f46" text-anchor="middle">Redundancia · balanceo · respaldo</text>
<rect x="20" y="250" width="570" height="86" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(76 293) scale(0.75)" data-lib="user"><g stroke="#7c3aed" stroke-width="3" fill="#ffffff"><circle cx="0" cy="-18" r="14" fill="#f2ebfd"></circle><path d="M-30 30 C-30 4 -18 0 0 0 C18 0 30 4 30 30 Z" fill="#f2ebfd"></path></g></g>
<text x="130" y="284" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Autenticación</text>
<text x="130" y="308" font-size="10.349pt" font-weight="400" fill="#5b21b6" text-anchor="start">Verificar la identidad de usuarios y dispositivos</text>
<rect x="610" y="250" width="570" height="86" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<g transform="translate(666 293) scale(0.75)" data-lib="stamp"><circle cx="0" cy="-10" r="18" fill="#fcebe6" stroke="#dd3a00" stroke-width="3"></circle><path d="M-8 -10 L-2 -4 L9 -17" fill="none" stroke="#dd3a00" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M-30 18 H30 M-22 28 H22" stroke="#dd3a00" stroke-width="4" stroke-linecap="round"></path></g>
<text x="720" y="284" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="start">No repudio</text>
<text x="720" y="308" font-size="10.349pt" font-weight="400" fill="#7c2d12" text-anchor="start">Demostrar que una acción ocurrió: firmas y logs</text>
</g></g><text x="600" y="368.769" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 8.2. Tríada CIA y mecanismos de apoyo.</text></svg>
</div>

### Confidencialidad

Protege la información contra accesos no autorizados y se logra mediante cifrado (TLS, IPsec), control de acceso (ACL, *firewalls*) y autenticación.

En redes, la confidencialidad busca que un atacante que intercepta el tráfico no pueda leer los datos (por ejemplo, contraseñas en texto claro).

### Integridad

La integridad busca detectar modificaciones no autorizadas de los datos durante la transmisión o el almacenamiento.

Puede apoyarse en funciones *hash* criptográficas, como SHA-256, SHA-3 y BLAKE2. Sin embargo, un *hash* sin clave no autentica por sí solo el origen de los datos: para ello se emplean mecanismos como HMAC o firmas digitales. Los *checksums* y las sumas de comprobación ayudan a detectar errores accidentales, pero no ofrecen protección criptográfica frente a una modificación deliberada.

MD5 presenta colisiones prácticas conocidas y no debe usarse en aplicaciones que requieran seguridad criptográfica; SHA-1 también debe evitarse para firmas digitales.

### Disponibilidad

La disponibilidad procura que los recursos (red, servidores y datos) estén accesibles para los usuarios autorizados cuando los necesiten.

Puede mejorarse mediante redundancia de rutas, equipos y fuentes de alimentación; balanceo de carga; sistemas de respaldo; mantenimiento; y medidas de mitigación frente a ataques de denegación de servicio (DoS).

La indisponibilidad también puede deberse a errores humanos, fallos de diseño, dependencias externas o mantenimiento no planificado.

La Tabla 8.1 resume los principios de la seguridad de la información junto con los mecanismos que los materializan, lo que permite comprobar que, en un diseño concreto, cada principio tenga al menos un control asociado.

<div class="diagram tabla-svg" id="tabla-8-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 338" role="img" aria-labelledby="t34-title"><title id="t34-title">Tabla 8.1. Principios de la seguridad de la información.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="79.4" y="20.0" dominant-baseline="central" text-anchor="middle">Principio</text>
<text class="tb-ht" x="473.4" y="20.0" dominant-baseline="central" text-anchor="middle">Descripción</text>
<text class="tb-ht" x="994.0" y="20.0" dominant-baseline="central" text-anchor="middle">Mecanismos o ejemplos</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Confidencialidad</text>
<text class="tb-tx" x="170.7" y="60.8" dominant-baseline="central">Garantiza que la información solo sea accesible para entidades autorizadas.</text>
<text class="tb-tx" x="800.0" y="60.8" dominant-baseline="central">Cifrado, control de acceso y gestión de claves.</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">Integridad</text>
<text class="tb-tx" x="170.7" y="101.5" dominant-baseline="central">Permite detectar modificaciones no autorizadas de la información.</text>
<text class="tb-tx" x="800.0" y="101.5" dominant-baseline="central">Hashes criptográficos, HMAC y firmas digitales.</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="153.6" dominant-baseline="central">Disponibilidad</text>
<text class="tb-tx" x="170.7" y="153.6" dominant-baseline="central">Los recursos y servicios permanecen accesibles cuando se necesitan.</text>
<text class="tb-tx" x="800.0" y="142.2" dominant-baseline="central">Redundancia, balanceo de carga, respaldos y</text>
<text class="tb-tx" x="800.0" y="165.0" dominant-baseline="central">protección contra DoS.</text>
<rect class="tb-to" x="0" y="185.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="205.8" dominant-baseline="central">Autenticación</text>
<text class="tb-tx" x="170.7" y="205.8" dominant-baseline="central">Verifica la identidad de usuarios, dispositivos o servicios.</text>
<text class="tb-tx" x="800.0" y="205.8" dominant-baseline="central">Credenciales, certificados digitales y MFA.</text>
<rect class="tb-te" x="0" y="226.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="257.9" dominant-baseline="central">No repudio</text>
<text class="tb-tx" x="170.7" y="246.5" dominant-baseline="central">Aporta evidencia atribuible de una acción o comunicación para dificultar</text>
<text class="tb-tx" x="170.7" y="269.2" dominant-baseline="central">que una parte niegue su participación.</text>
<text class="tb-tx" x="800.0" y="246.5" dominant-baseline="central">Firmas digitales y registros de auditoría</text>
<text class="tb-tx" x="800.0" y="269.2" dominant-baseline="central">protegidos.</text>
<text class="tb-cap" x="600.0" y="316.0" text-anchor="middle">Tabla 8.1. Principios de la seguridad de la información.</text></svg>
</div>

#### No repudio

Capacidad de aportar evidencia verificable sobre el origen o la realización de una acción o comunicación. Puede apoyarse en firmas digitales, certificados, sellado de tiempo y registros protegidos; los *logs* por sí solos no aseguran el no repudio.

#### Autenticación

Verificación de la identidad de las entidades (usuarios, dispositivos).

La aplicación equilibrada de estos principios requiere análisis de riesgos: en algunos entornos la disponibilidad es prioritaria (por ejemplo, sistemas de control industrial), mientras que en otros la confidencialidad es crítica (datos financieros).

## 8.2 FIREWALLS

Uno de los mecanismos más extendidos para proteger una red es el *firewall* (cortafuegos), que actúa como punto de control entre redes con distintos niveles de confianza (por ejemplo, una red interna y una red externa no confiable como Internet). Aplica reglas que permiten o deniegan el tráfico según criterios predefinidos.

Técnicamente, es un sistema de seguridad —de *hardware*, *software* o una combinación de ambos— que supervisa y filtra el tráfico entrante y saliente. Su objetivo es reducir la superficie de ataque y dificultar accesos no autorizados.

### Firewalls de filtrado de paquetes (estáticos)

Operan en capas 3 y 4, inspeccionando cabeceras IP (direcciones origen/destino, protocolo) y TCP/UDP (puertos).

Deciden permitir o denegar el tráfico según reglas. Son rápidos, pero vulnerables a ataques que aprovechan la fragmentación o la manipulación de *flags*. Un ejemplo clásico son las ACL de los *routers*; herramientas como iptables y nftables pueden operar con o sin seguimiento de estado, según las reglas que se definan.

### Firewalls stateful (con inspección de estado)

Además del filtrado de paquetes, mantienen una tabla de seguimiento de conexiones (por ejemplo, estados new, established y related en *Linux* con conntrack). Con ese registro se asocian los paquetes a flujos conocidos y se admite el tráfico de retorno cuando corresponde a una comunicación permitida. El seguimiento de estado no constituye, por sí solo, una defensa completa contra SYN flood: para mitigar ese ataque pueden requerirse mecanismos específicos como SYN cookies, límites de tasa, protección del balanceador o controles del proveedor.

Es el tipo más común en equipos empresariales.

### Firewalls de capa de aplicación (proxy)

Actúan como intermediario entre el cliente y el servidor, analizando el contenido de la aplicación (por ejemplo, comandos HTTP, SMTP); pueden autenticar usuarios, escanear *malware* y ocultar la topología interna.

Más seguros, pero con mayor latencia y *overhead*.

### NGFW

Integran inspección *stateful*, filtrado de aplicaciones independiente del puerto (reconocimiento de aplicación), prevención de intrusiones (IPS) y, a menudo, *sandboxing* y análisis de SSL/TLS descifrado.

Ejemplos: Palo Alto, Fortinet, Cisco Firepower.

Los tipos de *firewall* se distinguen por la información que inspeccionan: encabezados aislados, estado de la conexión o contenido de aplicación; la Tabla 8.2 los resume por tecnología.

<div class="diagram tabla-svg" id="tabla-8-2" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 343" role="img" aria-labelledby="t35-title"><title id="t35-title">Tabla 8.2. Tipos de firewall según su tecnología.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="103.3" y="20.0" dominant-baseline="central" text-anchor="middle">Tipo de firewall</text>
<text class="tb-ht" x="556.8" y="20.0" dominant-baseline="central" text-anchor="middle">Característica principal</text>
<text class="tb-ht" x="1053.5" y="20.0" dominant-baseline="central" text-anchor="middle">Aplicación o ejemplo</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Filtrado de paquetes</text>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">(stateless)</text>
<text class="tb-tx" x="218.7" y="60.8" dominant-baseline="central">Evalúa direcciones IP, protocolos, puertos y otros campos de cada paquete sin</text>
<text class="tb-tx" x="218.7" y="83.5" dominant-baseline="central">mantener estado de conexión.</text>
<text class="tb-tx" x="918.9" y="60.8" dominant-baseline="central">ACL de routers y filtros básicos</text>
<text class="tb-tx" x="918.9" y="83.5" dominant-baseline="central">de paquetes.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Stateful</text>
<text class="tb-tx" x="218.7" y="124.2" dominant-baseline="central">Mantiene una tabla de estado de las conexiones y permite tráfico de retorno</text>
<text class="tb-tx" x="218.7" y="147.0" dominant-baseline="central">conforme a las reglas establecidas.</text>
<text class="tb-tx" x="918.9" y="135.6" dominant-baseline="central">Firewalls perimetrales y de host.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">Proxy o capa de</text>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">aplicación</text>
<text class="tb-tx" x="218.7" y="187.8" dominant-baseline="central">Actúa como intermediario y puede inspeccionar contenido de protocolos de</text>
<text class="tb-tx" x="218.7" y="210.5" dominant-baseline="central">aplicación compatibles.</text>
<text class="tb-tx" x="918.9" y="187.8" dominant-baseline="central">Proxy HTTP, proxy SMTP y</text>
<text class="tb-tx" x="918.9" y="210.5" dominant-baseline="central">gateways de aplicación.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="262.6" dominant-baseline="central">NGFW</text>
<text class="tb-tx" x="218.7" y="251.2" dominant-baseline="central">Integra inspección stateful, reconocimiento de aplicaciones, funciones IPS y, según</text>
<text class="tb-tx" x="218.7" y="274.0" dominant-baseline="central">el producto, inspección de tráfico cifrado y sandboxing.</text>
<text class="tb-tx" x="918.9" y="251.2" dominant-baseline="central">Palo Alto, Fortinet y Cisco</text>
<text class="tb-tx" x="918.9" y="274.0" dominant-baseline="central">Firepower.</text>
<text class="tb-cap" x="600.0" y="320.8" text-anchor="middle">Tabla 8.2. Tipos de firewall según su tecnología.</text></svg>
</div>

Nota: un *firewall stateful* realiza seguimiento de conexiones, pero esto no implica que detecte automáticamente ataques. La inspección de aplicaciones depende de los protocolos soportados, las políticas y la configuración del producto.

##### Listar reglas con nft en *Linux*

El comando nft list ruleset muestra toda la configuración activa de nftables, incluyendo tablas, cadenas y reglas:

```text
Networking@SecOpsMX:~$ sudo nft list ruleset
table inet firewall {

    chain input {
        type filter hook input priority 0; policy drop;
        iif "lo" accept
        ct state established,related accept
        iifname "eth1" ip saddr 192.168.10.0/24 tcp dport 22 accept
        ip protocol icmp limit rate 10/second accept
    }

    chain forward {
        type filter hook forward priority 0; policy drop;
        ct state established,related accept
        iifname "eth1" oifname "eth0" accept
        iifname "eth0" oifname "eth_dmz" tcp dport { 25, 80, 443 } accept
        iifname "eth1" oifname "eth_dmz" tcp dport { 22, 443 } accept
    }

    chain output {
        type filter hook output priority 0; policy accept;
    }
}

table ip nat {
    chain postrouting {
        type nat hook postrouting priority 100; policy accept;
        oifname "eth0" masquerade
    }
}
```

En la salida anterior puede observarse la configuración completa de nftables, incluyendo:

- La tabla inet firewall con las cadenas input (filtrado de tráfico entrante al propio sistema), forward (filtrado de tráfico que atraviesa el sistema) y output (tráfico saliente del propio sistema).
- Políticas por defecto: drop en input y forward, accept en output.
- Reglas específicas: tráfico local (lo) permitido, conexiones establecidas y relacionadas permitidas, SSH (puerto 22) permitido desde la interfaz eth1, ICMP limitado a 10 paquetes por segundo para mitigar ataques de inundación.
- La regla de ejemplo usa ip protocol icmp y, por tanto, cubre ICMPv4. En una política inet que también gestione IPv6 deben añadirse reglas ICMPv6 apropiadas, en especial para *Neighbor Discovery* y los mensajes de error necesarios para *Path MTU Discovery*; el ejemplo no debe tomarse como una política IPv6 completa.
- Reglas de reenvío: tráfico desde eth1 hacia eth0 permitido (salida a Internet), tráfico desde Internet (eth0) hacia la DMZ permitido solo para HTTP (80), HTTPS (443) y SMTP (25), y tráfico desde la LAN hacia la DMZ permitido solo para administración (SSH, puerto 22, y HTTPS, puerto 443).
- La tabla ip nat con la cadena postrouting que aplica masquerade (NAT de salida) al tráfico que sale por la interfaz eth0.

Los *firewalls* son la primera línea de defensa perimetral, pero no son suficientes por sí solos; se complementan con sistemas de prevención de intrusiones (IDS/IPS), segmentación y políticas de *Zero Trust* (Tema 12).

## 8.3 DMZ

En arquitecturas seguras, los servicios que deben ser accesibles desde redes externas (como servidores web, correo público y DNS) no deberían ubicarse directamente en la red interna confiable: si uno de esos servidores se compromete, podría convertirse en un punto de entrada hacia otros activos. Tampoco conviene exponerlos en la red externa sin controles de protección.

La solución es una DMZ. Una DMZ establece una red intermedia o segmento de red que se sitúa entre la red interna confiable (LAN) y la red externa no confiable (generalmente Internet); el *firewall* controla estrictamente las comunicaciones entre las tres zonas: Internet, DMZ y LAN interna.

### Arquitectura típica de una DMZ con un solo firewall (tres «piernas»)

El *firewall* tiene al menos tres interfaces: una conectada a Internet (externa), otra a la DMZ, y una más a la LAN interna.

<div class="diagram" id="figura-8-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g803" viewBox="0 0 1200 460.213" role="img" aria-labelledby="g803-title">
<title id="g803-title">Firewall de tres interfaces: Internet, DMZ y LAN</title>
<defs><marker id="g803m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g803n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g803-c" transform="translate(-8.787 -8.770) scale(1.0146)"><g transform="translate(0 -24)"><g transform="translate(130 195) scale(1.6)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#fbe6e6" stroke="#d40000" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="130" y="267" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Internet</text>
<text x="130" y="285" font-size="10.349pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">red externa no confiable</text>
<g transform="translate(600 195) scale(1.4)" data-lib="shield"><path d="M 0 -26 L 22 -17 L 22 2 C 22 16 0 26 0 26 C 0 26 -22 16 -22 2 L -22 -17 Z" fill="#364e6c" stroke="#364e6c" stroke-width="2"></path><path d="M-10 0 L-3 8 L11 -9" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="600" y="275.4" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Firewall</text>
<text x="600" y="295.63" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">tres interfaces</text>
<g transform="translate(1010 80) scale(0.9)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><circle cx="30" cy="-27.5" r="4" fill="#dd3a00"></circle><path d="M-34 -27.5h34" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><circle cx="30" cy="1.5" r="4" fill="#dd3a00"></circle><path d="M-34 1.5h34" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><circle cx="30" cy="30.5" r="4" fill="#dd3a00"></circle><path d="M-34 30.5h34" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path></g>
<text x="1010" y="150" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">DMZ</text>
<text x="1010" y="168" font-size="10.349pt" font-weight="400" fill="#7c2d12" text-anchor="middle">web · correo · DNS público</text>
<g transform="translate(1010 270) scale(0.9)" data-lib="pc"><g stroke="#009254" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#e6f4ee" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="1010" y="332" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">LAN interna</text>
<text x="1010" y="350" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="middle">red confiable</text>
<line x1="230" y1="195" x2="520" y2="195" stroke="#364e6c" stroke-width="2" marker-end="url(#g803m)" marker-start="url(#g803n)"></line>
<rect x="292.3" y="164" width="165.41" height="22" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.6"></rect>
<text x="375" y="179.43" font-size="10.349pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">solo puertos públicos</text>
<line x1="680" y1="170" x2="930" y2="85" stroke="#364e6c" stroke-width="2" marker-end="url(#g803m)" marker-start="url(#g803n)"></line>
<rect x="755.49" y="116.5" width="109.01" height="22" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="1.6"></rect>
<text x="810" y="131.93" font-size="10.349pt" font-weight="700" fill="#7c2d12" text-anchor="middle">TCP 80 y 443</text>
<line x1="680" y1="225" x2="930" y2="265" stroke="#364e6c" stroke-width="2" marker-end="url(#g803m)" marker-start="url(#g803n)"></line>
<rect x="716.82" y="234" width="186.36" height="22" rx="4" fill="#ffffff" stroke="#009254" stroke-width="1.6"></rect>
<text x="810" y="249.43" font-size="10.349pt" font-weight="700" fill="#065f46" text-anchor="middle">administración y salida</text>
<text x="375" y="221" font-size="10.349pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">a la LAN: denegado</text>
<rect x="20" y="390" width="1160" height="44" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="417.25" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">DMZ a LAN: solo conexiones iniciadas por la LAN o reglas muy específicas · LAN a Internet: normalmente permitido con NAT</text>
</g></g><text x="600" y="443.859" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 8.3. Firewall de tres interfaces: Internet, DMZ y LAN.</text></svg>
</div>

La Figura 8.4 compara las variantes de DMZ.

### Reglas comunes

- Desde Internet hacia DMZ: permitido solo a los puertos específicos de servicios públicos (por ejemplo, TCP 80 y 443 al servidor web).
- Desde Internet hacia LAN interna: denegado totalmente.
- Desde DMZ hacia LAN interna: denegado por defecto. Solo se permiten flujos expresamente autorizados y limitados al origen, destino, protocolo y puerto necesarios; por ejemplo, que un servidor web consulte una base de datos interna por el puerto específico del motor. No debe habilitarse conectividad general desde la DMZ hacia la LAN.
- Desde LAN interna hacia Internet: normalmente permitido (con NAT).
- Desde LAN interna hacia DMZ: permitido para administración (por ejemplo, SSH hacia servidores de la DMZ) pero restringido a orígenes autorizados.

### Variantes de DMZ

Servicios típicos ubicados en DMZ comprenden, entre otros, servidores web públicos, servidores de correo (SMTP) y webmail, servidores DNS públicos, servidores *proxy* inverso y terminales de acceso remoto (*VPN gateways*) que podrían estar en DMZ o en LAN según diseño.

La DMZ permite contener un posible ataque: si un atacante compromete un servidor en la DMZ, el *firewall* limita su acceso a la LAN interna al restringir el tráfico originado en la DMZ según las reglas definidas. Esta contención depende de que esas reglas sean estrictas y se mantengan actualizadas.

<div class="diagram" id="figura-8-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g804" viewBox="0 0 1200 409.483" role="img" aria-labelledby="g804-title">
<title id="g804-title">Variantes de una DMZ</title>
<defs><marker id="g804m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g804n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g804-c" transform="translate(-8.776 -8.770) scale(1.0146)"><g transform="translate(0 0)"><rect x="20" y="20" width="360" height="340" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<text x="200" y="44" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Un firewall</text>
<rect x="420" y="20" width="360" height="340" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<text x="600" y="44" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Dos firewalls</text>
<rect x="820" y="20" width="360" height="340" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<text x="1000" y="44" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">DMZ multicapa</text>
<g transform="translate(200 100) scale(0.9)" data-lib="shield"><path d="M 0 -26 L 22 -17 L 22 2 C 22 16 0 26 0 26 C 0 26 -22 16 -22 2 L -22 -17 Z" fill="#003ecc" stroke="#003ecc" stroke-width="2"></path><path d="M-10 0 L-3 8 L11 -9" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<g transform="translate(110 230) scale(0.6)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><circle cx="30" cy="-27.5" r="4" fill="#dd3a00"></circle><path d="M-34 -27.5h34" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><circle cx="30" cy="1.5" r="4" fill="#dd3a00"></circle><path d="M-34 1.5h34" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><circle cx="30" cy="30.5" r="4" fill="#dd3a00"></circle><path d="M-34 30.5h34" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path></g>
<g transform="translate(290 230) scale(0.6)" data-lib="pc"><g stroke="#009254" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#e6f4ee" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<line x1="190" y1="130" x2="120" y2="198" stroke="#364e6c" stroke-width="2" marker-end="url(#g804m)"></line>
<line x1="210" y1="130" x2="285" y2="205" stroke="#364e6c" stroke-width="2" marker-end="url(#g804m)"></line>
<text x="110" y="285" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">DMZ</text>
<text x="290" y="285" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">LAN</text>
<g transform="translate(520 100) scale(0.7)" data-lib="shield"><path d="M 0 -26 L 22 -17 L 22 2 C 22 16 0 26 0 26 C 0 26 -22 16 -22 2 L -22 -17 Z" fill="#009254" stroke="#009254" stroke-width="2"></path><path d="M-10 0 L-3 8 L11 -9" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<g transform="translate(680 100) scale(0.7)" data-lib="shield"><path d="M 0 -26 L 22 -17 L 22 2 C 22 16 0 26 0 26 C 0 26 -22 16 -22 2 L -22 -17 Z" fill="#009254" stroke="#009254" stroke-width="2"></path><path d="M-10 0 L-3 8 L11 -9" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<g transform="translate(600 230) scale(0.6)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><circle cx="30" cy="-27.5" r="4" fill="#dd3a00"></circle><path d="M-34 -27.5h34" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><circle cx="30" cy="1.5" r="4" fill="#dd3a00"></circle><path d="M-34 1.5h34" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><circle cx="30" cy="30.5" r="4" fill="#dd3a00"></circle><path d="M-34 30.5h34" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path></g>
<line x1="540" y1="128" x2="580" y2="200" stroke="#364e6c" stroke-width="2" marker-end="url(#g804m)"></line>
<line x1="660" y1="128" x2="620" y2="200" stroke="#364e6c" stroke-width="2" marker-end="url(#g804m)"></line>
<text x="520" y="148" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">externo</text>
<text x="680" y="148" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">interno</text>
<text x="600" y="285" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">DMZ</text>
<g transform="translate(942 90) scale(0.7)" data-lib="shield"><path d="M 0 -26 L 22 -17 L 22 2 C 22 16 0 26 0 26 C 0 26 -22 16 -22 2 L -22 -17 Z" fill="#7c3aed" stroke="#7c3aed" stroke-width="2"></path><path d="M-10 0 L-3 8 L11 -9" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<g transform="translate(942 185) scale(0.5)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><circle cx="30" cy="-27.5" r="4" fill="#dd3a00"></circle><path d="M-34 -27.5h34" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><circle cx="30" cy="1.5" r="4" fill="#dd3a00"></circle><path d="M-34 1.5h34" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><circle cx="30" cy="30.5" r="4" fill="#dd3a00"></circle><path d="M-34 30.5h34" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path></g>
<g transform="translate(942 275) scale(0.45)" data-lib="db"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><path d="M-30 -24 V24 C-30 36 30 36 30 24 V-24"></path><ellipse cx="0" cy="-24" rx="30" ry="11" fill="#fbe6e6"></ellipse><path d="M-30 -4 C-30 8 30 8 30 -4" fill="none"></path><path d="M-30 14 C-30 26 30 26 30 14" fill="none"></path></g></g>
<line x1="942" y1="116" x2="942" y2="160" stroke="#364e6c" stroke-width="2" marker-end="url(#g804m)"></line>
<line x1="942" y1="210" x2="942" y2="250" stroke="#364e6c" stroke-width="2" marker-end="url(#g804m)"></line>
<text x="1022" y="190" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">DMZ pública</text>
<text x="1032" y="284" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">DMZ restringida</text>
<text x="200" y="340" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Tres interfaces en un equipo</text>
<text x="600" y="340" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Mayor seguridad y más complejidad</text>
<text x="1000" y="340" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Distintos niveles de confianza</text>
</g></g><text x="600" y="393.121" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 8.4. Variantes de una DMZ.</text></svg>
</div>

#### DMZ con dos firewalls

Puede ofrecer mayor aislamiento, a costa de más complejidad. El *firewall* externo filtra tráfico hacia la DMZ; el interno controla el paso entre DMZ y LAN.

#### DMZ multicapa

Varias DMZ con diferentes niveles de confianza (por ejemplo, DMZ pública para web, DMZ más restringida para aplicaciones).

La Tabla 8.3 expresa la política de una DMZ como una matriz de sentidos de tráfico; su lectura fila por fila permite comprobar que ninguna comunicación quede autorizada sin una condición explícita.

<div class="diagram tabla-svg" id="tabla-8-3" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 429" role="img" aria-labelledby="t36-title"><title id="t36-title">Tabla 8.3. Reglas comunes de un firewall con DMZ.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="63.5"/>
<text class="tb-ht" x="82.2" y="20.0" dominant-baseline="central" text-anchor="middle">Sentido del</text>
<text class="tb-ht" x="82.2" y="42.8" dominant-baseline="central" text-anchor="middle">tráfico</text>
<text class="tb-ht" x="273.8" y="31.4" dominant-baseline="central" text-anchor="middle">Política general</text>
<text class="tb-ht" x="791.6" y="31.4" dominant-baseline="central" text-anchor="middle">Condiciones</text>
<rect class="tb-te" x="0" y="63.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="94.9" dominant-baseline="central">Internet → DMZ</text>
<text class="tb-tx" x="176.4" y="83.5" dominant-baseline="central">Permitido de forma</text>
<text class="tb-tx" x="176.4" y="106.2" dominant-baseline="central">restringida.</text>
<text class="tb-tx" x="395.1" y="94.9" dominant-baseline="central">Solo a puertos y servicios públicos autorizados, por ejemplo TCP 80 y 443 hacia un servidor web.</text>
<rect class="tb-to" x="0" y="127.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="147.0" dominant-baseline="central">Internet → LAN</text>
<text class="tb-tx tb-b" x="12.0" y="169.8" dominant-baseline="central">interna</text>
<text class="tb-tx" x="176.4" y="158.4" dominant-baseline="central">Denegado.</text>
<text class="tb-tx" x="395.1" y="158.4" dominant-baseline="central">No se permite acceso directo desde Internet a la red interna.</text>
<rect class="tb-te" x="0" y="190.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">DMZ → LAN</text>
<text class="tb-tx tb-b" x="12.0" y="233.2" dominant-baseline="central">interna</text>
<text class="tb-tx" x="176.4" y="221.9" dominant-baseline="central">Denegado por defecto.</text>
<text class="tb-tx" x="395.1" y="210.5" dominant-baseline="central">Se permiten únicamente flujos explícitos y necesarios, como una conexión autorizada desde un</text>
<text class="tb-tx" x="395.1" y="233.2" dominant-baseline="central">servidor de aplicaciones hacia una base de datos.</text>
<rect class="tb-to" x="0" y="254.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">LAN interna →</text>
<text class="tb-tx tb-b" x="12.0" y="296.8" dominant-baseline="central">Internet</text>
<text class="tb-tx" x="176.4" y="274.0" dominant-baseline="central">Permitido según</text>
<text class="tb-tx" x="176.4" y="296.8" dominant-baseline="central">política.</text>
<text class="tb-tx" x="395.1" y="285.4" dominant-baseline="central">Normalmente mediante NAT y controles de salida.</text>
<rect class="tb-te" x="0" y="317.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="337.5" dominant-baseline="central">LAN interna →</text>
<text class="tb-tx tb-b" x="12.0" y="360.2" dominant-baseline="central">DMZ</text>
<text class="tb-tx" x="176.4" y="348.9" dominant-baseline="central">Restringido.</text>
<text class="tb-tx" x="395.1" y="348.9" dominant-baseline="central">Administración y servicios desde orígenes y puertos autorizados.</text>
<text class="tb-cap" x="600.0" y="407.0" text-anchor="middle">Tabla 8.3. Reglas comunes de un firewall con DMZ.</text></svg>
</div>

## 8.4 ACL

A nivel de dispositivos de red (*routers*, *switches* de capa 3, *firewalls*), las listas de control de acceso (ACL) son el mecanismo básico para filtrar tráfico.

Son conjuntos ordenados de reglas que se aplican a interfaces, indicando qué paquetes se permiten y cuáles se deniegan. Se implementan mediante una lista secuencial de instrucciones (permiso o denegación) que se aplican a paquetes que atraviesan una interfaz de un dispositivo de red, generalmente evaluando campos de capa 3 y capa 4 (direcciones IP, protocolo, puertos y opcionalmente *flags* TCP). La Figura 8.5 representa la evaluación secuencial.

<div class="diagram" id="figura-8-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g805" viewBox="0 0 1200 310.836" role="img" aria-labelledby="g805-title">
<title id="g805-title">Evaluación secuencial de una ACL</title>
<defs><marker id="g805m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g805n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g805-c" transform="translate(-8.779 -8.770) scale(1.0146)"><g transform="translate(0 -20)"><g transform="translate(100 90) scale(0.9)" data-lib="packet"><rect x="-38" y="-20" width="76" height="40" rx="4" fill="#ffffff" stroke="#364e6c" stroke-width="3"></rect><rect x="-38" y="-20" width="26" height="40" fill="#cdd3da" stroke="#364e6c" stroke-width="3"></rect><path d="M-4 -6h30M-4 6h20" stroke="#364e6c" stroke-width="3" stroke-linecap="round"></path></g>
<text x="100" y="147.4" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Paquete</text>
<text x="100" y="167.631" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">entra por la interfaz</text>
<rect x="290" y="40" width="170" height="100" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(332 90) scale(0.6)" data-lib="list"><rect x="-28" y="-32" width="56" height="64" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><path d="M-8 -16h24" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="-16" r="3.5" fill="#009254"></circle><path d="M-8 -2h24" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="-2" r="3.5" fill="#d40000"></circle><path d="M-8 12h24" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="12" r="3.5" fill="#009254"></circle></g>
<g transform="translate(416 90) scale(0.5)" data-lib="check"><circle cx="0" cy="0" r="28" fill="#009254"></circle><path d="M-13 1 L-4 11 L15 -10" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="375" y="66" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Regla 1</text>
<text x="375" y="124" font-size="10.349pt" font-weight="700" fill="#065f46" text-anchor="middle">permit</text>
<line x1="180" y1="90" x2="286" y2="90" stroke="#364e6c" stroke-width="2" marker-end="url(#g805m)"></line>
<rect x="510" y="40" width="170" height="100" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(552 90) scale(0.6)" data-lib="list"><rect x="-28" y="-32" width="56" height="64" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"></rect><path d="M-8 -16h24" stroke="#d40000" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="-16" r="3.5" fill="#d40000"></circle><path d="M-8 -2h24" stroke="#d40000" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="-2" r="3.5" fill="#d40000"></circle><path d="M-8 12h24" stroke="#d40000" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="12" r="3.5" fill="#d40000"></circle></g>
<g transform="translate(636 90) scale(0.5)" data-lib="cross"><circle cx="0" cy="0" r="28" fill="#d40000"></circle><path d="M-11 -11 L11 11 M11 -11 L-11 11" stroke="#ffffff" stroke-width="5" stroke-linecap="round"></path></g>
<text x="595" y="66" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Regla 2</text>
<text x="595" y="124" font-size="10.349pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">deny</text>
<line x1="464" y1="90" x2="506" y2="90" stroke="#364e6c" stroke-width="2" marker-end="url(#g805m)"></line>
<rect x="730" y="40" width="170" height="100" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(772 90) scale(0.6)" data-lib="list"><rect x="-28" y="-32" width="56" height="64" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><path d="M-8 -16h24" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="-16" r="3.5" fill="#009254"></circle><path d="M-8 -2h24" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="-2" r="3.5" fill="#d40000"></circle><path d="M-8 12h24" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="12" r="3.5" fill="#009254"></circle></g>
<g transform="translate(856 90) scale(0.5)" data-lib="check"><circle cx="0" cy="0" r="28" fill="#009254"></circle><path d="M-13 1 L-4 11 L15 -10" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="815" y="66" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Regla 3</text>
<text x="815" y="124" font-size="10.349pt" font-weight="700" fill="#065f46" text-anchor="middle">permit</text>
<line x1="684" y1="90" x2="726" y2="90" stroke="#364e6c" stroke-width="2" marker-end="url(#g805m)"></line>
<rect x="950" y="40" width="170" height="100" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<g transform="translate(992 90) scale(0.6)" data-lib="list"><rect x="-28" y="-32" width="56" height="64" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><path d="M-8 -16h24" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="-16" r="3.5" fill="#dd3a00"></circle><path d="M-8 -2h24" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="-2" r="3.5" fill="#d40000"></circle><path d="M-8 12h24" stroke="#dd3a00" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="12" r="3.5" fill="#dd3a00"></circle></g>
<g transform="translate(1076 90) scale(0.5)" data-lib="cross"><circle cx="0" cy="0" r="28" fill="#dd3a00"></circle><path d="M-11 -11 L11 11 M11 -11 L-11 11" stroke="#ffffff" stroke-width="5" stroke-linecap="round"></path></g>
<text x="1035" y="66" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">deny all</text>
<text x="1035" y="124" font-size="10.349pt" font-weight="700" fill="#7c2d12" text-anchor="middle">regla implícita</text>
<line x1="904" y1="90" x2="946" y2="90" stroke="#364e6c" stroke-width="2" marker-end="url(#g805m)"></line>
<rect x="20" y="190" width="1160" height="44" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="217.25" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Se evalúa en orden: la primera coincidencia detiene la evaluación y lo que no coincide con ninguna regla explícita se deniega</text>
<text x="600" y="278" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Estándar: solo IP de origen · Extendida: origen, destino, protocolo, puertos y flags</text>
</g></g><text x="600" y="294.473" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 8.5. Evaluación secuencial de una ACL.</text></svg>
</div>

### Tipos de ACL

#### ACL estándar

Filtra solo por dirección IP de origen (números 1-99 o 1300-1999). Ejemplo: access-list 10 permit 192.168.1.0 0.0.0.255.

#### ACL extendida

Filtra por origen, destino, protocolo (TCP, UDP, ICMP, etc.), puertos origen/destino, *flags* (como established). Números 100-199 o 2000-2699.

#### ACL con nombre

Permite definir ACL estándar o extendidas con un nombre significativo, facilitando la administración.

#### ACL reflexivas y dinámicas

Las reflexivas permiten el tráfico de retorno solo si fue iniciado por la red interna (comportamiento similar al de un *firewall stateful*).

Las dinámicas (*lock-and-key*) abren un acceso temporal tras la autenticación del usuario. Ambas son poco comunes hoy.

Las ACL se distinguen por el detalle con que identifican el tráfico y por la forma en que se aplican; la Tabla 8.4 resume sus tipos y la consideración principal de cada uno.

<div class="diagram tabla-svg" id="tabla-8-4" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 384" role="img" aria-labelledby="t37-title"><title id="t37-title">Tabla 8.4. Tipos de ACL.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="84.4" y="20.0" dominant-baseline="central" text-anchor="middle">Tipo de ACL</text>
<text class="tb-ht" x="435.5" y="20.0" dominant-baseline="central" text-anchor="middle">Descripción</text>
<text class="tb-ht" x="951.1" y="20.0" dominant-baseline="central" text-anchor="middle">Aplicación o consideración</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Estándar</text>
<text class="tb-tx" x="180.8" y="60.8" dominant-baseline="central">Filtra principalmente por dirección IPv4 de origen.</text>
<text class="tb-tx" x="714.2" y="60.8" dominant-baseline="central">Adecuada para controles sencillos basados en origen.</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="112.9" dominant-baseline="central">Extendida</text>
<text class="tb-tx" x="180.8" y="101.5" dominant-baseline="central">Puede filtrar por origen, destino, protocolo y puertos, según la</text>
<text class="tb-tx" x="180.8" y="124.2" dominant-baseline="central">plataforma.</text>
<text class="tb-tx" x="714.2" y="112.9" dominant-baseline="central">Permite políticas de filtrado más específicas.</text>
<rect class="tb-te" x="0" y="145.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="165.0" dominant-baseline="central">Con nombre</text>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">(named)</text>
<text class="tb-tx" x="180.8" y="165.0" dominant-baseline="central">ACL identificada mediante un nombre en lugar de únicamente</text>
<text class="tb-tx" x="180.8" y="187.8" dominant-baseline="central">un número.</text>
<text class="tb-tx" x="714.2" y="176.4" dominant-baseline="central">Puede ser estándar o extendida; facilita la administración.</text>
<rect class="tb-to" x="0" y="208.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="239.9" dominant-baseline="central">Reflexiva</text>
<text class="tb-tx" x="180.8" y="228.5" dominant-baseline="central">Permite crear reglas temporales de retorno asociadas a</text>
<text class="tb-tx" x="180.8" y="251.2" dominant-baseline="central">conexiones iniciadas desde una red autorizada.</text>
<text class="tb-tx" x="714.2" y="228.5" dominant-baseline="central">Comportamiento similar a determinadas funciones stateful;</text>
<text class="tb-tx" x="714.2" y="251.2" dominant-baseline="central">depende de la plataforma.</text>
<rect class="tb-te" x="0" y="272.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="292.0" dominant-baseline="central">Dinámica (lock-and-key)</text>
<text class="tb-tx" x="180.8" y="292.0" dominant-baseline="central">Abre temporalmente un acceso tras un proceso de</text>
<text class="tb-tx" x="180.8" y="314.8" dominant-baseline="central">autenticación.</text>
<text class="tb-tx" x="714.2" y="292.0" dominant-baseline="central">Mecanismo específico de algunas implementaciones, poco</text>
<text class="tb-tx" x="714.2" y="314.8" dominant-baseline="central">común en despliegues modernos.</text>
<text class="tb-cap" x="600.0" y="361.5" text-anchor="middle">Tabla 8.4. Tipos de ACL.</text></svg>
</div>

Nota: los rangos numéricos de ACL estándar y extendidas dependen de la plataforma. Los rangos clásicos 1-99 y 1300-1999 para estándar, y 100-199 y 2000-2699 para extendidas, corresponden a *Cisco IOS*.

### Consideraciones de diseño de ACL

- El orden de las reglas es crítico: la primera coincidencia detiene la evaluación.
- En muchas ACL secuenciales de *routers* y *switches*, como las de *Cisco IOS*, existe una denegación implícita al final. El comportamiento predeterminado y la forma de evaluar las reglas dependen de la plataforma y del tipo de política; deben comprobarse en la documentación del equipo.
- Se deben evitar ACL demasiado largas que degraden el rendimiento del *router*.
- Los permisos deben ser lo más específicos posible (principio de mínimo privilegio).

### Aplicación de ACL

#### Inbound (entrada)

Se aplica a los paquetes que llegan a una interfaz, antes de ser enrutados.

#### Outbound (salida)

Se aplica a los paquetes que salen por una interfaz, después de enrutados.

Las ACL son ampliamente usadas en *routers* de borde para filtrar tráfico no deseado (por ejemplo, bloquear puertos de administración desde Internet o limitar el acceso SSH a ciertas direcciones IP).

## 8.5 CRIPTOGRAFÍA

La criptografía es la disciplina que proporciona confidencialidad, integridad y autenticación mediante técnicas matemáticas de cifrado y firma digital. En redes, los protocolos criptográficos se integran en diferentes puntos de la arquitectura. Dos de los más importantes son TLS, que se sitúa entre los protocolos de aplicación y el transporte en las arquitecturas habituales, y SSH, utilizado para el acceso remoto seguro.

### TLS

TLS (*Transport Layer Security*) es el sucesor de SSL, protocolo que fue formalmente deprecado en todas sus versiones (SSL 2.0: RFC 6176, 2011; SSL 3.0: RFC 7568, 2015) y no debe usarse. TLS proporciona confidencialidad, integridad y autenticación en comunicaciones sobre redes inseguras.

#### Diferenciación de versiones

La Tabla 8.5 permite verificar con rapidez si la versión de SSL o TLS en uso sigue siendo admisible: SSL 2.0 y 3.0 y TLS 1.0 y 1.1 están deprecados, mientras que TLS 1.2 y 1.3 son las versiones vigentes.

<div class="diagram tabla-svg" id="tabla-8-5" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 366" role="img" aria-labelledby="t38-title"><title id="t38-title">Tabla 8.5. Estado de las versiones de SSL y TLS.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="52.2" y="20.0" dominant-baseline="central" text-anchor="middle">Versión</text>
<text class="tb-ht" x="279.5" y="20.0" dominant-baseline="central" text-anchor="middle">Estado</text>
<text class="tb-ht" x="827.3" y="20.0" dominant-baseline="central" text-anchor="middle">Características principales</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">SSL 2.0 y</text>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">3.0</text>
<text class="tb-tx" x="116.5" y="72.1" dominant-baseline="central">Obsoletas e inseguras.</text>
<text class="tb-tx" x="466.6" y="72.1" dominant-baseline="central">No deben usarse en nuevas implementaciones.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">TLS 1.0 y</text>
<text class="tb-tx tb-b" x="12.0" y="147.0" dominant-baseline="central">1.1</text>
<text class="tb-tx" x="116.5" y="135.6" dominant-baseline="central">Deprecadas.</text>
<text class="tb-tx" x="466.6" y="135.6" dominant-baseline="central">Su uso está desaconsejado por vulnerabilidades y estándares actuales.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">TLS 1.2</text>
<text class="tb-tx" x="116.5" y="187.8" dominant-baseline="central">Vigente con configuraciones y suites</text>
<text class="tb-tx" x="116.5" y="210.5" dominant-baseline="central">criptográficas contemporáneas.</text>
<text class="tb-tx" x="466.6" y="199.1" dominant-baseline="central">Puede usar algoritmos AEAD, como AES-GCM y ChaCha20-Poly1305.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">TLS 1.3</text>
<text class="tb-tx" x="116.5" y="274.0" dominant-baseline="central">Versión moderna vigente.</text>
<text class="tb-tx" x="466.6" y="251.2" dominant-baseline="central">Simplifica el handshake, usa suites AEAD y cifra una mayor parte del intercambio. El</text>
<text class="tb-tx" x="466.6" y="274.0" dominant-baseline="central">handshake completo suele requerir 1-RTT; 0-RTT es opcional y presenta riesgo de</text>
<text class="tb-tx" x="466.6" y="296.8" dominant-baseline="central">repetición.</text>
<text class="tb-cap" x="600.0" y="343.5" text-anchor="middle">Tabla 8.5. Estado de las versiones de SSL y TLS.</text></svg>
</div>

- TLS 1.0 y TLS 1.1 fueron deprecados mediante RFC 8996 (2021) y no deben implementarse en sistemas nuevos.
- TLS 1.2 está especificado en el RFC 5246 y sus actualizaciones; TLS 1.3 está definido en el RFC 8446. TLS 1.2 continúa usándose cuando se configura con suites criptográficas seguras, preferentemente AEAD como AES-GCM o ChaCha20-Poly1305.
- TLS 1.3 (RFC 8446, 2018) introduce cambios sustanciales, como la eliminación de suites y mecanismos criptográficos obsoletos, el cifrado de una mayor parte del *handshake* y un establecimiento de sesión más eficiente. Para nuevos despliegues se recomienda preferir TLS 1.3; TLS 1.2 puede seguir siendo aceptable si se configura con suites y parámetros seguros.

### Funcionamiento resumido de una sesión TLS

- *Handshake*: cliente y servidor negocian los parámetros criptográficos y establecen secretos compartidos. Según el método de autenticación configurado, el servidor —y opcionalmente el cliente— puede presentar certificados. En TLS 1.3 se usan mecanismos de intercambio de claves como (EC)DHE o PSK; se eliminó el transporte de claves RSA, aunque todavía pueden usarse certificados y firmas RSA para autenticación cuando los algoritmos y parámetros sean compatibles.
- Establecimiento de claves de sesión: se derivan claves simétricas para el cifrado de los datos.
- Transferencia de datos: los registros TLS protegen los datos mediante cifrado autenticado. En las suites AEAD modernas, como AES-GCM y ChaCha20-Poly1305, la confidencialidad y la integridad/autenticación se proporcionan de forma conjunta; por ello, no debe describirse un MAC independiente como requisito universal. TLS 1.2 también puede usar suites heredadas que combinan cifrado y MAC, mientras que TLS 1.3 usa exclusivamente suites AEAD.
- Cierre: se intercambian mensajes de cierre.

La Figura 8.6 ordena las cuatro etapas de una sesión TLS y permite ubicar en cuál de ellas se produce un fallo.

<div class="diagram" id="figura-8-06" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g806" viewBox="0 0 1200 363.822" role="img" aria-labelledby="g806-title">
<title id="g806-title">Sesión TLS en cuatro etapas</title>
<defs><marker id="g806m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g806n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g806-c" transform="translate(-8.803 -8.771) scale(1.0147)"><g transform="translate(0 1)"><circle cx="165" cy="34" r="15" fill="#7f1d1d"></circle>
<text x="165" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
<rect x="80" y="58" width="170" height="100" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(165 108) scale(1)" data-lib="sync"><g fill="none" stroke="#d40000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 -4 A26 26 0 0 1 20 -16"></path><path d="M24 4 A26 26 0 0 1 -20 16"></path><path d="M12 -22 L22 -16 L14 -8"></path><path d="M-12 22 L-22 16 L-14 8"></path></g></g>
<text x="165" y="177" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Handshake</text>
<text x="165" y="197.231" font-size="10.348pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">versión, cipher suites y certificados</text>
<line x1="254" y1="108" x2="366" y2="108" stroke="#364e6c" stroke-width="2" marker-end="url(#g806m)"></line>
<circle cx="455" cy="34" r="15" fill="#1e3a8a"></circle>
<text x="455" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
<rect x="370" y="58" width="170" height="100" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(455 108) scale(1)" data-lib="key"><g stroke="#003ecc" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="-22" cy="0" r="12" fill="#bfcff2"></circle><path d="M-10 0 H34 M24 0 V12 M14 0 V9"></path></g></g>
<text x="455" y="177" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Claves de sesión</text>
<text x="455" y="197.231" font-size="10.348pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">claves simétricas derivadas (ECDHE/DHE)</text>
<line x1="544" y1="108" x2="656" y2="108" stroke="#364e6c" stroke-width="2" marker-end="url(#g806m)"></line>
<circle cx="745" cy="34" r="15" fill="#065f46"></circle>
<text x="745" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
<rect x="660" y="58" width="170" height="100" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(745 108) scale(1)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#009254" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#009254"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<text x="745" y="177" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Transferencia</text>
<text x="745" y="197.231" font-size="10.348pt" font-weight="400" fill="#065f46" text-anchor="middle">datos cifrados (AES, ChaCha20) y</text>
<text x="745" y="215.085" font-size="10.348pt" font-weight="400" fill="#065f46" text-anchor="middle">autenticados</text>
<line x1="834" y1="108" x2="946" y2="108" stroke="#364e6c" stroke-width="2" marker-end="url(#g806m)"></line>
<circle cx="1035" cy="34" r="15" fill="#5b21b6"></circle>
<text x="1035" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text>
<rect x="950" y="58" width="170" height="100" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(1035 108) scale(1)" data-lib="power"><g fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"><path d="M0 -28 V-4"></path><path d="M-16 -18 A24 24 0 1 0 16 -18"></path></g></g>
<text x="1035" y="177" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cierre</text>
<text x="1035" y="197.231" font-size="10.348pt" font-weight="400" fill="#5b21b6" text-anchor="middle">mensajes de cierre</text>
<rect x="20" y="270" width="1160" height="44" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="297.25" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">TLS 1.3 acorta el handshake (1-RTT) y cifra la mayor parte de él; RSA para intercambio de claves solo en TLS 1.2 y anteriores</text>
</g></g><text x="600" y="347.476" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 8.6. Sesión TLS en cuatro etapas.</text></svg>
</div>

TLS se usa en HTTPS (HTTP sobre TLS), SMTPS, IMAPS, FTPS y *WebSockets* seguros (WSS); con certificados válidos, reduce el riesgo de escucha, manipulación y suplantación de identidad.

### SSH

El protocolo SSH permite acceder de forma segura a un dispositivo remoto (generalmente un servidor o *router*) a través de una red insegura, proporcionando autenticación y cifrado de la sesión.

Sustituye a protocolos de acceso remoto inseguros como Telnet, Rlogin y Rsh. Para transferir archivos pueden usarse herramientas y subsistemas asociados, como SFTP o SCP, que no deben confundirse con FTP.

#### Componentes de SSH

- Capa de transporte: establece una conexión TCP cifrada, autentica el servidor (clave de *host*) y negocia algoritmos.
- Capa de autenticación: el cliente se autentica mediante contraseña, clave pública o métodos como GSSAPI.
- Capa de conexión: multiplexa canales, *shell* remota, transferencia de archivos (SFTP), reenvío de puertos (túneles).

*Secure Copy Protocol* (SCP): el protocolo SCP/RCP heredado se considera obsoleto; desde OpenSSH 9.0 (2022) el comando scp usa SFTP de forma predeterminada.

Se recomienda usar SFTP (*SSH File Transfer Protocol*, subsistema de SSH) o rsync sobre SSH para transferir archivos, y ssh-copy-id para instalar claves públicas.

La arquitectura del protocolo SSH se define en el RFC 4251. La Figura 8.7 representa las capas del protocolo SSH.

<div class="diagram" id="figura-8-07" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g807" viewBox="0 0 1200 360.782" role="img" aria-labelledby="g807-title">
<title id="g807-title">Capas del protocolo SSH</title>
<defs><marker id="g807m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g807n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g807-c" transform="translate(-8.778 -8.770) scale(1.0146)"><g transform="translate(0 0)"><rect x="20" y="20" width="1160" height="76" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(90 58) scale(0.8)" data-lib="nodes"><g stroke="#7c3aed" stroke-width="3" fill="none"><path d="M0 -22 L-22 14 M0 -22 L22 14 M-22 14 H22"></path></g><circle cx="0" cy="-22" r="9" fill="#decefa" stroke="#7c3aed" stroke-width="3"></circle><circle cx="-22" cy="14" r="9" fill="#decefa" stroke="#7c3aed" stroke-width="3"></circle><circle cx="22" cy="14" r="9" fill="#decefa" stroke="#7c3aed" stroke-width="3"></circle></g>
<text x="160" y="52" font-size="13.799pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Capa de conexión</text>
<text x="160" y="76" font-size="10.349pt" font-weight="400" fill="#5b21b6" text-anchor="start">multiplexa canales: shell remota, SFTP y reenvío de puertos</text>
<line x1="600" y1="96" x2="600" y2="128" stroke="#364e6c" stroke-width="2" marker-end="url(#g807m)" marker-start="url(#g807n)"></line>
<rect x="20" y="128" width="1160" height="76" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(90 166) scale(0.8)" data-lib="key"><g stroke="#003ecc" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="-22" cy="0" r="12" fill="#bfcff2"></circle><path d="M-10 0 H34 M24 0 V12 M14 0 V9"></path></g></g>
<text x="160" y="160" font-size="13.799pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Capa de autenticación</text>
<text x="160" y="184" font-size="10.349pt" font-weight="400" fill="#1e3a8a" text-anchor="start">contraseña, clave pública o métodos como GSSAPI</text>
<line x1="600" y1="204" x2="600" y2="236" stroke="#364e6c" stroke-width="2" marker-end="url(#g807m)" marker-start="url(#g807n)"></line>
<rect x="20" y="236" width="1160" height="76" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(90 274) scale(0.8)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#009254" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#009254"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<text x="160" y="268" font-size="13.799pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Capa de transporte</text>
<text x="160" y="292" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="start">conexión TCP cifrada, autenticación del servidor y negociación de algoritmos</text>
</g></g><text x="600" y="344.420" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 8.7. Capas del protocolo SSH.</text></svg>
</div>

### Usos típicos

- Acceso a terminal remoto (ssh usuario@host).
- Transferencia segura de archivos con SFTP (no confundir con FTPS); el uso de SCP está desaconsejado (véase la nota sobre SCP en la descripción de SSH).
- Reenvío de puertos locales/remotos (túneles SSH) para cifrar tráfico de otras aplicaciones.
- Ejecución remota de comandos.
- SSH se usa ampliamente en la administración de sistemas *Linux*/*Unix* y dispositivos de red que soporten SSH (en lugar de Telnet). Su seguridad depende de la correcta gestión de claves y la protección de las claves privadas.

## 8.6 IPSEC

El protocolo IPsec opera a nivel de capa 3 y proporciona confidencialidad, autenticidad e integridad para datagramas IP. Opera mediante dos modos:

- *Transport* (protege solo *payload*).
- *Tunnel* (protege datagramas IP completos, incluyendo encabezado).

La Figura 8.8 contrasta ambos modos por lo que dejan expuesto: en modo transporte, el encabezado IP original permanece visible; en modo túnel, el datagrama completo se encapsula y se añade un encabezado nuevo.

<div class="diagram" id="figura-8-08" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g808" viewBox="0 0 1200 395.192" role="img" aria-labelledby="g808-title">
<title id="g808-title">Modos transporte y túnel de IPsec</title>
<defs><marker id="g808m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g808n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g808-c" transform="translate(-8.771 -8.773) scale(1.0146)"><g transform="translate(0 5.92)"><text x="20" y="30" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Modo transporte</text>
<rect x="20" y="44" width="246" height="62" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"></rect>
<text x="143" y="80" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IP original</text>
<rect x="270" y="44" width="146" height="62" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<text x="343" y="80" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">ESP</text>
<rect x="420" y="44" width="496" height="62" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<text x="668" y="80" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Carga útil protegida</text>
<g transform="translate(450 75) scale(0.38)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#009254" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#009254"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<g transform="translate(1090 76) scale(0.55)" data-lib="eye"><path d="M-34 0 C-18 -24 18 -24 34 0 C18 24 -18 24 -34 0 Z" fill="#ebedf0" stroke="#364e6c" stroke-width="3"></path><circle cx="0" cy="0" r="9" fill="#364e6c"></circle></g>
<text x="1085" y="106" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Las direcciones IP</text>
<text x="1085" y="123.061" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">permanecen visibles</text>
<text x="20" y="160" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Modo túnel</text>
<rect x="20" y="174" width="196" height="62" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<text x="118" y="210" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IP nuevo</text>
<rect x="220" y="174" width="146" height="62" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<text x="293" y="210" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">ESP</text>
<rect x="370" y="174" width="546" height="62" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<text x="643" y="210" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IP original + carga útil protegidos</text>
<g transform="translate(400 205) scale(0.38)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#009254" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#009254"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<g transform="translate(1090 206) scale(0.55)" data-lib="eye"><path d="M-34 0 C-18 -24 18 -24 34 0 C18 24 -18 24 -34 0 Z" fill="#fcebe6" stroke="#dd3a00" stroke-width="3"></path><circle cx="0" cy="0" r="9" fill="#dd3a00"></circle></g>
<text x="1085" y="236" font-size="10.349pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Solo se ven las IP de los</text>
<text x="1085" y="253.061" font-size="10.349pt" font-weight="400" fill="#7c2d12" text-anchor="middle">equipos VPN</text>
<rect x="20" y="300" width="1160" height="40" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="325.25" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Transporte: host a host y GRE sobre IPsec · Túnel: modo habitual de la VPN sitio a sitio</text>
</g></g><text x="600" y="378.826" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 8.8. Modos transporte y túnel de IPsec.</text></svg>
</div>

La arquitectura de IPsec y su uso en las redes privadas virtuales se desarrollan en la sección 9.2. La negociación de parámetros y el establecimiento de asociaciones de seguridad (SA) pueden realizarse mediante IKEv2 (RFC 7296), que sustituyó a IKEv1 (RFC 2409), declarado obsoleto (*deprecated*) por el RFC 9395. IKEv2 incorpora un intercambio más eficiente y admite extensiones como MOBIKE (RFC 4555), que permiten movilidad de los extremos.

En nuevas implementaciones debe preferirse IKEv2; IKEv1 solo debería mantenerse cuando exista una necesidad de interoperabilidad heredada y se haya evaluado su riesgo.

### Componentes de IPsec

#### AH (Authentication Header)

Proporciona integridad y autenticación del origen para el datagrama IP, así como protección antirrepetición cuando se habilita. Protege la carga útil y los campos de la cabecera IP que son inmutables o cuyo valor al llegar puede predecirse, incluidas normalmente las direcciones de origen y destino; no cifra el contenido. Actualmente se utiliza mucho menos que ESP.

#### ESP (Encapsulating Security Payload)

Proporciona confidencialidad y, según el modo y los algoritmos negociados, integridad y autenticación del origen. Cuando se usan algoritmos AEAD, la autenticación está integrada en el cifrado; ESP es el protocolo IPsec más usado en despliegues actuales.

#### IKE (Internet Key Exchange)

Protocolo para establecer asociaciones de seguridad (SA) de forma dinámica, autenticar los extremos y negociar claves. IKEv2 es la versión moderna.

### Intercambios de IKEv2 para establecer las SA

#### Intercambios iniciales: IKE_SA_INIT e IKE_AUTH

IKE_SA_INIT negocia los parámetros criptográficos de la IKE SA, intercambia nonces y valores Diffie-Hellman. A continuación, IKE_AUTH autentica a los extremos y establece la primera Child SA para proteger el tráfico IP.

Los modos principal (6 mensajes) y agresivo (3 mensajes) pertenecen a IKEv1 y no existen en IKEv2.

#### CREATE_CHILD_SA: SA adicionales y renovación

El intercambio CREATE_CHILD_SA permite negociar Child SA adicionales y renovar las asociaciones de seguridad existentes. Los parámetros incluyen los algoritmos, las claves y los selectores de tráfico (*traffic selectors*). La primera Child SA se establece durante IKE_AUTH. La Figura 8.9 resume estos intercambios de IKEv2.

<div class="diagram" id="figura-8-09" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g809" viewBox="0 0 1200 312.080" role="img" aria-labelledby="g809-title">
<title id="g809-title">Fases de IKEv2 y establecimiento de las SA</title>
<defs><marker id="g809m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g809n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g809-c" transform="translate(-8.781 -8.770) scale(1.0146)"><g transform="translate(0 0)"><rect x="70" y="20" width="240" height="100" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(190 70) scale(1)" data-lib="key"><g stroke="#003ecc" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="-22" cy="0" r="12" fill="#bfcff2"></circle><path d="M-10 0 H34 M24 0 V12 M14 0 V9"></path></g></g>
<text x="190" y="139" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Fase 1 · IKE SA</text>
<text x="190" y="159.231" font-size="10.349pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">IKE_SA_INIT: algoritmos, Diffie-Hellman y nonces;</text>
<text x="190" y="177.085" font-size="10.349pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">IKE_AUTH: autenticación</text>
<line x1="314" y1="70" x2="476" y2="70" stroke="#364e6c" stroke-width="2" marker-end="url(#g809m)"></line>
<rect x="480" y="20" width="240" height="100" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(600 70) scale(1)" data-lib="shield"><path d="M 0 -26 L 22 -17 L 22 2 C 22 16 0 26 0 26 C 0 26 -22 16 -22 2 L -22 -17 Z" fill="#009254" stroke="#009254" stroke-width="2"></path><path d="M-10 0 L-3 8 L11 -9" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="600" y="139" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Fase 2 · Child SA</text>
<text x="600" y="159.231" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="middle">SA de IPsec (ESP o AH),</text>
<text x="600" y="177.08" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="middle">cifrados, claves y selectors</text><line x1="724" y1="70" x2="886" y2="70" stroke="#364e6c" stroke-width="2" marker-end="url(#g809m)"></line>
<rect x="890" y="20" width="240" height="100" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(1010 70) scale(1)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#7c3aed" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#7c3aed"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<text x="1010" y="139" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Tráfico protegido</text>
<text x="1010" y="159.231" font-size="10.349pt" font-weight="400" fill="#5b21b6" text-anchor="middle">datos de usuario cifrados</text>
<text x="1010" y="177.08" font-size="10.349pt" font-weight="400" fill="#5b21b6" text-anchor="middle">y autenticados con ESP</text><rect x="20" y="212" width="1160" height="52" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="243.25" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">La primera Child SA se crea durante IKE_AUTH; CREATE_CHILD_SA negocia SA adicionales y cambios de claves · IKEv2 (RFC 7296) sustituye al deprecado IKEv1 (RFC 9395)</text>
</g></g><text x="600" y="295.719" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 8.9. Fases de IKEv2 y establecimiento de las SA.</text></svg>
</div>

IPsec es ampliamente soportado en *routers*, *firewalls* y sistemas operativos (*Linux* con StrongSwan, *Windows*, *macOS*). Es la base de las VPN L2TP/IPsec, IKEv2/IPsec y otras arquitecturas de VPN modernas; en despliegues actuales también coexiste con SSL VPN, WireGuard y soluciones *Zero Trust*.

## 8.7 AMENAZAS DE RED

Las redes están expuestas a amenazas que pueden comprometer su funcionamiento.

Se considera amenaza cualquier evento, acción o condición, accidental o intencionada, con potencial para explotar una vulnerabilidad y afectar la confidencialidad, integridad o disponibilidad de un sistema o una red.

### Clasificación de amenazas según su naturaleza

#### Ataques pasivos

No modifican datos, solo los observan o capturan. Incluyen:

- Captura pasiva de tráfico en medios o redes accesibles, por ejemplo, redes Wi-Fi sin cifrado o segmentos compartidos.
- Análisis de tráfico (observación de patrones de comunicación sin leer el contenido).

#### Ataques activos

Modifican, interrumpen o fabrican tráfico. Incluyen:

- Intercepción y modificación: *man-in-the-middle* (MITM), secuestro de sesión.
- Denegación de servicio (DoS/DDoS): inundación de conexiones (SYN flood), de ancho de banda (UDP flood) o explotación de vulnerabilidades para colapsar el servicio.
- Suplantación de identidad (*spoofing*): IP *spoofing*, MAC *spoofing*, ARP *spoofing*.
- Ataques contra aplicaciones accesibles por red: SQL injection en interfaces web e inyección de comandos. Aunque se explotan a través de servicios de red, corresponden a la capa de aplicación y no a un ataque propio de los protocolos de red.
- *Malware* propagado por red: gusanos (*worms*), *ransomware*, *botnets*.

#### Amenazas específicas en redes

- Fragmentación ofensiva: envío de paquetes IP fragmentados de forma maliciosa para evadir filtros o causar problemas en el reensamblaje.
- Ataques a protocolos de enrutamiento: inyección de rutas falsas (*route injection*) para desviar tráfico.
- Ataques a DNS: *cache poisoning* (envenenamiento de caché DNS), DDoS a servidores DNS, túneles DNS.
- Ataques de capa 2: VLAN hopping, ataques STP (cambio de *root bridge*), tormentas de *broadcast*.

La Tabla 8.6 resume la clasificación de las amenazas de red según su naturaleza e impacto, lo que orienta la elección del control que corresponde a cada una.

<div class="diagram tabla-svg" id="tabla-8-6" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 343" role="img" aria-labelledby="t39-title"><title id="t39-title">Tabla 8.6. Clasificación de las amenazas de red.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="110.4" y="20.0" dominant-baseline="central" text-anchor="middle">Categoría</text>
<text class="tb-ht" x="453.7" y="20.0" dominant-baseline="central" text-anchor="middle">Ejemplos</text>
<text class="tb-ht" x="943.4" y="20.0" dominant-baseline="central" text-anchor="middle">Impacto o propósito del ataque</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Ataques pasivos</text>
<text class="tb-tx" x="232.7" y="60.8" dominant-baseline="central">Escucha de tráfico, captura de credenciales y análisis</text>
<text class="tb-tx" x="232.7" y="83.5" dominant-baseline="central">de tráfico.</text>
<text class="tb-tx" x="698.8" y="60.8" dominant-baseline="central">Obtienen información sin modificar directamente la</text>
<text class="tb-tx" x="698.8" y="83.5" dominant-baseline="central">comunicación.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Ataques activos</text>
<text class="tb-tx" x="232.7" y="124.2" dominant-baseline="central">DoS, DDoS, suplantación, inyección de paquetes y</text>
<text class="tb-tx" x="232.7" y="147.0" dominant-baseline="central">malware.</text>
<text class="tb-tx" x="698.8" y="135.6" dominant-baseline="central">Modifican, interrumpen o fabrican tráfico y comunicaciones.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">Ataques específicos de</text>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">red</text>
<text class="tb-tx" x="232.7" y="187.8" dominant-baseline="central">Fragmentación ofensiva, inyección de rutas y ataques</text>
<text class="tb-tx" x="232.7" y="210.5" dominant-baseline="central">DNS.</text>
<text class="tb-tx" x="698.8" y="187.8" dominant-baseline="central">Pueden evadir filtros, desviar tráfico o alterar la resolución de</text>
<text class="tb-tx" x="698.8" y="210.5" dominant-baseline="central">nombres.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="262.6" dominant-baseline="central">Ataques de capa 2</text>
<text class="tb-tx" x="232.7" y="251.2" dominant-baseline="central">VLAN hopping, manipulación de STP y tormentas de</text>
<text class="tb-tx" x="232.7" y="274.0" dominant-baseline="central">broadcast.</text>
<text class="tb-tx" x="698.8" y="251.2" dominant-baseline="central">Alteran la conmutación local o afectan la disponibilidad del</text>
<text class="tb-tx" x="698.8" y="274.0" dominant-baseline="central">segmento.</text>
<text class="tb-cap" x="600.0" y="320.8" text-anchor="middle">Tabla 8.6. Clasificación de las amenazas de red.</text></svg>
</div>

La mitigación de amenazas consiste en implementar defensas como *firewalls*, IDS/IPS, segmentación (VLAN), cifrado, autenticación fuerte, actualizaciones de seguridad y monitorización continua.

## 8.8 SEGURIDAD EN CAPAS

Ninguna medida de seguridad es infalible por sí sola.

Un *firewall* puede tener una regla mal configurada; un servidor puede tener una vulnerabilidad desconocida; el enfoque de seguridad en capas (*defense in depth*) reconoce esta realidad y propone implementar múltiples mecanismos, de manera que, si una capa falla, las otras sigan limitando el riesgo.

La seguridad en capas es un modelo de protección que emplea múltiples controles de seguridad superpuestos (físicos, técnicos, administrativos) en diferentes niveles de la arquitectura de red y sistemas, con el objetivo de que un fallo en una capa no comprometa toda la seguridad.

La implementación de múltiples capas, coherentes con el análisis de riesgos y las necesidades del negocio, proporciona una postura de seguridad más resistente a fallos individuales. A continuación se describen las capas que suelen encontrarse en una red empresarial.

### Capas típicas en una red empresarial

#### Perímetro externo

*Firewalls* de borde, sistemas de prevención de intrusiones (IPS), filtrado de tráfico malicioso.

#### Segmentación interna

VLAN, ACL en *switches*, *firewalls* internos que aíslan departamentos o zonas.

#### Seguridad de endpoints

Antivirus, EDR (*Endpoint Detection and Response*), políticas de actualización, control de aplicaciones.

#### Seguridad de la red interna

Detección de anomalías, inspección de tráfico este-oeste (entre servidores), microsegmentación.

#### Seguridad de datos

Cifrado en tránsito (TLS, IPsec) y en reposo, gestión de claves.

La Figura 8.10 dispone las capas de la defensa en profundidad de modo que el fallo de una no deje a los recursos protegidos sin otra barrera.

<div class="diagram" id="figura-8-10" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g810" viewBox="0 0 1200 437.889" role="img" aria-labelledby="g810-title">
<title id="g810-title">Capas de la defensa en profundidad</title>
<defs><marker id="g810m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g810n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g810-c" transform="translate(-8.803 -8.771) scale(1.0147)"><g transform="translate(0 0)"><rect x="20" y="20" width="570" height="64" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"></rect>
<g transform="translate(72 52) scale(0.5)" data-lib="doc"><g stroke="#364e6c" stroke-width="3" fill="#ffffff"><path d="M-22 -32 H8 L24 -16 V32 H-22 Z"></path><path d="M8 -32 V-16 H24" fill="#ebedf0"></path><path d="M-12 -4h24M-12 8h24M-12 20h14" stroke-width="3" fill="none" stroke-linecap="round"></path></g></g>
<text x="128" y="58" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Políticas y formación</text>
<rect x="540" y="39" width="34" height="26" rx="4" fill="#cdd3da" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="557" y="56.9" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1</text>
<rect x="20" y="96" width="570" height="64" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<g transform="translate(72 128) scale(0.5)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#dd3a00"></rect></g>
<text x="128" y="134" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Seguridad física</text>
<rect x="540" y="115" width="34" height="26" rx="4" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.6"></rect>
<text x="557" y="132.9" font-size="10.348pt" font-weight="700" fill="#7c2d12" text-anchor="middle">2</text>
<rect x="20" y="172" width="570" height="64" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(72 204) scale(0.5)" data-lib="shield"><path d="M 0 -26 L 22 -17 L 22 2 C 22 16 0 26 0 26 C 0 26 -22 16 -22 2 L -22 -17 Z" fill="#d40000" stroke="#d40000" stroke-width="2"></path><path d="M-10 0 L-3 8 L11 -9" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="128" y="210" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Perímetro externo</text>
<rect x="540" y="191" width="34" height="26" rx="4" fill="#f4bfbf" stroke="#d40000" stroke-width="1.6"></rect>
<text x="557" y="208.9" font-size="10.348pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">3</text>
<rect x="20" y="248" width="570" height="64" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(72 280) scale(0.5)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#7c3aed" stroke-width="3"></rect><rect x="-46.0" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="-33.5" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="-21.0" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="-8.5" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="4.0" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="16.5" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="29.0" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="41.5" y="-4" width="9" height="12" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><circle cx="-44" cy="-15" r="2.5" fill="#7c3aed"></circle><circle cx="-24" cy="-15" r="2.5" fill="#7c3aed"></circle><circle cx="-4" cy="-15" r="2.5" fill="#7c3aed"></circle><circle cx="16" cy="-15" r="2.5" fill="#7c3aed"></circle><circle cx="36" cy="-15" r="2.5" fill="#7c3aed"></circle></g>
<text x="128" y="286" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Segmentación interna</text>
<rect x="540" y="267" width="34" height="26" rx="4" fill="#decefa" stroke="#7c3aed" stroke-width="1.6"></rect>
<text x="557" y="284.9" font-size="10.348pt" font-weight="700" fill="#5b21b6" text-anchor="middle">4</text>
<rect x="20" y="324" width="570" height="64" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(72 356) scale(0.5)" data-lib="nodes"><g stroke="#003ecc" stroke-width="3" fill="none"><path d="M0 -22 L-22 14 M0 -22 L22 14 M-22 14 H22"></path></g><circle cx="0" cy="-22" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="3"></circle><circle cx="-22" cy="14" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="3"></circle><circle cx="22" cy="14" r="9" fill="#bfcff2" stroke="#003ecc" stroke-width="3"></circle></g>
<text x="128" y="362" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Seguridad de la red interna</text>
<rect x="540" y="343" width="34" height="26" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="557" y="360.9" font-size="10.348pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">5</text>
<rect x="610" y="20" width="570" height="83" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(662 61.5) scale(0.5)" data-lib="pc"><g stroke="#009254" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#e6f4ee" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="718" y="67.5" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Seguridad de endpoints</text>
<rect x="1130" y="48.5" width="34" height="26" rx="4" fill="#bfe4d4" stroke="#009254" stroke-width="1.6"></rect>
<text x="1147" y="66.4" font-size="10.348pt" font-weight="700" fill="#065f46" text-anchor="middle">6</text>
<rect x="610" y="115" width="570" height="83" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(662 156.5) scale(0.5)" data-lib="db"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><path d="M-30 -24 V24 C-30 36 30 36 30 24 V-24"></path><ellipse cx="0" cy="-24" rx="30" ry="11" fill="#fbe6e6"></ellipse><path d="M-30 -4 C-30 8 30 8 30 -4" fill="none"></path><path d="M-30 14 C-30 26 30 26 30 14" fill="none"></path></g></g>
<text x="718" y="162.5" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Seguridad de datos</text>
<rect x="1130" y="143.5" width="34" height="26" rx="4" fill="#f4bfbf" stroke="#d40000" stroke-width="1.6"></rect>
<text x="1147" y="161.4" font-size="10.348pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">7</text>
<rect x="610" y="210" width="570" height="83" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(662 251.5) scale(0.5)" data-lib="user"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><circle cx="0" cy="-18" r="14" fill="#e6ecfa"></circle><path d="M-30 30 C-30 4 -18 0 0 0 C18 0 30 4 30 30 Z" fill="#e6ecfa"></path></g></g>
<text x="718" y="257.5" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Autenticación y control de acceso</text>
<rect x="1130" y="238.5" width="34" height="26" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="1147" y="256.4" font-size="10.348pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">8</text>
<rect x="610" y="305" width="570" height="83" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(662 346.5) scale(0.5)" data-lib="eye"><path d="M-34 0 C-18 -24 18 -24 34 0 C18 24 -18 24 -34 0 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3"></path><circle cx="0" cy="0" r="9" fill="#009254"></circle></g>
<text x="718" y="352.5" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Monitorización y respuesta</text>
<rect x="1130" y="333.5" width="34" height="26" rx="4" fill="#bfe4d4" stroke="#009254" stroke-width="1.6"></rect>
<text x="1147" y="351.4" font-size="10.348pt" font-weight="700" fill="#065f46" text-anchor="middle">9</text>
</g></g><text x="600" y="421.547" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 8.10. Capas de la defensa en profundidad.</text></svg>
</div>

#### Autenticación y control de acceso

Autenticación multifactor (MFA), AAA (RADIUS/TACACS+), control de acceso basado en roles (RBAC).

#### Monitorización y respuesta

SIEM (*Security Information and Event Management*), sistemas de detección de intrusiones (IDS), análisis de *logs*, respuesta a incidentes.

#### Seguridad física

Control de acceso a salas de servidores, racks cerrados, videovigilancia.

#### Políticas y formación

Capacitación de usuarios, políticas de seguridad, planes de continuidad.

### Ventajas del modelo

- Redundancia en seguridad: la superposición de controles puede elevar el esfuerzo necesario para un ataque y reducir la probabilidad de que un fallo aislado comprometa todo el sistema.
- Mitigación de riesgos: reduce el impacto de configuraciones incorrectas o vulnerabilidades desconocidas.
- Visibilidad: cada capa puede generar *logs* que ayuden en la detección temprana.

Ningún control de los descritos protege por sí solo: cada capa compensa las limitaciones de las demás, y su valor depende de que se configure, se supervise y se pruebe de forma continua. La seguridad en redes es, por ello, un proceso integrado que combina tecnologías, políticas y personas, y no un producto único.
