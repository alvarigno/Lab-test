# Lab-test

Lab de consumo de un servicio rest , [Angular CLI] versión creada con 8.3.22

## Instalación

Primero debe ejecutar la instalación de los paquetes y dependencias para la ejecución. (Todos los paquetes están dentro del archivo package.json)

> npm install 

## Ejecución

Comando `ng serve`, y si desea ejecutarlo en un puerto específico `ng serve --port 8900`

## Construcción

Ejecutar `ng build` para construir el proyecto en su formato de ejecución final. Este comando crea un directorio `/dist`.

> ng build

## Ejecución de pruebas unitarias

Ejecutar `ng test` para ejeuctar las pruebas unitarias creadas por medio de [Karma](https://karma-runner.github.io). v5.2.3.
el listado de pruebas unitarias, están dentro de los archivos con extensión ".spec.ts". El resultado de estas pruebas aparecen dentro del browser de forma automática, además de visualizar el resultado por consola. Este proceso es automático.

## Uso de NPM Audit

> npm audit fix

### Instalación de componentes adicionales

> Esto debe instalarse si hay alguna dependencia de los gráfico que no ha sido instalada de forma correcta.

 ### ng2-chart
 
 
 `npm install --save ng2-charts`
 `npm install --save chart.js`
 
 ### chartjs-plugin-datalabels
 
 `npm i chartjs-plugin-datalabels`


`Si encuentra alguna vulnerabilidad con esta solución, sólo debería mostrar la siguiente. Esto debido a la versión de angular-devkit/build-angular que no es compatible con las dependencias de karma, debe hacer un downgrade de devkit debido que la última versión de @angular-devkit/build-angular`

```

- Severidad Low  │  Prototype Pollution  │ Package ini | Dependency of @angular/cli [dev] │ Patched in │ >1.3.6 
```

### Resolución de problemas

' si al ejecutar ng serve --port 8900 entrega el siguiente error: " job name '..getProjectMetadata' does not exist".
@angular-devkit/build-angular. Este error se sustenta al momento de usar un angular-devkit/build-angular más actualizado a la versión de ejecución del proyecto.

> npm i @angular-devkit/build-angular@0.803.24

> **Una vez ejecutado este script, debe volver a ejecutar el npm audit fix**
