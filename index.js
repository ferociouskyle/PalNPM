const data = require('./data.json');
module.exports = data;

exports.random = () => {
    const index = Math.floor(Math.random() * data.length);
    return data[index];
};

exports.getName = (id) => {
    const name = [id - 1];

    if (!name) {
        throw new Error('Invalid id');
    }

    return name;
};

exports.getId = (name) => {
    const index = data.findIndex((item) => item.name === name);

    if (!id) {
        throw new Error('Invalid name');
    }

    return index + 1;
};