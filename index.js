async function main() {
    let inquirer = await import('inquirer');
    const prompt = inquirer.default.prompt;
  const fs = require("fs");
  const { Circle, Square, Triangle } = require("./lib/shapes");

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you like?',
        choices: [ 'Circle', 'Square', 'Triangle' ]
    },
    {
        type: 'input', 
        name: 'shapeColor',
        message: 'Please type in which color you would like the logo to be in:'
    },
    {
        type: 'input', 
        name: 'text',
        message: 'Please type in the THREE(3) characters you would like in the logo:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please type what color you would like the text to be in:'
    },
];

class SVG { //use this class for later in init function
    constructor () {
        this.textEl = '';
        this.shapeEl = '';
    }

    render () {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`;
    }

    setText (text, color) {
        if(text.length > 3 && text.length < 1) {
            throw new Error('Please input from 1-3 characters.');
        }

        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShape (shape) {
        this.shapeEl = shape.render();
    }
}

function init() {
    prompt(questions) //prompt function from inquirer inherit from questions array argument
    .then((data) => { //call back function to the promise, users's answers are passed to the callback funstion as argument data
        const logoText = data.text;
        const svg = new SVG();
        let userShape;

        if(data.shape == 'Circle') {
            userShape = new Circle();
        } else if (data.shape == 'Square') {
            userShape = new Square();
        } else if(data.shape == 'Triangle') {
            userShape = new Triangle();
        } else {
            console.log("Please choose a valid shape.");
            return;
        }

        userShape.setColor(data.shapeColor);
        svg.setText(logoText, data.textColor);
        svg.setShape(userShape);

        fs.writeFileSync(`${data.shape}.svg`, svg.render());
    });
}

init();
}
main()
