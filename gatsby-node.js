const fetch = require('node-fetch');
const pokemons = require('pokemons');
exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  try {
    // Map over the results array, calling action.createNode on each item in the array
    pokemons.results.forEach((pokemon, i) => {
      console.log(pokemon)
      const node = {
        ...pokemon, // We copy all of the properties from the pokemon object
        id: createNodeId(`${i}`), // Needs to be unique
        internal: {
          type: 'Pokemons',
          contentDigest: createContentDigest(pokemon) // We pass in the pokemon object to make sure it's unique
        }
      };
      // Create the actual data node
      actions.createNode(node);
    });
  } catch (error) {
    console.log(error);
  }
};