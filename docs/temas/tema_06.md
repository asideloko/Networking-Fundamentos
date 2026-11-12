<p class="tema-num">TEMA 06</p>

# ENRUTAMIENTO Y CONECTIVIDAD DE RED

El enrutamiento es el mecanismo que permite interconectar redes distintas y llevar un paquete IP desde su origen hasta un destino que puede estar en otro dominio administrativo o en otro continente. Los *routers* operan en la capa de red (capa 3 del modelo OSI) y deciden por dónde reenviar cada paquete consultando una tabla de enrutamiento, que puede poblarse de forma estática o dinámica según lo que requiera la infraestructura.

Las VLAN del Tema 5 delimitan dominios de *broadcast* que, por sí mismos, no pueden comunicarse entre sí: esa comunicación depende de la capa 3.

Los protocolos de enrutamiento dinámico permiten que la red se adapte sola cuando cambia la topología, mientras que las rutas estáticas ofrecen control preciso en escenarios pequeños o críticos. La tabla de enrutamiento, el *gateway* por defecto y los túneles como GRE completan el conjunto de herramientas con el que se logra que dos redes se comuniquen. La Figura 6.1 presenta el mapa de las secciones del tema.

<div class="diagram" id="figura-6-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g601" viewBox="0 0 1200 412" role="img" aria-labelledby="g601-title">
<title id="g601-title">Mapa del Tema 6</title>
<defs></defs>
<g id="g601-c" transform="translate(20 20)"><rect x="0" y="0" width="272" height="158" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="272" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="136" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">6.1 Principios de enrutamiento</text>
<g transform="translate(136 78.64) scale(0.7)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="136" y="139" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Decisión de reenvío de paquetes</text>
<rect x="296" y="0" width="272" height="158" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="296" y1="34" x2="568" y2="34" stroke="#364e6c" stroke-width="1.5"/>
<text x="432" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">6.2 Rutas estáticas</text>
<g transform="translate(432 78.64) scale(0.7)" data-lib="pin"><path d="M0 30 C-22 4 -24 -4 -24 -12 A24 24 0 0 1 24 -12 C24 -4 22 4 0 30 Z" fill="#ebedf0" stroke="#364e6c" stroke-width="3"></path><circle cx="0" cy="-12" r="8" fill="#364e6c"></circle></g>
<text x="432" y="139" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Configuración manual</text>
<rect x="592" y="0" width="272" height="158" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="592" y1="34" x2="864" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="728" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">6.3 Rutas dinámicas</text>
<g transform="translate(728 78.64) scale(0.7)" data-lib="sync"><g fill="none" stroke="#009254" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 -4 A26 26 0 0 1 20 -16"></path><path d="M24 4 A26 26 0 0 1 -20 16"></path><path d="M12 -22 L22 -16 L14 -8"></path><path d="M-12 22 L-22 16 L-14 8"></path></g></g>
<text x="728" y="139" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Intercambio entre routers</text>
<rect x="888" y="0" width="272" height="158" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="888" y1="34" x2="1160" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="1024" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">6.4 OSPF</text>
<g transform="translate(1024 78.64) scale(0.7)" data-lib="nodes"><g stroke="#7c3aed" stroke-width="3" fill="none"><path d="M0 -22 L-22 14 M0 -22 L22 14 M-22 14 H22"></path></g><circle cx="0" cy="-22" r="9" fill="#decefa" stroke="#7c3aed" stroke-width="3"></circle><circle cx="-22" cy="14" r="9" fill="#decefa" stroke="#7c3aed" stroke-width="3"></circle><circle cx="22" cy="14" r="9" fill="#decefa" stroke="#7c3aed" stroke-width="3"></circle></g>
<text x="1024" y="139" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Protocolo de estado de enlace</text>
<rect x="0" y="182" width="272" height="158" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="0" y1="216" x2="272" y2="216" stroke="#dd3a00" stroke-width="1.5"/>
<text x="136" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">6.5 BGP</text>
<g transform="translate(136 260.64) scale(0.7)" data-lib="globe"><g stroke="#dd3a00" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#fcebe6"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<text x="136" y="311.5" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Enrutamiento entre sistemas</text>
<text x="136" y="330.5" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">autónomos</text>
<rect x="296" y="182" width="272" height="158" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="296" y1="216" x2="568" y2="216" stroke="#003ecc" stroke-width="1.5"/>
<text x="432" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">6.6 Tabla de enrutamiento</text>
<g transform="translate(432 260.64) scale(0.7)" data-lib="table"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><rect x="-36" y="-28" width="72" height="14" fill="#bfcff2" stroke="#003ecc" stroke-width="3"></rect><path d="M-36 0H36M-36 14H36M-8 -14V28" stroke="#003ecc" stroke-width="2"></path></g>
<text x="432" y="321" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Rutas conocidas por el router</text>
<rect x="592" y="182" width="272" height="158" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="592" y1="216" x2="864" y2="216" stroke="#d40000" stroke-width="1.5"/>
<text x="728" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">6.7 Gateway</text>
<g transform="translate(728 260.64) scale(0.7)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#fbe6e6" stroke="#d40000" stroke-width="3"/><g fill="none" stroke="#d40000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="728" y="321" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Salida hacia otras redes</text>
<rect x="888" y="182" width="272" height="158" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="888" y1="216" x2="1160" y2="216" stroke="#7c3aed" stroke-width="1.5"/>
<text x="1024" y="205" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">6.8 GRE</text>
<g transform="translate(1024 260.64) scale(0.7)" data-lib="tunnel"><g stroke="#7c3aed" stroke-width="3"><path d="M-40 -14 H40 M-40 14 H40" fill="none"></path><ellipse cx="-40" cy="0" rx="8" ry="14" fill="#decefa"></ellipse><ellipse cx="40" cy="0" rx="8" ry="14" fill="#f2ebfd"></ellipse></g><path d="M-26 0 H20 M12 -7 l8 7 -8 7" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="1024" y="321" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Túneles de encapsulación</text></g><text x="600" y="394" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 6.1. Mapa del Tema 6.</text></svg>
</div>

## 6.1 PRINCIPIOS DE ENRUTAMIENTO

Cuando un *router* recibe un paquete, no necesita conocer todo el camino hasta el destino: le basta con decidir cuál es el siguiente salto. Para tomar esa decisión utiliza únicamente la dirección IP de destino del encabezado y la tabla de enrutamiento almacenada localmente. La información de esa tabla puede configurarse a mano o aprenderse mediante protocolos de enrutamiento.

De forma general, el proceso de reenvío sigue estos pasos, que resume la Figura 6.2:

<div class="diagram" id="figura-6-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g602" viewBox="0 0 1200 268.565" role="img" aria-labelledby="g602-title">
<title id="g602-title">Proceso de enrutamiento de un paquete IP en siete pasos</title>
<defs><marker id="g602m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g602n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g602-c" transform="translate(-34.058 -9.561) scale(1.0574)"><g transform="translate(0 1)"><circle cx="102.857" cy="34" r="15" fill="#7f1d1d"></circle>
<text x="102.857" y="39" font-size="11.349pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
<rect x="43.8571" y="58" width="118" height="92" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(102.857 104) scale(1)" data-lib="packet"><rect x="-38" y="-20" width="76" height="40" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"></rect><rect x="-38" y="-20" width="26" height="40" fill="#f4bfbf" stroke="#d40000" stroke-width="3"></rect><path d="M-4 -6h30M-4 6h20" stroke="#d40000" stroke-width="3" stroke-linecap="round"></path></g>
<text x="102.857" y="169" font-size="11.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Recibe</text>
<text x="102.857" y="189.231" font-size="9.93pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">el paquete IP en una</text>
<text x="102.857" y="207.085" font-size="9.93pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">interfaz de entrada</text>
<line x1="165.857" y1="104" x2="205.571" y2="104" stroke="#364e6c" stroke-width="2" marker-end="url(#g602m)"></line>
<circle cx="268.571" cy="34" r="15" fill="#1e3a8a"></circle>
<text x="268.571" y="39" font-size="11.349pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
<rect x="209.571" y="58" width="118" height="92" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(268.571 104) scale(1)" data-lib="search"><circle cx="-6" cy="-6" r="20" fill="#e6ecfa" stroke="#003ecc" stroke-width="4"></circle><path d="M9 9 L28 28" stroke="#003ecc" stroke-width="6" stroke-linecap="round"></path></g>
<text x="268.571" y="169" font-size="11.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Examina</text>
<text x="268.571" y="189.231" font-size="9.93pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">la IP de destino</text>
<line x1="331.571" y1="104" x2="371.286" y2="104" stroke="#364e6c" stroke-width="2" marker-end="url(#g602m)"></line>
<circle cx="434.286" cy="34" r="15" fill="#065f46"></circle>
<text x="434.286" y="39" font-size="11.349pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
<rect x="375.286" y="58" width="118" height="92" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(434.286 104) scale(1)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#009254"></circle></g>
<text x="434.286" y="169" font-size="11.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Extrae</text>
<text x="434.286" y="189.231" font-size="9.93pt" font-weight="400" fill="#065f46" text-anchor="middle">la red o subred de la</text>
<text x="434.286" y="207.085" font-size="9.93pt" font-weight="400" fill="#065f46" text-anchor="middle">dirección</text>
<line x1="497.286" y1="104" x2="537" y2="104" stroke="#364e6c" stroke-width="2" marker-end="url(#g602m)"></line>
<circle cx="600" cy="34" r="15" fill="#7c2d12"></circle>
<text x="600" y="39" font-size="11.349pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text>
<rect x="541" y="58" width="118" height="92" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<g transform="translate(600 104) scale(1)" data-lib="table"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></rect><rect x="-36" y="-28" width="72" height="14" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></rect><path d="M-36 0H36M-36 14H36M-8 -14V28" stroke="#dd3a00" stroke-width="2"></path></g>
<text x="600" y="169" font-size="11.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Consulta</text>
<text x="600" y="189.231" font-size="9.93pt" font-weight="400" fill="#7c2d12" text-anchor="middle">la tabla: coincidencia más</text>
<text x="600" y="207.085" font-size="9.93pt" font-weight="400" fill="#7c2d12" text-anchor="middle">específica</text>
<line x1="663" y1="104" x2="702.714" y2="104" stroke="#364e6c" stroke-width="2" marker-end="url(#g602m)"></line>
<circle cx="765.714" cy="34" r="15" fill="#5b21b6"></circle>
<text x="765.714" y="39" font-size="11.349pt" font-weight="700" fill="#ffffff" text-anchor="middle">5</text>
<rect x="706.714" y="58" width="118" height="92" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(765.714 104) scale(1)" data-lib="fork"><g fill="none" stroke="#7c3aed" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-30 0 H-6 L20 -18 M-6 0 L20 18"></path><path d="M12 -26 L22 -18 L12 -10 M12 10 L22 18 L12 26"></path></g><circle cx="-30" cy="0" r="5" fill="#7c3aed"></circle></g>
<text x="765.714" y="169" font-size="11.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Determina</text>
<text x="765.714" y="189.231" font-size="9.93pt" font-weight="400" fill="#5b21b6" text-anchor="middle">interfaz de salida y</text>
<text x="765.714" y="207.085" font-size="9.93pt" font-weight="400" fill="#5b21b6" text-anchor="middle">siguiente salto</text>
<line x1="828.714" y1="104" x2="868.429" y2="104" stroke="#364e6c" stroke-width="2" marker-end="url(#g602m)"></line>
<circle cx="931.429" cy="34" r="15" fill="#1e3a5f"></circle>
<text x="931.429" y="39" font-size="11.349pt" font-weight="700" fill="#ffffff" text-anchor="middle">6</text>
<rect x="872.429" y="58" width="118" height="92" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"></rect>
<g transform="translate(931.429 104) scale(1)" data-lib="clock"><circle cx="0" cy="0" r="28" fill="#ebedf0" stroke="#364e6c" stroke-width="3"></circle><path d="M0 -16 V0 L12 8" fill="none" stroke="#364e6c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="931.429" y="169" font-size="11.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Disminuye</text>
<text x="931.429" y="189.231" font-size="9.93pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">el TTL y recalcula el</text>
<text x="931.429" y="207.085" font-size="9.93pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">checksum IPv4</text>
<line x1="994.429" y1="104" x2="1034.14" y2="104" stroke="#364e6c" stroke-width="2" marker-end="url(#g602m)"></line>
<circle cx="1097.14" cy="34" r="15" fill="#7f1d1d"></circle>
<text x="1097.14" y="39" font-size="11.349pt" font-weight="700" fill="#ffffff" text-anchor="middle">7</text>
<rect x="1038.14" y="58" width="118" height="92" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(1097.14 104) scale(0.8)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#d40000" stroke-width="3"></circle><circle r="34" fill="#fbe6e6"></circle><g stroke="#d40000" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="1097.14" y="169" font-size="11.349pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Reenvía</text>
<text x="1097.14" y="189.231" font-size="9.93pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">hacia el siguiente</text>
<text x="1097.14" y="207.085" font-size="9.93pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">router o el destino</text>
</g></g><text x="600" y="252.199" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 6.2. Proceso de enrutamiento de un paquete IP en siete pasos.</text></svg>
</div>

1. El *router* recibe un paquete IP por una interfaz de entrada.
2. Examina la dirección IP de destino del encabezado.
3. Busca en su tabla de enrutamiento la entrada que coincida con el destino. Si hay varias, elige la más específica, es decir, la de prefijo más largo (*Longest Prefix Match*; se estudia en la sección 6.6).
4. Determina la interfaz de salida y la dirección del siguiente salto (*next hop*).
5. Disminuye en uno el campo TTL (*Hop Limit* en IPv6) y, en IPv4, recalcula la suma de verificación (*checksum*) del encabezado.
6. Resuelve la dirección MAC del siguiente salto mediante ARP (IPv4) o *Neighbor Discovery* (IPv6), como se describió en el Tema 1.
7. Reenvía la trama por la interfaz de salida hacia el siguiente *router* o hacia el destino final.

Este recorrido puede observarse en la práctica con *traceroute*. Cada línea de la salida corresponde a un salto, y el TTL va aumentando de uno en uno para que cada *router* intermedio revele su dirección.

```text
Networking@SecOpsMX:~$ traceroute -n 192.168.20.100
traceroute to 192.168.20.100 (192.168.20.100), 30 hops max, 60 byte packets
 1 10.0.0.2 0.512 ms 0.489 ms 0.476 ms
 2 192.168.20.100 1.234 ms 1.198 ms 1.187 ms
```

En este ejemplo el paquete atraviesa un único *router* (10.0.0.2) antes de llegar al destino. Los tres tiempos de cada línea son las tres sondas que *traceroute* envía por salto.

### Conceptos fundamentales en el enrutamiento

Antes de configurar nada conviene fijar un vocabulario común. La Tabla 6.1 resume los conceptos básicos que se emplean a lo largo del tema.

