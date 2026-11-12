<p class="tema-num">TEMA 07</p>

# PROTOCOLOS Y SERVICIOS DE RED

La comunicación en redes no depende solo de la infraestructura física ni del direccionamiento lógico, sino de un conjunto de reglas estandarizadas que regulan el intercambio de información entre sistemas. Estas reglas se denominan protocolos de red y constituyen el elemento esencial de la interoperabilidad entre dispositivos de diferentes fabricantes, sistemas operativos y propósitos.

Con el direccionamiento y el enrutamiento establecidos, el tráfico puede alcanzar su destino. Los protocolos y servicios de este tema determinan qué ocurre con él al llegar: desde el transporte fiable hasta la resolución de nombres y la traducción de direcciones.

Un protocolo define el formato de los mensajes, la sincronización, los procedimientos de control de errores y las reglas de inicio y fin de la comunicación. Sobre estos protocolos se construyen servicios de red, que son las aplicaciones o funciones disponibles para los usuarios finales. El mapa del tema se presenta en la Figura 7.1.

<div class="diagram" id="figura-7-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g701" viewBox="0 0 1200 412" role="img" aria-labelledby="g701-title">
<title id="g701-title">Mapa del Tema 7</title>
<defs></defs>
<g id="g701-c" transform="translate(20 20)"><rect x="0" y="0" width="272" height="158" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="272" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="136" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">7.1 TCP y UDP</text>
<g transform="translate(136 78.64) scale(0.7)" data-lib="packet"><rect x="-38" y="-20" width="76" height="40" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><rect x="-38" y="-20" width="26" height="40" fill="#bfcff2" stroke="#003ecc" stroke-width="3"></rect><path d="M-4 -6h30M-4 6h20" stroke="#003ecc" stroke-width="3" stroke-linecap="round"></path></g>
<text x="136" y="139" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Protocolos de transporte</text>
<rect x="296" y="0" width="272" height="158" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="296" y1="34" x2="568" y2="34" stroke="#dd3a00" stroke-width="1.5"/>
<text x="432" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">7.2 MSS</text>
<g transform="translate(432 78.64) scale(0.7)" data-lib="gauge"><path d="M-30 18 A30 30 0 1 1 30 18" fill="none" stroke="#dd3a00" stroke-width="4" stroke-linecap="round"></path><path d="M0 14 L16 -12" stroke="#dd3a00" stroke-width="4" stroke-linecap="round"></path><circle cx="0" cy="14" r="5" fill="#dd3a00"></circle></g>
<text x="432" y="139" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Tamaño máximo de segmento</text>
<rect x="592" y="0" width="272" height="158" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="592" y1="34" x2="864" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="728" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">7.3 HTTP, HTTPS, FTP y SMTP</text>
<g transform="translate(728 78.64) scale(0.7)" data-lib="app"><rect x="-38" y="-28" width="76" height="56" rx="5" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-38" y="-28" width="76" height="16" rx="4" fill="#bfe4d4" stroke="#009254" stroke-width="3"/><circle cx="-28" cy="-20" r="2.5" fill="#009254"/><circle cx="-20" cy="-20" r="2.5" fill="#009254"/><path d="M-26 0h30M-26 12h46" stroke="#009254" stroke-width="3" stroke-linecap="round" fill="none"/></g>
<text x="728" y="139" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Protocolos de aplicación</text>
<rect x="888" y="0" width="272" height="158" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="888" y1="34" x2="1160" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="1024" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">7.4 DNS</text>
<g transform="translate(1024 78.64) scale(0.7)" data-lib="search"><circle cx="-6" cy="-6" r="20" fill="#f2ebfd" stroke="#7c3aed" stroke-width="4"></circle><path d="M9 9 L28 28" stroke="#7c3aed" stroke-width="6" stroke-linecap="round"></path></g>
<text x="1024" y="139" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Resolución de nombres</text>
<rect x="0" y="182" width="272" height="158" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="216" x2="272" y2="216" stroke="#003ecc" stroke-width="1.5"/>
<text x="136" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">7.5 DHCP</text>
<g transform="translate(136 260.64) scale(0.7)" data-lib="download"><g fill="none" stroke="#003ecc" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M0 -28 V10 M-14 -4 L0 10 L14 -4"></path><path d="M-28 12 V26 H28 V12"></path></g></g>
<text x="136" y="321" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Asignación dinámica de direcciones</text>
<rect x="296" y="182" width="272" height="158" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="296" y1="216" x2="568" y2="216" stroke="#d40000" stroke-width="1.5"/>
<text x="432" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">7.6 NAT y PAT</text>
<g transform="translate(432 260.64) scale(0.7)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#fbe6e6" stroke="#d40000" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#d40000"></circle></g>
<text x="432" y="321" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Traducción de direcciones</text>
<rect x="592" y="182" width="272" height="158" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="592" y1="216" x2="864" y2="216" stroke="#364e6c" stroke-width="1.5"/>
<text x="728" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">7.7 IGMP</text>
<g transform="translate(728 260.64) scale(0.7)" data-lib="fork"><g fill="none" stroke="#364e6c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-30 0 H-6 L20 -18 M-6 0 L20 18"></path><path d="M12 -26 L22 -18 L12 -10 M12 10 L22 18 L12 26"></path></g><circle cx="-30" cy="0" r="5" fill="#364e6c"></circle></g>
<text x="728" y="321" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Gestión de grupos multicast</text>
<rect x="888" y="182" width="272" height="158" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="888" y1="216" x2="1160" y2="216" stroke="#009254" stroke-width="1.5"/>
<text x="1024" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">7.8 IGMP snooping</text>
<g transform="translate(1024 260.64) scale(0.7)" data-lib="eye"><path d="M-34 0 C-18 -24 18 -24 34 0 C18 24 -18 24 -34 0 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3"></path><circle cx="0" cy="0" r="9" fill="#009254"></circle></g>
<text x="1024" y="321" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Multicast en el switch</text></g><text x="600" y="394" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 7.1. Mapa del Tema 7.</text></svg>
</div>

## 7.1 TCP/UDP

En la capa de transporte del modelo TCP/IP (equivalente a la capa 4 del modelo OSI), dos protocolos predominantes ofrecen diferentes niveles de fiabilidad y eficiencia: TCP (*Transmission Control Protocol*) y UDP (*User Datagram Protocol*).

La elección entre uno u otro depende de los requisitos de la aplicación: TCP ofrece entrega fiable y ordenada, además de control de flujo y congestión; UDP ofrece un transporte más simple, sin establecer una conexión ni garantizar la entrega o el orden de los datagramas. El contraste entre ambos enfoques se representa en la Figura 7.2.

<div class="diagram" id="figura-7-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g702" viewBox="0 0 1200 510.942" role="img" aria-labelledby="g702-title">
<title id="g702-title">Establecimiento de una conexión TCP frente al envío de datagramas UDP</title>
<defs><marker id="g702m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g702n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g702-c" transform="translate(-8.797 -8.771) scale(1.0147)"><g transform="translate(0 0)"><rect x="20" y="20" width="570" height="340" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<rect x="610" y="20" width="570" height="340" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<text x="305" y="46" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">TCP · orientado a conexión</text>
<text x="895" y="46" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">UDP · sin conexión</text>
<rect x="45" y="62" width="170" height="64" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(93.19 94) scale(0.6)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="165.5" y="98" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cliente</text>
<line x1="130" y1="126" x2="130" y2="300" stroke="#d40000" stroke-width="1.8" stroke-dasharray="6,5"></line>
<rect x="395" y="62" width="170" height="64" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(439.16 94) scale(0.6)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="-27.5" r="4" fill="#009254"></circle><path d="M-34 -27.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="1.5" r="4" fill="#009254"></circle><path d="M-34 1.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="30.5" r="4" fill="#009254"></circle><path d="M-34 30.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path></g>
<text x="514.5" y="98" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Servidor</text>
<line x1="480" y1="126" x2="480" y2="300" stroke="#009254" stroke-width="1.8" stroke-dasharray="6,5"></line>
<rect x="635" y="62" width="170" height="64" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(684.8 94) scale(0.6)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="755.5" y="98" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Emisor</text>
<line x1="720" y1="126" x2="720" y2="300" stroke="#d40000" stroke-width="1.8" stroke-dasharray="6,5"></line>
<rect x="985" y="62" width="170" height="64" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(1024.33 94) scale(0.6)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="-27.5" r="4" fill="#009254"></circle><path d="M-34 -27.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="1.5" r="4" fill="#009254"></circle><path d="M-34 1.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="30.5" r="4" fill="#009254"></circle><path d="M-34 30.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path></g>
<text x="1104.5" y="98" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Receptor</text>
<line x1="1070" y1="126" x2="1070" y2="300" stroke="#009254" stroke-width="1.8" stroke-dasharray="6,5"></line>
<line x1="130" y1="176" x2="480" y2="176" stroke="#d40000" stroke-width="2.5" marker-end="url(#g702m)"></line>
<rect x="272.25" y="151" width="65.51" height="22" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.6"></rect>
<text x="305" y="166.67" font-size="10.348pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">1 · SYN</text>
<line x1="480" y1="226" x2="130" y2="226" stroke="#009254" stroke-width="2.5" marker-end="url(#g702m)"></line>
<rect x="254.52" y="201" width="100.96" height="22" rx="4" fill="#ffffff" stroke="#009254" stroke-width="1.6"></rect>
<text x="305" y="216.67" font-size="10.348pt" font-weight="700" fill="#065f46" text-anchor="middle">2 · SYN-ACK</text>
<line x1="130" y1="276" x2="480" y2="276" stroke="#d40000" stroke-width="2.5" marker-end="url(#g702m)"></line>
<rect x="271.44" y="251" width="67.12" height="22" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.6"></rect>
<text x="305" y="266.67" font-size="10.348pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">3 · ACK</text>
<line x1="720" y1="176" x2="1070" y2="176" stroke="#dd3a00" stroke-width="2.5" marker-end="url(#g702m)"></line>
<rect x="839.69" y="151" width="110.62" height="22" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="1.6"></rect>
<text x="895" y="166.67" font-size="10.348pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Datagrama 1</text>
<line x1="720" y1="226" x2="1070" y2="226" stroke="#dd3a00" stroke-width="2.5" marker-end="url(#g702m)"></line>
<rect x="838.88" y="201" width="112.24" height="22" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="1.6"></rect>
<text x="895" y="216.67" font-size="10.348pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Datagrama 2</text>
<line x1="720" y1="276" x2="1070" y2="276" stroke="#dd3a00" stroke-width="2.5" marker-end="url(#g702m)"></line>
<rect x="838.88" y="251" width="112.24" height="22" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="1.6"></rect>
<text x="895" y="266.67" font-size="10.348pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Datagrama 3</text>
<text x="305" y="328" font-size="10.348pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Three-way handshake y después datos</text>
<text x="895" y="328" font-size="10.348pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Sin sesión previa ni garantías de entrega u orden</text>
<rect x="20" y="380" width="570" height="80" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(70 420) scale(0.7)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#003ecc" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#003ecc"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<text x="120" y="413" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Entrega fiable y ordenada, con control de flujo y congestión</text>
<text x="120" y="436" font-size="10.348pt" font-weight="400" fill="#1e3a8a" text-anchor="start">HTTP/HTTPS, FTP, SMTP, SSH, bases de datos remotas</text>
<rect x="610" y="380" width="570" height="80" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<g transform="translate(660 420) scale(0.7)" data-lib="bolt"><path d="M6 -32 L-20 4 H-2 L-8 32 L22 -6 H4 Z" fill="#fcebe6" stroke="#dd3a00" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="710" y="413" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Sin garantías de entrega, orden ni control de flujo</text>
<text x="710" y="436" font-size="10.348pt" font-weight="400" fill="#7c2d12" text-anchor="start">DNS, RTP, VoIP, juegos en línea, SNMP, DHCP</text>
</g></g><text x="600" y="494.597" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 7.2. Establecimiento de una conexión TCP frente al envío de datagramas UDP.</text></svg>
</div>

