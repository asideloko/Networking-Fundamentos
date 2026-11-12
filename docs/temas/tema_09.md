<p class="tema-num">TEMA 09</p>

# VPN Y TUNELIZACIÓN

Una VPN (red privada virtual) combina tunelización y cifrado para establecer una conexión segura y privada entre dispositivos o redes que se comunican a través de una red pública, normalmente Internet. Gracias a ella, una organización puede extender su red privada sobre infraestructuras que no controla, sin dejar el tráfico expuesto a quien lo observe en el camino.

Para extender una red a través de otra, una VPN combina la encapsulación del Tema 1, el enrutamiento del Tema 6 y los controles criptográficos del Tema 8.

Por eso las VPN se han vuelto indispensables en tres escenarios: conectar oficinas remotas entre sí, dar acceso a las personas que trabajan fuera de la sede y proteger las comunicaciones cuando se utilizan redes que no son de confianza.

Este tema recorre las tecnologías que lo hacen posible. El recorrido empieza con GRE en el contexto de una VPN y con IPsec; continúa con SSL VPN, OpenVPN y WireGuard; y luego muestra cómo se aplican en los dos escenarios principales, el de sitio a sitio y el de acceso remoto. Cierra con una comparación entre IPsec y SSL VPN, útil para elegir con criterio (Figura 9.1).

<div class="diagram" id="figura-9-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g901" viewBox="0 0 1200 412" role="img" aria-labelledby="g901-title">
<title id="g901-title">Mapa del Tema 9</title>
<defs></defs>
<g id="g901-c" transform="translate(20 20)"><rect x="0" y="0" width="272" height="158" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="0" y1="34" x2="272" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="136" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">9.1 GRE en contexto VPN</text>
<g transform="translate(136 78.64) scale(0.7)" data-lib="tunnel"><g stroke="#7c3aed" stroke-width="3"><path d="M-40 -14 H40 M-40 14 H40" fill="none"></path><ellipse cx="-40" cy="0" rx="8" ry="14" fill="#decefa"></ellipse><ellipse cx="40" cy="0" rx="8" ry="14" fill="#f2ebfd"></ellipse></g><path d="M-26 0 H20 M12 -7 l8 7 -8 7" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="136" y="139" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Túneles de transporte</text>
<rect x="296" y="0" width="272" height="158" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="296" y1="34" x2="568" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="432" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">9.2 IPsec</text>
<g transform="translate(432 78.64) scale(0.7)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#003ecc" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#003ecc"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<text x="432" y="139" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Cifrado y autenticación</text>
<rect x="592" y="0" width="272" height="158" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="592" y1="34" x2="864" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="728" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">9.3 SSL VPN</text>
<g transform="translate(728 78.64) scale(0.7)" data-lib="key"><g stroke="#009254" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="-22" cy="0" r="12" fill="#bfe4d4"></circle><path d="M-10 0 H34 M24 0 V12 M14 0 V9"></path></g></g>
<text x="728" y="139" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Acceso mediante TLS</text>
<rect x="888" y="0" width="272" height="158" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="888" y1="34" x2="1160" y2="34" stroke="#dd3a00" stroke-width="1.5"/>
<text x="1024" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">9.4 OpenVPN</text>
<g transform="translate(1024 78.64) scale(0.7)" data-lib="tunnel"><g stroke="#dd3a00" stroke-width="3"><path d="M-40 -14 H40 M-40 14 H40" fill="none"></path><ellipse cx="-40" cy="0" rx="8" ry="14" fill="#f6cebf"></ellipse><ellipse cx="40" cy="0" rx="8" ry="14" fill="#fcebe6"></ellipse></g><path d="M-26 0 H20 M12 -7 l8 7 -8 7" fill="none" stroke="#dd3a00" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="1024" y="139" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">VPN de código abierto</text>
<rect x="0" y="182" width="272" height="158" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="0" y1="216" x2="272" y2="216" stroke="#7c3aed" stroke-width="1.5"/>
<text x="136" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">9.5 WireGuard</text>
<g transform="translate(136 260.64) scale(0.7)" data-lib="bolt"><path d="M6 -32 L-20 4 H-2 L-8 32 L22 -6 H4 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="136" y="321" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">VPN moderna y ligera</text>
<rect x="296" y="182" width="272" height="158" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="296" y1="216" x2="568" y2="216" stroke="#003ecc" stroke-width="1.5"/>
<text x="432" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">9.6 VPN sitio a sitio</text>
<g transform="translate(432 260.64) scale(0.7)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#003ecc"></rect></g>
<text x="432" y="321" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Conexión entre sedes</text>
<rect x="592" y="182" width="272" height="158" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="592" y1="216" x2="864" y2="216" stroke="#009254" stroke-width="1.5"/>
<text x="728" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">9.7 VPN de acceso remoto</text>
<g transform="translate(728 260.64) scale(0.7)" data-lib="user"><g stroke="#009254" stroke-width="3" fill="#ffffff"><circle cx="0" cy="-18" r="14" fill="#e6f4ee"></circle><path d="M-30 30 C-30 4 -18 0 0 0 C18 0 30 4 30 30 Z" fill="#e6f4ee"></path></g></g>
<text x="728" y="321" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Conexión de usuarios individuales</text>
<rect x="888" y="182" width="272" height="158" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="888" y1="216" x2="1160" y2="216" stroke="#364e6c" stroke-width="1.5"/>
<text x="1024" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">9.8 IPsec frente a SSL VPN</text>
<g transform="translate(1024 260.64) scale(0.7)" data-lib="fork"><g fill="none" stroke="#364e6c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-30 0 H-6 L20 -18 M-6 0 L20 18"></path><path d="M12 -26 L22 -18 L12 -10 M12 10 L22 18 L12 26"></path></g><circle cx="-30" cy="0" r="5" fill="#364e6c"></circle></g>
<text x="1024" y="321" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Comparación de enfoques</text></g><text x="600" y="394" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 9.1. Mapa del Tema 9.</text></svg>
</div>

## 9.1 GRE EN CONTEXTO VPN

En la sección 6.8 se presentó GRE como un mecanismo de encapsulación capaz de transportar distintos protocolos sobre una infraestructura IP. Dentro de una VPN cumple un papel diferente: sirve como túnel lógico sobre el cual se aplica IPsec para incorporar seguridad.

Esta combinación, conocida como GRE sobre IPsec, es muy habitual en entornos empresariales que necesitan conectividad segura entre sedes y soporte para protocolos de enrutamiento dinámico. Un túnel GRE funciona como una interfaz virtual punto a punto capaz de encapsular tráfico *unicast*, *multicast* y *broadcast* dentro de paquetes IP.

Sobre ese túnel, IPsec cifra la información transportada y aporta confidencialidad, integridad y autenticación. La ventaja de este arreglo es que supera una limitación del IPsec nativo: no transporta de forma transparente tráfico *multicast* ni *broadcast*, y eso impide que protocolos de enrutamiento dinámico como OSPF o EIGRP funcionen directamente sobre túneles IPsec convencionales.

El proceso de encapsulación y desencapsulación de un túnel GRE sobre una infraestructura IP pública se presentó en la sección 6.8 (Figuras 6.13 y 6.14). Aquí el procedimiento tiene dos pasos: primero se encapsula el tráfico con GRE, de modo que cualquier paquete se convierte en tráfico *unicast* IP, y después se aplica IPsec sobre el paquete GRE completo. La estructura resultante, de afuera hacia adentro, es la siguiente:

- Encabezado IP exterior.
- Encabezado ESP (IPsec).
- Encabezado GRE.
- Paquete original.

Cuando el paquete llega al extremo remoto ocurre el camino inverso: IPsec retira el cifrado y valida la integridad de la información; después, GRE elimina la encapsulación y entrega el paquete original a la red interna. La Figura 9.2 representa el orden de los encabezados y la sobrecarga.

