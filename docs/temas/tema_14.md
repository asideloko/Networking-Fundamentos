<p class="tema-num">TEMA 14</p>

# HERRAMIENTAS LINUX

*Linux* es uno de los sistemas operativos más utilizados en servidores, dispositivos de red embebidos, infraestructuras *cloud* y estaciones de trabajo de administración. Su popularidad en entornos profesionales se debe, entre otros factores, a la estabilidad de su núcleo, la flexibilidad de su arquitectura y la amplia disponibilidad de herramientas para la administración y el diagnóstico de redes.

Las herramientas del Tema 13 se estudian aquí en el sistema operativo *Linux*, donde permiten configurar, observar y corregir cada una de las capas vistas hasta ahora.

El sistema proporciona un amplio conjunto de utilidades nativas que permiten configurar interfaces de red, administrar tablas de enrutamiento, supervisar conexiones, analizar tráfico y aplicar políticas de seguridad. La Figura 14.1 presenta el mapa de los subtemas.

<div class="diagram" id="figura-14-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1401" viewBox="0 0 1200 402" role="img" aria-labelledby="g1401-title">
<title id="g1401-title">Mapa del Tema 14</title>
<defs></defs>
<g id="g1401-c" transform="translate(20 20)"><rect x="0" y="0" width="370.67" height="153" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="370.67" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="185.33" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">14.1 ip / iproute2</text>
<g transform="translate(185.33 76.84) scale(0.7)" data-lib="terminal"><rect x="-38" y="-28" width="76" height="56" rx="5" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><path d="M-26 -12L-12 0L-26 12" fill="none" stroke="#003ecc" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M-4 12h22" stroke="#003ecc" stroke-width="4" stroke-linecap="round"/></g>
<text x="185.33" y="134.95" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Interfaces, direcciones, rutas y vecinos</text>
<rect x="394.67" y="0" width="370.67" height="153" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="394.67" y1="34" x2="765.33" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="580" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">14.2 ss / netstat</text>
<g transform="translate(580 76.84) scale(0.7)" data-lib="plug"><rect x="-14" y="-6" width="28" height="30" rx="3" fill="#e6f4ee" stroke="#009254" stroke-width="3"></rect><path d="M-9 -6 V-18 M0 -6 V-18 M9 -6 V-18" stroke="#009254" stroke-width="3" stroke-linecap="round"></path></g>
<text x="580" y="134.95" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Sockets, conexiones y puertos en escucha</text>
<rect x="789.33" y="0" width="370.67" height="153" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="789.33" y1="34" x2="1160" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="974.67" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">14.3 Routing en Linux</text>
<g transform="translate(974.67 76.84) scale(0.7)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3"/><g fill="none" stroke="#7c3aed" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="974.67" y="134.95" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">IP forwarding, rutas y NAT</text>
<rect x="0" y="177" width="370.67" height="153" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="0" y1="211" x2="370.67" y2="211" stroke="#d40000" stroke-width="1.5"/>
<text x="185.33" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">14.4 nftables / iptables</text>
<g transform="translate(185.33 253.84) scale(0.7)" data-lib="firewall"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><path d="M-36 -9.5H36M-36 9.5H36M-12 -28V-9.5M12 -9.5V9.5M-12 9.5V28" stroke="#d40000" stroke-width="2.5" fill="none"/><rect x="-36" y="-28" width="72" height="18.5" rx="3" fill="#f4bfbf" stroke="#d40000" stroke-width="3"/><path d="M-36 -9.5H36M-12 -28V-9.5M12 -9.5V9.5M-12 9.5V28" stroke="#d40000" stroke-width="2.5" fill="none"/></g>
<text x="185.33" y="311.95" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Filtrado y traducción de direcciones</text>
<rect x="394.67" y="177" width="370.67" height="153" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="394.67" y1="211" x2="765.33" y2="211" stroke="#dd3a00" stroke-width="1.5"/>
<text x="580" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">14.5 Diagnóstico de red</text>
<g transform="translate(580 253.84) scale(0.7)" data-lib="search"><circle cx="-6" cy="-6" r="20" fill="#fcebe6" stroke="#dd3a00" stroke-width="4"></circle><path d="M9 9 L28 28" stroke="#dd3a00" stroke-width="6" stroke-linecap="round"></path></g>
<text x="580" y="311.95" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Método por capas y herramientas</text>
<rect x="789.33" y="177" width="370.67" height="153" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="789.33" y1="211" x2="1160" y2="211" stroke="#364e6c" stroke-width="1.5"/>
<text x="974.67" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">14.6 Simulación de redes</text>
<g transform="translate(974.67 253.84) scale(0.7)" data-lib="cube"><path d="M0 -30L28 -15V15L0 30L-28 15V-15Z" fill="#ebedf0" stroke="#364e6c" stroke-width="3" stroke-linejoin="round"/><path d="M-28 -15L0 0L28 -15M0 0V30" fill="none" stroke="#364e6c" stroke-width="3" stroke-linejoin="round"/></g>
<text x="974.67" y="311.95" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">GNS3 y EVE-NG</text></g><text x="600" y="384" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 14.1. Mapa del Tema 14.</text></svg>
</div>

Las herramientas de red en *Linux* comprenden tanto utilidades del espacio de usuario como funcionalidades implementadas directamente en el *kernel*. A través de ellas es posible gestionar direcciones IP, rutas, reglas de *firewall*, túneles, conexiones activas y parámetros avanzados de comunicación.

**Nota de ejecución:** los comandos que modifican la configuración del sistema se muestran con sudo. Los comandos de consulta y diagnóstico pueden ejecutarse sin privilegios elevados, salvo que la plataforma requiera permisos adicionales.

Estas herramientas interactúan con la pila TCP/IP del *kernel* y cubren desde la configuración básica de una estación de trabajo hasta funciones de enrutamiento, filtrado y diagnóstico. El recorrido de este tema va de iproute2 y ss, pasa por el enrutamiento y el filtrado con nftables e iptables, sigue con el diagnóstico por capas y termina con la simulación de redes en GNS3 y EVE-NG (Figura 14.1).

## 14.1 IP / IPROUTE2

iproute2 es el conjunto moderno de utilidades de red para *Linux*. Proporciona alternativas actuales a varias herramientas históricas: el comando ip cubre tareas que antes se realizaban con ifconfig, route, arp y vconfig, mientras que ss sustituye muchos de los usos habituales de netstat.

Estas utilidades ofrecen una administración más coherente de interfaces, direcciones, rutas, vecinos y *sockets*.

La utilidad principal del paquete es el comando ip, que permite configurar interfaces, asignar direcciones IP, gestionar rutas, crear túneles y aplicar políticas avanzadas de enrutamiento.

<div class="diagram" id="figura-14-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1402" viewBox="0 0 1200 402" role="img" aria-labelledby="g1402-title">
<title id="g1402-title">El comando ip y sus subcomandos principales</title>
<defs><marker id="g1402m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1402n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g1402-c" transform="translate(20 20)"><g transform="translate(110 56) scale(0.85)" data-lib="terminal"><rect x="-38" y="-28" width="76" height="56" rx="5" fill="#ebedf0" stroke="#364e6c" stroke-width="3"/><path d="M-26 -12L-12 0L-26 12" fill="none" stroke="#364e6c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M-4 12h22" stroke="#364e6c" stroke-width="4" stroke-linecap="round"/></g>
<text x="110" y="104" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Comando ip</text>
<polyline points="190,56 500,56" fill="none" stroke="#364e6c" stroke-width="3" marker-end="url(#g1402m364e6c)" marker-start="url(#g1402n364e6c)"/>
<rect x="285" y="40" width="110" height="30" rx="15.0" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/>
<text x="340" y="59.66" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Netlink</text>
<rect x="520" y="0" width="300" height="112" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="520" y1="32" x2="820" y2="32" stroke="#364e6c" stroke-width="1.5"/>
<text x="670" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Kernel de Linux</text>
<text x="670" y="67.06" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Pila TCP/IP: interfaces, direcciones, rutas</text>
<text x="670" y="86.06" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">y vecinos</text>
<text x="0" y="168" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Subcomandos principales</text>
<rect x="0" y="188" width="219.2" height="142" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="222" x2="219.2" y2="222" stroke="#003ecc" stroke-width="1.5"/>
<text x="109.6" y="211" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">ip addr</text>
<text x="109.6" y="271.06" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Direcciones IP de cada</text>
<text x="109.6" y="290.06" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">interfaz</text>
<rect x="235.2" y="188" width="219.2" height="142" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="235.2" y1="222" x2="454.4" y2="222" stroke="#009254" stroke-width="1.5"/>
<text x="344.8" y="211" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">ip link</text>
<text x="344.8" y="271.06" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Estado, MTU y parámetros de</text>
<text x="344.8" y="290.06" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">enlace</text>
<rect x="470.4" y="188" width="219.2" height="142" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="470.4" y1="222" x2="689.6" y2="222" stroke="#7c3aed" stroke-width="1.5"/>
<text x="580" y="211" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">ip route</text>
<text x="580" y="280.56" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Tabla de enrutamiento</text>
<rect x="705.6" y="188" width="219.2" height="142" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="705.6" y1="222" x2="924.8" y2="222" stroke="#dd3a00" stroke-width="1.5"/>
<text x="815.2" y="211" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">ip neigh</text>
<text x="815.2" y="271.06" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Vecinos ARP (IPv4) y NDP</text>
<text x="815.2" y="290.06" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">(IPv6)</text>
<rect x="940.8" y="188" width="219.2" height="142" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="940.8" y1="222" x2="1160" y2="222" stroke="#d40000" stroke-width="1.5"/>
<text x="1050.4" y="211" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">ip rule</text>
<text x="1050.4" y="271.06" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Enrutamiento basado en</text>
<text x="1050.4" y="290.06" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">políticas</text></g><text x="600" y="384" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 14.2. El comando ip y sus subcomandos principales.</text></svg>
</div>

A diferencia de varias herramientas tradicionales, las utilidades de iproute2 utilizan Netlink para comunicarse con el *kernel*, proporcionando una administración más coherente, flexible y extensible de los recursos de red. La Figura 14.2 resume la relación entre el comando ip, Netlink y el *kernel*, y la Tabla 14.1 recoge las herramientas heredadas que reemplaza.

