module.exports = {

  friendlyName: 'Create menu item view',

  description: 'Show view to create a new menu item.',

  inputs: {},

  exits: {
    success: {
      viewTemplatePath: 'pages/item/new'
    }
  },

  fn: async () => {
    let cats = await Category.find();

    return {cats};
  }
};
