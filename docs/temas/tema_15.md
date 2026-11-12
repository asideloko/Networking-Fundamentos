<p class="tema-num">TEMA 15</p>

# IMPLEMENTACIÓN PRÁCTICA INTEGRAL

Este tema integra los procedimientos fundamentales para implementar, verificar, proteger y diagnosticar una red IP utilizando herramientas disponibles directamente en sistemas *Linux*. La Figura 15.1 presenta el mapa de los subtemas.

Los conceptos de los catorce temas anteriores se reúnen aquí en un laboratorio integrado: direccionamiento, VLAN, enrutamiento, *firewall*, DHCP y alta disponibilidad se configuran, se verifican y se diagnostican como un único sistema.

El objetivo no es solo ejecutar comandos, sino establecer una metodología reproducible: identificar el estado inicial, formular una hipótesis técnica, realizar una prueba que permita discriminar entre causas posibles, aplicar una corrección y comprobar posteriormente que el problema ha desaparecido. La Figura 15.2 resume este ciclo.

Los ejemplos utilizan principalmente *Linux* y herramientas estándar como iproute2, tcpdump, nftables, dnsmasq, keepalived y FRRouting. Algunos valores son deliberadamente didácticos y deben adaptarse a la topología real.

<div class="diagram" id="figura-15-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1501" viewBox="0 0 1200 402" role="img" aria-labelledby="g1501-title">
<title id="g1501-title">Mapa del Tema 15</title>
<defs></defs>
<g id="g1501-c" transform="translate(20 20)"><rect x="0" y="0" width="272" height="153" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="51" x2="272" y2="51" stroke="#003ecc" stroke-width="1.5"/>
<text x="136" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">15.1 Configuración de red</text>
<text x="136" y="40" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">básica</text>
<g transform="translate(136 87.72) scale(0.7)" data-lib="terminal"><rect x="-38" y="-28" width="76" height="56" rx="5" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><path d="M-26 -12L-12 0L-26 12" fill="none" stroke="#003ecc" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M-4 12h22" stroke="#003ecc" stroke-width="4" stroke-linecap="round"/></g>
<text x="136" y="138.18" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Interfaces, IP, gateway, vecinos y DNS</text>
<rect x="296" y="0" width="272" height="153" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="296" y1="51" x2="568" y2="51" stroke="#dd3a00" stroke-width="1.5"/>
<text x="432" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">15.2 Subnetting aplicado</text>
<text x="432" y="40" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">(VLSM)</text>
<g transform="translate(432 87.72) scale(0.7)" data-lib="table"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><rect x="-36" y="-28" width="72" height="14" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></rect><path d="M-36 0H36M-36 14H36M-8 -14V28" stroke="#dd3a00" stroke-width="2"></path></g>
<text x="432" y="138.18" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Subredes de distinto tamaño</text>
<rect x="592" y="0" width="272" height="153" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="592" y1="34" x2="864" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="728" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">15.3 VLAN</text>
<g transform="translate(728 76.84) scale(0.7)" data-lib="layers"><path d="M0 2 L34 14 L0 26 L-34 14 Z" fill="#bfe4d4" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -12 L34 0 L0 12 L-34 0 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path><path d="M0 -26 L34 -14 L0 -2 L-34 -14 Z" fill="#ffffff" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="728" y="125.45" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Subinterfaces, trunk y routing entre</text>
<text x="728" y="144.45" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">VLAN</text>
<rect x="888" y="0" width="272" height="153" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="888" y1="34" x2="1160" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="1024" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">15.4 Routing entre redes</text>
<g transform="translate(1024 76.84) scale(0.7)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3"/><g fill="none" stroke="#7c3aed" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="1024" y="134.95" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Rutas estáticas y OSPF</text>
<rect x="0" y="177" width="272" height="153" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="0" y1="211" x2="272" y2="211" stroke="#d40000" stroke-width="1.5"/>
<text x="136" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">15.5 Firewall con nftables</text>
<g transform="translate(136 253.84) scale(0.7)" data-lib="firewall"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><path d="M-36 -9.5H36M-36 9.5H36M-12 -28V-9.5M12 -9.5V9.5M-12 9.5V28" stroke="#d40000" stroke-width="2.5" fill="none"/><rect x="-36" y="-28" width="72" height="18.5" rx="3" fill="#f4bfbf" stroke="#d40000" stroke-width="3"/><path d="M-36 -9.5H36M-12 -28V-9.5M12 -9.5V9.5M-12 9.5V28" stroke="#d40000" stroke-width="2.5" fill="none"/></g>
<text x="136" y="311.95" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Filtrado y NAT en el router</text>
<rect x="296" y="177" width="272" height="153" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="296" y1="211" x2="568" y2="211" stroke="#003ecc" stroke-width="1.5"/>
<text x="432" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">15.6 DHCP</text>
<g transform="translate(432 253.84) scale(0.7)" data-lib="download"><g fill="none" stroke="#003ecc" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M0 -28 V10 M-14 -4 L0 10 L14 -4"></path><path d="M-28 12 V26 H28 V12"></path></g></g>
<text x="432" y="311.95" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Asignación dinámica y proceso DORA</text>
<rect x="592" y="177" width="272" height="153" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="592" y1="211" x2="864" y2="211" stroke="#009254" stroke-width="1.5"/>
<text x="728" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">15.7 Red empresarial completa</text>
<g transform="translate(728 253.84) scale(0.7)" data-lib="sync"><g fill="none" stroke="#009254" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 -4 A26 26 0 0 1 20 -16"></path><path d="M24 4 A26 26 0 0 1 -20 16"></path><path d="M12 -22 L22 -16 L14 -8"></path><path d="M-12 22 L-22 16 L-14 8"></path></g></g>
<text x="728" y="311.95" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Alta disponibilidad con VRRP</text>
<rect x="888" y="177" width="272" height="153" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="888" y1="211" x2="1160" y2="211" stroke="#dd3a00" stroke-width="1.5"/>
<text x="1024" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">15.8 Troubleshooting real</text>
<g transform="translate(1024 253.84) scale(0.7)" data-lib="search"><circle cx="-6" cy="-6" r="20" fill="#fcebe6" stroke="#dd3a00" stroke-width="4"></circle><path d="M9 9 L28 28" stroke="#dd3a00" stroke-width="6" stroke-linecap="round"></path></g>
<text x="1024" y="311.95" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Cinco casos basados en evidencia</text></g><text x="600" y="384" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 15.1. Mapa del Tema 15.</text></svg>
</div>

## 15.1 CONFIGURACIÓN DE RED BÁSICA

La configuración de una red *Linux* debe entenderse como la interacción de varios componentes: interfaces físicas o virtuales, direcciones IPv4/IPv6, prefijos y máscaras, tabla de rutas, tabla de vecinos ARP/ND, resolución de nombres y los servicios que utilizan la conectividad. Una interfaz puede estar físicamente activa y, sin embargo, no disponer de una configuración IP válida. Del mismo modo, un equipo puede alcanzar una dirección IP y no poder resolver nombres DNS. Por esta razón, la verificación debe realizarse por capas.

Los ejemplos utilizan nombres como eth0 y eth1 por simplicidad. En sistemas actuales pueden aparecer nombres predecibles como enp1s0, ens18 o similares; debe utilizarse el nombre real que muestre ip link. Los cambios efectuados directamente con iproute2 suelen modificar el estado en ejecución y no necesariamente sobreviven a un reinicio: la persistencia debe configurarse mediante el gestor de red de la distribución, como NetworkManager, Netplan o systemd-networkd.

<div class="diagram" id="figura-15-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1502" viewBox="0 0 1200 332" role="img" aria-labelledby="g1502-title">
<title id="g1502-title">Metodología reproducible de implementación y diagnóstico</title>
<defs><marker id="g1502m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1502n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g1502-c" transform="translate(20 20)"><circle cx="104.8" cy="15" r="15" fill="#1e3a8a"/>
<text x="104.8" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
<rect x="0" y="38" width="209.6" height="222" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="72" x2="209.6" y2="72" stroke="#003ecc" stroke-width="1.5"/>
<text x="104.8" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Estado inicial</text>
<g transform="translate(104.8 139.68) scale(0.8)" data-lib="eye"><path d="M-34 0 C-18 -24 18 -24 34 0 C18 24 -18 24 -34 0 Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"></path><circle cx="0" cy="0" r="9" fill="#003ecc"></circle></g>
<text x="104.8" y="219.34" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Identificar cómo está la red</text>
<text x="104.8" y="238.34" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">antes de actuar</text>
<polyline points="211.6,149 235.6,149" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1502m364e6c)"/>
<circle cx="342.4" cy="15" r="15" fill="#5b21b6"/>
<text x="342.4" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
<rect x="237.6" y="38" width="209.6" height="222" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="237.6" y1="72" x2="447.2" y2="72" stroke="#7c3aed" stroke-width="1.5"/>
<text x="342.4" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Hipótesis</text>
<g transform="translate(342.4 139.68) scale(0.8)" data-lib="search"><circle cx="-6" cy="-6" r="20" fill="#f2ebfd" stroke="#7c3aed" stroke-width="4"></circle><path d="M9 9 L28 28" stroke="#7c3aed" stroke-width="6" stroke-linecap="round"></path></g>
<text x="342.4" y="219.34" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Formular una causa técnica</text>
<text x="342.4" y="238.34" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">posible</text>
<polyline points="449.2,149 473.2,149" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1502m364e6c)"/>
<circle cx="580" cy="15" r="15" fill="#7c2d12"/>
<text x="580" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
<rect x="475.2" y="38" width="209.6" height="222" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="475.2" y1="72" x2="684.8" y2="72" stroke="#dd3a00" stroke-width="1.5"/>
<text x="580" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Prueba discriminante</text>
<g transform="translate(580 139.68) scale(0.8)" data-lib="funnel"><path d="M-32 -26 H32 L8 4 V28 L-8 20 V4 Z" fill="#fcebe6" stroke="#dd3a00" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="580" y="219.34" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Diferenciar entre causas</text>
<text x="580" y="238.34" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">posibles</text>
<polyline points="686.8,149 710.8,149" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1502m364e6c)"/>
<circle cx="817.6" cy="15" r="15" fill="#065f46"/>
<text x="817.6" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text>
<rect x="712.8" y="38" width="209.6" height="222" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="712.8" y1="72" x2="922.4" y2="72" stroke="#009254" stroke-width="1.5"/>
<text x="817.6" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Corrección</text>
<g transform="translate(817.6 139.68) scale(0.8)" data-lib="gear"><g fill="#009254"><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(0)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(45)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(90)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(135)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(180)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(225)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(270)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(315)"></rect></g><circle cx="0" cy="0" r="19" fill="#ffffff" stroke="#009254" stroke-width="4"></circle><circle cx="0" cy="0" r="7" fill="#bfe4d4" stroke="#009254" stroke-width="3"></circle></g>
<text x="817.6" y="228.84" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Aplicar el cambio necesario</text>
<polyline points="924.4,149 948.4,149" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1502m364e6c)"/>
<circle cx="1055.2" cy="15" r="15" fill="#1e3a5f"/>
<text x="1055.2" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">5</text>
<rect x="950.4" y="38" width="209.6" height="222" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="950.4" y1="72" x2="1160" y2="72" stroke="#364e6c" stroke-width="1.5"/>
<text x="1055.2" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Comprobación</text>
<g transform="translate(1055.2 139.68) scale(0.8)" data-lib="check"><circle cx="0" cy="0" r="28" fill="#364e6c"></circle><path d="M-13 1 L-4 11 L15 -10" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="1055.2" y="219.34" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Confirmar que el problema</text>
<text x="1055.2" y="238.34" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">desapareció</text></g><text x="600" y="314" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 15.2. Metodología reproducible de implementación y diagnóstico.</text></svg>
</div>

### Identificación de interfaces

El primer paso consiste en determinar qué interfaces existen y cuál es su estado.

```text
Networking@SecOpsMX:~$ ip link show
```

```text
lo: <LOOPBACK,UP,LOWER_UP>
eth0: <BROADCAST,MULTICAST,UP,LOWER_UP>
eth1: <BROADCAST,MULTICAST>
```

UP indica que la interfaz está administrativamente activa. LOWER_UP indica que la capa de enlace subyacente está operativa (por ejemplo, el cable está conectado y el enlace físico está activo), cuando el tipo de interfaz lo permite.

##### Para obtener información resumida:

```text
Networking@SecOpsMX:~$ ip -br link
```

Ejemplo (salida simplificada; el formato real incluye además la dirección MAC y los *flags* entre <>):

```text
lo UNKNOWN
eth0 UP
eth1 DOWN
```

### Configuración de una dirección IPv4

##### Para asignar una dirección temporal:

```text
Networking@SecOpsMX:~$ sudo ip addr add 192.168.10.10/24 dev eth0
Networking@SecOpsMX:~$ sudo ip link set eth0 up
```

La configuración puede comprobarse mediante:

```text
Networking@SecOpsMX:~$ ip addr show dev eth0
```

o:

```text
Networking@SecOpsMX:~$ ip -br addr
```

Debe aparecer una dirección semejante a (salida resumida):

```text
eth0 UP 192.168.10.10/24
```

El prefijo /24 corresponde a la máscara:

```text
255.255.255.0
```

y proporciona 256 direcciones totales, de las cuales tradicionalmente 254 son utilizables para *hosts* en una red IPv4 convencional.

### Configuración de la puerta de enlace

Cuando un *host* envía un paquete, primero determina si el destino pertenece a su misma red; en caso contrario, lo entrega a la puerta de enlace. La Figura 15.3 resume esta decisión.

