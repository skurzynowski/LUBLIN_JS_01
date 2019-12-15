## Funkcja strzałkowa


> Dwa czynniki, które wpłynęły na wprowadzenie funkcji strzałkowych: krótszy zapis funkcji i brak wiązania **this**.


> Przed wprowadzeniem funkcji strzałkowych każda nowa funkcja deniniowała swoją własną wartość this (nowy obiekt w przypadku konstruktora, undefined w wywołaniach funkcji strict mode, obiekt bazowy jeśli funkcja jest wywoływana jako "metoda obiektowa", itp.). Okazało się to niekorzystne przy obiektowym stylu programowania.

### Zwracanie prostego wyniku np `number`

#### Zamień funkcję na nowo poznaną funkcję strzałkową

```javascript
function add(a, b) {
  return a + b
}
console.log(add(2,5));
```

### Zwracanie obiektu

#### Zamień funkcję na nowo poznaną funkcję strzałkową

```javascript
function add(a, b) {
  return {result : a + b}
}
console.log(add(2,5));
```

### Bardziej skomplikowane ciało funkcji

#### Zamień funkcję na nowo poznaną funkcję strzałkową

```javascript
function add(a, b) {
  let floatB = parseFloat(a);
  let floatA = parseFloat(b);
  return a + b
}
console.log(add(2,5));
```
