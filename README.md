
# NETWORKING — Fundamentos, Arquitecturas y Despliegue Práctico

**Edición digital · Guillermo Castillo · SecOpsMX · 2026**

Este repositorio contiene la edición digital de **_NETWORKING — Fundamentos, Arquitecturas y Despliegue Práctico_**, una obra dedicada al estudio de los fundamentos, protocolos, arquitecturas y tecnologías que hacen posible la comunicación entre sistemas y redes.

El contenido se organiza en quince temas, acompañados de anexos técnicos, glosario, conclusión y material complementario. La estructura permite avanzar desde los conceptos fundamentales hasta áreas de aplicación más especializadas.

## Consultar el libro

La edición digital está disponible en el siguiente sitio:

**[Leer NETWORKING en línea](https://asideloko.github.io/Networking-Fundamentos/)**

## Contenido del repositorio

- **`docs/temas/`** — Los quince temas principales de la obra.
- **`docs/anexos/`** — Doce anexos técnicos complementarios.
- **`docs/complementos/`** — Información sobre derechos de autor y sistema de diagramas.
- **`docs/media/`** — Diagramas, ilustraciones y recursos gráficos.
- **`docs/assets/`** — Hojas de estilo, scripts y tipografías utilizados por la documentación.
- **`docs/index.md`** — Página de inicio de la edición digital.
- **`docs/conclusion.md`** — Conclusión de la obra.
- **`docs/glosario.md`** — Glosario de términos técnicos.

## Ejecutar la documentación en local

El sitio utiliza [MkDocs](https://www.mkdocs.org/) para generar y visualizar la edición digital.

### 1. Instalar las dependencias

Desde el directorio raíz del repositorio, ejecuta:

```bash
pip install -r requirements.txt
```

### 2. Iniciar el servidor de desarrollo

```bash
mkdocs serve
```

Abre [http://127.0.0.1:8000](http://127.0.0.1:8000) en el navegador para consultar el sitio localmente.

### 3. Validar y generar el sitio

```bash
mkdocs build --strict
```

Los archivos generados se guardan en el directorio `site/`.

### Publicación

El sitio puede publicarse mediante GitHub Pages con la configuración de MkDocs del repositorio:

```bash
mkdocs gh-deploy
```

## Autoría y derechos de uso

**Autor:** Guillermo Castillo  
**Identidad editorial:** SecOpsMX  
**Edición:** 2026

Las condiciones de uso, atribución y distribución se detallan en la sección de derechos de autor de la edición digital. La disponibilidad pública del repositorio no implica, por sí misma, autorización para redistribuir o modificar el contenido fuera de los términos de la licencia aplicable.
# Networking-Fundamentos
