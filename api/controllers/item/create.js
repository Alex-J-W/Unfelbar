module.exports = {

  friendlyName: 'Create item',

  description: 'Create item for a specific bar item',

  inputs: {
    name: { type: 'string', allowNull: false, required: true },
    price: { type: 'number', allowNull: false, required: true },
    description: { type: 'string', allowNull: false, required: true },
    category: { type: 'string', allowNull: false, required: true }
  },

  exits: {
    redirect: {
      description: 'Created new item - redirect to item overview',
      responseType: 'redirect'
    }
  },

  // TODO: Link item to a bar or bar to an item
  fn: async ({inputs}) => {
    inputs.category = await Category.findOne(inputs.category);
    await Item.create({inputs});
    throw { redirect: '/item/index' };
  }
};