<div class="diagram tabla-svg" id="tabla-6-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 406" role="img" aria-labelledby="t21-title"><title id="t21-title">Tabla 6.1. Conceptos fundamentales del enrutamiento.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="87.2" y="20.0" dominant-baseline="central" text-anchor="middle">Concepto</text>
<text class="tb-ht" x="501.6" y="20.0" dominant-baseline="central" text-anchor="middle">Descripción</text>
<text class="tb-ht" x="1014.5" y="20.0" dominant-baseline="central" text-anchor="middle">Elementos o ejemplos</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Ruta</text>
<text class="tb-tx" x="186.4" y="72.1" dominant-baseline="central">Entrada de la tabla de enrutamiento que indica cómo alcanzar una red destino.</text>
<text class="tb-tx" x="840.9" y="60.8" dominant-baseline="central">Red destino y prefijo, siguiente salto o</text>
<text class="tb-tx" x="840.9" y="83.5" dominant-baseline="central">interfaz de salida y métrica.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">Tabla de</text>
<text class="tb-tx tb-b" x="12.0" y="147.0" dominant-baseline="central">enrutamiento</text>
<text class="tb-tx" x="186.4" y="124.2" dominant-baseline="central">Estructura de datos del router que almacena las rutas conocidas y sus</text>
<text class="tb-tx" x="186.4" y="147.0" dominant-baseline="central">atributos.</text>
<text class="tb-tx" x="840.9" y="124.2" dominant-baseline="central">Rutas conectadas, estáticas, dinámicas y</text>
<text class="tb-tx" x="840.9" y="147.0" dominant-baseline="central">por defecto.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">Gateway por</text>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">defecto</text>
<text class="tb-tx" x="186.4" y="187.8" dominant-baseline="central">Ruta utilizada cuando no existe una coincidencia más específica para el</text>
<text class="tb-tx" x="186.4" y="210.5" dominant-baseline="central">destino.</text>
<text class="tb-tx" x="840.9" y="199.1" dominant-baseline="central">0.0.0.0/0 en IPv4; ::/0 en IPv6.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">Enrutamiento</text>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">directo</text>
<text class="tb-tx" x="186.4" y="251.2" dominant-baseline="central">El destino pertenece a una red conectada directamente al router. El router</text>
<text class="tb-tx" x="186.4" y="274.0" dominant-baseline="central">resuelve la dirección de enlace del destino mediante ARP o ND.</text>
<text class="tb-tx" x="840.9" y="262.6" dominant-baseline="central">Entrega directa a la interfaz de destino.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="314.8" dominant-baseline="central">Enrutamiento</text>
<text class="tb-tx tb-b" x="12.0" y="337.5" dominant-baseline="central">indirecto</text>
<text class="tb-tx" x="186.4" y="314.8" dominant-baseline="central">El destino no pertenece a una red conectada directamente. El paquete se</text>
<text class="tb-tx" x="186.4" y="337.5" dominant-baseline="central">reenvía al siguiente salto.</text>
<text class="tb-tx" x="840.9" y="314.8" dominant-baseline="central">Resolución de la dirección MAC del</text>
<text class="tb-tx" x="840.9" y="337.5" dominant-baseline="central">siguiente router mediante ARP o ND.</text>
<text class="tb-cap" x="600.0" y="384.2" text-anchor="middle">Tabla 6.1. Conceptos fundamentales del enrutamiento.</text></svg>
</div>

#### Ruta

Una ruta indica cómo alcanzar un prefijo de destino. Según el sistema, puede incluir el prefijo, el siguiente salto, la interfaz de salida, una métrica y otros atributos. La distancia administrativa, que se trata en la sección 6.6, es propia de determinadas plataformas y no debe confundirse con la métrica.

#### Enrutamiento directo e indirecto

Si el destino está en una red conectada directamente a una interfaz del *router*, este resuelve su dirección MAC (por ARP o *Neighbor Discovery*) y entrega el paquete directamente. Si no, lo reenvía a otro *router* que esté más cerca del destino; en ese caso se habla de entrega indirecta.

#### Ruta por defecto y *gateway* por defecto

La ruta por defecto (0.0.0.0/0 en IPv4, ::/0 en IPv6) es la que se utiliza cuando ninguna otra coincide con el destino. El *gateway* por defecto es el siguiente salto asociado a esa ruta: la dirección IP del *router* al que un dispositivo final envía todo el tráfico destinado a redes externas.

## 6.2 RUTAS ESTÁTICAS

La forma más directa de implementar el enrutamiento consiste en escribir manualmente las rutas en la tabla de cada *router*. Estas rutas, llamadas estáticas, no cambian a menos que un administrador las modifique. Cada una indica una red de destino, su máscara o longitud de prefijo y el siguiente salto (la IP del *gateway*) o la interfaz de salida.

### Sintaxis típica de una ruta estática

En *Linux* se usa *iproute2*. Antes de que un equipo *Linux* reenvíe paquetes entre sus interfaces, hay que comprobar que el reenvío IP está activo; de lo contrario, descartará el tráfico que no esté dirigido a él.

```text
Networking@SecOpsMX:~$ sysctl net.ipv4.ip_forward
net.ipv4.ip_forward = 0
Networking@SecOpsMX:~$ sudo sysctl -w net.ipv4.ip_forward=1
net.ipv4.ip_forward = 1
Networking@SecOpsMX:~$ sudo ip route add 192.168.10.0/24 via 10.0.0.1 dev eth1
```

Esta configuración desaparece al reiniciar. Para hacerla persistente, la ruta se declara en el sistema de red de la distribución (por ejemplo, *netplan*, *NetworkManager* o *systemd-networkd*) y el reenvío en un archivo dentro de /etc/sysctl.d/.

##### Cisco IOS

```text
Router(config)# ip route 192.168.10.0 255.255.255.0 10.0.0.1
```

### Verificación de las rutas configuradas

En *Linux*, el comando *ip route show* lista la tabla principal. La columna *proto* indica quién instaló cada ruta: *kernel* para redes conectadas, *static* para las manuales.

```text
Networking@SecOpsMX:~$ ip route show
default via 192.168.1.1 dev eth0 proto static
10.0.0.0/24 dev eth1 proto kernel scope link src 10.0.0.254
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.10
192.168.10.0/24 via 10.0.0.1 dev eth1 proto static
192.168.20.0/24 via 10.0.0.2 dev eth1 proto static
```

##### Cisco IOS

```text
Router# show ip route static
```

```text
Gateway of last resort is 192.168.1.1 to network 0.0.0.0
 
S*   0.0.0.0/0 [1/0] via 192.168.1.1
S    192.168.10.0/24 [1/0] via 10.0.0.1
S    192.168.20.0/24 [1/0] via 10.0.0.2
```

Las cifras entre corchetes son [distancia administrativa/métrica]: 1 es la distancia administrativa de una ruta estática y 0 su métrica.

### Rutas estáticas hacia una interfaz de túnel

Una ruta estática también puede apuntar a una interfaz en lugar de a un siguiente salto. Es lo habitual con túneles, como una interfaz VTI de IPsec.

```text
Networking@SecOpsMX:~$ sudo ip route add 172.16.0.0/16 dev vti0
Networking@SecOpsMX:~$ ip route show | grep 172.16
172.16.0.0/16 dev vti0 scope link
```

##### Cisco IOS

```text
Router(config)# ip route 172.16.0.0 255.255.0.0 Tunnel0
```

### Características de las rutas estáticas

- Configuración manual: el administrador debe agregar, modificar o eliminar cada ruta de forma explícita.
- Bajo consumo de recursos: no generan tráfico de actualización ni consumen CPU en cálculos de protocolo.
- Sin adaptación automática: si un enlace falla, la ruta permanece en la tabla y el tráfico se pierde hasta que alguien intervenga, salvo que se complemente con mecanismos de monitoreo como *tracking* o IP SLA.
- Útiles en redes pequeñas o controladas: topologías simples, rutas por defecto hacia un ISP o rutas de resumen en diseños jerárquicos.

### Ruta por defecto estática

Es la ruta 0.0.0.0/0 (IPv4) o ::/0 (IPv6): captura todo el tráfico cuyo destino no coincida con una ruta más específica. Es típica en los equipos de borde que salen hacia un ISP.

```text
Networking@SecOpsMX:~$ sudo ip route add default via 203.0.113.1 dev eth0
```

##### Cisco IOS

```text
Router(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1
```

### Ruta estática flotante

Una ruta estática puede servir como respaldo de otra si se le asigna un valor mayor de métrica (en *Linux*) o de distancia administrativa (en *Cisco IOS*). Mientras la ruta principal esté activa, la de respaldo permanece en la tabla sin utilizarse. Por ejemplo, la siguiente ruta solo entrará en juego si desaparece la que apunta a 10.0.0.1:

```text
Networking@SecOpsMX:~$ sudo ip route add 192.168.10.0/24 via 10.0.0.9 dev eth2 metric 200
```

##### Cisco IOS

```text
Router(config)# ip route 192.168.10.0 255.255.255.0 10.0.0.9 200
```

Las rutas estáticas son predecibles y no pueden ser alteradas por anuncios maliciosos de un protocolo de enrutamiento; sin embargo, no escalan a redes medianas o grandes, donde mantenerlas a mano se vuelve inviable. La Tabla 6.2 compara este enfoque con el aprendizaje automático mediante protocolos dinámicos.

<div class="diagram tabla-svg" id="tabla-6-2" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 556" role="img" aria-labelledby="t22-title"><title id="t22-title">Tabla 6.2. Comparación entre rutas estáticas y dinámicas.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="84.6" y="20.0" dominant-baseline="central" text-anchor="middle">Característica</text>
<text class="tb-ht" x="469.9" y="20.0" dominant-baseline="central" text-anchor="middle">Rutas estáticas</text>
<text class="tb-ht" x="985.3" y="20.0" dominant-baseline="central" text-anchor="middle">Rutas dinámicas</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Configuración</text>
<text class="tb-tx" x="181.2" y="72.1" dominant-baseline="central">Se introducen manualmente por el administrador.</text>
<text class="tb-tx" x="782.7" y="60.8" dominant-baseline="central">Se aprenden e intercambian mediante protocolos</text>
<text class="tb-tx" x="782.7" y="83.5" dominant-baseline="central">de enrutamiento.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">Adaptación a</text>
<text class="tb-tx tb-b" x="12.0" y="147.0" dominant-baseline="central">cambios</text>
<text class="tb-tx" x="181.2" y="124.2" dominant-baseline="central">No se adaptan automáticamente a cambios de topología, salvo que se</text>
<text class="tb-tx" x="181.2" y="147.0" dominant-baseline="central">complementen con mecanismos como tracking o IP SLA.</text>
<text class="tb-tx" x="782.7" y="124.2" dominant-baseline="central">Pueden recalcular y actualizar rutas ante cambios</text>
<text class="tb-tx" x="782.7" y="147.0" dominant-baseline="central">detectados en la topología.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">Consumo de</text>
<text class="tb-tx tb-b" x="12.0" y="210.5" dominant-baseline="central">recursos</text>
<text class="tb-tx" x="181.2" y="187.8" dominant-baseline="central">No generan tráfico de actualización ni cálculos propios de un protocolo</text>
<text class="tb-tx" x="181.2" y="210.5" dominant-baseline="central">dinámico.</text>
<text class="tb-tx" x="782.7" y="187.8" dominant-baseline="central">Requieren recursos de CPU, memoria y tráfico de</text>
<text class="tb-tx" x="782.7" y="210.5" dominant-baseline="central">control.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="262.6" dominant-baseline="central">Escalabilidad</text>
<text class="tb-tx" x="181.2" y="251.2" dominant-baseline="central">Adecuadas para redes pequeñas, rutas por defecto y escenarios</text>
<text class="tb-tx" x="181.2" y="274.0" dominant-baseline="central">controlados.</text>
<text class="tb-tx" x="782.7" y="251.2" dominant-baseline="central">Adecuadas para redes medianas y grandes con</text>
<text class="tb-tx" x="782.7" y="274.0" dominant-baseline="central">múltiples rutas y cambios de topología.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="326.1" dominant-baseline="central">Convergencia</text>
<text class="tb-tx" x="181.2" y="314.8" dominant-baseline="central">No tienen convergencia dinámica; la recuperación depende de la</text>
<text class="tb-tx" x="181.2" y="337.5" dominant-baseline="central">configuración y de mecanismos complementarios.</text>
<text class="tb-tx" x="782.7" y="314.8" dominant-baseline="central">Depende del protocolo, la topología, los</text>
<text class="tb-tx" x="782.7" y="337.5" dominant-baseline="central">temporizadores y la implementación.</text>
<rect class="tb-to" x="0" y="358.2" width="1200" height="86.2"/>
<text class="tb-tx tb-b" x="12.0" y="401.0" dominant-baseline="central">Seguridad</text>
<text class="tb-tx" x="181.2" y="378.2" dominant-baseline="central">No reciben actualizaciones de protocolos de enrutamiento, pero pueden</text>
<text class="tb-tx" x="181.2" y="401.0" dominant-baseline="central">verse afectadas por errores de configuración o compromiso del</text>
<text class="tb-tx" x="181.2" y="423.8" dominant-baseline="central">dispositivo.</text>
<text class="tb-tx" x="782.7" y="378.2" dominant-baseline="central">Requieren autenticación, filtrado y políticas de</text>
<text class="tb-tx" x="782.7" y="401.0" dominant-baseline="central">control de anuncios cuando el protocolo lo</text>
<text class="tb-tx" x="782.7" y="423.8" dominant-baseline="central">permite.</text>
<rect class="tb-te" x="0" y="444.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="475.9" dominant-baseline="central">Administración</text>
<text class="tb-tx" x="181.2" y="475.9" dominant-baseline="central">Requieren mantenimiento manual de las entradas.</text>
<text class="tb-tx" x="782.7" y="464.5" dominant-baseline="central">Automatizan el intercambio y la actualización de</text>
<text class="tb-tx" x="782.7" y="487.2" dominant-baseline="central">información de alcanzabilidad.</text>
<text class="tb-cap" x="600.0" y="534.0" text-anchor="middle">Tabla 6.2. Comparación entre rutas estáticas y dinámicas.</text></svg>
</div>

## 6.3 RUTAS DINÁMICAS

En redes más complejas, los *routers* deben adaptar sus rutas ante fallos de enlace o la incorporación de nuevos equipos. Mediante los protocolos dinámicos, los *routers* intercambian información de alcanzabilidad y recalculan rutas sin que el administrador modifique cada entrada. Esto aporta adaptabilidad, escalabilidad y automatización. La Figura 6.3 clasifica estos protocolos según su alcance y su forma de operar.

