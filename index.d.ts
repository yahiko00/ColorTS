declare namespace Color {
    type Color = [number, number, number];
    function rgbToHsl(rgb: Color): Color;
    function hslToRgb(hsl: Color): Color;
    function rgbToHtml(rgb: Color): string;
    function rgbToNumber(rgb: Color): number;
}
export = Color;
