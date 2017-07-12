export declare type Color = [number, number, number];
export declare const enum RGB {
    R = 0,
    G = 1,
    B = 2,
}
export declare const enum HSL {
    H = 0,
    S = 1,
    L = 2,
}
export declare function rgbToHsl(rgb: Color): Color;
export declare function hslToRgb(hsl: Color): Color;
export declare function rgbToHtml(rgb: Color): string;
export declare function rgbToNumber(rgb: Color): number;
export declare function rgbStringToNumber(rgbString: string): number;
export declare function rgbStringToHsl(rgbString: string): Color;
export declare function rgbNumberToRgb(rgbNumber: number): Color;
export declare function rgbNumberToString(rgbNumber: number): string;
export declare function rgbNumberToHsl(rgbNumber: number): Color;
export default Color;