<div class="diagram" id="figura-9-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g902" viewBox="0 0 1200 358.756" role="img" aria-labelledby="g902-title">
<title id="g902-title">GRE sobre IPsec: orden de los encabezados</title>
<defs><marker id="g902m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g902n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g902-c" transform="translate(-8.778 -8.770) scale(1.0146)"><g transform="translate(0 -10)"><rect x="20" y="30" width="226" height="96" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<g transform="translate(133 66) scale(0.55)" data-lib="globe"><g stroke="#dd3a00" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#fcebe6"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<text x="133" y="112" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">1 · IP exterior</text>
<rect x="250" y="30" width="226" height="96" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(363 66) scale(0.55)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#7c3aed" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#7c3aed"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<text x="363" y="112" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2 · ESP (IPsec)</text>
<rect x="480" y="30" width="196" height="96" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(578 66) scale(0.55)" data-lib="tunnel"><g stroke="#003ecc" stroke-width="3"><path d="M-40 -14 H40 M-40 14 H40" fill="none"></path><ellipse cx="-40" cy="0" rx="8" ry="14" fill="#bfcff2"></ellipse><ellipse cx="40" cy="0" rx="8" ry="14" fill="#e6ecfa"></ellipse></g><path d="M-26 0 H20 M12 -7 l8 7 -8 7" fill="none" stroke="#003ecc" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="578" y="112" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">3 · GRE</text>
<rect x="680" y="30" width="500" height="96" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"></rect>
<g transform="translate(930 66) scale(0.55)" data-lib="packet"><rect x="-38" y="-20" width="76" height="40" rx="4" fill="#ffffff" stroke="#364e6c" stroke-width="3"></rect><rect x="-38" y="-20" width="26" height="40" fill="#cdd3da" stroke="#364e6c" stroke-width="3"></rect><path d="M-4 -6h30M-4 6h20" stroke="#364e6c" stroke-width="3" stroke-linecap="round"></path></g>
<text x="930" y="112" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">4 · Paquete original</text>
<text x="600" y="160" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IPsec protege el paquete GRE completo; GRE permite transportar tráfico distinto de unicast IP</text>
<rect x="135" y="200" width="130" height="76" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(200 238) scale(0.7)" data-lib="gauge"><path d="M-30 18 A30 30 0 1 1 30 18" fill="none" stroke="#003ecc" stroke-width="4" stroke-linecap="round"></path><path d="M0 14 L16 -12" stroke="#003ecc" stroke-width="4" stroke-linecap="round"></path><circle cx="0" cy="14" r="5" fill="#003ecc"></circle></g>
<text x="200" y="295" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Sobrecarga</text>
<text x="200" y="315.231" font-size="10.349pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">de 60 a 70 B por paquete</text>
<rect x="535" y="200" width="130" height="76" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(600 238) scale(0.7)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#009254"></circle></g>
<text x="600" y="295" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">MTU del túnel</text>
<text x="600" y="315.231" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="middle">cerca de 1436 B sobre Ethernet de 1500 B</text>
<rect x="935" y="200" width="130" height="76" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(1000 238) scale(0.7)" data-lib="fork"><g fill="none" stroke="#7c3aed" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-30 0 H-6 L20 -18 M-6 0 L20 18"></path><path d="M12 -26 L22 -18 L12 -10 M12 10 L22 18 L12 26"></path></g><circle cx="-30" cy="0" r="5" fill="#7c3aed"></circle></g>
<text x="1000" y="295" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Ventaja</text>
<text x="1000" y="315.231" font-size="10.349pt" font-weight="400" fill="#5b21b6" text-anchor="middle">routing dinámico y multicast sobre IPsec</text>
</g></g><text x="600" y="342.394" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 9.2. GRE sobre IPsec: orden de los encabezados.</text></svg>
</div>

Esa combinación tiene un costo: los encabezados adicionales agregan sobrecarga. En implementaciones típicas el *overhead* ronda entre 60 y 70 bytes por paquete, aunque depende del modo y de los algoritmos, así que normalmente hay que ajustar la MTU del túnel para evitar fragmentación. En enlaces Ethernet con MTU de 1500 bytes es habitual partir de valores entre 1400 y 1436 bytes para la interfaz GRE.

GRE aporta flexibilidad de encapsulación y compatibilidad con el enrutamiento dinámico, mientras que IPsec proporciona los mecanismos criptográficos que protegen el tráfico. De ahí que GRE sobre IPsec siga siendo una de las soluciones más utilizadas en redes empresariales tradicionales y entornos híbridos. A continuación se muestra cómo se arma en *Linux*.

##### Ejemplo básico en *Linux* (túnel GRE protegido con IPsec)

La creación del túnel GRE es la misma de la sección 6.8. A continuación se muestra la configuración del extremo local y, al final, su protección con IPsec.

##### Crear el túnel:

```text
Networking@SecOpsMX:~$ sudo ip tunnel add gre1 mode gre local 203.0.113.1 remote 198.51.100.1 ttl 255
```

##### Asignar dirección IP:

```text
Networking@SecOpsMX:~$ sudo ip addr add 10.100.0.1/30 dev gre1
```

##### Activar la interfaz:

```text
Networking@SecOpsMX:~$ sudo ip link set gre1 up
```

##### Ajustar la MTU del túnel (valor habitual cuando GRE se combina con IPsec):

```text
Networking@SecOpsMX:~$ sudo ip link set gre1 mtu 1436
```

##### Verificar el túnel:

```text
Networking@SecOpsMX:~$ ip tunnel show gre1
gre1: gre/ip remote 198.51.100.1 local 203.0.113.1 ttl 255
```

##### Comprobar conectividad:

```text
Networking@SecOpsMX:~$ ping -c 4 10.100.0.2
PING 10.100.0.2 (10.100.0.2) 56(84) bytes of data.
64 bytes from 10.100.0.2: icmp_seq=1 ttl=64 time=1.23 ms
64 bytes from 10.100.0.2: icmp_seq=2 ttl=64 time=1.18 ms
64 bytes from 10.100.0.2: icmp_seq=3 ttl=64 time=1.25 ms
64 bytes from 10.100.0.2: icmp_seq=4 ttl=64 time=1.20 ms
--- 10.100.0.2 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3005ms
rtt min/avg/max/mdev = 1.180/1.215/1.250/0.027 ms
```

##### Agregar una ruta remota:

```text
Networking@SecOpsMX:~$ sudo ip route add 10.0.0.0/24 via 10.100.0.2 dev gre1
```

##### Proteger el tráfico GRE (protocolo IP 47) con IPsec en modo transporte entre las mismas direcciones públicas:

Ejemplo mínimo con strongSwan en el extremo local; en el otro extremo se invierten los valores local y remoto. La clave precompartida se usa solo con fines de laboratorio:

```text
# /etc/swanctl/conf.d/gre-ipsec.conf
connections {
  gre-ipsec {
    version = 2
    local_addrs = 203.0.113.1
    remote_addrs = 198.51.100.1
    local { auth = psk; id = 203.0.113.1 }
    remote { auth = psk; id = 198.51.100.1 }
    children {
      gre {
        local_ts = 203.0.113.1[gre]
        remote_ts = 198.51.100.1[gre]
        mode = transport
        esp_proposals = aes256gcm16
        start_action = start
      }
    }
  }
}
secrets {
  ike-gre {
    id-1 = 203.0.113.1
    id-2 = 198.51.100.1
    secret = "CambiarEstaClaveDeLaboratorio"
  }
}
```

##### Cargar la configuración y verificar la asociación de seguridad:

```text
Networking@SecOpsMX:~$ sudo swanctl --load-all
Networking@SecOpsMX:~$ sudo swanctl --list-sas
```

## 9.2 IPSEC

IPsec es un conjunto de protocolos desarrollados por la IETF para dar seguridad a nivel de red mediante autenticación, integridad y cifrado aplicados directamente a los paquetes IP. A diferencia de las soluciones que operan en capas superiores, protege la comunicación sin importar qué aplicación la genera: puede asegurar prácticamente cualquier protocolo basado en IP sin modificar los sistemas finales.

Es la tecnología predominante en las VPN sitio a sitio y sigue entre las más implementadas en infraestructuras empresariales, proveedores de servicios y entornos gubernamentales. Sus objetivos son cuatro: confidencialidad mediante el cifrado de los datos, integridad para detectar modificaciones no autorizadas, autenticación de los extremos y protección contra ataques de repetición mediante números de secuencia.

Para lograrlo, la arquitectura de IPsec se apoya en tres componentes: AH, ESP e IKE.

### Componentes de IPsec

#### AH

Proporciona autenticación e integridad de los paquetes IP, y puede verificar modificaciones tanto en la carga útil como en ciertos campos de la cabecera IP. No cifra, y hoy se usa muy poco porque ESP ofrece las mismas funciones junto con confidencialidad.

#### ESP

Es el componente más utilizado. Proporciona cifrado, autenticación e integridad de los datos transportados y, según la configuración, puede emplear algoritmos como AES-GCM o ChaCha20-Poly1305.

#### IKE

Gestiona la negociación de parámetros criptográficos, la autenticación entre extremos y la generación dinámica de las claves de sesión. La versión predominante es IKEv2, definida en el RFC 7296.

La Figura 9.3 sitúa AH, ESP e IKE dentro de la arquitectura de IPsec: IKE negocia los parámetros y AH o ESP protegen el tráfico; la Tabla 9.1 detalla cada componente.

