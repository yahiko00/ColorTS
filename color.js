"use strict";
var Color;
(function (Color) {
    function rgbToHsl(rgb) {
        var r = rgb[0] / 255;
        var g = rgb[1] / 255;
        var b = rgb[2] / 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h = 0;
        var s = 0;
        var l = (max + min) / 2;
        if (max === min) {
            h = s = 0;
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return [h, s, l];
    }
    Color.rgbToHsl = rgbToHsl;
    function hslToRgb(hsl) {
        var h = hsl[0];
        var s = hsl[1];
        var l = hsl[2];
        var r = 0;
        var g = 0;
        var b = 0;
        if (s === 0) {
            r = g = b = l;
        }
        else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hueToRgb(p, q, h + 1 / 3);
            g = hueToRgb(p, q, h);
            b = hueToRgb(p, q, h - 1 / 3);
        }
        return [r * 255, g * 255, b * 255];
    }
    Color.hslToRgb = hslToRgb;
    function rgbToHtml(rgb) {
        return "#" + pad(Math.round(rgb[0]).toString(16), 2) + pad(Math.round(rgb[1]).toString(16), 2) + pad(Math.round(rgb[2]).toString(16), 2);
    }
    Color.rgbToHtml = rgbToHtml;
    function rgbToNumber(rgb) {
        return rgb[0] << 16 + rgb[1] << 8 + rgb[2];
    }
    Color.rgbToNumber = rgbToNumber;
    function hueToRgb(p, q, t) {
        if (t < 0)
            t += 1;
        if (t > 1)
            t -= 1;
        if (t < 1 / 6)
            return p + (q - p) * 6 * t;
        if (t < 1 / 2)
            return q;
        if (t < 2 / 3)
            return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }
    function pad(num, size) {
        var s = "000000000" + num;
        return s.substr(s.length - size);
    }
})(Color || (Color = {}));
module.exports = Color;
