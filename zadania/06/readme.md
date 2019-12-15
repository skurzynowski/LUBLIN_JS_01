## Mutowanie i dlaczego nie

### `const` a mutowanie

#### Zmień wartość pierwszego elementu tablicy tworząc nową tablicę  i wykorzystując wartości z `user`

```javascript
  const user = [ 'Bruce', 'Willis' ];
```

### Jak ominąć mutowanie? Dlaczego warto to robić?

#### Stórz tablicę w której `actor` zamienisz na `amazing actor` nie używając mutowania i wykorzystując wartości z `user`

```javascript
  const user = [ 'Bruce','actor' 'Willis' ];
  // [ 'Bruce','amazing actor' 'Willis' ];
```

### Jak ominąć mutowanie w obiekcie?

#### Stórz obiekt `updatedUser` w którym `actor` zamienisz na `amazing actor` nie używając mutowania i wykorzystując wartości z `user`

```javascript
  const user = { name:'Bruce',profession:'actor' surname: 'Willis' };
  //{ name:'Bruce',profession:'amazing actor' surname: 'Willis' };
```
