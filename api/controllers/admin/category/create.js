module.exports = {

  friendlyName: 'Category create',

  description: 'Creates a category for a menuItem',

  inputs: {
    name: { type: 'string', allowNull: false, required: true }
  },

  exits: {
    success: {
      description: 'Created new Category - redirect to category overview',
      responseType: 'redirect'
    }
  },

  fn: async ({name}) => {
    await Category.create({name});

    return '/category/index';
  }
};
