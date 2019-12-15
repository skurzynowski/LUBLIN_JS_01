## Moduły

### Import

> import defaultExport from "module-name";

>import * as name from "module-name";

>import { export1 } from "module-name";

>import { export1 as alias1 } from "module-name";

>import { export1 , export2 } from "module-name";


#### Do pliku `index.js` zaimportuj `getName` tak aby wykonał się kod poniżej

```javascript
const name = getName(obj);

console.log(name);
```

### Zmiana nazwy przy imporcie

#### Zmień nazwę importowanej funkcji na `getUserName` tak aby wykonał sie kod poniżej

```javascript
const name = getUserName();

console.log(name);
```

### Import wszystkiego

#### Zaimportuj wszystko z pliku używając `*` i wykonaj następujący kod

```javascript
console.log(all.profession);
console.log(all.age);
```

### Exportowanie

#### Wyeksportuj funkcję `printAge` z pliku `user.js` następnie zaimportuj i wywołaj ją w `index.jx` z parametrem `42`

```javascript
 const printAge = ( age ) => { console.log(`Wiek wynosi ${age}`) }
```

#### Wyeksportuj funkcję `printAge` jako `default` z pliku `user.js` następnie zaimportuj i wywołaj ją w `index.jx` z parametrem `42`

```javascript
 const printAge = ( age ) => { console.log(`Wiek wynosi ${age}`) }
```
