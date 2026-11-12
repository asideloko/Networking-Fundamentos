# GLOSARIO

#### ACL (*ACCESS CONTROL LIST*)

Conjunto ordenado de reglas que determina qué tráfico de red es
permitido o denegado, aplicado en *routers*, *switches* o *firewalls*.
Filtra por dirección IP, puerto, protocolo y otros campos.

#### ALTA DISPONIBILIDAD (HA)

Capacidad de un sistema de red para permanecer operativo minimizando el
tiempo de inactividad, mediante redundancia y mecanismos de conmutación
automática ante fallos.

#### ANCHO DE BANDA

Rango de frecuencias que un canal puede transportar, expresado en
hercios (dominio analógico); en el dominio digital se usa como sinónimo
de la capacidad máxima teórica del enlace, expresada en bits por
segundo.

#### ARPANET

Red de computadoras desarrollada en la década de 1960, precursora de
Internet, que fue la primera en adoptar a gran escala la conmutación de
paquetes y un modelo descentralizado.

#### *BACKBONE*

Infraestructura principal de alta capacidad y baja latencia que
interconecta diferentes redes o segmentos, actuando como columna
vertebral de una red WAN o de proveedor de servicios.

#### BGP (*BORDER GATEWAY PROTOCOL*) {#bgp-border-gateway-protocol-2}

Protocolo de enrutamiento exterior (EGP) que intercambia rutas entre
sistemas autónomos (AS) mediante políticas configurables, fundamental
para el funcionamiento de Internet.

#### BIT

Unidad mínima de información digital, que solo puede adoptar dos estados
lógicos: 0 o 1. Base de toda codificación y transmisión en redes.

#### CIDR (*CLASSLESS INTER-DOMAIN ROUTING*)

Método de asignación de direcciones IP que elimina las clases fijas (A,
B, C) permitiendo prefijos de red de longitud variable (notación /X) y
agregación de rutas.

#### CODIFICACIÓN {#codificación-2}

Proceso de representación de bits mediante patrones de señal digital
(p. ej., Manchester, NRZ) para asegurar sincronización y detección de
errores.

#### DHCP (*DYNAMIC HOST CONFIGURATION PROTOCOL*)

Protocolo cliente-servidor que asigna automáticamente direcciones IP,
máscara, *gateway* y otros parámetros de configuración a dispositivos
finales en una red.

#### DMZ (*DEMILITARIZED ZONE*) {#dmz-demilitarized-zone-3}

Segmento de red aislado que expone servicios públicos (web, correo, DNS)
a redes externas, actuando como zona intermedia entre la red interna
confiable e Internet.

#### DNS (*DOMAIN NAME SYSTEM*)

Sistema jerárquico y distribuido que traduce nombres de dominio legibles
por humanos en direcciones IP (y viceversa), así como otros registros de
servicio.

#### DOMINIO DE *BROADCAST* {#dominio-de-broadcast}

Conjunto de dispositivos que reciben una trama de difusión (*broadcast*)
enviada por cualquiera de sus miembros. Las VLAN permiten segmentar
estos dominios.

#### ENCAPSULACIÓN {#encapsulación}

Proceso mediante el cual los datos se envuelven progresivamente con
información de control (direccionamiento, errores, etc.) al descender
por las capas del modelo de red.

#### *FIREWALL*

Sistema de seguridad que monitorea y filtra el tráfico de red entrante y
saliente basándose en reglas predefinidas, pudiendo ser *stateful*,
*proxy* o de nueva generación (NGFW).

#### *GATEWAY*

Dispositivo (generalmente un *router*) que actúa como punto de enlace
entre una red local y otras redes externas; dirección IP a la que los
*hosts* envían tráfico con destino externo.

#### GRE (*GENERIC ROUTING ENCAPSULATION*) {#gre-generic-routing-encapsulation}

Protocolo de tunelización que encapsula paquetes de cualquier protocolo
de red dentro de paquetes IP, sin cifrado nativo, usado para transportar
tráfico *multicast* o protocolos no IP.

#### IGMP (*INTERNET GROUP MANAGEMENT PROTOCOL*)

Protocolo que gestiona la pertenencia de dispositivos a grupos de
*multicast* en redes IPv4, permitiendo a los *routers* reenviar tráfico
solo a las redes con receptores interesados.

#### IGMP *SNOOPING*

Funcionalidad de *switches* de capa 2 que inspecciona mensajes IGMP para
reenviar tráfico *multicast* únicamente a los puertos donde hay
receptores, evitando inundaciones.