<div class="diagram" id="figura-15-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1503" viewBox="0 0 1200 402" role="img" aria-labelledby="g1503-title">
<title id="g1503-title">Decisión de envío de un host Linux</title>
<defs><marker id="g1503m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1503n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker><marker id="g1503m009254" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#009254"/></marker><marker id="g1503n009254" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#009254"/></marker><marker id="g1503mdd3a00" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#dd3a00"/></marker><marker id="g1503ndd3a00" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#dd3a00"/></marker></defs>
<g id="g1503-c" transform="translate(20 20)"><rect x="0" y="110" width="230" height="110" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<text x="115" y="160.06" font-size="10.9pt" font-weight="700" fill="#1e3a5f" text-anchor="middle">Paquete con una IP de</text>
<text x="115" y="179.06" font-size="10.9pt" font-weight="700" fill="#1e3a5f" text-anchor="middle">destino</text>
<polyline points="232,165 322,165" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1503m364e6c)"/>
<rect x="324" y="90" width="290" height="150" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="324" y1="124" x2="614" y2="124" stroke="#7c3aed" stroke-width="1.5"/>
<text x="469" y="113" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Máscara de la interfaz</text>
<text x="469" y="186.56" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">¿El destino pertenece a la misma red?</text>
<polyline points="616,130 700,130 700,52 760,52" fill="none" stroke="#009254" stroke-width="2.5" marker-end="url(#g1503m009254)"/>
<text x="715" y="112" font-size="11.35pt" font-weight="700" fill="#065f46" text-anchor="start">Sí</text>
<polyline points="616,200 700,200 700,278 760,278" fill="none" stroke="#dd3a00" stroke-width="2.5" marker-end="url(#g1503mdd3a00)"/>
<text x="715" y="242" font-size="11.35pt" font-weight="700" fill="#7c2d12" text-anchor="start">No</text>
<rect x="762" y="8" width="398" height="90" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="762" y1="40" x2="1160" y2="40" stroke="#009254" stroke-width="1.5"/>
<text x="961" y="31" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Entrega directa</text>
<text x="961" y="73.56" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">ARP (IPv4) o ND (IPv6) para obtener la MAC del destino</text>
<rect x="762" y="232" width="398" height="92" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="762" y1="264" x2="1160" y2="264" stroke="#dd3a00" stroke-width="1.5"/>
<text x="961" y="255" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Entrega por la puerta de enlace</text>
<text x="961" y="298.56" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Ruta por defecto y resolución de la MAC del gateway</text></g><text x="600" y="384" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 15.3. Decisión de envío de un host Linux.</text></svg>
</div>

##### La ruta por defecto puede comprobarse con:

```text
Networking@SecOpsMX:~$ ip route
```

En este ejemplo de dnsmasq, el servidor tiene una interfaz en la misma subred del rango que administra, por ejemplo 192.168.20.1. En otras arquitecturas, un servidor DHCP puede encontrarse en otra subred y recibir las solicitudes mediante un agente *relay* DHCP.

```text
192.168.10.0/24 dev eth0 proto kernel scope link src 192.168.10.10
default via 192.168.10.1 dev eth0
```

##### Si no existe una ruta por defecto, puede añadirse:

```text
Networking@SecOpsMX:~$ sudo ip route add default via 192.168.10.1 dev eth0
```

La ruta concreta que utilizará *Linux* para alcanzar una dirección determinada puede consultarse con:

```text
Networking@SecOpsMX:~$ ip route get 8.8.8.8
```

```text
8.8.8.8 via 192.168.10.1 dev eth0 src 192.168.10.10
```

Este comando resulta especialmente importante durante *troubleshooting* porque no solamente muestra la tabla de rutas: muestra la decisión efectiva para un destino concreto.

### Tabla de vecinos

IPv4 utiliza ARP para asociar direcciones IP con direcciones MAC en el segmento local.

##### La información puede observarse mediante:

```text
Networking@SecOpsMX:~$ ip neigh show
```

Ejemplo:

```text
192.168.10.1 dev eth0 lladdr 00:11:22:33:44:55 REACHABLE
```

Los estados pueden incluir, entre otros, REACHABLE, STALE, DELAY, PROBE, FAILED e INCOMPLETE.

Una entrada INCOMPLETE, por ejemplo, indica que *Linux* todavía no ha resuelto correctamente la dirección de enlace.

### Verificación progresiva

##### Una secuencia básica de diagnóstico puede ser:

```text
Networking@SecOpsMX:~$ ip link
Networking@SecOpsMX:~$ ip addr
Networking@SecOpsMX:~$ ip route
Networking@SecOpsMX:~$ ip neigh
Networking@SecOpsMX:~$ ping -c 4 192.168.10.1
```

Después:

```text
Networking@SecOpsMX:~$ ping -c 4 8.8.8.8
```

Finalmente:

```text
Networking@SecOpsMX:~$ ping -c 4 example.com
```

Estos tres últimos pasos no comprueban exactamente lo mismo. Si funciona el primer *ping*, existe conectividad con la puerta de enlace. Si funciona el segundo, existe conectividad IP hacia Internet. Si el tercero falla mientras el segundo funciona, el problema puede encontrarse en DNS y no en el encaminamiento IP.

### Captura del tráfico

*tcpdump* permite observar directamente los paquetes:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni eth0
```

##### Para observar ICMP:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni eth0 icmp
```

##### Para observar ARP:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni eth0 arp
```

##### Para tráfico DNS:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni eth0 port 53
```

La captura permite diferenciar entre un paquete que nunca salió, un paquete que salió pero no recibió respuesta, una respuesta recibida pero descartada posteriormente, una resolución DNS que nunca se produjo, o tráfico que utiliza una interfaz diferente de la esperada.

### Resolución de nombres

##### En sistemas que utilizan systemd-resolved:

```text
Networking@SecOpsMX:~$ resolvectl status
```

Puede comprobarse una consulta concreta mediante:

```text
Networking@SecOpsMX:~$ resolvectl query example.com
```

También puede utilizarse:

```text
Networking@SecOpsMX:~$ dig example.com
```

La resolución de nombres debe considerarse una función independiente de la conectividad IP.

## 15.2 SUBNETTING APLICADO — VLSM

VLSM, *Variable Length Subnet Mask*, permite dividir un bloque de direcciones en subredes de diferentes tamaños.

La ventaja principal es utilizar el espacio IPv4 de acuerdo con las necesidades reales de cada segmento.

Supóngase la red:

```text
10.0.0.0/22
```

<div class="diagram" id="figura-15-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1504" viewBox="0 0 1200 327" role="img" aria-labelledby="g1504-title">
<title id="g1504-title">Reparto del bloque 10.0.0.0/22 mediante VLSM</title>
<defs></defs>
<g id="g1504-c" transform="translate(20 20)"><text x="0" y="22" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Bloque 10.0.0.0/22 · 1 024 direcciones</text>
<rect x="0" y="60" width="290" height="90" rx="3" fill="#f4bfbf" stroke="#d40000" stroke-width="2"/>
<text x="145" y="100" font-size="12.5pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Segmento A</text>
<text x="145" y="124" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">/24 · 256</text>
<rect x="290" y="60" width="145" height="90" rx="3" fill="#bfcff2" stroke="#003ecc" stroke-width="2"/>
<text x="362.5" y="100" font-size="12.5pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Segmento B</text>
<text x="362.5" y="124" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">/25 · 128</text>
<rect x="435" y="60" width="72.5" height="90" rx="3" fill="#bfe4d4" stroke="#009254" stroke-width="2"/>
<text x="471.25" y="100" font-size="12.5pt" font-weight="700" fill="#065f46" text-anchor="middle">C</text>
<text x="471.25" y="124" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">/26 · 64</text>
<rect x="507.5" y="60" width="36.25" height="90" rx="3" fill="#decefa" stroke="#7c3aed" stroke-width="2"/>
<text x="525.62" y="110" font-size="12.5pt" font-weight="700" fill="#5b21b6" text-anchor="middle">D</text>
<text x="525.62" y="172" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">/27</text>
<rect x="543.75" y="60" width="616.25" height="90" rx="3" fill="#ebedf0" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5"/>
<text x="851.88" y="102" font-size="12.5pt" font-weight="700" fill="#1e3a5f" text-anchor="middle">Libres para ampliaciones</text>
<text x="851.88" y="124" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">544 direcciones</text>
<line x1="0" y1="150" x2="0" y2="162" stroke="#364e6c" stroke-width="1.5"/>
<text x="0" y="180" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="start">10.0.0.0</text>
<line x1="290" y1="150" x2="290" y2="162" stroke="#364e6c" stroke-width="1.5"/>
<text x="290" y="180" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">10.0.1.0</text>
<line x1="435" y1="150" x2="435" y2="162" stroke="#364e6c" stroke-width="1.5"/>
<text x="435" y="180" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">10.0.1.128</text>
<line x1="507.5" y1="150" x2="507.5" y2="162" stroke="#364e6c" stroke-width="1.5"/>
<text x="507.5" y="198" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="end">10.0.1.192</text>
<line x1="543.75" y1="150" x2="543.75" y2="162" stroke="#364e6c" stroke-width="1.5"/>
<text x="543.75" y="198" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="start">10.0.1.224</text>
<line x1="1160" y1="150" x2="1160" y2="162" stroke="#364e6c" stroke-width="1.5"/>
<text x="1160" y="180" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="end">10.0.3.255</text>
<text x="0" y="232" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="start">Cada segmento se asigna desde el que requiere más hosts hasta el que requiere menos</text></g><text x="600" y="309" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 15.4. Reparto del bloque 10.0.0.0/22 mediante VLSM.</text></svg>
</div>

El bloque contiene 1024 direcciones, desde 10.0.0.0 hasta 10.0.3.255. Se requieren cuatro segmentos:

- Segmento A → 200 hosts.
- Segmento B → 100 hosts.
- Segmento C → 50 hosts.
- Segmento D → 20 hosts.

La asignación debe comenzar por la red que requiere mayor cantidad de *hosts*. La Figura 15.4 muestra el reparto del bloque y la Tabla 15.1 resume el plan de direccionamiento.

### Segmento A

##### Para 200 *hosts* se necesita:

```text
2^8 - 2 = 254 hosts
```

Por tanto:

```text
10.0.0.0/24
```

Rango:

```text
Red: 10.0.0.0
Hosts: 10.0.0.1 -- 10.0.0.254
Broadcast: 10.0.0.255
```

### Segmento B

##### Para 100 *hosts*:

```text
2^7 - 2 = 126 hosts
```

Se utiliza:

```text
10.0.1.0/25
```

Rango:

```text
Red: 10.0.1.0
Hosts: 10.0.1.1 -- 10.0.1.126
Broadcast: 10.0.1.127
```

### Segmento C

##### Para 50 *hosts*:

```text
2^6 - 2 = 62 hosts
```

Se utiliza:

```text
10.0.1.128/26
```

Rango:

```text
Red: 10.0.1.128
Hosts: 10.0.1.129 -- 10.0.1.190
Broadcast: 10.0.1.191
```

### Segmento D

Para 20 *hosts*:

```text
2^5 - 2 = 30 hosts
```

Se utiliza:

```text
10.0.1.192/27
```

Rango:

```text
Red: 10.0.1.192
Hosts: 10.0.1.193 -- 10.0.1.222
Broadcast: 10.0.1.223
```

Quedan disponibles 544 direcciones en el rango 10.0.1.224 – 10.0.3.255 para futuras ampliaciones.

<div class="diagram tabla-svg" id="tabla-15-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 252" role="img" aria-labelledby="t74-title"><title id="t74-title">Tabla 15.1. Plan de direccionamiento VLSM.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="75.3" y="20.0" dominant-baseline="central" text-anchor="middle">Segmento</text>
<text class="tb-ht" x="266.1" y="20.0" dominant-baseline="central" text-anchor="middle">Hosts requeridos</text>
<text class="tb-ht" x="435.9" y="20.0" dominant-baseline="central" text-anchor="middle">Prefijo</text>
<text class="tb-ht" x="600.8" y="20.0" dominant-baseline="central" text-anchor="middle">Dirección de red</text>
<text class="tb-ht" x="879.7" y="20.0" dominant-baseline="central" text-anchor="middle">Rango de hosts utilizables</text>
<text class="tb-ht" x="1123.9" y="20.0" dominant-baseline="central" text-anchor="middle">Broadcast</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">A</text>
<text class="tb-tx" x="162.5" y="60.8" dominant-baseline="central">200</text>
<text class="tb-tx" x="393.7" y="60.8" dominant-baseline="central">/24</text>
<text class="tb-tx" x="502.0" y="60.8" dominant-baseline="central">10.0.0.0</text>
<text class="tb-tx" x="723.5" y="60.8" dominant-baseline="central">10.0.0.1 – 10.0.0.254</text>
<text class="tb-tx" x="1059.9" y="60.8" dominant-baseline="central">10.0.0.255</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">B</text>
<text class="tb-tx" x="162.5" y="101.5" dominant-baseline="central">100</text>
<text class="tb-tx" x="393.7" y="101.5" dominant-baseline="central">/25</text>
<text class="tb-tx" x="502.0" y="101.5" dominant-baseline="central">10.0.1.0</text>
<text class="tb-tx" x="723.5" y="101.5" dominant-baseline="central">10.0.1.1 – 10.0.1.126</text>
<text class="tb-tx" x="1059.9" y="101.5" dominant-baseline="central">10.0.1.127</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">C</text>
<text class="tb-tx" x="162.5" y="142.2" dominant-baseline="central">50</text>
<text class="tb-tx" x="393.7" y="142.2" dominant-baseline="central">/26</text>
<text class="tb-tx" x="502.0" y="142.2" dominant-baseline="central">10.0.1.128</text>
<text class="tb-tx" x="723.5" y="142.2" dominant-baseline="central">10.0.1.129 – 10.0.1.190</text>
<text class="tb-tx" x="1059.9" y="142.2" dominant-baseline="central">10.0.1.191</text>
<rect class="tb-to" x="0" y="163.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="183.0" dominant-baseline="central">D</text>
<text class="tb-tx" x="162.5" y="183.0" dominant-baseline="central">20</text>
<text class="tb-tx" x="393.7" y="183.0" dominant-baseline="central">/27</text>
<text class="tb-tx" x="502.0" y="183.0" dominant-baseline="central">10.0.1.192</text>
<text class="tb-tx" x="723.5" y="183.0" dominant-baseline="central">10.0.1.193 – 10.0.1.222</text>
<text class="tb-tx" x="1059.9" y="183.0" dominant-baseline="central">10.0.1.223</text>
<text class="tb-cap" x="600.0" y="229.8" text-anchor="middle">Tabla 15.1. Plan de direccionamiento VLSM.</text></svg>
</div>

