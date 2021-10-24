# 📝 Test Frontend MeLi

#### Importante !!

Antes de correr el proyecto, se debe levantar el servidor del siguiente repositorio [test-MELI-back](https://github.com/code-rcplaza/test-MELI-back)

Este proyecto _no_ se genero con el comando npx create-react-app, si no que, se genero para trabajar con webpack v.5.x y Babel v.7.x, por lo que posee varias cualidades añadidas en los archivos que se encuentran en el directorio **_"config"_**, entre estas cualidades podemos nombrar:

- creacion de maps para debug,
- code spliting en construccion del bundle para producción
- escribir componentes de React, sin tener que hacer **_import React from "react"_** en cada uno.
- en desarrollo, no se pierde el state al generar cambios en el codigo, hasta refrescar el navegador.
- Manejo de compresion de imagenes, habilitado por webpack

entre otros.

Por fines de aprendizaje, el proyecto implementó Context, para el manejo de un state global.

Se opto por el uso de CSS con la implementación de propiedades personalizabels (variables)

> Los comando para correr el proyecto son:
> **yarn start** : Correr el ambiente de desarrollo.
> **yarn build** : Genera el bundle para producción.

> Mejoras:
>
> - Atomisar mejor los componentes.
> - Mejorar la pagina de 404.
> - Decidir si utiliar modulos css.
> - implementar seguridad.
