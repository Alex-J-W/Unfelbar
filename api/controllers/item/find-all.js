module.exports = {

  friendlyName: 'Find items',

  description: 'Find all items and display them',

  inputs: {

  },

  exits: {
    success: {
      viewTemplatePath: 'pages/item/index'
    }

  },

  fn: async () => {
    let items = await Item.find();
    return {items};
  }
};
