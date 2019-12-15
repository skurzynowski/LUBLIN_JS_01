## let i const

### Hoisting a raczej jego brak

#### Zmień `var` na `const` i zobacz wynik w konsoli

```javascript
function logName() {
  console.log(name);
}
console.log(logName());
var name = "FED";
```

### Zasięg blokowy

#### Napraw kod używając jedynie `let` lub `const`

```javascript
for (var i = 0; i < 5; i++) {
  console.log(`Petla nr 1 ${i}`);
  for (var i = 0; i < 5; i++) {
    console.log(`Petla nr 2 ${i}`);
  }
}
```

#### 2. Napraw kod

```javascript
const testNumber = 23;

let result;

if (testNumber > 20) {
  result = `Większa niż 20`;
} else {
  result = `Mniejsza niż 20`;
}

console.log(result);
```

### 3. Zasięg blokowy a nadpisywanie

#### `const` czy tylko jeden? Jak sądzisz czy będzie bład?

```javascript
const name = "FED";

if( true ){
   const name = "IN_LOOP_FED";
   console.log(`W pętli:  ${name}`);
}

console.log(`Poza pętlą:  ${name}`);
```
