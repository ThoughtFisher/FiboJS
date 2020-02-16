# Explicación

`F(n) = F(n-1) + F(n-2)`

## 1. Recurción.

#### ¿De qué trata?

La recursividad son funcciones que se llaman a ellas mismas has completar un proceso.

Usualmente, se condicionan para que dejen de llamarse infinitamente.

```
function printNumber(x) {
  console.log(x); // imprime el número
  if (x < 10) { printNumber(x + 1); }
}
printNumber(1);
```

## 2. Memoization.

Tecnica para optimzar el tiempo de respuesta de solución mediante el almacenamiento de resultados previos.

En el ejemplo de fibonacci veremos como resultados previos hacen que NO vuelva a ejecutar el código.

## 3. Linear Implementation.

Hace uso de iterar hasta cumlir una condición.

###### En lo personal el más complicado
