const { Circle, Square, Triangle } = require('./shapes');

//describle, test, expect to see if it work as the same as the main code

describe('Circle', () => {
    test('test will pass', () => {
     const shape = new Circle('blue')
     expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" fill="blue" />');
    });
});

describe('Square', () => {
    test('test will pass', () => {
      const shape = new Square('red');
      expect(shape.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="red" />');
    });
  });
  
describe('Triangle', () => {
    test('test will pass', () => {
      const shape = new Triangle('yellow');
      expect(shape.render()).toEqual('<polygon points="0,200 300,200 150,0" fill="yellow" />');
    });
  });