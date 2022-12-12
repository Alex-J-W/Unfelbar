module.exports = {

  friendlyName: 'Delete a menu item',

  description: 'Delete menu item',

  inputs: {
    id : { type: 'number', allowNull: false, required: true }
  },

  exits: {
    success: {
      description: 'Deleted menu item - redirect to item overview',
      responseType: 'redirect'
    }

  },

  fn: async ({id}) => {
    await MenuItem.destroyOne({id});

    return '/item/index';
  }
};