Nota: el bloque de partida es 10.0.0.0/22. Las subredes se asignan de mayor a menor necesidad de *hosts*. El espacio restante del bloque queda disponible para crecimiento o nuevas subredes.

### Verificación matemática

##### La regla general para IPv4 es:

```text
Hosts utilizables = 2^(bits de host) - 2
```

El proceso debe comenzar siempre por el segmento que requiere mayor cantidad de *hosts*.

El error habitual consiste en asignar el mismo tamaño de subred a todos los segmentos aunque sus necesidades sean diferentes.

### Verificación con Linux

##### Puede comprobarse una dirección y su prefijo:

```text
Networking@SecOpsMX:~$ ipcalc 10.0.1.128/26
```

si *ipcalc* está instalado. También puede utilizarse:

```text
Networking@SecOpsMX:~$ sudo ip addr add 10.0.1.130/26 dev eth0
Networking@SecOpsMX:~$ ip route
```

La tabla de rutas debe reflejar (de forma simplificada; la salida real incluye proto *kernel* scope link src 10.0.1.130):

```text
10.0.1.128/26 dev eth0
```

El cálculo de VLSM debe validarse antes de realizar configuraciones físicas o virtuales. Un error de direccionamiento puede propagarse posteriormente a las VLAN, el enrutamiento, DHCP y las políticas de *firewall*.

## 15.3 VLAN REDES LOCALES VIRTUALES

Una VLAN permite separar lógicamente distintos dominios de *broadcast* sobre una infraestructura Ethernet común.

Supóngase la siguiente segmentación:

<div class="diagram tabla-svg" id="tabla-15-2" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 211" role="img" aria-labelledby="t75-title"><title id="t75-title">Tabla 15.2. Plan de VLAN y direccionamiento.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="94.9" y="20.0" dominant-baseline="central" text-anchor="middle">VLAN ID</text>
<text class="tb-ht" x="341.7" y="20.0" dominant-baseline="central" text-anchor="middle">Nombre</text>
<text class="tb-ht" x="648.6" y="20.0" dominant-baseline="central" text-anchor="middle">Red asignada</text>
<text class="tb-ht" x="1001.7" y="20.0" dominant-baseline="central" text-anchor="middle">Interfaz de gateway</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">10</text>
<text class="tb-tx" x="201.7" y="60.8" dominant-baseline="central">Administración</text>
<text class="tb-tx" x="505.8" y="60.8" dominant-baseline="central">192.168.10.0/24</text>
<text class="tb-tx" x="815.5" y="60.8" dominant-baseline="central">eth0.10 · 192.168.10.1</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">20</text>
<text class="tb-tx" x="201.7" y="101.5" dominant-baseline="central">Usuarios</text>
<text class="tb-tx" x="505.8" y="101.5" dominant-baseline="central">192.168.20.0/24</text>
<text class="tb-tx" x="815.5" y="101.5" dominant-baseline="central">eth0.20 · 192.168.20.1</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">30</text>
<text class="tb-tx" x="201.7" y="142.2" dominant-baseline="central">Servidores</text>
<text class="tb-tx" x="505.8" y="142.2" dominant-baseline="central">192.168.30.0/24</text>
<text class="tb-tx" x="815.5" y="142.2" dominant-baseline="central">eth0.30 · 192.168.30.1</text>
<text class="tb-cap" x="600.0" y="189.0" text-anchor="middle">Tabla 15.2. Plan de VLAN y direccionamiento.</text></svg>
</div>

Nota: `eth0.10`, `eth0.20` y `eth0.30` son nombres de ejemplo para subinterfaces 802.1Q sobre `eth0` en *Linux*. La interfaz física debe estar conectada a un puerto troncal que transporte las VLAN correspondientes. La separación en VLAN no habilita automáticamente la comunicación entre ellas; se requiere *routing* de capa 3 y políticas de filtrado.

- VLAN 10 → Administración.
- VLAN 20 → Usuarios.
- VLAN 30 → Servidores.

Con las siguientes redes:

- VLAN 10 → 192.168.10.0/24.
- VLAN 20 → 192.168.20.0/24.
- VLAN 30 → 192.168.30.0/24.

La separación de VLAN no implica automáticamente comunicación entre ellas. Para permitir comunicación entre VLAN será necesario realizar *routing*. La Tabla 15.2 resume el plan de VLAN y direccionamiento.

### Creación de una subinterfaz VLAN

##### Para VLAN 10:

```text
Networking@SecOpsMX:~$ sudo ip link add link eth0 name eth0.10 type vlan id 10
Networking@SecOpsMX:~$ sudo ip addr add 192.168.10.1/24 dev eth0.10
Networking@SecOpsMX:~$ sudo ip link set eth0.10 up
```

##### Para VLAN 20:

```text
Networking@SecOpsMX:~$ sudo ip link add link eth0 name eth0.20 type vlan id 20
Networking@SecOpsMX:~$ sudo ip addr add 192.168.20.1/24 dev eth0.20
Networking@SecOpsMX:~$ sudo ip link set eth0.20 up
```

##### Para VLAN 30:

```text
Networking@SecOpsMX:~$ sudo ip link add link eth0 name eth0.30 type vlan id 30
Networking@SecOpsMX:~$ sudo ip addr add 192.168.30.1/24 dev eth0.30
Networking@SecOpsMX:~$ sudo ip link set eth0.30 up
```

Verificación:

```text
Networking@SecOpsMX:~$ ip -d link show eth0.10
Networking@SecOpsMX:~$ ip -d link show eth0.20
Networking@SecOpsMX:~$ ip -d link show eth0.30
```

Debe observarse el identificador VLAN correspondiente.

### Puerto trunk

El enlace que transporta varias VLAN debe configurarse como *trunk* en el equipo Ethernet correspondiente. El *trunk* debe utilizar encapsulación IEEE 802.1Q para transportar las etiquetas VLAN.

Conceptualmente:

```text
Switch
|
802.1Q trunk
|
Linux
├── eth0.10
├── eth0.20
└── eth0.30
```

Cada trama transportada puede incorporar una etiqueta 802.1Q que identifica la VLAN.

### Verificación mediante captura

<div class="diagram" id="figura-15-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1505" viewBox="0 0 1200 452" role="img" aria-labelledby="g1505-title">
<title id="g1505-title">Routing entre VLAN mediante subinterfaces y trunk 802.1Q</title>
<defs><marker id="g1505m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1505n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker><marker id="g1505md40000" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#d40000"/></marker><marker id="g1505nd40000" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#d40000"/></marker><marker id="g1505m003ecc" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#003ecc"/></marker><marker id="g1505n003ecc" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#003ecc"/></marker><marker id="g1505m009254" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#009254"/></marker><marker id="g1505n009254" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#009254"/></marker></defs>
<g id="g1505-c" transform="translate(20 20)"><g transform="translate(110 120) scale(1.2)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="110" y="180" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router Linux</text>
<rect x="10" y="215" width="200" height="28" rx="14.0" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"/>
<text x="110" y="233.66" font-size="10.35pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">eth1.10 · 192.168.10.1/24</text>
<rect x="10" y="251" width="200" height="28" rx="14.0" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/>
<text x="110" y="269.66" font-size="10.35pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">eth1.20 · 192.168.20.1/24</text>
<rect x="10" y="287" width="200" height="28" rx="14.0" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/>
<text x="110" y="305.66" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">eth1.30 · 192.168.30.1/24</text>
<polyline points="180,120 420,120" fill="none" stroke="#364e6c" stroke-width="3.5" marker-end="url(#g1505m364e6c)" marker-start="url(#g1505n364e6c)"/>
<rect x="215" y="82" width="170" height="28" rx="14.0" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/>
<text x="300" y="100.66" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Trunk 802.1Q</text>
<g transform="translate(480 120) scale(1.0)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<text x="480" y="170" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Switch</text>
<rect x="700" y="0" width="460" height="110" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<text x="716" y="28" font-size="12.5pt" font-weight="700" fill="#7f1d1d" text-anchor="start">VLAN 10 · Administración</text>
<text x="716" y="50" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="start">192.168.10.0/24</text>
<g transform="translate(1060 52) scale(0.6)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<polyline points="545,120 620,120 620,55 698,55" fill="none" stroke="#d40000" stroke-width="2.5" marker-end="url(#g1505md40000)"/>
<rect x="700" y="126" width="460" height="110" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<text x="716" y="154" font-size="12.5pt" font-weight="700" fill="#1e3a8a" text-anchor="start">VLAN 20 · Usuarios</text>
<text x="716" y="176" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="start">192.168.20.0/24</text>
<g transform="translate(1060 178) scale(0.6)" data-lib="pc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6ecfa" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<polyline points="545,120 620,120 620,181 698,181" fill="none" stroke="#003ecc" stroke-width="2.5" marker-end="url(#g1505m003ecc)"/>
<rect x="700" y="252" width="460" height="110" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<text x="716" y="280" font-size="12.5pt" font-weight="700" fill="#065f46" text-anchor="start">VLAN 30 · Servidores</text>
<text x="716" y="302" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="start">192.168.30.0/24</text>
<g transform="translate(1060 304) scale(0.55)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#009254"/><path d="M-34 -27.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#009254"/><path d="M-34 1.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#009254"/><path d="M-34 30.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"/></g>
<polyline points="545,120 620,120 620,307 698,307" fill="none" stroke="#009254" stroke-width="2.5" marker-end="url(#g1505m009254)"/></g><text x="600" y="434" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 15.5. Routing entre VLAN mediante subinterfaces y trunk 802.1Q.</text></svg>
</div>

##### Para observar tráfico VLAN:

```text
Networking@SecOpsMX:~$ sudo tcpdump -eni eth0 vlan
```

La opción -e permite observar información de enlace Ethernet. Puede filtrarse una VLAN concreta:

```text
Networking@SecOpsMX:~$ sudo tcpdump -eni eth0 vlan 10
```

### Routing entre VLAN

##### Para que *Linux* funcione como *router*:

```text
Networking@SecOpsMX:~$ sudo sysctl -w net.ipv4.ip_forward=1
```

Comprobación:

```text
Networking@SecOpsMX:~$ sysctl net.ipv4.ip_forward
```

Debe obtenerse:

```text
net.ipv4.ip_forward = 1
```

La arquitectura resultante se muestra en la Figura 15.5. La comunicación entre VLAN deberá además estar permitida por cualquier *firewall* que opere sobre el tráfico reenviado.

## 15.4 ROUTING ENTRE REDES

El *routing* determina por qué interfaz y hacia qué siguiente salto debe enviarse un paquete.

##### La tabla puede consultarse mediante:

```text
Networking@SecOpsMX:~$ ip route
```

Ejemplo:

```text
10.0.10.0/24 dev eth1
10.0.20.0/24 dev eth2
default via 10.0.10.1 dev eth1
```

### Rutas estáticas

##### Para alcanzar 10.20.0.0/24 a través de 192.168.10.2 se puede utilizar:

```text
Networking@SecOpsMX:~$ sudo ip route add 10.20.0.0/24 via 192.168.10.2
```

Verificación:

```text
Networking@SecOpsMX:~$ ip route get 10.20.0.10
```

### Activación del forwarding

##### En un router Linux:

```text
Networking@SecOpsMX:~$ sudo sysctl -w net.ipv4.ip_forward=1
```

La configuración persistente puede establecerse en /etc/sysctl.d/99-routing.conf con:

```text
net.ipv4.ip_forward=1
```

y aplicarse mediante:

```text
Networking@SecOpsMX:~$ sudo sysctl --system
```

### Prueba del camino

##### ping permite comprobar conectividad:

```text
Networking@SecOpsMX:~$ ping -c 4 10.20.0.10
```

##### traceroute permite observar saltos intermedios:

```text
Networking@SecOpsMX:~$ traceroute 10.20.0.10
```

o:

```text
Networking@SecOpsMX:~$ tracepath 10.20.0.10
```

*tracepath* resulta especialmente útil para observar información relacionada con PMTU.

Si la resolución del nombre falla —por ejemplo, si *ping* informa que no puede resolver el nombre—, debe investigarse DNS. Un fallo de respuesta ICMP al ejecutar `ping example.com` no demuestra por sí solo un problema de resolución: el nombre puede haberse resuelto correctamente y el destino simplemente no responder a ICMP.

### Routing dinámico con OSPF

En redes mayores puede utilizarse un protocolo de *routing* dinámico. La Figura 15.6 representa el intercambio de rutas entre *routers* de una misma área.

##### Con FRRouting, la configuración conceptual de OSPF puede incluir:

```text
router ospf
network 10.0.10.0/24 area 0
network 10.0.20.0/24 area 0
```

La verificación dependerá de la configuración concreta de FRRouting.

Requiere tener FRRouting instalado y el demonio *ospfd* habilitado.

Por ejemplo:

```text
Networking@SecOpsMX:~$ vtysh
```

*vtysh* es el *shell* integrado de FRRouting.

Los siguientes comandos se ejecutan dentro de él:

```text
show ip ospf neighbor
show ip route ospf
```

