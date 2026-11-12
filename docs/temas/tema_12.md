<p class="tema-num">TEMA 12</p>

# ARQUITECTURAS MODERNAS DE RED

Las arquitecturas modernas de red evolucionan hacia modelos distribuidos, programables y centrados en la seguridad. La adopción masiva de servicios en la nube, la virtualización, la automatización y el trabajo híbrido han transformado la forma de diseñar y operar las infraestructuras.

La segmentación, la DMZ y la defensa en capas del Tema 11 suponen un perímetro definido. Las arquitecturas modernas parten de que ese perímetro ya no es una referencia suficiente.

A diferencia de los modelos tradicionales, basados en *hardware* especializado y configuraciones estáticas, las arquitecturas actuales priorizan la agilidad, la escalabilidad, la automatización y la adaptación dinámica a las necesidades del negocio. En este tema veremos cómo se integran las redes definidas por *software* (SDN), los servicios en la nube, *Zero Trust*, el acceso basado en identidad y la segmentación avanzada (Figura 12.1).

<div class="diagram" id="figura-12-01" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1201" viewBox="0 0 1200 402" role="img" aria-labelledby="g1201-title">
<title id="g1201-title">Mapa del Tema 12</title>
<defs></defs>
<g id="g1201-c" transform="translate(20 20)"><rect x="0" y="0" width="370.67" height="153" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="370.67" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="185.33" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">12.1 Cloud networking</text>
<g transform="translate(185.33 76.84) scale(0.7)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="185.33" y="134.95" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">VPC, subredes, gateways y balanceadores</text>
<rect x="394.67" y="0" width="370.67" height="153" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="394.67" y1="34" x2="765.33" y2="34" stroke="#364e6c" stroke-width="1.5"/>
<text x="580" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">12.2 Zero Trust</text>
<g transform="translate(580 76.84) scale(0.7)" data-lib="shield"><path d="M 0 -26 L 22 -17 L 22 2 C 22 16 0 26 0 26 C 0 26 -22 16 -22 2 L -22 -17 Z" fill="#364e6c" stroke="#364e6c" stroke-width="2"></path><path d="M-10 0 L-3 8 L11 -9" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="580" y="134.95" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Nunca confiar, siempre verificar</text>
<rect x="789.33" y="0" width="370.67" height="153" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="789.33" y1="34" x2="1160" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="974.67" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">12.3 ZTNA</text>
<g transform="translate(974.67 76.84) scale(0.7)" data-lib="key"><g stroke="#009254" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="-22" cy="0" r="12" fill="#bfe4d4"></circle><path d="M-10 0 H34 M24 0 V12 M14 0 V9"></path></g></g>
<text x="974.67" y="134.95" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Acceso por aplicación y no por red</text>
<rect x="0" y="177" width="370.67" height="153" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="0" y1="211" x2="370.67" y2="211" stroke="#7c3aed" stroke-width="1.5"/>
<text x="185.33" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">12.4 SASE</text>
<g transform="translate(185.33 253.84) scale(0.7)" data-lib="globe"><g stroke="#7c3aed" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#f2ebfd"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<text x="185.33" y="311.95" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Red y seguridad entregadas desde la nube</text>
<rect x="394.67" y="177" width="370.67" height="153" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="394.67" y1="211" x2="765.33" y2="211" stroke="#d40000" stroke-width="1.5"/>
<text x="580" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">12.5 Microsegmentación</text>
<g transform="translate(580 253.84) scale(0.7)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#d40000" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#d40000"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<text x="580" y="311.95" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Políticas por carga de trabajo</text>
<rect x="789.33" y="177" width="370.67" height="153" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="789.33" y1="211" x2="1160" y2="211" stroke="#dd3a00" stroke-width="1.5"/>
<text x="974.67" y="200" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">12.6 Modernización de redes</text>
<g transform="translate(974.67 253.84) scale(0.7)" data-lib="gear"><g fill="#dd3a00"><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(0)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(45)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(90)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(135)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(180)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(225)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(270)"></rect><rect x="-5" y="-28" width="10" height="12" rx="2" transform="rotate(315)"></rect></g><circle cx="0" cy="0" r="19" fill="#ffffff" stroke="#dd3a00" stroke-width="4"></circle><circle cx="0" cy="0" r="7" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"></circle></g>
<text x="974.67" y="311.95" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">SDN, automatización, IaC y NFV</text></g><text x="600" y="384" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 12.1. Mapa del Tema 12.</text></svg>
</div>

## 12.1 CLOUD NETWORKING

*Cloud* Networking engloba las tecnologías y prácticas utilizadas para crear, administrar y proteger redes dentro de entornos de nube pública, privada e híbrida. Permite desplegar infraestructuras de red completamente virtualizadas sin necesidad de administrar directamente los componentes físicos subyacentes.

En estas plataformas, los recursos de red se implementan mediante servicios virtuales definidos por *software*, gestionados mediante interfaces web, APIs o herramientas de automatización. La implementación de recursos de red virtualizados en la nube se muestra en la Figura 12.2.

<div class="diagram" id="figura-12-02" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1202" viewBox="0 0 1200 502" role="img" aria-labelledby="g1202-title">
<title id="g1202-title">Componentes de una red virtual en la nube (VPC)</title>
<defs><marker id="g1202m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1202n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker><marker id="g1202m7c3aed" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#7c3aed"/></marker><marker id="g1202n7c3aed" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#7c3aed"/></marker></defs>
<g id="g1202-c" transform="translate(20 20)"><g transform="translate(90 110) scale(1.2)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="90" y="170" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Internet</text>
<g transform="translate(90 320) scale(0.9)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#003ecc"></rect></g>
<text x="90" y="372" font-size="11.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Red local</text>
<rect x="330" y="0" width="830" height="410" rx="6" fill="#e6ecfa" fill-opacity="0.55" stroke="#003ecc" stroke-width="2" stroke-dasharray="7 5"/>
<text x="342" y="22" font-size="12.5pt" font-weight="700" fill="#1e3a8a" text-anchor="start">VPC · red virtual privada</text>
<polyline points="160,110 330,110" fill="none" stroke="#364e6c" stroke-width="2.5" marker-end="url(#g1202m364e6c)" marker-start="url(#g1202n364e6c)"/>
<g transform="translate(250 80) scale(0.6)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"/><g fill="none" stroke="#003ecc" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="250" y="140" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Gateway</text>
<text x="250" y="156" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">de Internet</text>
<polyline points="160,320 330,320" fill="none" stroke="#7c3aed" stroke-width="3" stroke-dasharray="7 5" marker-end="url(#g1202m7c3aed)" marker-start="url(#g1202n7c3aed)"/>
<text x="245" y="305" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">VPN o</text>
<text x="245" y="350" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">interconexión dedicada</text>
<rect x="360" y="50" width="380" height="190" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<text x="376" y="74" font-size="12.5pt" font-weight="700" fill="#065f46" text-anchor="start">Subred pública</text>
<rect x="790" y="50" width="340" height="190" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<text x="806" y="74" font-size="12.5pt" font-weight="700" fill="#7c2d12" text-anchor="start">Subred privada</text>
<g transform="translate(430 140) scale(0.7)" data-lib="fork"><g fill="none" stroke="#009254" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-30 0 H-6 L20 -18 M-6 0 L20 18"></path><path d="M12 -26 L22 -18 L12 -10 M12 10 L22 18 L12 26"></path></g><circle cx="-30" cy="0" r="5" fill="#009254"></circle></g>
<text x="430" y="195" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Balanceador</text>
<g transform="translate(550 140) scale(0.7)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<text x="550" y="195" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Servidor web</text>
<g transform="translate(670 140) scale(0.7)" data-lib="router"><circle cx="0" cy="0" r="30" fill="#e6f4ee" stroke="#009254" stroke-width="3"/><g fill="none" stroke="#009254" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M-8 0H-24M-17 -6L-24 0L-17 6"/><path d="M8 0H24M17 -6L24 0L17 6"/><path d="M0 -8V-24M-6 -17L0 -24L6 -17" transform="rotate(180)"/><path d="M0 8V24M-6 17L0 24L6 17" transform="rotate(180)"/></g></g>
<text x="670" y="195" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">NAT</text>
<g transform="translate(880 140) scale(0.7)" data-lib="app"><rect x="-38" y="-28" width="76" height="56" rx="5" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><rect x="-38" y="-28" width="76" height="16" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="3"/><circle cx="-28" cy="-20" r="2.5" fill="#003ecc"/><circle cx="-20" cy="-20" r="2.5" fill="#003ecc"/><path d="M-26 0h30M-26 12h46" stroke="#003ecc" stroke-width="3" stroke-linecap="round" fill="none"/></g>
<text x="880" y="195" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Aplicación</text>
<g transform="translate(1040 140) scale(0.7)" data-lib="db"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><path d="M-30 -24 V24 C-30 36 30 36 30 24 V-24"></path><ellipse cx="0" cy="-24" rx="30" ry="11" fill="#e6ecfa"></ellipse><path d="M-30 -4 C-30 8 30 8 30 -4" fill="none"></path><path d="M-30 14 C-30 26 30 26 30 14" fill="none"></path></g></g>
<text x="1040" y="195" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Base de datos</text>
<polyline points="742,145 788,145" fill="none" stroke="#364e6c" stroke-width="2.5" marker-end="url(#g1202m364e6c)"/>
<rect x="360" y="280" width="230" height="30" rx="15.0" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/>
<text x="475" y="299.66" font-size="10.35pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Tablas de rutas virtuales</text>
<rect x="600" y="280" width="230" height="30" rx="15.0" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/>
<text x="715" y="299.66" font-size="10.35pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Grupos de seguridad y ACL</text>
<rect x="860" y="280" width="270" height="30" rx="15.0" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"/>
<text x="995" y="299.66" font-size="10.35pt" font-weight="700" fill="#1e3a8a" text-anchor="middle">Service Mesh (microservicios)</text>
<text x="745" y="345" font-size="10.35pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Los recursos se definen por software y se administran por consola, API o automatización</text></g><text x="600" y="484" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 12.2. Componentes de una red virtual en la nube (VPC).</text></svg>
</div>

