const path = require(`path`);
const fetch = require("node-fetch");
const pokemons = require("pokemons");
const types = [
  "Normal",
  "Fighting",
  "Flying",
  "Poison",
  "Ground",
  "Rock",
  "Bug",
  "Ghost",
  "Steel",
  "Fire",
  "Grass",
  "Water",
  "Electric",
  "Psychic",
  "Ice",
  "Dragon",
  "Dark",
  "Fairy",
];
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createPage } = actions;
  const TypeTemplate = path.resolve(`src/templates/TypeTemplate.js`);
  try {
    // Map over the results array, calling action.createNode on each item in the array
    pokemons.results.forEach((pokemon, i) => {
      const node = {
        ...pokemon, // We copy all of the properties from the pokemon object
        id: createNodeId(`${i}`), // Needs to be unique
        internal: {
          type: "Pokemons",
          contentDigest: createContentDigest(pokemon), // We pass in the pokemon object to make sure it's unique
        },
      };
      // Create the actual data node
      actions.createNode(node);
    });
  } catch (error) {
    console.log(error);
  }

  types.forEach(type => {
    createPage({
      path: `/type/${type}`,
      component: TypeTemplate,
      context: {
        type: type,
        url: `/type/${type}`,
      },
    });
  });
};
