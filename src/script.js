const message = 'Website Auto Performance Test' // Try edit me

// const card = {
//   cost: 6,
//   inkable: true,
//   shiftable: true,
//   shiftCost: 4,

// }

// Update header text
document.querySelector('#header').innerHTML = message

const card = {
  name: "Tinker Bell",
  subtitle: "Giant Fairy",
  cost: 6,
  shiftCost: 4,
  attributes: {
    type: "Floodborn",
    role: "Ally",
    species: "Fairy"
  },
  power: 4,
  toughness: 5,
  abilities: [
    {
      name: "Rock The Boat",
      description: "When you play this character, deal 1 damage to each opposing character.",
      apply: (opposingCharacters) => {
        opposingCharacters.forEach(character => {
          character.takeDamage(1);
        });
      }
    },
    {
      name: "Puny Pirate!",
      description: "During your turn, whenever this character banishes another character in a challenge, you may deal 2 damage to chosen opposing character.",
      apply: (banishedCharacter, chosenCharacter) => {
        if (banishedCharacter.isBanished) {
          chosenCharacter.takeDamage(2);
        }
      }
    }
  ],
  illustrator: "Cookie",
  set: {
    number: 193,
    total: 204,
    code: "EN-1"
  }
};

// Example classes and methods to represent characters and damage application
class Character {
  constructor(name, toughness) {
    this.name = name;
    this.toughness = toughness;
    this.isBanished = false;
  }

  takeDamage(damage) {
    this.toughness -= damage;
    if (this.toughness <= 0) {
      this.banish();
    }
  }

  banish() {
    this.isBanished = true;
  }
}

// Example usage in a simulation
const opposingCharacters = [
  new Character("Opposing Character 1", 3),
  new Character("Opposing Character 2", 4)
];

const chosenCharacter = new Character("Chosen Opposing Character", 5);
const banishedCharacter = new Character("Banished Opposing Character", 1);

// Apply "Rock The Boat" ability
card.abilities[0].apply(opposingCharacters);

// Simulate a character being banished and apply "Puny Pirate!" ability
banishedCharacter.banish();
card.abilities[1].apply(banishedCharacter, chosenCharacter);

console.log(opposingCharacters);
console.log(chosenCharacter);
console.log(banishedCharacter);


document.querySelector('#card-info').innerHTML = card.name