<div class="diagram tabla-svg" id="tabla-14-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 292" role="img" aria-labelledby="t69-title"><title id="t69-title">Tabla 14.1. Herramientas heredadas y su reemplazo en iproute2.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="148.8" y="20.0" dominant-baseline="central" text-anchor="middle">Herramienta heredada</text>
<text class="tb-ht" x="418.4" y="20.0" dominant-baseline="central" text-anchor="middle">Alternativa actual</text>
<text class="tb-ht" x="869.6" y="20.0" dominant-baseline="central" text-anchor="middle">Función</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">ifconfig</text>
<text class="tb-tx" x="309.6" y="60.8" dominant-baseline="central">ip addr / ip link</text>
<text class="tb-tx" x="551.2" y="60.8" dominant-baseline="central">Consulta y configuración de interfaces de red.</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">route</text>
<text class="tb-tx" x="309.6" y="101.5" dominant-baseline="central">ip route</text>
<text class="tb-tx" x="551.2" y="101.5" dominant-baseline="central">Consulta y administración de rutas.</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">arp</text>
<text class="tb-tx" x="309.6" y="142.2" dominant-baseline="central">ip neigh</text>
<text class="tb-tx" x="551.2" y="142.2" dominant-baseline="central">Consulta y administración de vecinos ARP y NDP.</text>
<rect class="tb-to" x="0" y="163.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="183.0" dominant-baseline="central">netstat</text>
<text class="tb-tx" x="309.6" y="183.0" dominant-baseline="central">ss</text>
<text class="tb-tx" x="551.2" y="183.0" dominant-baseline="central">Consulta de sockets, conexiones y puertos en escucha.</text>
<rect class="tb-te" x="0" y="203.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="223.8" dominant-baseline="central">vconfig</text>
<text class="tb-tx" x="309.6" y="223.8" dominant-baseline="central">ip link (tipo vlan)</text>
<text class="tb-tx" x="551.2" y="223.8" dominant-baseline="central">Creación y administración de interfaces VLAN 802.1Q.</text>
<text class="tb-cap" x="600.0" y="270.5" text-anchor="middle">Tabla 14.1. Herramientas heredadas y su reemplazo en iproute2.</text></svg>
</div>

### Subcomandos principales

#### ip addr

Permite administrar las direcciones IP asociadas a las interfaces de red.

##### Mostrar todas las interfaces y sus direcciones IP:

```text
Networking@SecOpsMX:~$ ip addr show
```

```text
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
inet 127.0.0.1/8 scope host lo
valid_lft forever preferred_lft forever
inet6 ::1/128 scope host
valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
link/ether 08:00:27:3e:4f:a1 brd ff:ff:ff:ff:ff:ff
inet 192.168.1.20/24 brd 192.168.1.255 scope global eth0
valid_lft forever preferred_lft forever
inet6 fe80::a00:27ff:fe3e:4fa1/64 scope link
valid_lft forever preferred_lft forever
```

##### Asignar una dirección IP a una interfaz:

```text
Networking@SecOpsMX:~$ sudo ip addr add 192.168.1.20/24 dev eth0
Networking@SecOpsMX:~$ ip addr show eth0
```

```text
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
link/ether 08:00:27:3e:4f:a1 brd ff:ff:ff:ff:ff:ff
inet 192.168.1.20/24 scope global eth0
valid_lft forever preferred_lft forever
inet6 fe80::a00:27ff:fe3e:4fa1/64 scope link
valid_lft forever preferred_lft forever
```

##### Eliminar una dirección IP de una interfaz:

```text
Networking@SecOpsMX:~$ sudo ip addr del 192.168.1.20/24 dev eth0
Networking@SecOpsMX:~$ ip addr show eth0
```

```text
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
link/ether 08:00:27:3e:4f:a1 brd ff:ff:ff:ff:ff:ff
inet6 fe80::a00:27ff:fe3e:4fa1/64 scope link
valid_lft forever preferred_lft forever
```

#### ip link

Permite administrar el estado y diversos parámetros de las interfaces de red.

##### Activar una interfaz:

```text
Networking@SecOpsMX:~$ sudo ip link set eth0 up
Networking@SecOpsMX:~$ ip link show eth0
```

```text
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT group default qlen 1000
link/ether 08:00:27:3e:4f:a1 brd ff:ff:ff:ff:ff:ff
```

##### Desactivar una interfaz:

```text
Networking@SecOpsMX:~$ sudo ip link set eth0 down
Networking@SecOpsMX:~$ ip link show eth0
```

```text
2: eth0: <BROADCAST,MULTICAST> mtu 1500 qdisc pfifo_fast state DOWN mode DEFAULT group default qlen 1000
link/ether 08:00:27:3e:4f:a1 brd ff:ff:ff:ff:ff:ff
```

##### Modificar la MTU:

```text
Networking@SecOpsMX:~$ sudo ip link set eth0 mtu 9000
Networking@SecOpsMX:~$ ip link show eth0
```

```text
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 9000 qdisc pfifo_fast state UP mode DEFAULT group default qlen 1000
link/ether 08:00:27:3e:4f:a1 brd ff:ff:ff:ff:ff:ff
```

##### Mostrar información de una interfaz específica:

```text
Networking@SecOpsMX:~$ ip link show eth0
```

```text
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT group default qlen 1000
link/ether 08:00:27:3e:4f:a1 brd ff:ff:ff:ff:ff:ff
```

#### ip route

Permite consultar y administrar la tabla de enrutamiento del sistema.

##### Mostrar la tabla de enrutamiento:

```text
Networking@SecOpsMX:~$ ip route show
```

```text
default via 192.168.1.1 dev eth0
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.20
```

##### Agregar una ruta estática:

```text
Networking@SecOpsMX:~$ sudo ip route add 10.0.0.0/8 via 192.168.1.254 dev eth0
Networking@SecOpsMX:~$ ip route show
```

```text
default via 192.168.1.1 dev eth0
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.20
10.0.0.0/8 via 192.168.1.254 dev eth0
```

##### Agregar (o reemplazar) la ruta por defecto:

```text
Networking@SecOpsMX:~$ sudo ip route replace default via 192.168.1.1 dev eth0
Networking@SecOpsMX:~$ ip route show
```

```text
default via 192.168.1.1 dev eth0
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.20
10.0.0.0/8 via 192.168.1.254 dev eth0
```

##### Consultar la ruta utilizada hacia un destino específico:

```text
Networking@SecOpsMX:~$ ip route get 8.8.8.8
```

```text
8.8.8.8 via 192.168.1.1 dev eth0 src 192.168.1.20 uid 1000
```

#### ip neigh

Permite consultar la tabla de vecinos utilizada por IPv4 mediante ARP y por IPv6 mediante NDP.

##### Mostrar vecinos conocidos:

```text
Networking@SecOpsMX:~$ ip neigh show
```

```text
192.168.1.1 dev eth0 lladdr 00:11:22:33:44:55 REACHABLE
192.168.1.100 dev eth0 lladdr a0:b1:c2:d3:e4:f5 STALE
192.168.1.200 dev eth0 lladdr b2:c3:d4:e5:f6:a7 DELAY
```

#### ip rule

Permite implementar enrutamiento basado en políticas (*Policy-Based Routing*).

##### Mostrar las reglas configuradas:

```text
Networking@SecOpsMX:~$ ip rule show
```

```text
from all lookup local
66: from all lookup main
67: from all lookup default
```

### Ventajas de iproute2

- Soporte para IPv4 e IPv6.
- Administración de múltiples tablas de enrutamiento.
- Compatibilidad con VRF, túneles GRE, VXLAN y VETH.
- Integración con mecanismos avanzados de calidad de servicio.
- Salidas adecuadas para automatización.
- Desarrollo y mantenimiento continuos.

### Ejemplos prácticos

##### Mostrar información detallada de la interfaz eth0:

```text
Networking@SecOpsMX:~$ ip addr show eth0
```

```text
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
link/ether 08:00:27:3e:4f:a1 brd ff:ff:ff:ff:ff:ff
inet 192.168.1.20/24 scope global eth0
valid_lft forever preferred_lft forever
inet6 fe80::a00:27ff:fe3e:4fa1/64 scope link
valid_lft forever preferred_lft forever
```

##### Mostrar la tabla de enrutamiento principal (main) de IPv4:

```text
Networking@SecOpsMX:~$ ip -4 route show table main
```

```text
default via 192.168.1.1 dev eth0
10.0.0.0/8 via 192.168.1.254 dev eth0
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.20
```

##### Consultar la ruta utilizada hacia un destino específico:

```text
Networking@SecOpsMX:~$ ip route get 8.8.8.8
```

```text
8.8.8.8 via 192.168.1.1 dev eth0 src 192.168.1.20 uid 1000
```

## 14.2 SS / NETSTAT

ss (*Socket Statistics*) es la herramienta moderna utilizada para inspeccionar *sockets* y conexiones de red en sistemas *Linux*.

Sustituye funcionalmente al clásico netstat en muchas tareas de administración y diagnóstico.

A diferencia de netstat, ss utiliza mecanismos del *kernel*, principalmente Netlink, para obtener información sobre los *sockets*, lo que permite realizar consultas eficientes incluso en sistemas con un elevado número de conexiones simultáneas.

La herramienta permite visualizar conexiones activas, puertos en escucha, estados TCP, procesos asociados, temporizadores y estadísticas de memoria.

##### Conexiones TCP en escucha:

```text
Networking@SecOpsMX:~$ ss -tln
```

```text
State Recv-Q Send-Q Local Address:Port Peer Address:Port
LISTEN 0 128 0.0.0.0:22 0.0.0.0:*
LISTEN 0 128 [::]:22 [::]:*
LISTEN 0 128 *:80 *:*
LISTEN 0 128 0.0.0.0:443 0.0.0.0:*
```

##### Consultar información de las conexiones TCP:

```text
Networking@SecOpsMX:~$ ss -t -i
```

```text
State Recv-Q Send-Q Local Address:Port Peer Address:Port
ESTAB 0 0 192.168.1.20:ssh 10.0.0.5:52234
cubic wscale:7,7 rto:201 rtt:0.178/0.059 ato:40 mss:1448 pmtu:1500
cwnd:10 bytes_acked:1473 bytes_received:1473
```

### Uso práctico de ss

##### Mostrar puertos TCP y UDP en escucha junto con los procesos asociados:

```text
Networking@SecOpsMX:~$ ss -tulpn
```

```text
Netid State Recv-Q Send-Q Local Address:Port Peer Address:Port Process
udp UNCONN 0 0 0.0.0.0:68 0.0.0.0:* users:(("dhclient",pid=1345,fd=6))
udp UNCONN 0 0 0.0.0.0:123 0.0.0.0:* users:(("ntpd",pid=1567,fd=5))
tcp LISTEN 0 128 0.0.0.0:22 0.0.0.0:* users:(("sshd",pid=1270,fd=3))
tcp LISTEN 0 128 [::]:22 [::]:* users:(("sshd",pid=1270,fd=4))
tcp LISTEN 0 128 *:80 *:* users:(("nginx",pid=1453,fd=6))
tcp LISTEN 0 128 *:443 *:* users:(("nginx",pid=1453,fd=7))
```

