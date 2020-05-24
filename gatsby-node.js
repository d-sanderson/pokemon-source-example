const path = require(`path`);
const types = require("./src/lib/types");
const titleCase = require("./src/lib/common").titleCase;
const gens = [
  { gte: 1, lte: 151 },
  { gte: 152, lte: 252 },
  { gte: 253, lte: 386 },
  { gte: 387, lte: 493 },
  { gte: 494, lte: 649 },
  { gte: 650, lte: 721 },
  { gte: 722, lte: 810 },
  { gte: 811, lte: 890 },
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
        type: slug,
        url: `/type/${slug}`,
      },
    });
  });
  gens.forEach((gen, i) => {
    createPage({
      path: `/gen/${i + 1}`,
      component: GenerationTemplate,
      context: {
        lte: gen.lte,
        gte: gen.gte
      },
    });
  });
};