<div class="diagram" id="figura-6-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g603" viewBox="0 0 1200 412.463" role="img" aria-labelledby="g603-title">
<title id="g603-title">Clasificación de los protocolos de enrutamiento dinámico</title>
<defs><marker id="g603m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g603n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g603-c" transform="translate(-34.985 -9.578) scale(1.0583)"><g transform="translate(0 4.8)"><g transform="translate(600 36) scale(0.8)" data-lib="fork"><g fill="none" stroke="#364e6c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-30 0 H-6 L20 -18 M-6 0 L20 18"></path><path d="M12 -26 L22 -18 L12 -10 M12 10 L22 18 L12 26"></path></g><circle cx="-30" cy="0" r="5" fill="#364e6c"></circle></g>
<text x="600" y="88.8" font-size="11.339pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Protocolos de enrutamiento dinámico</text>
<path d="M600 100 L600 118 L256 118 L256 134" fill="none" stroke="#364e6c" stroke-width="2" stroke-linejoin="round" marker-end="url(#g603m)"></path>
<path d="M600 100 L600 118 L832 118 L832 134" fill="none" stroke="#364e6c" stroke-width="2" stroke-linejoin="round" marker-end="url(#g603m)"></path>
<rect x="116" y="136" width="280" height="28" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="256" y="154.9" font-size="9.922pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Según su alcance</text>
<rect x="692" y="136" width="280" height="28" rx="4" fill="#bfe4d4" stroke="#009254" stroke-width="1.6"></rect>
<text x="832" y="154.9" font-size="9.922pt" font-weight="700" fill="#065f46" text-anchor="middle">Según su forma de operar</text>
<path d="M256 164 L256 178 L144 178 L144 196" fill="none" stroke="#364e6c" stroke-width="2" stroke-linejoin="round" marker-end="url(#g603m)"></path>
<path d="M256 164 L256 178 L368 178 L368 196" fill="none" stroke="#364e6c" stroke-width="2" stroke-linejoin="round" marker-end="url(#g603m)"></path>
<path d="M832 164 L832 178 L608 178 L608 196" fill="none" stroke="#364e6c" stroke-width="2" stroke-linejoin="round" marker-end="url(#g603m)"></path>
<path d="M832 164 L832 178 L832 196" fill="none" stroke="#364e6c" stroke-width="2" stroke-linejoin="round" marker-end="url(#g603m)"></path>
<path d="M832 164 L832 178 L1056 178 L1056 196" fill="none" stroke="#364e6c" stroke-width="2" stroke-linejoin="round" marker-end="url(#g603m)"></path>
<rect x="44" y="198" width="200" height="84" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(144 240) scale(0.9)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#003ecc"></rect></g>
<text x="144" y="301" font-size="11.339pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IGP</text>
<text x="144" y="321.231" font-size="9.922pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Dentro de un sistema autónomo:</text>
<text x="144" y="339.085" font-size="9.922pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">RIP, EIGRP, OSPF, IS-IS</text>
<rect x="268" y="198" width="200" height="84" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(368 240) scale(0.9)" data-lib="globe"><g stroke="#7c3aed" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#f2ebfd"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<text x="368" y="301" font-size="11.339pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">EGP</text>
<text x="368" y="321.231" font-size="9.922pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Entre sistemas autónomos: BGP</text>
<rect x="508" y="198" width="200" height="84" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(608 240) scale(0.9)" data-lib="table"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><rect x="-36" y="-28" width="72" height="14" fill="#bfe4d4" stroke="#009254" stroke-width="3"></rect><path d="M-36 0H36M-36 14H36M-8 -14V28" stroke="#009254" stroke-width="2"></path></g>
<text x="608" y="301" font-size="11.339pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Vector de distancias</text>
<text x="608" y="321.231" font-size="9.922pt" font-weight="400" fill="#065f46" text-anchor="middle">Envía su tabla a los vecinos;</text>
<text x="608" y="339.085" font-size="9.922pt" font-weight="400" fill="#065f46" text-anchor="middle">convergencia lenta</text>
<rect x="732" y="198" width="200" height="84" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<g transform="translate(832 240) scale(0.9)" data-lib="nodes"><g stroke="#dd3a00" stroke-width="3" fill="none"><path d="M0 -22 L-22 14 M0 -22 L22 14 M-22 14 H22"></path></g><circle cx="0" cy="-22" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle><circle cx="-22" cy="14" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle><circle cx="22" cy="14" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle></g>
<text x="832" y="301" font-size="11.339pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Estado de enlace</text>
<text x="832" y="321.231" font-size="9.922pt" font-weight="400" fill="#7c2d12" text-anchor="middle">LSDB y Dijkstra: OSPF, IS-IS</text>
<rect x="956" y="198" width="200" height="84" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(1056 240) scale(0.9)" data-lib="gear"><g fill="#d40000"><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(0)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(45)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(90)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(135)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(180)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(225)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(270)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(315)"></rect></g><circle cx="0" cy="0" r="19" fill="#ffffff" stroke="#d40000" stroke-width="4"></circle><circle cx="0" cy="0" r="7" fill="#f4bfbf" stroke="#d40000" stroke-width="3"></circle></g>
<text x="1056" y="301" font-size="11.339pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Híbrido</text>
<text x="1056" y="321.231" font-size="9.922pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Vector de distancia avanzado:</text>
<text x="1056" y="339.085" font-size="9.922pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">EIGRP</text>
</g></g><text x="600" y="396.100" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 6.3. Clasificación de los protocolos de enrutamiento dinámico.</text></svg>
</div>

### Clasificación según su alcance

#### IGP

Los protocolos de pasarela interior (IGP, *Interior Gateway Protocol*) operan dentro de un único sistema autónomo (AS), es decir, dentro de una organización o dominio administrativo. Algunos ejemplos son RIP, EIGRP, OSPF e IS-IS.

#### EGP

Los protocolos de pasarela exterior (EGP, *Exterior Gateway Protocol*) intercambian rutas entre distintos sistemas autónomos. El único protocolo de este tipo en uso actualmente es BGP (*Border Gateway Protocol*).

### Según su forma de operar

#### Protocolos de vector de distancias

Intercambian información de rutas con sus vecinos. En protocolos clásicos como RIP se anuncian periódicamente las rutas y sus métricas; mecanismos como *split horizon*, *route poisoning* y *hold-down* ayudan a reducir los bucles, aunque la convergencia puede ser lenta. EIGRP se clasifica con más precisión como un protocolo avanzado de vector de distancia: utiliza el algoritmo DUAL y ofrece convergencia rápida. Algunos textos introductorios lo llaman «híbrido», pero esa etiqueta no es una clasificación técnica universal.

#### Protocolos de estado de enlace

Cada *router* construye una base de datos de estado de enlace (LSDB) con la topología completa del área y ejecuta el algoritmo SPF de Dijkstra para calcular sus rutas. Este enfoque logra una convergencia eficiente y un cálculo consistente de caminos, aunque durante la convergencia pueden existir bucles transitorios.

Elegir un protocolo dinámico exige comparar su tipo, su mecanismo de cálculo y el contexto en que se usa; la Tabla 6.3 pone en paralelo RIP, EIGRP, OSPF, IS-IS y BGP con ese fin.

<div class="diagram tabla-svg" id="tabla-6-3" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 361" role="img" aria-labelledby="t23-title"><title id="t23-title">Tabla 6.3. Protocolos de enrutamiento dinámico: alcance y forma de operar.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="63.5"/>
<text class="tb-ht" x="51.6" y="31.4" dominant-baseline="central" text-anchor="middle">Protocolo</text>
<text class="tb-ht" x="132.7" y="31.4" dominant-baseline="central" text-anchor="middle">Tipo</text>
<text class="tb-ht" x="263.7" y="20.0" dominant-baseline="central" text-anchor="middle">Algoritmo o</text>
<text class="tb-ht" x="263.7" y="42.8" dominant-baseline="central" text-anchor="middle">mecanismo</text>
<text class="tb-ht" x="782.5" y="31.4" dominant-baseline="central" text-anchor="middle">Características y uso habitual</text>
<rect class="tb-te" x="0" y="63.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">RIP</text>
<text class="tb-tx" x="115.2" y="83.5" dominant-baseline="central">IGP</text>
<text class="tb-tx" x="174.2" y="83.5" dominant-baseline="central">Vector de distancias</text>
<text class="tb-tx" x="377.1" y="83.5" dominant-baseline="central">Utiliza el número de saltos como métrica; limitado a 15 saltos útiles.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">EIGRP</text>
<text class="tb-tx" x="115.2" y="135.6" dominant-baseline="central">IGP</text>
<text class="tb-tx" x="174.2" y="124.2" dominant-baseline="central">Vector de distancias</text>
<text class="tb-tx" x="174.2" y="147.0" dominant-baseline="central">avanzado</text>
<text class="tb-tx" x="377.1" y="124.2" dominant-baseline="central">Utiliza DUAL y métricas compuestas; es una tecnología asociada principalmente a entornos Cisco,</text>
<text class="tb-tx" x="377.1" y="147.0" dominant-baseline="central">aunque existen implementaciones y compatibilidades específicas.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">OSPF</text>
<text class="tb-tx" x="115.2" y="187.8" dominant-baseline="central">IGP</text>
<text class="tb-tx" x="174.2" y="187.8" dominant-baseline="central">Estado de enlace</text>
<text class="tb-tx" x="377.1" y="187.8" dominant-baseline="central">Construye una LSDB y calcula rutas mediante SPF; utiliza áreas y el área 0 como backbone.</text>
<rect class="tb-to" x="0" y="208.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="228.5" dominant-baseline="central">IS-IS</text>
<text class="tb-tx" x="115.2" y="228.5" dominant-baseline="central">IGP</text>
<text class="tb-tx" x="174.2" y="228.5" dominant-baseline="central">Estado de enlace</text>
<text class="tb-tx" x="377.1" y="228.5" dominant-baseline="central">Utiliza niveles jerárquicos y es habitual en redes troncales de operadores.</text>
<rect class="tb-te" x="0" y="249.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="280.6" dominant-baseline="central">BGP</text>
<text class="tb-tx" x="115.2" y="280.6" dominant-baseline="central">EGP</text>
<text class="tb-tx" x="174.2" y="269.2" dominant-baseline="central">Vector de rutas (path</text>
<text class="tb-tx" x="174.2" y="292.0" dominant-baseline="central">vector)</text>
<text class="tb-tx" x="377.1" y="280.6" dominant-baseline="central">Intercambia rutas entre sistemas autónomos y selecciona caminos mediante atributos y políticas.</text>
<text class="tb-cap" x="600.0" y="338.8" text-anchor="middle">Tabla 6.3. Protocolos de enrutamiento dinámico: alcance y forma de operar.</text></svg>
</div>

### Ventajas del enrutamiento dinámico

#### Automatización

No requiere intervención del administrador ante cambios de topología, salvo la configuración inicial del protocolo.

#### Adaptabilidad

Ante un fallo, los *routers* convergen hacia nuevas rutas en segundos o, en configuraciones poco ajustadas, en minutos.

#### Balanceo de carga

Muchos protocolos pueden distribuir el tráfico entre varias rutas de igual costo (ECMP, *Equal-Cost Multi-Path*).

## 6.4 OSPF

OSPF (*Open Shortest Path First*) es un protocolo IGP de estado de enlace. Calcula rutas con el algoritmo SPF, basado en Dijkstra, y admite una arquitectura jerárquica mediante áreas. Está definido en el RFC 2328 para IPv4 (OSPFv2) y en el RFC 5340 para IPv6 (OSPFv3), y es uno de los protocolos más utilizados en redes empresariales y de proveedores. El tiempo de convergencia depende del diseño, de los temporizadores, de la escala y de la implementación, por lo que no puede considerarse un valor garantizado.

Los *routers* OSPF descubren a sus vecinos con mensajes Hello que se envían a la dirección *multicast* 224.0.0.5 y viajan directamente sobre IP, con el protocolo número 89. En redes Ethernet, el intervalo *Hello* predeterminado es de 10 segundos y el *Dead Interval*, de 40. Esta organización jerárquica en áreas se representa en la Figura 6.4.

<div class="diagram" id="figura-6-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g604" viewBox="0 0 1200 369.553" role="img" aria-labelledby="g604-title">
<title id="g604-title">Áreas OSPF: área 0 (backbone) y routers de borde de área (ABR)</title>
<defs><marker id="g604m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g604n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g604-c" transform="translate(-8.809 -8.770) scale(1.0147)"><g transform="translate(0 0)"><rect x="20" y="20" width="340" height="230" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<text x="190" y="44" font-size="13.797pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Área 1</text>
<g transform="translate(110 100) scale(0.496)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<g transform="translate(270 100) scale(0.496)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<line x1="148" y1="100" x2="232" y2="100" stroke="#003ecc" stroke-width="2"></line>
<g transform="translate(190 185) scale(0.5)" data-lib="db"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><path d="M-30 -24 V24 C-30 36 30 36 30 24 V-24"></path><ellipse cx="0" cy="-24" rx="30" ry="11" fill="#e6ecfa"></ellipse><path d="M-30 -4 C-30 8 30 8 30 -4" fill="none"></path><path d="M-30 14 C-30 26 30 26 30 14" fill="none"></path></g></g>
<text x="190" y="228" font-size="10.348pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">LSDB completa del área</text>
<rect x="430" y="20" width="340" height="230" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<text x="600" y="44" font-size="13.797pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Área 0 · backbone</text>
<g transform="translate(520 100) scale(0.496)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#009254" stroke-width="3"></circle><circle r="34" fill="#e6f4ee"></circle><g stroke="#009254" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<g transform="translate(680 100) scale(0.496)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#009254" stroke-width="3"></circle><circle r="34" fill="#e6f4ee"></circle><g stroke="#009254" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<line x1="558" y1="100" x2="642" y2="100" stroke="#009254" stroke-width="2"></line>
<g transform="translate(600 185) scale(0.5)" data-lib="db"><g stroke="#009254" stroke-width="3" fill="#ffffff"><path d="M-30 -24 V24 C-30 36 30 36 30 24 V-24"></path><ellipse cx="0" cy="-24" rx="30" ry="11" fill="#e6f4ee"></ellipse><path d="M-30 -4 C-30 8 30 8 30 -4" fill="none"></path><path d="M-30 14 C-30 26 30 26 30 14" fill="none"></path></g></g>
<text x="600" y="228" font-size="10.348pt" font-weight="400" fill="#065f46" text-anchor="middle">LSDB completa del área</text>
<rect x="840" y="20" width="340" height="230" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<text x="1010" y="44" font-size="13.797pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Área 2</text>
<g transform="translate(930 100) scale(0.496)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#7c3aed" stroke-width="3"></circle><circle r="34" fill="#f2ebfd"></circle><g stroke="#7c3aed" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<g transform="translate(1090 100) scale(0.496)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#7c3aed" stroke-width="3"></circle><circle r="34" fill="#f2ebfd"></circle><g stroke="#7c3aed" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<line x1="968" y1="100" x2="1052" y2="100" stroke="#7c3aed" stroke-width="2"></line>
<g transform="translate(1010 185) scale(0.5)" data-lib="db"><g stroke="#7c3aed" stroke-width="3" fill="#ffffff"><path d="M-30 -24 V24 C-30 36 30 36 30 24 V-24"></path><ellipse cx="0" cy="-24" rx="30" ry="11" fill="#f2ebfd"></ellipse><path d="M-30 -4 C-30 8 30 8 30 -4" fill="none"></path><path d="M-30 14 C-30 26 30 26 30 14" fill="none"></path></g></g>
<text x="1010" y="228" font-size="10.348pt" font-weight="400" fill="#5b21b6" text-anchor="middle">LSDB completa del área</text>
<g transform="translate(395 160) scale(0.56)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></circle><circle r="34" fill="#fcebe6"></circle><g stroke="#dd3a00" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<rect x="371" y="190" width="48" height="22" rx="4" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.6"></rect>
<text x="395" y="205.67" font-size="10.348pt" font-weight="700" fill="#7c2d12" text-anchor="middle">ABR</text>
<g transform="translate(805 160) scale(0.56)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></circle><circle r="34" fill="#fcebe6"></circle><g stroke="#dd3a00" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<rect x="781" y="190" width="48" height="22" rx="4" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.6"></rect>
<text x="805" y="205.67" font-size="10.348pt" font-weight="700" fill="#7c2d12" text-anchor="middle">ABR</text>
<line x1="300" y1="118" x2="370" y2="150" stroke="#003ecc" stroke-width="2"></line>
<line x1="465" y1="118" x2="420" y2="150" stroke="#009254" stroke-width="2"></line>
<line x1="710" y1="118" x2="780" y2="150" stroke="#009254" stroke-width="2"></line>
<line x1="915" y1="118" x2="832" y2="150" stroke="#7c3aed" stroke-width="2"></line>
<rect x="20" y="282" width="1160" height="38.646" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="306.573" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Los ABR resumen la información entre áreas: se reduce la carga de cálculo y de memoria</text>
</g></g><text x="600" y="353.209" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 6.4. Áreas OSPF: área 0 (backbone) y routers de borde de área (ABR).</text></svg>
</div>

### Métrica

OSPF utiliza el costo como métrica. Se calcula como el cociente entre un ancho de banda de referencia y el ancho de banda de la interfaz: **costo = ancho de banda de referencia / ancho de banda del enlace**. Con el valor de referencia predeterminado de 100 Mb/s, cualquier interfaz de 100 Mb/s o más obtiene el costo mínimo, 1. Por eso, en redes con enlaces de 1 Gb/s, 10 Gb/s o superiores, el protocolo no logra distinguir entre ellos por velocidad. La Tabla 6.4 muestra el efecto de ajustar la referencia.

