# Tailwind CSS Boilerplate

Tailwind CSS Boilerplate es una plantilla para instalar [Tailwind CSS](https://tailwindcss.com/) como plugin de [PostCSS](https://postcss.org/) en un proyecto web. Usa [PurgeCSS](https://purgecss.com/), integrado en Tailwind, para optimizar el css eliminando las clases no usadas y [cssnano](https://www.npmjs.com/package/cssnano) para minificar el archivo css resultante para su distribución. Usa [win-node-env](https://www.npmjs.com/package/win-node-env) para establecer la variable de entorno NODE_ENV en Windows. No imprescindible pero recomendable instalar [Live Server](https://www.npmjs.com/package/live-server) como servidor de desarrollo.

## Instalación

Usa npm para instalar tailwind-bp.

```bash
npm install
```

## Uso
Para procesar el css en modo de desarrollo

```'
npm run build
```
Para procesar el css en modo de producción. Optimiza y mimifica el css.

```'
npm run prod
```
Lanza el servidor de desarrollo [Live Server](https://www.npmjs.com/package/live-server)  

```'
npm run start
```
## Autor
Miguel Ángel Pérez Otero - [maperezotero](https://github.com/maperezotero/)

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