##### Mostrar conexiones TCP establecidas:

```text
Networking@SecOpsMX:~$ ss -tn state established
```

```text
State Recv-Q Send-Q Local Address:Port Peer Address:Port
ESTAB 0 0 192.168.1.20:22 10.0.0.5:52234
ESTAB 0 0 192.168.1.20:80 172.16.0.10:54321
ESTAB 0 0 192.168.1.20:443 203.0.113.5:45678
ESTAB 0 0 192.168.1.20:3306 10.0.0.50:59876
```

##### Filtrar conexiones por puerto de destino:

```text
Networking@SecOpsMX:~$ ss -tnp dport = :443
```

```text
State Recv-Q Send-Q Local Address:Port Peer Address:Port Process
ESTAB 0 0 192.168.1.20:443 203.0.113.5:45678 users:(("nginx",pid=1453,fd=12))
ESTAB 0 0 192.168.1.20:443 203.0.113.6:50234 users:(("nginx",pid=1454,fd=10))
```

##### Mostrar información detallada de temporizadores TCP:

```text
Networking@SecOpsMX:~$ ss -to state established
```

```text
State Recv-Q Send-Q Local Address:Port Peer Address:Port Timer
ESTAB 0 0 192.168.1.20:22 10.0.0.5:52234 timer:(keepalive,45sec,0)
ESTAB 0 0 192.168.1.20:80 172.16.0.10:54321 timer:(on,450ms,0)
ESTAB 0 0 192.168.1.20:443 203.0.113.5:45678 timer:(off,0sec,0)
```

##### Mostrar estadísticas de memoria por socket:

```text
Networking@SecOpsMX:~$ ss -tm
```

ss -tm muestra estadísticas de memoria por *socket*.

La salida depende del *kernel* y de los *sockets* activos; no se incluye un ejemplo fijo para evitar resultados engañosos.

### Información disponible mediante ss

- Conexiones TCP activas.
- Conexiones UDP activas.
- Puertos en escucha.
- Procesos asociados a conexiones.
- Temporizadores TCP.
- Consumo de memoria por socket.
- Estados detallados de la pila TCP.

### Ventajas de ss

- Mayor velocidad de ejecución.
- Menor consumo de recursos en determinadas consultas.
- Filtrado avanzado.
- Integración con procesos del sistema.
- Acceso a métricas modernas del *kernel*.

En sistemas *Linux* modernos, ss es una herramienta estándar para el análisis de conexiones y *sockets* de red, especialmente en servidores con una elevada densidad de conexiones.

## 14.3 ROUTING EN LINUX

*Linux* incorpora capacidades nativas de enrutamiento que permiten utilizarlo como *router* de propósito general en entornos empresariales, laboratorios y proveedores de servicios.

Mediante IP *forwarding*, tablas de enrutamiento avanzadas y *software* especializado, puede desempeñar funciones comparables a las de numerosos equipos de red dedicados, aunque la capacidad y el comportamiento final dependerán del *hardware*, el *kernel*, el *software* utilizado y la arquitectura implementada.

El *kernel* puede reenviar tráfico entre múltiples interfaces utilizando rutas estáticas o protocolos de enrutamiento dinámico. Para ello, es necesario habilitar el reenvío IP.

### Habilitación de IP forwarding

##### Activación temporal para IPv4:

```text
Networking@SecOpsMX:~$ sudo sysctl -w net.ipv4.ip_forward=1
Networking@SecOpsMX:~$ cat /proc/sys/net/ipv4/ip_forward
```

```text
1
```

##### Para IPv6:

```text
Networking@SecOpsMX:~$ sudo sysctl -w net.ipv6.conf.all.forwarding=1
Networking@SecOpsMX:~$ cat /proc/sys/net/ipv6/conf/all/forwarding
```

```text
1
```

##### Configuración permanente mediante /etc/sysctl.conf:

```text
net.ipv4.ip_forward = 1
net.ipv6.conf.all.forwarding = 1
```

Aplicar los cambios:

```text
Networking@SecOpsMX:~$ sudo sysctl -p
```

```text
net.ipv4.ip_forward = 1
net.ipv6.conf.all.forwarding = 1
```

Verificación:

```text
Networking@SecOpsMX:~$ sysctl net.ipv4.ip_forward
```

```text
net.ipv4.ip_forward = 1
```

### Router Linux básico con NAT

En el siguiente ejemplo, la interfaz eth0 conecta con una red externa y la interfaz eth1 proporciona acceso a la red local. La Figura 14.3 muestra la topología.

<div class="diagram" id="figura-14-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1403" viewBox="0 0 1200 402" role="img" aria-labelledby="g1403-title">
<title id="g1403-title">Router Linux con NAT entre una LAN y una red externa</title>
<defs><marker id="g1403m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1403n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g1403-c" transform="translate(20 20)"><rect x="0" y="40" width="250" height="230" rx="6" fill="#e6ecfa" fill-opacity="0.55" stroke="#003ecc" stroke-width="2" stroke-dasharray="7 5"/>
<text x="12" y="62" font-size="12.5pt" font-weight="700" fill="#1e3a8a" text-anchor="start">LAN</text>
<g transform="translate(70 150) scale(0.6)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<g transform="translate(180 150) scale(0.6)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<g transform="translate(125 225) scale(0.5)" data-lib="printer"><rect x="-30" y="-6" width="60" height="30" rx="5" fill="#ffffff" stroke="#364e6c" stroke-width="3"/><rect x="-18" y="-28" width="36" height="22" fill="#ebedf0" stroke="#364e6c" stroke-width="3"/><rect x="-18" y="12" width="36" height="16" fill="#ebedf0" stroke="#364e6c" stroke-width="3"/></g>
<g transform="translate(580 150) scale(1.4)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="580" y="215" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router Linux</text>
<rect x="480" y="236" width="200" height="28" rx="14.0" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/>
<text x="580" y="254.66" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">IP forwarding habilitado</text>
<rect x="480" y="272" width="200" height="28" rx="14.0" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"/>
<text x="580" y="290.66" font-size="10.35pt" font-weight="700" fill="#7c2d12" text-anchor="middle">NAT (masquerade) en eth0</text>
<g transform="translate(1060 150) scale(1.3)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="1060" y="205" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Red externa</text>
<text x="1060" y="224" font-size="10.35pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Internet</text>
<polyline points="252,150 480,150" fill="none" stroke="#364e6c" stroke-width="3" marker-end="url(#g1403m364e6c)" marker-start="url(#g1403n364e6c)"/>
<polyline points="690,150 970,150" fill="none" stroke="#364e6c" stroke-width="3" marker-end="url(#g1403m364e6c)" marker-start="url(#g1403n364e6c)"/>
<rect x="268" y="100" width="195" height="28" rx="14.0" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/>
<text x="365.5" y="118.66" font-size="10.35pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">eth1 · 192.168.1.1/24</text>
<rect x="722" y="100" width="225" height="28" rx="14.0" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/>
<text x="834.5" y="118.66" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">eth0 · 203.0.113.1/30</text>
<text x="365" y="190" font-size="10.35pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Puerta de enlace de la LAN</text>
<text x="835" y="190" font-size="10.35pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Ruta por defecto hacia el exterior</text></g><text x="600" y="384" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 14.3. Router Linux con NAT entre una LAN y una red externa.</text></svg>
</div>

##### Configuración de interfaces:

```text
Networking@SecOpsMX:~$ sudo ip addr add 203.0.113.1/30 dev eth0
Networking@SecOpsMX:~$ sudo ip addr add 192.168.1.1/24 dev eth1
Networking@SecOpsMX:~$ sudo ip link set eth0 up
Networking@SecOpsMX:~$ sudo ip link set eth1 up
Networking@SecOpsMX:~$ ip addr show eth0
```

Nota: 203.0.113.0/24 pertenece al bloque reservado para documentación y ejemplos. No debe utilizarse como direccionamiento público real en Internet.

```text
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
inet 203.0.113.1/30 scope global eth0
valid_lft forever preferred_lft forever
Networking@SecOpsMX:~$ ip addr show eth1
```

```text
3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
inet 192.168.1.1/24 scope global eth1
valid_lft forever preferred_lft forever
```

##### Habilitar el reenvío IPv4:

```text
Networking@SecOpsMX:~$ sudo sysctl -w net.ipv4.ip_forward=1
```

```text
net.ipv4.ip_forward = 1
```

##### Configurar NAT:

```text
Networking@SecOpsMX:~$ sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
Networking@SecOpsMX:~$ sudo iptables -t nat -L -n -v
```

```text
Chain POSTROUTING (policy ACCEPT 0 packets, 0 bytes)
pkts bytes target prot opt in out source destination
0 0 MASQUERADE all -- * eth0 0.0.0.0/0 0.0.0.0/0
```

##### Configurar la ruta por defecto:

```text
Networking@SecOpsMX:~$ sudo ip route add default via 203.0.113.2 dev eth0
Networking@SecOpsMX:~$ ip route show
```

```text
default via 203.0.113.2 dev eth0
192.168.1.0/24 dev eth1 proto kernel scope link src 192.168.1.1
203.0.113.0/30 dev eth0 proto kernel scope link src 203.0.113.1
```

Una vez completada la configuración, y siempre que existan conectividad y rutas adecuadas en la red externa, los equipos de la red local podrán utilizar el *router* *Linux* como puerta de enlace y acceder a redes externas mediante NAT.

## 14.4 NFTABLES / IPTABLES

Netfilter es el subsistema del *kernel* de *Linux* encargado del procesamiento, filtrado y manipulación de paquetes. Sobre esta infraestructura operan iptables y nftables, herramientas utilizadas para implementar *firewalls*, traducción de direcciones (NAT), redirección de puertos y políticas de control de tráfico.