El establecimiento de una conexión TCP mediante los mensajes SYN, SYN-ACK y ACK, en contraste con el envío de datagramas UDP sin establecimiento previo de conexión, se representa en la Figura 7.2.

### TCP

TCP es un protocolo orientado a conexión que proporciona un flujo de bytes fiable y ordenado entre aplicaciones, junto con mecanismos de retransmisión, control de flujo y control de congestión.

Antes del intercambio ordinario de datos, los extremos establecen la conexión mediante el *three-way handshake* (SYN, SYN-ACK y ACK).

Se usa, entre otros casos, en HTTP/1.1, HTTP/2, FTP, SMTP, SSH, Telnet y numerosas conexiones de bases de datos.

HTTP/3 es una excepción importante: usa QUIC sobre UDP.

### UDP

A diferencia de TCP, UDP es un protocolo no orientado a conexión que envía datagramas sin establecer una sesión previa, sin garantías de entrega, orden o control de flujo.

Aplicaciones típicas: DNS (consultas), *streaming* de audio/video en tiempo real (RTP), VoIP, juegos en línea, SNMP, DHCP.

La Tabla 7.1 contrasta TCP y UDP en conexión, entrega, control e integridad. La diferencia de fondo es que TCP ofrece fiabilidad a costa de mantener estado y añadir latencia, mientras que UDP deja esa responsabilidad a la aplicación.

<div class="diagram tabla-svg" id="tabla-7-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 470" role="img" aria-labelledby="t28-title"><title id="t28-title">Tabla 7.1. Comparación entre TCP y UDP.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="95.3" y="20.0" dominant-baseline="central" text-anchor="middle">Característica</text>
<text class="tb-ht" x="418.9" y="20.0" dominant-baseline="central" text-anchor="middle">TCP</text>
<text class="tb-ht" x="923.6" y="20.0" dominant-baseline="central" text-anchor="middle">UDP</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Conexión</text>
<text class="tb-tx" x="202.7" y="60.8" dominant-baseline="central">Orientado a conexión; establece una conexión lógica</text>
<text class="tb-tx" x="202.7" y="83.5" dominant-baseline="central">mediante three-way handshake.</text>
<text class="tb-tx" x="659.1" y="60.8" dominant-baseline="central">Sin conexión; transmite datagramas sin establecer una sesión</text>
<text class="tb-tx" x="659.1" y="83.5" dominant-baseline="central">previa.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Entrega</text>
<text class="tb-tx" x="202.7" y="124.2" dominant-baseline="central">Fiable y ordenada mediante confirmaciones y</text>
<text class="tb-tx" x="202.7" y="147.0" dominant-baseline="central">retransmisiones.</text>
<text class="tb-tx" x="659.1" y="124.2" dominant-baseline="central">No garantiza entrega, ausencia de duplicados ni orden de</text>
<text class="tb-tx" x="659.1" y="147.0" dominant-baseline="central">recepción.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Control</text>
<text class="tb-tx" x="202.7" y="199.1" dominant-baseline="central">Incorpora control de flujo y control de congestión.</text>
<text class="tb-tx" x="659.1" y="187.8" dominant-baseline="central">No incorpora mecanismos generales equivalentes de control de</text>
<text class="tb-tx" x="659.1" y="210.5" dominant-baseline="central">flujo y congestión.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">Integridad de</text>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">transmisión</text>
<text class="tb-tx" x="202.7" y="251.2" dominant-baseline="central">Incorpora checksum para detectar errores en la</text>
<text class="tb-tx" x="202.7" y="274.0" dominant-baseline="central">cabecera y los datos.</text>
<text class="tb-tx" x="659.1" y="251.2" dominant-baseline="central">Incorpora checksum para detectar errores; su uso y</text>
<text class="tb-tx" x="659.1" y="274.0" dominant-baseline="central">obligatoriedad dependen del protocolo IP y del contexto.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="326.1" dominant-baseline="central">Aplicaciones típicas</text>
<text class="tb-tx" x="202.7" y="314.8" dominant-baseline="central">HTTP/1.1, HTTP/2, FTP, SMTP, SSH, Telnet y bases de</text>
<text class="tb-tx" x="202.7" y="337.5" dominant-baseline="central">datos remotas.</text>
<text class="tb-tx" x="659.1" y="314.8" dominant-baseline="central">DNS en consultas habituales, RTP, VoIP, juegos en línea, SNMP y</text>
<text class="tb-tx" x="659.1" y="337.5" dominant-baseline="central">DHCP.</text>
<rect class="tb-to" x="0" y="358.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="389.6" dominant-baseline="central">Otros usos</text>
<text class="tb-tx" x="202.7" y="378.2" dominant-baseline="central">Transporte habitual de múltiples aplicaciones que</text>
<text class="tb-tx" x="202.7" y="401.0" dominant-baseline="central">requieren un flujo fiable.</text>
<text class="tb-tx" x="659.1" y="389.6" dominant-baseline="central">QUIC y HTTP/3 usan UDP como transporte subyacente.</text>
<text class="tb-cap" x="600.0" y="447.8" text-anchor="middle">Tabla 7.1. Comparación entre TCP y UDP.</text></svg>
</div>

##### TCP/UDP: *sockets* en escucha mediante ss

Para inspeccionar los puertos y servicios en escucha en un sistema *Linux*, se usa el comando ss:

```text
Networking@SecOpsMX:~$ sudo ss -tulpn
Netid State Recv-Q Send-Q Local Address:Port Peer Address:Port Process
udp UNCONN 0 0 127.0.0.53%lo:53 0.0.0.0:*
    users:(("systemd-resolve",pid=567,fd=13))
udp UNCONN 0 0 0.0.0.0:67 0.0.0.0:* users:(("dhcpd",pid=1234,fd=6))
udp UNCONN 0 0 0.0.0.0:123 0.0.0.0:* users:(("ntpd",pid=1567,fd=5))
tcp LISTEN 0 128 0.0.0.0:22 0.0.0.0:* users:(("sshd",pid=789,fd=3))
tcp LISTEN 0 128 0.0.0.0:80 0.0.0.0:*
    users:(("nginx",pid=1011,fd=6))
tcp LISTEN 0 128 0.0.0.0:443 0.0.0.0:*
    users:(("nginx",pid=1011,fd=7))
tcp LISTEN 0 151 127.0.0.1:3306 0.0.0.0:*
    users:(("mysqld",pid=1345,fd=14))
tcp LISTEN 0 4096 127.0.0.53%lo:53 0.0.0.0:*
    users:(("systemd-resolve",pid=567,fd=14))
```

En el comando anterior (`ss -tulpn`), las opciones significan:

- `-l` muestra solo puertos en escucha (*listening*).
- `-t` y `-u` filtran *sockets* TCP y UDP, respectivamente.
- `-p` muestra los procesos asociados.
- `-n` evita la resolución de nombres.

En la salida de ejemplo pueden observarse servicios como DNS (puerto 53), DHCP (puerto 67 en el servidor), NTP (puerto 123), SSH (puerto 22), HTTP (puerto 80), HTTPS (puerto 443) y MySQL (puerto 3306) en escucha.

## 7.2 MSS

El rendimiento de TCP depende del tamaño de los segmentos. Si un segmento es demasiado grande, puede superar la MTU (*Maximum Transmission Unit*; Tema 3, sección 3.4) de algún enlace intermedio, provocando fragmentación IP o descarte. Para evitarlo, TCP usa el parámetro MSS.

El MSS es la cantidad máxima de datos de aplicación que un segmento TCP puede transportar, sin incluir los encabezados IP y TCP. Cada extremo anuncia su MSS en la opción correspondiente de los segmentos SYN. En IPv4, para una MTU de 1500 bytes y encabezados IP y TCP básicos de 20 bytes cada uno, el valor habitual es 1460 bytes. El MSS anunciado suele calcularse a partir de la MTU de la interfaz de salida; la PMTU efectiva del camino puede ser menor y debe considerarse para evitar que los paquetes excedan el tamaño admitido por algún enlace. La Figura 7.3 ilustra la relación entre MTU y MSS.

