module.exports = {

  friendlyName: 'Edit category',

  description: 'Edit the name of a category',

  inputs: {
    id : { type: 'number', allowNull: false, required: true },
    name: { type: 'string', required: true }
  },

  exits: {
    success: {
      description: 'Edited category - redirect to category overview',
      responseType: 'redirect'
    }
  },

  fn: async (inputs) => {
    await Category.updateOne({id: inputs.id}).set({
      name: inputs.name
    });

    return '/category/index';
  }
};