<div class="diagram" id="figura-14-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1404" viewBox="0 0 1200 472" role="img" aria-labelledby="g1404-title">
<title id="g1404-title">Recorrido de un paquete por los puntos de enganche de Netfilter</title>
<defs><marker id="g1404m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1404n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g1404-c" transform="translate(20 20)"><rect x="0" y="160" width="140" height="84" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<text x="70" y="197.06" font-size="10.9pt" font-weight="700" fill="#1e3a5f" text-anchor="middle">Paquete</text>
<text x="70" y="216.06" font-size="10.9pt" font-weight="700" fill="#1e3a5f" text-anchor="middle">entrante</text>
<rect x="180" y="160" width="190" height="84" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="180" y1="194" x2="370" y2="194" stroke="#dd3a00" stroke-width="1.5"/>
<text x="275" y="183" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">PREROUTING</text>
<text x="275" y="223.56" font-size="10.35pt" font-weight="400" fill="#7c2d12" text-anchor="middle">raw, mangle, nat (DNAT)</text>
<rect x="410" y="160" width="190" height="84" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<text x="505" y="197.06" font-size="10.9pt" font-weight="700" fill="#1e3a5f" text-anchor="middle">Decisión de</text>
<text x="505" y="216.06" font-size="10.9pt" font-weight="700" fill="#1e3a5f" text-anchor="middle">enrutamiento</text>
<rect x="660" y="10" width="150" height="84" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="660" y1="44" x2="810" y2="44" stroke="#003ecc" stroke-width="1.5"/>
<text x="735" y="33" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">INPUT</text>
<text x="735" y="73.56" font-size="10.35pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">mangle, filter</text>
<rect x="850" y="10" width="130" height="84" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<text x="915" y="56.56" font-size="10.9pt" font-weight="700" fill="#1e3a5f" text-anchor="middle">Proceso local</text>
<rect x="1020" y="10" width="140" height="84" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="1020" y1="44" x2="1160" y2="44" stroke="#7c3aed" stroke-width="1.5"/>
<text x="1090" y="33" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">OUTPUT</text>
<text x="1090" y="64.06" font-size="10.35pt" font-weight="400" fill="#5b21b6" text-anchor="middle">raw, mangle, nat,</text>
<text x="1090" y="83.06" font-size="10.35pt" font-weight="400" fill="#5b21b6" text-anchor="middle">filter</text>
<rect x="660" y="310" width="150" height="84" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="660" y1="344" x2="810" y2="344" stroke="#009254" stroke-width="1.5"/>
<text x="735" y="333" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">FORWARD</text>
<text x="735" y="373.56" font-size="10.35pt" font-weight="400" fill="#065f46" text-anchor="middle">mangle, filter</text>
<rect x="850" y="310" width="190" height="84" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="850" y1="344" x2="1040" y2="344" stroke="#dd3a00" stroke-width="1.5"/>
<text x="945" y="333" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">POSTROUTING</text>
<text x="945" y="373.56" font-size="10.35pt" font-weight="400" fill="#7c2d12" text-anchor="middle">mangle, nat (SNAT)</text>
<rect x="1060" y="310" width="100" height="84" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<text x="1110" y="356.56" font-size="10.9pt" font-weight="700" fill="#1e3a5f" text-anchor="middle">Salida</text>
<polyline points="142,202 178,202" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1404m364e6c)"/>
<polyline points="372,202 408,202" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1404m364e6c)"/>
<polyline points="600,190 630,190 630,52 658,52" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1404m364e6c)"/>
<polyline points="600,214 630,214 630,352 658,352" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1404m364e6c)"/>
<polyline points="812,52 848,52" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1404m364e6c)"/>
<polyline points="982,52 1018,52" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1404m364e6c)"/>
<polyline points="812,352 848,352" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1404m364e6c)"/>
<polyline points="1042,352 1058,352" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1404m364e6c)"/>
<polyline points="1090,96 1090,270 945,270 945,308" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1404m364e6c)"/></g><text x="600" y="454" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 14.4. Recorrido de un paquete por los puntos de enganche de Netfilter.</text></svg>
</div>

Durante años, iptables fue una de las principales interfaces de administración de Netfilter. Actualmente, nftables es la plataforma recomendada para nuevas implementaciones en numerosas distribuciones *Linux*, debido a su arquitectura unificada y a sus capacidades de gestión de reglas, conjuntos y familias de protocolos. La Figura 14.4 muestra los puntos de enganche (*hooks*) por los que atraviesa un paquete y las tablas asociadas a cada uno.

### IPTABLES

iptables organiza las reglas mediante tablas y cadenas.

#### Tablas principales

- filter
- nat
- mangle
- raw

#### Cadenas principales

- INPUT
- OUTPUT
- FORWARD
- PREROUTING
- POSTROUTING

##### Visualizar las reglas activas:

```text
Networking@SecOpsMX:~$ sudo iptables -L -n -v
```

```text
Chain INPUT (policy DROP 0 packets, 0 bytes)
pkts bytes target prot opt in out source destination
156 12345 ACCEPT all -- * * 0.0.0.0/0 0.0.0.0/0 ctstate RELATED,ESTABLISHED
0 0 ACCEPT tcp -- * * 10.0.0.5 0.0.0.0/0 tcp dpt:22
0 0 ACCEPT tcp -- * * 0.0.0.0/0 0.0.0.0/0 multiport dports 80,443
0 0 ACCEPT icmp -- * * 0.0.0.0/0 0.0.0.0/0
Chain FORWARD (policy DROP 0 packets, 0 bytes)
pkts bytes target prot opt in out source destination
0 0 ACCEPT all -- eth1 eth0 0.0.0.0/0 0.0.0.0/0 ctstate RELATED,ESTABLISHED
0 0 ACCEPT tcp -- eth0 eth1 0.0.0.0/0 192.168.1.100 tcp dpt:80
Chain OUTPUT (policy ACCEPT 0 packets, 0 bytes)
pkts bytes target prot opt in out source destination
```

Las reglas se evalúan secuencialmente dentro de cada cadena.

Cuando un paquete coincide con una regla, se ejecuta la acción asociada y el procesamiento continúa o termina de acuerdo con el *target* (acción) de la regla.

#### Reglas básicas de firewall

##### Permitir tráfico de la interfaz loopback:

```text
Networking@SecOpsMX:~$ sudo iptables -A INPUT -i lo -j ACCEPT
```

##### Permitir tráfico establecido y relacionado:

```text
Networking@SecOpsMX:~$ sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
```

##### Permitir acceso SSH desde una dirección específica:

```text
Networking@SecOpsMX:~$ sudo iptables -A INPUT -p tcp --dport 22 -s 10.0.0.5 -j ACCEPT
```

##### Permitir HTTP y HTTPS:

```text
Networking@SecOpsMX:~$ sudo iptables -A INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT
```

##### Permitir ICMP:

```text
Networking@SecOpsMX:~$ sudo iptables -A INPUT -p icmp -j ACCEPT
```

Esta regla permite ICMPv4; no habilita ICMPv6. En sistemas IPv6 deben definirse también las reglas necesarias para *Neighbor Discovery*, mensajes de error y *Path MTU Discovery*. Antes de establecer políticas DROP, compruebe que las reglas de administración y los servicios requeridos ya están permitidos; de lo contrario, puede perderse el acceso remoto.

##### Definir políticas restrictivas por defecto:

```text
Networking@SecOpsMX:~$ sudo iptables -P INPUT DROP
Networking@SecOpsMX:~$ sudo iptables -P FORWARD DROP
```

#### Traducción de direcciones (NAT)

##### Configurar NAT de salida:

```text
Networking@SecOpsMX:~$ sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
```

##### Redirigir tráfico TCP recibido en el puerto 8080 hacia un servidor interno:

```text
Networking@SecOpsMX:~$ sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 8080 -j DNAT --to-destination 192.168.1.100:80
Networking@SecOpsMX:~$ sudo iptables -A FORWARD -p tcp -d 192.168.1.100 --dport 80 -j ACCEPT
Networking@SecOpsMX:~$ sudo iptables -A FORWARD -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
```

La segunda regla de FORWARD permite el tráfico de retorno del servidor interno; sin ella, la política DROP descartaría las respuestas.

##### Verificar las reglas NAT:

```text
Networking@SecOpsMX:~$ sudo iptables -t nat -L -n -v
```

```text
Chain PREROUTING (policy ACCEPT 0 packets, 0 bytes)
pkts bytes target prot opt in out source destination
0 0 DNAT tcp -- eth0 * 0.0.0.0/0 0.0.0.0/0 tcp dpt:8080 to:192.168.1.100:80
Chain POSTROUTING (policy ACCEPT 0 packets, 0 bytes)
pkts bytes target prot opt in out source destination
150 12000 MASQUERADE all -- * eth0 0.0.0.0/0 0.0.0.0/0
```

##### Persistencia de reglas:

```text
Networking@SecOpsMX:~$ sudo apt install iptables-persistent
Networking@SecOpsMX:~$ sudo netfilter-persistent save
```

```text
run-parts: executing /usr/share/netfilter-persistent/plugins.d/15-ip4tables save
run-parts: executing /usr/share/netfilter-persistent/plugins.d/25-ip6tables save
```

### NFTABLES

nftables proporciona una interfaz unificada para administrar reglas de filtrado y NAT para diferentes familias de protocolos. Su arquitectura permite trabajar con IPv4, IPv6, ARP y otras familias mediante una sintaxis coherente.

Las reglas se procesan mediante la infraestructura Netfilter y pueden aprovechar estructuras como conjuntos y mapas para simplificar configuraciones complejas.

La organización jerárquica de cadenas, tablas y políticas en nftables se representa en el **Anexo IX.**

##### Visualizar la configuración activa:

```text
Networking@SecOpsMX:~$ sudo nft list ruleset
```

```text
table inet filter {
chain input {
type filter hook input priority 0; policy drop;
iif "lo" accept
ct state established,related accept
tcp dport 22 accept
tcp dport { 80, 443 } accept
}
chain forward {
type filter hook forward priority 0; policy drop;
ct state established,related accept
iifname "eth1" oifname "eth0" accept
}
}
```

##### Crear una tabla:

```text
Networking@SecOpsMX:~$ sudo nft add table inet filter
```

##### Crear una cadena de entrada:

```text
Networking@SecOpsMX:~$ sudo nft add chain inet filter input '{ type filter hook input priority 0; policy drop; }'
```

##### Permitir tráfico local:

```text
Networking@SecOpsMX:~$ sudo nft add rule inet filter input iif "lo" accept
```

##### Permitir conexiones establecidas:

```text
Networking@SecOpsMX:~$ sudo nft add rule inet filter input ct state established,related accept
```

##### Permitir SSH:

```text
Networking@SecOpsMX:~$ sudo nft add rule inet filter input tcp dport 22 accept
```

##### Permitir HTTP y HTTPS:

```text
Networking@SecOpsMX:~$ sudo nft add rule inet filter input tcp dport '{ 80, 443 }' accept
```

##### Verificar las reglas aplicadas:

```text
Networking@SecOpsMX:~$ sudo nft list chain inet filter input
```

```text
table inet filter {
chain input {
type filter hook input priority 0; policy drop;
iif "lo" accept
ct state established,related accept
tcp dport 22 accept
tcp dport { 80, 443 } accept
}
}
```

#### Uso de conjuntos (sets)

Los conjuntos permiten agrupar múltiples elementos y procesarlos mediante una regla.

##### Crear un conjunto:

```text
Networking@SecOpsMX:~$ sudo nft add set inet filter blacklist '{ type ipv4_addr; }'
```

##### Agregar direcciones IP:

```text
Networking@SecOpsMX:~$ sudo nft add element inet filter blacklist '{ 1.2.3.4, 5.6.7.8, 10.0.0.100 }'
```

##### Bloquear las direcciones incluidas en el conjunto:

```text
Networking@SecOpsMX:~$ sudo nft add rule inet filter input ip saddr @blacklist drop
```

##### Verificar el conjunto:

```text
Networking@SecOpsMX:~$ sudo nft list set inet filter blacklist
```

```text
table inet filter {
set blacklist {
type ipv4_addr
elements = { 1.2.3.4, 5.6.7.8, 10.0.0.100 }
}
}
```

#### NAT con nftables

##### Crear la tabla NAT:

```text
Networking@SecOpsMX:~$ sudo nft add table ip nat
```

##### Crear la cadena postrouting:

```text
Networking@SecOpsMX:~$ sudo nft add chain ip nat postrouting '{ type nat hook postrouting priority 100; }'
```

##### Aplicar NAT de salida:

```text
Networking@SecOpsMX:~$ sudo nft add rule ip nat postrouting oifname "eth0" masquerade
```

##### Verificar la configuración NAT:

```text
Networking@SecOpsMX:~$ sudo nft list table ip nat
```

```text
table ip nat {
chain postrouting {
type nat hook postrouting priority 100; policy accept;
oifname "eth0" masquerade
}
}
```

##### Guardar la configuración:

```text
Networking@SecOpsMX:~$ sudo sh -c 'nft list ruleset > /etc/nftables.conf'
```

Antes de utilizar el archivo como configuración de arranque, compruebe que contiene el ruleset completo y que su estrategia de carga evita duplicar tablas o cadenas. En configuraciones que deban reemplazar el estado previo suele incluirse flush ruleset al inicio, siempre que sea seguro eliminar todas las reglas administradas en el sistema.

```text
Networking@SecOpsMX:~$ sudo systemctl enable nftables
```

### Comparación entre iptables y nftables

La Tabla 14.2 contrasta iptables y nftables en arquitectura, organización, familias, evaluación de reglas, administración y situación actual, y sirve de apoyo para decidir si conviene migrar.

<div class="diagram tabla-svg" id="tabla-14-2" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 470" role="img" aria-labelledby="t70-title"><title id="t70-title">Tabla 14.2. Comparación entre iptables y nftables.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="84.4" y="20.0" dominant-baseline="central" text-anchor="middle">Característica</text>
<text class="tb-ht" x="406.5" y="20.0" dominant-baseline="central" text-anchor="middle">iptables</text>
<text class="tb-ht" x="922.1" y="20.0" dominant-baseline="central" text-anchor="middle">nftables</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Arquitectura</text>
<text class="tb-tx" x="180.8" y="60.8" dominant-baseline="central">Interfaz tradicional de administración de reglas de</text>
<text class="tb-tx" x="180.8" y="83.5" dominant-baseline="central">Netfilter.</text>
<text class="tb-tx" x="656.2" y="60.8" dominant-baseline="central">Framework moderno de filtrado de paquetes que unifica la</text>
<text class="tb-tx" x="656.2" y="83.5" dominant-baseline="central">administración de reglas.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Organización</text>
<text class="tb-tx" x="180.8" y="135.6" dominant-baseline="central">Utiliza tablas como filter, nat, mangle, raw y security.</text>
<text class="tb-tx" x="656.2" y="124.2" dominant-baseline="central">Utiliza tablas y cadenas asociadas a familias y hooks, según el tipo</text>
<text class="tb-tx" x="656.2" y="147.0" dominant-baseline="central">de tráfico.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Familias</text>
<text class="tb-tx" x="180.8" y="187.8" dominant-baseline="central">Maneja IPv4 e IPv6 mediante herramientas y tablas</text>
<text class="tb-tx" x="180.8" y="210.5" dominant-baseline="central">específicas, además de otras extensiones.</text>
<text class="tb-tx" x="656.2" y="187.8" dominant-baseline="central">Admite familias como ip, ip6, inet, arp, bridge y netdev, con</text>
<text class="tb-tx" x="656.2" y="210.5" dominant-baseline="central">capacidades dependientes de la familia y del hook.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">Evaluación de</text>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">reglas</text>
<text class="tb-tx" x="180.8" y="262.6" dominant-baseline="central">Evaluación secuencial dentro de cada cadena.</text>
<text class="tb-tx" x="656.2" y="251.2" dominant-baseline="central">Evaluación secuencial con conjuntos y mapas para simplificar</text>
<text class="tb-tx" x="656.2" y="274.0" dominant-baseline="central">reglas complejas.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="326.1" dominant-baseline="central">Administración</text>
<text class="tb-tx" x="180.8" y="314.8" dominant-baseline="central">Puede utilizar reglas y extensiones específicas de</text>
<text class="tb-tx" x="180.8" y="337.5" dominant-baseline="central">iptables.</text>
<text class="tb-tx" x="656.2" y="326.1" dominant-baseline="central">Permite definir reglas y conjuntos mediante una sintaxis unificada.</text>
<rect class="tb-to" x="0" y="358.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="389.6" dominant-baseline="central">Situación actual</text>
<text class="tb-tx" x="180.8" y="378.2" dominant-baseline="central">Presente en numerosos sistemas heredados y aún</text>
<text class="tb-tx" x="180.8" y="401.0" dominant-baseline="central">disponible en muchas distribuciones.</text>
<text class="tb-tx" x="656.2" y="378.2" dominant-baseline="central">Plataforma recomendada para nuevas implementaciones en</text>
<text class="tb-tx" x="656.2" y="401.0" dominant-baseline="central">sistemas Linux modernos.</text>
<text class="tb-cap" x="600.0" y="447.8" text-anchor="middle">Tabla 14.2. Comparación entre iptables y nftables.</text></svg>
</div>

Nota: la disponibilidad de tablas, cadenas y *hooks* depende de la familia y del punto de enganche. En sistemas que utilizan el *backend* nftables, los comandos iptables pueden funcionar mediante la capa de compatibilidad iptables-nft.

### Aplicaciones habituales

- *Firewalls* perimetrales.
- NAT y publicación de servicios.
- Protección de servidores *Linux*.
- Control de tráfico en infraestructuras virtualizadas.

Aunque iptables continúa presente en numerosos sistemas heredados, nftables representa la evolución de la interfaz de administración de Netfilter y es una opción recomendada para despliegues modernos. La organización de las reglas de filtrado y la aplicación de políticas de *firewall* se ilustran en las Figuras 14.3 y 15.7.

## 14.5 DIAGNÓSTICO DE RED EN LINUX

La capacidad para diagnosticar problemas de red de forma rápida y sistemática es una de las habilidades más importantes para administradores de sistemas e ingenieros de redes. *Linux* incorpora un amplio conjunto de herramientas que permiten analizar el funcionamiento de la red desde la capa física hasta la capa de aplicación.

Un proceso de diagnóstico eficaz debe seguir una metodología estructurada, verificando cada capa de la comunicación antes de avanzar a la siguiente.

Este enfoque reduce el tiempo de resolución y evita diagnósticos incorrectos basados en suposiciones. La Tabla 14.3 resume la verificación por capas y los comandos recomendados, que se desarrollan en los apartados siguientes.

### ETHTOOL

*Ethtool* es una utilidad especializada en interfaces Ethernet.

Permite consultar y modificar determinados parámetros físicos y de enlace, así como obtener estadísticas avanzadas del adaptador de red.

##### Mostrar información general de una interfaz:

```text
Networking@SecOpsMX:~$ ethtool eth0
```

```text
Settings for eth0:
Supported ports: [ TP ]
Supported link modes: 10baseT/Half 10baseT/Full
100baseT/Half 100baseT/Full
1000baseT/Full
Supported pause frame use: No
Supports auto-negotiation: Yes
Advertised link modes: 10baseT/Half 10baseT/Full
100baseT/Half 100baseT/Full
1000baseT/Full
Advertised pause frame use: No
Advertised auto-negotiation: Yes
Speed: 1000Mb/s
Duplex: Full
Port: Twisted Pair
PHYAD: 1
Transceiver: internal
Auto-negotiation: on
MDI-X: on (auto)
Link detected: yes
```

##### Consultar estadísticas avanzadas:

```text
Networking@SecOpsMX:~$ ethtool -S eth0
```

```text
NIC statistics:
tx_packets: 1045321
rx_packets: 985643
tx_errors: 0
rx_errors: 0
rx_missed: 0
align_errors: 0
tx_single_collisions: 0
tx_multi_collisions: 0
rx_crc_errors: 3
rx_frame_errors: 0
rx_over_errors: 0
tx_aborted_errors: 0
```

##### Consultar capacidades de offloading:

```text
Networking@SecOpsMX:~$ ethtool -k eth0
```

```text
Features for eth0:
rx-checksumming: on
tx-checksumming: on
tx-checksum-ipv4: off [fixed]
tx-checksum-ip-generic: on
tx-checksum-ipv6: off [fixed]
tcp-segmentation-offload: on
tx-tcp-segmentation: on
tx-tcp6-segmentation: on
generic-segmentation-offload: on
generic-receive-offload: on
large-receive-offload: off [fixed]
```

### NETCAT

*Netcat* (nc) es una herramienta multipropósito utilizada para realizar pruebas de conectividad TCP y UDP y para establecer conexiones simples entre sistemas.

##### Verificar si un puerto está accesible:

```text
Networking@SecOpsMX:~$ nc -zv 192.168.1.1 22
```

```text
Connection to 192.168.1.1 22 port [tcp/ssh] succeeded!
```

##### Comprobar un rango de puertos:

```text
Networking@SecOpsMX:~$ nc -zv 192.168.1.1 20-25
```

```text
Connection to 192.168.1.1 22 port [tcp/ssh] succeeded!
nc: connect to 192.168.1.1 port 20 (tcp) failed: Connection refused
nc: connect to 192.168.1.1 port 21 (tcp) failed: Connection refused
nc: connect to 192.168.1.1 port 23 (tcp) failed: Connection refused
nc: connect to 192.168.1.1 port 24 (tcp) failed: Connection refused
nc: connect to 192.168.1.1 port 25 (tcp) failed: Connection refused
```

##### Crear un servidor temporal:

```text
Networking@SecOpsMX:~$ nc -l 9000
```

El comando queda en espera de conexiones.

##### Conectar desde otro equipo:

```text
Networking@SecOpsMX:~$ nc 192.168.1.1 9000
```

Una vez establecida la conexión, ambos extremos pueden intercambiar datos.

**Nota**: la sintaxis de escucha de nc puede variar entre implementaciones. En sistemas modernos de OpenBSD netcat, nc -l 9000 es una forma habitual; otras implementaciones pueden utilizar opciones diferentes.