<div class="diagram" id="figura-7-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g703" viewBox="0 0 1200 322.555" role="img" aria-labelledby="g703-title">
<title id="g703-title">Trama Ethernet, MTU y cálculo del MSS</title>
<defs><marker id="g703m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g703n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g703-c" transform="translate(-8.796 -8.774) scale(1.0147)"><g transform="translate(0 -11.67)"><rect x="20" y="70" width="160" height="70" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"></rect>
<text x="100" y="94" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Ethernet</text>
<text x="100" y="115.825" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">14 B</text>
<rect x="180" y="70" width="140" height="70" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<text x="250" y="94" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IPv4</text>
<text x="250" y="115.825" font-size="10.348pt" font-weight="700" fill="#5b21b6" text-anchor="middle">20 B</text>
<rect x="320" y="70" width="140" height="70" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<text x="390" y="94" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">TCP</text>
<text x="390" y="115.825" font-size="10.348pt" font-weight="700" fill="#7c2d12" text-anchor="middle">20 B</text>
<rect x="460" y="70" width="600" height="70" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<text x="760" y="94" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Datos · MSS</text>
<text x="760" y="115.825" font-size="10.348pt" font-weight="700" fill="#065f46" text-anchor="middle">1460 B</text>
<rect x="1060" y="70" width="120" height="70" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"></rect>
<text x="1120" y="94" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">FCS</text>
<text x="1120" y="115.825" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">4 B</text>
<line x1="180" y1="56" x2="1000" y2="56" stroke="#003ecc" stroke-width="2" marker-end="url(#g703m)" marker-start="url(#g703n)"></line>
<text x="585" y="46" font-size="10.348pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">MTU · 1500 B (cabeceras IP y TCP + datos)</text>
<rect x="20" y="190" width="370" height="96" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<text x="205" y="214" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">MSS típico en Ethernet</text>
<text x="205" y="236.6" font-size="10.348pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">1500 − 40 = 1460 B</text>
<rect x="415" y="190" width="370" height="96" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<text x="600" y="214" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Con PPPoE</text>
<text x="600" y="236.6" font-size="10.348pt" font-weight="700" fill="#7c2d12" text-anchor="middle">MTU 1492 B · MSS 1452 B</text>
<rect x="810" y="190" width="370" height="96" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<text x="995" y="214" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Jumbo frames</text>
<text x="995" y="236.6" font-size="10.348pt" font-weight="700" fill="#5b21b6" text-anchor="middle">MTU 9000 B · MSS 8960 B o más</text>
</g></g><text x="600" y="306.201" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 7.3. Trama Ethernet, MTU y cálculo del MSS.</text></svg>
</div>

#### Determinación del MSS

El MSS anunciado por un extremo suele derivarse de la MTU de su interfaz de salida.

La *Path MTU Discovery* permite detectar una MTU menor en el camino; los túneles y las encapsulaciones pueden reducirla y hacer necesario ajustar el MSS, por ejemplo mediante *MSS clamping*.

- En Ethernet con MTU 1500 bytes, el MSS típico es 1460 bytes.
- En enlaces PPPoE que reducen la MTU a 1492, el MSS efectivo es 1452 bytes.
- En redes con *jumbo frames* (MTU 9000), el MSS puede ser 8960 o más.

El MSS resulta de restar los encabezados a la MTU del enlace; la Tabla 7.2 lo calcula para Ethernet, PPPoE y *jumbo frames*, y permite comprobar que cualquier encapsulación adicional reduce el tamaño útil del segmento.

<div class="diagram tabla-svg" id="tabla-7-2" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 211" role="img" aria-labelledby="t29-title"><title id="t29-title">Tabla 7.2. MSS típico según la MTU del enlace.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="149.1" y="20.0" dominant-baseline="central" text-anchor="middle">Tipo de enlace</text>
<text class="tb-ht" x="435.2" y="20.0" dominant-baseline="central" text-anchor="middle">MTU habitual</text>
<text class="tb-ht" x="728.7" y="20.0" dominant-baseline="central" text-anchor="middle">MSS IPv4 típico</text>
<text class="tb-ht" x="1042.6" y="20.0" dominant-baseline="central" text-anchor="middle">MSS IPv6 típico</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Ethernet</text>
<text class="tb-tx" x="310.3" y="60.8" dominant-baseline="central">1500 B</text>
<text class="tb-tx" x="584.1" y="60.8" dominant-baseline="central">1460 B</text>
<text class="tb-tx" x="897.2" y="60.8" dominant-baseline="central">1440 B</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">PPPoE</text>
<text class="tb-tx" x="310.3" y="101.5" dominant-baseline="central">1492 B</text>
<text class="tb-tx" x="584.1" y="101.5" dominant-baseline="central">1452 B</text>
<text class="tb-tx" x="897.2" y="101.5" dominant-baseline="central">1432 B</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">Jumbo frames</text>
<text class="tb-tx" x="310.3" y="142.2" dominant-baseline="central">9000 B</text>
<text class="tb-tx" x="584.1" y="142.2" dominant-baseline="central">8960 B</text>
<text class="tb-tx" x="897.2" y="142.2" dominant-baseline="central">8940 B</text>
<text class="tb-cap" x="600.0" y="189.0" text-anchor="middle">Tabla 7.2. MSS típico según la MTU del enlace.</text></svg>
</div>

Nota: los valores de MSS suponen cabeceras IPv4 de 20 bytes o IPv6 de 40 bytes, sin opciones IPv4 ni encabezados de extensión IPv6. La MTU y el MSS efectivos pueden variar por encapsulaciones, túneles y opciones de cabecera. El ajuste de MSS no sustituye la correcta configuración de MTU ni los mecanismos PMTUD/PLPMTUD.

Un MSS adecuado ayuda a evitar que los segmentos TCP excedan la MTU efectiva del camino, reduce la probabilidad de fragmentación IPv4 o descarte de paquetes y puede evitar retransmisiones asociadas a problemas de MTU. No garantiza por sí solo un mayor rendimiento: también influyen la congestión, la latencia y el control de congestión de TCP.

En la práctica, problemas de MSS mal configurados (por ejemplo, en VPN o túneles GRE sin ajuste) producen conexiones que se establecen pero no transfieren datos; esto suele mitigarse mediante *MSS clamping*.

## 7.3 HTTP, HTTPS, FTP Y SMTP

En la capa de aplicación, distintos protocolos proporcionan servicios específicos y usan los protocolos de transporte que mejor se ajustan a sus requisitos. Muchos servicios tradicionales operan sobre TCP, mientras que otros usan UDP; HTTP/3, por ejemplo, usa QUIC sobre UDP. La relación entre los protocolos de aplicación y TLS se representa en la Figura 7.4 (HTTP) y la Figura 8.6 (TLS).

<div class="diagram" id="figura-7-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g704" viewBox="0 0 1200 325.041" role="img" aria-labelledby="g704-title">
<title id="g704-title">Versiones de HTTP y su transporte</title>
<defs><marker id="g704m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g704n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g704-c" transform="translate(-8.774 -8.770) scale(1.0146)"><g transform="translate(0 0)"><rect x="20" y="20" width="360" height="190" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect><line x1="20" y1="54" x2="380" y2="54" stroke="#d40000" stroke-width="1.5"></line>
<text x="200" y="43" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">HTTP/1.1</text>
<g transform="translate(200 112) scale(1.95)" data-lib="plug"><rect x="-14" y="-6" width="28" height="30" rx="3" fill="#fbe6e6" stroke="#d40000" stroke-width="3"></rect><path d="M-9 -6 V-18 M0 -6 V-18 M9 -6 V-18" stroke="#d40000" stroke-width="3" stroke-linecap="round"></path></g>
<rect x="34" y="174" width="332" height="26" rx="4" fill="#f4bfbf" stroke="#d40000" stroke-width="1.6"></rect>
<text x="200" y="191.9" font-size="10.349pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">TCP</text>
<text x="200" y="232" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Conexiones persistentes</text>
<text x="200" y="252" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Pipelining de uso limitado</text>
<text x="200" y="272" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Transferencia fragmentada y mejor caché</text>
<rect x="420" y="20" width="360" height="190" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect><line x1="420" y1="54" x2="780" y2="54" stroke="#003ecc" stroke-width="1.5"></line>
<text x="600" y="43" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">HTTP/2</text>
<g transform="translate(600 112) scale(1.3)" data-lib="layers"><path d="M0 2 L34 14 L0 26 L-34 14 Z" fill="#bfcff2" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -12 L34 0 L0 12 L-34 0 Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -26 L34 -14 L0 -2 L-34 -14 Z" fill="#ffffff" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path></g>
<rect x="434" y="174" width="332" height="26" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="600" y="191.9" font-size="10.349pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">TCP</text>
<text x="600" y="232" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Multiplexación en una conexión</text>
<text x="600" y="252" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Compresión de encabezados (HPACK)</text>
<text x="600" y="272" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Server push (en desuso)</text>
<rect x="820" y="20" width="360" height="190" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect><line x1="820" y1="54" x2="1180" y2="54" stroke="#009254" stroke-width="1.5"></line>
<text x="1000" y="43" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">HTTP/3</text>
<g transform="translate(1000 112) scale(1.3)" data-lib="bolt"><path d="M6 -32 L-20 4 H-2 L-8 32 L22 -6 H4 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path></g>
<rect x="834" y="174" width="332" height="26" rx="4" fill="#bfe4d4" stroke="#009254" stroke-width="1.6"></rect>
<text x="1000" y="191.9" font-size="10.349pt" font-weight="700" fill="#065f46" text-anchor="middle">QUIC sobre UDP</text>
<text x="1000" y="232" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Basado en QUIC (RFC 9114, RFC 9000)</text>
<text x="1000" y="252" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Menor latencia de establecimiento</text>
<text x="1000" y="272" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Sin bloqueo de cabecera de línea</text>
</g></g><text x="600" y="308.676" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 7.4. Versiones de HTTP y su transporte.</text></svg>
</div>