Entre los elementos principales se incluyen:

- Redes privadas virtuales (VPC o *Virtual Private Cloud*).
- Subredes públicas y privadas.
- Tablas de enrutamiento virtuales.
- *Gateways* de Internet y NAT.
- VPN e interconexiones dedicadas.
- Grupos de seguridad y listas de control de acceso.
- Balanceadores de carga.
- *Service Mesh* para arquitecturas de microservicios.

Entre sus ventajas destacan la rapidez de despliegue, la reducción de la inversión inicial y la integración con ecosistemas DevOps.

Como desafíos aparecen la gobernanza, el control de costos, la complejidad operativa y la dependencia del proveedor. Los mecanismos de redundancia y alta disponibilidad que garantizan la continuidad en infraestructuras *cloud* se ilustran en el **Anexo IV.**

## 12.2 ZERO TRUST

*Zero Trust* es un modelo de seguridad que elimina la confianza implícita concedida solo por la ubicación de un usuario o dispositivo dentro de una red.

<div class="diagram" id="figura-12-03" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1203" viewBox="0 0 1200 422" role="img" aria-labelledby="g1203-title">
<title id="g1203-title">Confianza implícita frente a verificación explícita</title>
<defs><marker id="g1203md40000" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#d40000"/></marker><marker id="g1203nd40000" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#d40000"/></marker><marker id="g1203m009254" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#009254"/></marker><marker id="g1203n009254" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#009254"/></marker></defs>
<g id="g1203-c" transform="translate(20 20)"><rect x="0" y="0" width="560" height="350" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="0" y1="34" x2="560" y2="34" stroke="#d40000" stroke-width="1.5"/>
<text x="280" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Modelo perimetral</text>
<rect x="600" y="0" width="560" height="350" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="600" y1="34" x2="1160" y2="34" stroke="#009254" stroke-width="1.5"/>
<text x="880" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Zero Trust</text>
<rect x="120" y="70" width="400" height="250" rx="6" fill="#e6ecfa" fill-opacity="0.55" stroke="#003ecc" stroke-width="2" stroke-dasharray="7 5"/>
<text x="132" y="92" font-size="12.5pt" font-weight="700" fill="#1e3a8a" text-anchor="start">Red interna confiable</text>
<g transform="translate(56 190) scale(0.8)" data-lib="firewall"><rect x="-36" y="-28" width="72" height="56" rx="4" fill="#ffffff" stroke="#dd3a00" stroke-width="3"/><path d="M-36 -9.5H36M-36 9.5H36M-12 -28V-9.5M12 -9.5V9.5M-12 9.5V28" stroke="#dd3a00" stroke-width="2.5" fill="none"/><rect x="-36" y="-28" width="72" height="18.5" rx="3" fill="#f6cebf" stroke="#dd3a00" stroke-width="3"/><path d="M-36 -9.5H36M-12 -28V-9.5M12 -9.5V9.5M-12 9.5V28" stroke="#dd3a00" stroke-width="2.5" fill="none"/></g>
<text x="56" y="245" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Perímetro</text>
<polyline points="98,190 118,190" fill="none" stroke="#d40000" stroke-width="2.5" marker-end="url(#g1203md40000)"/>
<line x1="220" y1="150" x2="370" y2="150" stroke="#003ecc" stroke-width="2.5"/>
<line x1="220" y1="150" x2="295" y2="260" stroke="#003ecc" stroke-width="2.5"/>
<line x1="370" y1="150" x2="295" y2="260" stroke="#003ecc" stroke-width="2.5"/>
<g transform="translate(220 150) scale(0.6)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<g transform="translate(370 150) scale(0.6)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<g transform="translate(295 260) scale(0.6)" data-lib="db"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><path d="M-30 -24 V24 C-30 36 30 36 30 24 V-24"></path><ellipse cx="0" cy="-24" rx="30" ry="11" fill="#e6ecfa"></ellipse><path d="M-30 -4 C-30 8 30 8 30 -4" fill="none"></path><path d="M-30 14 C-30 26 30 26 30 14" fill="none"></path></g></g>
<text x="280" y="300" font-size="10.35pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Dentro de la red, todo es confiable</text>
<g transform="translate(660 120) scale(0.7)" data-lib="user"><g stroke="#7c3aed" stroke-width="3" fill="#ffffff"><circle cx="0" cy="-18" r="14" fill="#f2ebfd"></circle><path d="M-30 30 C-30 4 -18 0 0 0 C18 0 30 4 30 30 Z" fill="#f2ebfd"></path></g></g>
<text x="660" y="175" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Usuario</text>
<g transform="translate(660 255) scale(0.55)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="660" y="300" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Dispositivo</text>
<rect x="820" y="90" width="150" height="170" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="820" y1="141" x2="970" y2="141" stroke="#009254" stroke-width="1.5"/>
<text x="895" y="113" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Verifica cada</text>
<text x="895" y="130" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">solicitud</text>
<g transform="translate(895 183.84) scale(1.2)" data-lib="shield"><path d="M 0 -26 L 22 -17 L 22 2 C 22 16 0 26 0 26 C 0 26 -22 16 -22 2 L -22 -17 Z" fill="#009254" stroke="#009254" stroke-width="2"></path><path d="M-10 0 L-3 8 L11 -9" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<polyline points="710,120 818,175" fill="none" stroke="#009254" stroke-width="2.5" marker-end="url(#g1203m009254)"/>
<polyline points="710,255 818,175" fill="none" stroke="#009254" stroke-width="2.5" marker-end="url(#g1203m009254)"/>
<polyline points="972,175 1060,100" fill="none" stroke="#009254" stroke-width="2.5" marker-end="url(#g1203m009254)"/>
<g transform="translate(1100 94) scale(0.5)" data-lib="app"><rect x="-38" y="-28" width="76" height="56" rx="5" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><rect x="-38" y="-28" width="76" height="16" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="3"/><circle cx="-28" cy="-20" r="2.5" fill="#003ecc"/><circle cx="-20" cy="-20" r="2.5" fill="#003ecc"/><path d="M-26 0h30M-26 12h46" stroke="#003ecc" stroke-width="3" stroke-linecap="round" fill="none"/></g>
<text x="1100" y="130" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Aplicación</text>
<polyline points="972,175 1060,190" fill="none" stroke="#009254" stroke-width="2.5" marker-end="url(#g1203m009254)"/>
<g transform="translate(1100 184) scale(0.5)" data-lib="db"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><path d="M-30 -24 V24 C-30 36 30 36 30 24 V-24"></path><ellipse cx="0" cy="-24" rx="30" ry="11" fill="#e6ecfa"></ellipse><path d="M-30 -4 C-30 8 30 8 30 -4" fill="none"></path><path d="M-30 14 C-30 26 30 26 30 14" fill="none"></path></g></g>
<text x="1100" y="220" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Datos</text>
<polyline points="972,175 1060,280" fill="none" stroke="#009254" stroke-width="2.5" marker-end="url(#g1203m009254)"/>
<g transform="translate(1100 274) scale(0.5)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<text x="1100" y="310" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Servidor</text>
<text x="880" y="300" font-size="10.35pt" font-weight="400" fill="#065f46" text-anchor="middle">Ninguna entidad es confiable por defecto</text></g><text x="600" y="404" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 12.3. Confianza implícita frente a verificación explícita.</text></svg>
</div>

En los modelos tradicionales, la pertenencia a la red corporativa podía interpretarse como una señal suficiente de confianza. *Zero Trust* parte de una premisa diferente: ninguna entidad obtiene confianza automática por su ubicación; cada solicitud de acceso debe evaluarse mediante políticas explícitas y contexto.

Su principio suele resumirse como "nunca confiar, siempre verificar". La Figura 12.3 contrasta el modelo perimetral con el enfoque *Zero Trust*.

