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
    // TODO: test this
    // inputs.bar = this.req.session.isOwnerOf
    inputs.bar = 1;
    await MenuItem.create(inputs);

    return '/item/index';
  }
};
