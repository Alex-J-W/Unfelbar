module.exports = {

  friendlyName: 'Edit menu item',

  description: 'Edit specific menu item for a bar.',

  inputs: {
    id: { type: 'number', allowNull: false, required: true}
  },

  exits: {
    success: {
      description: 'Edited a single menu item',
      viewTemplatePath: 'pages/item/edit'
    },
    noSuchItem: {
      description: 'No such menu item with this ID found',
      responseType: 'redirect'
    }
  },

  fn: async ({id}) => {
    let item = await MenuItem.findOne({id});

    if(!item){
      throw { noSuchItem: '/item/index'};
    }

    return {item};
  }
};
