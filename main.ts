interface Color{
    color:string;
}

interface Length extends Color{
    length:number;
}

var shape = <Length>{};
shape.length = 10;
shape.color = 'Red';

console.log('Color of the shape is '+shape.color);
console.log('Length of the shape is '+shape.length);