### HTTP

Es un protocolo cliente-servidor para la transferencia de recursos en la *World Wide Web*. Usa un modelo de solicitud-respuesta.

Sus versiones son:

- HTTP/1.1: introduce conexiones persistentes (*keep-alive*), *pipelining* (de uso limitado en la práctica), transferencia fragmentada (*chunked*) y mejor manejo de caché.
- HTTP/2: añade multiplexación de múltiples solicitudes sobre una misma conexión, compresión de encabezados (HPACK) y *server push* (hoy en desuso).
- HTTP/3 usa QUIC sobre UDP (RFC 9114 y RFC 9000). QUIC facilita reducir el tiempo de establecimiento en determinadas condiciones y evita que la pérdida de un paquete en un flujo bloquee la entrega de datos de otros flujos a nivel de transporte.

Cada protocolo de aplicación tiene asociado un puerto habitual y, con él, un perfil de riesgo propio; la Tabla 7.3 reúne ambos datos para HTTP, HTTPS, HTTP/3, FTP y SMTP.

<div class="diagram tabla-svg" id="tabla-7-3" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 429" role="img" aria-labelledby="t30-title"><title id="t30-title">Tabla 7.3. Protocolos de aplicación y puertos habituales.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="51.6" y="20.0" dominant-baseline="central" text-anchor="middle">Protocolo</text>
<text class="tb-ht" x="214.0" y="20.0" dominant-baseline="central" text-anchor="middle">Puerto habitual</text>
<text class="tb-ht" x="490.6" y="20.0" dominant-baseline="central" text-anchor="middle">Función</text>
<text class="tb-ht" x="928.2" y="20.0" dominant-baseline="central" text-anchor="middle">Consideraciones de seguridad</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">HTTP</text>
<text class="tb-tx" x="115.2" y="72.1" dominant-baseline="central">TCP 80</text>
<text class="tb-tx" x="336.8" y="60.8" dominant-baseline="central">Transferencia de páginas y recursos</text>
<text class="tb-tx" x="336.8" y="83.5" dominant-baseline="central">web.</text>
<text class="tb-tx" x="668.3" y="72.1" dominant-baseline="central">Sin cifrado nativo; se recomienda HTTPS.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">HTTPS</text>
<text class="tb-tx" x="115.2" y="135.6" dominant-baseline="central">TCP 443</text>
<text class="tb-tx" x="336.8" y="135.6" dominant-baseline="central">HTTP protegido mediante TLS.</text>
<text class="tb-tx" x="668.3" y="124.2" dominant-baseline="central">Proporciona confidencialidad, integridad y autenticación del</text>
<text class="tb-tx" x="668.3" y="147.0" dominant-baseline="central">servidor cuando está correctamente configurado.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">HTTP/3</text>
<text class="tb-tx" x="115.2" y="187.8" dominant-baseline="central">UDP 443</text>
<text class="tb-tx" x="336.8" y="187.8" dominant-baseline="central">HTTP transportado mediante QUIC.</text>
<text class="tb-tx" x="668.3" y="187.8" dominant-baseline="central">QUIC integra protección criptográfica basada en TLS 1.3.</text>
<rect class="tb-to" x="0" y="208.5" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">FTP</text>
<text class="tb-tx" x="115.2" y="239.9" dominant-baseline="central">TCP 21 (control); TCP 20</text>
<text class="tb-tx" x="115.2" y="262.6" dominant-baseline="central">(datos en modo activo).</text>
<text class="tb-tx" x="336.8" y="239.9" dominant-baseline="central">Transferencia de archivos mediante</text>
<text class="tb-tx" x="336.8" y="262.6" dominant-baseline="central">canales separados de control y datos.</text>
<text class="tb-tx" x="668.3" y="228.5" dominant-baseline="central">Las credenciales pueden viajar en texto claro; se recomienda</text>
<text class="tb-tx" x="668.3" y="251.2" dominant-baseline="central">FTPS o SFTP. En modo pasivo, el canal de datos usa puertos</text>
<text class="tb-tx" x="668.3" y="274.0" dominant-baseline="central">negociados.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="337.5" dominant-baseline="central">SMTP</text>
<text class="tb-tx" x="115.2" y="337.5" dominant-baseline="central">TCP 25, 587 o 465</text>
<text class="tb-tx" x="336.8" y="326.1" dominant-baseline="central">Envío de correo entre servidores y</text>
<text class="tb-tx" x="336.8" y="348.9" dominant-baseline="central">desde clientes.</text>
<text class="tb-tx" x="668.3" y="314.8" dominant-baseline="central">25 se usa principalmente para comunicación MTA-MTA; 587 para</text>
<text class="tb-tx" x="668.3" y="337.5" dominant-baseline="central">envío autenticado desde clientes; 465 para envío con TLS</text>
<text class="tb-tx" x="668.3" y="360.2" dominant-baseline="central">implícito.</text>
<text class="tb-cap" x="600.0" y="407.0" text-anchor="middle">Tabla 7.3. Protocolos de aplicación y puertos habituales.</text></svg>
</div>

### HTTPS

Es HTTP transportado sobre TLS (*Transport Layer Security*), que aporta confidencialidad, integridad y autenticación del servidor. Usa habitualmente el puerto 443 e implica un *handshake* TLS antes del intercambio HTTP. Con certificados correctamente validados, reduce la exposición a ataques de escucha (*eavesdropping*), manipulación y suplantación de servidores.

### FTP

Es un protocolo de transferencia de archivos que opera sobre TCP usando dos canales separados: el canal de control (puerto 21) y el canal de datos (puerto 20 en modo activo, o puerto efímero en modo pasivo). Su principal debilidad es que las credenciales viajan en texto claro; se recomienda FTPS (FTP sobre TLS) o SFTP (*SSH File Transfer Protocol*).

### SMTP

Es el protocolo estándar para el envío de correos electrónicos entre servidores (MTA) y desde los clientes (MUA). Usa TCP (puertos 25, 587 o 465) y sigue un modelo de almacenamiento y reenvío. Los mensajes se transmiten en formato texto (RFC 5322), aunque pueden incluir adjuntos codificados mediante MIME.

## 7.4 DNS

La interacción humana con las redes suele apoyarse en nombres de dominio fáciles de recordar, mientras que los protocolos de red usan direcciones y otros identificadores estructurados.

El DNS es un sistema de nombres distribuido y jerárquico que permite consultar distintos tipos de registros asociados a esos nombres. Entre sus funciones más conocidas se encuentra resolver nombres de *host* a direcciones IP.

### Funcionamiento de una resolución DNS típica

- El cliente envía la consulta a su resolvedor recursivo por medio del *stub resolver* del sistema. Cuando el resolvedor recursivo no dispone de una respuesta válida en caché, puede iniciar una resolución iterativa: consulta a un servidor raíz y recibe una referencia a los servidores del dominio de nivel superior (TLD) correspondiente.
- El servidor TLD devuelve una referencia a los servidores autoritativos del dominio solicitado; no realiza por sí mismo la resolución final del nombre.
- El servidor autoritativo responde con el registro solicitado, por ejemplo un registro A o AAAA, o con la información que indique dónde continuar la resolución.
- El resolvedor recursivo puede almacenar la respuesta en caché durante el TTL indicado y devuelve el resultado al cliente que inició la consulta.

La Figura 7.5 sigue la consulta desde el cliente hasta el servidor autoritativo y de regreso, e indica en qué punto interviene la caché del resolvedor.

<div class="diagram" id="figura-7-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g705" viewBox="0 0 1200 490.651" role="img" aria-labelledby="g705-title">
<title id="g705-title">Resolución DNS típica en cinco pasos</title>
<defs><marker id="g705m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g705n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g705-c" transform="translate(-8.793 -8.770) scale(1.0147)"><g transform="translate(0 -10)"><g transform="translate(130 120) scale(0.9)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="130" y="177.4" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cliente (resolver)</text>
<g transform="translate(470 120) scale(0.9)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><circle cx="30" cy="-27.5" r="4" fill="#003ecc"></circle><path d="M-34 -27.5h34" stroke="#003ecc" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><circle cx="30" cy="1.5" r="4" fill="#003ecc"></circle><path d="M-34 1.5h34" stroke="#003ecc" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><circle cx="30" cy="30.5" r="4" fill="#003ecc"></circle><path d="M-34 30.5h34" stroke="#003ecc" stroke-width="3" stroke-linecap="round"></path></g>
<text x="470" y="177.4" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Servidor DNS local</text>
<text x="470" y="197.631" font-size="10.348pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">con caché</text>
<line x1="205" y1="100" x2="395" y2="100" stroke="#364e6c" stroke-width="2" marker-end="url(#g705m)"></line>
<circle cx="300" cy="86" r="15" fill="#7f1d1d"></circle>
<text x="300" y="91" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
<line x1="395" y1="142" x2="205" y2="142" stroke="#364e6c" stroke-width="2" marker-end="url(#g705m)"></line>
<circle cx="300" cy="166" r="15" fill="#1e3a8a"></circle>
<text x="300" y="171" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">5</text>
<rect x="800" y="30" width="380" height="100" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(860 80) scale(0.8)" data-lib="globe"><g stroke="#7c3aed" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#f2ebfd"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<text x="920" y="76" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Servidores raíz</text>
<text x="920" y="98" font-size="10.348pt" font-weight="400" fill="#5b21b6" text-anchor="start">remiten al TLD</text>
<rect x="800" y="150" width="380" height="100" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<g transform="translate(860 200) scale(0.8)" data-lib="layers"><path d="M0 2 L34 14 L0 26 L-34 14 Z" fill="#f6cebf" stroke="#dd3a00" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -12 L34 0 L0 12 L-34 0 Z" fill="#fcebe6" stroke="#dd3a00" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -26 L34 -14 L0 -2 L-34 -14 Z" fill="#ffffff" stroke="#dd3a00" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="920" y="196" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Servidores TLD</text>
<text x="920" y="218" font-size="10.348pt" font-weight="400" fill="#7c2d12" text-anchor="start">remiten al autoritativo</text>
<rect x="800" y="270" width="380" height="100" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(860 320) scale(0.8)" data-lib="db"><g stroke="#009254" stroke-width="3" fill="#ffffff"><path d="M-30 -24 V24 C-30 36 30 36 30 24 V-24"></path><ellipse cx="0" cy="-24" rx="30" ry="11" fill="#e6f4ee"></ellipse><path d="M-30 -4 C-30 8 30 8 30 -4" fill="none"></path><path d="M-30 14 C-30 26 30 26 30 14" fill="none"></path></g></g>
<text x="920" y="316" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Servidor autoritativo</text>
<text x="920" y="338" font-size="10.348pt" font-weight="400" fill="#065f46" text-anchor="start">responde con la IP</text>
<line x1="560" y1="110" x2="796" y2="80" stroke="#364e6c" stroke-width="2" marker-end="url(#g705m)" marker-start="url(#g705n)"></line>
<line x1="560" y1="125" x2="796" y2="200" stroke="#364e6c" stroke-width="2" marker-end="url(#g705m)" marker-start="url(#g705n)"></line>
<line x1="560" y1="140" x2="796" y2="320" stroke="#364e6c" stroke-width="2" marker-end="url(#g705m)" marker-start="url(#g705n)"></line>
<circle cx="690" cy="84" r="15" fill="#1e3a8a"></circle>
<text x="690" y="89" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
<circle cx="690" cy="170" r="15" fill="#1e3a8a"></circle>
<text x="690" y="175" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
<circle cx="690" cy="240" r="15" fill="#1e3a8a"></circle>
<text x="690" y="245" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text>
<rect x="20" y="390" width="1160" height="60" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="418.32" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">1 · consulta recursiva · 2 · el servidor local consulta a la raíz · 3 · la raíz remite al TLD, que redirige al autoritativo · 4 · el autoritativo responde con la IP · 5 · el servidor local guarda la</text>
<text x="600" y="434.966" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">respuesta en caché y la devuelve al cliente</text>
</g></g><text x="600" y="474.301" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 7.5. Resolución DNS típica en cinco pasos.</text></svg>
</div>

