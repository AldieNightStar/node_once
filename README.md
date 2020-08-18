# Once.js

* Call function only once, then ignore.
* Or call function several times and only then ignore.

# Import
```js
const Once = require("node_once");
```

# `Once.once(func)`
```js
function fn() {
	console.log("I am called :D");
}

fn = Once.once(fn)
for (let i = 0; i < 1000; i++) {
	fn()
}
console.log("END!");

/* Output:
	I am called :D
	END
*/
```

# `Once.few(func)`
```js
function fn() {
	console.log("I am called few times! ^^");
}

fn = Once.few(fn, 2);
for (let i = 0; i < 10; i++) {
	fn();
}
console.log("END");

/* Output:
	I am called few times! ^^
	I am called few times! ^^
	END
*/
```