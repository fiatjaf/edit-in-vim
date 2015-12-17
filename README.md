```javascript
var edit = require('edit-in-vim')
var result = edit('placeholder string')

/*
  the user is redirected to their default editor which will show a file containing
  the string "placeholder string".

  suppose he replaces that with the name of his favorite food: "chocolate"
*/

console.log(result) // will output "chocolate"
```

```
npm install --save edit-in-vim
```
