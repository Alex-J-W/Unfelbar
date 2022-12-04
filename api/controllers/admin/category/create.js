module.exports = {

  friendlyName: 'Category create',

  // TODO Change bar item name
  description: 'Creates a category for a bar item',

  inputs: {
    name: { type: 'string', allowNull: false, required: true }
  },

  exits: {
    redirect: {
      description: 'Created new Bar - redirect to category overview',
      responseType: 'redirect'
    }
  },

  fn: async ({name}) => {
    await Category.create({name});

    // TODO find better way to manage redirect
    throw { redirect: '/category/index' };
  }
};
