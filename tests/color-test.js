"use strict";
const settings = require("./../package.json").settings;

const debug = settings.debug === true;
if (!debug) {
    console.log("Need to be in a debug environnment to run tests.");
    return;
}

const tape = require("tape");
const color = require("./../debug/color");

/* TODO */

tape("Test", t => {
    t.plan(8);

    let a = color.rgbNumberToRgb(0xe4f9ff);
    let b = [0xe4, 0xf9, 0xff];
    t.equals(a[0], b[0]);
    t.equals(a[1], b[1]);
    t.equals(a[2], b[2]);

    a = color.rgbNumberToRgb(0x3fcbff);
    b = [0x3f, 0xcb, 0xff];
    t.equals(a[0], b[0]);
    t.equals(a[1], b[1]);
    t.equals(a[2], b[2]);

    t.equals(color.rgbNumberToString(0xe4f9ff), "#e4f9ff");
    t.equals(color.rgbNumberToString(0x3fcbff), "#3fcbff");
});