##### Consulta de DNS mediante la herramienta dig

El comando dig (*Domain Information Groper*) es la herramienta estándar para realizar consultas DNS desde la línea de comandos:

```text
Networking@SecOpsMX:~$ dig google.com

; <<>> DiG 9.16.1-Ubuntu <<>> google.com
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12345
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;google.com. IN A

;; ANSWER SECTION:
google.com. 300 IN A 142.250.185.46

;; Query time: 23 msec
;; SERVER: 8.8.8.8#53(8.8.8.8)
;; WHEN: Wed Jun 24 10:23:45 UTC 2026
;; MSG SIZE rcvd: 55
```

En la salida anterior puede observarse que:

- La QUESTION SECTION muestra la consulta realizada.
- La ANSWER SECTION contiene la respuesta de la dirección IP del dominio.
- Los campos flags significan: respuesta (qr, *query response*), recursión deseada (rd) y recursión disponible (ra). La respuesta no es autoritativa, ya que no incluye el indicador aa.
- Query time muestra el tiempo de respuesta (23 ms).
- SERVER indica el servidor DNS que respondió (8.8.8.8).

Cada tipo de registro DNS responde a una pregunta distinta (dirección, correo, delegación, alias o resolución inversa); la Tabla 7.4 los resume con un ejemplo de uso.

<div class="diagram tabla-svg" id="tabla-7-4" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 379" role="img" aria-labelledby="t31-title"><title id="t31-title">Tabla 7.4. Tipos de registros DNS principales.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="47.0" y="20.0" dominant-baseline="central" text-anchor="middle">Registro</text>
<text class="tb-ht" x="439.3" y="20.0" dominant-baseline="central" text-anchor="middle">Función</text>
<text class="tb-ht" x="992.3" y="20.0" dominant-baseline="central" text-anchor="middle">Ejemplo de uso</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">A</text>
<text class="tb-tx" x="105.9" y="60.8" dominant-baseline="central">Asocia un nombre de dominio con una dirección IPv4.</text>
<text class="tb-tx" x="796.7" y="60.8" dominant-baseline="central">www.ejemplo.com → dirección IPv4.</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">AAAA</text>
<text class="tb-tx" x="105.9" y="101.5" dominant-baseline="central">Asocia un nombre de dominio con una dirección IPv6.</text>
<text class="tb-tx" x="796.7" y="101.5" dominant-baseline="central">www.ejemplo.com → dirección IPv6.</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="153.6" dominant-baseline="central">MX</text>
<text class="tb-tx" x="105.9" y="142.2" dominant-baseline="central">Identifica los servidores responsables de recibir correo para un dominio y su</text>
<text class="tb-tx" x="105.9" y="165.0" dominant-baseline="central">prioridad relativa.</text>
<text class="tb-tx" x="796.7" y="153.6" dominant-baseline="central">Servidores de correo de ejemplo.com.</text>
<rect class="tb-to" x="0" y="185.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="205.8" dominant-baseline="central">NS</text>
<text class="tb-tx" x="105.9" y="205.8" dominant-baseline="central">Identifica los servidores DNS autoritativos de una zona.</text>
<text class="tb-tx" x="796.7" y="205.8" dominant-baseline="central">Servidores responsables de la zona del dominio.</text>
<rect class="tb-te" x="0" y="226.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="246.5" dominant-baseline="central">CNAME</text>
<text class="tb-tx" x="105.9" y="246.5" dominant-baseline="central">Define un alias que apunta a otro nombre de dominio.</text>
<text class="tb-tx" x="796.7" y="246.5" dominant-baseline="central">Alias de un servicio o subdominio.</text>
<rect class="tb-to" x="0" y="267.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="298.6" dominant-baseline="central">PTR</text>
<text class="tb-tx" x="105.9" y="298.6" dominant-baseline="central">Permite la resolución inversa de una dirección IP a un nombre.</text>
<text class="tb-tx" x="796.7" y="287.2" dominant-baseline="central">Búsqueda inversa en una zona in-addr.arpa o</text>
<text class="tb-tx" x="796.7" y="310.0" dominant-baseline="central">ip6.arpa.</text>
<text class="tb-cap" x="600.0" y="356.8" text-anchor="middle">Tabla 7.4. Tipos de registros DNS principales.</text></svg>
</div>

##### Para consultar otros tipos de registros, como registros MX (servidores de correo), se usa el flag -t:

```text
Networking@SecOpsMX:~$ dig -t MX gmail.com

; <<>> DiG 9.16.1-Ubuntu <<>> -t MX gmail.com
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 54321
;; flags: qr rd ra; QUERY: 1, ANSWER: 5, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;gmail.com. IN MX

;; ANSWER SECTION:
gmail.com. 3600 IN MX 30 alt3.gmail-smtp-in.l.google.com.
gmail.com. 3600 IN MX 20 alt2.gmail-smtp-in.l.google.com.
gmail.com. 3600 IN MX 10 alt1.gmail-smtp-in.l.google.com.
gmail.com. 3600 IN MX 40 alt4.gmail-smtp-in.l.google.com.
gmail.com. 3600 IN MX 5 gmail-smtp-in.l.google.com.
```

## 7.5 DHCP

La asignación manual de direcciones IP en redes de gran tamaño resulta ineficiente. DHCP automatiza esta configuración, permitiendo que los dispositivos obtengan sus parámetros de red dinámicamente al conectarse.

Este protocolo asigna automáticamente dirección IP, máscara, *gateway* y DNS, entre otros parámetros. Opera sobre UDP (puerto 67 para el servidor, 68 para el cliente) mediante un intercambio de cuatro mensajes: *discover*, *offer*, *request* y *ack*. La Figura 7.6 representa el intercambio.

<div class="diagram" id="figura-7-06" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g706" viewBox="0 0 1200 480.505" role="img" aria-labelledby="g706-title">
<title id="g706-title">Asignación dinámica de direcciones con DHCP (DORA)</title>
<defs><marker id="g706m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g706n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g706-c" transform="translate(-8.791 -8.770) scale(1.0147)"><g transform="translate(0 0)"><rect x="135" y="20" width="250" height="78" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(185.32 59) scale(0.6)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="295.5" y="63" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cliente · UDP 68</text>
<rect x="815" y="20" width="250" height="78" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(862.91 59) scale(0.6)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="-27.5" r="4" fill="#009254"></circle><path d="M-34 -27.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="1.5" r="4" fill="#009254"></circle><path d="M-34 1.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="30.5" r="4" fill="#009254"></circle><path d="M-34 30.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path></g>
<text x="974.5" y="63" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Servidor · UDP 67</text>
<line x1="260" y1="98" x2="260" y2="360" stroke="#d40000" stroke-width="1.8" stroke-dasharray="6,5"></line>
<line x1="940" y1="98" x2="940" y2="360" stroke="#009254" stroke-width="1.8" stroke-dasharray="6,5"></line>
<line x1="260" y1="150" x2="940" y2="150" stroke="#d40000" stroke-width="2.5" marker-end="url(#g706m)"></line>
<rect x="528.58" y="125" width="142.85" height="22" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.6"></rect>
<text x="600" y="140.67" font-size="10.348pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">1 · DHCPDISCOVER</text>
<text x="600" y="167" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">broadcast: busca servidores DHCP</text>
<line x1="940" y1="210" x2="260" y2="210" stroke="#009254" stroke-width="2.5" marker-end="url(#g706m)"></line>
<rect x="539.85" y="185" width="120.29" height="22" rx="4" fill="#ffffff" stroke="#009254" stroke-width="1.6"></rect>
<text x="600" y="200.67" font-size="10.348pt" font-weight="700" fill="#065f46" text-anchor="middle">2 · DHCPOFFER</text>
<text x="600" y="227" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">IP propuesta, máscara, lease y parámetros</text>
<line x1="260" y1="270" x2="940" y2="270" stroke="#d40000" stroke-width="2.5" marker-end="url(#g706m)"></line>
<rect x="530.19" y="245" width="139.63" height="22" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.6"></rect>
<text x="600" y="260.67" font-size="10.348pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">3 · DHCPREQUEST</text>
<text x="600" y="287" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">broadcast: solicita la dirección ofrecida</text>
<line x1="940" y1="330" x2="260" y2="330" stroke="#009254" stroke-width="2.5" marker-end="url(#g706m)"></line>
<rect x="547.11" y="305" width="105.79" height="22" rx="4" fill="#ffffff" stroke="#009254" stroke-width="1.6"></rect>
<text x="600" y="320.67" font-size="10.348pt" font-weight="700" fill="#065f46" text-anchor="middle">4 · DHCPACK</text>
<text x="600" y="347" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">confirma la asignación</text>
<rect x="20" y="390" width="1160" height="40" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="415.25" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">El cliente debe renovar la concesión antes de que expire, con un nuevo DHCPREQUEST en unicast al servidor</text>
</g></g><text x="600" y="464.153" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 7.6. Asignación dinámica de direcciones con DHCP (DORA).</text></svg>
</div>