Cada solicitud de acceso debe evaluarse mediante políticas que pueden considerar identidad, estado del dispositivo y otros atributos contextuales, según el recurso y el nivel de riesgo.

Entre los atributos más habituales se encuentran:

- Identidad del usuario.
- Estado del dispositivo.
- Ubicación geográfica.
- Nivel de riesgo.
- Horario de acceso.
- Sensibilidad del recurso solicitado.

La Figura 12.4 muestra cómo el motor de políticas combina estos atributos para permitir, condicionar o denegar el acceso.

Las organizaciones adoptan *Zero Trust* para reducir movimientos laterales, contener incidentes y proteger entornos distribuidos donde usuarios, aplicaciones y datos se encuentran repartidos entre múltiples ubicaciones y proveedores de nube.

<div class="diagram" id="figura-12-04" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1204" viewBox="0 0 1200 422" role="img" aria-labelledby="g1204-title">
<title id="g1204-title">Atributos que evalúa el motor de políticas en cada solicitud</title>
<defs><marker id="g1204m003ecc" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#003ecc"/></marker><marker id="g1204n003ecc" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#003ecc"/></marker><marker id="g1204m009254" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#009254"/></marker><marker id="g1204n009254" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#009254"/></marker><marker id="g1204mdd3a00" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#dd3a00"/></marker><marker id="g1204ndd3a00" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#dd3a00"/></marker><marker id="g1204md40000" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#d40000"/></marker><marker id="g1204nd40000" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#d40000"/></marker></defs>
<g id="g1204-c" transform="translate(20 20)"><rect x="0" y="0" width="330" height="46" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<g transform="translate(28 23) scale(0.38)" data-lib="user"><g stroke="#7c3aed" stroke-width="3" fill="#ffffff"><circle cx="0" cy="-18" r="14" fill="#f2ebfd"></circle><path d="M-30 30 C-30 4 -18 0 0 0 C18 0 30 4 30 30 Z" fill="#f2ebfd"></path></g></g>
<text x="60" y="28" font-size="10.9pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Identidad del usuario</text>
<polyline points="332,23 470,174" fill="none" stroke="#003ecc" stroke-width="1.6" marker-end="url(#g1204m003ecc)"/>
<rect x="0" y="58" width="330" height="46" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<g transform="translate(28 81) scale(0.38)" data-lib="pc"><g stroke="#d40000" stroke-width="3" fill="#ffffff"><rect x="-46" y="-42" width="92" height="62" rx="5"/><rect x="-38" y="-34" width="76" height="46" fill="#fbe6e6" stroke-width="1.5"/><path d="M-8 20v12h16V20M-28 34h56" fill="none" stroke-linecap="round"/><path d="M-26 -22h38M-26 -10h24" stroke-width="3" stroke-linecap="round" fill="none"/></g></g>
<text x="60" y="86" font-size="10.9pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Estado del dispositivo</text>
<polyline points="332,81 470,174" fill="none" stroke="#003ecc" stroke-width="1.6" marker-end="url(#g1204m003ecc)"/>
<rect x="0" y="116" width="330" height="46" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<g transform="translate(28 139) scale(0.38)" data-lib="pin"><path d="M0 30 C-22 4 -24 -4 -24 -12 A24 24 0 0 1 24 -12 C24 -4 22 4 0 30 Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3"></path><circle cx="0" cy="-12" r="8" fill="#003ecc"></circle></g>
<text x="60" y="144" font-size="10.9pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Ubicación geográfica</text>
<polyline points="332,139 470,174" fill="none" stroke="#003ecc" stroke-width="1.6" marker-end="url(#g1204m003ecc)"/>
<rect x="0" y="174" width="330" height="46" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<g transform="translate(28 197) scale(0.38)" data-lib="gauge"><path d="M-30 18 A30 30 0 1 1 30 18" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><path d="M0 14 L16 -12" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><circle cx="0" cy="14" r="5" fill="#7c3aed"></circle></g>
<text x="60" y="202" font-size="10.9pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Nivel de riesgo</text>
<polyline points="332,197 470,174" fill="none" stroke="#003ecc" stroke-width="1.6" marker-end="url(#g1204m003ecc)"/>
<rect x="0" y="232" width="330" height="46" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<g transform="translate(28 255) scale(0.38)" data-lib="clock"><circle cx="0" cy="0" r="28" fill="#ebedf0" stroke="#364e6c" stroke-width="3"></circle><path d="M0 -16 V0 L12 8" fill="none" stroke="#364e6c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="60" y="260" font-size="10.9pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Horario de acceso</text>
<polyline points="332,255 470,174" fill="none" stroke="#003ecc" stroke-width="1.6" marker-end="url(#g1204m003ecc)"/>
<rect x="0" y="290" width="330" height="46" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<g transform="translate(28 313) scale(0.38)" data-lib="lock"><path d="M-12 -4 V-14 A12 12 0 0 1 12 -14 V-4" fill="none" stroke="#003ecc" stroke-width="4"></path><rect x="-20" y="-4" width="40" height="32" rx="5" fill="#003ecc"></rect><circle cx="0" cy="10" r="4" fill="#ffffff"></circle><rect x="-1.5" y="12" width="3" height="9" fill="#ffffff"></rect></g>
<text x="60" y="318" font-size="10.9pt" font-weight="700" fill="#1a1a1a" text-anchor="start">Sensibilidad del recurso</text>
<polyline points="332,313 470,174" fill="none" stroke="#003ecc" stroke-width="1.6" marker-end="url(#g1204m003ecc)"/>
<rect x="472" y="94" width="230" height="160" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<line x1="472" y1="128" x2="702" y2="128" stroke="#364e6c" stroke-width="1.5"/>
<text x="587" y="117" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Motor de políticas</text>
<g transform="translate(587 173.36) scale(0.9)" data-lib="shield"><path d="M 0 -26 L 22 -17 L 22 2 C 22 16 0 26 0 26 C 0 26 -22 16 -22 2 L -22 -17 Z" fill="#364e6c" stroke="#364e6c" stroke-width="2"></path><path d="M-10 0 L-3 8 L11 -9" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="587" y="225.12" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">Evalúa el contexto de la</text>
<text x="587" y="244.12" font-size="10.9pt" font-weight="400" fill="#1e3a5f" text-anchor="middle">solicitud</text>
<rect x="850" y="20" width="310" height="100" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="850" y1="52" x2="1160" y2="52" stroke="#009254" stroke-width="1.5"/>
<text x="1005" y="43" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Permitir</text>
<text x="1005" y="90.56" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Acceso al recurso autorizado</text>
<polyline points="704,174 848,70" fill="none" stroke="#009254" stroke-width="2.2" marker-end="url(#g1204m009254)"/>
<rect x="850" y="125" width="310" height="100" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="850" y1="157" x2="1160" y2="157" stroke="#dd3a00" stroke-width="1.5"/>
<text x="1005" y="148" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Exigir verificación</text>
<text x="1005" y="195.56" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Autenticación adicional</text>
<polyline points="704,174 848,175" fill="none" stroke="#dd3a00" stroke-width="2.2" marker-end="url(#g1204mdd3a00)"/>
<rect x="850" y="230" width="310" height="100" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="850" y1="262" x2="1160" y2="262" stroke="#d40000" stroke-width="1.5"/>
<text x="1005" y="253" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Denegar</text>
<text x="1005" y="300.56" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Solicitud bloqueada</text>
<polyline points="704,174 848,280" fill="none" stroke="#d40000" stroke-width="2.2" marker-end="url(#g1204md40000)"/></g><text x="600" y="404" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 12.4. Atributos que evalúa el motor de políticas en cada solicitud.</text></svg>
</div>

El flujo de evaluación del acceso según la identidad, el contexto y el estado del dispositivo, con reevaluaciones cuando las políticas o las señales de riesgo lo requieren, se representa en las Figuras 12.4 y 12.5.

## 12.3 ZTNA

ZTNA aplica principios *Zero Trust* al acceso remoto. Mientras que una VPN tradicional suele proporcionar conectividad a una red o segmento, ZTNA busca conceder acceso granular a aplicaciones o recursos autorizados, sin otorgar por defecto acceso general a la red. El alcance exacto depende de la arquitectura y de las capacidades del producto: algunas implementaciones publican aplicaciones concretas y otras permiten acceso a grupos de recursos mediante políticas.

