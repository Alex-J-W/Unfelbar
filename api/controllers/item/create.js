module.exports = {

  friendlyName: 'Create item',

  description: 'Create item for a specific bar item',

  inputs: {
    name: { type: 'string', allowNull: false, required: true },
    price: { type: 'number', allowNull: false, required: true },
    description: { type: 'string', allowNull: false, required: false },
    category: { type: 'number', allowNull: false, required: true }
  },

  exits: {
    success: {
      description: 'Menu item for specific bar created',
      responseType: 'redirect'
    }
  },

  fn: async function (inputs) {
    inputs.bar = this.req.me.isOwnerOf;
    let item = await MenuItem.create(inputs).fetch();

    return '/bar/' +item.bar+ '/items';
  }
};