*Netcat* resulta especialmente útil para comprobar conectividad de capa de transporte sin depender de una aplicación específica.

<div class="diagram tabla-svg" id="tabla-14-3" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 429" role="img" aria-labelledby="t71-title"><title id="t71-title">Tabla 14.3. Verificación por capas con herramientas de Linux.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="63.5"/>
<text class="tb-ht" x="64.8" y="20.0" dominant-baseline="central" text-anchor="middle">Capa o</text>
<text class="tb-ht" x="64.8" y="42.8" dominant-baseline="central" text-anchor="middle">función</text>
<text class="tb-ht" x="290.5" y="31.4" dominant-baseline="central" text-anchor="middle">Verificación</text>
<text class="tb-ht" x="631.2" y="31.4" dominant-baseline="central" text-anchor="middle">Herramientas o comandos</text>
<text class="tb-ht" x="1005.5" y="31.4" dominant-baseline="central" text-anchor="middle">Posibles causas de fallo</text>
<rect class="tb-te" x="0" y="63.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="94.9" dominant-baseline="central">Física</text>
<text class="tb-tx" x="141.7" y="94.9" dominant-baseline="central">Estado de enlace, velocidad y duplex.</text>
<text class="tb-tx" x="463.3" y="94.9" dominant-baseline="central">ethtool eth0; ip link.</text>
<text class="tb-tx" x="823.1" y="83.5" dominant-baseline="central">Cable defectuoso, puerto apagado,</text>
<text class="tb-tx" x="823.1" y="106.2" dominant-baseline="central">transceptor o negociación incorrecta.</text>
<rect class="tb-to" x="0" y="127.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="158.4" dominant-baseline="central">Enlace</text>
<text class="tb-tx" x="141.7" y="147.0" dominant-baseline="central">Vecinos y resolución de direcciones</text>
<text class="tb-tx" x="141.7" y="169.8" dominant-baseline="central">MAC.</text>
<text class="tb-tx" x="463.3" y="158.4" dominant-baseline="central">ip neigh; bridge link.</text>
<text class="tb-tx" x="823.1" y="147.0" dominant-baseline="central">Fallos ARP/NDP, VLAN incorrecta o problemas</text>
<text class="tb-tx" x="823.1" y="169.8" dominant-baseline="central">de switching.</text>
<rect class="tb-te" x="0" y="190.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="221.9" dominant-baseline="central">Red</text>
<text class="tb-tx" x="141.7" y="221.9" dominant-baseline="central">Direcciones IP, rutas y conectividad.</text>
<text class="tb-tx" x="463.3" y="221.9" dominant-baseline="central">ip addr; ip route; ping; tracepath.</text>
<text class="tb-tx" x="823.1" y="210.5" dominant-baseline="central">Direccionamiento incorrecto, gateway</text>
<text class="tb-tx" x="823.1" y="233.2" dominant-baseline="central">ausente o rutas erróneas.</text>
<rect class="tb-to" x="0" y="254.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="285.4" dominant-baseline="central">Transporte</text>
<text class="tb-tx" x="141.7" y="274.0" dominant-baseline="central">Servicios en escucha, puertos</text>
<text class="tb-tx" x="141.7" y="296.8" dominant-baseline="central">accesibles y reglas de firewall.</text>
<text class="tb-tx" x="463.3" y="274.0" dominant-baseline="central">ss -tulpn; nc -zv HOST PUERTO; nft list</text>
<text class="tb-tx" x="463.3" y="296.8" dominant-baseline="central">ruleset o iptables -L -n -v.</text>
<text class="tb-tx" x="823.1" y="274.0" dominant-baseline="central">Servicio no iniciado, puerto bloqueado o</text>
<text class="tb-tx" x="823.1" y="296.8" dominant-baseline="central">reglas incorrectas.</text>
<rect class="tb-te" x="0" y="317.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="348.9" dominant-baseline="central">Aplicación</text>
<text class="tb-tx" x="141.7" y="337.5" dominant-baseline="central">Resolución DNS, respuesta del</text>
<text class="tb-tx" x="141.7" y="360.2" dominant-baseline="central">servicio y registros.</text>
<text class="tb-tx" x="463.3" y="337.5" dominant-baseline="central">dig; curl -v; journalctl -u</text>
<text class="tb-tx" x="463.3" y="360.2" dominant-baseline="central">NOMBRE_SERVICIO.</text>
<text class="tb-tx" x="823.1" y="337.5" dominant-baseline="central">Fallos DNS, errores HTTP 4xx/5xx o servicios</text>
<text class="tb-tx" x="823.1" y="360.2" dominant-baseline="central">detenidos.</text>
<text class="tb-cap" x="600.0" y="407.0" text-anchor="middle">Tabla 14.3. Verificación por capas con herramientas de Linux.</text></svg>
</div>

Nota: `nc -zv` realiza una prueba TCP por defecto; para UDP se utiliza `-u`. `ss -tulpn` puede requerir privilegios elevados para mostrar procesos. Debe consultarse el *backend* de *firewall* activo antes de elegir entre `nft` e `iptables`.

### Metodología de Diagnóstico

La resolución eficiente de incidencias debe seguir una secuencia lógica basada en las capas del modelo OSI y en la evidencia obtenida durante las pruebas.

#### Capa física

Verificar:

- Estado de los LED de enlace.
- Integridad del cableado.
- Conectores y transceptores.
- Estado operativo de la interfaz.

##### Comandos recomendados:

```text
Networking@SecOpsMX:~$ ethtool eth0
```

```text
Settings for eth0:
Speed: 1000Mb/s
Duplex: Full
Link detected: yes
Networking@SecOpsMX:~$ ip link show eth0
```

```text
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT group default qlen 1000
link/ether 08:00:27:3e:4f:a1 brd ff:ff:ff:ff:ff:ff
```

##### Indicadores de problemas:

- Link detected: no.
- Velocidad incorrecta, por ejemplo, 10 Mb/s en lugar de 1000 Mb/s.
- Errores CRC elevados.
- Flapping de interfaces.

#### Capa de enlace

Verificar:

- Estado de la interfaz.
- Direcciones MAC.
- VLAN configuradas.
- Bucles de red.

##### Comandos recomendados:

```text
Networking@SecOpsMX:~$ ip link show eth0
```

```text
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT group default qlen 1000
link/ether 08:00:27:3e:4f:a1 brd ff:ff:ff:ff:ff:ff
Networking@SecOpsMX:~$ ethtool -S eth0 | grep -E "err|drop"
```

```text
tx_errors: 0
rx_errors: 0
rx_dropped: 0
tx_dropped: 0
Networking@SecOpsMX:~$ bridge fdb show
```

```text
00:11:22:33:44:55 dev eth0 vlan 1 master br0
```

El uso de *software* no autorizado puede incumplir los acuerdos de licencia y las condiciones de uso establecidas por cada proveedor. La simulación y la emulación de redes constituyen herramientas importantes para el aprendizaje, la validación de arquitecturas y la reducción de riesgos operativos.

##### Indicadores de problemas:

- Paquetes descartados.
- Errores de transmisión.
- Inconsistencias en VLAN.

#### Capa de red

##### Verificar:

- Dirección IP.
- Máscara de red.
- *Gateway*.
- Tabla de enrutamiento.

##### Comandos recomendados:

```text
Networking@SecOpsMX:~$ ip addr show eth0
```

```text
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
inet 192.168.1.20/24 scope global eth0
valid_lft forever preferred_lft forever
Networking@SecOpsMX:~$ ip route show
```

```text
default via 192.168.1.1 dev eth0
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.20
Networking@SecOpsMX:~$ ip route get 8.8.8.8
```

```text
8.8.8.8 via 192.168.1.1 dev eth0 src 192.168.1.20 uid 1000
Networking@SecOpsMX:~$ ping -c 3 192.168.1.1
```

```text
PING 192.168.1.1 (192.168.1.1) 56(84) bytes of data.
64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=0.321 ms
64 bytes from 192.168.1.1: icmp_seq=2 ttl=64 time=0.298 ms
64 bytes from 192.168.1.1: icmp_seq=3 ttl=64 time=0.305 ms
--- 192.168.1.1 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2000ms
```

##### Indicadores de problemas:

- Dirección IP incorrecta.
- *Gateway* inaccesible.
- Ruta por defecto ausente.
- Rutas mal configuradas.

#### Capa de transporte

##### Verificar:

- Servicios en escucha.
- Puertos accesibles.
- Reglas de *firewall*.

##### Comandos recomendados:

```text
Networking@SecOpsMX:~$ ss -tulpn
```

```text
tcp LISTEN 0 128 0.0.0.0:22 0.0.0.0:* users:(("sshd",pid=1270,fd=3))
tcp LISTEN 0 128 *:80 *:* users:(("nginx",pid=1453,fd=6))
Networking@SecOpsMX:~$ nc -zv 192.168.1.1 80
```

```text
Connection to 192.168.1.1 80 port [tcp/http] succeeded!
Networking@SecOpsMX:~$ sudo iptables -L -n -v | grep -E "Chain|policy"
```

```text
Chain INPUT (policy DROP 0 packets, 0 bytes)
Chain FORWARD (policy DROP 0 packets, 0 bytes)
Chain OUTPUT (policy ACCEPT 0 packets, 0 bytes)
```

##### Indicadores de problemas:

- Servicio no iniciado.
- Puerto bloqueado.
- Reglas de filtrado incorrectas.

#### Capa de aplicación

##### Verificar:

- Resolución DNS.
- Respuesta del servicio.
- Registros de eventos.

##### Comandos recomendados:

```text
Networking@SecOpsMX:~$ dig google.com
```

```text
; <<>> DiG 9.16.1-Ubuntu <<>> google.com
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12345
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0
;; ANSWER SECTION:
google.com. 300 IN A 142.250.185.46
;; Query time: 23 msec
;; SERVER: 8.8.8.8#53(8.8.8.8)
Networking@SecOpsMX:~$ curl -v http://192.168.1.100
```

```text
* Connected to 192.168.1.100 (192.168.1.100) port 80
> GET / HTTP/1.1
> Host: 192.168.1.100
< HTTP/1.1 200 OK
Networking@SecOpsMX:~$ journalctl -u nginx -n 5
```

```text
Jul 09 14:28:55 host systemd[1]: Started A high performance web server and a reverse proxy server.
```

##### Indicadores de problemas:

- Fallos DNS.
- Errores HTTP, como respuestas 4xx o 5xx.
- Problemas de autenticación.
- Servicios detenidos.

#### Diagnóstico de rutas

Cuando existe conectividad parcial o pérdida de paquetes, es necesario identificar el punto donde puede estar produciéndose el problema.