<div class="diagram" id="figura-12-05" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1205" viewBox="0 0 1200 342" role="img" aria-labelledby="g1205-title">
<title id="g1205-title">Proceso de acceso mediante ZTNA</title>
<defs><marker id="g1205m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1205n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g1205-c" transform="translate(20 20)"><circle cx="104.8" cy="15" r="15" fill="#1e3a8a"/>
<text x="104.8" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">1</text>
<rect x="0" y="38" width="209.6" height="232" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="72" x2="209.6" y2="72" stroke="#003ecc" stroke-width="1.5"/>
<text x="104.8" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Autenticación</text>
<g transform="translate(104.8 143.28) scale(0.95)" data-lib="user"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><circle cx="0" cy="-18" r="14" fill="#e6ecfa"></circle><path d="M-30 30 C-30 4 -18 0 0 0 C18 0 30 4 30 30 Z" fill="#e6ecfa"></path></g></g>
<text x="104.8" y="227.44" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">El usuario se identifica ante</text>
<text x="104.8" y="246.44" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">el proveedor de identidad</text>
<polyline points="211.6,154 235.6,154" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1205m364e6c)"/>
<circle cx="342.4" cy="15" r="15" fill="#065f46"/>
<text x="342.4" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">2</text>
<rect x="237.6" y="38" width="209.6" height="232" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="237.6" y1="72" x2="447.2" y2="72" stroke="#009254" stroke-width="1.5"/>
<text x="342.4" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Postura</text>
<g transform="translate(342.4 143.28) scale(0.95)" data-lib="check"><circle cx="0" cy="0" r="28" fill="#009254"></circle><path d="M-13 1 L-4 11 L15 -10" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="342.4" y="227.44" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Se verifica el cumplimiento</text>
<text x="342.4" y="246.44" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">de políticas de seguridad</text>
<polyline points="449.2,154 473.2,154" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1205m364e6c)"/>
<circle cx="580" cy="15" r="15" fill="#5b21b6"/>
<text x="580" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
<rect x="475.2" y="38" width="209.6" height="232" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="475.2" y1="72" x2="684.8" y2="72" stroke="#7c3aed" stroke-width="1.5"/>
<text x="580" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Evaluación</text>
<g transform="translate(580 143.28) scale(0.95)" data-lib="eye"><path d="M-34 0 C-18 -24 18 -24 34 0 C18 24 -18 24 -34 0 Z" fill="#f2ebfd" stroke="#7c3aed" stroke-width="3"></path><circle cx="0" cy="0" r="9" fill="#7c3aed"></circle></g>
<text x="580" y="227.44" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">El broker ZTNA analiza el</text>
<text x="580" y="246.44" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">contexto de acceso</text>
<polyline points="686.8,154 710.8,154" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1205m364e6c)"/>
<circle cx="817.6" cy="15" r="15" fill="#7c2d12"/>
<text x="817.6" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">4</text>
<rect x="712.8" y="38" width="209.6" height="232" rx="6" fill="#fcebe6" stroke="#dd3a00" stroke-width="2"/>
<line x1="712.8" y1="72" x2="922.4" y2="72" stroke="#dd3a00" stroke-width="1.5"/>
<text x="817.6" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Canal cifrado</text>
<g transform="translate(817.6 143.28) scale(0.95)" data-lib="tunnel"><g stroke="#dd3a00" stroke-width="3"><path d="M-40 -14 H40 M-40 14 H40" fill="none"></path><ellipse cx="-40" cy="0" rx="8" ry="14" fill="#f6cebf"></ellipse><ellipse cx="40" cy="0" rx="8" ry="14" fill="#fcebe6"></ellipse></g><path d="M-26 0 H20 M12 -7 l8 7 -8 7" fill="none" stroke="#dd3a00" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></g>
<text x="817.6" y="227.44" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">Se establece un túnel hacia</text>
<text x="817.6" y="246.44" font-size="10.9pt" font-weight="400" fill="#7c2d12" text-anchor="middle">la aplicación autorizada</text>
<polyline points="924.4,154 948.4,154" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1205m364e6c)"/>
<circle cx="1055.2" cy="15" r="15" fill="#7f1d1d"/>
<text x="1055.2" y="20" font-size="11.35pt" font-weight="700" fill="#ffffff" text-anchor="middle">5</text>
<rect x="950.4" y="38" width="209.6" height="232" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="950.4" y1="72" x2="1160" y2="72" stroke="#d40000" stroke-width="1.5"/>
<text x="1055.2" y="61" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Acceso</text>
<g transform="translate(1055.2 143.28) scale(0.95)" data-lib="app"><rect x="-38" y="-28" width="76" height="56" rx="5" fill="#ffffff" stroke="#d40000" stroke-width="3"/><rect x="-38" y="-28" width="76" height="16" rx="4" fill="#f4bfbf" stroke="#d40000" stroke-width="3"/><circle cx="-28" cy="-20" r="2.5" fill="#d40000"/><circle cx="-20" cy="-20" r="2.5" fill="#d40000"/><path d="M-26 0h30M-26 12h46" stroke="#d40000" stroke-width="3" stroke-linecap="round" fill="none"/></g>
<text x="1055.2" y="227.44" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">El usuario llega solo al</text>
<text x="1055.2" y="246.44" font-size="10.9pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">recurso permitido</text></g><text x="600" y="324" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 12.5. Proceso de acceso mediante ZTNA.</text></svg>
</div>

Se ha convertido en uno de los componentes de las arquitecturas modernas de seguridad y de las plataformas SASE.

El proceso general, que se representa en la Figura 12.5, funciona de la siguiente manera:

- El usuario se autentica mediante un proveedor de identidad.
- Se verifica el cumplimiento de políticas de seguridad.
- Un *broker* ZTNA evalúa el contexto de acceso.
- Se establece un canal cifrado hacia la aplicación autorizada.
- El usuario obtiene acceso exclusivamente al recurso permitido.

La aplicación puede permanecer inaccesible para usuarios no autorizados y no es necesario exponer directamente la red interna para proporcionar el acceso al recurso. La Tabla 12.1 compara el acceso mediante una VPN tradicional con el acceso mediante ZTNA.

<div class="diagram tabla-svg" id="tabla-12-1" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 384" role="img" aria-labelledby="t58-title"><title id="t58-title">Tabla 12.1. Comparación entre VPN tradicional y ZTNA.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="84.4" y="20.0" dominant-baseline="central" text-anchor="middle">Característica</text>
<text class="tb-ht" x="420.3" y="20.0" dominant-baseline="central" text-anchor="middle">VPN tradicional</text>
<text class="tb-ht" x="936.0" y="20.0" dominant-baseline="central" text-anchor="middle">ZTNA</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="60.8" dominant-baseline="central">Modelo de</text>
<text class="tb-tx tb-b" x="12.0" y="83.5" dominant-baseline="central">acceso</text>
<text class="tb-tx" x="180.7" y="60.8" dominant-baseline="central">Proporciona conectividad a una red o segmento autorizado</text>
<text class="tb-tx" x="180.7" y="83.5" dominant-baseline="central">mediante un túnel.</text>
<text class="tb-tx" x="683.9" y="60.8" dominant-baseline="central">Proporciona acceso a aplicaciones o recursos específicos</text>
<text class="tb-tx" x="683.9" y="83.5" dominant-baseline="central">mediante políticas de identidad y contexto.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">Autenticación</text>
<text class="tb-tx" x="180.7" y="124.2" dominant-baseline="central">Puede basarse en credenciales, certificados y MFA.</text>
<text class="tb-tx" x="683.9" y="124.2" dominant-baseline="central">Utiliza identidad, autenticación y políticas contextuales.</text>
<rect class="tb-te" x="0" y="145.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="176.4" dominant-baseline="central">Alcance</text>
<text class="tb-tx" x="180.7" y="165.0" dominant-baseline="central">Puede permitir acceso a subredes o recursos definidos por</text>
<text class="tb-tx" x="180.7" y="187.8" dominant-baseline="central">las rutas y políticas.</text>
<text class="tb-tx" x="683.9" y="165.0" dominant-baseline="central">Limita el acceso al recurso o aplicación expresamente</text>
<text class="tb-tx" x="683.9" y="187.8" dominant-baseline="central">autorizados.</text>
<rect class="tb-to" x="0" y="208.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="228.5" dominant-baseline="central">Movimiento</text>
<text class="tb-tx tb-b" x="12.0" y="251.2" dominant-baseline="central">lateral</text>
<text class="tb-tx" x="180.7" y="228.5" dominant-baseline="central">Puede existir dentro del segmento accesible si la</text>
<text class="tb-tx" x="180.7" y="251.2" dominant-baseline="central">segmentación y las políticas son insuficientes.</text>
<text class="tb-tx" x="683.9" y="239.9" dominant-baseline="central">Reduce la exposición al limitar el acceso a recursos concretos.</text>
<rect class="tb-te" x="0" y="272.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="292.0" dominant-baseline="central">Criterios de</text>
<text class="tb-tx tb-b" x="12.0" y="314.8" dominant-baseline="central">decisión</text>
<text class="tb-tx" x="180.7" y="303.4" dominant-baseline="central">Credenciales, pertenencia a la VPN y políticas de red.</text>
<text class="tb-tx" x="683.9" y="303.4" dominant-baseline="central">Identidad, estado del dispositivo, contexto y nivel de riesgo.</text>
<text class="tb-cap" x="600.0" y="361.5" text-anchor="middle">Tabla 12.1. Comparación entre VPN tradicional y ZTNA.</text></svg>
</div>

## 12.4 SASE

SASE es un modelo arquitectónico que integra capacidades de red y seguridad en una plataforma unificada entregada desde la nube.

