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
    let item = await MenuItem.destroyOne({id}).fetch();
    console.log(item)
    return '/bar/' + item.bar + '/items' ;
  }
};