### Métodos de asignación

- Dinámica: otorga una dirección de un *pool* por tiempo limitado (concesión o *lease*), que puede renovarse o reutilizarse.
- Automática: asigna una dirección de forma permanente al cliente, sin vencimiento, tomada del *pool* (RFC 2131).
- Manual o reserva: el administrador asocia una dirección IP fija a una MAC específica y el servidor la entrega por DHCP.

### DHCP para IPv6

- DHCPv6 *stateful*: asigna direcciones IPv6 completas de forma similar a IPv4.
- DHCPv6 *stateless*: complementa la autoconfiguración SLAAC (*Stateless Address Autoconfiguration*; Tema 4, sección 4.7) proporcionando información adicional como servidores DNS. Los puertos UDP son 546 para el cliente y 547 para el servidor.

Los métodos de asignación de DHCP se diferencian por el grado de control que conserva el administrador sobre la dirección de cada cliente; la Tabla 7.5 los resume e indica las consideraciones de cada uno.

<div class="diagram tabla-svg" id="tabla-7-5" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 406" role="img" aria-labelledby="t32-title"><title id="t32-title">Tabla 7.5. Métodos de asignación de DHCP.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="91.2" y="20.0" dominant-baseline="central" text-anchor="middle">Método</text>
<text class="tb-ht" x="506.8" y="20.0" dominant-baseline="central" text-anchor="middle">Descripción</text>
<text class="tb-ht" x="1015.5" y="20.0" dominant-baseline="central" text-anchor="middle">Consideraciones</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">DHCPv4 dinámico</text>
<text class="tb-tx" x="194.5" y="72.1" dominant-baseline="central">Asigna direcciones IP desde un pool durante un período de concesión.</text>
<text class="tb-tx" x="843.1" y="60.8" dominant-baseline="central">La dirección puede cambiar al renovar o</text>
<text class="tb-tx" x="843.1" y="83.5" dominant-baseline="central">expirar la concesión.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">DHCPv4</text>
<text class="tb-tx tb-b" x="12.0" y="147.0" dominant-baseline="central">automático</text>
<text class="tb-tx" x="194.5" y="124.2" dominant-baseline="central">Asigna automáticamente una dirección que puede quedar asociada</text>
<text class="tb-tx" x="194.5" y="147.0" dominant-baseline="central">permanentemente al cliente, según la implementación.</text>
<text class="tb-tx" x="843.1" y="124.2" dominant-baseline="central">El comportamiento depende del servidor</text>
<text class="tb-tx" x="843.1" y="147.0" dominant-baseline="central">DHCP.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">DHCPv4 manual o</text>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">reserva</text>
<text class="tb-tx" x="194.5" y="187.8" dominant-baseline="central">Asocia una dirección IP específica a un identificador de cliente, habitualmente</text>
<text class="tb-tx" x="194.5" y="210.5" dominant-baseline="central">la MAC en redes Ethernet.</text>
<text class="tb-tx" x="843.1" y="187.8" dominant-baseline="central">El servidor entrega la dirección reservada</text>
<text class="tb-tx" x="843.1" y="210.5" dominant-baseline="central">mediante DHCP.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="262.6" dominant-baseline="central">DHCPv6 stateful</text>
<text class="tb-tx" x="194.5" y="262.6" dominant-baseline="central">Asigna direcciones IPv6 y mantiene información de las concesiones.</text>
<text class="tb-tx" x="843.1" y="251.2" dominant-baseline="central">Usa UDP 546 en el cliente y UDP 547 en el</text>
<text class="tb-tx" x="843.1" y="274.0" dominant-baseline="central">servidor.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="326.1" dominant-baseline="central">DHCPv6 stateless</text>
<text class="tb-tx" x="194.5" y="326.1" dominant-baseline="central">Complementa SLAAC con parámetros adicionales, como servidores DNS.</text>
<text class="tb-tx" x="843.1" y="314.8" dominant-baseline="central">No asigna la dirección IPv6; el host la</text>
<text class="tb-tx" x="843.1" y="337.5" dominant-baseline="central">obtiene mediante SLAAC.</text>
<text class="tb-cap" x="600.0" y="384.2" text-anchor="middle">Tabla 7.5. Métodos de asignación de DHCP.</text></svg>
</div>

Nota: en IPv6, el *gateway* predeterminado se obtiene mediante *Router Advertisements* (RA), no mediante DHCPv6. El DUID identifica al cliente DHCPv6 y no equivale necesariamente a una dirección MAC.

### Funcionamiento detallado

- El cliente emite un dhcpdiscover en *broadcast*.
- El servidor responde con un dhcpoffer que contiene una dirección IP propuesta, máscara, tiempo de concesión (*lease*) y otros parámetros.
- El cliente selecciona una oferta y envía un dhcprequest en *broadcast*.
- El servidor confirma con un dhcpack.
- El cliente debe renovar la concesión antes de que expire, enviando un nuevo dhcprequest en *unicast* al servidor en el momento T1 (por defecto, 50 % del tiempo de concesión). Si el servidor no responde, el cliente intenta renovar por *broadcast* en el momento T2 (por defecto, 87.5 % del tiempo de concesión), denominado *rebinding*. Si tampoco hay respuesta antes del vencimiento, el cliente debe abandonar la dirección y reiniciar el proceso DORA (Discover, Offer, Request, Ack).

##### El intercambio completo de mensajes DHCP puede observarse mediante una captura de tráfico:

```text
Networking@SecOpsMX:~$ sudo tcpdump -i eth0 port 67 or port 68 -n -v
tcpdump: listening on eth0, link-type EN10MB (Ethernet), capture size 262144 bytes
10:23:45.123456 IP 0.0.0.0.68 > 255.255.255.255.67: BOOTP/DHCP, Request
from 08:00:27:3e:4f:a1, length 300, xid 0x12345678, Flags [none]
    DHCP-Message Option 53, length 1: Discover
10:23:45.123789 IP 192.168.1.1.67 > 255.255.255.255.68: BOOTP/DHCP,
Reply, length 300, xid 0x12345678, Flags [none]
    Your-IP 192.168.1.100
    Server-IP 192.168.1.1
    DHCP-Message Option 53, length 1: Offer
    Server-ID Option 54, length 4: 192.168.1.1
    Lease-Time Option 51, length 4: 3600
    Subnet-Mask Option 1, length 4: 255.255.255.0
    Default-Gateway Option 3, length 4: 192.168.1.1
    Domain-Name-Server Option 6, length 4: 8.8.8.8
10:23:45.124012 IP 0.0.0.0.68 > 255.255.255.255.67: BOOTP/DHCP, Request
from 08:00:27:3e:4f:a1, length 300, xid 0x12345678, Flags [none]
    DHCP-Message Option 53, length 1: Request
    Requested-IP Option 50, length 4: 192.168.1.100
    Server-ID Option 54, length 4: 192.168.1.1
10:23:45.124234 IP 192.168.1.1.67 > 255.255.255.255.68: BOOTP/DHCP,
Reply, length 300, xid 0x12345678, Flags [none]
    Your-IP 192.168.1.100
    Server-IP 192.168.1.1
    DHCP-Message Option 53, length 1: ACK
    Server-ID Option 54, length 4: 192.168.1.1
    Lease-Time Option 51, length 4: 3600
    Subnet-Mask Option 1, length 4: 255.255.255.0
    Default-Gateway Option 3, length 4: 192.168.1.1
    Domain-Name-Server Option 6, length 4: 8.8.8.8
```

En la captura anterior (tcpdump etiqueta como Request o Reply los mensajes BOOTP; el tipo de mensaje DHCP se indica en la opción 53) puede observarse la secuencia completa:

- Discover: el cliente (0.0.0.0) envía un *broadcast* buscando servidores DHCP.
- Offer: el servidor (192.168.1.1) responde ofreciendo una dirección IP (192.168.1.100) junto con la máscara, *gateway* y DNS.
- Request: el cliente solicita la dirección ofrecida.
- ACK: el servidor confirma la asignación con los mismos parámetros.

## 7.6 NAT/PAT

La escasez de direcciones IPv4 públicas (Tema 4) ha hecho necesario implementar mecanismos de traducción que permitan que múltiples dispositivos en una red privada compartan una o pocas direcciones públicas. NAT (*Network Address Translation*) y su extensión PAT (*Port Address Translation*) son el pilar de esta funcionalidad.

NAT implementa un mecanismo que traduce direcciones IP privadas (no enrutables en Internet) en direcciones públicas en el borde de una red. PAT (también llamado NAT sobrecargado o *overload*) es una variante que asocia múltiples direcciones privadas a una única dirección pública usando diferentes números de puerto origen para distinguir las conexiones.

Los tres tipos de NAT difieren en cuántas direcciones internas comparten una o varias direcciones públicas; la Tabla 7.6 los resume junto con su aplicación habitual.