<div class="diagram tabla-svg" id="tabla-6-4" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 211" role="img" aria-labelledby="t24-title"><title id="t24-title">Tabla 6.4. Costo OSPF según el ancho de banda de referencia.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="168.2" y="20.0" dominant-baseline="central" text-anchor="middle">Ancho de banda del enlace</text>
<text class="tb-ht" x="543.0" y="20.0" dominant-baseline="central" text-anchor="middle">Costo con referencia de 100 Mb/s</text>
<text class="tb-ht" x="974.8" y="20.0" dominant-baseline="central" text-anchor="middle">Costo con referencia de 10 000 Mb/s</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">100 Mb/s</text>
<text class="tb-tx" x="348.5" y="60.8" dominant-baseline="central">1</text>
<text class="tb-tx" x="761.5" y="60.8" dominant-baseline="central">100</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">1 Gb/s</text>
<text class="tb-tx" x="348.5" y="101.5" dominant-baseline="central">1</text>
<text class="tb-tx" x="761.5" y="101.5" dominant-baseline="central">10</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">10 Gb/s</text>
<text class="tb-tx" x="348.5" y="142.2" dominant-baseline="central">1</text>
<text class="tb-tx" x="761.5" y="142.2" dominant-baseline="central">1</text>
<text class="tb-cap" x="600.0" y="189.0" text-anchor="middle">Tabla 6.4. Costo OSPF según el ancho de banda de referencia.</text></svg>
</div>

Para resolverlo, se aumenta el ancho de banda de referencia de forma coherente en todos los *routers* del dominio OSPF. Por ejemplo, con enlaces de hasta 10 Gb/s se configura una referencia de 10 000 Mb/s, con lo que 1 Gb/s tiene costo 10 y 10 Gb/s tiene costo 1. Así se hace en FRRouting (a través de *vtysh*) y en *Cisco IOS*:

```text
Networking@SecOpsMX:~$ sudo vtysh
Router# configure terminal
Router(config)# router ospf
Router(config-router)# ospf router-id 10.0.0.1
Router(config-router)# auto-cost reference-bandwidth 10000
Router(config-router)# network 192.168.1.0/24 area 0
```

##### Cisco IOS

```text
Router(config)# router ospf 1
Router(config-router)# router-id 10.0.0.1
Router(config-router)# auto-cost reference-bandwidth 10000
Router(config-router)# network 192.168.1.0 0.0.0.255 area 0
```

### Funcionamiento basado en áreas

OSPF divide una red grande en áreas; el área 0 es el *backbone* y todas las demás deben conectarse a ella. Los *routers* de un área mantienen una LSDB completa de esa área, mientras que los *routers* de borde de área (ABR) resumen la información entre áreas. Esto reduce la carga de cálculo y de memoria.

### Convergencia

Ante un cambio, el *router* afectado genera un anuncio de estado de enlace (*Link State Advertisement*, LSA) que se inunda por el área. Después, cada *router* ejecuta SPF para recalcular sus rutas.

### Estados de adyacencia

Dos *routers* vecinos atraviesan, en orden, los estados Down, Init, 2-Way, ExStart, Exchange, Loading y Full. Solo cuando alcanzan Full han sincronizado sus bases de datos y pueden intercambiar información completa. La Figura 6.5 representa esta secuencia.

<div class="diagram" id="figura-6-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g605" viewBox="0 0 1200 353.678" role="img" aria-labelledby="g605-title">
<title id="g605-title">Estados de adyacencia OSPF hasta Full</title>
<defs><marker id="g605m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g605n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g605-c" transform="translate(-8.801 -8.770) scale(1.0147)"><g transform="translate(0 1)"><circle cx="102.857" cy="34" r="15" fill="#1e3a5f"></circle>
<text x="102.857" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
<rect x="43.8571" y="58" width="118" height="88" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"></rect>
<g transform="translate(102.857 102) scale(1)" data-lib="power"><g fill="none" stroke="#364e6c" stroke-width="4" stroke-linecap="round"><path d="M0 -28 V-4"></path><path d="M-16 -18 A24 24 0 1 0 16 -18"></path></g></g>
<text x="102.857" y="165" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Down</text>
<text x="102.857" y="185.231" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">sin hellos</text>
<line x1="165.857" y1="102" x2="205.571" y2="102" stroke="#364e6c" stroke-width="2" marker-end="url(#g605m)"></line>
<circle cx="268.571" cy="34" r="15" fill="#7f1d1d"></circle>
<text x="268.571" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
<rect x="209.571" y="58" width="118" height="88" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(268.571 102) scale(1)" data-lib="mail"><rect x="-32" y="-20" width="64" height="40" rx="4" fill="#fbe6e6" stroke="#d40000" stroke-width="3"></rect><path d="M-32 -18 L0 6 L32 -18" fill="none" stroke="#d40000" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="268.571" y="165" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Init</text>
<text x="268.571" y="185.231" font-size="10.348pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">hello recibido</text>
<line x1="331.571" y1="102" x2="371.286" y2="102" stroke="#364e6c" stroke-width="2" marker-end="url(#g605m)"></line>
<circle cx="434.286" cy="34" r="15" fill="#7c2d12"></circle>
<text x="434.286" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
<rect x="375.286" y="58" width="118" height="88" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<g transform="translate(434.286 102) scale(1)" data-lib="sync"><g fill="none" stroke="#dd3a00" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 -4 A26 26 0 0 1 20 -16"></path><path d="M24 4 A26 26 0 0 1 -20 16"></path><path d="M12 -22 L22 -16 L14 -8"></path><path d="M-12 22 L-22 16 L-14 8"></path></g></g>
<text x="434.286" y="165" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">2-Way</text>
<text x="434.286" y="185.231" font-size="10.348pt" font-weight="400" fill="#7c2d12" text-anchor="middle">comunicación</text>
<text x="434.286" y="203.085" font-size="10.348pt" font-weight="400" fill="#7c2d12" text-anchor="middle">bidireccional</text>
<line x1="497.286" y1="102" x2="537" y2="102" stroke="#364e6c" stroke-width="2" marker-end="url(#g605m)"></line>
<circle cx="600" cy="34" r="15" fill="#5b21b6"></circle>
<text x="600" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text>
<rect x="541" y="58" width="118" height="88" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(600 102) scale(1)" data-lib="gear"><g fill="#7c3aed"><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(0)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(45)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(90)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(135)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(180)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(225)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(270)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(315)"></rect></g><circle cx="0" cy="0" r="19" fill="#ffffff" stroke="#7c3aed" stroke-width="4"></circle><circle cx="0" cy="0" r="7" fill="#decefa" stroke="#7c3aed" stroke-width="3"></circle></g>
<text x="600" y="165" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Exstart</text>
<text x="600" y="185.231" font-size="10.348pt" font-weight="400" fill="#5b21b6" text-anchor="middle">inicio del intercambio de</text>
<text x="600" y="203.085" font-size="10.348pt" font-weight="400" fill="#5b21b6" text-anchor="middle">bases</text>
<line x1="663" y1="102" x2="702.714" y2="102" stroke="#364e6c" stroke-width="2" marker-end="url(#g605m)"></line>
<circle cx="765.714" cy="34" r="15" fill="#1e3a8a"></circle>
<text x="765.714" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">5</text>
<rect x="706.714" y="58" width="118" height="88" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(765.714 102) scale(1)" data-lib="doc"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><path d="M-22 -32 H8 L24 -16 V32 H-22 Z"></path><path d="M8 -32 V-16 H24" fill="#e6ecfa"></path><path d="M-12 -4h24M-12 8h24M-12 20h14" stroke-width="3" fill="none" stroke-linecap="round"></path></g></g>
<text x="765.714" y="165" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Exchange</text>
<text x="765.714" y="185.231" font-size="10.348pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">descripciones de la LSDB</text>
<line x1="828.714" y1="102" x2="868.429" y2="102" stroke="#364e6c" stroke-width="2" marker-end="url(#g605m)"></line>
<circle cx="931.429" cy="34" r="15" fill="#065f46"></circle>
<text x="931.429" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">6</text>
<rect x="872.429" y="58" width="118" height="88" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(931.429 102) scale(1)" data-lib="download"><g fill="none" stroke="#009254" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M0 -28 V10 M-14 -4 L0 10 L14 -4"></path><path d="M-28 12 V26 H28 V12"></path></g></g>
<text x="931.429" y="165" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Loading</text>
<text x="931.429" y="185.231" font-size="10.348pt" font-weight="400" fill="#065f46" text-anchor="middle">solicita los LSA que faltan</text>
<line x1="994.429" y1="102" x2="1034.14" y2="102" stroke="#364e6c" stroke-width="2" marker-end="url(#g605m)"></line>
<circle cx="1097.14" cy="34" r="15" fill="#065f46"></circle>
<text x="1097.14" y="39" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">7</text>
<rect x="1038.14" y="58" width="118" height="88" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(1097.14 102) scale(1)" data-lib="check"><circle cx="0" cy="0" r="28" fill="#009254"></circle><path d="M-13 1 L-4 11 L15 -10" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="1097.14" y="165" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Full</text>
<text x="1097.14" y="185.231" font-size="10.348pt" font-weight="400" fill="#065f46" text-anchor="middle">LSDB sincronizadas</text>
<rect x="20" y="260" width="1160" height="44" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="287.25" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Solo cuando la adyacencia llega a Full los routers pueden intercambiar información completa</text>
</g></g><text x="600" y="337.328" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 6.5. Estados de adyacencia OSPF hasta Full.</text></svg>
</div>

### Multiacceso, DR y BDR

En una red Ethernet con varios *routers*, formar una adyacencia completa entre todos los pares generaría demasiadas relaciones y tráfico de LSA. Para evitarlo se elige un *Designated Router* (DR) y un *Backup Designated Router* (BDR): los demás *routers* establecen adyacencia solo con ellos, como muestra la Figura 6.6. Los vecinos que no son DR ni BDR permanecen en estado 2-Way entre sí.

<div class="diagram" id="figura-6-06" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g606" viewBox="0 0 1200 433.223" role="img" aria-labelledby="g606-title">
<title id="g606-title">DR y BDR en una red Ethernet multiacceso</title>
<defs><marker id="g606m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g606n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g606-c" transform="translate(-8.771 -8.771) scale(1.0146)"><g transform="translate(0 -6.6)"><g transform="translate(600 50) scale(0.9)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#364e6c" stroke-width="3"></rect><rect x="-46.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-33.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-21.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="-8.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="4.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="16.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="29.0" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><rect x="41.5" y="-4" width="9" height="12" fill="#cdd3da" stroke="#364e6c" stroke-width="1.5"></rect><circle cx="-44" cy="-15" r="2.5" fill="#364e6c"></circle><circle cx="-24" cy="-15" r="2.5" fill="#364e6c"></circle><circle cx="-4" cy="-15" r="2.5" fill="#364e6c"></circle><circle cx="16" cy="-15" r="2.5" fill="#364e6c"></circle><circle cx="36" cy="-15" r="2.5" fill="#364e6c"></circle></g>
<text x="600" y="107.4" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Segmento 192.168.1.0/24</text>
<line x1="165" y1="138" x2="1035" y2="138" stroke="#364e6c" stroke-width="2"></line>
<line x1="600" y1="102" x2="600" y2="138" stroke="#364e6c" stroke-width="2"></line>
<line x1="165" y1="138" x2="165" y2="185" stroke="#364e6c" stroke-width="2"></line>
<g transform="translate(165 222) scale(0.72)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#d40000" stroke-width="3"></circle><circle r="34" fill="#fbe6e6"></circle><g stroke="#d40000" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="165" y="278" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router local</text>
<text x="165" y="300" font-size="10.349pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">calcula SPF</text>
<line x1="455" y1="138" x2="455" y2="185" stroke="#364e6c" stroke-width="2"></line>
<g transform="translate(455 222) scale(0.72)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#009254" stroke-width="3"></circle><circle r="34" fill="#e6f4ee"></circle><g stroke="#009254" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="455" y="278" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">10.0.0.2</text>
<rect x="419.02" y="289" width="71.95" height="22" rx="4" fill="#ffffff" stroke="#009254" stroke-width="1.6"></rect>
<text x="455" y="304.67" font-size="10.349pt" font-weight="700" fill="#065f46" text-anchor="middle">Full/DR</text>
<text x="455" y="326" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="middle">Designated Router</text>
<line x1="745" y1="138" x2="745" y2="185" stroke="#364e6c" stroke-width="2"></line>
<g transform="translate(745 222) scale(0.72)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="745" y="278" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">10.0.0.3</text>
<rect x="704.19" y="289" width="81.62" height="22" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="745" y="304.67" font-size="10.349pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Full/BDR</text>
<text x="745" y="326" font-size="10.349pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Backup DR</text>
<line x1="1035" y1="138" x2="1035" y2="185" stroke="#364e6c" stroke-width="2"></line>
<g transform="translate(1035 222) scale(0.72)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></circle><circle r="34" fill="#fcebe6"></circle><g stroke="#dd3a00" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="1035" y="278" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">10.0.0.4</text>
<rect x="970.83" y="289" width="128.35" height="22" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="1.6"></rect>
<text x="1035" y="304.67" font-size="10.349pt" font-weight="700" fill="#7c2d12" text-anchor="middle">2-Way/DROther</text>
<text x="1035" y="326" font-size="10.349pt" font-weight="400" fill="#7c2d12" text-anchor="middle">solo con DR y BDR</text>
<rect x="20" y="350" width="1160" height="40" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="375.25" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Con un DR y un BDR se reduce el número de adyacencias y el tráfico de LSA</text>
</g></g><text x="600" y="416.857" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 6.6. DR y BDR en una red Ethernet multiacceso.</text></svg>
</div>

### Autenticación

La autenticación criptográfica de OSPFv2 con HMAC-SHA (SHA-1, SHA-256, SHA-384 y SHA-512) está definida en el RFC 5709, y el RFC 7474 añade protección contra ataques de repetición. OSPFv3 utiliza IPsec (RFC 4552) o el *Authentication Trailer* (RFC 7166). La autenticación con MD5 del RFC 2328 se considera obsoleta (véase el RFC 6151); en implementaciones nuevas utiliza HMAC-SHA-256 o superior.

### Verificación de OSPF

Para consultar el estado de los vecinos en un *router* con FRRouting basta con ejecutar *vtysh* con la opción *-c*, que envía un solo comando y regresa a la terminal:

```text
Networking@SecOpsMX:~$ sudo vtysh -c "show ip ospf neighbor"
```

```text
Neighbor ID    Pri State          Up Time        Dead Time Address        Interface                       RXmtL RqstL DBsmL
10.0.0.2         1 Full/DR        15m32s           31.482s 192.168.1.2    eth0:192.168.1.1                    0    0    0
10.0.0.3         1 Full/BDR       15m30s           37.915s 192.168.1.3    eth0:192.168.1.1                    0    0    0
10.0.0.4         1 2-Way/DROther  12m08s           34.102s 192.168.1.4    eth0:192.168.1.1                    0    0    0
```

El vecino 10.0.0.4 permanece en 2-Way/DROther: es el comportamiento esperado de un *router* que no es DR ni BDR. Para ver las rutas aprendidas mediante OSPF:

```text
Networking@SecOpsMX:~$ sudo vtysh -c "show ip route ospf"
```

```text
Codes: K - kernel route, C - connected, S - static, R - RIP,
       O - OSPF, I - IS-IS, B - BGP, E - EIGRP, N - NHRP,
       > - selected route, * - FIB route
 
O>* 192.168.10.0/24 [110/20] via 192.168.1.2, eth0, weight 1, 00:15:32
O>* 192.168.20.0/24 [110/30] via 192.168.1.3, eth0, weight 1, 00:15:32
O>* 172.20.0.0/16 [110/50] via 192.168.1.2, eth0, weight 1, 00:15:32
```

##### Cisco IOS

```text
Router# show ip ospf neighbor
```

