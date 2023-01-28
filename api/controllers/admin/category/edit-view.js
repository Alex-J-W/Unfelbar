module.exports = {

  friendlyName: 'Edit view',

  description: 'Prepare data to edit a category',

  inputs: {
    id: { type: 'number', required: true }
  },

  exits: {
    success: {
      description: 'Show edit view',
      viewTemplatePath: 'pages/category/edit'
    }
  },

  fn: async function ({id}) {

    let cat = await Category.findOne(id);
    return {cat};
  }
};
