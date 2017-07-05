declare namespace Color {
    type Color = [number, number, number];
    const enum RGB {
        R = 0,
        G = 1,
        B = 2,
    }
    const enum HSL {
        H = 0,
        S = 1,
        L = 2,
    }
    function rgbToHsl(rgb: Color): Color;
    function hslToRgb(hsl: Color): Color;
    function rgbToHtml(rgb: Color): string;
    function rgbToNumber(rgb: Color): number;
    function rgbStringToNumber(rgbString: string): number;
    function rgbNumberToString(rgbNumber: number): string;
    function rgbNumberToHsl(rgbNumber: number): Color;
}
export = Color;