<div class="diagram" id="figura-15-06" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1506" viewBox="0 0 1200 372" role="img" aria-labelledby="g1506-title">
<title id="g1506-title">Intercambio de rutas con OSPF en el área 0</title>
<defs><marker id="g1506m7c3aed" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#7c3aed"/></marker><marker id="g1506n7c3aed" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#7c3aed"/></marker></defs>
<g id="g1506-c" transform="translate(20 20)"><rect x="0" y="0" width="1160" height="300" rx="6" fill="#f2ebfd" fill-opacity="0.55" stroke="#7c3aed" stroke-width="2" stroke-dasharray="7 5"/>
<text x="12" y="22" font-size="12.5pt" font-weight="700" fill="#5b21b6" text-anchor="start">Área 0</text>
<g transform="translate(170 130) scale(1.1)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="170" y="190" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router 1</text>
<text x="170" y="210" font-size="10.35pt" font-weight="400" fill="#5b21b6" text-anchor="middle">10.0.10.1</text>
<g transform="translate(580 130) scale(1.1)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="580" y="190" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router Linux (FRRouting)</text>
<text x="580" y="210" font-size="10.35pt" font-weight="400" fill="#5b21b6" text-anchor="middle">eth1 · eth2</text>
<g transform="translate(990 130) scale(1.1)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="990" y="190" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router 2</text>
<text x="990" y="210" font-size="10.35pt" font-weight="400" fill="#5b21b6" text-anchor="middle">10.0.20.2</text>
<line x1="240" y1="130" x2="510" y2="130" stroke="#364e6c" stroke-width="3.5"/>
<line x1="650" y1="130" x2="920" y2="130" stroke="#364e6c" stroke-width="3.5"/>
<rect x="300" y="92" width="150" height="28" rx="14.0" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/>
<text x="375" y="110.66" font-size="10.35pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">10.0.10.0/24</text>
<rect x="710" y="92" width="150" height="28" rx="14.0" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/>
<text x="785" y="110.66" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">10.0.20.0/24</text>
<polyline points="250,246 500,246" fill="none" stroke="#7c3aed" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#g1506m7c3aed)" marker-start="url(#g1506n7c3aed)"/>
<polyline points="660,246 910,246" fill="none" stroke="#7c3aed" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#g1506m7c3aed)" marker-start="url(#g1506n7c3aed)"/>
<text x="375" y="270" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Hello y LSA</text>
<text x="785" y="270" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Hello y LSA</text></g><text x="600" y="354" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 15.6. Intercambio de rutas con OSPF en el área 0.</text></svg>
</div>

El objetivo de OSPF es permitir que los *routers* intercambien información sobre las redes que conocen.

### Diagnóstico de routing

##### Cuando un destino no es alcanzable, debe comprobarse:

```text
Networking@SecOpsMX:~$ ip route get DESTINO
```

Después:

```text
Networking@SecOpsMX:~$ ip neigh show
```

y finalmente:

```text
Networking@SecOpsMX:~$ sudo tcpdump
```

Una ruta incorrecta puede producir ausencia total de conectividad, tráfico enviado por una interfaz incorrecta, retorno por otro camino, bucles o pérdida solamente en determinados sentidos. Conocer la tabla de *routing* no es suficiente: debe comprobarse el camino real de ida y retorno.

## 15.5 FIREWALL — NFTABLES

nftables permite controlar tráfico mediante reglas organizadas en tablas, cadenas y expresiones.

La primera comprobación debe realizarse sobre la configuración existente:

```text
Networking@SecOpsMX:~$ sudo nft list ruleset
```

Antes de modificar un *firewall* de producción debe guardarse y revisarse el conjunto de reglas activo; sin esa referencia no es posible comparar el comportamiento previo y posterior al cambio ni revertirlo con certeza.

### Firewall básico

Advertencia: en un entorno remoto, aplicar una política *drop* sin haber preparado todas las reglas de permiso puede interrumpir la sesión SSH y bloquear el acceso. En nftables, la política de una cadena base se define al crearla; no debe suponerse que puede modificarse con un comando genérico posterior.

Prepare el *ruleset* completo y cárguelo desde un archivo con `nft -f`. Realice la operación desde consola local o disponga de un mecanismo de recuperación fuera de banda.

##### Una tabla de la familia inet (que procesa IPv4 e IPv6) puede crearse mediante:

La familia inet permite filtrar ambas versiones de IP, pero no hace que una regla icmp cubra ICMPv6: deben contemplarse expresamente los mensajes de cada protocolo. Una política restrictiva que omita *Neighbor Discovery* o los mensajes ICMPv6 necesarios puede romper la conectividad IPv6.

```text
Networking@SecOpsMX:~$ sudo nft add table inet filtro
```

##### Cadena de entrada (inicialmente con policy accept para evitar bloqueos):

```text
Networking@SecOpsMX:~$ sudo nft add chain inet filtro input '{ type filter hook input priority 0; policy accept; }'
```

##### Cadena de forwarding (inicialmente con policy accept):

```text
Networking@SecOpsMX:~$ sudo nft add chain inet filtro forward '{ type filter hook forward priority 0; policy accept; }'
```

##### Cadena de salida:

```text
Networking@SecOpsMX:~$ sudo nft add chain inet filtro output '{ type filter hook output priority 0; policy accept; }'
```

##### Permitir loopback:

```text
Networking@SecOpsMX:~$ sudo nft add rule inet filtro input iif lo accept
```

##### Permitir conexiones establecidas:

```text
Networking@SecOpsMX:~$ sudo nft add rule inet filtro input ct state established,related accept
```

##### Permitir SSH:

```text
Networking@SecOpsMX:~$ sudo nft add rule inet filtro input ip saddr 192.168.10.0/24 tcp dport 22 accept
```

El prefijo 192.168.10.0/24 es ilustrativo y corresponde a la VLAN de administración del laboratorio; debe sustituirse por la red administrativa real. Si se permite administración por IPv6, debe añadirse una regla equivalente con `ip6 saddr` y el prefijo autorizado.

##### Permitir ICMP (IPv4):

```text
Networking@SecOpsMX:~$ sudo nft add rule inet filtro input icmp type '{ destination-unreachable, time-exceeded, parameter-problem, echo-request, echo-reply }' accept
```

##### Permitir ICMPv6 (necesario para NDP y SLAAC en una tabla inet con política drop):

```text
Networking@SecOpsMX:~$ sudo nft add rule inet filtro input icmpv6 type '{ destination-unreachable, packet-too-big, time-exceeded, parameter-problem, nd-router-solicit, nd-router-advert, nd-neighbor-solicit, nd-neighbor-advert, echo-request, echo-reply }' accept
```

Para aplicar una política restrictiva de forma controlada, prepare un archivo que contenga el *ruleset* completo: las tablas, las cadenas base con policy drop y todas las reglas de permiso requeridas. Si se utiliza `flush ruleset`, el archivo debe reconstruir también las demás reglas que deban permanecer activas. Cargue el archivo como una transacción y realice la operación desde consola local o con un mecanismo de recuperación fuera de banda:

```text
Networking@SecOpsMX:~$ sudo nft -f /etc/nftables.conf
Networking@SecOpsMX:~$ sudo nft list ruleset
```

<div class="diagram" id="figura-15-07" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1507" viewBox="0 0 1200 362" role="img" aria-labelledby="g1507-title">
<title id="g1507-title">Recorrido por un router Linux con filtrado y NAT</title>
<defs><marker id="g1507m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1507n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g1507-c" transform="translate(20 20)"><circle cx="134.5" cy="15" r="15" fill="#1e3a8a"/>
<text x="134.5" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
<rect x="0" y="38" width="269" height="202" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="72" x2="269" y2="72" stroke="#003ecc" stroke-width="1.5"/>
<text x="134.5" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Entrada</text>
<g transform="translate(134.5 132.48) scale(0.8)" data-lib="pc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#e6ecfa" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="134.5" y="212.64" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">El paquete llega por eth1</text>
<polyline points="271,139 295,139" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1507m364e6c)"/>
<circle cx="431.5" cy="15" r="15" fill="#7f1d1d"/>
<text x="431.5" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
<rect x="297" y="38" width="269" height="202" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="297" y1="72" x2="566" y2="72" stroke="#d40000" stroke-width="1.5"/>
<text x="431.5" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cadena forward</text>
<g transform="translate(431.5 132.48) scale(0.8)" data-lib="firewall"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><path d="M-36 -9.5H36M-36 9.5H36M-12 -28V-9.5M12 -9.5V9.5M-12 9.5V28" stroke="#d40000" stroke-width="2.5" fill="none"/><rect x="-36" y="-28" width="72" height="18.5" rx="3" fill="#f4bfbf" stroke="#d40000" stroke-width="3"/><path d="M-36 -9.5H36M-12 -28V-9.5M12 -9.5V9.5M-12 9.5V28" stroke="#d40000" stroke-width="2.5" fill="none"/></g>
<text x="431.5" y="203.14" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Reglas de filtrado: permitir o</text>
<text x="431.5" y="222.14" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">descartar</text>
<polyline points="568,139 592,139" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1507m364e6c)"/>
<circle cx="728.5" cy="15" r="15" fill="#7c2d12"/>
<text x="728.5" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
<rect x="594" y="38" width="269" height="202" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="594" y1="72" x2="863" y2="72" stroke="#dd3a00" stroke-width="1.5"/>
<text x="728.5" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cadena postrouting</text>
<g transform="translate(728.5 132.48) scale(0.8)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#fcebe6" stroke="#dd3a00" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#dd3a00"></circle></g>
<text x="728.5" y="203.14" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Masquerade: traducción de la</text>
<text x="728.5" y="222.14" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">dirección de origen</text>
<polyline points="865,139 889,139" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1507m364e6c)"/>
<circle cx="1025.5" cy="15" r="15" fill="#5b21b6"/>
<text x="1025.5" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text>
<rect x="891" y="38" width="269" height="202" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="891" y1="72" x2="1160" y2="72" stroke="#7c3aed" stroke-width="1.5"/>
<text x="1025.5" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Salida</text>
<g transform="translate(1025.5 132.48) scale(0.8)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="1025.5" y="212.64" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">El paquete sale por eth0</text>
<rect x="330" y="252" width="500" height="30" rx="15.0" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/>
<text x="580" y="271.66" font-size="10.35pt" font-weight="700" fill="#1e3a5f" text-anchor="middle">Requiere net.ipv4.ip_forward = 1</text></g><text x="600" y="344" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 15.7. Recorrido por un router Linux con filtrado y NAT.</text></svg>
</div>

En una tabla de familia inet, las expresiones `icmp` e `icmpv6` permiten filtrar por separado los mensajes de cada versión. En IPv6 deben contemplarse los mensajes necesarios para NDP y autoconfiguración, así como los mensajes de error ICMPv6 —en particular *Packet Too Big*— que intervienen en *Path MTU Discovery*. **La lista mostrada es una base ilustrativa**: debe ajustarse a la política de seguridad y a los servicios requeridos, sin bloquear los mensajes necesarios para el funcionamiento de IPv6.

##### En la cadena forward puede utilizarse:

```text
Networking@SecOpsMX:~$ sudo nft add rule inet filtro forward ct state established,related accept
```

La regla anterior solo permite tráfico de retorno asociado a conexiones existentes.

Para iniciar comunicaciones entre redes deben añadirse reglas explícitas que identifiquen los orígenes, destinos, interfaces y servicios autorizados.

Posteriormente pueden definirse reglas específicas para permitir solo los flujos requeridos. El orden de las reglas es importante.

### NAT

Una tabla NAT puede utilizarse para proporcionar salida a Internet:

```text
Networking@SecOpsMX:~$ sudo nft add table ip nat
```

##### Una cadena postrouting:

```text
Networking@SecOpsMX:~$ sudo nft add chain ip nat postrouting '{ type nat hook postrouting priority 100; policy accept; }'
```

##### Masquerade:

```text
Networking@SecOpsMX:~$ sudo nft add rule ip nat postrouting oifname "eth0" ip saddr 192.168.10.0/24 masquerade
```

Esta tabla usa la familia ip y, por tanto, la regla de NAT mostrada se aplica a IPv4. Para IPv6 se requiere una decisión de diseño específica; no debe suponerse que esta regla también traduce tráfico IPv6.

Esto requiere que el *forwarding* IP esté habilitado. Verificar previamente:

```text
Networking@SecOpsMX:~$ sysctl net.ipv4.ip_forward
```

Debe devolver `net.ipv4.ip_forward = 1`. Si no, activarlo antes de aplicar la regla de *masquerade*.

### Verificación

##### Mostrar reglas:

```text
Networking@SecOpsMX:~$ sudo nft list ruleset
```

##### Contadores:

```text
Networking@SecOpsMX:~$ sudo nft -a list chain inet filtro forward
```

Los contadores se activan añadiendo la expresión `counter` a la regla. Ejemplo concreto:

```text
Networking@SecOpsMX:~$ sudo nft add rule inet filtro input ct state established,related counter accept
```

Con ello puede determinarse si un paquete realmente está atravesando una regla.

También puede utilizarse:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni eth0
```

y:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni eth1
```

simultáneamente para determinar si el paquete entra y sale del *router*.

### Principio de diagnóstico

Ante un bloqueo debe determinarse primero si:

```text
paquete llega
↓
firewall lo acepta
↓
routing decide salida
↓
paquete abandona interfaz
↓
respuesta regresa
```

Si el paquete aparece en la interfaz de entrada pero no en la de salida, deben investigarse *firewall*, *routing* o políticas locales.

## 15.6 RED PARCIAL INTEGRADA — DHCP

En una red integrada, DHCP permite asignar automáticamente dirección IP, máscara, puerta de enlace, servidores DNS y tiempo de concesión. Una implementación sencilla del servicio DHCP puede utilizar *dnsmasq*.

Supóngase:

```text
Red: 192.168.20.0/24
Gateway: 192.168.20.1
DHCP: 192.168.20.100 -- 192.168.20.200
DNS: 192.168.20.1
```

El servidor DHCP debe tener una dirección IP en la misma subred que el rango asignado, por ejemplo 192.168.20.1.

### Configuración conceptual

La configuración de *dnsmasq* se encuentra habitualmente en /etc/dnsmasq.conf o en archivos dentro de /etc/dnsmasq.d/.

Una configuración puede contener:

```text
interface=eth0.20
dhcp-range=192.168.20.100,192.168.20.200,255.255.255.0,12h
dhcp-option=3,192.168.20.1
dhcp-option=6,192.168.20.1
```

Debe verificarse que el servicio esté escuchando en la interfaz correcta.

Por ejemplo:

```text
Networking@SecOpsMX:~$ sudo ss -lunp | grep ':67'
```

### Proceso DORA

El intercambio DHCPv4 clásico, conocido como DORA, comprende:

```text
DHCPDISCOVER
↓
DHCPOFFER
↓
DHCPREQUEST
↓
DHCPACK
```

