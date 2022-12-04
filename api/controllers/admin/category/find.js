module.exports = {

  friendlyName: 'Category find',

  description: 'Lists all available categories for an admin',

  inputs: {},

  exits: {
    success: {
      viewTemplatePath: 'pages/category/index'
    }
  },

  fn: async () => {
    let cats = await Category.find();
    return {cats};
  }
};