El concepto fue introducido por Gartner en 2019 para responder a la creciente dispersión de usuarios, aplicaciones y datos fuera de los centros de datos tradicionales. En lugar de desplegar múltiples soluciones independientes, SASE combina SD-WAN, *Zero Trust Network Access* (ZTNA), *Secure Web Gateway* (SWG), Firewall as a Service (FWaaS), *Cloud Access Security Broker* (CASB) y protección de acceso a aplicaciones SaaS. La Tabla 12.2 resume estos componentes.

La plataforma aplica políticas de seguridad basadas en la identidad del usuario, el estado del dispositivo, la ubicación, el tipo de aplicación y el nivel de riesgo. El tráfico puede dirigirse hacia un punto de presencia (PoP) apropiado del proveedor SASE, donde se realizan funciones de inspección, filtrado y aplicación de políticas, como se observa en la Figura 12.6.

<div class="diagram tabla-svg" id="tabla-12-2" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 406" role="img" aria-labelledby="t59-title"><title id="t59-title">Tabla 12.2. Componentes de una plataforma SASE.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="142.2" y="20.0" dominant-baseline="central" text-anchor="middle">Componente</text>
<text class="tb-ht" x="527.2" y="20.0" dominant-baseline="central" text-anchor="middle">Función</text>
<text class="tb-ht" x="985.0" y="20.0" dominant-baseline="central" text-anchor="middle">Aplicación</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">SD-WAN</text>
<text class="tb-tx" x="296.3" y="60.8" dominant-baseline="central">Gestiona la conectividad y selección de rutas entre sedes</text>
<text class="tb-tx" x="296.3" y="83.5" dominant-baseline="central">y servicios.</text>
<text class="tb-tx" x="782.1" y="60.8" dominant-baseline="central">Optimización del transporte y conectividad</text>
<text class="tb-tx" x="782.1" y="83.5" dominant-baseline="central">distribuida.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">ZTNA</text>
<text class="tb-tx" x="296.3" y="124.2" dominant-baseline="central">Controla el acceso a aplicaciones según identidad y</text>
<text class="tb-tx" x="296.3" y="147.0" dominant-baseline="central">contexto.</text>
<text class="tb-tx" x="782.1" y="135.6" dominant-baseline="central">Acceso remoto de confianza cero.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="199.1" dominant-baseline="central">SWG (Secure Web Gateway)</text>
<text class="tb-tx" x="296.3" y="199.1" dominant-baseline="central">Inspecciona y controla el tráfico web.</text>
<text class="tb-tx" x="782.1" y="187.8" dominant-baseline="central">Protección de navegación y aplicación de políticas</text>
<text class="tb-tx" x="782.1" y="210.5" dominant-baseline="central">web.</text>
<rect class="tb-to" x="0" y="231.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="262.6" dominant-baseline="central">FWaaS (Firewall as a Service)</text>
<text class="tb-tx" x="296.3" y="251.2" dominant-baseline="central">Proporciona funciones de firewall como servicio desde la</text>
<text class="tb-tx" x="296.3" y="274.0" dominant-baseline="central">nube.</text>
<text class="tb-tx" x="782.1" y="251.2" dominant-baseline="central">Filtrado de tráfico en puntos de presencia del</text>
<text class="tb-tx" x="782.1" y="274.0" dominant-baseline="central">proveedor.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="314.8" dominant-baseline="central">CASB (Cloud Access Security</text>
<text class="tb-tx tb-b" x="12.0" y="337.5" dominant-baseline="central">Broker)</text>
<text class="tb-tx" x="296.3" y="314.8" dominant-baseline="central">Proporciona visibilidad y control sobre el uso de</text>
<text class="tb-tx" x="296.3" y="337.5" dominant-baseline="central">aplicaciones SaaS.</text>
<text class="tb-tx" x="782.1" y="314.8" dominant-baseline="central">Políticas de acceso y protección de datos en</text>
<text class="tb-tx" x="782.1" y="337.5" dominant-baseline="central">servicios cloud.</text>
<text class="tb-cap" x="600.0" y="384.2" text-anchor="middle">Tabla 12.2. Componentes de una plataforma SASE.</text></svg>
</div>

La selección del PoP puede considerar proximidad, disponibilidad, latencia y las políticas del servicio. SASE es especialmente relevante en organizaciones con teletrabajo, aplicaciones SaaS y estrategias de transformación digital basadas en la nube.

<div class="diagram" id="figura-12-06" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1206" viewBox="0 0 1200 472" role="img" aria-labelledby="g1206-title">
<title id="g1206-title">Arquitectura SASE: origen, punto de presencia y destino</title>
<defs><marker id="g1206m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1206n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g1206-c" transform="translate(20 20)"><g transform="translate(70 80) scale(0.8)" data-lib="user"><g stroke="#7c3aed" stroke-width="3" fill="#ffffff"><circle cx="0" cy="-18" r="14" fill="#f2ebfd"></circle><path d="M-30 30 C-30 4 -18 0 0 0 C18 0 30 4 30 30 Z" fill="#f2ebfd"></path></g></g>
<text x="70" y="132" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Usuario remoto</text>
<polyline points="140,80 300,200" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1206m364e6c)"/>
<g transform="translate(70 190) scale(0.8)" data-lib="building"><rect x="-26" y="-34" width="52" height="68" rx="3" fill="#ffffff" stroke="#003ecc" stroke-width="3"></rect><rect x="-17" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-17" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-3" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-24" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="-8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="11" y="8" width="10" height="9" fill="#bfcff2" stroke="#003ecc" stroke-width="1.5"></rect><rect x="-7" y="19" width="14" height="15" fill="#003ecc"></rect></g>
<text x="70" y="242" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Sucursal</text>
<polyline points="140,190 300,200" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1206m364e6c)"/>
<g transform="translate(70 300) scale(0.8)" data-lib="phone"><rect x="-17" y="-32" width="34" height="64" rx="6" fill="#ffffff" stroke="#7c3aed" stroke-width="3"/><rect x="-12" y="-24" width="24" height="42" rx="2" fill="#f2ebfd"/><circle cx="0" cy="25" r="3" fill="#7c3aed"/></g>
<text x="70" y="352" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Dispositivo móvil</text>
<polyline points="140,300 300,200" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1206m364e6c)"/>
<g transform="translate(1090 80) scale(0.8)" data-lib="cloud"><path d="M-30 18 C-44 18 -44 -4 -28 -6 C-28 -26 4 -34 14 -16 C32 -22 46 -2 34 14 C32 18 28 18 26 18 Z" fill="#e6ecfa" stroke="#003ecc" stroke-width="3" stroke-linejoin="round"></path></g>
<text x="1090" y="132" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Aplicaciones SaaS</text>
<polyline points="860,200 1020,80" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1206m364e6c)"/>
<g transform="translate(1090 190) scale(0.8)" data-lib="globe"><g stroke="#7c3aed" stroke-width="3" fill="none"><circle cx="0" cy="0" r="30" fill="#f2ebfd"></circle><ellipse cx="0" cy="0" rx="13" ry="30"></ellipse><path d="M-30 0H30M-26 -15H26M-26 15H26" stroke-width="2"></path></g></g>
<text x="1090" y="242" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Internet</text>
<polyline points="860,200 1020,190" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1206m364e6c)"/>
<g transform="translate(1090 300) scale(0.8)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<text x="1090" y="352" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Centro de datos</text>
<polyline points="860,200 1020,300" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1206m364e6c)"/>
<rect x="300" y="0" width="560" height="400" rx="6" fill="#f2ebfd" fill-opacity="0.55" stroke="#7c3aed" stroke-width="2" stroke-dasharray="7 5"/>
<text x="312" y="22" font-size="12.5pt" font-weight="700" fill="#5b21b6" text-anchor="start">PoP del proveedor SASE</text>
<rect x="320" y="36" width="520" height="56" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<text x="580" y="68.56" font-size="10.9pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Consola centralizada de políticas</text>
<rect x="320" y="112" width="160" height="110" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="320" y1="144" x2="480" y2="144" stroke="#003ecc" stroke-width="1.5"/>
<text x="400" y="135" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">SD-WAN</text>
<text x="400" y="178.06" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Conectividad de</text>
<text x="400" y="197.06" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">sucursales</text>
<rect x="500" y="112" width="160" height="110" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="500" y1="144" x2="660" y2="144" stroke="#003ecc" stroke-width="1.5"/>
<text x="580" y="135" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">ZTNA</text>
<text x="580" y="178.06" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Acceso por</text>
<text x="580" y="197.06" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">aplicación</text>
<rect x="680" y="112" width="160" height="110" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="680" y1="144" x2="840" y2="144" stroke="#003ecc" stroke-width="1.5"/>
<text x="760" y="135" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">SWG</text>
<text x="760" y="178.06" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Navegación web</text>
<text x="760" y="197.06" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">segura</text>
<rect x="410" y="246" width="160" height="110" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="410" y1="278" x2="570" y2="278" stroke="#003ecc" stroke-width="1.5"/>
<text x="490" y="269" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">FWaaS</text>
<text x="490" y="312.06" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Firewall desde la</text>
<text x="490" y="331.06" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">nube</text>
<rect x="590" y="246" width="160" height="110" rx="6" fill="#e6f4ee" stroke="#009254" stroke-width="2"/>
<line x1="590" y1="278" x2="750" y2="278" stroke="#009254" stroke-width="1.5"/>
<text x="670" y="269" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">CASB</text>
<text x="670" y="312.06" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">Control de</text>
<text x="670" y="331.06" font-size="10.9pt" font-weight="400" fill="#065f46" text-anchor="middle">aplicaciones SaaS</text></g><text x="600" y="454" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 12.6. Arquitectura SASE: origen, punto de presencia y destino.</text></svg>
</div>

