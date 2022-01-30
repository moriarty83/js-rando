# JS-Rando

JS-Rando provides a class with methods that can be used for easily producing random values including Ingegers, Floats, Array Elements, Hex Numbers, Hex Colors, RBG Colors & RBGA Colors.

## Installation

```
npm install js-rando
```

## Usage

To use the methods below, import the Rando class and create an instance of it.

`import Rando from "./js-rando";`

`let rando = new Rando()`

### Methods

#### Random decimal.

`Random(digits)`

- Returns a random value between 0(inclusive) and 1(exclusive) up to 16 significant digits.
- The digits argument is optional and specifies the number of signficant digits for the return value. If omitted, the result will default to 16 significant digits.

#### Random Integer.

`RandomInt(min, max)`

- Returns a random integer between the min(inclusive) and max(exclusive)
- Min & Max arguments must be provided as integers.

#### Random Float.

`RandomFloat(min, max, digits)`

- Returns a random decimal number between the min(inclusive) and max(exclusive).
- The digits argument is optional and specifies the number of signficant digits for the return value. If omitted, the result will default to 16 significant digits.

#### Random Array Element.

`RandomElement(arr)`

- Returns a random element from an array.
- The argument arr is required must be an array.'

#### Random Hex Value.

`RandomHex()`

- Returns a random hex value as a 1 chararacter string (0-f)

#### Random Hex Color.

`RandomHexColor()`

- Returns a string of a random hex color

#### Random RBG Color

`RandomRGBColor()`

- Returns a string of a random rbg color with valuees between 0(inclusive) and 256(exclusive).

#### Random RBGA Color

`RandomRGBAColor()`

- Returns a string of a random rbga color with valuees between 0(inclusive) and 256(exclusive) for the RGB values and 0.0 and 1.0 for the alpha value.

## Examples

```
import Rando from "./js-rando";
let rando = new Rando()


rando.Random()
// Returns
// 0.8695750163152240

rando.RandomInt(1,11)
// Returns
// 6

rando.RandomHex()
// Returns
// b

rando.RandomElement(["cat", "dog", "fish"])
// Returns
// "dog"

rando.RandomHexColor()
// Returns
// "#5b927b"

rando.RandomRGBColor()
// Returns
// "rgb(62, 100, 113)"

rando.RandomRGBAColor()
// Returns
// rbga(169, 156, 55, 0.8)
```

## Authors

- **Christopher Moriarty** - _Initial work_ - [JohnDoe](https://github.com/JohnDoe)

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Andrea SonnY
