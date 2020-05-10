const path = require(`path`);
const { results } = require("pokemons");
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
const uniquePokemons = Array.from(new Set(results.map(a => a.name)))
 .map(name => {
   return results.find(a => a.name === name)
 })
exports.sourceNodes = ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createPage } = actions;
  const TypeTemplate = path.resolve(`src/templates/TypeTemplate.js`);
  try {
    // Map over the results array, calling action.createNode on each item in the array
   uniquePokemons.forEach((pokemon, i) => {
     console.log(pokemon)
      const node = {
        ...pokemon, // We copy all of the properties from the pokemon object
        id: createNodeId(i), // Needs to be unique
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
    let slug = type.toLowerCase();
    createPage({
      path: `/type/${slug}`,
      component: TypeTemplate,
      context: {
        type: type,
        url: `/type/${type}`,
      },
    });
  });
};
