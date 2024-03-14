const { getDataSource } = require('./src/data-loader');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const dataSource = await getDataSource();
  // const dataSource = {thirdSlideTitle: '예방행동수칙이요'}
  console.log("bb");

  console.log(dataSource);

  createPage({
    path: '/',
    component: require.resolve('./src/templates/single-page.js'),
    context: { dataSource },
  });
};
