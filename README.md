# ColorTS #

Color conversion library for **JavaScript** / **TypeScript**.


## API ##

**RGB** colors can be encoded into an array of three integers from 0 to 255.
**HSL** colors can be encoded into an array of three floats from 0.0 to 1.0.

* Convert an array encoding a RGB color to another array encoding a HSL color:

    **rgbToHsl**(rgb: Color): Color

* Convert an array encoding a HSL color to another array encoding a RGB color:

    **hslToRgb**(hsl: Color): Color

* Convert an array encoding a RGB color to a HTML string begining with #:

    **rgbToHtml**(rgb: Color): string

* Convert an array encoding a RGB color to a number:

    **rgbToNumber**(rgb: Color): number

* Convert a number encoding a RGB color to an array encodiing the same RGB color:

    **rgbNumberToRgb**(rgbNumber: number): Color

* Convert a HTML string encoding RGB color to a number:

    **rgbStringToNumber**(rgbString: string): number

* Convert a number encoding a RGB color to a HTML string:

    **rgbNumberToString**(rgbNumber: number): string

* Convert a number encording a RGB color to an array encoding a HSL color:

    **rgbNumberToHsl**(rgbNumber: number): Color


## Installation ##

	$> npm install colors-ts


## Build ##

You need first to install all dependencies:

	$> npm install

Project settings are defined in `package.json`, `settings` section. Inside this section, set `debug` to `true` to debug the project with source maps, or set `debug` to `false` to build the project in the release mode.

Tasks are defined in the `gulpfile.js` script.

Commands should be run under a **bash** shell.

The following command builds the project and runs unit tests. If any change happens, it builds the project and runs units tests again.

	$> npm run watch

For more predefined commands, see `package.json`, item `scripts`.

Unit tests are logged in the `tests/` folder, file `tape.log`.

## Contributors ##

yahiko


## Licence ##

MIT