<div class="diagram tabla-svg" id="tabla-7-6" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 279" role="img" aria-labelledby="t33-title"><title id="t33-title">Tabla 7.6. Tipos de NAT.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="92.4" y="20.0" dominant-baseline="central" text-anchor="middle">Tipo de NAT</text>
<text class="tb-ht" x="510.2" y="20.0" dominant-baseline="central" text-anchor="middle">Funcionamiento</text>
<text class="tb-ht" x="1017.8" y="20.0" dominant-baseline="central" text-anchor="middle">Aplicación habitual</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">NAT estático (1:1)</text>
<text class="tb-tx" x="196.8" y="72.1" dominant-baseline="central">Mantiene una traducción fija entre una dirección privada y una pública.</text>
<text class="tb-tx" x="847.6" y="60.8" dominant-baseline="central">Publicación de servidores o servicios</text>
<text class="tb-tx" x="847.6" y="83.5" dominant-baseline="central">internos.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">NAT dinámico (n:m)</text>
<text class="tb-tx" x="196.8" y="135.6" dominant-baseline="central">Asigna dinámicamente direcciones privadas a direcciones de un pool público.</text>
<text class="tb-tx" x="847.6" y="124.2" dominant-baseline="central">Acceso a Internet con varias direcciones</text>
<text class="tb-tx" x="847.6" y="147.0" dominant-baseline="central">públicas disponibles.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">PAT (NAT</text>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">sobrecargado)</text>
<text class="tb-tx" x="196.8" y="187.8" dominant-baseline="central">Permite que múltiples direcciones privadas compartan una dirección pública</text>
<text class="tb-tx" x="196.8" y="210.5" dominant-baseline="central">diferenciando las conexiones mediante puertos.</text>
<text class="tb-tx" x="847.6" y="187.8" dominant-baseline="central">Acceso de múltiples usuarios a Internet</text>
<text class="tb-tx" x="847.6" y="210.5" dominant-baseline="central">con una sola IPv4 pública.</text>
<text class="tb-cap" x="600.0" y="257.2" text-anchor="middle">Tabla 7.6. Tipos de NAT.</text></svg>
</div>

### Tipos de NAT

#### NAT estático (1:1)

Traducción fija entre una dirección privada y una pública. Útil para servidores accesibles desde Internet.

#### PAT (NAT sobrecargado)

Múltiples direcciones privadas comparten una sola dirección pública. El *router* modifica los números de puerto origen en los paquetes salientes para mantener una tabla de traducción.

### Funcionamiento de PAT

- Un *host* interno (192.168.1.100:12345) envía un paquete a un destino externo.
- El *router* NAT reemplaza la dirección origen por su IP pública y cambia el puerto origen por un puerto efímero elegido (por ejemplo, 54321).
- Guarda la asociación en su tabla NAT. Cuando recibe la respuesta, consulta la tabla, traduce de vuelta a 192.168.1.100:12345 y reenvía al *host* interno.

La Figura 7.7 sigue la traducción en ambos sentidos: en la salida, el *router* sustituye la dirección y el puerto de origen; en el retorno, la tabla NAT permite revertir esa sustitución.

<div class="diagram" id="figura-7-07" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g707" viewBox="0 0 1200 430.789" role="img" aria-labelledby="g707-title">
<title id="g707-title">Traducción PAT de una dirección privada a una pública</title>
<defs><marker id="g707m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g707n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g707-c" transform="translate(-8.788 -8.770) scale(1.0146)"><g transform="translate(0 -3)"><g transform="translate(150 70) scale(0.9)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="150" y="127.4" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Host interno</text>
<text x="150" y="147.631" font-size="10.349pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">192.168.1.100:12345</text>
<g transform="translate(600 70) scale(0.72)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="600" y="127.4" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router NAT</text>
<text x="600" y="147.631" font-size="10.349pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">IP pública</text>
<g transform="translate(1050 70) scale(1.4)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="1050" y="127.4" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Destino externo</text>
<line x1="215" y1="50" x2="520" y2="50" stroke="#364e6c" stroke-width="2" marker-end="url(#g707m)"></line>
<line x1="520" y1="92" x2="215" y2="92" stroke="#364e6c" stroke-width="2" marker-end="url(#g707m)"></line>
<line x1="685" y1="50" x2="980" y2="50" stroke="#364e6c" stroke-width="2" marker-end="url(#g707m)"></line>
<line x1="980" y1="92" x2="685" y2="92" stroke="#364e6c" stroke-width="2" marker-end="url(#g707m)"></line>
<rect x="271.6" y="23" width="192.8" height="22" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.6"></rect>
<text x="368" y="38.43" font-size="10.349pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">origen 192.168.1.100:12345</text>
<rect x="740.04" y="23" width="179.91" height="22" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="830" y="38.43" font-size="10.349pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">origen IP pública:54321</text>
<g transform="translate(600 230) scale(0.8)" data-lib="table"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#364e6c" stroke-width="3"></rect><rect x="-36" y="-28" width="72" height="14" fill="#cdd3da" stroke="#364e6c" stroke-width="3"></rect><path d="M-36 0H36M-36 14H36M-8 -14V28" stroke="#364e6c" stroke-width="2"></path></g>
<text x="600" y="282.8" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Tabla NAT</text>
<line x1="600" y1="162" x2="600" y2="198" stroke="#364e6c" stroke-width="1.8" stroke-dasharray="5,4" marker-end="url(#g707m)"></line>
<rect x="426.25" y="289" width="347.49" height="22" rx="4" fill="#ffffff" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="304.67" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">192.168.1.100:12345 se asocia a IP pública:54321</text>
<rect x="20" y="340" width="1160" height="44" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="367.25" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">El router reemplaza la dirección y el puerto de origen por su IP pública y un puerto efímero; en la respuesta consulta la tabla y traduce de vuelta</text>
</g></g><text x="600" y="414.433" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 7.7. Traducción PAT de una dirección privada a una pública.</text></svg>
</div>

Entre sus ventajas se encuentran la conservación de direcciones IPv4 públicas y la posibilidad de que múltiples dispositivos compartan una dirección pública mediante PAT.

NAT puede ocultar parte de la estructura de direccionamiento interno, pero no constituye por sí mismo un control de seguridad ni sustituye a un *firewall*. Entre sus limitaciones se encuentra que rompe el modelo extremo a extremo de Internet, no soporta bien algunos protocolos como SIP o FTP sin un ALG (*Application Layer Gateway*) y añade complejidad y *overhead*.

## 7.7 IGMP

En redes donde la transmisión de datos debe llegar a múltiples receptores simultáneamente, el envío *unicast* sería ineficiente y el *broadcast* sobrecargaría a equipos que no participan. La solución es la multidifusión (*multicast*). IGMP es el protocolo que gestiona la pertenencia a dichos grupos en redes IPv4.

Los *hosts* informan a los *routers* locales qué grupos desean recibir; estos usan esa información, junto con los protocolos de enrutamiento *multicast*, para distribuir el tráfico hacia las redes donde existen receptores interesados. El proceso básico se representa en la Figura 7.8.

<div class="diagram" id="figura-7-08" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g708" viewBox="0 0 1200 298.888" role="img" aria-labelledby="g708-title">
<title id="g708-title">Pertenencia a grupos multicast con IGMP</title>
<defs><marker id="g708m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g708n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g708-c" transform="translate(-8.796 -8.771) scale(1.0147)"><g transform="translate(0 -9)"><g transform="translate(150 70) scale(0.9)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="150" y="127.4" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Host receptor</text>
<text x="150" y="147.631" font-size="10.348pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">grupo 239.1.1.1</text>
<g transform="translate(600 70) scale(0.72)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="600" y="127.4" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router local</text>
<text x="600" y="147.631" font-size="10.348pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">escucha los reportes IGMP</text>
<g transform="translate(1050 70) scale(1.4)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="1050" y="150" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Infraestructura multicast</text>
<text x="1050" y="168" font-size="10.348pt" font-weight="400" fill="#065f46" text-anchor="middle">PIM-SM (RFC 7761)</text>
<line x1="215" y1="56" x2="520" y2="56" stroke="#364e6c" stroke-width="2" marker-end="url(#g708m)"></line>
<rect x="307.05" y="29" width="121.9" height="22" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.6"></rect>
<text x="368" y="44.67" font-size="10.348pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">1 · IGMP report</text>
<line x1="520" y1="104" x2="215" y2="104" stroke="#364e6c" stroke-width="2" marker-end="url(#g708m)"></line>
<rect x="292.55" y="77" width="150.91" height="22" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="368" y="92.67" font-size="10.348pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">3 · query periódica</text>
<line x1="215" y1="152" x2="520" y2="152" stroke="#d40000" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#g708m)"></line>
<rect x="306.24" y="125" width="123.51" height="22" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.6"></rect>
<text x="368" y="140.67" font-size="10.348pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">4 · leave group</text>
<line x1="685" y1="56" x2="980" y2="56" stroke="#364e6c" stroke-width="2" marker-end="url(#g708m)"></line>
<rect x="761.8" y="29" width="136.41" height="22" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="830" y="44.67" font-size="10.348pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">2 · unión al grupo</text>
<rect x="20" y="200" width="1160" height="60" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="235.25" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">El host se une con un report; el router reenvía la unión mediante PIM-SM, verifica los grupos activos con queries periódicas y el host puede abandonar el grupo con un leave</text>
</g></g><text x="600" y="282.533" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 7.8. Pertenencia a grupos multicast con IGMP.</text></svg>
</div>

### Direcciones multicast

En IPv4, el tráfico *multicast* utiliza direcciones del bloque 224.0.0.0/4 (de 224.0.0.0 a 239.255.255.255). Dentro de este bloque, algunas direcciones están reservadas para protocolos de control y no deben asignarse a grupos de usuario:

- 224.0.0.1: todos los *hosts* del segmento local.
- 224.0.0.2: todos los *routers* del segmento local.
- 224.0.0.5 y 224.0.0.6: *routers* OSPF (AllSPFRouters y AllDRouters).
- 224.0.0.9: *routers* RIPv2.
- 224.0.0.251: DNS *multicast* (mDNS).
- 239.0.0.0/8: rango de ámbito administrativo, similar a las direcciones privadas, para uso interno de una organización.

