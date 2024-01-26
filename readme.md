# PalNPM

PalNPM is a simple npm package that provides a JSON file allowing users to quickly search for a Pal and access almost all the details about the Pal, including their description.

## Installation

You can install PalNPM using npm:

```bash
npm install palnpm
```

## Usage

```javascript
const pal = require('palnpm');

// Access Pal details
console.log(pal.content);  // Get the array of Pal details

// Example: Displaying Pal names
pal.content.forEach(pal => {
  console.log(pal.name);
});

// Example: Displaying details of a specific Pal (e.g., Anubis)
const anubis = pal.content.find(p => p.name === 'Anubis');
console.log(anubis);
```

### Example Return

```json
{
  "id": 100,
  "key": "100",
  "image": "/public/images/100.png",
  "name": "Anubis",
  "wiki": "https://palworld.fandom.com/wiki/Anubis",
  "types": ["ground"],
  "imageWiki": "https://static.wikia.nocookie.net/palworld/images/2/21/Anubis_menu.png/",
  "suitability": [
    { "type": "grounding", "level": 1 },
    { "type": "snatching", "level": 2 },
    { "type": "transporting", "level": 3 }
  ],
  "drops": ["Bone", "Large Pal Soul", "Innovative Technical Manual"],
  "aura": {
    "name": "Guardian of the Desert",
    "description": "When fighting together, applies Ground damage to the player's attacks. Sometimes dodges attacks with a high-speed sidestep while in battle."
  },
  "description": "Once seen as a symbol of nobility, and an idol for those who shunned wealth and power. Yet over time, this Pal became a token of death."
}
```

## API or Features

PalNPM offers the following features:

- Access Pal details through a simple JSON file.
- Retrieve information such as Pal name, ID, image URL, types, suitability, drops, aura, and description.

## Contributing

If you'd like to contribute to PalNPM, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

Special thanks to the PalWorld community for providing valuable information about Pals.

---

Feel free to further customize this template or let me know if there's anything specific you'd like to add or modify!