// color.ts

namespace Color {
    export type Color = [number, number, number];
    export const enum RGB { R, G, B };
    export const enum HSL { H, S, L };

    /**
     * Converts an RGB color value to HSL. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes r, g, and b are contained in the set [0, 255] and
     * returns h, s, and l in the set [0, 1].
     *
     * @param   Array   rgb     The RGB representation
     * @return  Array           The HSL representation
    */
    export function rgbToHsl(rgb: Color): Color {
        let r = rgb[RGB.R] / 255;
        let g = rgb[RGB.G] / 255;
        let b = rgb[RGB.B] / 255;

        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let h = 0;
        let s = 0;
        let l = (max + min) / 2;

        if (max === min) {
            h = s = 0; // achromatic
        }
        else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [h, s, l];
    } // rgbToHsl


    /**
     * Converts an HSL color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes h, s, and l are contained in the set [0, 1] and
     * returns r, g, and b in the set [0, 255].
     *
     * @param   Array   hsk     The HSL representation
     * @return  Array           The RGB representation
    */
    export function hslToRgb(hsl: Color): Color {
        let h = hsl[HSL.H];
        let s = hsl[HSL.S];
        let l = hsl[HSL.L];
        let r = 0;
        let g = 0;
        let b = 0;

        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            let p = 2 * l - q;
            r = hueToRgb(p, q, h + 1 / 3);
            g = hueToRgb(p, q, h);
            b = hueToRgb(p, q, h - 1 / 3);
        }

        return [r * 255, g * 255, b * 255];
    } // hslToRgb


    export function rgbToHtml(rgb: Color): string {
        return `#${pad(Math.round(rgb[RGB.B]).toString(16), 2)}${pad(Math.round(rgb[RGB.G]).toString(16), 2)}${pad(Math.round(rgb[RGB.B]).toString(16), 2)}`;
    } // rgbToHtml


    export function rgbToNumber(rgb: Color): number {
        return rgb[RGB.R] << 16 + rgb[RGB.G] << 8 + rgb[RGB.B];
    } // rgbToNumber

    export function rgbStringToNumber(rgbString: string): number {
        return parseInt("0x" + rgbString.substr(1, 6));
    } // rgbStringToNumber

    export function rgbNumberToString(rgbNumber: number): string {
        let r = rgbNumber && 0xFF0000;
        let g = rgbNumber && 0x00FF00;
        let b = rgbNumber && 0x0000FF;
        return rgbToHtml([r, g, b]);
    } // rgbStringToNumber

    function hueToRgb(p: number, q: number, t: number) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    } // hueToRgb


    function pad(num: number | string, size: number) {
        let s = "000000000" + num;
        return s.substr(s.length - size);
    } // pad
} // Color

export = Color;