```text
Neighbor ID    Pri  State          Dead Time  Address        Interface
10.0.0.2         1  FULL/DR        00:00:32   192.168.1.2    GigabitEthernet0/0
10.0.0.3         1  FULL/BDR       00:00:38   192.168.1.3    GigabitEthernet0/0
```

```text
Router# show ip route ospf
```

```text
O    192.168.10.0/24 [110/20] via 192.168.1.2, 00:15:32, GigabitEthernet0/0
O IA 172.20.0.0/16 [110/50] via 192.168.1.2, 00:15:32, GigabitEthernet0/0
```

OSPF ofrece convergencia eficiente, soporte de VLSM y CIDR y escalabilidad mediante áreas. A cambio, consume más CPU y memoria que protocolos más sencillos como RIP, y exige un diseño y un diagnóstico más cuidadosos en redes extensas.

## 6.5 BGP

En entornos de gran escala, como Internet o las redes de los grandes proveedores, se necesita un protocolo capaz de gestionar rutas entre distintos sistemas autónomos. BGP (*Border Gateway Protocol*), en su versión 4 definida en el RFC 4271, es el estándar de facto para el enrutamiento entre dominios.

Es un protocolo de enrutamiento exterior (EGP) de vector de rutas (*path vector*). A diferencia de los IGP, no selecciona el camino solo por una métrica, sino mediante atributos y políticas configurables por el administrador. La Figura 6.7 muestra las sesiones eBGP e iBGP entre sistemas autónomos.

<div class="diagram" id="figura-6-07" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g607" viewBox="0 0 1200 488.715" role="img" aria-labelledby="g607-title">
<title id="g607-title">Sesiones eBGP e iBGP entre sistemas autónomos</title>
<defs><marker id="g607m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g607n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g607-c" transform="translate(-39.159 -9.708) scale(1.0653)"><g transform="translate(2.33 -36.3)"><g transform="translate(600 150) scale(3.6)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path></g>
<g transform="translate(515 142.8) scale(0.4)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<g transform="translate(685 142.8) scale(0.4)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="600" y="234.8" font-size="11.264pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">AS 65001</text>
<g transform="translate(150 150) scale(2.6)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path></g>
<g transform="translate(150 144.8) scale(0.4)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#009254" stroke-width="3"></circle><circle r="34" fill="#e6f4ee"></circle><g stroke="#009254" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="150" y="216.8" font-size="11.264pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">AS 65002</text>
<g transform="translate(1050 150) scale(2.6)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path></g>
<g transform="translate(1050 144.8) scale(0.4)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#7c3aed" stroke-width="3"></circle><circle r="34" fill="#f2ebfd"></circle><g stroke="#7c3aed" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="1050" y="216.8" font-size="11.264pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">AS 65003</text>
<g transform="translate(150 390) scale(2.2)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#fcebe6" stroke="#dd3a00" stroke-width="3" stroke-linejoin="round"></path></g>
<g transform="translate(150 385.6) scale(0.4)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#dd3a00" stroke-width="3"></circle><circle r="34" fill="#fcebe6"></circle><g stroke="#dd3a00" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="150" y="449.6" font-size="11.264pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">AS 65004</text>
<line x1="515" y1="146" x2="685" y2="146" stroke="#003ecc" stroke-width="2.5" stroke-dasharray="6,4"></line>
<rect x="572.89" y="117" width="54.23" height="22" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="600" y="132.67" font-size="9.856pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">iBGP</text>
<line x1="185" y1="146" x2="515" y2="146" stroke="#d40000" stroke-width="2.5"></line>
<rect x="320.47" y="117" width="59.06" height="22" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.6"></rect>
<text x="350" y="132.67" font-size="9.856pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">eBGP</text>
<line x1="685" y1="146" x2="1015" y2="146" stroke="#d40000" stroke-width="2.5"></line>
<rect x="820.47" y="117" width="59.06" height="22" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.6"></rect>
<text x="850" y="132.67" font-size="9.856pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">eBGP</text>
<path d="M150 252 L150 318" fill="none" stroke="#dd3a00" stroke-width="2" stroke-linejoin="round" marker-end="url(#g607m)"></path>
<rect x="88.24" y="274" width="123.51" height="22" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="1.6"></rect>
<text x="150" y="289.43" font-size="9.856pt" font-weight="700" fill="#7c2d12" text-anchor="middle">192.168.20.0/24</text>
<g transform="translate(720 364) scale(1)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#ebedf0" stroke="#364e6c" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#364e6c"></circle></g>
<text x="720" y="406" font-size="9.856pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Sesiones sobre TCP 179: Open, Update, Keepalive y Notification</text>
<text x="720" y="430" font-size="9.856pt" font-weight="700" fill="#7c2d12" text-anchor="middle">La ruta a 192.168.20.0/24 llega con AS_PATH 65002 65004</text>
</g></g><text x="600" y="472.348" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 6.7. Sesiones eBGP e iBGP entre sistemas autónomos.</text></svg>
</div>

### Verificación de sesiones BGP

Con FRRouting se comprueba el estado de los vecinos con *show bgp summary*. La columna *State/PfxRcd* muestra el número de prefijos recibidos cuando la sesión está establecida; si aparece un estado como *Active* o *Idle*, la sesión no se ha levantado.

```text
Networking@SecOpsMX:~$ sudo vtysh -c "show bgp ipv4 unicast summary"
```

```text
IPv4 Unicast Summary (VRF default):
BGP router identifier 10.0.0.1, local AS number 65001 vrf-id 0
BGP table version 5
RIB entries 5, using 960 bytes of memory
Peers 2, using 1448 KiB of memory
 
Neighbor       V        AS  MsgRcvd  MsgSent  TblVer InQ OutQ Up/Down State/PfxRcd  PfxSnt Desc
10.0.0.2       4     65002       45       47       0   0   0 00:32:15           2       3 N/A
10.0.0.3       4     65003       38       41       0   0   0 00:28:42           1       3 N/A
 
Total number of neighbors 2
```

Una peculiaridad que conviene conocer: desde la versión 7.4, FRRouting exige por defecto una política de entrada y salida (*route-map*) para las sesiones eBGP. Mientras no se configure, la sesión se establece, pero en la columna State/PfxRcd aparece *(Policy)* en lugar del número de prefijos. Para un laboratorio es posible desactivar ese requisito con el comando *no bgp ebgp-requires-policy*.

### Características fundamentales de BGP

#### Basado en políticas

El administrador puede influir en la selección mediante atributos como LOCAL_PREF, AS_PATH, ORIGIN, MED y comunidades. El orden de evaluación depende de la implementación. Algunos fabricantes incorporan atributos locales adicionales, como WEIGHT en *Cisco*, que no se propagan a otros sistemas autónomos.

#### Escalabilidad masiva

La tabla global de enrutamiento de Internet es el mejor ejemplo de su escala. Según las mediciones de APNIC, durante 2026 contenía más de un millón de entradas IPv4 (alrededor de 1.04 millones a inicios de año y 1.06 millones en junio) y un número mucho menor de entradas IPv6. Son cifras que cambian de forma continua, por lo que, para valores actuales, conviene consultar fuentes de medición como el informe semanal de APNIC (thyme.apnic.net) o el análisis anual de Geoff Huston.

#### Modelo de vecindad

Dos *routers* BGP establecen una conexión TCP en el puerto 179 e intercambian mensajes *Open*, *Update*, *Keepalive* y *Notification*.

- iBGP (*Internal BGP*): sesiones entre *routers* del mismo AS. Los *routers* iBGP deben estar conectados en malla completa o mediante *route reflectors*, porque una ruta aprendida por iBGP no se reenvía a otros pares iBGP.
- eBGP (*External BGP*): sesiones entre *routers* de sistemas autónomos distintos.

#### Selección de ruta

BGP selecciona rutas mediante un proceso de decisión basado en atributos y políticas. El orden exacto varía entre implementaciones y puede modificarse por configuración. En *Cisco*, por ejemplo, WEIGHT es un atributo local; LOCAL_PREF, la longitud de AS_PATH, ORIGIN, MED, el tipo de vecino y el costo IGP hasta el siguiente salto son algunos de los criterios que se evalúan. La Figura 6.8 presenta una secuencia ilustrativa, no una regla universal para todos los fabricantes.

<div class="diagram" id="figura-6-08" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g608" viewBox="0 0 1200 362.809" role="img" aria-labelledby="g608-title">
<title id="g608-title">Orden de evaluación de los atributos BGP</title>
<defs><marker id="g608m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g608n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g608-c" transform="translate(-8.795 -8.771) scale(1.0147)"><g transform="translate(0 -2)"><g transform="translate(84 167) scale(2)" data-lib="funnel"><path d="M-32 -26 H32 L8 4 V28 L-8 20 V4 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path></g>
<circle cx="196" cy="37" r="15" fill="#7f1d1d"></circle>
<text x="196" y="42" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
<rect x="226" y="22" width="664" height="30" rx="4" fill="#f4bfbf" stroke="#d40000" stroke-width="1.6"></rect>
<text x="558" y="42.13" font-size="10.348pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Peso (weight, Cisco)</text>
<circle cx="196" cy="81" r="15" fill="#7c2d12"></circle>
<text x="196" y="86" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
<rect x="226" y="66" width="664" height="30" rx="4" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.6"></rect>
<text x="558" y="86.13" font-size="10.348pt" font-weight="700" fill="#7c2d12" text-anchor="middle">Preferencia local (local pref)</text>
<circle cx="196" cy="125" r="15" fill="#5b21b6"></circle>
<text x="196" y="130" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
<rect x="226" y="110" width="664" height="30" rx="4" fill="#decefa" stroke="#7c3aed" stroke-width="1.6"></rect>
<text x="558" y="130.13" font-size="10.348pt" font-weight="700" fill="#5b21b6" text-anchor="middle">AS_PATH más corto</text>
<circle cx="196" cy="169" r="15" fill="#1e3a8a"></circle>
<text x="196" y="174" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text>
<rect x="226" y="154" width="664" height="30" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="558" y="174.13" font-size="10.348pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Origen</text>
<circle cx="196" cy="213" r="15" fill="#065f46"></circle>
<text x="196" y="218" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">5</text>
<rect x="226" y="198" width="664" height="30" rx="4" fill="#bfe4d4" stroke="#009254" stroke-width="1.6"></rect>
<text x="558" y="218.13" font-size="10.348pt" font-weight="700" fill="#065f46" text-anchor="middle">MED</text>
<circle cx="196" cy="257" r="15" fill="#1e3a5f"></circle>
<text x="196" y="262" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">6</text>
<rect x="226" y="242" width="664" height="30" rx="4" fill="#cdd3da" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="558" y="262.13" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">eBGP frente a iBGP</text>
<circle cx="196" cy="301" r="15" fill="#7f1d1d"></circle>
<text x="196" y="306" font-size="11.826pt" font-weight="700" fill="#ffffff" text-anchor="middle">7</text>
<rect x="226" y="286" width="664" height="30" rx="4" fill="#f4bfbf" stroke="#d40000" stroke-width="1.6"></rect>
<text x="558" y="306.13" font-size="10.348pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Métrica IGP hacia el next-hop</text>
<rect x="920" y="109" width="260" height="120" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="1050" y="160.39" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">BGP elige según políticas</text>
<text x="1050" y="177.04" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">administrativas, no por ancho de</text>
<text x="1050" y="193.68" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">banda o latencia</text>
</g></g><text x="600" y="346.457" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 6.8. Orden de evaluación de los atributos BGP.</text></svg>
</div>

#### Prevención de bucles

En eBGP, el atributo AS_PATH previene bucles: un *router* rechaza los anuncios que ya contienen su propio número de sistema autónomo. En iBGP se emplean además ORIGINATOR_ID y CLUSTER_LIST cuando hay *route reflectors*.

### Uso típico de BGP

Los ISP lo usan para intercambiar rutas entre sí. Las empresas con varias conexiones a distintos proveedores (*multihoming*) lo utilizan para controlar el tráfico entrante y saliente, y las redes privadas de gran escala lo emplean cuando necesitan aplicar políticas complejas. A diferencia de OSPF, BGP no busca la ruta más corta en ancho de banda o latencia, sino la mejor ruta según criterios administrativos. La Tabla 6.5 compara ambos protocolos.

<div class="diagram tabla-svg" id="tabla-6-5" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 465" role="img" aria-labelledby="t25-title"><title id="t25-title">Tabla 6.5. Comparación entre OSPF y BGP.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="82.3" y="20.0" dominant-baseline="central" text-anchor="middle">Característica</text>
<text class="tb-ht" x="421.5" y="20.0" dominant-baseline="central" text-anchor="middle">OSPF</text>
<text class="tb-ht" x="939.2" y="20.0" dominant-baseline="central" text-anchor="middle">BGP</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Tipo</text>
<text class="tb-tx" x="176.7" y="60.8" dominant-baseline="central">IGP (Interior Gateway Protocol).</text>
<text class="tb-tx" x="690.4" y="60.8" dominant-baseline="central">EGP (Exterior Gateway Protocol).</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="112.9" dominant-baseline="central">Alcance</text>
<text class="tb-tx" x="176.7" y="112.9" dominant-baseline="central">Dentro de un sistema autónomo.</text>
<text class="tb-tx" x="690.4" y="101.5" dominant-baseline="central">Entre sistemas autónomos y también dentro de un AS</text>
<text class="tb-tx" x="690.4" y="124.2" dominant-baseline="central">mediante iBGP.</text>
<rect class="tb-te" x="0" y="145.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="165.0" dominant-baseline="central">Algoritmo</text>
<text class="tb-tx" x="176.7" y="165.0" dominant-baseline="central">Estado de enlace; cálculo SPF sobre la LSDB.</text>
<text class="tb-tx" x="690.4" y="165.0" dominant-baseline="central">Vector de rutas; selección basada en atributos y políticas.</text>
<rect class="tb-to" x="0" y="185.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="205.8" dominant-baseline="central">Métrica o</text>
<text class="tb-tx tb-b" x="12.0" y="228.5" dominant-baseline="central">selección</text>
<text class="tb-tx" x="176.7" y="205.8" dominant-baseline="central">Costo OSPF, normalmente relacionado con el ancho de banda</text>
<text class="tb-tx" x="176.7" y="228.5" dominant-baseline="central">de referencia.</text>
<text class="tb-tx" x="690.4" y="205.8" dominant-baseline="central">Atributos como LOCAL_PREF, AS_PATH, MED, NEXT_HOP y</text>
<text class="tb-tx" x="690.4" y="228.5" dominant-baseline="central">políticas administrativas.</text>
<rect class="tb-te" x="0" y="249.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="269.2" dominant-baseline="central">Estructura</text>
<text class="tb-tx" x="176.7" y="269.2" dominant-baseline="central">Utiliza áreas; el área 0 es el backbone.</text>
<text class="tb-tx" x="690.4" y="269.2" dominant-baseline="central">Utiliza sesiones eBGP e iBGP entre routers vecinos (peers).</text>
<rect class="tb-to" x="0" y="290.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="310.0" dominant-baseline="central">Prevención de</text>
<text class="tb-tx tb-b" x="12.0" y="332.8" dominant-baseline="central">bucles</text>
<text class="tb-tx" x="176.7" y="310.0" dominant-baseline="central">SPF calcula rutas sin bucles en condiciones estables; durante</text>
<text class="tb-tx" x="176.7" y="332.8" dominant-baseline="central">la convergencia pueden producirse microbucles transitorios.</text>
<text class="tb-tx" x="690.4" y="310.0" dominant-baseline="central">AS_PATH ayuda a prevenir bucles eBGP; iBGP utiliza reglas y</text>
<text class="tb-tx" x="690.4" y="332.8" dominant-baseline="central">mecanismos adicionales, como split horizon y route reflectors.</text>
<rect class="tb-te" x="0" y="353.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="384.9" dominant-baseline="central">Uso típico</text>
<text class="tb-tx" x="176.7" y="373.5" dominant-baseline="central">Redes empresariales y de proveedores dentro de un dominio</text>
<text class="tb-tx" x="176.7" y="396.2" dominant-baseline="central">de enrutamiento.</text>
<text class="tb-tx" x="690.4" y="373.5" dominant-baseline="central">ISP, multihoming, interconexión entre sistemas autónomos y</text>
<text class="tb-tx" x="690.4" y="396.2" dominant-baseline="central">redes de gran escala.</text>
<text class="tb-cap" x="600.0" y="443.0" text-anchor="middle">Tabla 6.5. Comparación entre OSPF y BGP.</text></svg>
</div>