##### Puede observarse mediante:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni eth0.20 port 67 or port 68
```

Una captura permite determinar exactamente en qué etapa falla el proceso.

La Figura 15.8 muestra el intercambio de mensajes que la captura debe revelar; la ausencia de uno de ellos indica la etapa en la que falla el proceso.

### Verificación del cliente

En *Linux*, dependiendo del gestor de red utilizado:

```text
Networking@SecOpsMX:~$ ip addr
Networking@SecOpsMX:~$ ip route
Networking@SecOpsMX:~$ resolvectl status
```

El cliente debe obtener IP, prefijo, *gateway* y DNS. No basta con comprobar que recibió una dirección.

### Diagnóstico

Si el cliente no recibe IP:

```text
Cliente
|
DHCPDISCOVER
↓
VLAN
↓
Servidor DHCP
```

debe comprobarse primero si el DHCPDISCOVER aparece en la interfaz.

Si aparece pero no existe respuesta: servicio DHCP, interfaz configurada, *firewall*, rango DHCP o VLAN. Si aparece respuesta en el servidor pero no llega al cliente: VLAN, *trunk*, *bridge*, *firewall* o enlace físico o virtual.

<div class="diagram" id="figura-15-08" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1508" viewBox="0 0 1200 472" role="img" aria-labelledby="g1508-title">
<title id="g1508-title">Intercambio de mensajes del proceso DORA</title>
<defs><marker id="g1508m003ecc" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#003ecc"/></marker><marker id="g1508n003ecc" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#003ecc"/></marker><marker id="g1508m009254" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#009254"/></marker><marker id="g1508n009254" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#009254"/></marker></defs>
<g id="g1508-c" transform="translate(20 20)"><g transform="translate(170 50) scale(0.7)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="170" y="100" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cliente</text>
<g transform="translate(990 50) scale(0.7)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<text x="990" y="100" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Servidor DHCP</text>
<line x1="170" y1="116" x2="170" y2="390" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5"/>
<line x1="990" y1="116" x2="990" y2="390" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5"/>
<polyline points="170,160 990,160" fill="none" stroke="#003ecc" stroke-width="3" marker-end="url(#g1508m003ecc)"/>
<text x="580" y="140" font-size="10.9pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">DHCPDISCOVER · Busca un servidor (difusión)</text>
<circle cx="110" cy="160" r="15" fill="#1e3a8a"/>
<text x="110" y="165" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">D</text>
<polyline points="990,226 170,226" fill="none" stroke="#009254" stroke-width="3" marker-end="url(#g1508m009254)"/>
<text x="580" y="206" font-size="10.9pt" font-weight="700" fill="#065f46" text-anchor="middle">DHCPOFFER · Propone dirección, máscara, gateway y DNS</text>
<circle cx="110" cy="226" r="15" fill="#065f46"/>
<text x="110" y="231" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">O</text>
<polyline points="170,292 990,292" fill="none" stroke="#003ecc" stroke-width="3" marker-end="url(#g1508m003ecc)"/>
<text x="580" y="272" font-size="10.9pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">DHCPREQUEST · Solicita la oferta elegida</text>
<circle cx="110" cy="292" r="15" fill="#1e3a8a"/>
<text x="110" y="297" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">R</text>
<polyline points="990,358 170,358" fill="none" stroke="#009254" stroke-width="3" marker-end="url(#g1508m009254)"/>
<text x="580" y="338" font-size="10.9pt" font-weight="700" fill="#065f46" text-anchor="middle">DHCPACK · Confirma la concesión</text>
<circle cx="110" cy="358" r="15" fill="#065f46"/>
<text x="110" y="363" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">A</text></g><text x="600" y="454" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 15.8. Intercambio de mensajes del proceso DORA.</text></svg>
</div>

### Integración

Una red completa puede quedar estructurada así:

```text
INTERNET
|
Router
|
+---------+---------+
| |
Firewall |
+---------+---------+
|
Linux Router/DHCP/DNS
|
802.1Q trunk / VLAN
+---------+---------+---------+
| | | |
VLAN 10 VLAN 20 VLAN 30
Gestión Usuarios Servidores
```

En esta arquitectura deben verificarse independientemente Ethernet, VLAN, IP, *Routing*, *Firewall*, DHCP, DNS y Aplicación. Una red parcialmente integrada con asignación dinámica de direcciones y servicios básicos operativos se representa en el **Anexo XI.**

## 15.7 RED EMPRESARIAL COMPLETA

Cuando la continuidad del servicio es un requisito, un único *router* o *gateway* constituye un punto único de falla: su avería interrumpe la salida de toda la red, con independencia de lo robusto que sea el resto del diseño.

Una arquitectura simplificada puede ser:

```text
INTERNET
|
+---------+---------+
| |
Router A Router B
| |
+---------+---------+
|
Red interna
```

Para proporcionar una puerta de enlace virtual puede utilizarse VRRP mediante *keepalived*.

Cuando el nodo asume la VIP, debe aparecer en su interfaz. VRRP suele anunciar el cambio mediante mecanismos como *gratuitous ARP* en IPv4 o *Neighbor Advertisement* no solicitado en IPv6, para ayudar a actualizar las cachés de los vecinos.

La continuidad real también depende de que el nodo de respaldo tenga rutas, NAT, reglas de *firewall* y estado de servicios correctamente configurados; VRRP por sí solo solo proporciona redundancia de *gateway* virtual en el segmento correspondiente. Ejemplo:

```text
Router A → 192.168.10.2
Router B → 192.168.10.3
VIP → 192.168.10.1
```

Los clientes utilizan solo 192.168.10.1 como *gateway*.

### Principio de funcionamiento

Mientras Router A sea el nodo activo:

```text
Cliente
|
192.168.10.1
|
Router A
```

Si Router A deja de prestar servicio, Router B puede asumir la dirección virtual:

```text
Cliente
|
192.168.10.1
|
Router B
```

El cliente no necesita modificar su *gateway*. La Figura 15.9 compara la operación normal con la situación posterior a la falla.

### Configuración conceptual

La configuración de *keepalived* se encuentra en /etc/keepalived/keepalived.conf y requiere tener *keepalived* instalado. Una estructura semejante a:

```text
vrrp_instance VI_1 {
state BACKUP
interface eth0
virtual_router_id 51
priority 110
advert_int 1
virtual_ipaddress {
192.168.10.1/24
}
}
```

En el segundo *router* se utilizaría una prioridad inferior, por ejemplo:

```text
priority 100
```

<div class="diagram" id="figura-15-09" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1509" viewBox="0 0 1200 472" role="img" aria-labelledby="g1509-title">
<title id="g1509-title">Conmutación por falla de la puerta de enlace con VRRP</title>
<defs><marker id="g1509m009254" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#009254"/></marker><marker id="g1509n009254" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#009254"/></marker><marker id="g1509m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1509n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g1509-c" transform="translate(20 20)"><rect x="0" y="0" width="560" height="400" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="0" y1="34" x2="560" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="280" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Operación normal</text>
<rect x="600" y="0" width="560" height="400" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="600" y1="34" x2="1160" y2="34" stroke="#dd3a00" stroke-width="1.5"/>
<text x="880" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Tras la falla del Router A</text>
<g transform="translate(280 90) scale(0.6)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="336" y="96" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Clientes</text>
<rect x="180" y="140" width="200" height="28" rx="14.0" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/>
<text x="280" y="158.66" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Gateway 192.168.10.1 (VIP)</text>
<polyline points="250,168 170,218" fill="none" stroke="#009254" stroke-width="3" marker-end="url(#g1509m009254)"/>
<polyline points="310,168 390,218" fill="none" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#g1509m364e6c)"/>
<g transform="translate(170 250) scale(0.9)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="170" y="300" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router A</text>
<g transform="translate(390 250) scale(0.9)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="390" y="300" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router B</text>
<rect x="125" y="320" width="90" height="26" rx="13.0" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/>
<text x="170" y="337.66" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">Maestro</text>
<rect x="345" y="320" width="90" height="26" rx="13.0" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"/>
<text x="390" y="337.66" font-size="10.35pt" font-weight="700" fill="#1e3a5f" text-anchor="middle">Respaldo</text>
<line x1="224" y1="250" x2="336" y2="250" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5"/>
<text x="280" y="240" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">VRRP</text>
<g transform="translate(880 90) scale(0.6)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="936" y="96" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Clientes</text>
<rect x="780" y="140" width="200" height="28" rx="14.0" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/>
<text x="880" y="158.66" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Gateway 192.168.10.1 (VIP)</text>
<polyline points="850,168 770,218" fill="none" stroke="#364e6c" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#g1509m364e6c)"/>
<polyline points="910,168 990,218" fill="none" stroke="#009254" stroke-width="3" marker-end="url(#g1509m009254)"/>
<g transform="translate(770 250) scale(0.9)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="770" y="300" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router A</text>
<g transform="translate(990 250) scale(0.9)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="990" y="300" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router B</text>
<rect x="725" y="320" width="90" height="26" rx="13.0" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"/>
<text x="770" y="337.66" font-size="10.35pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Caído</text>
<rect x="945" y="320" width="90" height="26" rx="13.0" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/>
<text x="990" y="337.66" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">Maestro</text>
<g transform="translate(810 220) scale(0.5)" data-lib="x"><circle cx="0" cy="0" r="28" fill="#d40000"></circle><path d="M-11 -11 L11 11 M11 -11 L-11 11" stroke="#ffffff" stroke-width="5" stroke-linecap="round"></path></g>
<polyline points="562,200 598,200" fill="none" stroke="#364e6c" stroke-width="3" marker-end="url(#g1509m364e6c)"/>
<text x="280" y="378" font-size="10.35pt" font-weight="400" fill="#065f46" text-anchor="middle">La dirección virtual está en el Router A</text>
<text x="880" y="378" font-size="10.35pt" font-weight="400" fill="#7c2d12" text-anchor="middle">El Router B asume la dirección virtual</text></g><text x="600" y="454" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 15.9. Conmutación por falla de la puerta de enlace con VRRP.</text></svg>
</div>

**Nota**: en despliegues modernos se recomienda usar state *BACKUP* con prioridad para ambos nodos y dejar que la prioridad determine el maestro. Esto evita conflictos si el nodo primario se recupera.

La configuración exacta debe adaptarse a la versión de *keepalived*, interfaces y requisitos de seguridad.

##### Estado del servicio:

```text
Networking@SecOpsMX:~$ sudo systemctl status keepalived
```

##### Direcciones:

```text
Networking@SecOpsMX:~$ ip addr show
```

##### Cuando el nodo es propietario de la VIP debe aparecer:

```text
192.168.10.1/24
```

##### Puede observarse el tráfico VRRP sobre IPv4:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni eth0 ip proto 112
```

El filtro `ip proto 112` observa VRRP sobre IPv4. Para una implementación con IPv6, adapte la captura para filtrar el protocolo 112 sobre IPv6. La configuración de ambos nodos debe utilizar `state BACKUP` y prioridades coherentes si se adopta el esquema recomendado en la nota anterior.

### Prueba de failover

##### Desde un cliente:

```text
Networking@SecOpsMX:~$ ping 192.168.10.1
```

Después se detiene el servicio o se desconecta controladamente el nodo activo:

```text
Networking@SecOpsMX:~$ sudo systemctl stop keepalived
```

##### En el segundo router:

```text
Networking@SecOpsMX:~$ ip addr show
```

debe aparecer la VIP después del proceso de transición. Tras el *failover*, verificar que los clientes actualizan su tabla ARP y que las rutas hacia la VIP son correctas. La arquitectura final de una red empresarial redundante y tolerante a fallos se ilustra en el **Anexo XII.**

##### La prueba debe continuar verificando:

```text
Networking@SecOpsMX:~$ ping 192.168.10.1
```

y posteriormente tráfico real de aplicación.

Una prueba de alta disponibilidad no se considera completa solo porque la dirección IP virtual cambió de nodo. También debe verificarse que las rutas, las reglas de *firewall*, la traducción de direcciones cuando corresponda y los servicios dependientes continúan funcionando.

### Consideraciones operativas

La alta disponibilidad debe contemplar *gateway*, DNS, DHCP, *routing*, *firewall*, NAT, enlaces, alimentación, monitorización y procedimientos de recuperación.

Un riesgo adicional aparece cuando, tras perder la comunicación entre ellos, dos nodos asumen simultáneamente la propiedad de recursos incompatibles.

Este escenario se conoce como *split-brain*. Su prevención depende de la arquitectura de alta disponibilidad y puede requerir enlaces de comunicación redundantes, mecanismos de *fencing*, supervisión y criterios de desempate. VRRP, por sí solo, no proporciona un mecanismo general de quórum.

## 15.8 TROUBLESHOOTING REAL

El diagnóstico de fallas debe basarse en evidencias observables y pruebas reproducibles. La metodología aplicada en los casos siguientes se representa en la Figura 15.10.

Una prueba discriminante es aquella cuyo resultado permite diferenciar entre hipótesis. Por ejemplo, si un nombre DNS no resuelve, hacer *ping* repetidamente no determina si el problema es DNS.

Una consulta directa mediante *dig* al servidor DNS sí puede separar conectividad IP de resolución local.

Los siguientes cinco casos cubren mecanismos diferentes: PMTU, seguimiento de conexiones, resolución DNS, *routing* asimétrico y tabla de vecinos. La Tabla 15.4 los resume.

