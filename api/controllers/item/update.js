module.exports = {

  friendlyName: 'Update menu item',

  description: 'Update a existing menu item.',

  inputs: {
    id : { type: 'number', allowNull: false, required: true},
    name : { type: 'string', allowNull: false, required: true },
    price : { type: 'number', allowNull: false, required: true },
    description : { type: 'string' },
  },

  exits: {
    success: {
      description: 'Updated menu item',
      responseType: 'redirect'
    }
  },

  fn: async (inputs) => {
    await MenuItem.updateOne({id: inputs.id}).set({
      name: inputs.name,
      price: inputs.price,
      description: inputs.description
    });

    return '/item/'+inputs.id;
  }
};
