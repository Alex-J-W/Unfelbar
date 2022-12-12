const {integer} = require('sails-hook-orm/constants/deprecated-validations.list');
module.exports = {

  friendlyName: 'Delete',

  description: 'Delete category by id',

  inputs: {
    id : { type: 'number', allowNull: false, required: true }
  },

  exits: {
    success: {
      description: 'Deleted category - redirect to category overview',
      responseType: 'redirect'
    }
  },

  fn: async ({id}) => {
    await Category.destroyOne({id});

    return '/category/index';
  }
};