##### Traceroute:

```text
Networking@SecOpsMX:~$ traceroute -n 8.8.8.8
```

```text
192.168.1.1 0.321 ms 0.289 ms 0.264 ms
10.0.0.1 1.123 ms 1.087 ms 1.145 ms
203.0.113.1 5.678 ms 5.543 ms 5.612 ms
72.14.237.130 10.234 ms 10.198 ms 10.256 ms
8.8.8.8 9.876 ms 9.811 ms 9.789 ms
```

##### MTR:

```text
Networking@SecOpsMX:~$ mtr -n -r -c 10 8.8.8.8
```

```text
HOST: workstation Loss% Snt Last Avg Best Wrst StDev
1.|-- 192.168.1.1 0.0% 10 0.3 0.4 0.3 0.6 0.1
2.|-- 10.0.0.1 0.0% 10 1.1 1.2 1.0 1.5 0.2
3.|-- 203.0.113.1 0.0% 10 5.6 5.7 5.4 6.0 0.2
4.|-- 72.14.237.130 0.0% 10 10.2 10.5 10.1 11.2 0.4
5.|-- 8.8.8.8 0.0% 10 9.8 10.0 9.7 10.4 0.2
```

**Nota:** las direcciones y latencias mostradas son ejemplos. Una respuesta sin pérdida en un salto intermedio no demuestra por sí misma que no exista pérdida posterior, ya que algunos dispositivos pueden limitar o priorizar las respuestas a TTL expirado.

#### Captura y análisis de tráfico

##### TCPDUMP

*tcpdump* es una herramienta estándar para la captura y el análisis de paquetes en *Linux*.

##### Capturar tráfico en una interfaz:

```text
Networking@SecOpsMX:~$ sudo tcpdump -i eth0
```

```text
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on eth0, link-type EN10MB (Ethernet), capture size 262144 bytes
10:23:45.123456 IP 192.168.1.20.ssh > 10.0.0.5.52234: Flags [P.], seq 1234:1450, ack 5678, win 288, length 216
10:23:45.123512 IP 10.0.0.5.52234 > 192.168.1.20.ssh: Flags [.], ack 1450, win 512, length 0
10:23:45.123598 IP 192.168.1.20.ssh > 10.0.0.5.52234: Flags [P.], seq 1450:1600, ack 5679, win 288, length 150
```

##### Capturar tráfico hacia un host específico:

```text
Networking@SecOpsMX:~$ sudo tcpdump -i eth0 host 192.168.1.10
```

```text
10:23:46.123456 IP 192.168.1.20 > 192.168.1.10: ICMP echo request, id 12345, seq 1, length 64
10:23:46.123512 IP 192.168.1.10 > 192.168.1.20: ICMP echo reply, id 12345, seq 1, length 64
```

##### Guardar una captura para análisis posterior:

```text
Networking@SecOpsMX:~$ sudo tcpdump -i eth0 -w captura.pcap
```

```text
tcpdump: listening on eth0, link-type EN10MB (Ethernet), capture size 262144 bytes
^C
150 packets captured
150 packets received by filter
0 packets dropped by kernel
```

#### Herramientas complementarias

##### DIG

```text
Networking@SecOpsMX:~$ dig ejemplo.com MX
```

```text
; <<>> DiG 9.16.1-Ubuntu <<>> ejemplo.com MX
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 54321
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
;; ANSWER SECTION:
ejemplo.com. 300 IN MX 10 mail.ejemplo.com.
;; ADDITIONAL SECTION:
mail.ejemplo.com. 300 IN A 93.184.216.34
;; Query time: 23 msec
;; SERVER: 8.8.8.8#53(8.8.8.8)
```

##### ARPING

```text
Networking@SecOpsMX:~$ sudo arping -I eth0 192.168.1.1
```

```text
ARPING 192.168.1.1 from 192.168.1.20 eth0
Unicast reply from 192.168.1.1 [00:11:22:33:44:55] 0.654ms
Unicast reply from 192.168.1.1 [00:11:22:33:44:55] 0.612ms
Unicast reply from 192.168.1.1 [00:11:22:33:44:55] 0.589ms
^C
Sent 3 probes (3 broadcast(s))
Received 3 response(s)
```

##### NMAP

```text
Networking@SecOpsMX:~$ nmap -sV 192.168.1.10
```

```text
Starting Nmap 7.80 ( https://nmap.org ) at 2026-06-24 10:23 UTC
Nmap scan report for 192.168.1.10
Host is up (0.0012s latency).
Not shown: 997 closed ports
PORT STATE SERVICE VERSION
22/tcp open ssh OpenSSH 8.2p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
80/tcp open http nginx 1.18.0 (Ubuntu)
443/tcp open ssl/http nginx 1.18.0 (Ubuntu)
Service Info: OS: Linux
```

##### IPERF3

##### Servidor:

```text
Networking@SecOpsMX:~$ iperf3 -s
```

```text
-----------------------------------------------------------
Server listening on 5201
-----------------------------------------------------------
Accepted connection from 192.168.1.20, port 45678
[ 5] local 192.168.1.10 port 5201 connected to 192.168.1.20 port 45679
[ ID] Interval Transfer Bitrate
[ 5] 0.00-10.00 sec 1.10 GBytes 942 Mbits/sec receiver
```

##### Cliente:

```text
Networking@SecOpsMX:~$ iperf3 -c 192.168.1.10
```

```text
Connecting to host 192.168.1.10, port 5201
[ 5] local 192.168.1.20 port 45679 connected to 192.168.1.10 port 5201
[ ID] Interval Transfer Bitrate Retr Cwnd
[ 5] 0.00-10.00 sec 1.10 GBytes 943 Mbits/sec 0 1.04 MBytes
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval Transfer Bitrate Retr
[ 5] 0.00-10.00 sec 1.10 GBytes 943 Mbits/sec 0 sender
```

### Flujo recomendado de troubleshooting

Ante una incidencia de red, el orden recomendado es:

1. Verificar el enlace físico.
2. Confirmar la configuración IP.
3. Validar el *gateway* y las rutas.
4. Comprobar la resolución DNS.
5. Verificar puertos y servicios.
6. Revisar las políticas de *firewall*.
7. Analizar la ruta.
8. Capturar tráfico si el problema persiste.
9. Documentar los resultados y las acciones realizadas.

Seguir una metodología estructurada permite reducir el espacio de búsqueda, aislar posibles causas y minimizar los tiempos de indisponibilidad en entornos de producción.

El diagnóstico estructurado de red capa por capa según el modelo OSI se ilustra en el **Anexo X.**

## 14.6 SIMULACIÓN DE REDES GNS3 / EVE-NG

La simulación y la emulación de redes permiten diseñar, validar y probar infraestructuras complejas sin necesidad de disponer de todo el equipamiento físico. Estas plataformas se han convertido en herramientas importantes para la formación técnica, la preparación de certificaciones profesionales, el desarrollo de arquitecturas y la validación de cambios antes de su implementación en producción.

Los simuladores reproducen determinados comportamientos de dispositivos mediante modelos de *software*, mientras que las plataformas de emulación pueden ejecutar sistemas operativos reales de red dentro de máquinas virtuales o contenedores, proporcionando un entorno más cercano a una infraestructura operativa. Dos de las plataformas más utilizadas para laboratorios de redes son GNS3 y EVE-NG. La Figura 14.5 compara su arquitectura de trabajo.

<div class="diagram" id="figura-14-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1405" viewBox="0 0 1200 452" role="img" aria-labelledby="g1405-title">
<title id="g1405-title">Arquitectura de trabajo de GNS3 y EVE-NG</title>
<defs><marker id="g1405m003ecc" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#003ecc"/></marker><marker id="g1405n003ecc" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#003ecc"/></marker><marker id="g1405m7c3aed" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#7c3aed"/></marker><marker id="g1405n7c3aed" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#7c3aed"/></marker></defs>
<g id="g1405-c" transform="translate(20 20)"><rect x="0" y="0" width="560" height="380" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="560" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="280" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">GNS3</text>
<rect x="600" y="0" width="560" height="380" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="600" y1="34" x2="1160" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="880" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">EVE-NG</text>
<g transform="translate(280 76) scale(0.8)" data-lib="app"><rect x="-38" y="-28" width="76" height="56" rx="5" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><rect x="-38" y="-28" width="76" height="16" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="3"/><circle cx="-28" cy="-20" r="2.5" fill="#003ecc"/><circle cx="-20" cy="-20" r="2.5" fill="#003ecc"/><path d="M-26 0h30M-26 12h46" stroke="#003ecc" stroke-width="3" stroke-linecap="round" fill="none"/></g>
<text x="280" y="122" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Interfaz gráfica</text>
<polyline points="280,134 280,180" fill="none" stroke="#003ecc" stroke-width="2.5" marker-end="url(#g1405m003ecc)" marker-start="url(#g1405n003ecc)"/>
<rect x="130" y="182" width="300" height="76" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="130" y1="214" x2="430" y2="214" stroke="#003ecc" stroke-width="1.5"/>
<text x="280" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Servidor GNS3</text>
<text x="280" y="240.56" font-size="10.35pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Local o remoto: distribuye la carga</text>
<polyline points="280,260 280,296" fill="none" stroke="#003ecc" stroke-width="2.5" marker-end="url(#g1405m003ecc)"/>
<g transform="translate(90 326) scale(0.5)" data-lib="cube"><path d="M0 -30L28 -15V15L0 30L-28 15V-15Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"/><path d="M-28 -15L0 0L28 -15M0 0V30" fill="none" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"/></g>
<text x="90" y="366" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Máquinas virtuales</text>
<g transform="translate(280 326) scale(0.5)" data-lib="cube"><path d="M0 -30L28 -15V15L0 30L-28 15V-15Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"/><path d="M-28 -15L0 0L28 -15M0 0V30" fill="none" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"/></g>
<text x="280" y="366" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Contenedores</text>
<g transform="translate(470 326) scale(0.5)" data-lib="cube"><path d="M0 -30L28 -15V15L0 30L-28 15V-15Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"/><path d="M-28 -15L0 0L28 -15M0 0V30" fill="none" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"/></g>
<text x="470" y="366" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Imágenes de red</text>
<g transform="translate(880 76) scale(0.8)" data-lib="globe"><g stroke="#7c3aed" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#f2ebfd"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<text x="880" y="122" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Navegador web</text>
<polyline points="880,134 880,180" fill="none" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#g1405m7c3aed)" marker-start="url(#g1405n7c3aed)"/>
<rect x="730" y="182" width="300" height="76" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="730" y1="214" x2="1030" y2="214" stroke="#7c3aed" stroke-width="1.5"/>
<text x="880" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Servidor EVE-NG</text>
<text x="880" y="240.56" font-size="10.35pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Laboratorios centralizados y multiusuario</text>
<polyline points="880,260 880,296" fill="none" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#g1405m7c3aed)"/>
<g transform="translate(690 326) scale(0.5)" data-lib="cube"><path d="M0 -30L28 -15V15L0 30L-28 15V-15Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"/><path d="M-28 -15L0 0L28 -15M0 0V30" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"/></g>
<text x="690" y="366" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Máquinas virtuales</text>
<g transform="translate(880 326) scale(0.5)" data-lib="cube"><path d="M0 -30L28 -15V15L0 30L-28 15V-15Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"/><path d="M-28 -15L0 0L28 -15M0 0V30" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"/></g>
<text x="880" y="366" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Contenedores</text>
<g transform="translate(1070 326) scale(0.5)" data-lib="cube"><path d="M0 -30L28 -15V15L0 30L-28 15V-15Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"/><path d="M-28 -15L0 0L28 -15M0 0V30" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"/></g>
<text x="1070" y="366" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Imágenes de red</text></g><text x="600" y="434" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 14.5. Arquitectura de trabajo de GNS3 y EVE-NG.</text></svg>
</div>

