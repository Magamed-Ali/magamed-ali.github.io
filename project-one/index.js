const shape = {
  type: 'segment',
  coordinates: {
    start: [10, 15],
    end: [17, 15]
  }
};
const {coordinates: 
{ start: [startX, startY],
  end: [endX, endY]}} = shape;


var a = {
  name: "it-kamasutra.com",
  protocol: "https",
  maxStudentsCount: 10,
  isOnline: true,
  student: ['ivan', 'vdfd','asdf'],
  classroom: {
    teatcher: {
      name: 'wew',
      age: 18
    }
  }
}

console.log(a)
let b = {...a};

b.isOnline = false;

console.log(b)

a.name = "sadfasdf";

console.log(a)

b.name = "adsfsdd";
b.isOnline = null;
a.isOnline = false
a.name = "aa"
console.log(b)
console.log(a)