#### IPSEC (*IP SECURITY*)

Conjunto de protocolos que proporciona autenticación, integridad y
cifrado a nivel de paquete IP (capa 3), operando en modo transporte o
túnel, base de muchas VPN.

#### IPv4

otocolo de direccionamiento de 32 bits (4 294 967 296 direcciones),
estructurado en red y *host*, actualmente en transición hacia IPv6 por
agotamiento.

#### IPv6

Protocolo de direccionamiento de 128 bits (espacio prácticamente
ilimitado) que incorpora autoconfiguración (SLAAC), simplificación del
encabezado y soporte integrado de IPsec (su uso no es obligatorio).

#### LATENCIA {#latencia-2}

Tiempo que tarda un bit o paquete en viajar desde el origen hasta el
destino, incluyendo retardos de propagación, transmisión, cola y
procesamiento.

#### MICROSEGMENTACIÓN

Técnica de seguridad que aísla cargas de trabajo individuales (máquinas
virtuales, contenedores) mediante políticas granulares de comunicación,
limitando movimientos laterales.

#### MODELO JERÁRQUICO (DE RED)

Arquitectura de tres capas (acceso, distribución, core) que organiza la
red para optimizar rendimiento, escalabilidad y mantenimiento.

#### MODULACIÓN

Proceso de modificar una señal portadora (amplitud, frecuencia o fase)
para transmitir información digital a través de medios analógicos
(p. ej., *Wi-Fi*, módems).

#### MPLS (*MULTIPROTOCOL LABEL SWITCHING*) {#mpls-multiprotocol-label-switching-2}

Tecnología de conmutación basada en etiquetas que acelera el reenvío de
paquetes y permite ingeniería de tráfico y VPNs en redes de operadores.

#### MSS (*MAXIMUM SEGMENT SIZE*)

Tamaño máximo de datos útiles (*payload*) en un segmento TCP, excluyendo
encabezados; cada extremo lo anuncia en el SYN del *handshake* para
evitar fragmentación IP.

#### MTU (*MAXIMUM TRANSMISSION UNIT*)

Tamaño máximo (en bytes) de un paquete que puede transmitirse por un
enlace sin fragmentación. Valor típico en Ethernet: 1500 bytes.

#### NAT / PAT

Mecanismos de traducción de direcciones de red que permiten que
múltiples dispositivos privados compartan una o pocas direcciones IP
públicas. PAT (sobrecarga) utiliza puertos para multiplexar.

#### NIC (*NETWORK INTERFACE CARD*)

Interfaz de red que convierte datos digitales en señales eléctricas,
ópticas o de radio, proporcionando una dirección MAC única y gestionando
el acceso al medio.

#### OPENVPN

Solución VPN de código abierto basada en SSL/TLS, que puede operar sobre
UDP o TCP, con alta flexibilidad y cifrado robusto (AES, ChaCha20).

#### OSPF (*OPEN SHORTEST PATH FIRST*) {#ospf-open-shortest-path-first-2}

Protocolo de enrutamiento IGP de estado de enlace que calcula la ruta
más corta mediante el algoritmo de Dijkstra, con convergencia rápida y
soporte de áreas jerárquicas.

#### *PEERING*

Acuerdo entre redes independientes (sistemas autónomos) para
intercambiar tráfico directamente, sin pasar por un intermediario de
tránsito, reduciendo costos y latencia.

#### REDUNDANCIA

Duplicación de componentes críticos (dispositivos, enlaces, fuentes de
alimentación) para eliminar puntos únicos de fallo y asegurar
continuidad operativa.

#### RSTP (*RAPID SPANNING TREE PROTOCOL*)

Evolución de STP que reduce drásticamente los tiempos de convergencia
(segundos o milisegundos) mediante *handshake* explícito y nuevos roles
de puerto.

#### SASE (*SECURE ACCESS SERVICE EDGE*) {#sase-secure-access-service-edge}

Arquitectura que integra SD-WAN con funciones de seguridad (FWaaS, SWG,
CASB, ZTNA) en una plataforma única entregada desde la nube.

#### SD-WAN (*SOFTWARE-DEFINED WIDE AREA NETWORK*)

Arquitectura WAN definida por *software* que abstrae los enlaces de
transporte (MPLS, Internet, LTE) y permite enrutamiento dinámico basado
en políticas y rendimiento de aplicaciones.

#### SEGMENTACIÓN CORPORATIVA {#segmentación-corporativa-2}

División de la red empresarial en dominios lógicos (VLANs, subredes,
VRF) para aislar tráfico, mejorar seguridad y limitar dominios de
*broadcast*.