### GNS3

GNS3 (*Graphical Network Simulator 3*) es una plataforma de simulación y emulación de redes basada en una arquitectura cliente-servidor. Ejecuta diferentes tipos de dispositivos virtualizados mediante tecnologías como QEMU, Dynamips, Docker y máquinas virtuales. Su arquitectura separa la interfaz gráfica del motor de emulación, de modo que la carga de procesamiento puede distribuirse entre diferentes equipos o servidores.

#### Características principales

- Ejecución de sistemas operativos de red compatibles.
- Integración con máquinas virtuales y contenedores.
- Captura de tráfico mediante *Wireshark*.
- Conexión con redes físicas.
- Compatibilidad con laboratorios híbridos.
- Soporte para automatización y pruebas avanzadas.

#### Plataformas compatibles

La compatibilidad depende de las imágenes, versiones y licencias disponibles. Entre las plataformas que pueden utilizarse en GNS3 se encuentran:

- Cisco
- Juniper vJunos.
- Arista vEOS.
- Fortinet FortiGate.
- MikroTik RouterOS.
- Distribuciones *Linux*.

#### Arquitectura de trabajo

La interfaz gráfica permite diseñar topologías mediante nodos conectados entre sí. Una vez iniciados los dispositivos, cada nodo opera utilizando la imagen y el método de virtualización o emulación configurado. Las capturas de paquetes pueden realizarse directamente sobre enlaces de la topología para analizar protocolos y flujos de tráfico.

### EVE-NG

EVE-NG (*Emulated Virtual Environment – Next Generation*) es una plataforma de emulación orientada a entornos multiusuario y laboratorios centralizados.

Su administración se realiza principalmente mediante una interfaz web, por lo que los laboratorios son accesibles desde un navegador compatible. Esta arquitectura favorece la colaboración entre equipos de trabajo, departamentos de formación y centros educativos.

#### Características principales

- Interfaz web centralizada.
- Soporte multiusuario.
- Administración centralizada de laboratorios.
- Compatibilidad con múltiples fabricantes.
- Integración con hipervisores.
- Escalabilidad para determinados entornos de pruebas.

#### Requisitos de hardware

La cantidad de recursos necesarios depende directamente del número y tipo de dispositivos virtualizados, así como de la plataforma de virtualización utilizada. La Tabla 14.4 presenta los valores orientativos para un laboratorio básico y para uno empresarial.

<div class="diagram tabla-svg" id="tabla-14-4" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 338" role="img" aria-labelledby="t72-title"><title id="t72-title">Tabla 14.4. Requisitos de hardware orientativos para un laboratorio.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="79.5" y="20.0" dominant-baseline="central" text-anchor="middle">Recurso</text>
<text class="tb-ht" x="352.6" y="20.0" dominant-baseline="central" text-anchor="middle">Laboratorio básico</text>
<text class="tb-ht" x="873.1" y="20.0" dominant-baseline="central" text-anchor="middle">Laboratorio empresarial</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">CPU</text>
<text class="tb-tx" x="171.0" y="60.8" dominant-baseline="central">4 núcleos con soporte VT-x o AMD-V.</text>
<text class="tb-tx" x="558.2" y="60.8" dominant-baseline="central">8 núcleos o más.</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">Memoria RAM</text>
<text class="tb-tx" x="171.0" y="101.5" dominant-baseline="central">8 GB.</text>
<text class="tb-tx" x="558.2" y="101.5" dominant-baseline="central">32 GB o superior.</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">Almacenamiento</text>
<text class="tb-tx" x="171.0" y="142.2" dominant-baseline="central">50 GB SSD.</text>
<text class="tb-tx" x="558.2" y="142.2" dominant-baseline="central">200 GB SSD o más.</text>
<rect class="tb-to" x="0" y="163.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="194.4" dominant-baseline="central">Virtualización</text>
<text class="tb-tx" x="171.0" y="183.0" dominant-baseline="central">Soporte de virtualización por hardware</text>
<text class="tb-tx" x="171.0" y="205.8" dominant-baseline="central">habilitado.</text>
<text class="tb-tx" x="558.2" y="183.0" dominant-baseline="central">Soporte de virtualización por hardware y recursos suficientes para múltiples</text>
<text class="tb-tx" x="558.2" y="205.8" dominant-baseline="central">máquinas virtuales.</text>
<rect class="tb-te" x="0" y="226.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="257.9" dominant-baseline="central">Red</text>
<text class="tb-tx" x="171.0" y="246.5" dominant-baseline="central">Una o varias interfaces virtuales para</text>
<text class="tb-tx" x="171.0" y="269.2" dominant-baseline="central">conectar nodos.</text>
<text class="tb-tx" x="558.2" y="257.9" dominant-baseline="central">Múltiples interfaces, redes virtuales y capacidad para topologías complejas.</text>
<text class="tb-cap" x="600.0" y="316.0" text-anchor="middle">Tabla 14.4. Requisitos de hardware orientativos para un laboratorio.</text></svg>
</div>

Nota: los requisitos son orientativos. Las necesidades reales dependen de la plataforma, las imágenes de *routers* y *firewalls*, el número de nodos, los servicios ejecutados y el tráfico generado, y pueden ser significativamente mayores que los valores de la tabla.

Las imágenes de *routers*, *firewalls* y sistemas operativos avanzados pueden consumir varios gigabytes de almacenamiento y una cantidad significativa de memoria.

### Casos de uso profesionales

#### Preparación de certificaciones

Estas plataformas permiten recrear laboratorios para certificaciones y procesos de formación.

#### Validación de diseños

Antes de desplegar cambios en producción es posible validar escenarios como:

- OSPF multiárea.
- BGP entre múltiples sistemas autónomos.
- MPLS.

La posibilidad de reproducir cada tecnología dependerá del soporte de las imágenes y plataformas seleccionadas.

#### Pruebas de resiliencia

Los laboratorios virtuales permiten simular fallos controlados para verificar el comportamiento de los protocolos de convergencia. Entre las pruebas más habituales se encuentran:

- Caída de enlaces.
- Reinicio de routers.
- Pérdida de vecinos OSPF.

#### Automatización

Las plataformas de emulación constituyen entornos adecuados para desarrollar y probar soluciones basadas en:

- Python.
- Ansible.
- Netmiko.
- Automatización de infraestructura.

### Selección de plataforma

La elección entre GNS3 y EVE-NG depende de la arquitectura, la interfaz, la orientación y las necesidades de colaboración; la Tabla 14.5 los contrasta aspecto por aspecto.

<div class="diagram tabla-svg" id="tabla-14-5" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 338" role="img" aria-labelledby="t73-title"><title id="t73-title">Tabla 14.5. Comparación entre GNS3 y EVE-NG.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="65.0" y="20.0" dominant-baseline="central" text-anchor="middle">Aspecto</text>
<text class="tb-ht" x="391.9" y="20.0" dominant-baseline="central" text-anchor="middle">GNS3</text>
<text class="tb-ht" x="926.9" y="20.0" dominant-baseline="central" text-anchor="middle">EVE-NG</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Arquitectura</text>
<text class="tb-tx" x="142.0" y="60.8" dominant-baseline="central">Cliente-servidor: la interfaz gráfica se separa del motor de</text>
<text class="tb-tx" x="142.0" y="83.5" dominant-baseline="central">emulación.</text>
<text class="tb-tx" x="665.9" y="72.1" dominant-baseline="central">Plataforma de emulación con administración centralizada.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">Interfaz</text>
<text class="tb-tx" x="142.0" y="124.2" dominant-baseline="central">Aplicación gráfica de diseño de topologías.</text>
<text class="tb-tx" x="665.9" y="124.2" dominant-baseline="central">Interfaz web accesible desde un navegador compatible.</text>
<rect class="tb-te" x="0" y="145.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="176.4" dominant-baseline="central">Orientación</text>
<text class="tb-tx" x="142.0" y="165.0" dominant-baseline="central">Laboratorios personales, formación individual y pruebas</text>
<text class="tb-tx" x="142.0" y="187.8" dominant-baseline="central">rápidas.</text>
<text class="tb-tx" x="665.9" y="165.0" dominant-baseline="central">Centros de formación, equipos de ingeniería y laboratorios</text>
<text class="tb-tx" x="665.9" y="187.8" dominant-baseline="central">corporativos.</text>
<rect class="tb-to" x="0" y="208.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="228.5" dominant-baseline="central">Colaboración</text>
<text class="tb-tx" x="142.0" y="228.5" dominant-baseline="central">Orientado a uso individual o de equipo reducido.</text>
<text class="tb-tx" x="665.9" y="228.5" dominant-baseline="central">Soporte multiusuario y administración centralizada.</text>
<rect class="tb-te" x="0" y="249.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="269.2" dominant-baseline="central">Integración</text>
<text class="tb-tx" x="142.0" y="269.2" dominant-baseline="central">Recursos locales, redes físicas y Wireshark.</text>
<text class="tb-tx" x="665.9" y="269.2" dominant-baseline="central">Hipervisores y compatibilidad con múltiples fabricantes.</text>
<text class="tb-cap" x="600.0" y="316.0" text-anchor="middle">Tabla 14.5. Comparación entre GNS3 y EVE-NG.</text></svg>
</div>

GNS3 suele resultar adecuado para:

- Laboratorios personales.
- Formación individual.
- Pruebas rápidas.
- Entornos de aprendizaje.
- Topologías que requieran integración con recursos locales.

EVE-NG suele resultar adecuado para:

- Centros de formación.
- Laboratorios corporativos.
- Entornos multiusuario.
- Laboratorios centralizados.
