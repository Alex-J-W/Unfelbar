module.exports = {

  friendlyName: 'Find all menu items for specific bar',

  description: 'Find all items and display them',

  inputs: {
    id: { type: 'number', required: true },
  },

  exits: {
    success: {
      description: 'Find items that belong to bar and show',
      viewTemplatePath: 'pages/item/index'
    }
  },

  fn: async ({id}) => {
    let items = await MenuItem.find({
      bar: id
    });


    return {items};
  }
};