<div class="diagram" id="figura-9-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g903" viewBox="0 0 1200 402.151" role="img" aria-labelledby="g903-title">
<title id="g903-title">Arquitectura de IPsec: AH, ESP e IKE</title>
<defs><marker id="g903m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g903n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g903-c" transform="translate(-8.802 -8.771) scale(1.0147)"><g transform="translate(0 0)"><rect x="20" y="20" width="360" height="190" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect><line x1="20" y1="54" x2="380" y2="54" stroke="#d40000" stroke-width="1.5"></line>
<text x="200" y="43" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">AH</text>
<g transform="translate(200 104) scale(1.2)" data-lib="stamp"><circle cx="0" cy="-10" r="18" fill="#fbe6e6" stroke="#d40000" stroke-width="3"></circle><path d="M-8 -10 L-2 -4 L9 -17" fill="none" stroke="#d40000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M-30 18 H30 M-22 28 H22" stroke="#d40000" stroke-width="4" stroke-linecap="round"></path></g>
<text x="200" y="156" font-size="10.348pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Autenticación e integridad</text>
<rect x="34" y="174" width="332" height="26" rx="4" fill="#f4bfbf" stroke="#d40000" stroke-width="1.6"></rect>
<text x="200" y="191.9" font-size="10.348pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Sin cifrado · uso muy limitado</text>
<rect x="420" y="20" width="360" height="190" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect><line x1="420" y1="54" x2="780" y2="54" stroke="#009254" stroke-width="1.5"></line>
<text x="600" y="43" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">ESP</text>
<g transform="translate(600 104) scale(1.2)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#009254" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#009254"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<text x="600" y="156" font-size="10.348pt" font-weight="400" fill="#065f46" text-anchor="middle">Cifrado, autenticación e integridad</text>
<rect x="434" y="174" width="332" height="26" rx="4" fill="#bfe4d4" stroke="#009254" stroke-width="1.6"></rect>
<text x="600" y="191.9" font-size="10.348pt" font-weight="700" fill="#065f46" text-anchor="middle">El más utilizado</text>
<rect x="820" y="20" width="360" height="190" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect><line x1="820" y1="54" x2="1180" y2="54" stroke="#003ecc" stroke-width="1.5"></line>
<text x="1000" y="43" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IKE</text>
<g transform="translate(1000 104) scale(1.2)" data-lib="key"><g stroke="#003ecc" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="-22" cy="0" r="12" fill="#bfcff2"></circle><path d="M-10 0 H34 M24 0 V12 M14 0 V9"></path></g></g>
<text x="1000" y="156" font-size="10.348pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Negociación de parámetros y claves</text>
<rect x="834" y="174" width="332" height="26" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="1000" y="191.9" font-size="10.348pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">IKEv2 · RFC 7296</text>
<rect x="20" y="240" width="570" height="80" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(76 280) scale(0.6)" data-lib="packet"><rect x="-38" y="-20" width="76" height="40" rx="4" fill="#ffffff" stroke="#7c3aed" stroke-width="3"></rect><rect x="-38" y="-20" width="26" height="40" fill="#decefa" stroke="#7c3aed" stroke-width="3"></rect><path d="M-4 -6h30M-4 6h20" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"></path></g>
<text x="132" y="272" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Modo transporte</text>
<text x="132" y="296" font-size="10.348pt" font-weight="400" fill="#5b21b6" text-anchor="start">Protege la carga útil; las IP permanecen visibles</text>
<rect x="610" y="240" width="570" height="80" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<g transform="translate(666 280) scale(0.6)" data-lib="tunnel"><g stroke="#dd3a00" stroke-width="3"><path d="M-40 -14 H40 M-40 14 H40" fill="none"></path><ellipse cx="-40" cy="0" rx="8" ry="14" fill="#f6cebf"></ellipse><ellipse cx="40" cy="0" rx="8" ry="14" fill="#fcebe6"></ellipse></g><path d="M-26 0 H20 M12 -7 l8 7 -8 7" fill="none" stroke="#dd3a00" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="722" y="272" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Modo túnel</text>
<text x="722" y="296" font-size="10.348pt" font-weight="400" fill="#7c2d12" text-anchor="start">Encapsula el paquete completo en un nuevo paquete IP</text>
<text x="600" y="348" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">NAT-T: IPsec encapsulado en UDP 4500 para atravesar dispositivos NAT</text>
</g></g><text x="600" y="385.806" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 9.3. Arquitectura de IPsec: AH, ESP e IKE.</text></svg>
</div>

<div class="diagram tabla-svg" id="tabla-9-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 325" role="img" aria-labelledby="t40-title"><title id="t40-title">Tabla 9.1. Componentes de IPsec.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="111.0" y="20.0" dominant-baseline="central" text-anchor="middle">Componente</text>
<text class="tb-ht" x="455.9" y="20.0" dominant-baseline="central" text-anchor="middle">Función</text>
<text class="tb-ht" x="944.9" y="20.0" dominant-baseline="central" text-anchor="middle">Características</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">AH (Authentication</text>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">Header)</text>
<text class="tb-tx" x="234.0" y="60.8" dominant-baseline="central">Proporciona integridad y autenticación del origen de</text>
<text class="tb-tx" x="234.0" y="83.5" dominant-baseline="central">los paquetes IP.</text>
<text class="tb-tx" x="701.8" y="72.1" dominant-baseline="central">No proporciona confidencialidad ni cifrado del contenido.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">ESP (Encapsulating</text>
<text class="tb-tx tb-b" x="12.0" y="158.4" dominant-baseline="central">Security Payload)</text>
<text class="tb-tx" x="234.0" y="124.2" dominant-baseline="central">Protege el tráfico mediante confidencialidad y, según</text>
<text class="tb-tx" x="234.0" y="147.0" dominant-baseline="central">los algoritmos y la configuración, integridad y</text>
<text class="tb-tx" x="234.0" y="169.8" dominant-baseline="central">autenticación.</text>
<text class="tb-tx" x="701.8" y="135.6" dominant-baseline="central">Es el componente más utilizado para proteger el tráfico de</text>
<text class="tb-tx" x="701.8" y="158.4" dominant-baseline="central">usuario en IPsec.</text>
<rect class="tb-te" x="0" y="190.5" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="221.9" dominant-baseline="central">IKEv2 (Internet Key</text>
<text class="tb-tx tb-b" x="12.0" y="244.6" dominant-baseline="central">Exchange)</text>
<text class="tb-tx" x="234.0" y="221.9" dominant-baseline="central">Negocia parámetros criptográficos, autentica los</text>
<text class="tb-tx" x="234.0" y="244.6" dominant-baseline="central">extremos y establece asociaciones de seguridad.</text>
<text class="tb-tx" x="701.8" y="210.5" dominant-baseline="central">Crea una IKE SA y negocia Child SAs para proteger el tráfico.</text>
<text class="tb-tx" x="701.8" y="233.2" dominant-baseline="central">Los intercambios posteriores se protegen</text>
<text class="tb-tx" x="701.8" y="256.0" dominant-baseline="central">criptográficamente.</text>
<text class="tb-cap" x="600.0" y="302.8" text-anchor="middle">Tabla 9.1. Componentes de IPsec.</text></svg>
</div>

Además, IPsec puede operar en dos modos.

### Modo transporte

Protege solo la carga útil del paquete IP original; las direcciones de origen y destino permanecen visibles durante el tránsito. Se utiliza en comunicaciones *host* a *host* y en arquitecturas GRE sobre IPsec.

### Modo túnel

Encapsula el paquete IP original completo dentro de un paquete IP nuevo. Las direcciones internas quedan ocultas y solo se ven las de los dispositivos VPN. Es el modo habitual en las VPN sitio a sitio.

¿Cómo se establece entonces una conexión? Mediante asociaciones de seguridad (*Security Associations*, SA), que reúnen los parámetros necesarios para proteger el tráfico. Durante la negociación, IKE intercambia información criptográfica, valida la identidad de los extremos y genera las claves que usará después ESP. De forma simplificada, el procedimiento tiene dos etapas.

### Primera etapa

Los dispositivos negocian algoritmos criptográficos, métodos de autenticación y parámetros de intercambio de claves para construir un canal seguro inicial.

### Segunda etapa

Se crean las asociaciones de seguridad que protegerán el tráfico de usuario y se define qué redes, *hosts* o aplicaciones se cifrarán.

Entre las ventajas de IPsec destacan la seguridad sólida a nivel de red, la transparencia para las aplicaciones, el amplio soporte en *routers*, *firewalls* y sistemas operativos, la interoperabilidad basada en estándares abiertos y la posibilidad de aceleración criptográfica mediante *hardware* especializado.

## 9.3 SSL VPN

Las llamadas SSL VPN usan TLS (*Transport Layer Security*) para establecer conexiones seguras entre usuarios remotos y recursos corporativos a través de Internet. El nombre es histórico: las implementaciones actuales utilizan TLS, sucesor de SSL y estándar vigente para proteger las comunicaciones.

A diferencia de IPsec, que opera sobre todo en la capa de red, las SSL VPN suelen funcionar en las capas de transporte y de aplicación. Esto simplifica el acceso desde ubicaciones externas y reduce los requisitos de configuración en el cliente. Su objetivo es dar acceso seguro a aplicaciones, servicios y recursos corporativos sin extender por completo la red interna hasta el usuario remoto.

Existen dos modalidades principales de funcionamiento (Figura 9.4).

