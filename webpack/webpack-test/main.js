import $ from 'jquery';

$.getJSON("test.json", function (json) {
    console.log(json);
});

import './res/styles.css';

import imageRes from './res/test.jpg';
const img = new Image();
img.src = imageRes;
document.body.appendChild(img);

import xml from './res/test.xml';
import json from './res/test.json';

console.log(xml);
console.log(json);

import { print } from './print';

print();