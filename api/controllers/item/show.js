module.exports = {

  friendlyName: 'Show menu item',

  description: 'Show detailed information for menu item.',

  inputs: {
    id: { type: 'string', allowNull: false, required: true}
  },

  exits: {
    success:{
      viewTemplatePath: 'pages/item/show'
    }
  },

  fn: async ({id}) => {

    let item = await MenuItem.findOne(id);

    return {item};
  }
};
