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
exports.sourceNodes = ({
  actions,
}) => {
  const { createPage } = actions;
  const TypeTemplate = path.resolve(`src/templates/TypeTemplate.js`);

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
