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
      responseType: 'redirect'
    }
  },

  fn: async (inputs) => {
    inputs.bar = this.req.session.isOwnerOf.id;
    await MenuItem.create(inputs);

    return '/item/index';
  }
};
