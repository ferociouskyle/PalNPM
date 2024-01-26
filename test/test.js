const assert = require('assert');
const palData = require('../index'); // Adjust the path accordingly

describe('PalNPM', () => {
  it('should get the id for a valid name', () => {
    const name = 'Anubis'; // Replace with a valid name from your data
    const palId = palData.getId(name);
    assert.strictEqual(palId, 100); // Replace with the expected id for the provided name
  });

  it('should throw an error for an invalid name', () => {
    const invalidName = 'InvalidPal'; // Replace with an invalid name
    assert.throws(() => palData.getId(invalidName), { message: 'Invalid name' });
  });

  it('should get the whole object for pal by valid name', () => { // Added test
    const name = 'Helzephyr';
    const palObject = palData.getPalObject(name);

    assert.strictEqual(palObject.name, name);

  });
  // it('should get the name for a valid id', () => {
  //   const id = 100; // Replace with a valid id from your data
  //   const palName = palData.getName(id);
  //   const expectedDetails = {
  //     id: 100,
  //     key: '100',
  //     image: '/public/images/100.png',
  //     name: 'Anubis',
  
  //   };
  
  //   assert.deepEqual(palName, expectedDetails);
  // });

  it('should throw an error for an invalid id', () => {
    const invalidId = 999; // Replace with an invalid id
    assert.throws(() => palData.getName(invalidId), { message: 'Invalid id' });
  });

  it('should return a random Pal from the data', () => {
    const randomPal = palData.random();
    assert.ok(randomPal); // Basic check that a Pal is returned
  });
});