<div class="diagram" id="figura-15-10" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1510" viewBox="0 0 1200 495" role="img" aria-labelledby="g1510-title">
<title id="g1510-title">Ciclo de troubleshooting basado en evidencia</title>
<defs><marker id="g1510m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1510n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g1510-c" transform="translate(20 20)"><circle cx="134.5" cy="15" r="15" fill="#7f1d1d"/>
<text x="134.5" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
<rect x="0" y="38" width="269" height="160" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="0" y1="72" x2="269" y2="72" stroke="#d40000" stroke-width="1.5"/>
<text x="134.5" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Síntoma</text>
<g transform="translate(134.5 117.36) scale(0.8)" data-lib="cross"><circle cx="0" cy="0" r="28" fill="#d40000"></circle><path d="M-11 -11 L11 11 M11 -11 L-11 11" stroke="#ffffff" stroke-width="5" stroke-linecap="round"></path></g>
<text x="134.5" y="178.62" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Comportamiento observado</text>
<polyline points="271,118 295,118" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1510m364e6c)"/>
<circle cx="431.5" cy="15" r="15" fill="#1e3a8a"/>
<text x="431.5" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
<rect x="297" y="38" width="269" height="160" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="297" y1="72" x2="566" y2="72" stroke="#003ecc" stroke-width="1.5"/>
<text x="431.5" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Evidencia</text>
<g transform="translate(431.5 117.36) scale(0.8)" data-lib="list"><rect x="-28" y="-32" width="56" height="64" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><path d="M-8 -16h24" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="-16" r="3.5" fill="#009254"></circle><path d="M-8 -2h24" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="-2" r="3.5" fill="#003ecc"></circle><path d="M-8 12h24" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><circle cx="-18" cy="12" r="3.5" fill="#009254"></circle></g>
<text x="431.5" y="178.62" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Recopilar datos y capturas</text>
<polyline points="568,118 592,118" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1510m364e6c)"/>
<circle cx="728.5" cy="15" r="15" fill="#5b21b6"/>
<text x="728.5" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
<rect x="594" y="38" width="269" height="160" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="594" y1="72" x2="863" y2="72" stroke="#7c3aed" stroke-width="1.5"/>
<text x="728.5" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Hipótesis</text>
<g transform="translate(728.5 117.36) scale(0.8)" data-lib="search"><circle cx="-6" cy="-6" r="20" fill="#f2ebfd" stroke="#7c3aed" stroke-width="4"></circle><path d="M9 9 L28 28" stroke="#7c3aed" stroke-width="6" stroke-linecap="round"></path></g>
<text x="728.5" y="178.62" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Posibles causas técnicas</text>
<polyline points="865,118 889,118" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1510m364e6c)"/>
<circle cx="1025.5" cy="15" r="15" fill="#7c2d12"/>
<text x="1025.5" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text>
<rect x="891" y="38" width="269" height="160" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="891" y1="72" x2="1160" y2="72" stroke="#dd3a00" stroke-width="1.5"/>
<text x="1025.5" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Prueba discriminante</text>
<g transform="translate(1025.5 117.36) scale(0.8)" data-lib="funnel"><path d="M-32 -26 H32 L8 4 V28 L-8 20 V4 Z" fill="#fcebe6" stroke="#dd3a00" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="1025.5" y="178.62" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Separa unas hipótesis de otras</text>
<circle cx="134.5" cy="240" r="15" fill="#7f1d1d"/>
<text x="134.5" y="245" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">5</text>
<rect x="0" y="263" width="269" height="160" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="0" y1="297" x2="269" y2="297" stroke="#d40000" stroke-width="1.5"/>
<text x="134.5" y="286" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Causa raíz</text>
<g transform="translate(134.5 342.36) scale(0.8)" data-lib="pin"><path d="M0 30 C-22 4 -24 -4 -24 -12 A24 24 0 0 1 24 -12 C24 -4 22 4 0 30 Z" fill="#fbe6e6" stroke="#d40000" stroke-width="3"></path><circle cx="0" cy="-12" r="8" fill="#d40000"></circle></g>
<text x="134.5" y="403.62" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Origen real del problema</text>
<polyline points="271,343 295,343" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1510m364e6c)"/>
<circle cx="431.5" cy="240" r="15" fill="#065f46"/>
<text x="431.5" y="245" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">6</text>
<rect x="297" y="263" width="269" height="160" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="297" y1="297" x2="566" y2="297" stroke="#009254" stroke-width="1.5"/>
<text x="431.5" y="286" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Corrección</text>
<g transform="translate(431.5 342.36) scale(0.8)" data-lib="gear"><g fill="#009254"><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(0)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(45)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(90)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(135)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(180)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(225)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(270)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(315)"></rect></g><circle cx="0" cy="0" r="19" fill="#ffffff" stroke="#009254" stroke-width="4"></circle><circle cx="0" cy="0" r="7" fill="#bfe4d4" stroke="#009254" stroke-width="3"></circle></g>
<text x="431.5" y="403.62" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Cambio aplicado</text>
<polyline points="568,343 592,343" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1510m364e6c)"/>
<circle cx="728.5" cy="240" r="15" fill="#1e3a8a"/>
<text x="728.5" y="245" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">7</text>
<rect x="594" y="263" width="269" height="160" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="594" y1="297" x2="863" y2="297" stroke="#003ecc" stroke-width="1.5"/>
<text x="728.5" y="286" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Validación</text>
<g transform="translate(728.5 342.36) scale(0.8)" data-lib="check"><circle cx="0" cy="0" r="28" fill="#003ecc"></circle><path d="M-13 1 L-4 11 L15 -10" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="728.5" y="403.62" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Se comprueba el resultado</text>
<polyline points="865,343 889,343" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1510m364e6c)"/>
<circle cx="1025.5" cy="240" r="15" fill="#1e3a5f"/>
<text x="1025.5" y="245" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">8</text>
<rect x="891" y="263" width="269" height="160" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="891" y1="297" x2="1160" y2="297" stroke="#364e6c" stroke-width="1.5"/>
<text x="1025.5" y="286" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Prevención</text>
<g transform="translate(1025.5 342.36) scale(0.8)" data-lib="shield"><path d="M 0 -26 L 22 -17 L 22 2 C 22 16 0 26 0 26 C 0 26 -22 16 -22 2 L -22 -17 Z" fill="#364e6c" stroke="#364e6c" stroke-width="2"></path><path d="M-10 0 L-3 8 L11 -9" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="1025.5" y="403.62" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Evitar que se repita</text>
<polyline points="1025.5,198 1025.5,212 134.5,212 134.5,223" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1510m364e6c)"/></g><text x="600" y="477" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 15.10. Ciclo de troubleshooting basado en evidencia.</text></svg>
</div>

### CASO DE ESTUDIO 1

#### PMTUD BLACK HOLE EN UN TÚNEL

#### Contexto

Una aplicación situada detrás de una VPN funciona correctamente para operaciones pequeñas, pero las transferencias grandes se detienen.

Los síntomas típicos pueden ser:

```text
ping → funciona
SSH → conecta
HTTP → abre
transferencia grande → se bloquea
iperf3 → presenta degradación o interrupciones
```

Este comportamiento es compatible con problemas de *Path MTU Discovery*. RFC 2923 documenta el fenómeno conocido como PMTUD *black hole*: los paquetes grandes con DF pueden necesitar fragmentación, pero el mensaje ICMP correspondiente puede no llegar al emisor.

##### Fase de observación

Primero:

```text
Networking@SecOpsMX:~$ ping -c 4 10.20.0.10
```

Resultado:

```text
bytes from 10.20.0.10: icmp_seq=1 ttl=62 time=...
```

La conectividad básica existe.

A continuación:

```text
Networking@SecOpsMX:~$ tracepath 10.20.0.10
```

Si la ruta atraviesa encapsulación, puede aparecer una PMTU inferior a 1500.

##### Prueba específica de MTU

En IPv4:

```text
Networking@SecOpsMX:~$ ping -M do -s 1472 10.20.0.10
```

Los 1472 bytes corresponden a:

```text
ICMP payload + 8 ICMP + 20 IPv4 = 1500 bytes
```

Si el camino solamente permite 1438 bytes, el paquete no puede atravesarlo manteniendo DF.

Una respuesta posible en un laboratorio sería:

```text
Frag needed and DF set (mtu = 1438)
```

El valor de 1438 representa la PMTU observada en ese escenario.

##### Cálculo de MSS

Para TCP sobre IPv4, el MSS teórico derivado de una PMTU de 1438 sería:

```text
- 20 IP - 20 TCP = 1398 bytes
```

Un valor como MSS 1360 resulta conservador cuando existe encapsulación adicional o se desea margen, pero su validez depende del camino: con otra combinación de encabezados, el valor adecuado será distinto.

##### Captura

En el emisor:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni eth0 host 10.20.0.10
```

En un *router* intermedio puede buscarse:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni any icmp
```

La finalidad es comprobar si aparece el mensaje ICMP necesario para que el emisor reduzca el tamaño de los paquetes.

##### Corrección

La corrección preferida es resolver la causa:

```text
PMTU incorrecta
↓
permitir ICMP necesario
+
corregir MTU del túnel
```

Si no es posible garantizar PMTUD, puede utilizarse *MSS clamping* como mitigación. Por ejemplo, en un entorno donde se ha determinado que es necesario limitar TCP:

```text
Networking@SecOpsMX:~$ sudo nft add rule inet filtro forward tcp flags syn tcp option maxseg size set 1360
```

La sintaxis exacta debe comprobarse contra la versión de nftables utilizada.

##### Validación

Repetir:

```text
Networking@SecOpsMX:~$ ping -M do -s 1472 10.20.0.10
```

y posteriormente probar tamaños próximos al límite:

```text
Networking@SecOpsMX:~$ ping -M do -s 1410 10.20.0.10
```

Finalmente:

```text
Networking@SecOpsMX:~$ iperf3 -c 10.20.0.10
```

y realizar la transferencia real de la aplicación.

La validación correcta no consiste solamente en conseguir que *ping* funcione. Debe demostrarse que el protocolo que originalmente fallaba vuelve a funcionar.

##### Aprendizaje

Conclusión operativa del caso: **conectividad ICMP básica ≠ funcionamiento correcto de TCP de gran tamaño**

y que una red puede parecer funcional mientras existe una incompatibilidad de MTU en un tramo encapsulado.

### CASO DE ESTUDIO 2

#### FALLA DE DNS DESPUÉS DE UN CAMBIO DEL SISTEMA

#### Contexto

Un equipo puede alcanzar servidores por dirección IP:

```text
Networking@SecOpsMX:~$ ping -c 4 1.1.1.1
```

pero:

```text
Networking@SecOpsMX:~$ ping example.com
```

falla porque el nombre no puede resolverse.

El error puede aparecer después de una actualización del sistema, una modificación de Netplan, un cambio en NetworkManager o systemd-resolved, la sustitución del archivo /etc/resolv.conf o una modificación del servidor DNS configurado.

##### Fase de aislamiento

Primero comprobar conectividad IP:

```text
Networking@SecOpsMX:~$ ping -c 4 1.1.1.1
```

Después consultar directamente un servidor DNS:

```text
Networking@SecOpsMX:~$ dig @1.1.1.1 example.com +time=2 +tries=1
```

Si esta consulta funciona, existe conectividad hacia un servidor DNS funcional.

Después:

```text
Networking@SecOpsMX:~$ dig example.com
```

Si la consulta directa funciona pero la consulta normal falla, el problema probablemente se encuentra en la configuración del resolvedor local.

##### Inspección de systemd-resolved

```text
Networking@SecOpsMX:~$ resolvectl status
```

También:

```text
Networking@SecOpsMX:~$ resolvectl dns
```

Puede comprobarse:

```text
Networking@SecOpsMX:~$ ls -l /etc/resolv.conf
```

En muchos sistemas que utilizan systemd-resolved, /etc/resolv.conf puede apuntar a un *stub* local como 127.0.0.53. Esto no constituye por sí mismo un error. Lo importante es determinar qué servicio está escuchando y qué servidores DNS tiene configurados.

