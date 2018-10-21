# crypt-js

## Usage

Simple data crypt

###

## Example

```javascript
const hash = require("@playerony/crypt-js").hash;
const algorithms = require("@playerony/crypt-js").algorithms;

console.log(
  hash({
    algorithms: [algorithms.DES, algorithms.MD5, algorithms.ADFGVX],
    value: "WOrK"
  })
);
```

## Result
```json
{
  "algorithms": ["DES", "MD5"],
  "result": "76e2fba0bb05f2da1814c5e088e20241"
}
```
###
