import { CalSource } from "./cal/cal";
import { ShapeBase } from "./ui/shape";

var a = CalSource.add(1, 2);
var b = new ShapeBase();
b.render();

console.log(a);