### Verificar rutas BGP

```text
Networking@SecOpsMX:~$ sudo vtysh -c "show bgp ipv4 unicast"
```

```text
BGP table version is 5, local router ID is 10.0.0.1, vrf id 0
Default local pref 100, local AS 65001
Status codes: s suppressed, d damped, h history, * valid, > best, = multipath,
               i internal, r RIB-failure, S Stale, R Removed
Origin codes: i - IGP, e - EGP, ? - incomplete
 
   Network         Next Hop           Metric LocPrf Weight Path
*> 172.30.0.0/16   10.0.0.3                0            0 65003 i
*> 192.168.20.0/24 10.0.0.2                0            0 65002 65004 i
*> 192.168.30.0/24 10.0.0.2                0            0 65002 i
 
Displayed 3 routes and 3 total paths
```

##### Cisco IOS

```text
Router# show ip bgp summary
```

```text
BGP router identifier 10.0.0.1, local AS number 65001
BGP table version is 5, main routing table version 5
3 network entries using 744 bytes of memory
 
Neighbor       V          AS MsgRcvd MsgSent  TblVer InQ OutQ Up/Down State/PfxRcd
10.0.0.2       4       65002     45     47       5   0   0 00:32:15       2
10.0.0.3       4       65003     38     41       5   0   0 00:28:42       1
```

## 6.6 TABLA DE ENRUTAMIENTO

La tabla de enrutamiento contiene las rutas que el sistema usa para decidir cómo reenviar los paquetes. Según la plataforma y el tipo de ruta, una entrada incluye:

- La red destino (prefijo) y su máscara o longitud de prefijo.
- El siguiente salto (*gateway*) y la interfaz de salida.
- La métrica o costo de la ruta.
- La distancia administrativa, cuando la plataforma la utiliza. Es un valor local, dependiente del fabricante, para preferir una fuente de rutas frente a otra; no es un campo universal de las tablas IP ni equivale a la métrica.

La Figura 6.9 descompone, campo por campo, una entrada de la tabla de enrutamiento en el formato tradicional de *Cisco*, de modo que cada atributo de la ruta pueda leerse por separado.

<div class="diagram" id="figura-6-09" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g609" viewBox="0 0 1200 299.016" role="img" aria-labelledby="g609-title">
<title id="g609-title">Anatomía de una entrada de la tabla de enrutamiento (Cisco)</title>
<defs><marker id="g609m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g609n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g609-c" transform="translate(-16.261 -7.131) scale(1.0271)"><g transform="translate(2.97 -8.3)"><g transform="translate(75 50) scale(0.7)" data-lib="nodes"><g stroke="#dd3a00" stroke-width="3" fill="none"><path d="M0 -22 L-22 14 M0 -22 L22 14 M-22 14 H22"></path></g><circle cx="0" cy="-22" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle><circle cx="-22" cy="14" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle><circle cx="22" cy="14" r="9" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle></g>
<rect x="30" y="100" width="90" height="36" rx="4" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.6"></rect>
<text x="75" y="122" font-size="11.683pt" font-weight="700" fill="#7c2d12" text-anchor="middle">O</text>
<line x1="75" y1="138" x2="75" y2="170" stroke="#dd3a00" stroke-width="1.5" stroke-dasharray="4,3"></line>
<text x="75" y="192" font-size="11.683pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Origen: OSPF</text>
<g transform="translate(254 50) scale(0.7)" data-lib="tag"><path d="M-30 -18 H12 L32 0 L12 18 H-30 Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path><circle cx="-18" cy="0" r="4" fill="#003ecc"></circle></g>
<rect x="134" y="100" width="240" height="36" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="254" y="122" font-size="11.683pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">192.168.10.0/24</text>
<line x1="254" y1="138" x2="254" y2="170" stroke="#003ecc" stroke-width="1.5" stroke-dasharray="4,3"></line>
<text x="254" y="192" font-size="11.683pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Red destino y prefijo</text>
<g transform="translate(468 50) scale(0.7)" data-lib="gauge"><path d="M-30 18 A30 30 0 1 1 30 18" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><path d="M0 14 L16 -12" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><circle cx="0" cy="14" r="5" fill="#7c3aed"></circle></g>
<rect x="388" y="100" width="160" height="36" rx="4" fill="#decefa" stroke="#7c3aed" stroke-width="1.6"></rect>
<text x="468" y="122" font-size="11.683pt" font-weight="700" fill="#5b21b6" text-anchor="middle">[110/2]</text>
<line x1="468" y1="138" x2="468" y2="170" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,3"></line>
<text x="468" y="192" font-size="11.683pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Distancia</text>
<text x="468" y="211.439" font-size="11.683pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">administrativa y costo</text>
<g transform="translate(652 50) scale(0.56)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#009254" stroke-width="3"></circle><circle r="34" fill="#e6f4ee"></circle><g stroke="#009254" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<rect x="562" y="100" width="180" height="36" rx="4" fill="#bfe4d4" stroke="#009254" stroke-width="1.6"></rect>
<text x="652" y="122" font-size="11.683pt" font-weight="700" fill="#065f46" text-anchor="middle">via 10.0.0.1</text>
<line x1="652" y1="138" x2="652" y2="170" stroke="#009254" stroke-width="1.5" stroke-dasharray="4,3"></line>
<text x="652" y="192" font-size="11.683pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Siguiente salto</text>
<g transform="translate(831 50) scale(0.7)" data-lib="clock"><circle cx="0" cy="0" r="28" fill="#ebedf0" stroke="#364e6c" stroke-width="3"></circle><path d="M0 -16 V0 L12 8" fill="none" stroke="#364e6c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<rect x="756" y="100" width="150" height="36" rx="4" fill="#cdd3da" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="831" y="122" font-size="11.683pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">00:15:32</text>
<line x1="831" y1="138" x2="831" y2="170" stroke="#364e6c" stroke-width="1.5" stroke-dasharray="4,3"></line>
<text x="831" y="192" font-size="11.683pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Antigüedad de la ruta</text>
<g transform="translate(1045 50) scale(1.05)" data-lib="plug"><rect x="-14" y="-6" width="28" height="30" rx="3" fill="#fbe6e6" stroke="#d40000" stroke-width="3"></rect><path d="M-9 -6 V-18 M0 -6 V-18 M9 -6 V-18" stroke="#d40000" stroke-width="3" stroke-linecap="round"></path></g>
<rect x="920" y="100" width="250" height="36" rx="4" fill="#f4bfbf" stroke="#d40000" stroke-width="1.6"></rect>
<text x="1045" y="122" font-size="11.683pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">GigabitEthernet0/1</text>
<line x1="1045" y1="138" x2="1045" y2="170" stroke="#d40000" stroke-width="1.5" stroke-dasharray="4,3"></line>
<text x="1045" y="192" font-size="11.683pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Interfaz de salida</text>
<text x="600" y="250" font-size="10.223pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">show ip route · formato tradicional</text>
</g></g><text x="600" y="282.668" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 6.9. Anatomía de una entrada de la tabla de enrutamiento (Cisco).</text></svg>
</div>

### Proceso de búsqueda