### Principales beneficios

- Consola centralizada de administración.
- Seguridad uniforme para usuarios y sucursales.
- Menor dependencia de dispositivos perimetrales.

### Limitaciones

- Dependencia de la conectividad a Internet.
- Posible dependencia tecnológica del proveedor.
- Procesos de migración complejos desde infraestructuras tradicionales.

## 12.5 MICROSEGMENTACIÓN

La microsegmentación extiende el concepto tradicional de segmentación de red hasta el nivel de aplicaciones, máquinas virtuales, contenedores o cargas de trabajo individuales.

Mientras una VLAN separa grupos completos de dispositivos, la microsegmentación controla específicamente qué aplicaciones o servicios pueden comunicarse entre sí. La Figura 12.7 contrasta ambos enfoques.

<div class="diagram tabla-svg" id="tabla-12-3" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 361" role="img" aria-labelledby="t60-title"><title id="t60-title">Tabla 12.3. Tecnologías y plataformas relacionadas con la microsegmentación.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="141.2" y="20.0" dominant-baseline="central" text-anchor="middle">Tecnología</text>
<text class="tb-ht" x="403.5" y="20.0" dominant-baseline="central" text-anchor="middle">Categoría</text>
<text class="tb-ht" x="862.3" y="20.0" dominant-baseline="central" text-anchor="middle">Descripción</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">VXLAN y Geneve</text>
<text class="tb-tx" x="294.5" y="72.1" dominant-baseline="central">Encapsulación overlay</text>
<text class="tb-tx" x="536.6" y="60.8" dominant-baseline="central">Mecanismos de encapsulación utilizados para transportar redes virtuales sobre</text>
<text class="tb-tx" x="536.6" y="83.5" dominant-baseline="central">una infraestructura IP.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="124.2" dominant-baseline="central">VMware NSX</text>
<text class="tb-tx" x="294.5" y="124.2" dominant-baseline="central">Virtualización de red</text>
<text class="tb-tx" x="536.6" y="124.2" dominant-baseline="central">Plataforma de virtualización, segmentación y aplicación de políticas de red.</text>
<rect class="tb-te" x="0" y="145.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="165.0" dominant-baseline="central">Illumio</text>
<text class="tb-tx" x="294.5" y="165.0" dominant-baseline="central">Segmentación</text>
<text class="tb-tx" x="536.6" y="165.0" dominant-baseline="central">Plataforma para definir y aplicar políticas de segmentación de cargas de trabajo.</text>
<rect class="tb-to" x="0" y="185.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="205.8" dominant-baseline="central">Akamai Guardicore</text>
<text class="tb-tx tb-b" x="12.0" y="228.5" dominant-baseline="central">Segmentation</text>
<text class="tb-tx" x="294.5" y="205.8" dominant-baseline="central">Seguridad de cargas de</text>
<text class="tb-tx" x="294.5" y="228.5" dominant-baseline="central">trabajo</text>
<text class="tb-tx" x="536.6" y="205.8" dominant-baseline="central">Plataforma de segmentación y protección de comunicaciones entre cargas de</text>
<text class="tb-tx" x="536.6" y="228.5" dominant-baseline="central">trabajo.</text>
<rect class="tb-te" x="0" y="249.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="269.2" dominant-baseline="central">Azure Network Security Groups</text>
<text class="tb-tx tb-b" x="12.0" y="292.0" dominant-baseline="central">(NSG)</text>
<text class="tb-tx" x="294.5" y="269.2" dominant-baseline="central">Control de tráfico en la</text>
<text class="tb-tx" x="294.5" y="292.0" dominant-baseline="central">nube</text>
<text class="tb-tx" x="536.6" y="280.6" dominant-baseline="central">Controles de tráfico aplicados a nivel de subred e interfaz de red en Azure.</text>
<text class="tb-cap" x="600.0" y="338.8" text-anchor="middle">Tabla 12.3. Tecnologías y plataformas relacionadas con la microsegmentación.</text></svg>
</div>

Nota: VXLAN y Geneve son mecanismos de encapsulación; no constituyen por sí mismos motores de políticas de microsegmentación. La aplicación de políticas depende de la plataforma de virtualización, el *firewall* o el sistema de segmentación utilizado.

La segmentación es un control habitual y valioso en arquitecturas *Zero Trust* porque limita las comunicaciones y el movimiento lateral. No obstante, *Zero Trust* es un modelo más amplio, basado en decisiones de acceso explícitas y contextuales; no exige una tecnología concreta de segmentación en todos los despliegues.

Las políticas se basan en la identidad de la carga de trabajo, las etiquetas, los roles de aplicación, el tipo de servicio y el contexto de seguridad.

Por ejemplo:

<div class="diagram" id="figura-12-07" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1207" viewBox="0 0 1200 402" role="img" aria-labelledby="g1207-title">
<title id="g1207-title">Segmentación por VLAN frente a microsegmentación</title>
<defs><marker id="g1207m003ecc" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#003ecc"/></marker><marker id="g1207n003ecc" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#003ecc"/></marker><marker id="g1207m009254" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#009254"/></marker><marker id="g1207n009254" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#009254"/></marker><marker id="g1207md40000" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#d40000"/></marker><marker id="g1207nd40000" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#d40000"/></marker></defs>
<g id="g1207-c" transform="translate(20 20)"><rect x="0" y="0" width="560" height="330" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="560" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="280" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Segmentación por VLAN</text>
<rect x="600" y="0" width="560" height="330" rx="6" fill="#fbe6e6" stroke="#d40000" stroke-width="2"/>
<line x1="600" y1="34" x2="1160" y2="34" stroke="#d40000" stroke-width="1.5"/>
<text x="880" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Microsegmentación</text>
<rect x="20" y="66" width="520" height="140" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2" stroke-dasharray="7 5"/>
<g transform="translate(90 120) scale(0.8)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<text x="90" y="172" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Web</text>
<g transform="translate(690 120) scale(0.8)" data-lib="server"><rect x="-44" y="-40" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="-27.5" r="4" fill="#d40000"/><path d="M-34 -27.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="-11" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="1.5" r="4" fill="#d40000"/><path d="M-34 1.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/><rect x="-44" y="18" width="88" height="25" rx="4" fill="#ffffff" stroke="#d40000" stroke-width="3"/><circle cx="30" cy="30.5" r="4" fill="#d40000"/><path d="M-34 30.5h34" stroke="#d40000" stroke-width="3" stroke-linecap="round"/></g>
<text x="690" y="172" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Web</text>
<g transform="translate(280 120) scale(0.8)" data-lib="app"><rect x="-38" y="-28" width="76" height="56" rx="5" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><rect x="-38" y="-28" width="76" height="16" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="3"/><circle cx="-28" cy="-20" r="2.5" fill="#003ecc"/><circle cx="-20" cy="-20" r="2.5" fill="#003ecc"/><path d="M-26 0h30M-26 12h46" stroke="#003ecc" stroke-width="3" stroke-linecap="round" fill="none"/></g>
<text x="280" y="172" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Aplicación</text>
<g transform="translate(880 120) scale(0.8)" data-lib="app"><rect x="-38" y="-28" width="76" height="56" rx="5" fill="#ffffff" stroke="#003ecc" stroke-width="3"/><rect x="-38" y="-28" width="76" height="16" rx="4" fill="#bfcff2" stroke="#003ecc" stroke-width="3"/><circle cx="-28" cy="-20" r="2.5" fill="#003ecc"/><circle cx="-20" cy="-20" r="2.5" fill="#003ecc"/><path d="M-26 0h30M-26 12h46" stroke="#003ecc" stroke-width="3" stroke-linecap="round" fill="none"/></g>
<text x="880" y="172" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Aplicación</text>
<g transform="translate(470 120) scale(0.8)" data-lib="db"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><path d="M-30 -24 V24 C-30 36 30 36 30 24 V-24"></path><ellipse cx="0" cy="-24" rx="30" ry="11" fill="#e6ecfa"></ellipse><path d="M-30 -4 C-30 8 30 8 30 -4" fill="none"></path><path d="M-30 14 C-30 26 30 26 30 14" fill="none"></path></g></g>
<text x="470" y="172" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Base de datos</text>
<g transform="translate(1070 120) scale(0.8)" data-lib="db"><g stroke="#003ecc" stroke-width="3" fill="#ffffff"><path d="M-30 -24 V24 C-30 36 30 36 30 24 V-24"></path><ellipse cx="0" cy="-24" rx="30" ry="11" fill="#e6ecfa"></ellipse><path d="M-30 -4 C-30 8 30 8 30 -4" fill="none"></path><path d="M-30 14 C-30 26 30 26 30 14" fill="none"></path></g></g>
<text x="1070" y="172" font-size="10.35pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Base de datos</text>
<polyline points="135,120 235,120" fill="none" stroke="#003ecc" stroke-width="2.5" marker-end="url(#g1207m003ecc)" marker-start="url(#g1207n003ecc)"/>
<polyline points="325,120 425,120" fill="none" stroke="#003ecc" stroke-width="2.5" marker-end="url(#g1207m003ecc)" marker-start="url(#g1207n003ecc)"/>
<polyline points="90,205 90,240 470,240 470,205" fill="none" stroke="#003ecc" stroke-width="2.5" marker-end="url(#g1207m003ecc)" marker-start="url(#g1207n003ecc)"/>
<text x="280" y="290" font-size="10.35pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Los equipos de una VLAN se comunican libremente</text>
<polyline points="735,120 835,120" fill="none" stroke="#009254" stroke-width="3" marker-end="url(#g1207m009254)"/>
<text x="785" y="100" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">TCP 8080</text>
<polyline points="925,120 1025,120" fill="none" stroke="#009254" stroke-width="3" marker-end="url(#g1207m009254)"/>
<text x="975" y="100" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">TCP 3306</text>
<polyline points="690,205 690,245 1070,245 1070,205" fill="none" stroke="#d40000" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#g1207md40000)"/>
<g transform="translate(880 245) scale(0.6)" data-lib="x"><circle cx="0" cy="0" r="28" fill="#d40000"></circle><path d="M-11 -11 L11 11 M11 -11 L-11 11" stroke="#ffffff" stroke-width="5" stroke-linecap="round"></path></g>
<text x="880" y="285" font-size="10.35pt" font-weight="700" fill="#7f1d1d" text-anchor="middle">Web hacia base de datos: bloqueado</text>
<text x="880" y="312" font-size="10.35pt" font-weight="400" fill="#7f1d1d" text-anchor="middle">Solo se permiten los flujos necesarios</text></g><text x="600" y="384" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 12.7. Segmentación por VLAN frente a microsegmentación.</text></svg>
</div>

