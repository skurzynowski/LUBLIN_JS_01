## Podsumowanie

### Popraw kod tak aby ostatni warunek był prawdziwy

```javascript
var x = 2,
  fns = [];

(function() {
  var x = 5;

  for (var i = 0; i < x; i++) {
    // .. dopisać kod aby równanie było prawdziwe
  }
})();

console.log(x * 2 === fns[x * 2]());
```

### Refaktoryzacja

#### Nie zepsuj :) ale wprowadź af iffe i kompozycję

```javascript
(function IIFE() {
  function foo(x) {
    var y = x * 2;

    return function bar(z) {
      if (z.length > 3) {
        return z.map(function baz(v) {
          if (v > 3) return v + y;
          else return baz(v * 4);
        });
      } else {
        var obj = [];

        setTimeout(
          function bam() {
            obj.length = 1;
            obj[0] = this.w;
          }.bind(this),
          100
        );

        return obj;
      }
    };
  }

  var p = foo(2);
  var list1 = [1, 3, 4];
  var list2 = list1.concat(6);

  list1 = p.call({ w: 42 }, list1);
  list2 = p(list2);

  setTimeout(function() {
    console.log(
      list1[0] ===
        list2.reduce(function(s, v) {
          return s + v;
        }, 0)
    );
  }, 200);
})();
```

### Kompozycja

```javascript
function foo() { }

function bar() {
	var a1 = [ 2, 4 ];
	var a2 = [ 6, 8, 10, 12 ];

	return foo();
}

console.log(
	bar().join("") === "281012"
);
```


### Template string

```javascript
function upper(strings,...values) {}

var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

console.log(
	`Hello ____ (@____), welcome to the ____!` ===
	"Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);
```


### Iterator

```javascript
var numbers = {
	// ..
};

// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

// should print 6..30 by 4s
for (let num of /*..*/) {
	console.log(num);
}
```