#### SIEM (*SECURITY INFORMATION AND EVENT MANAGEMENT*)

Plataforma que recopila, correlaciona y analiza eventos y *logs* de
seguridad en tiempo real, facilitando la detección de incidentes y el
cumplimiento normativo.

#### SLAAC (*STATELESS ADDRESS AUTOCONFIGURATION*)

Mecanismo de IPv6 que permite a un dispositivo generar su propia
dirección combinando el prefijo de red (anunciado por un *router*) con
un identificador de interfaz (64 bits), sin servidor central.

#### STP (*SPANNING TREE PROTOCOL*)

Protocolo de capa 2 que evita bucles en redes conmutadas deshabilitando
lógicamente enlaces redundantes, garantizando una topología activa libre
de bucles.

#### SUBNETTING

Técnica de dividir una red IP en subredes más pequeñas tomando prestados
bits de la porción de *host*, optimizando el espacio de direcciones y
reduciendo dominios de *broadcast*.

#### *SWITCHING*

Proceso de reenvío de tramas en redes locales basado en direcciones MAC,
utilizando una tabla de conmutación que aprende dinámicamente la
ubicación de los dispositivos.

#### TCP (*TRANSMISSION CONTROL PROTOCOL*)

Protocolo de capa de transporte orientado a conexión, fiable, con
control de flujo, congestión y retransmisiones. Utiliza números de
secuencia y acuses de recibo.

#### *THROUGHPUT*

Velocidad real de transferencia de datos medida en una transmisión,
generalmente inferior al ancho de banda teórico debido a *overhead*,
colisiones y retransmisiones.

#### TLS (*TRANSPORT LAYER SECURITY*) {#tls-transport-layer-security}

Protocolo criptográfico que proporciona confidencialidad, integridad y
autenticación para comunicaciones en Internet (HTTPS, SMTPS, etc.),
sucesor de SSL.

#### TOPOLOGÍA DE RED

Configuración estructural que define cómo los dispositivos y enlaces
están interconectados (estrella, malla, bus, árbol), afectando
tolerancia a fallos, escalabilidad y rendimiento.

#### TRACEROUTE

Herramienta de diagnóstico que identifica los *routers* intermedios
(saltos) en la ruta hacia un destino, utilizando el campo TTL (*Time To
Live*) de IP.

#### *TRUNKING* (802.1Q)

Técnica que permite transportar múltiples VLANs a través de un solo
enlace físico, mediante la inserción de una etiqueta (*tag*) en las
tramas Ethernet.

#### UDP (*USER DATAGRAM PROTOCOL*) {#udp-user-datagram-protocol}

Protocolo de capa de transporte no orientado a conexión, sin garantías
de entrega, orden o control de flujo. Prioriza velocidad y bajo
*overhead*, usado en VoIP, *streaming* y DNS.

#### VLAN (*VIRTUAL LOCAL AREA NETWORK*)

Segmentación lógica de una red física que agrupa dispositivos en
dominios de *broadcast* independientes, independientemente de su
ubicación física.

#### VLSM (*VARIABLE LENGTH SUBNET MASK*)

Técnica que permite crear subredes de distintos tamaños dentro de una
misma red, aplicando máscaras de longitud variable para optimizar el uso
de direcciones.

#### VPN (*VIRTUAL PRIVATE NETWORK*)

Mecanismo que crea un canal lógico seguro sobre una red pública
(Internet) mediante encapsulación y cifrado, simulando una red privada
entre puntos remotos.

#### WIREGUARD {#wireguard-2}

Protocolo VPN moderno de código reducido, alto rendimiento y
criptografía actual (*Curve25519, ChaCha20-Poly1305*), diseñado para
simplicidad y seguridad.

#### WIRESHARK

Analizador de protocolos de red que captura y decodifica paquetes en
tiempo real, permitiendo inspeccionar tramas a nivel de bits y seguir
flujos de comunicación.

#### *ZERO TRUST*

Modelo de seguridad que elimina la confianza implícita basada en la
ubicación, verificando continua y explícitamente cada solicitud de
acceso, asumiendo que la red interna puede estar comprometida.

#### ZTNA (ZERO TRUST NETWORK ACCESS) {#ztna-zero-trust-network-access}

Tecnología derivada de *Zero Trust* que proporciona acceso remoto seguro
a aplicaciones específicas sin exponer la red completa, ocultando la
infraestructura interna al cliente.

Este glosario recoge los términos más representativos del documento,
facilitando la consulta rápida y la fijación de conceptos clave