- El servidor web puede comunicarse con el servidor de aplicaciones solo por TCP 8080.
- El servidor de aplicaciones puede acceder a la base de datos solo por TCP 3306.
- La base de datos no acepta conexiones desde otros sistemas.

Este enfoque reduce las posibilidades de movimiento lateral dentro de una red comprometida.

Entre sus desafíos se encuentran la complejidad en la definición de políticas, la necesidad de conocer las dependencias entre aplicaciones y el mayor esfuerzo inicial de planificación.

Las tecnologías y plataformas relacionadas se resumen en la Tabla 12.3. Hoy la microsegmentación es uno de los mecanismos más efectivos para limitar el impacto de compromisos internos y ataques de movimiento lateral.

## 12.6 MODERNIZACIÓN DE REDES

La modernización de redes es un proceso continuo en el que las infraestructuras tradicionales evolucionan hacia plataformas automatizadas, programables y orientadas a servicios. El objetivo no es solo sustituir equipos antiguos, sino transformar la forma en que la red se diseña, opera y protege.

<div class="diagram tabla-svg" id="tabla-12-4" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 447" role="img" aria-labelledby="t61-title"><title id="t61-title">Tabla 12.4. Herramientas y modelos de automatización modernos.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="63.5"/>
<text class="tb-ht" x="105.8" y="20.0" dominant-baseline="central" text-anchor="middle">Herramienta o</text>
<text class="tb-ht" x="105.8" y="42.8" dominant-baseline="central" text-anchor="middle">tecnología</text>
<text class="tb-ht" x="343.3" y="31.4" dominant-baseline="central" text-anchor="middle">Categoría</text>
<text class="tb-ht" x="837.5" y="31.4" dominant-baseline="central" text-anchor="middle">Función</text>
<rect class="tb-te" x="0" y="63.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="94.9" dominant-baseline="central">Ansible</text>
<text class="tb-tx" x="223.7" y="83.5" dominant-baseline="central">Automatización de</text>
<text class="tb-tx" x="223.7" y="106.2" dominant-baseline="central">configuración</text>
<text class="tb-tx" x="487.0" y="94.9" dominant-baseline="central">Automatiza tareas de configuración y operación mediante playbooks.</text>
<rect class="tb-to" x="0" y="127.0" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="158.4" dominant-baseline="central">Terraform</text>
<text class="tb-tx" x="223.7" y="147.0" dominant-baseline="central">Infraestructura como código</text>
<text class="tb-tx" x="223.7" y="169.8" dominant-baseline="central">(IaC)</text>
<text class="tb-tx" x="487.0" y="158.4" dominant-baseline="central">Define y aprovisiona infraestructura mediante archivos declarativos.</text>
<rect class="tb-te" x="0" y="190.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="221.9" dominant-baseline="central">Kubernetes</text>
<text class="tb-tx" x="223.7" y="210.5" dominant-baseline="central">Orquestación de</text>
<text class="tb-tx" x="223.7" y="233.2" dominant-baseline="central">contenedores</text>
<text class="tb-tx" x="487.0" y="221.9" dominant-baseline="central">Gestiona despliegue, escalado y operación de cargas de trabajo en contenedores.</text>
<rect class="tb-to" x="0" y="254.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="274.0" dominant-baseline="central">Helm</text>
<text class="tb-tx" x="223.7" y="274.0" dominant-baseline="central">Gestor de paquetes</text>
<text class="tb-tx" x="487.0" y="274.0" dominant-baseline="central">Facilita la instalación y gestión de aplicaciones en Kubernetes.</text>
<rect class="tb-te" x="0" y="294.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="314.8" dominant-baseline="central">Pulumi</text>
<text class="tb-tx" x="223.7" y="314.8" dominant-baseline="central">IaC multilenguaje</text>
<text class="tb-tx" x="487.0" y="314.8" dominant-baseline="central">Define infraestructura mediante lenguajes de programación.</text>
<rect class="tb-to" x="0" y="335.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="366.9" dominant-baseline="central">GitOps</text>
<text class="tb-tx" x="223.7" y="355.5" dominant-baseline="central">Modelo operativo basado en</text>
<text class="tb-tx" x="223.7" y="378.2" dominant-baseline="central">Git</text>
<text class="tb-tx" x="487.0" y="355.5" dominant-baseline="central">Utiliza Git como fuente de verdad y herramientas como Argo CD y Flux para sincronizar</text>
<text class="tb-tx" x="487.0" y="378.2" dominant-baseline="central">el estado deseado.</text>
<text class="tb-cap" x="600.0" y="425.0" text-anchor="middle">Tabla 12.4. Herramientas y modelos de automatización modernos.</text></svg>
</div>

### Telemetría avanzada

Complementa los modelos tradicionales basados en SNMP con mecanismos de observabilidad y telemetría más dinámicos, según la plataforma, como gNMI y *Streaming Telemetry*, NETCONF, RESTCONF y gRPC (utilizado como transporte o *framework* en diversas implementaciones de telemetría y gestión). La Tabla 12.5 resume estos protocolos.

