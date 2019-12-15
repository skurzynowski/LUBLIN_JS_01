## Klasy

### Definicja klasy i jej typ

#### Stwórz klasę o nazwie `User` następnie i wywołaj kod poniżej. Jak sądzisz jaki będzie typ?

```javascript
  console.log( typeof User );
```

### Konstruktor

#### Dodaj konstruktor z dwoma parametrami `name` oraz `surname` następnie stórz obiek z definicji klasy używając `new`

```javascript
  console.log( obiektUser )
```

### Metody

#### Dodaj metodę `printName` wypisującą imię w konsoli następnie ją przetestuj

```javascript
//FED
```

### Dziedziczenie

#### Stwórz klasę `Admin` która dziedziczy po klasie `User` oraz rozszerza jej konstruktor o  atrybut `access_level`.

```javascript
 const Jacek = new Admin('name','surname','access_5');
```

### Rozszerzanie funkcjonalności klasy poprzez dziedziczenie

#### W klasie `admin` dopisz metodę `printAccesLevel`

```javascript
 const Jacek = new Admin('name','surname','access_5');
```

### Nadpisywanie funkcjonalności klasy poprzez dziedziczenie

#### W klasie `admin` nadpisz metodę `printName`


### Statyczne metody

#### Dodaj metodę statyczą `printHello` do definicji klasy `User`

```javascript
 User.printHello();
```