Ante cada paquete, el *router* toma la dirección IP de destino y busca la entrada que coincida con el mayor número de bits (*longest prefix match*; el prefijo y la máscara se estudiaron en el Tema 4, sección 4.4). Si hay varias fuentes para el mismo prefijo, antes interviene la distancia administrativa: se prefiere la fuente con el valor más bajo. La Tabla 6.6 recoge las distancias administrativas predeterminadas de *Cisco IOS*/*IOS XE*. Son valores propios de ese fabricante, no una escala universal.

<div class="diagram tabla-svg" id="tabla-6-6" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 537" role="img" aria-labelledby="t26-title"><title id="t26-title">Tabla 6.6. Distancias administrativas predeterminadas en Cisco IOS/IOS XE.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="178.8" y="20.0" dominant-baseline="central" text-anchor="middle">Origen de la ruta</text>
<text class="tb-ht" x="778.8" y="20.0" dominant-baseline="central" text-anchor="middle">Distancia administrativa predeterminada en Cisco IOS/IOS XE</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Conectada directamente</text>
<text class="tb-tx" x="369.6" y="60.8" dominant-baseline="central">0</text>
<rect class="tb-to" x="0" y="81.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="101.5" dominant-baseline="central">Estática</text>
<text class="tb-tx" x="369.6" y="101.5" dominant-baseline="central">1</text>
<rect class="tb-te" x="0" y="122.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="142.2" dominant-baseline="central">EIGRP sumarizada</text>
<text class="tb-tx" x="369.6" y="142.2" dominant-baseline="central">5</text>
<rect class="tb-to" x="0" y="163.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="183.0" dominant-baseline="central">eBGP</text>
<text class="tb-tx" x="369.6" y="183.0" dominant-baseline="central">20</text>
<rect class="tb-te" x="0" y="203.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="223.8" dominant-baseline="central">EIGRP interno</text>
<text class="tb-tx" x="369.6" y="223.8" dominant-baseline="central">90</text>
<rect class="tb-to" x="0" y="244.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="264.5" dominant-baseline="central">IGRP</text>
<text class="tb-tx" x="369.6" y="264.5" dominant-baseline="central">100</text>
<rect class="tb-te" x="0" y="285.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="305.2" dominant-baseline="central">OSPF</text>
<text class="tb-tx" x="369.6" y="305.2" dominant-baseline="central">110</text>
<rect class="tb-to" x="0" y="326.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="346.0" dominant-baseline="central">IS-IS</text>
<text class="tb-tx" x="369.6" y="346.0" dominant-baseline="central">115</text>
<rect class="tb-te" x="0" y="366.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="386.8" dominant-baseline="central">RIP</text>
<text class="tb-tx" x="369.6" y="386.8" dominant-baseline="central">120</text>
<rect class="tb-to" x="0" y="407.5" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="427.5" dominant-baseline="central">EIGRP externo</text>
<text class="tb-tx" x="369.6" y="427.5" dominant-baseline="central">170</text>
<rect class="tb-te" x="0" y="448.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="468.2" dominant-baseline="central">iBGP</text>
<text class="tb-tx" x="369.6" y="468.2" dominant-baseline="central">200</text>
<text class="tb-cap" x="600.0" y="515.0" text-anchor="middle">Tabla 6.6. Distancias administrativas predeterminadas en Cisco IOS/IOS XE.</text></svg>
</div>

#### Ejemplo de coincidencia

- Para 192.168.1.100, si existen 192.168.1.0/24 y 192.168.0.0/16, se elige la /24 por ser más específica.
- Si no hay coincidencia, se usa la ruta por defecto (0.0.0.0/0).
- Si tampoco existe una ruta por defecto, el *router* descarta el paquete. Según la implementación y las políticas de filtrado, puede responder con un mensaje ICMP de destino inalcanzable.

<div class="diagram" id="figura-6-10" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g610" viewBox="0 0 1200 469.547" role="img" aria-labelledby="g610-title">
<title id="g610-title">Coincidencia del prefijo más largo para 192.168.1.100</title>
<defs><marker id="g610m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g610n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g610-c" transform="translate(-8.778 -2.987) scale(1.0146)"><g transform="translate(0 -10.5)"><g transform="translate(80 50) scale(0.9)" data-lib="packet"><rect x="-38" y="-20" width="76" height="40" rx="4" fill="#ffffff" stroke="#364e6c" stroke-width="3"></rect><rect x="-38" y="-20" width="26" height="40" fill="#cdd3da" stroke="#364e6c" stroke-width="3"></rect><path d="M-4 -6h30M-4 6h20" stroke="#364e6c" stroke-width="3" stroke-linecap="round"></path></g>
<text x="150" y="48" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="start">Destino del paquete</text>
<text x="150" y="70" font-size="13.799pt" font-weight="700" fill="#1a1a1a" text-anchor="start">192.168.1.100</text>
<g transform="translate(1100 50) scale(0.6)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<rect x="20" y="120" width="230" height="40" rx="4" fill="#bfe4d4" stroke="#009254" stroke-width="1.6"></rect>
<text x="135" y="144" font-size="11.827pt" font-weight="700" fill="#065f46" text-anchor="middle">192.168.1.0/24</text>
<rect x="270" y="128" width="480" height="24" rx="4" fill="#ffffff" stroke="#009254" stroke-width="1.5"></rect>
<rect x="270" y="128" width="360" height="24" rx="4" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"></rect>
<text x="764" y="145" font-size="10.349pt" font-weight="700" fill="#065f46" text-anchor="start">/24</text>
<g transform="translate(830 140) scale(0.5)" data-lib="check"><circle cx="0" cy="0" r="28" fill="#009254"></circle><path d="M-13 1 L-4 11 L15 -10" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="870" y="145" font-size="10.349pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Elegida: coincide con 24 bits</text>
<rect x="20" y="184" width="230" height="40" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="135" y="208" font-size="11.827pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">192.168.0.0/16</text>
<rect x="270" y="192" width="480" height="24" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="1.5"></rect>
<rect x="270" y="192" width="240" height="24" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect>
<text x="764" y="209" font-size="10.349pt" font-weight="700" fill="#1e3a8a" text-anchor="start">/16</text>
<g transform="translate(830 204) scale(0.5)" data-lib="check"><circle cx="0" cy="0" r="28" fill="#364e6c"></circle><path d="M-13 1 L-4 11 L15 -10" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="870" y="209" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="start">Coincide, pero es menos específica</text>
<rect x="20" y="248" width="230" height="40" rx="4" fill="#f6cebf" stroke="#dd3a00" stroke-width="1.6"></rect>
<text x="135" y="272" font-size="11.827pt" font-weight="700" fill="#7c2d12" text-anchor="middle">0.0.0.0/0</text>
<rect x="270" y="256" width="480" height="24" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="1.5"></rect>
<text x="764" y="273" font-size="10.349pt" font-weight="700" fill="#7c2d12" text-anchor="start">/0</text>
<g transform="translate(830 268) scale(0.5)" data-lib="check"><circle cx="0" cy="0" r="28" fill="#364e6c"></circle><path d="M-13 1 L-4 11 L15 -10" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="870" y="273" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="start">Ruta por defecto: solo si no hay otra</text>
<rect x="20" y="312" width="230" height="40" rx="4" fill="#f4bfbf" stroke="#d40000" stroke-width="1.6"></rect>
<text x="135" y="336" font-size="11.827pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">10.0.0.0/24</text>
<rect x="270" y="320" width="480" height="24" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.5"></rect>
<text x="764" y="337" font-size="10.349pt" font-weight="700" fill="#7f1d1d" text-anchor="start">—</text>
<g transform="translate(830 332) scale(0.5)" data-lib="cross"><circle cx="0" cy="0" r="28" fill="#d40000"></circle><path d="M-11 -11 L11 11 M11 -11 L-11 11" stroke="#ffffff" stroke-width="5" stroke-linecap="round"></path></g>
<text x="870" y="337" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="start">No coincide</text>
<rect x="20" y="384" width="1160" height="40" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="409.25" font-size="10.349pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">Si tampoco existe ruta por defecto, el paquete se descarta y se envía un ICMP de destino inalcanzable</text>
</g></g><text x="600" y="453.186" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 6.10. Coincidencia del prefijo más largo para 192.168.1.100.</text></svg>
</div>

En *Linux* no hace falta deducir esa decisión: el comando *ip route get* indica qué ruta usaría el sistema para un destino concreto.

```text
Networking@SecOpsMX:~$ ip route get 8.8.8.8
8.8.8.8 via 192.168.1.1 dev eth0 src 192.168.1.10 uid 1000
    cache
Networking@SecOpsMX:~$ ip route get 192.168.10.25
192.168.10.25 via 10.0.0.1 dev eth1 src 10.0.0.254 uid 1000
    cache
```

### Ver la tabla de enrutamiento

En *Linux*, una tabla con rutas de distintos orígenes se ve así. En la salida, el campo *proto* identifica quién instaló cada una (*kernel*, *static*, *ospf*, *bgp*):

```text
Networking@SecOpsMX:~$ ip route show
default via 192.168.1.1 dev eth0 proto static metric 100
10.0.0.0/24 dev eth1 proto kernel scope link src 10.0.0.254
172.16.0.0/16 via 10.0.0.1 dev eth1 proto static metric 10
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.10
192.168.10.0/24 via 10.0.0.1 dev eth1 proto ospf metric 20
192.168.20.0/24 via 10.0.0.2 dev eth1 proto bgp metric 20
```

##### Cisco IOS

```text
Router# show ip route
```

```text
Codes: L - local, C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
       E1 - OSPF external type 1, E2 - OSPF external type 2
       i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2
       ia - IS-IS inter area, * - candidate default, U - per-user static route
 
Gateway of last resort is 192.168.1.1 to network 0.0.0.0
 
S*   0.0.0.0/0 [1/0] via 192.168.1.1
      10.0.0.0/8 is variably subnetted, 2 subnets, 2 masks
C       10.0.0.0/24 is directly connected, GigabitEthernet0/1
L       10.0.0.254/32 is directly connected, GigabitEthernet0/1
S       172.16.0.0/16 [1/0] via 10.0.0.1
      192.168.1.0/24 is variably subnetted, 2 subnets, 2 masks
C       192.168.1.0/24 is directly connected, GigabitEthernet0/0
L       192.168.1.10/32 is directly connected, GigabitEthernet0/0
O       192.168.10.0/24 [110/2] via 10.0.0.1, 00:15:32, GigabitEthernet0/1
B       192.168.20.0/24 [20/0] via 10.0.0.2, 00:28:42
```

##### Windows

```text
C:\> route print -4
```

```text
===========================================================================
Tabla de rutas IPv4
===========================================================================
Rutas activas:
Destino de red       Máscara de red Puerta de acceso  Interfaz Métrica
          0.0.0.0         0.0.0.0     192.168.1.1  192.168.1.10    25
      192.168.1.0   255.255.255.0        En vínculo  192.168.1.10   281
===========================================================================
```

### Formas de poblar la tabla

- Redes conectadas directamente, que se agregan de forma automática.
- Rutas estáticas, por configuración manual.
- Protocolos dinámicos, como OSPF o BGP.
- Ruta por defecto, que puede ser estática o aprendida.

Cuando dos fuentes ofrecen una ruta al mismo prefijo, el *router* elige la de menor distancia administrativa; por ejemplo, una ruta estática (1) prevalece sobre una aprendida por OSPF (110). La decisión de reenvío del paquete, en cambio, siempre sigue el prefijo más largo. La Figura 6.11 resume los orígenes de las rutas.

<div class="diagram" id="figura-6-11" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g611" viewBox="0 0 1200 423.685" role="img" aria-labelledby="g611-title">
<title id="g611-title">Orígenes de las rutas de la tabla de enrutamiento</title>
<defs><marker id="g611m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g611n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g611-c" transform="translate(-8.772 -8.771) scale(1.0146)"><g transform="translate(0 0)"><rect x="20" y="20" width="360" height="78" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(70 59) scale(1.05)" data-lib="plug"><rect x="-14" y="-6" width="28" height="30" rx="3" fill="#e6f4ee" stroke="#009254" stroke-width="3"></rect><path d="M-9 -6 V-18 M0 -6 V-18 M9 -6 V-18" stroke="#009254" stroke-width="3" stroke-linecap="round"></path></g>
<text x="120" y="54" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Redes conectadas</text>
<text x="120" y="74" font-size="10.349pt" font-weight="400" fill="#065f46" text-anchor="start">automáticas</text>
<line x1="384" y1="59" x2="520" y2="197" stroke="#364e6c" stroke-width="2" marker-end="url(#g611m)"></line>
<rect x="20" y="112" width="360" height="78" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(70 151) scale(0.7)" data-lib="pin"><path d="M0 30 C-22 4 -24 -4 -24 -12 A24 24 0 0 1 24 -12 C24 -4 22 4 0 30 Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"></path><circle cx="0" cy="-12" r="8" fill="#003ecc"></circle></g>
<text x="120" y="146" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Rutas estáticas</text>
<text x="120" y="166" font-size="10.349pt" font-weight="400" fill="#1e3a8a" text-anchor="start">configuración manual</text>
<line x1="384" y1="151" x2="520" y2="197" stroke="#364e6c" stroke-width="2" marker-end="url(#g611m)"></line>
<rect x="20" y="204" width="360" height="78" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<g transform="translate(70 243) scale(0.7)" data-lib="sync"><g fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 -4 A26 26 0 0 1 20 -16"></path><path d="M24 4 A26 26 0 0 1 -20 16"></path><path d="M12 -22 L22 -16 L14 -8"></path><path d="M-12 22 L-22 16 L-14 8"></path></g></g>
<text x="120" y="238" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Protocolos dinámicos</text>
<text x="120" y="258" font-size="10.349pt" font-weight="400" fill="#5b21b6" text-anchor="start">OSPF, BGP, etc.</text>
<line x1="384" y1="243" x2="520" y2="197" stroke="#364e6c" stroke-width="2" marker-end="url(#g611m)"></line>
<rect x="20" y="296" width="360" height="78" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<g transform="translate(70 335) scale(0.7)" data-lib="globe"><g stroke="#dd3a00" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#fcebe6"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<text x="120" y="330" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Ruta por defecto</text>
<text x="120" y="350" font-size="10.349pt" font-weight="400" fill="#7c2d12" text-anchor="start">estática o aprendida</text>
<line x1="384" y1="335" x2="520" y2="197" stroke="#364e6c" stroke-width="2" marker-end="url(#g611m)"></line>
<g transform="translate(610 197) scale(1.5)" data-lib="table"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#364e6c" stroke-width="3"></rect><rect x="-36" y="-28" width="72" height="14" fill="#cdd3da" stroke="#364e6c" stroke-width="3"></rect><path d="M-36 0H36M-36 14H36M-8 -14V28" stroke="#364e6c" stroke-width="2"></path></g>
<text x="610" y="269" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Tabla de enrutamiento</text>
<line x1="700" y1="197" x2="790" y2="197" stroke="#364e6c" stroke-width="2" marker-end="url(#g611m)"></line>
<rect x="810" y="122" width="370" height="150" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"></rect>
<g transform="translate(995 162) scale(1)" data-lib="gauge"><path d="M-30 18 A30 30 0 1 1 30 18" fill="none" stroke="#d40000" stroke-width="4" stroke-linecap="round"></path><path d="M0 14 L16 -12" stroke="#d40000" stroke-width="4" stroke-linecap="round"></path><circle cx="0" cy="14" r="5" fill="#d40000"></circle></g>
<text x="995" y="209" font-size="11.827pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Mismo destino, varios orígenes</text>
<text x="995" y="229" font-size="10.349pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Se elige la menor distancia administrativa: estática</text>
<text x="995" y="246.9" font-size="10.349pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">(AD 1) sobre OSPF (AD 110)</text>
</g></g><text x="600" y="407.320" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 6.11. Orígenes de las rutas de la tabla de enrutamiento.</text></svg>
</div>

## 6.7 GATEWAY

Para que un dispositivo final (*host*) se comunique con equipos fuera de su subred necesita conocer la dirección de un *gateway* o puerta de enlace. Se trata de un dispositivo de red, normalmente un *router* o un *switch* de capa 3 con interfaces VLAN, que conecta la red local con otras redes. Su dirección IP, dentro de la subred local, sirve como punto de entrada y salida del tráfico cuyo destino no pertenece a esa subred.

El *host* conoce su *gateway* por defecto porque se configuró de forma manual o porque lo recibió por DHCP (por ejemplo, 192.168.1.1). En IPv6, el *gateway* por defecto suele aprenderse mediante los mensajes *Router Advertisement* del protocolo NDP. Para dar redundancia a esa salida se pueden utilizar protocolos como VRRP, HSRP o GLBP, que presentan a los *hosts* una dirección virtual compartida por varios *routers*.

### Funcionamiento

Sea un *host* con IP 192.168.1.10/24 que quiere enviar un paquete a 8.8.8.8. El *host* compara la dirección destino con su propia subred (192.168.1.0/24); como 8.8.8.8 no pertenece a ella, concluye que debe entregar el paquete al *gateway*. Para ello resuelve la MAC del *gateway* y le envía la trama. El *router* recibe la trama, extrae el paquete, consulta su tabla de enrutamiento y lo reenvía hacia el destino. La Figura 6.12 resume el proceso.

<div class="diagram" id="figura-6-12" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g612" viewBox="0 0 1200 332.204" role="img" aria-labelledby="g612-title">
<title id="g612-title">Envío de un paquete hacia una red remota a través del gateway</title>
<defs><marker id="g612m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g612n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g612-c" transform="translate(-8.812 -8.775) scale(1.0147)"><g transform="translate(0 3.84)"><g transform="translate(150 60) scale(0.9)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"></rect><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"></rect><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"></path><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"></path></g></g>
<text x="150" y="117.4" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Host</text>
<text x="150" y="137.631" font-size="10.348pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">192.168.1.10/24</text>
<g transform="translate(600 60) scale(0.72)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#003ecc" stroke-width="3"></circle><circle r="34" fill="#e6ecfa"></circle><g stroke="#003ecc" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="600" y="117.4" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Gateway por defecto</text>
<text x="600" y="137.631" font-size="10.348pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">192.168.1.1</text>
<g transform="translate(1050 50) scale(1.3)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#e6f4ee" stroke="#009254" stroke-width="3" stroke-linejoin="round"></path></g>
<g transform="translate(1050 60) scale(0.7)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="-27.5" r="4" fill="#009254"></circle><path d="M-34 -27.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="1.5" r="4" fill="#009254"></circle><path d="M-34 1.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#009254" stroke-width="3"></rect><circle cx="30" cy="30.5" r="4" fill="#009254"></circle><path d="M-34 30.5h34" stroke="#009254" stroke-width="3" stroke-linecap="round"></path></g>
<text x="1050" y="117.4" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Destino 8.8.8.8</text>
<line x1="215" y1="60" x2="520" y2="60" stroke="#364e6c" stroke-width="2" marker-end="url(#g612m)"></line>
<line x1="685" y1="60" x2="970" y2="60" stroke="#364e6c" stroke-width="2" marker-end="url(#g612m)"></line>
<rect x="250.65" y="33" width="234.7" height="22" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.6"></rect>
<text x="368" y="48.67" font-size="10.348pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">8.8.8.8 está fuera de la subred</text>
<rect x="746.1" y="33" width="163.8" height="22" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="828" y="48.67" font-size="10.348pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">reenvía por su tabla</text>
<text x="20" y="212" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Paquete IP</text>
<rect x="20" y="224" width="276" height="56" rx="5" fill="#ebedf0" stroke="#364e6c" stroke-width="2"></rect>
<text x="158" y="248" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IP origen</text>
<text x="158" y="266" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">192.168.1.10</text>
<rect x="300" y="224" width="276" height="56" rx="5" fill="#ebedf0" stroke="#364e6c" stroke-width="2"></rect>
<text x="438" y="248" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IP destino</text>
<text x="438" y="266" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">8.8.8.8</text>
<text x="620" y="212" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Trama Ethernet</text>
<rect x="620" y="224" width="184" height="56" rx="5" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<text x="712" y="248" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">MAC destino</text>
<text x="712" y="266" font-size="10.348pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">del gateway</text>
<rect x="808" y="224" width="184" height="56" rx="5" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<text x="900" y="248" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">MAC origen</text>
<text x="900" y="266" font-size="10.348pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">del host</text>
<rect x="996" y="224" width="184" height="56" rx="5" fill="#ebedf0" stroke="#364e6c" stroke-width="2"></rect>
<text x="1088" y="248" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Paquete IP</text>
</g></g><text x="600" y="315.859" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 6.12. Envío de un paquete hacia una red remota a través del gateway.</text></svg>
</div>

### Verificación de conectividad a través del *gateway*

```text
Networking@SecOpsMX:~$ ping -c 3 8.8.8.8
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=12.3 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=117 time=11.8 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=117 time=12.1 ms
 
--- 8.8.8.8 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 11.800/12.067/12.300/0.205 ms
```

El valor *ttl=117* es el TTL con el que llegó la respuesta: parte de 128 o 64 en el destino y se reduce en uno por cada *router* que atraviesa. Para confirmar qué *gateway* usa el equipo:

```text
Networking@SecOpsMX:~$ ip route show default
default via 192.168.1.1 dev eth0 proto static metric 100
```

##### Windows

```text
C:\> ipconfig | findstr /i "Puerta"
```

```text
   Puerta de enlace predeterminada . . . . . . . . . : 192.168.1.1
```

## 6.8 GRE

A veces hace falta transportar paquetes de un protocolo a través de una infraestructura que no lo admite de forma nativa, o conectar dos redes privadas a través de una red pública como Internet. Para esos casos se utilizan los túneles, y uno de los más sencillos es GRE (*Generic Routing Encapsulation*).

GRE, definido en el RFC 2784 y ampliado en el RFC 2890, encapsula paquetes de un protocolo de red (la carga útil) dentro de paquetes IP (el protocolo de transporte). De esta forma, el tráfico fluye por la red IP intermedia como si existiera un enlace directo entre los extremos. La Figura 6.13 muestra el proceso de encapsulación y desencapsulación sobre una infraestructura IP pública. Cabe subrayar que GRE no proporciona cifrado ni autenticación.

<div class="diagram" id="figura-6-14" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g614" viewBox="0 0 1200 375.722" role="img" aria-labelledby="g614-title">
<title id="g614-title">Túnel GRE entre dos sedes a través de una red de transporte</title>
<defs><marker id="g614m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g614n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g614-c" transform="translate(-8.790 -18.920) scale(1.0147)"><g transform="translate(0 -47.27)"><g transform="translate(595 197) scale(4.6)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#ebedf0" stroke="#364e6c" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="600" y="302" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Red de transporte · IP pública</text>
<rect x="210" y="140" width="780" height="40" rx="20" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3"></rect>
<line x1="250" y1="160" x2="950" y2="160" stroke="#7c3aed" stroke-width="3" marker-end="url(#g614m)" marker-start="url(#g614n)"></line>
<text x="600" y="206" font-size="10.348pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Interfaz de túnel virtual punto a punto</text>
<g transform="translate(110 160) scale(0.8)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#d40000" stroke-width="3"></circle><circle r="34" fill="#fbe6e6"></circle><g stroke="#d40000" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="110" y="222" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router A</text>
<text x="110" y="242.2" font-size="10.348pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">198.51.100.1</text>
<g transform="translate(1090 160) scale(0.8)" data-lib="router"><circle cx="0" cy="0" r="42" fill="#ffffff" stroke="#009254" stroke-width="3"></circle><circle r="34" fill="#e6f4ee"></circle><g stroke="#009254" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 0h48M14 -10l10 10-10 10M-14 -10l-10 10 10 10M0 -24v48M-9 -14l9-10 9 10M-9 14l9 10 9-10"></path></g></g>
<text x="1090" y="222" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Router B</text>
<text x="1090" y="242.2" font-size="10.348pt" font-weight="400" fill="#065f46" text-anchor="middle">203.0.113.1</text>
<rect x="25.68" y="287" width="168.63" height="22" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="1.6"></rect>
<text x="110" y="302.67" font-size="10.348pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Tunnel0 · 10.255.0.1/30</text>
<rect x="1004.08" y="287" width="171.86" height="22" rx="4" fill="#ffffff" stroke="#009254" stroke-width="1.6"></rect>
<text x="1090" y="302.67" font-size="10.348pt" font-weight="700" fill="#065f46" text-anchor="middle">Tunnel0 · 10.255.0.2/30</text>
<rect x="20" y="340" width="1160" height="44" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="1.6"></rect>
<text x="600" y="367.25" font-size="10.348pt" font-weight="400" fill="#1a1a1a" text-anchor="middle">El paquete que llega a Tunnel0 se encapsula con GRE y un nuevo encabezado IP exterior; el extremo remoto lo desencapsula</text>
</g></g><text x="600" y="359.368" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 6.14. Túnel GRE entre dos sedes a través de una red de transporte.</text></svg>
</div>

### Características técnicas

La Tabla 6.7 resume las características de GRE. Las cifras de MTU suponen cabeceras IP sin opciones ni extensiones, GRE básico y ninguna otra encapsulación; si se añaden etiquetas, IPsec u otros encabezados, la MTU efectiva será menor.

<div class="diagram tabla-svg" id="tabla-6-7" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 470" role="img" aria-labelledby="t27-title"><title id="t27-title">Tabla 6.7. Características técnicas de GRE.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="87.0" y="20.0" dominant-baseline="central" text-anchor="middle">Característica</text>
<text class="tb-ht" x="384.9" y="20.0" dominant-baseline="central" text-anchor="middle">Descripción</text>
<text class="tb-ht" x="897.9" y="20.0" dominant-baseline="central" text-anchor="middle">Aplicación o consideración</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">Encapsulación</text>
<text class="tb-tx" x="186.0" y="60.8" dominant-baseline="central">GRE encapsula un paquete de protocolo de red</text>
<text class="tb-tx" x="186.0" y="83.5" dominant-baseline="central">dentro de otro paquete IP.</text>
<text class="tb-tx" x="607.9" y="60.8" dominant-baseline="central">Permite transportar distintos protocolos a través de una infraestructura</text>
<text class="tb-tx" x="607.9" y="83.5" dominant-baseline="central">IP.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">Multiprotocolo</text>
<text class="tb-tx" x="186.0" y="124.2" dominant-baseline="central">Puede transportar IPv4, IPv6 y otros protocolos</text>
<text class="tb-tx" x="186.0" y="147.0" dominant-baseline="central">compatibles con la implementación.</text>
<text class="tb-tx" x="607.9" y="135.6" dominant-baseline="central">Facilita la interconexión de redes heterogéneas.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">Sin cifrado nativo</text>
<text class="tb-tx" x="186.0" y="187.8" dominant-baseline="central">GRE no proporciona confidencialidad ni</text>
<text class="tb-tx" x="186.0" y="210.5" dominant-baseline="central">autenticación criptográfica del tráfico.</text>
<text class="tb-tx" x="607.9" y="199.1" dominant-baseline="central">Puede combinarse con IPsec para proteger el túnel.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">Multicast y</text>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">broadcast</text>
<text class="tb-tx" x="186.0" y="251.2" dominant-baseline="central">Puede transportar tráfico multicast y</text>
<text class="tb-tx" x="186.0" y="274.0" dominant-baseline="central">determinados tipos de broadcast.</text>
<text class="tb-tx" x="607.9" y="251.2" dominant-baseline="central">Hace posible ejecutar protocolos de enrutamiento dinámico, como OSPF</text>
<text class="tb-tx" x="607.9" y="274.0" dominant-baseline="central">o EIGRP, sobre el túnel cuando la configuración lo permite.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="314.8" dominant-baseline="central">Sobrecarga sobre</text>
<text class="tb-tx tb-b" x="12.0" y="337.5" dominant-baseline="central">IPv4</text>
<text class="tb-tx" x="186.0" y="314.8" dominant-baseline="central">20 B de cabecera IP exterior más 4 B de cabecera</text>
<text class="tb-tx" x="186.0" y="337.5" dominant-baseline="central">GRE básica: 24 B.</text>
<text class="tb-tx" x="607.9" y="326.1" dominant-baseline="central">Con MTU exterior de 1500 B, la MTU interior teórica es 1476 B.</text>
<rect class="tb-to" x="0" y="358.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="378.2" dominant-baseline="central">Sobrecarga sobre</text>
<text class="tb-tx tb-b" x="12.0" y="401.0" dominant-baseline="central">IPv6</text>
<text class="tb-tx" x="186.0" y="378.2" dominant-baseline="central">40 B de cabecera IPv6 exterior más 4 B de GRE</text>
<text class="tb-tx" x="186.0" y="401.0" dominant-baseline="central">básico: 44 B.</text>
<text class="tb-tx" x="607.9" y="389.6" dominant-baseline="central">Con MTU exterior de 1500 B, la MTU interior teórica es 1456 B.</text>
<text class="tb-cap" x="600.0" y="447.8" text-anchor="middle">Tabla 6.7. Características técnicas de GRE.</text></svg>
</div>

De esa tabla conviene subrayar dos ideas. La primera es que GRE puede transportar *multicast* y *broadcast*, lo que lo hace útil para ejecutar protocolos de enrutamiento como OSPF a través de un túnel. La segunda es que, al no cifrar, suele combinarse con IPsec: GRE aporta el transporte multiprotocolo y IPsec aporta confidencialidad, integridad y autenticación. Un túnel IPsec convencional protege flujos IP definidos por sus selectores y, por sí solo, no actúa como transporte genérico multiprotocolo; eso no significa que IPsec no pueda proteger tráfico *multicast*, pues existen extensiones y arquitecturas específicas para ello.

### Funcionamiento de un túnel GRE

- Se configuran los dos extremos del túnel con direcciones IP alcanzables en la red de transporte.
- Se crea una interfaz de túnel virtual (por ejemplo, gre1) con una dirección IP privada interna.
- Cuando un paquete llega a la interfaz de túnel, el *router* de origen lo encapsula: añade un encabezado GRE y un nuevo encabezado IP exterior.
- El paquete encapsulado viaja por la red de transporte hasta el extremo de destino.
- El *router* de destino lo desencapsula, es decir, retira el encabezado IP exterior y el GRE, y reenvía la carga útil según su protocolo nativo.

#### Sobrecarga (*overhead*) de un túnel GRE sobre IPv4

Cada paquete agrega 20 bytes del encabezado IP exterior y 4 bytes del encabezado GRE básico: 24 bytes en total, como ilustra la Figura 6.14. Sobre Ethernet con MTU de 1500 bytes, esto obliga a fijar la MTU de la interfaz de túnel en 1476 bytes para evitar fragmentación. Además, conviene ajustar el MSS de las conexiones TCP que atraviesan el túnel (1436 bytes, es decir, 1476 menos 40 de cabeceras IP y TCP) mediante *MSS clamping*.

<div class="diagram" id="figura-6-13" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g613" viewBox="0 0 1200 454.131" role="img" aria-labelledby="g613-title">
<title id="g613-title">Encapsulación GRE y sobrecarga de 24 bytes sobre IPv4</title>
<defs><marker id="g613m" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"></polygon></marker><marker id="g613n" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"></polygon></marker></defs>
<g id="g613-c" transform="translate(-8.793 -8.770) scale(1.0147)"><g transform="translate(0 -10)"><g transform="translate(90 50) scale(1)" data-lib="packet"><rect x="-38" y="-20" width="76" height="40" rx="4" fill="#ffffff" stroke="#364e6c" stroke-width="3"></rect><rect x="-38" y="-20" width="26" height="40" fill="#cdd3da" stroke="#364e6c" stroke-width="3"></rect><path d="M-4 -6h30M-4 6h20" stroke="#364e6c" stroke-width="3" stroke-linecap="round"></path></g>
<text x="160" y="56" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Paquete original (carga útil del túnel)</text>
<path d="M600 100 L600 140" fill="none" stroke="#364e6c" stroke-width="2" stroke-linejoin="round" marker-end="url(#g613m)"></path>
<g transform="translate(640 120) scale(0.6)" data-lib="tunnel"><g stroke="#7c3aed" stroke-width="3"><path d="M-40 -14 H40 M-40 14 H40" fill="none"></path><ellipse cx="-40" cy="0" rx="8" ry="14" fill="#decefa"></ellipse><ellipse cx="40" cy="0" rx="8" ry="14" fill="#f2ebfd"></ellipse></g><path d="M-26 0 H20 M12 -7 l8 7 -8 7" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="676" y="124" font-size="10.348pt" font-weight="400" fill="#5b21b6" text-anchor="start">el router origen encapsula</text>
<rect x="20" y="160" width="196" height="64" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"></rect>
<text x="118" y="186" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">IP exterior</text>
<text x="118" y="208" font-size="10.348pt" font-weight="700" fill="#7c2d12" text-anchor="middle">20 B</text>
<rect x="220" y="160" width="136" height="64" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"></rect>
<text x="288" y="186" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">GRE</text>
<text x="288" y="208" font-size="10.348pt" font-weight="700" fill="#5b21b6" text-anchor="middle">4 B</text>
<rect x="360" y="160" width="820" height="64" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"></rect>
<text x="770" y="186" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Paquete original</text>
<text x="770" y="208" font-size="10.348pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">hasta 1476 B</text>
<line x1="20" y1="252" x2="1180" y2="252" stroke="#364e6c" stroke-width="2" marker-end="url(#g613m)" marker-start="url(#g613n)"></line>
<rect x="494.74" y="241" width="210.53" height="22" rx="4" fill="#ffffff" stroke="#003ecc" stroke-width="1.6"></rect>
<text x="600" y="257.13" font-size="10.348pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">MTU del enlace: 1500 B</text>
<rect x="230" y="290" width="140" height="80" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"></rect>
<g transform="translate(300 330) scale(0.8)" data-lib="gauge"><path d="M-30 18 A30 30 0 1 1 30 18" fill="none" stroke="#009254" stroke-width="4" stroke-linecap="round"></path><path d="M0 14 L16 -12" stroke="#009254" stroke-width="4" stroke-linecap="round"></path><circle cx="0" cy="14" r="5" fill="#009254"></circle></g>
<text x="300" y="389" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">MTU del túnel: 1476 B</text>
<text x="300" y="409.231" font-size="10.348pt" font-weight="400" fill="#065f46" text-anchor="middle">1500 − 24</text>
<rect x="830" y="290" width="140" height="80" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"></rect>
<g transform="translate(900 330) scale(0.8)" data-lib="sync"><g fill="none" stroke="#003ecc" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M-24 -4 A26 26 0 0 1 20 -16"></path><path d="M24 4 A26 26 0 0 1 -20 16"></path><path d="M12 -22 L22 -16 L14 -8"></path><path d="M-12 22 L-22 16 L-14 8"></path></g></g>
<text x="900" y="389" font-size="11.826pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">TCP MSS clamping</text>
<text x="900" y="409.231" font-size="10.348pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">evita la fragmentación</text>
</g></g><text x="600" y="437.780" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 6.13. Encapsulación GRE y sobrecarga de 24 bytes sobre IPv4.</text></svg>
</div>

#### Aplicaciones típicas de GRE

Túneles sitio a sitio combinados con IPsec, transporte de protocolos distintos de IP, *multicast* sobre Internet para protocolos de enrutamiento dinámico y redes de superposición (*overlay*) en SD-WAN. La combinación de GRE con IPsec se estudia en la sección 9.1 y SD-WAN, en la sección 10.2.

### Creación de un túnel GRE

En *Linux*, el método actual es *ip link add* con el tipo *gre*. El comando *ip tunnel* sigue funcionando y se considera la forma clásica. Cabe notar que el núcleo calcula por sí mismo la MTU del túnel: 1476 bytes, el valor de la Figura 6.14.

```text
Networking@SecOpsMX:~$ sudo ip link add gre1 type gre local 198.51.100.1 remote 203.0.113.1 ttl 255
Networking@SecOpsMX:~$ sudo ip link set gre1 up
Networking@SecOpsMX:~$ sudo ip addr add 10.255.0.1/30 dev gre1
```

##### Cisco IOS

```text
Router(config)# interface Tunnel0
Router(config-if)# ip address 10.255.0.1 255.255.255.252
Router(config-if)# tunnel source 198.51.100.1
Router(config-if)# tunnel destination 203.0.113.1
Router(config-if)# ip mtu 1476
Router(config-if)# ip tcp adjust-mss 1436
```

### Verificación del túnel GRE

```text
Networking@SecOpsMX:~$ ip -br addr show gre1
gre1@NONE       UNKNOWN       10.255.0.1/30
Networking@SecOpsMX:~$ ip link show gre1
5: gre1@NONE: <POINTOPOINT,NOARP,UP,LOWER_UP> mtu 1476 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/gre 198.51.100.1 peer 203.0.113.1
Networking@SecOpsMX:~$ ip tunnel show
gre0: gre/ip remote any local any ttl inherit nopmtudisc
gre1: gre/ip remote 203.0.113.1 local 198.51.100.1 ttl 255
```

La interfaz *gre0* es un dispositivo de reserva que el módulo del núcleo crea automáticamente; la configurada en este ejemplo es *gre1*. Para comprobar la conectividad a través del túnel, se hace *ping* a la dirección interna del otro extremo:

```text
Networking@SecOpsMX:~$ ping -c 3 10.255.0.2
PING 10.255.0.2 (10.255.0.2) 56(84) bytes of data.
64 bytes from 10.255.0.2: icmp_seq=1 ttl=64 time=8.45 ms
64 bytes from 10.255.0.2: icmp_seq=2 ttl=64 time=8.12 ms
64 bytes from 10.255.0.2: icmp_seq=3 ttl=64 time=8.33 ms
 
--- 10.255.0.2 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2004ms
rtt min/avg/max/mdev = 8.120/8.300/8.450/0.136 ms
```

### Ajuste del MSS en *Linux*

Si el equipo *Linux* actúa como *router* del túnel, es posible fijar el MSS de las conexiones TCP que lo atraviesan con *nftables*. La regla ajusta el MSS al valor de la MTU de la ruta:

```text
Networking@SecOpsMX:~$ sudo nft add table inet filter
Networking@SecOpsMX:~$ sudo nft add chain inet filter forward '{ type filter hook forward priority 0; }'
Networking@SecOpsMX:~$ sudo nft add rule inet filter forward tcp flags syn tcp option maxseg size set rt mtu
```

### Múltiples túneles GRE

Desde un mismo *router* es posible crear varios túneles con direcciones remotas distintas y una red /30 diferente para cada uno:

```text
Networking@SecOpsMX:~$ sudo ip link add gre2 type gre local 198.51.100.1 remote 203.0.113.2 ttl 255
Networking@SecOpsMX:~$ sudo ip link set gre2 up
Networking@SecOpsMX:~$ sudo ip addr add 10.255.1.1/30 dev gre2
Networking@SecOpsMX:~$ sudo ip link add gre3 type gre local 198.51.100.1 remote 203.0.113.3 ttl 255
Networking@SecOpsMX:~$ sudo ip link set gre3 up
Networking@SecOpsMX:~$ sudo ip addr add 10.255.2.1/30 dev gre3
Networking@SecOpsMX:~$ ip tunnel show
gre0: gre/ip remote any local any ttl inherit nopmtudisc
gre1: gre/ip remote 203.0.113.1 local 198.51.100.1 ttl 255
gre2: gre/ip remote 203.0.113.2 local 198.51.100.1 ttl 255
gre3: gre/ip remote 203.0.113.3 local 198.51.100.1 ttl 255
```
