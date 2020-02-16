//0, 1, 2, 3, 4, 5, 6,   7,  8,  9, 10,  11, ... <== index
//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... <== resultados
//F(n) = F(n-1) + F(n-2)

//debería retornar un solo valor
// ej: F(1) => 1
//     F(5) => 5

// O(2N)
function fibonacciR(num) {
  if (num <= 1) return 1

  return fibonacci(num - 1) + fibonacci(num - 2)
}
