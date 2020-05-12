const path = require(`path`);
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

const gens = [
  { limit: 151, skip: 0 },
  { limit: 100, skip: 151 },
  { limit: 135, skip: 251 },
  { limit: 107, skip: 386 },
  { limit: 156, skip: 493 },
  { limit: 72, skip: 649 },
  { limit: 88, skip: 721 },
];


exports.sourceNodes = ({ graphql, actions }) => {
  const { createPage } = actions;
  const TypeTemplate = path.resolve(`src/templates/TypeTemplate.js`);
  const GenerationTemplate = path.resolve(`src/templates/GenerationTemplate.js`);
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
  gens.forEach((gen, i) => {
    createPage({
      path: `/gen/${i + 1}`,
      component: GenerationTemplate,
      context: {
        limit: gen.limit,
        skip: gen.skip
      },
    });
  });
};