Cada dirección IPv4 *multicast* se corresponde con una dirección MAC *multicast* Ethernet dentro del rango 01:00:5e:00:00:00 a 01:00:5e:7f:ff:ff. La correspondencia no es uno a uno: los 23 bits menos significativos de la dirección IPv4 se mapean a los 23 bits menos significativos de la MAC, por lo que varios grupos IPv4 pueden compartir la misma MAC *multicast*. Por eso los *switches* deben apoyarse en IGMP *snooping* (sección 7.8) y no únicamente en la dirección MAC para decidir el reenvío.

### Funcionamiento básico

- Un *host* envía un mensaje IGMP *report* para unirse a un grupo.
- El *router* local mantiene el estado de pertenencia de los grupos a partir de los mensajes IGMP. Cuando debe incorporar una red al árbol *multicast*, los *routers* usan mensajes PIM Join/Prune para señalizar la necesidad de recibir el flujo desde los vecinos correspondientes. IGMP y PIM cumplen funciones complementarias, pero no son el mismo protocolo.
- Periódicamente, el *router* envía IGMP *query* a todos los *hosts* para verificar qué grupos siguen activos.

### Versiones de IGMP

- IGMPv1 (RFC 1112): primera versión, sin mecanismo explícito de salida de grupo. La pertenencia expira por temporizador.
- IGMPv2 (RFC 2236): introduce el mensaje *Leave Group*, que reduce el tiempo de espera para dejar de reenviar el flujo cuando ya no hay receptores. Es la base de la mayoría de implementaciones de IGMP *snooping*.
- IGMPv3 (RFC 3376): añade el soporte de *source-specific multicast* (SSM), que permite al *host* indicar no solo el grupo, sino también las fuentes concretas de las que desea recibir el tráfico. Es la versión que conviene usar cuando se necesita control por origen.

Para IPv6, el equivalente funcional es MLD (*Multicast Listener Discovery*), definido en los RFC 2710 (MLDv1) y 3810 (MLDv2).

## 7.8 INSPECCIÓN IGMP

En una red Ethernet, un *switch* de capa 2 convencional reenvía las tramas *multicast* según su dirección MAC de destino.

Si no dispone de mecanismos como IGMP *snooping*, puede inundarlas por todos los puertos de la VLAN, de forma similar al tráfico *broadcast*, lo que desperdicia ancho de banda en puertos donde no hay receptores interesados.

La solución es la inspección IGMP (IGMP *snooping*), una funcionalidad de los *switches* de capa 2 que examina los mensajes IGMP intercambiados entre *hosts* y *routers*. Con ellos aprende en qué puertos hay receptores de cada grupo *multicast* y reenvía el tráfico solo por esos puertos, en lugar de inundarlos todos.

### Funcionamiento del IGMP *snooping*

- El *switch* escucha pasivamente los paquetes IGMP que atraviesan sus puertos (tanto *queries* como *reports* y *leaves*).
- Cuando un *host* envía un IGMP *report* para unirse a un grupo (por ejemplo, 239.1.1.1), el *switch* anota que el puerto de llegada pertenece a ese grupo *multicast*.
- Cuando el *router* envía una IGMP *query*, el *switch* la reenvía por todos los puertos de la VLAN para que todos los *hosts* puedan responder con sus *reports*. Los puertos por los que el *switch* detecta la presencia de un *router* *multicast*, generalmente porque recibe *queries* u otro tráfico de control como PIM, se conocen como puertos *mrouter* (*multicast router ports*): hacia ellos se reenvían los *reports* de los *hosts* y el tráfico de los grupos.
- Cuando el *switch* recibe una trama *multicast* con dirección MAC correspondiente al grupo, consulta su tabla de *snooping* y la envía solo a los puertos registrados para ese grupo (y al puerto del *router*).
- Cuando recibe un mensaje *Leave Group*, el *switch* no debe eliminar automáticamente la entrada basándose solo en ese mensaje. Debe mantener un mecanismo de expiración del estado de pertenencia, con temporizadores configurables y, según la versión de IGMP y la implementación, consultas específicas para comprobar si quedan receptores. La entrada se retira cuando vence el estado de pertenencia sin recibirse informes que lo renueven.

La Figura 7.9 contrasta los dos escenarios: sin *snooping*, el *switch* entrega el tráfico *multicast* a todos los puertos de la VLAN; con *snooping*, solo a los puertos que registraron interés en el grupo.

<div class="diagram" id="figura-7-09" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g709" viewBox="0 0 1200 454.125" role="img" aria-labelledby="g709-title">
<title id="g709-title">Tráfico multicast sin IGMP snooping y con IGMP snooping</title>
<defs><marker id="g709m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g709n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g709-c" transform="translate(-8.780 -8.770) scale(1.0146)"><g transform="translate(0 0)"><rect x="20" y="20" width="560" height="320" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<text x="300" y="44" font-size="13.799pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Sin IGMP snooping</text>
<g transform="translate(300 92) scale(0.9)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#364e6c" stroke-width="3"></rect><rect x="-46.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-33.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-21.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-8.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="4.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="16.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="29.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="41.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><circle cx="-44" cy="-15" r="2.5" fill="#364e6c"></circle><circle cx="-24" cy="-15" r="2.5" fill="#364e6c"></circle><circle cx="-4" cy="-15" r="2.5" fill="#364e6c"></circle><circle cx="16" cy="-15" r="2.5" fill="#364e6c"></circle><circle cx="36" cy="-15" r="2.5" fill="#364e6c"></circle></g>
<line x1="300" y1="122" x2="100" y2="196" stroke="#dd3a00" stroke-width="2.4" marker-end="url(#g709m)"></line>
<g transform="translate(100 235) scale(0.5)" data-lib="pc"><g stroke="#009254" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#e6f4ee" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="100" y="284" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Receptor A</text>
<text x="100" y="300" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="middle">recibe</text>
<line x1="300" y1="122" x2="234" y2="196" stroke="#dd3a00" stroke-width="2.4" marker-end="url(#g709m)"></line>
<g transform="translate(234 235) scale(0.5)" data-lib="pc"><g stroke="#009254" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#e6f4ee" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="234" y="284" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Receptor B</text>
<text x="234" y="300" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="middle">recibe</text>
<line x1="300" y1="122" x2="368" y2="196" stroke="#dd3a00" stroke-width="2.4" marker-end="url(#g709m)"></line>
<g transform="translate(368 235) scale(0.5)" data-lib="pc"><g stroke="#364e6c" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#ebedf0" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="368" y="284" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Host C</text>
<text x="368" y="300" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">recibe</text>
<line x1="300" y1="122" x2="502" y2="196" stroke="#dd3a00" stroke-width="2.4" marker-end="url(#g709m)"></line>
<g transform="translate(502 235) scale(0.5)" data-lib="pc"><g stroke="#364e6c" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#ebedf0" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="502" y="284" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Host D</text>
<text x="502" y="300" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">recibe</text>
<text x="300" y="325" font-size="10.349pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">inunda todos los puertos</text>
<rect x="620" y="20" width="560" height="320" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<text x="900" y="44" font-size="13.799pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Con IGMP snooping</text>
<g transform="translate(900 92) scale(0.9)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#364e6c" stroke-width="3"></rect><rect x="-46.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-33.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-21.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-8.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="4.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="16.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="29.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="41.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><circle cx="-44" cy="-15" r="2.5" fill="#364e6c"></circle><circle cx="-24" cy="-15" r="2.5" fill="#364e6c"></circle><circle cx="-4" cy="-15" r="2.5" fill="#364e6c"></circle><circle cx="16" cy="-15" r="2.5" fill="#364e6c"></circle><circle cx="36" cy="-15" r="2.5" fill="#364e6c"></circle></g>
<line x1="900" y1="122" x2="700" y2="196" stroke="#dd3a00" stroke-width="2.4" marker-end="url(#g709m)"></line>
<g transform="translate(700 235) scale(0.5)" data-lib="pc"><g stroke="#009254" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#e6f4ee" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="700" y="284" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Receptor A</text>
<text x="700" y="300" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="middle">recibe</text>
<line x1="900" y1="122" x2="834" y2="196" stroke="#dd3a00" stroke-width="2.4" marker-end="url(#g709m)"></line>
<g transform="translate(834 235) scale(0.5)" data-lib="pc"><g stroke="#009254" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#e6f4ee" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="834" y="284" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Receptor B</text>
<text x="834" y="300" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="middle">recibe</text>
<line x1="900" y1="122" x2="968" y2="196" stroke="#cdd3da" stroke-width="1.5" stroke-dasharray="5,4"></line>
<g transform="translate(968 235) scale(0.5)" data-lib="pc"><g stroke="#364e6c" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#ebedf0" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="968" y="284" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Host C</text>
<text x="968" y="300" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">no recibe</text>
<line x1="900" y1="122" x2="1102" y2="196" stroke="#cdd3da" stroke-width="1.5" stroke-dasharray="5,4"></line>
<g transform="translate(1102 235) scale(0.5)" data-lib="pc"><g stroke="#364e6c" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#ebedf0" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="1102" y="284" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Host D</text>
<text x="1102" y="300" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">no recibe</text>
<text x="900" y="325" font-size="10.349pt" font-weight="700" fill="#065f46" text-anchor="middle">solo puertos con receptores (y el del router)</text>
<rect x="20" y="360" width="1160" height="44" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="387.25" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">El switch aprende los grupos al inspeccionar los reportes, queries y leaves IGMP y reenvía el multicast solo por los puertos necesarios</text>
</g></g><text x="600" y="437.765" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 7.9. Tráfico multicast sin IGMP snooping y con IGMP snooping.</text></svg>
</div>

IGMP *snooping* reduce el consumo de ancho de banda al evitar que el tráfico *multicast* se propague por puertos sin receptores; disminuye la congestión en redes con muchas VLAN o muchos flujos *multicast*. También limita la exposición de dispositivos a tráfico que no necesitan recibir, aunque no es un control de acceso.