<div class="diagram" id="figura-9-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g904" viewBox="0 0 1200 413.455" role="img" aria-labelledby="g904-title">
<title id="g904-title">Modalidades de SSL VPN</title>
<defs><marker id="g904m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g904n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g904-c" transform="translate(-8.798 -8.774) scale(1.0147)"><g transform="translate(0 -0.08)"><g transform="translate(150 70) scale(0.8)" data-lib="pc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#e6ecfa" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="150" y="128" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Navegador</text>
<g transform="translate(560 70) scale(0.9)" data-lib="globe"><g stroke="#003ecc" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#e6ecfa"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<text x="560" y="128" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Portal HTTPS</text>
<line x1="215" y1="70" x2="490" y2="70" stroke="#364e6c" stroke-width="2" marker-end="url(#g904m)"></line>
<g transform="translate(150 230) scale(0.8)" data-lib="pc"><g stroke="#009254" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#e6f4ee" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="150" y="282.8" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Cliente VPN</text>
<g transform="translate(560 230) scale(1.1)" data-lib="tunnel"><g stroke="#009254" stroke-width="3"><path d="M-40 -14 H40 M-40 14 H40" fill="none"></path><ellipse cx="-40" cy="0" rx="8" ry="14" fill="#bfe4d4"></ellipse><ellipse cx="40" cy="0" rx="8" ry="14" fill="#e6f4ee"></ellipse></g><path d="M-26 0 H20 M12 -7 l8 7 -8 7" fill="none" stroke="#009254" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></g>
<g transform="translate(1100 230) scale(0.7)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#009254"></rect></g>
<line x1="215" y1="230" x2="480" y2="230" stroke="#364e6c" stroke-width="2" marker-end="url(#g904m)"></line>
<line x1="640" y1="230" x2="1040" y2="230" stroke="#364e6c" stroke-width="2" marker-end="url(#g904m)"></line>
<g transform="translate(1100 70) scale(0.7)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#003ecc"></rect></g>
<line x1="625" y1="70" x2="1040" y2="70" stroke="#364e6c" stroke-width="2" marker-end="url(#g904m)"></line>
<rect x="754.55" y="41" width="150.91" height="22" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="830" y="56.67" font-size="10.348pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">recursos internos</text>
<text x="20" y="36" font-size="11.826pt" font-weight="700" fill="#1e3a8a" text-anchor="start">Portal</text>
<text x="20" y="196" font-size="11.826pt" font-weight="700" fill="#065f46" text-anchor="start">Túnel</text>
<rect x="20" y="320" width="1160" height="44" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="347.25" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">TLS sobre TCP 443: atraviesa firewalls y proxies con facilidad; la mayoría de las plataformas combinan ambas modalidades</text>
</g></g><text x="600" y="397.107" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 9.4. Modalidades de SSL VPN.</text></svg>
</div>

### Portal SSL VPN

El usuario entra desde un navegador web a una dirección HTTPS que publica la organización. Tras autenticarse, el sistema le presenta un portal con acceso a aplicaciones, escritorios remotos, recursos compartidos o servicios específicos. Todo el tráfico viaja sobre HTTPS, lo que facilita el acceso desde redes externas.

### Túnel SSL VPN

Aquí se instala un cliente ligero o una aplicación específica que establece un túnel cifrado entre el dispositivo remoto y la infraestructura corporativa. A diferencia del portal, permite transportar tráfico de varias aplicaciones y protocolos por una misma conexión segura. La mayoría de las plataformas empresariales actuales combinan ambas modalidades para atender distintos perfiles de usuario.

### Características técnicas

Una SSL VPN utiliza TLS para el cifrado, la autenticación y la integridad, y habitualmente opera sobre TCP 443; algunas implementaciones también usan DTLS sobre UDP. Atraviesa con facilidad ciertos *firewalls* y *proxies*, admite autenticación multifactor, permite un acceso granular a aplicaciones concretas y reduce la exposición de la red interna completa.

El uso del puerto 443 es una de sus mayores ventajas operativas: como casi todas las organizaciones permiten tráfico HTTPS saliente, estas VPN suelen funcionar incluso en entornos muy restringidos.

Entre los mecanismos de autenticación más habituales están el usuario y la contraseña, los certificados digitales, los *tokens* OTP, las aplicaciones MFA y la integración con Active Directory, LDAP o servicios de identidad federada. Por todo ello resultan especialmente adecuadas para el teletrabajo, el acceso de terceros y de proveedores externos, y los usuarios que necesitan acceso controlado a aplicaciones corporativas sin conectarse a toda la infraestructura interna.

### Limitaciones

Tienen como contrapartida la dependencia de TLS y, en ciertas implementaciones, del navegador; los problemas derivados de encapsular TCP sobre TCP cuando se usa ese modo de transporte; y restricciones de escalabilidad en algunas plataformas. El rendimiento real depende del producto, del modo de túnel, del *hardware* y de la carga.

### Ventajas

Su implementación es sencilla para los usuarios finales, funcionan bien en redes públicas, tienen menor complejidad inicial que IPsec, permiten acceso granular a aplicaciones específicas y se adaptan a entornos BYOD. Hoy son una de las tecnologías más usadas para acceso remoto seguro y forman parte de muchas arquitecturas *Zero Trust* y ZTNA.

## 9.4 OPENVPN

OpenVPN es una solución VPN de código abierto muy adoptada en entornos corporativos, académicos y domésticos. Combina la protección criptográfica basada en TLS con mecanismos para transportar tráfico IP, y ofrece una alternativa flexible y configurable frente a tecnologías como IPsec.

Aunque suele clasificarse como una VPN basada en TLS, implementa su propio protocolo de transporte y utiliza una biblioteca criptográfica compatible con TLS, como OpenSSL o mbed TLS, según la compilación. Permite crear redes privadas virtuales sobre Internet usando UDP o TCP como transporte, y admite varios métodos de autenticación: certificados X.509, claves precompartidas, usuario y contraseña, integración con sistemas MFA y directorios corporativos como LDAP o Active Directory.

### Modos de operación

OpenVPN puede trabajar en dos modos, que se distinguen por la capa en la que operan (Figura 9.5).

<div class="diagram" id="figura-9-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g905" viewBox="0 0 1200 364.838" role="img" aria-labelledby="g905-title">
<title id="g905-title">Modos TUN y TAP de OpenVPN</title>
<defs><marker id="g905m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g905n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g905-c" transform="translate(-8.771 -8.770) scale(1.0146)"><g transform="translate(0 0)"><rect x="20" y="20" width="560" height="190" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect><line x1="20" y1="54" x2="580" y2="54" stroke="#003ecc" stroke-width="1.5"></line>
<text x="300" y="43" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Modo TUN · capa 3</text>
<g transform="translate(300 104) scale(1.2)" data-lib="packet"><rect x="-38" y="-20" width="76" height="40" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><rect x="-38" y="-20" width="26" height="40" fill="#bfcff2" stroke="#003ecc" stroke-width="3"></rect><path d="M-4 -6h30M-4 6h20" stroke="#003ecc" stroke-width="3" stroke-linecap="round"></path></g>
<text x="300" y="156" font-size="10.349pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Transporta paquetes IP</text>
<rect x="34" y="174" width="532" height="26" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="300" y="191.9" font-size="10.349pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Eficiente · el más utilizado</text>
<rect x="620" y="20" width="560" height="190" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect><line x1="620" y1="54" x2="1180" y2="54" stroke="#dd3a00" stroke-width="1.5"></line>
<text x="900" y="43" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Modo TAP · capa 2</text>
<g transform="translate(900 104) scale(1)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><rect x="-46.0" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-33.5" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-21.0" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-8.5" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="4.0" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="16.5" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="29.0" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="41.5" y="-4" width="9" height="12" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><circle cx="-44" cy="-15" r="2.5" fill="#dd3a00"></circle><circle cx="-24" cy="-15" r="2.5" fill="#dd3a00"></circle><circle cx="-4" cy="-15" r="2.5" fill="#dd3a00"></circle><circle cx="16" cy="-15" r="2.5" fill="#dd3a00"></circle><circle cx="36" cy="-15" r="2.5" fill="#dd3a00"></circle></g>
<text x="900" y="156" font-size="10.349pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Transporta tramas Ethernet completas</text>
<rect x="634" y="174" width="532" height="26" rx="4" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.6"></rect>
<text x="900" y="191.9" font-size="10.349pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Mayor overhead</text>
<rect x="20" y="240" width="560" height="76" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(70 278) scale(0.6)" data-lib="bolt"><path d="M6 -32 L-20 4 H-2 L-8 32 L22 -6 H4 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="120" y="270" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="start">UDP</text>
<text x="120" y="294" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="start">Recomendado: menor latencia y mejor rendimiento</text>
<rect x="620" y="240" width="560" height="76" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(670 278) scale(0.6)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#d40000" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#d40000"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<text x="720" y="270" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="start">TCP</text>
<text x="720" y="294" font-size="10.349pt" font-weight="400" fill="#7f1d1d" text-anchor="start">Si se bloquea UDP; riesgo de TCP sobre TCP</text>
</g></g><text x="600" y="348.472" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 9.5. Modos TUN y TAP de OpenVPN.</text></svg>
</div>

#### Modo TUN

Opera en capa 3 y transporta paquetes IP. Es el modo más utilizado por su eficiencia y su menor consumo de ancho de banda.

#### Modo TAP

Opera en capa 2 y transporta tramas Ethernet completas. Permite extender segmentos de red y transportar protocolos distintos de IP, aunque genera más *overhead*.

### Protocolos de transporte

#### UDP

Es la opción recomendada en la mayoría de los escenarios por su menor latencia y su mejor rendimiento.

#### TCP

Conviene cuando las restricciones de red bloquean el tráfico UDP. A cambio, suele rendir menos por el fenómeno conocido como TCP sobre TCP.

OpenVPN soporta algoritmos criptográficos modernos como AES-256-GCM, AES-128-GCM y ChaCha20-Poly1305, SHA-2 para la integridad y el intercambio de claves mediante TLS. Su arquitectura cliente-servidor centraliza la autenticación y la distribución de políticas de seguridad, lo que simplifica la administración de usuarios remotos.

