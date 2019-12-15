## Generatory

### Prosty generator `yield`

#### Przeszkształć funkcję w prosty generator krzyczący `pomocy!!` następnie go przetestuj


```javascript
   function prostyGenerator(){}
```

### Więcej niż jeden `yield`

#### Do generatora dopisz krzyk `To nie są ćwiczenia!` przetestuj w konsoli.

```javascript
   //kod z poprzedniego zadania
```

### Przypisanie wartości do `yield`

#### Nie zmieniając naszego generatora wykonaj działanie `40 + 2` przypisując odpoowienio wartości do `a` oraz `b`

```javascript
   //kod z poprzedniego zadania
   function* sum(){
     const a = yield;
     const b = yield;
     const result = a + b;

     yield result;
   }
```

### Przypisanie z `yield`

#### Nie zmieniając naszego generatora wykonaj działanie `40 + 2` przypisując odpoowienio wartości do `a` oraz `b`

```javascript
   function* sum(){
     const a = yield;
     const b = yield;
     const result = a + b;

     yield result;
   }
```

### Iteracja z `yield`

#### Zmień generator tak aby każde jego wywołanie pobierało jedną literę z `name`

```javascript
   function* getLetter(){
      const name = 'Franek';
      yield name;
   }
```

### Przypisanie z `yield`

#### Zmień generator tak aby każde jego wywołanie dodało jeden z trzech elementów tablicy

> Kick off

```javascript
   function* fillArray(){
      const friends = yield;
   }

   //Po trzech wywołaniach generatora friends ma wyglądać tak ['Adam','Franek','Robert']
```

### Rzucanie i zwracanie

#### Nie zmieniając generatora zakończ jego pracę tak aby zwrócił wartość `150`

> Kick off

```javascript
   function* count(){
      yield '1';
      yield '2';
      yield '3';
   }
```