##### Captura

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni any port 53
```

Si se ejecuta:

```text
Networking@SecOpsMX:~$ dig example.com
```

deben observarse las consultas correspondientes. Si no aparece tráfico DNS, el problema puede encontrarse antes de la transmisión. Si aparece una consulta sin respuesta, deben investigarse ruta, *firewall*, servidor DNS, UDP/53, TCP/53, ACL o servidor configurado.

##### Corrección

La corrección depende de la causa. Puede ser necesario establecer servidores DNS mediante el gestor de red correspondiente. Después debe comprobarse:

```text
Networking@SecOpsMX:~$ resolvectl status
```

y:

```text
Networking@SecOpsMX:~$ dig example.com
```

Finalmente:

```text
Networking@SecOpsMX:~$ getent hosts example.com
```

*getent* es especialmente útil porque permite comprobar la resolución utilizando el mecanismo de resolución configurado por el sistema y no solamente una consulta directa a un servidor.

##### Validación

La validación debe realizarse en tres niveles:

```text
IP directa
↓
DNS directo
↓
resolución mediante el sistema
```

Por ejemplo:

```text
Networking@SecOpsMX:~$ ping -c 4 1.1.1.1
Networking@SecOpsMX:~$ dig @1.1.1.1 example.com
Networking@SecOpsMX:~$ getent hosts example.com
```

Si los tres funcionan, se ha demostrado conectividad IP, servicio DNS e integración del resolvedor local.

#### Aprendizaje

Un fallo de resolución de nombres y una pérdida de conectividad son problemas distintos, y confundirlos desvía el diagnóstico. El hecho de que:

```text
Networking@SecOpsMX:~$ ping example.com
```

falle no demuestra automáticamente que la red esté caída. La prueba debe separar IP, *routing*, transporte, DNS, resolvedor local y aplicación.

### CASO DE ESTUDIO 3

#### AGOTAMIENTO DE LA TABLA DE VECINOS ARP

#### Contexto

Las redes grandes pueden generar un número considerable de vecinos IPv4. *Linux* mantiene información de vecinos mediante la infraestructura de *neighbor tables*. En IPv4, ARP es el mecanismo que permite resolver IP → MAC. Una tabla de vecinos excesivamente grande puede producir errores de resolución.

##### Evidencia

Comprobar:

```text
Networking@SecOpsMX:~$ ip neigh show
```

Cantidad aproximada:

```text
Networking@SecOpsMX:~$ ip neigh show | wc -l
```

También:

```text
Networking@SecOpsMX:~$ ip ntable show
```

Los mensajes del *kernel* pueden consultarse:

```text
Networking@SecOpsMX:~$ dmesg | grep -i 'neighbor'
```

Un mensaje característico de agotamiento es:

```text
neighbor table overflow!
```

#### Incidente documentado

OpenAI documentó públicamente un incidente de infraestructura de Kubernetes durante el escalamiento de un clúster a más de 2 500 nodos (*Scaling Kubernetes to 2,500 nodes*, 18 de enero de 2018). Entre los síntomas apareció un problema de tabla de vecinos y el *kernel* registró `neighbor table overflow!`.

La corrección aplicada incluyó aumentar los umbrales de *garbage collection*:

```text
net.ipv4.neigh.default.gc_thresh1 = 80000
net.ipv4.neigh.default.gc_thresh2 = 90000
net.ipv4.neigh.default.gc_thresh3 = 100000
```

La experiencia documentada es un ejemplo real de cómo una limitación de una estructura de red del *kernel* puede convertirse en un problema de conectividad de una infraestructura distribuida.

##### Diagnóstico

Primero:

```text
Networking@SecOpsMX:~$ ip neigh show | wc -l
```

Después:

```text
Networking@SecOpsMX:~$ ip ntable show
```

y:

```text
Networking@SecOpsMX:~$ sysctl -a 2>/dev/null | grep 'neigh.*gc_thresh'
```

Debe evitarse asumir que los valores predeterminados son iguales en todos los *kernels* y distribuciones.

#### Análisis de causa

Aumentar los límites puede resolver la presión inmediata, pero no determina por qué existen tantos vecinos. Deben investigarse tamaño del dominio L2, número de *hosts*, número de *pods*, CNI, VXLAN, *bridges*, subredes ARP, *broadcast*, diseño de Kubernetes y segmentación. Un crecimiento anormal de la tabla puede ser consecuencia de una arquitectura L2 demasiado extensa.

#### Corrección

Si la cantidad de vecinos es legítima y el sistema necesita soportarla, pueden ajustarse los umbrales. Ejemplo:

```text
Networking@SecOpsMX:~$ sudo sysctl -w net.ipv4.neigh.default.gc_thresh1=80000
Networking@SecOpsMX:~$ sudo sysctl -w net.ipv4.neigh.default.gc_thresh2=90000
Networking@SecOpsMX:~$ sudo sysctl -w net.ipv4.neigh.default.gc_thresh3=100000
```

Estos valores corresponden al caso documentado por OpenAI y no deben copiarse automáticamente a cualquier sistema.

Primero debe verificarse que el dimensionamiento sea apropiado.

##### Validación

Después de la modificación:

```text
Networking@SecOpsMX:~$ ip neigh show | wc -l
```

Comprobar:

```text
Networking@SecOpsMX:~$ dmesg | tail -n 100
```

y realizar tráfico real hacia distintos vecinos:

```text
Networking@SecOpsMX:~$ ping -c 3 HOST
```

En una infraestructura Kubernetes deben comprobarse también DNS, *service discovery*, comunicación *pod-to-pod*, comunicación *pod-to-service* y salida externa.

#### Aprendizaje

Confundir ambas estructuras conduce a aplicar una corrección incorrecta. Este caso es diferente de nf_conntrack. Ambos pueden parecer problemas de "tabla llena", pero representan estructuras diferentes:

- nf_conntrack → seguimiento de conexiones y estado de *firewall*/*NAT*.
- neighbor table → resolución y estado de vecinos de capa de enlace.

### CASO DE ESTUDIO 4

#### ROUTING ASIMÉTRICO,

#### PBR, RP_FILTER Y FIREWALL CON ESTADO

#### Contexto

Una organización utiliza dos enlaces de salida:

```text
ISP-A
ISP-B
```

El tráfico puede salir por ISP-A y regresar por ISP-B.

Desde la perspectiva del *routing*:

```text
IDA: Cliente → Router → ISP-A → Internet
RETORNO: Internet → ISP-B → Router → Cliente
```

Esto constituye *routing* asimétrico.

La asimetría no es automáticamente incorrecta, pero puede entrar en conflicto con mecanismos de filtrado de ruta inversa y con *firewalls* que mantienen estado.

##### Observación

En el *router*:

```text
Networking@SecOpsMX:~$ ip route
```

Después:

```text
Networking@SecOpsMX:~$ ip rule
```

y:

```text
Networking@SecOpsMX:~$ ip route show table main
```

Si existe *Policy Based Routing*:

```text
Networking@SecOpsMX:~$ ip route show table 100
Networking@SecOpsMX:~$ ip route show table 200
```

Debe determinarse qué tabla se utiliza para cada flujo.

##### Consulta de routing

Por ejemplo:

```text
Networking@SecOpsMX:~$ ip route get 198.51.100.20 from 192.168.10.50
```

Para una prueba con una marca:

```text
Networking@SecOpsMX:~$ ip route get 198.51.100.20 from 192.168.10.50 mark 0x2
```

Los rangos 198.51.100.0/24 y 203.0.113.0/24 están reservados para documentación y son apropiados para laboratorios.

##### rp_filter

*Linux* dispone de *Reverse Path Filtering*.

Puede consultarse:

```text
Networking@SecOpsMX:~$ sysctl net.ipv4.conf.all.rp_filter
Networking@SecOpsMX:~$ sysctl net.ipv4.conf.default.rp_filter
```

La documentación del *kernel* define:

- 0 → sin validación.
- 1 → modo estricto.
- 2 → modo flexible.

En modo estricto, la validación exige que la mejor ruta de retorno hacia el origen utilice la misma interfaz por la que llegó el paquete. En modo flexible se acepta que exista una ruta hacia el origen aunque utilice otra interfaz.

En redes con *routing* asimétrico puede ser necesario revisar rp_filter, pero esa revisión es una hipótesis que debe confirmarse con evidencia: la presencia del filtro no basta para señalarlo como causa raíz.

##### Captura en ambos enlaces

En ISP-A:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni eth1 host 198.51.100.20
```

En ISP-B:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni eth2 host 198.51.100.20
```

La evidencia debe responder: ¿por dónde sale?, ¿por dónde regresa?, ¿llega al *router*?, ¿llega a la interfaz interna?

##### Firewall con estado

Comprobar:

```text
Networking@SecOpsMX:~$ sudo nft list ruleset
```

y, si existe *conntrack*:

```text
Networking@SecOpsMX:~$ sudo conntrack -L
```

Una entrada INVALID admite múltiples causas y, por sí sola, no prueba que exista *routing* asimétrico. El diagnóstico correcto consiste en correlacionar captura de tráfico, tabla de rutas, reglas de política, estado de *conntrack* y rp_filter.

#### Corrección

La solución arquitectónica preferida consiste en hacer que la selección de ruta sea coherente. Por ejemplo:

```text
origen/red interna
↓
regla ip rule
↓
tabla de routing correspondiente
↓
ISP seleccionado
```

Cuando se utiliza marcado de tráfico, debe garantizarse que el criterio utilizado para la selección de ruta se conserve de forma coherente para el tráfico de retorno.

En diseños con *conntrack* puede ser necesario utilizar marcas de conexión y restaurarlas correctamente. Como mitigación específica, si la arquitectura requiere asimetría, puede considerarse:

```text
Networking@SecOpsMX:~$ sudo sysctl -w net.ipv4.conf.all.rp_filter=2
```

y revisar igualmente:

```text
Networking@SecOpsMX:~$ sudo sysctl -w net.ipv4.conf.default.rp_filter=2
```

Los valores deben ajustarse al modelo de seguridad de la organización. El modo flexible reduce el descarte de paquetes por rp_filter, pero no sustituye un diseño correcto de *Policy Based Routing*: la causa del retorno asimétrico permanece.

##### Validación

Comprobar:

```text
Networking@SecOpsMX:~$ ip rule
Networking@SecOpsMX:~$ ip route get DESTINO from ORIGEN
```

Capturar simultáneamente:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni eth1
Networking@SecOpsMX:~$ sudo tcpdump -ni eth2
```

y verificar:

```text
Networking@SecOpsMX:~$ sudo nft list ruleset
Networking@SecOpsMX:~$ sudo conntrack -L
```

Finalmente repetir la conexión real:

```text
Networking@SecOpsMX:~$ curl
Networking@SecOpsMX:~$ ssh
Networking@SecOpsMX:~$ iperf3
```

#### Aprendizaje

La lección de este caso es que una red puede tener enlace activo, ruta existente y paquetes visibles, y aun así fallar porque distintos componentes toman decisiones incompatibles. El diagnóstico requiere observar la interacción entre *routing*, PBR, rp_filter, *conntrack*, NAT y *firewall*.

### CASO DE ESTUDIO 5

#### SATURACIÓN DE NF_CONNTRACK

#### Contexto

Un *router* *Linux* que realiza NAT y *firewall* empieza a rechazar o degradar nuevas conexiones.

Pueden observarse síntomas como nuevas conexiones que fallan, conexiones existentes que pueden continuar durante cierto tiempo, DNS con fallos intermitentes o HTTP que falla de forma irregular.

Una posible causa es el agotamiento de la tabla de seguimiento de conexiones.

##### Inspección inicial

Comprobar el límite:

```text
Networking@SecOpsMX:~$ sysctl net.netfilter.nf_conntrack_max
```

Ejemplo de laboratorio:

```text
net.netfilter.nf_conntrack_max = 65536
```

Consultar el número actual:

```text
Networking@SecOpsMX:~$ sysctl net.netfilter.nf_conntrack_count
```

Si el valor se aproxima persistentemente al máximo, existe evidencia de presión sobre el recurso.

También:

```text
Networking@SecOpsMX:~$ sudo conntrack -S
```

puede aportar información sobre el estado del subsistema.

##### Inspección del kernel

Buscar mensajes:

```text
Networking@SecOpsMX:~$ dmesg | grep -i conntrack
```

o:

```text
Networking@SecOpsMX:~$ journalctl -k | grep -i conntrack
```

La documentación del *kernel* define nf_conntrack_max como el número máximo de entradas permitidas en seguimiento de conexiones.

Su relación con las estructuras internas de *hash* depende de la configuración del sistema y del *kernel*.

Un valor concreto de estos parámetros solo es válido para el sistema, el *kernel* y la carga en los que se midió.

##### Determinación del tráfico

Contar conexiones TCP:

```text
Networking@SecOpsMX:~$ sudo conntrack -L -p tcp | wc -l
```

UDP:

```text
Networking@SecOpsMX:~$ sudo conntrack -L -p udp | wc -l
```

También pueden observarse SYN:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni any 'tcp[tcpflags] & tcp-syn != 0'
```

Si llegan grandes cantidades de nuevas conexiones y la tabla permanece próxima al límite, debe investigarse el origen.

#### Hipótesis

Las causas pueden incluir muchas conexiones legítimas, NAT masivo, *timeouts* demasiado largos, aplicación que abre demasiadas conexiones, escaneo o tráfico no deseado, DoS o máquina mal configurada.

Antes de aumentar nf_conntrack_max conviene determinar por qué se alcanzó el límite: si el consumo proviene de un ataque o de conexiones que no se liberan, ampliar la tabla solo posterga el agotamiento y consume más memoria del *kernel*.

#### Corrección

Si la carga es legítima y existe memoria suficiente, puede aumentarse el límite de manera dimensionada:

```text
Networking@SecOpsMX:~$ sudo sysctl -w net.netfilter.nf_conntrack_max=131072
```

Posteriormente debe persistirse mediante un archivo bajo /etc/sysctl.d/.

La modificación de *timeouts* debe realizarse solo de acuerdo con el perfil real de tráfico. Por ejemplo:

```text
Networking@SecOpsMX:~$ sysctl net.netfilter.nf_conntrack_tcp_timeout_established
```

Una reducción excesiva del *timeout* de conexiones establecidas puede terminar prematuramente sesiones legítimas de larga duración.

La modificación de parámetros internos como *hashsize* es una intervención avanzada y depende del *kernel*, del módulo y de cómo se haya creado la estructura de seguimiento; no es una corrección genérica.

##### Validación

Después de corregir:

```text
Networking@SecOpsMX:~$ sysctl net.netfilter.nf_conntrack_count
Networking@SecOpsMX:~$ sysctl net.netfilter.nf_conntrack_max
```

Realizar nuevas conexiones:

```text
Networking@SecOpsMX:~$ curl -v https://servidor-prueba
```

y observar:

```text
Networking@SecOpsMX:~$ sudo conntrack -S
```

Además:

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni any tcp
```

La prueba debe confirmar que nuevas conexiones pueden establecerse y que el consumo del recurso permanece dentro de límites razonables.

#### Aprendizaje

Un *firewall* con estado no se limita a aplicar reglas lógicas: cada flujo que rastrea consume memoria y estructuras del *kernel*, de modo que el estado también es un recurso con límite.

Por tanto: **firewall + NAT + conntrack = consumo de memoria y estructuras de estado**

Una red puede tener reglas perfectamente correctas y aun así fallar porque el recurso utilizado para mantener el estado se agotó.

### VALIDACIÓN FINAL DEL LABORATORIO

Una implementación integral debe validarse desde el nivel inferior hacia el superior. La Tabla 15.3 resume las comprobaciones por capa.