Entre sus ventajas están ser *software* libre y auditable, contar con una amplia comunidad y buena documentación, su flexibilidad de configuración, la compatibilidad multiplataforma, el buen soporte para NAT y redes complejas, y la integración con mecanismos avanzados de autenticación. Sus limitaciones son la necesidad de instalar un cliente, la gestión de certificados y una configuración extensa en implementaciones avanzadas. En algunas plataformas rinde menos que WireGuard, aunque la diferencia depende del *hardware*, la biblioteca criptográfica, el modo de transporte y la configuración. Aun así, OpenVPN sigue siendo una solución madura y muy utilizada.

## 9.5 WIREGUARD

WireGuard representa una nueva generación de VPN, orientada a la simplicidad operativa, el alto rendimiento y la criptografía moderna. Su diseño elimina buena parte de la complejidad que tradicionalmente acompaña a IPsec y OpenVPN, y ofrece una arquitectura más sencilla de implementar, mantener y auditar.

Otras soluciones VPN evolucionaron durante décadas incorporando funciones y mecanismos heredados; WireGuard, en cambio, se diseñó desde cero con criterios actuales de seguridad y eficiencia. Su base de código es muy reducida en comparación con la de otras tecnologías VPN, lo que disminuye la superficie de ataque y facilita las auditorías.

Opera en la capa de red mediante interfaces virtuales punto a punto y utiliza un conjunto fijo de algoritmos criptográficos considerados seguros por la comunidad. Entre ellos destacan los siguientes:

- Curve25519 para el intercambio de claves.
- ChaCha20 para el cifrado.
- Poly1305 para la autenticación.
- BLAKE2s para las funciones *hash*.
- SipHash para las tablas *hash* internas.
- HKDF para la derivación de claves.

En WireGuard cada *peer* se identifica por su clave pública; la Figura 9.6 representa ese intercambio y la Tabla 9.2 resume los algoritmos que lo sustentan.

<div class="diagram" id="figura-9-06" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g906" viewBox="0 0 1200 323.239" role="img" aria-labelledby="g906-title">
<title id="g906-title">Peers de WireGuard e intercambio de claves públicas</title>
<defs><marker id="g906m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g906n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g906-c" transform="translate(-8.794 -8.771) scale(1.0147)"><g transform="translate(0 -19)"><g transform="translate(150 80) scale(0.9)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="150" y="137.4" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Peer local · wg0</text>
<text x="150" y="157.631" font-size="10.348pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">clave privada, clave pública, UDP 51820</text>
<g transform="translate(1050 80) scale(0.9)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="-27.5" r="4" fill="#009254"></circle><path d="M-34 -27.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="1.5" r="4" fill="#009254"></circle><path d="M-34 1.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="30.5" r="4" fill="#009254"></circle><path d="M-34 30.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path></g>
<text x="1050" y="137.4" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Peer remoto</text>
<text x="1050" y="157.631" font-size="10.348pt" font-weight="400" fill="#065f46" text-anchor="middle">endpoint 198.51.100.1:51820</text>
<g transform="translate(150 205) scale(0.55)" data-lib="key"><g stroke="#d40000" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="-22" cy="0" r="12" fill="#f4bfbf"></circle><path d="M-10 0 H34 M24 0 V12 M14 0 V9"></path></g></g>
<g transform="translate(1050 205) scale(0.55)" data-lib="key"><g stroke="#009254" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="-22" cy="0" r="12" fill="#bfe4d4"></circle><path d="M-10 0 H34 M24 0 V12 M14 0 V9"></path></g></g>
<line x1="230" y1="70" x2="970" y2="70" stroke="#364e6c" stroke-width="2.5" marker-end="url(#g906m)" marker-start="url(#g906n)"></line>
<rect x="501.18" y="39" width="197.64" height="22" rx="4" fill="#ffffff" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="54.67" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">UDP · roaming automático</text>
<rect x="463.31" y="89" width="273.37" height="22" rx="4" fill="#ffffff" stroke="#009254" stroke-width="1.6"></rect>
<text x="600" y="104.43" font-size="10.348pt" font-weight="700" fill="#065f46" text-anchor="middle">allowed ips: 10.0.0.0/24, 192.168.1.0/24</text>
<g transform="translate(600 205) scale(0.7)" data-lib="tunnel"><g stroke="#7c3aed" stroke-width="3"><path d="M-40 -14 H40 M-40 14 H40" fill="none"></path><ellipse cx="-40" cy="0" rx="8" ry="14" fill="#decefa"></ellipse><ellipse cx="40" cy="0" rx="8" ry="14" fill="#f2ebfd"></ellipse></g><path d="M-26 0 H20 M12 -7 l8 7 -8 7" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></g>
<rect x="20" y="250" width="1160" height="44" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="277.25" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Curve25519 · ChaCha20 · Poly1305 · BLAKE2s · SipHash · HKDF: conjunto fijo, sin negociación de algoritmos</text>
</g></g><text x="600" y="306.885" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 9.6. Peers de WireGuard e intercambio de claves públicas.</text></svg>
</div>

<div class="diagram tabla-svg" id="tabla-9-2" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 361" role="img" aria-labelledby="t41-title"><title id="t41-title">Tabla 9.2. Algoritmos criptográficos de WireGuard.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="92.7" y="20.0" dominant-baseline="central" text-anchor="middle">Algoritmo o función</text>
<text class="tb-ht" x="445.4" y="20.0" dominant-baseline="central" text-anchor="middle">Propósito</text>
<text class="tb-ht" x="952.6" y="20.0" dominant-baseline="central" text-anchor="middle">Uso en WireGuard</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">X25519</text>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">(Curve25519)</text>
<text class="tb-tx" x="197.5" y="60.8" dominant-baseline="central">Intercambio de claves basado en Diffie-Hellman sobre curva</text>
<text class="tb-tx" x="197.5" y="83.5" dominant-baseline="central">elíptica.</text>
<text class="tb-tx" x="717.2" y="72.1" dominant-baseline="central">Establecimiento de secretos compartidos entre pares.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">ChaCha20-Poly1305</text>
<text class="tb-tx" x="197.5" y="135.6" dominant-baseline="central">Cifrado autenticado con datos asociados (AEAD).</text>
<text class="tb-tx" x="717.2" y="135.6" dominant-baseline="central">Confidencialidad e integridad de los paquetes.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">BLAKE2s</text>
<text class="tb-tx" x="197.5" y="199.1" dominant-baseline="central">Función hash criptográfica.</text>
<text class="tb-tx" x="717.2" y="187.8" dominant-baseline="central">Funciones internas de derivación y procesamiento</text>
<text class="tb-tx" x="717.2" y="210.5" dominant-baseline="central">criptográfico.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">SipHash-2-4</text>
<text class="tb-tx" x="197.5" y="251.2" dominant-baseline="central">Función hash con clave.</text>
<text class="tb-tx" x="717.2" y="251.2" dominant-baseline="central">Protección de estructuras hash internas.</text>
<rect class="tb-te" x="0" y="272.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="292.0" dominant-baseline="central">HKDF</text>
<text class="tb-tx" x="197.5" y="292.0" dominant-baseline="central">Función de derivación de claves basada en HMAC.</text>
<text class="tb-tx" x="717.2" y="292.0" dominant-baseline="central">Derivación de material criptográfico.</text>
<text class="tb-cap" x="600.0" y="338.8" text-anchor="middle">Tabla 9.2. Algoritmos criptográficos de WireGuard.</text></svg>
</div>

Uno de los principios de WireGuard es eliminar las decisiones criptográficas complejas: el administrador no elige entre múltiples algoritmos o combinaciones, porque el protocolo trae valores predeterminados considerados seguros. Cada dispositivo posee una clave privada, una clave pública y una dirección IP interna asociada al túnel, y la configuración consiste, en esencia, en intercambiar claves públicas y definir qué redes pueden alcanzarse a través de cada *peer*.

### Características técnicas

WireGuard destaca por su arquitectura ligera, su funcionamiento nativo sobre UDP, el soporte integrado para *roaming*, la reconexión automática ante cambios de dirección IP, la baja latencia, el escaso consumo de CPU y una implementación eficiente dentro del *kernel*.

Mantiene una tabla de *peers* autorizados. Cuando un dispositivo recibe tráfico cifrado desde una dirección distinta de la registrada, actualiza el *endpoint* remoto sin renegociaciones complejas. Esto resulta muy útil en dispositivos móviles, conexiones residenciales y entornos donde la dirección IP cambia con frecuencia.

##### Verificar el estado de WireGuard

El comando wg show permite inspeccionar el estado detallado de las interfaces WireGuard activas:

```text
Networking@SecOpsMX:~$ sudo wg show
```

```text
interface: wg0
  public key: 8PvX9yZ5...=
  private key: (hidden)
  listening port: 51820
  fwmark: 0xca6c

peer: 5bKjLzQ8...=
  endpoint: 198.51.100.1:51820
  allowed ips: 10.0.0.0/24, 192.168.1.0/24
  latest handshake: 1 minute, 34 seconds ago
  transfer: 45.12 MiB received, 32.45 MiB sent
```

En la salida se observa el estado de la interfaz wg0 (clave pública y puerto de escucha) y, para cada *peer*, su *endpoint* remoto, las redes permitidas, el tiempo transcurrido desde el último *handshake* y la cantidad de datos transferidos.

