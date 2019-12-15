## `...a` Operator rozsypania i reszty ( spread and rest )

### Rozsypanie napisu

> kolejność

#### Przypisz do stałej napis `Hello FED` i rozsyp go w `console.log`

```javascript

```

### Rozsypanie tablicy

#### Stwórz tablicę `users` skłądającą się z tablic `admins` i `writers` oraz dodatkowego elementu o wartości `Helm`

```javascript
   const admins = ['Sebastian', 'Robert'];
   const writers = ['Stanislav', 'Vladimir'];
```

### Rozsypanie tablicy do argumentów funkcji

#### Przekształć funkcję w strzałkową i użyj rozsypanej tablicy jako argument podczas wywołania

```javascript
const numbers = [20, 22];

function add(a, b) {
  let floatB = parseFloat(a);
  let floatA = parseFloat(b);
  return a + b
}
//wywołanie w console log
```

### Operator reszty

#### Stwórz funkcję strzałkową `logAmount` która policzy wszystkie argumenty przekazane podczas wywołania i wyświetli je w konsoli

```javascript
  logAmount(1,5,7,9,5); //5
  logAmount(1,7,9,5); //4
```