<div class="diagram tabla-svg" id="tabla-15-3" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 615" role="img" aria-labelledby="t76-title"><title id="t76-title">Tabla 15.3. Validación de la implementación por capas.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="63.5"/>
<text class="tb-ht" x="69.1" y="20.0" dominant-baseline="central" text-anchor="middle">Capa o</text>
<text class="tb-ht" x="69.1" y="42.8" dominant-baseline="central" text-anchor="middle">función</text>
<text class="tb-ht" x="406.3" y="31.4" dominant-baseline="central" text-anchor="middle">Objetivo de validación</text>
<text class="tb-ht" x="937.2" y="31.4" dominant-baseline="central" text-anchor="middle">Comandos o herramientas</text>
<rect class="tb-te" x="0" y="63.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="94.9" dominant-baseline="central">Enlace</text>
<text class="tb-tx" x="150.2" y="83.5" dominant-baseline="central">Verificar que las interfaces estén activas y que los vecinos</text>
<text class="tb-tx" x="150.2" y="106.2" dominant-baseline="central">puedan resolverse.</text>
<text class="tb-tx" x="686.4" y="94.9" dominant-baseline="central">ip link; ip neigh; ethtool eth0.</text>
<rect class="tb-to" x="0" y="127.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="147.0" dominant-baseline="central">IPv4</text>
<text class="tb-tx" x="150.2" y="147.0" dominant-baseline="central">Comprobar direccionamiento, rutas y conectividad IPv4.</text>
<text class="tb-tx" x="686.4" y="147.0" dominant-baseline="central">ip addr; ip route; ip route get DESTINO; ping -4 DESTINO.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">IPv6</text>
<text class="tb-tx" x="150.2" y="199.1" dominant-baseline="central">Verificar direcciones, rutas, vecinos y conectividad IPv6.</text>
<text class="tb-tx" x="686.4" y="187.8" dominant-baseline="central">ip -6 addr; ip -6 route; ip -6 neigh; ip -6 route get DESTINO; ping</text>
<text class="tb-tx" x="686.4" y="210.5" dominant-baseline="central">-6 DESTINO.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="262.6" dominant-baseline="central">VLAN</text>
<text class="tb-tx" x="150.2" y="251.2" dominant-baseline="central">Comprobar interfaces VLAN, etiquetado y pertenencia al</text>
<text class="tb-tx" x="150.2" y="274.0" dominant-baseline="central">segmento.</text>
<text class="tb-tx" x="686.4" y="262.6" dominant-baseline="central">ip -d link; bridge vlan show; tcpdump -eni INTERFAZ vlan.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="326.1" dominant-baseline="central">DHCP</text>
<text class="tb-tx" x="150.2" y="326.1" dominant-baseline="central">Verificar asignación, concesiones y parámetros de red.</text>
<text class="tb-tx" x="686.4" y="314.8" dominant-baseline="central">journalctl; tcpdump -ni INTERFAZ '(port 67 or port 68 or port</text>
<text class="tb-tx" x="686.4" y="337.5" dominant-baseline="central">546 or port 547)'.</text>
<rect class="tb-to" x="0" y="358.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="389.6" dominant-baseline="central">DNS</text>
<text class="tb-tx" x="150.2" y="378.2" dominant-baseline="central">Comprobar la configuración del resolvedor y la resolución de</text>
<text class="tb-tx" x="150.2" y="401.0" dominant-baseline="central">nombres.</text>
<text class="tb-tx" x="686.4" y="389.6" dominant-baseline="central">resolvectl status; dig; getent hosts.</text>
<rect class="tb-te" x="0" y="421.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="453.1" dominant-baseline="central">MTU</text>
<text class="tb-tx" x="150.2" y="441.8" dominant-baseline="central">Comprobar PMTU y transmisión de paquetes grandes sin</text>
<text class="tb-tx" x="150.2" y="464.5" dominant-baseline="central">fragmentación.</text>
<text class="tb-tx" x="686.4" y="453.1" dominant-baseline="central">tracepath; ping -M do -s TAMAÑO DESTINO.</text>
<rect class="tb-to" x="0" y="485.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="505.2" dominant-baseline="central">Aplicación</text>
<text class="tb-tx" x="150.2" y="505.2" dominant-baseline="central">Verificar respuesta de servicios y rendimiento entre extremos.</text>
<text class="tb-tx" x="686.4" y="505.2" dominant-baseline="central">curl; ssh; iperf3.</text>
<rect class="tb-te" x="0" y="526.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="546.0" dominant-baseline="central">Firewall</text>
<text class="tb-tx" x="150.2" y="546.0" dominant-baseline="central">Comprobar reglas y políticas aplicadas al tráfico.</text>
<text class="tb-tx" x="686.4" y="546.0" dominant-baseline="central">nft list ruleset; iptables -L -n -v, según el backend activo.</text>
<text class="tb-cap" x="600.0" y="592.8" text-anchor="middle">Tabla 15.3. Validación de la implementación por capas.</text></svg>
</div>

Nota: en pruebas VLAN, el filtro de captura puede requerir el modificador `vlan` y ajustes según el encapsulado y la interfaz. En IPv6, la configuración del *gateway* se verifica mediante *Router Advertisements* y la tabla de rutas, no mediante DHCPv6.

##### Capa de enlace

```text
Networking@SecOpsMX:~$ ip link
Networking@SecOpsMX:~$ ip neigh
```

Debe comprobarse que existen interfaces UP, enlaces disponibles y vecinos resolubles.

##### Capa IP

```text
Networking@SecOpsMX:~$ ip addr
Networking@SecOpsMX:~$ ip route
Networking@SecOpsMX:~$ ip route get DESTINO
```

Debe comprobarse direccionamiento, prefijos, *gateway* y rutas.

##### Routing

```text
Networking@SecOpsMX:~$ ping
Networking@SecOpsMX:~$ tracepath
Networking@SecOpsMX:~$ traceroute
```

Debe verificarse tanto ida como retorno.

##### VLAN

```text
Networking@SecOpsMX:~$ ip -d link
Networking@SecOpsMX:~$ sudo tcpdump -eni INTERFAZ vlan
```

Debe comprobarse VLAN ID, *trunk* y segmentación.

##### Firewall

```text
Networking@SecOpsMX:~$ sudo nft list ruleset
```

Deben verificarse políticas, reglas, contadores, NAT y *forwarding*.

##### DHCP

```text
Networking@SecOpsMX:~$ sudo tcpdump -ni INTERFAZ port 67 or port 68
```

Debe observarse el intercambio DISCOVER, OFFER, REQUEST y ACK.

##### DNS

```text
Networking@SecOpsMX:~$ resolvectl status
Networking@SecOpsMX:~$ dig example.com
Networking@SecOpsMX:~$ getent hosts example.com
```

##### MTU

```text
Networking@SecOpsMX:~$ tracepath DESTINO
Networking@SecOpsMX:~$ ping -M do -s TAMAÑO DESTINO
```

##### Aplicación

Finalmente deben probarse los servicios reales:

```text
Networking@SecOpsMX:~$ curl
Networking@SecOpsMX:~$ ssh
Networking@SecOpsMX:~$ iperf3
```

o las aplicaciones concretas utilizadas por la organización.

Los cinco casos de *troubleshooting* muestran por qué una prueba aislada puede resultar engañosa.

<div class="diagram tabla-svg" id="tabla-15-4" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 474" role="img" aria-labelledby="t77-title"><title id="t77-title">Tabla 15.4. Resumen de los casos de estudio.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="87.8" y="20.0" dominant-baseline="central" text-anchor="middle">Caso de estudio</text>
<text class="tb-ht" x="364.0" y="20.0" dominant-baseline="central" text-anchor="middle">Problema</text>
<text class="tb-ht" x="672.1" y="20.0" dominant-baseline="central" text-anchor="middle">Elementos implicados</text>
<text class="tb-ht" x="995.9" y="20.0" dominant-baseline="central" text-anchor="middle">Verificación y diagnóstico</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">1. Fallo de</text>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">conectividad</text>
<text class="tb-tx" x="187.5" y="72.1" dominant-baseline="central">El host no alcanza redes externas.</text>
<text class="tb-tx" x="564.5" y="60.8" dominant-baseline="central">Direccionamiento, gateway</text>
<text class="tb-tx" x="564.5" y="83.5" dominant-baseline="central">y tabla de rutas.</text>
<text class="tb-tx" x="803.8" y="60.8" dominant-baseline="central">ip addr; ip route; ip route get DESTINO; ping al</text>
<text class="tb-tx" x="803.8" y="83.5" dominant-baseline="central">gateway y al destino.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">2. Fallo de</text>
<text class="tb-tx tb-b" x="12.0" y="158.4" dominant-baseline="central">resolución DNS</text>
<text class="tb-tx" x="187.5" y="135.6" dominant-baseline="central">Existe conectividad IP, pero no se resuelven</text>
<text class="tb-tx" x="187.5" y="158.4" dominant-baseline="central">nombres.</text>
<text class="tb-tx" x="564.5" y="124.2" dominant-baseline="central">Configuración del</text>
<text class="tb-tx" x="564.5" y="147.0" dominant-baseline="central">resolvedor y servidores</text>
<text class="tb-tx" x="564.5" y="169.8" dominant-baseline="central">DNS.</text>
<text class="tb-tx" x="803.8" y="135.6" dominant-baseline="central">resolvectl status; dig; getent hosts; revisión de</text>
<text class="tb-tx" x="803.8" y="158.4" dominant-baseline="central">registros del servicio.</text>
<rect class="tb-te" x="0" y="190.5" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="221.9" dominant-baseline="central">3. Problema de</text>
<text class="tb-tx tb-b" x="12.0" y="244.6" dominant-baseline="central">MTU/PMTU</text>
<text class="tb-tx" x="187.5" y="210.5" dominant-baseline="central">Algunas conexiones se establecen, pero</text>
<text class="tb-tx" x="187.5" y="233.2" dominant-baseline="central">determinados paquetes o aplicaciones no</text>
<text class="tb-tx" x="187.5" y="256.0" dominant-baseline="central">completan la transferencia.</text>
<text class="tb-tx" x="564.5" y="221.9" dominant-baseline="central">MTU, encapsulación,</text>
<text class="tb-tx" x="564.5" y="244.6" dominant-baseline="central">PMTUD y filtrado ICMP.</text>
<text class="tb-tx" x="803.8" y="210.5" dominant-baseline="central">tracepath; ping con DF; revisión de MTU y</text>
<text class="tb-tx" x="803.8" y="233.2" dominant-baseline="central">mensajes ICMP de Packet Too Big o</text>
<text class="tb-tx" x="803.8" y="256.0" dominant-baseline="central">Fragmentation Needed.</text>
<rect class="tb-to" x="0" y="276.8" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="308.1" dominant-baseline="central">4. Enrutamiento</text>
<text class="tb-tx tb-b" x="12.0" y="330.9" dominant-baseline="central">asimétrico</text>
<text class="tb-tx" x="187.5" y="296.8" dominant-baseline="central">El tráfico de ida y retorno utiliza caminos</text>
<text class="tb-tx" x="187.5" y="319.5" dominant-baseline="central">distintos y puede ser descartado por filtros</text>
<text class="tb-tx" x="187.5" y="342.2" dominant-baseline="central">o políticas.</text>
<text class="tb-tx" x="564.5" y="308.1" dominant-baseline="central">PBR, rp_filter, rutas y</text>
<text class="tb-tx" x="564.5" y="330.9" dominant-baseline="central">conntrack.</text>
<text class="tb-tx" x="803.8" y="296.8" dominant-baseline="central">ip route get; ip rule; sysctl</text>
<text class="tb-tx" x="803.8" y="319.5" dominant-baseline="central">net.ipv4.conf.all.rp_filter; revisión de reglas y</text>
<text class="tb-tx" x="803.8" y="342.2" dominant-baseline="central">capturas en ambas interfaces.</text>
<rect class="tb-te" x="0" y="363.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="383.0" dominant-baseline="central">5. Saturación de</text>
<text class="tb-tx tb-b" x="12.0" y="405.8" dominant-baseline="central">nf_conntrack</text>
<text class="tb-tx" x="187.5" y="383.0" dominant-baseline="central">El seguimiento de conexiones del firewall o</text>
<text class="tb-tx" x="187.5" y="405.8" dominant-baseline="central">NAT alcanza sus límites.</text>
<text class="tb-tx" x="564.5" y="383.0" dominant-baseline="central">Tabla conntrack y</text>
<text class="tb-tx" x="564.5" y="405.8" dominant-baseline="central">parámetros del kernel.</text>
<text class="tb-tx" x="803.8" y="383.0" dominant-baseline="central">Contadores de conntrack, estado del kernel,</text>
<text class="tb-tx" x="803.8" y="405.8" dominant-baseline="central">nf_conntrack_max y revisión de timeouts.</text>
<text class="tb-cap" x="600.0" y="452.5" text-anchor="middle">Tabla 15.4. Resumen de los casos de estudio.</text></svg>
</div>

Un *ping* satisfactorio no descarta un problema de PMTU. Una regla correcta de *firewall* no evita que *conntrack* pueda agotarse.

La conectividad IP no demuestra que DNS funcione. Una ruta válida en un sentido no garantiza que el retorno sea compatible con PBR, rp_filter y un *firewall* con estado.

Y una tabla de *routing* correcta no evita que la infraestructura falle cuando la tabla de vecinos alcanza los límites de dimensionamiento.

La implementación de una red no termina cuando las interfaces tienen direcciones IP y el comando *ping* devuelve respuestas.

Una red funcional debe demostrar que:

```text
Ethernet
↓
VLAN
↓
IP
↓
ARP/Neighbor
↓
Routing
↓
Firewall/NAT
↓
DHCP
↓
DNS
↓
TCP/UDP
↓
Aplicación
```

funcionan de manera coherente.

La metodología profesional consiste, por tanto, en pasar de:

"no funciona"

a una cadena verificable de evidencia:

```text
síntoma → observación → hipótesis → prueba discriminante → causa raíz → corrección → validación → prevención
```

La diferencia fundamental entre configurar una red y operar una red consiste precisamente en esa capacidad de demostrar, mediante mediciones y pruebas reproducibles, qué componente está funcionando, cuál está fallando y por qué.

### Metodología aplicada en los casos de estudio

La secuencia general de diagnóstico puede resumirse como:

```text
1. ¿La interfaz está activa?
↓
2. ¿Existe dirección IP correcta?
↓
3. ¿Existe vecino/gateway?
↓
4. ¿La tabla de routing es correcta?
↓
5. ¿El paquete sale por la interfaz esperada?
↓
6. ¿Firewall/NAT/conntrack lo permiten?
↓
7. ¿El retorno utiliza un camino válido?
↓
8. ¿DNS funciona independientemente?
↓
9. ¿El tamaño de paquete es compatible con el camino?
↓
10. ¿La aplicación funciona realmente?
```

La metodología debe evitar modificar varios componentes simultáneamente. Si se cambia *routing*, *firewall*, MTU y DNS al mismo tiempo, se pierde la capacidad de determinar cuál modificación resolvió el problema.

La práctica profesional consiste en modificar una variable controlada, volver a ejecutar la prueba discriminante y conservar evidencia antes y después. Esa disciplina de evidencia es el hilo conductor del libro: cada capa estudiada se verifica antes de pasar a la siguiente, y ningún cambio se da por válido hasta que una prueba correspondiente al servicio real lo confirma.