### Ventajas

Ofrece una configuración muy sencilla, alto rendimiento, una latencia menor que la de OpenVPN e IPsec en muchos escenarios, criptografía moderna por defecto, un código reducido y fácil de auditar, y una integración nativa en *Linux* con soporte multiplataforma.

### Limitaciones

No transporta tráfico de capa 2 de forma nativa, integra menos funciones empresariales, carece de mecanismos MFA propios y tiene menos trayectoria histórica que IPsec. Aun así, ha alcanzado un alto grado de madurez y se ha convertido en una de las tecnologías VPN de crecimiento más rápido, tanto en infraestructuras empresariales como en servicios comerciales de acceso remoto.

## 9.6 VPN SITIO A SITIO

Una VPN sitio a sitio establece una conexión protegida entre dos o más redes privadas a través de una infraestructura pública, normalmente Internet. Los extremos del túnel son dispositivos de red —*routers*, *firewalls* o *gateways* VPN— que actúan en representación de los equipos de cada ubicación. La conexión suele mantenerse disponible de forma permanente, aunque su estado depende de la conectividad y de la configuración de los extremos.

Para los usuarios, los recursos de las sedes remotas quedan accesibles mediante el encaminamiento entre las redes autorizadas; el cifrado y la encapsulación ocurren de forma transparente en los dispositivos que terminan el túnel. Esta arquitectura sirve para interconectar oficinas, centros de datos, sucursales y entornos híbridos que combinan infraestructura local con servicios en la nube.

Uno de los mecanismos más habituales es IPsec en modo túnel: cada *gateway* establece asociaciones de seguridad con el extremo remoto y protege el tráfico que coincide con las políticas definidas. Cuando además se necesita ejecutar protocolos de enrutamiento dinámico o transportar tráfico *multicast*, se recurre a GRE sobre IPsec. En infraestructuras más recientes también pueden usarse OpenVPN o WireGuard para interconectar redes completas, aunque IPsec sigue siendo el estándar predominante en entornos empresariales tradicionales.

### Componentes principales

Una VPN sitio a sitio se apoya en un *gateway* VPN en cada extremo, direcciones IP públicas o conectividad equivalente, políticas de cifrado y autenticación, rutas estáticas o enrutamiento dinámico y, cuando la continuidad es crítica, mecanismos de alta disponibilidad. Los *gateways* establecen el túnel y enrutan el tráfico entre ambas redes, de modo que los usuarios de cada sede acceden a los recursos remotos sin configurar *software* VPN individual.

Si hay dispositivos NAT en el camino, puede usarse NAT Traversal (NAT-T), que encapsula el tráfico IPsec en UDP, normalmente por el puerto 4500. Su funcionamiento también depende de las políticas de *firewall* y de la configuración de los extremos.

En el ejemplo de la Figura 9.7, la Sede A (red interna 192.168.1.0/24, IP pública 203.0.113.1) y la Sede B (red interna 10.0.0.0/24, IP pública 198.51.100.1) se interconectan mediante sus *gateways*.

<div class="diagram" id="figura-9-07" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g907" viewBox="0 0 1200 279.250" role="img" aria-labelledby="g907-title">
<title id="g907-title">VPN sitio a sitio entre dos sedes</title>
<defs><marker id="g907m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g907n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g907-c" transform="translate(-8.776 -8.767) scale(1.0146)"><g transform="translate(0 -18.36)"><g transform="translate(120 80) scale(0.9)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#d40000" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#f4bfbf" stroke="#d40000" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#d40000"></rect></g>
<text x="120" y="137.4" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Sede A</text>
<text x="120" y="157.631" font-size="10.349pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Red 192.168.1.0/24</text>
<text x="120" y="175.485" font-size="10.349pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">IP pública 203.0.113.1</text>
<g transform="translate(1080 80) scale(0.9)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#009254"></rect></g>
<text x="1080" y="137.4" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Sede B</text>
<text x="1080" y="157.631" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="middle">Red 10.0.0.0/24</text>
<text x="1080" y="175.485" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="middle">IP pública 198.51.100.1</text>
<g transform="translate(330 80) scale(0.64)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#d40000" stroke-width="3"></circle><circle r="34" fill="#fbe6e6"></circle><g stroke="#d40000" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="330" y="137.4" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Gateway A</text>
<g transform="translate(870 80) scale(0.64)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#009254" stroke-width="3"></circle><circle r="34" fill="#e6f4ee"></circle><g stroke="#009254" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="870" y="137.4" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Gateway B</text>
<g transform="translate(600 80) scale(1.6)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#ebedf0" stroke="#364e6c" stroke-width="3" stroke-linejoin="round"></path></g>
<line x1="180" y1="80" x2="262" y2="80" stroke="#364e6c" stroke-width="2" marker-end="url(#g907m)" marker-start="url(#g907n)"></line>
<line x1="938" y1="80" x2="1020" y2="80" stroke="#364e6c" stroke-width="2" marker-end="url(#g907m)" marker-start="url(#g907n)"></line>
<rect x="395" y="62" width="410" height="36" rx="18" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3"></rect>
<line x1="430" y1="80" x2="770" y2="80" stroke="#7c3aed" stroke-width="3" marker-end="url(#g907m)" marker-start="url(#g907n)"></line>
<text x="600" y="137.4" font-size="10.349pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Túnel VPN a través de Internet</text>
<rect x="20" y="206" width="1160" height="44" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="233.25" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Los gateways establecen el túnel y enrutan entre ambas redes; los usuarios no necesitan software VPN individual · NAT-T: IPsec en UDP 4500</text>
</g></g><text x="600" y="262.887" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 9.7. VPN sitio a sitio entre dos sedes.</text></svg>
</div>

### Ventajas

Protege el tráfico de forma transparente para los usuarios, mantiene conectividad permanente entre sedes, permite administración centralizada, escala de manera adecuada en redes corporativas y es compatible con infraestructuras híbridas y multinube.

### Limitaciones

A medida que aumenta el número de sedes crece la complejidad; además, depende de la conectividad a Internet, exige planificar con cuidado el direccionamiento y las rutas, y demanda más esfuerzo operativo en arquitecturas de gran escala. Aunque tecnologías como SD-WAN (Tema 10) han incorporado automatización y selección dinámica de rutas, la VPN sitio a sitio sigue siendo uno de los mecanismos básicos para interconectar redes corporativas de forma segura.

## 9.7 VPN DE ACCESO REMOTO

Una VPN de acceso remoto permite que usuarios individuales se conecten de forma segura a los recursos corporativos desde ubicaciones externas. A diferencia de la VPN sitio a sitio, donde el túnel termina en dispositivos de red, aquí el extremo remoto es el propio equipo del usuario.

Es un componente central del teletrabajo, la movilidad empresarial y los modelos operativos distribuidos. Las tecnologías más usadas hoy son IPsec con IKEv2, las SSL VPN basadas en TLS, OpenVPN y WireGuard. Una vez establecida la conexión, el dispositivo remoto recibe acceso controlado a la infraestructura corporativa mediante un túnel cifrado que protege toda la comunicación entre el usuario y la organización.

### Componentes principales

#### Cliente VPN

Aplicación instalada en el dispositivo del usuario o funcionalidad integrada en el sistema operativo. Algunos ejemplos son OpenVPN, WireGuard, Cisco Secure Client (antes AnyConnect) e IKEv2 nativo.

#### Concentrador VPN

Dispositivo o servidor que autentica a los usuarios, administra los túneles, asigna direcciones IP virtuales y controla el acceso a los recursos corporativos.

#### Sistema de autenticación

Puede basarse en credenciales tradicionales, certificados digitales, *tokens* OTP o autenticación multifactor.

El proceso habitual consta de cinco etapas (Figura 9.8):

