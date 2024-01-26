const data = require('./data.json');
const fs = require('fs');

const palData = {
    content: JSON.parse(fs.readFileSync('./data.json', 'utf8')), // Include 'content' property
    random: () => {
        const index = Math.floor(Math.random() * data.length);
        return data[index];
    },
    getPalObject: (name) => {
        const pal = palData.content.find((item) => item.name === name);

        if (!pal) {
            throw new Error('Pal not found');
        }

        return pal;
    },
    getName: (id) => {
        const name = data[id - 1];

        if (!name) {
            throw new Error('Invalid id');
        }

        return name;
    },
    getId: (name) => {
        const index = data.findIndex((item) => item.name === name);

        if (index === -1) {
            throw new Error('Invalid name');
        }

        return index + 1;
    },
};

module.exports = palData;
