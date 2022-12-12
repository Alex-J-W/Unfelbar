module.exports = {

  friendlyName: 'Find all menu items for specific bar',

  description: 'Find all items and display them',

  inputs: {

  },

  exits: {
    success: {
      viewTemplatePath: 'pages/item/index'
    }

  },

  fn: async () => {
    let items = await MenuItem.find();
    return {items};
  }
};