<div class="diagram" id="figura-9-08" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g908" viewBox="0 0 1200 354.780" role="img" aria-labelledby="g908-title">
<title id="g908-title">Etapas de una VPN de acceso remoto</title>
<defs><marker id="g908m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g908n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g908-c" transform="translate(-8.794 -8.771) scale(1.0147)"><g transform="translate(0 1)"><circle cx="136" cy="34" r="15" fill="#7f1d1d"></circle>
<text x="136" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
<rect x="61" y="58" width="150" height="90" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(136 103) scale(1)" data-lib="user"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><circle cx="0" cy="-18" r="14" fill="#fbe6e6"></circle><path d="M-30 30 C-30 4 -18 0 0 0 C18 0 30 4 30 30 Z" fill="#fbe6e6"></path></g></g>
<text x="136" y="167" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Autenticación</text>
<text x="136" y="187.231" font-size="10.348pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">del usuario</text>
<line x1="215" y1="103" x2="289" y2="103" stroke="#364e6c" stroke-width="2" marker-end="url(#g908m)"></line>
<circle cx="368" cy="34" r="15" fill="#1e3a8a"></circle>
<text x="368" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
<rect x="293" y="58" width="150" height="90" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(368 103) scale(1)" data-lib="shield"><path d="M 0 -26 L 22 -17 L 22 2 C 22 16 0 26 0 26 C 0 26 -22 16 -22 2 L -22 -17 Z" fill="#003ecc" stroke="#003ecc" stroke-width="2"></path><path d="M-10 0 L-3 8 L11 -9" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="368" y="167" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Verificación</text>
<text x="368" y="187.231" font-size="10.348pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">de las políticas de seguridad</text>
<line x1="447" y1="103" x2="521" y2="103" stroke="#364e6c" stroke-width="2" marker-end="url(#g908m)"></line>
<circle cx="600" cy="34" r="15" fill="#065f46"></circle>
<text x="600" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
<rect x="525" y="58" width="150" height="90" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(600 103) scale(1)" data-lib="tunnel"><g stroke="#009254" stroke-width="3"><path d="M-40 -14 H40 M-40 14 H40" fill="none"></path><ellipse cx="-40" cy="0" rx="8" ry="14" fill="#bfe4d4"></ellipse><ellipse cx="40" cy="0" rx="8" ry="14" fill="#e6f4ee"></ellipse></g><path d="M-26 0 H20 M12 -7 l8 7 -8 7" fill="none" stroke="#009254" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="600" y="167" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Túnel cifrado</text>
<text x="600" y="187.231" font-size="10.348pt" font-weight="400" fill="#065f46" text-anchor="middle">establecimiento</text>
<line x1="679" y1="103" x2="753" y2="103" stroke="#364e6c" stroke-width="2" marker-end="url(#g908m)"></line>
<circle cx="832" cy="34" r="15" fill="#7c2d12"></circle>
<text x="832" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text>
<rect x="757" y="58" width="150" height="90" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<g transform="translate(832 103) scale(1)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#fcebe6" stroke="#dd3a00" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#dd3a00"></circle></g>
<text x="832" y="167" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IP virtual</text>
<text x="832" y="187.231" font-size="10.348pt" font-weight="400" fill="#7c2d12" text-anchor="middle">asignación de dirección</text>
<line x1="911" y1="103" x2="985" y2="103" stroke="#364e6c" stroke-width="2" marker-end="url(#g908m)"></line>
<circle cx="1064" cy="34" r="15" fill="#5b21b6"></circle>
<text x="1064" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">5</text>
<rect x="989" y="58" width="150" height="90" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(1064 103) scale(1)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#7c3aed" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#7c3aed"></rect></g>
<text x="1064" y="167" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Recursos</text>
<text x="1064" y="187.231" font-size="10.348pt" font-weight="400" fill="#5b21b6" text-anchor="middle">acceso a lo autorizado</text>
<rect x="20" y="225.085" width="360" height="80" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(66 265.085) scale(0.55)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="112" y="257.085" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Cliente VPN</text>
<text x="112" y="279.085" font-size="10.348pt" font-weight="400" fill="#7f1d1d" text-anchor="start">OpenVPN · WireGuard · IKEv2</text>
<rect x="420" y="225.085" width="360" height="80" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(466 265.085) scale(0.55)" data-lib="gear"><g fill="#003ecc"><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(0)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(45)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(90)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(135)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(180)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(225)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(270)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(315)"></rect></g><circle cx="0" cy="0" r="19" fill="#ffffff" stroke="#003ecc" stroke-width="4"></circle><circle cx="0" cy="0" r="7" fill="#bfcff2" stroke="#003ecc" stroke-width="3"></circle></g>
<text x="512" y="257.085" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Concentrador VPN</text>
<text x="512" y="279.085" font-size="10.348pt" font-weight="400" fill="#1e3a8a" text-anchor="start">administra túneles e IP virtuales</text>
<rect x="820" y="225.085" width="360" height="80" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(866 265.085) scale(0.55)" data-lib="key"><g stroke="#009254" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="-22" cy="0" r="12" fill="#bfe4d4"></circle><path d="M-10 0 H34 M24 0 V12 M14 0 V9"></path></g></g>
<text x="912" y="257.085" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Autenticación</text>
<text x="912" y="279.085" font-size="10.348pt" font-weight="400" fill="#065f46" text-anchor="start">credenciales, certificados, OTP o MFA</text>
</g></g><text x="600" y="338.427" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 9.8. Etapas de una VPN de acceso remoto.</text></svg>
</div>

- Autenticación del usuario.
- Verificación de políticas de seguridad.
- Establecimiento del túnel cifrado.
- Asignación de dirección IP virtual.
- Acceso a los recursos autorizados.

### Control del flujo de tráfico

Estas VPN permiten decidir, mediante políticas de enrutamiento, qué tráfico del usuario pasa por el túnel (Figura 9.9).

<div class="diagram" id="figura-9-09" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g909" viewBox="0 0 1200 405.424" role="img" aria-labelledby="g909-title">
<title id="g909-title">Túnel completo y túnel dividido</title>
<defs><marker id="g909m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g909n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g909-c" transform="translate(-8.782 -8.770) scale(1.0146)"><g transform="translate(0 0)"><rect x="20" y="20" width="560" height="270" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<text x="300" y="44" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Túnel completo (full tunnel)</text>
<g transform="translate(110 160) scale(0.8)" data-lib="pc"><g stroke="#364e6c" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#ebedf0" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<g transform="translate(470 100) scale(0.65)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#dd3a00"></rect></g>
<g transform="translate(470 225) scale(0.65)" data-lib="globe"><g stroke="#d40000" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#fbe6e6"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<line x1="170" y1="148" x2="415" y2="106" stroke="#7c3aed" stroke-width="3" marker-end="url(#g909m)"></line>
<line x1="170" y1="172" x2="415" y2="222" stroke="#7c3aed" stroke-width="3" marker-end="url(#g909m)"></line>
<text x="470" y="150" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Red corporativa</text>
<text x="470" y="275" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Internet</text>
<text x="300" y="284" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle"></text>
<text x="300" y="252" font-size="10.349pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Todo el tráfico atraviesa la VPN</text>
<rect x="620" y="20" width="560" height="270" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<text x="900" y="44" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Túnel dividido (split tunneling)</text>
<g transform="translate(710 160) scale(0.8)" data-lib="pc"><g stroke="#364e6c" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#ebedf0" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<g transform="translate(1070 100) scale(0.65)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#dd3a00"></rect></g>
<g transform="translate(1070 225) scale(0.65)" data-lib="globe"><g stroke="#d40000" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#fbe6e6"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<line x1="770" y1="148" x2="1015" y2="106" stroke="#7c3aed" stroke-width="3" marker-end="url(#g909m)"></line>
<line x1="770" y1="172" x2="1015" y2="222" stroke="#d40000" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#g909m)"></line>
<text x="1070" y="150" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Red corporativa</text>
<text x="1070" y="275" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Internet</text>
<text x="900" y="284" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle"></text>
<text x="900" y="252" font-size="10.349pt" font-weight="700" fill="#065f46" text-anchor="middle">Solo el tráfico corporativo usa la VPN</text>
<rect x="20" y="312" width="1160" height="44" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="339.25" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">El túnel completo ofrece mayor control y visibilidad; el dividido reduce el consumo de ancho de banda, pero introduce consideraciones de seguridad</text>
</g></g><text x="600" y="389.066" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 9.9. Túnel completo y túnel dividido.</text></svg>
</div>

#### Túnel completo

Todo el tráfico del usuario atraviesa la VPN, incluido el acceso a Internet. Ofrece mayor control y visibilidad a la organización.

#### Túnel dividido

Solo el tráfico destinado a recursos corporativos usa la VPN; el resto sale directamente a Internet por la conexión local del usuario. Reduce el consumo de ancho de banda y mejora el rendimiento, aunque añade consideraciones de seguridad.

### Ventajas

Acceso seguro desde cualquier ubicación, protección de las comunicaciones en redes públicas e integración con las políticas corporativas.

### Limitaciones

Dependen de la calidad de la conexión del usuario, exigen administrar clientes y credenciales y pueden generar conflictos de direccionamiento.

La Tabla 9.3 contrasta ambas modalidades con un criterio de selección: la VPN de sitio a sitio conecta redes completas, mientras que la de acceso remoto conecta usuarios individuales.