<div class="diagram tabla-svg" id="tabla-12-5" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 361" role="img" aria-labelledby="t62-title"><title id="t62-title">Tabla 12.5. Protocolos y tecnologías de gestión y telemetría.</title>
<rect class="tb-th" x="0" y="0.0" width="1200" height="40.8"/>
<text class="tb-ht" x="55.4" y="20.0" dominant-baseline="central" text-anchor="middle">Protocolo</text>
<text class="tb-ht" x="308.2" y="20.0" dominant-baseline="central" text-anchor="middle">Modelo o transporte</text>
<text class="tb-ht" x="852.8" y="20.0" dominant-baseline="central" text-anchor="middle">Uso principal</text>
<rect class="tb-te" x="0" y="40.8" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="72.1" dominant-baseline="central">SNMP</text>
<text class="tb-tx" x="122.8" y="72.1" dominant-baseline="central">Consultas periódicas y notificaciones (traps).</text>
<text class="tb-tx" x="517.5" y="60.8" dominant-baseline="central">Monitoreo tradicional de dispositivos. SNMPv1/v2c utilizan comunidades; SNMPv3</text>
<text class="tb-tx" x="517.5" y="83.5" dominant-baseline="central">incorpora mecanismos de autenticación y privacidad.</text>
<rect class="tb-to" x="0" y="104.2" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="135.6" dominant-baseline="central">NETCONF</text>
<text class="tb-tx" x="122.8" y="124.2" dominant-baseline="central">Mensajes XML sobre SSH y modelos de datos</text>
<text class="tb-tx" x="122.8" y="147.0" dominant-baseline="central">YANG.</text>
<text class="tb-tx" x="517.5" y="135.6" dominant-baseline="central">Configuración y gestión programática de dispositivos.</text>
<rect class="tb-te" x="0" y="167.8" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="187.8" dominant-baseline="central">RESTCONF</text>
<text class="tb-tx" x="122.8" y="187.8" dominant-baseline="central">API HTTP/HTTPS y modelos YANG.</text>
<text class="tb-tx" x="517.5" y="187.8" dominant-baseline="central">Acceso programático a configuración y estado de dispositivos.</text>
<rect class="tb-to" x="0" y="208.5" width="1200" height="63.5"/>
<text class="tb-tx tb-b" x="12.0" y="239.9" dominant-baseline="central">gNMI</text>
<text class="tb-tx" x="122.8" y="228.5" dominant-baseline="central">Interfaz de gestión basada en gRPC y modelos</text>
<text class="tb-tx" x="122.8" y="251.2" dominant-baseline="central">de datos estructurados.</text>
<text class="tb-tx" x="517.5" y="239.9" dominant-baseline="central">Configuración y telemetría en streaming.</text>
<rect class="tb-te" x="0" y="272.0" width="1200" height="40.8"/>
<text class="tb-tx tb-b" x="12.0" y="292.0" dominant-baseline="central">gRPC</text>
<text class="tb-tx" x="122.8" y="292.0" dominant-baseline="central">Framework RPC sobre HTTP/2.</text>
<text class="tb-tx" x="517.5" y="292.0" dominant-baseline="central">Transporte en diversas implementaciones de telemetría y gestión.</text>
<text class="tb-cap" x="600.0" y="338.8" text-anchor="middle">Tabla 12.5. Protocolos y tecnologías de gestión y telemetría.</text></svg>
</div>

### Herramientas de automatización modernas

#### Seguridad integrada

La seguridad pasa a formar parte de la arquitectura desde su diseño, incorporando *Zero Trust*, ZTNA, SASE y microsegmentación.

#### Infraestructura híbrida y multinube

Las organizaciones gestionan recursos distribuidos entre centros de datos propios y múltiples proveedores de nube mediante políticas unificadas.

#### Infraestructura como código (IaC)

La configuración de red se gestiona mediante archivos versionados almacenados en repositorios Git y desplegados mediante procesos automatizados.

#### Redes definidas por software (SDN)

Separan el plano de control del plano de datos, de modo que un controlador central puede administrar políticas y configuraciones de manera consistente. La Figura 12.8 compara este modelo con la red tradicional.

#### Automatización y orquestación

Herramientas como Ansible y Terraform, junto con lenguajes como Python, permiten automatizar tareas repetitivas y reducir errores operativos.

<div class="diagram" id="figura-12-08" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" id="g1208" viewBox="0 0 1200 472" role="img" aria-labelledby="g1208-title">
<title id="g1208-title">Redes definidas por software: planos de control y de datos</title>
<defs><marker id="g1208m364e6c" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0,9 3.5,0 7" fill="#364e6c"/></marker><marker id="g1208n364e6c" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="9 0,0 3.5,9 7" fill="#364e6c"/></marker></defs>
<g id="g1208-c" transform="translate(20 20)"><rect x="0" y="0" width="560" height="400" rx="6" fill="#e6ecfa" stroke="#003ecc" stroke-width="2"/>
<line x1="0" y1="34" x2="560" y2="34" stroke="#003ecc" stroke-width="1.5"/>
<text x="280" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Red tradicional</text>
<rect x="600" y="0" width="560" height="400" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="600" y1="34" x2="1160" y2="34" stroke="#7c3aed" stroke-width="1.5"/>
<text x="880" y="23" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">SDN</text>
<g transform="translate(100 150) scale(0.8)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<rect x="38" y="190" width="124" height="26" rx="13.0" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/>
<text x="100" y="207.66" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Plano de control</text>
<rect x="38" y="224" width="124" height="26" rx="13.0" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/>
<text x="100" y="241.66" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">Plano de datos</text>
<g transform="translate(280 150) scale(0.8)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<rect x="218" y="190" width="124" height="26" rx="13.0" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/>
<text x="280" y="207.66" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Plano de control</text>
<rect x="218" y="224" width="124" height="26" rx="13.0" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/>
<text x="280" y="241.66" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">Plano de datos</text>
<g transform="translate(460 150) scale(0.8)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<rect x="398" y="190" width="124" height="26" rx="13.0" fill="#decefa" stroke="#7c3aed" stroke-width="1.5"/>
<text x="460" y="207.66" font-size="10.35pt" font-weight="700" fill="#5b21b6" text-anchor="middle">Plano de control</text>
<rect x="398" y="224" width="124" height="26" rx="13.0" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/>
<text x="460" y="241.66" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">Plano de datos</text>
<line x1="160" y1="150" x2="220" y2="150" stroke="#364e6c" stroke-width="2.5"/>
<line x1="340" y1="150" x2="400" y2="150" stroke="#364e6c" stroke-width="2.5"/>
<text x="280" y="300" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">Cada equipo decide por sí mismo</text>
<text x="280" y="322" font-size="10.9pt" font-weight="400" fill="#1e3a8a" text-anchor="middle">y se configura de forma individual</text>
<rect x="760" y="52" width="240" height="54" rx="6" fill="#ebedf0" stroke="#364e6c" stroke-width="2"/>
<text x="880" y="83.56" font-size="10.9pt" font-weight="700" fill="#1e3a5f" text-anchor="middle">Aplicaciones y políticas</text>
<rect x="740" y="150" width="280" height="80" rx="6" fill="#f2ebfd" stroke="#7c3aed" stroke-width="2"/>
<line x1="740" y1="182" x2="1020" y2="182" stroke="#7c3aed" stroke-width="1.5"/>
<text x="880" y="173" font-size="12.5pt" font-weight="700" fill="#1a1a1a" text-anchor="middle">Controlador SDN</text>
<text x="880" y="210.56" font-size="10.9pt" font-weight="400" fill="#5b21b6" text-anchor="middle">Plano de control centralizado</text>
<polyline points="880,108 880,148" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1208m364e6c)" marker-start="url(#g1208n364e6c)"/>
<polyline points="800,230 700,290" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1208m364e6c)" marker-start="url(#g1208n364e6c)"/>
<g transform="translate(700 318) scale(0.7)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<rect x="638" y="352" width="124" height="26" rx="13.0" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/>
<text x="700" y="369.66" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">Plano de datos</text>
<polyline points="880,230 880,290" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1208m364e6c)" marker-start="url(#g1208n364e6c)"/>
<g transform="translate(880 318) scale(0.7)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<rect x="818" y="352" width="124" height="26" rx="13.0" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/>
<text x="880" y="369.66" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">Plano de datos</text>
<polyline points="960,230 1060,290" fill="none" stroke="#364e6c" stroke-width="2" marker-end="url(#g1208m364e6c)" marker-start="url(#g1208n364e6c)"/>
<g transform="translate(1060 318) scale(0.7)" data-lib="switch"><rect x="-58" y="-26" width="116" height="52" rx="6" fill="#ffffff" stroke="#009254" stroke-width="3"/><rect x="-46.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-33.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-21.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="-8.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="4.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="16.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="29.0" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><rect x="41.5" y="-4" width="9" height="12" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/><circle cx="-44" cy="-15" r="2.5" fill="#009254"/><circle cx="-24" cy="-15" r="2.5" fill="#009254"/><circle cx="-4" cy="-15" r="2.5" fill="#009254"/><circle cx="16" cy="-15" r="2.5" fill="#009254"/><circle cx="36" cy="-15" r="2.5" fill="#009254"/></g>
<rect x="998" y="352" width="124" height="26" rx="13.0" fill="#bfe4d4" stroke="#009254" stroke-width="1.5"/>
<text x="1060" y="369.66" font-size="10.35pt" font-weight="700" fill="#065f46" text-anchor="middle">Plano de datos</text></g><text x="600" y="454" text-anchor="middle" font-size="15.58" font-weight="600" fill="#000000" data-caption="fig">Fig. 12.8. Redes definidas por software: planos de control y de datos.</text></svg>
</div>

#### Virtualización de funciones de red (NFV)

Servicios de red tradicionalmente implementados mediante *hardware* dedicado, como *firewalls*, balanceadores, *routers* y *gateways* VPN, pueden ejecutarse como funciones virtualizadas en máquinas virtuales; en arquitecturas *cloud-native* relacionadas, también pueden implementarse como funciones de red en contenedores (CNF).

La modernización de redes debe entenderse como un proceso evolutivo permanente, que acompaña la transformación digital de la organización y responde a nuevos requerimientos de negocio, crecimiento y seguridad.

El proceso evolutivo de modernización de una red empresarial hacia plataformas automatizadas y programables se representa en el **Anexo V.**
