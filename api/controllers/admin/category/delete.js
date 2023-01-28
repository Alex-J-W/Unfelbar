module.exports = {

  friendlyName: 'Delete category',

  description: 'Delete category.',

  inputs: {
    id: { type: 'number', required: true },
  },

  exits: {
    success: {
      description: 'Category successfully deleted',
      responseType: 'redirect'
    }
  },

  fn: async function ({id}) {

    await Category.destroyOne(id);

    return '/category/index';
  }
};
