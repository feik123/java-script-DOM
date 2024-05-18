// ES6 Module = An external file that contains reusable code
//              that can be imported into other JavaScript files.

import {PI, getArea, getCircumference, getVolumeOfSphere } from './mathUtil.js';

console.log(PI);

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolumeOfSphere(10)

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);