<div class="diagram tabla-svg" id="tabla-9-3" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 424" role="img" aria-labelledby="t42-title"><title id="t42-title">Tabla 9.3. VPN sitio a sitio y VPN de acceso remoto.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="90.1" y="20.0" dominant-baseline="central" text-anchor="middle">Característica</text>
<text class="tb-ht" x="391.3" y="20.0" dominant-baseline="central" text-anchor="middle">VPN sitio a sitio</text>
<text class="tb-ht" x="901.2" y="20.0" dominant-baseline="central" text-anchor="middle">VPN de acceso remoto</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Objetivo</text>
<text class="tb-tx" x="192.2" y="60.8" dominant-baseline="central">Interconectar redes completas ubicadas en sedes</text>
<text class="tb-tx" x="192.2" y="83.5" dominant-baseline="central">distintas.</text>
<text class="tb-tx" x="614.3" y="72.1" dominant-baseline="central">Conectar un usuario o dispositivo individual con recursos corporativos.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">Extremos del túnel</text>
<text class="tb-tx" x="192.2" y="124.2" dominant-baseline="central">Gateways VPN o routers de ambas sedes.</text>
<text class="tb-tx" x="614.3" y="124.2" dominant-baseline="central">Cliente VPN y gateway o concentrador VPN.</text>
<rect class="tb-te" x="0" y="145.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="165.0" dominant-baseline="central">Alcance</text>
<text class="tb-tx" x="192.2" y="165.0" dominant-baseline="central">Redes completas o subredes autorizadas.</text>
<text class="tb-tx" x="614.3" y="165.0" dominant-baseline="central">Recursos y segmentos permitidos por las políticas de acceso.</text>
<rect class="tb-to" x="0" y="185.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="205.8" dominant-baseline="central">Tecnologías</text>
<text class="tb-tx tb-b" x="12.0" y="228.5" dominant-baseline="central">habituales</text>
<text class="tb-tx" x="192.2" y="205.8" dominant-baseline="central">IPsec en modo túnel, GRE sobre IPsec, OpenVPN o</text>
<text class="tb-tx" x="192.2" y="228.5" dominant-baseline="central">WireGuard.</text>
<text class="tb-tx" x="614.3" y="217.1" dominant-baseline="central">IPsec con IKEv2, VPN basada en TLS, OpenVPN y WireGuard.</text>
<rect class="tb-te" x="0" y="249.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="269.2" dominant-baseline="central">Software en el</text>
<text class="tb-tx tb-b" x="12.0" y="292.0" dominant-baseline="central">usuario</text>
<text class="tb-tx" x="192.2" y="269.2" dominant-baseline="central">Generalmente no requiere un cliente VPN</text>
<text class="tb-tx" x="192.2" y="292.0" dominant-baseline="central">individual en cada dispositivo final.</text>
<text class="tb-tx" x="614.3" y="269.2" dominant-baseline="central">Requiere un cliente instalado o integrado en el sistema operativo, salvo</text>
<text class="tb-tx" x="614.3" y="292.0" dominant-baseline="central">modalidades de portal o acceso sin cliente.</text>
<rect class="tb-to" x="0" y="312.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="344.1" dominant-baseline="central">Uso habitual</text>
<text class="tb-tx" x="192.2" y="332.8" dominant-baseline="central">Conexión permanente entre sucursales y centros</text>
<text class="tb-tx" x="192.2" y="355.5" dominant-baseline="central">de datos.</text>
<text class="tb-tx" x="614.3" y="344.1" dominant-baseline="central">Teletrabajo, acceso de terceros y conexión de usuarios móviles.</text>
<text class="tb-cap" x="600.0" y="402.2" text-anchor="middle">Tabla 9.3. VPN sitio a sitio y VPN de acceso remoto.</text></svg>
</div>

Aunque las VPN de acceso remoto siguen siendo una herramienta central del trabajo distribuido, muchas organizaciones evolucionan hacia arquitecturas *Zero Trust* y ZTNA, donde el acceso se concede de forma más granular y con base en la identidad.

## 9.8 COMPARACIÓN ENTRE IPSEC Y SSL VPN

IPsec y SSL VPN son dos de las tecnologías más usadas para establecer conexiones seguras sobre redes públicas. Las dos ofrecen cifrado, autenticación e integridad, pero difieren bastante en arquitectura, alcance operativo y casos de uso. La elección depende del tipo de usuario, de la infraestructura existente, de los requisitos de seguridad y del nivel de acceso necesario. La Tabla 9.4 reúne las diferencias principales; los apartados siguientes las desarrollan.

<div class="diagram tabla-svg" id="tabla-9-4" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 447" role="img" aria-labelledby="t43-title"><title id="t43-title">Tabla 9.4. Comparación entre IPsec y SSL VPN.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="90.9" y="20.0" dominant-baseline="central" text-anchor="middle">Característica</text>
<text class="tb-ht" x="420.8" y="20.0" dominant-baseline="central" text-anchor="middle">IPsec VPN</text>
<text class="tb-ht" x="929.8" y="20.0" dominant-baseline="central" text-anchor="middle">SSL VPN / VPN basada en TLS</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Capa de operación</text>
<text class="tb-tx" x="193.8" y="72.1" dominant-baseline="central">Protege paquetes IP en la capa de red.</text>
<text class="tb-tx" x="671.7" y="60.8" dominant-baseline="central">Utiliza TLS y puede operar como portal de aplicaciones, proxy o</text>
<text class="tb-tx" x="671.7" y="83.5" dominant-baseline="central">túnel de red, según la implementación.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Cliente</text>
<text class="tb-tx" x="193.8" y="124.2" dominant-baseline="central">Habitualmente requiere configuración o cliente</text>
<text class="tb-tx" x="193.8" y="147.0" dominant-baseline="central">compatible para acceso remoto.</text>
<text class="tb-tx" x="671.7" y="135.6" dominant-baseline="central">Puede ofrecer acceso mediante navegador o cliente específico.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Alcance</text>
<text class="tb-tx" x="193.8" y="187.8" dominant-baseline="central">Puede proporcionar acceso a redes completas o</text>
<text class="tb-tx" x="193.8" y="210.5" dominant-baseline="central">subredes autorizadas.</text>
<text class="tb-tx" x="671.7" y="187.8" dominant-baseline="central">Puede limitarse a aplicaciones concretas o proporcionar un túnel</text>
<text class="tb-tx" x="671.7" y="210.5" dominant-baseline="central">de red completo.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">Facilidad de</text>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">despliegue</text>
<text class="tb-tx" x="193.8" y="251.2" dominant-baseline="central">Requiere configuración de asociaciones de seguridad,</text>
<text class="tb-tx" x="193.8" y="274.0" dominant-baseline="central">políticas y parámetros de red.</text>
<text class="tb-tx" x="671.7" y="251.2" dominant-baseline="central">Puede simplificar el acceso de usuarios y atravesar firewalls con</text>
<text class="tb-tx" x="671.7" y="274.0" dominant-baseline="central">mayor facilidad cuando utiliza HTTPS.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="326.1" dominant-baseline="central">Rendimiento</text>
<text class="tb-tx" x="193.8" y="314.8" dominant-baseline="central">Depende de hardware, algoritmos, aceleración</text>
<text class="tb-tx" x="193.8" y="337.5" dominant-baseline="central">criptográfica, implementación y topología.</text>
<text class="tb-tx" x="671.7" y="314.8" dominant-baseline="central">Depende de hardware, algoritmos, implementación, inspección y</text>
<text class="tb-tx" x="671.7" y="337.5" dominant-baseline="central">modalidad de túnel.</text>
<rect class="tb-to" x="0" y="358.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="378.2" dominant-baseline="central">Casos de uso</text>
<text class="tb-tx" x="193.8" y="378.2" dominant-baseline="central">Sitio a sitio, centros de datos y sucursales.</text>
<text class="tb-tx" x="671.7" y="378.2" dominant-baseline="central">Teletrabajo, terceros, BYOD y acceso controlado a aplicaciones.</text>
<text class="tb-cap" x="600.0" y="425.0" text-anchor="middle">Tabla 9.4. Comparación entre IPsec y SSL VPN.</text></svg>
</div>

### Capa de operación

IPsec funciona en la capa de red y protege directamente paquetes IP, por lo que puede asegurar casi cualquier aplicación o protocolo sin modificaciones adicionales. SSL VPN opera principalmente en las capas de transporte y de aplicación mediante TLS, y da acceso controlado a recursos específicos o a redes completas, según la implementación.

### Facilidad de despliegue

Las SSL VPN suelen requerir menos configuración en el usuario final y atraviesan los *firewalls* con más facilidad gracias al puerto HTTPS. IPsec normalmente exige una configuración más detallada y puede necesitar mecanismos adicionales en entornos con NAT.

### Rendimiento

Ninguna tecnología ofrece siempre el mejor rendimiento: el resultado depende de la implementación, los algoritmos negociados, la aceleración criptográfica, la encapsulación, la MTU y la capacidad de los extremos. IPsec se usa con frecuencia en túneles permanentes y de alto volumen; las soluciones basadas en TLS suelen priorizar la flexibilidad del acceso remoto y pueden dar acceso a aplicaciones concretas o a redes completas, según el producto.

### Casos de uso habituales

- **IPsec:** se emplea habitualmente en VPN sitio a sitio, interconexión de centros de datos, conectividad entre sucursales, infraestructuras empresariales permanentes e integración con *routers* y *firewalls* corporativos.
- **SSL VPN:** se emplea habitualmente en teletrabajo, acceso remoto de terceros, entornos BYOD, acceso seguro a aplicaciones específicas y usuarios externos con dispositivos no gestionados.

### Seguridad

Ambas ofrecen mecanismos criptográficos sólidos cuando se implementan correctamente. La seguridad real depende sobre todo de la calidad de la configuración, la gestión de credenciales y las políticas de acceso.

### Comparación general

IPsec destaca por su alto rendimiento, su integración con la infraestructura de red, su soporte para conexiones permanentes y su amplia adopción empresarial. SSL VPN destaca por la facilidad del acceso remoto, la compatibilidad con redes restrictivas, la menor complejidad para el usuario final y el acceso más granular a los recursos.

Muchas organizaciones usan ambas de forma complementaria: IPsec para interconectar sedes y SSL VPN para usuarios remotos, proveedores o socios. La decisión final debe apoyarse en los requisitos operativos, el modelo de seguridad de la organización y la experiencia de administración disponible.
