# Veevart_pruebas

Solución a las 2 pruebas planteadas identificadas como test9 y test19.

- Lenguaje escogido: Typescript
Para la ejecucion de cada prueba tomar los 2 archivos con el mismo nombre, en caso de test9, se deben tomar test09.js y test09.ts.
No es necesario compilar pero si se desea modificar los valores de entrada se deben cambiar en los archivos.ts.

Los valores de entrada estan al final de cada archvio en el caso de test09 :
  ```
let floors = [5, 29, 13, 10];
let initialFloor = 4;
let enteredFloors = {5:2, 29:10, 13:1, 10:1};
```

cuando se hagan cambios SI, deben compilar para que funcione el codigo con el siguiente comando:
```
tsc test09.ts
```
y luego usar el comando 

```
node test09.js
```
Esto aplica para ambos test, en caso de solo probar se puede usar directamente el comando : ``` node NameFile.js ```
