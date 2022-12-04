const {integer} = require('sails-hook-orm/constants/deprecated-validations.list');
module.exports = {

  friendlyName: 'Delete',

  description: 'Delete category by id',

  inputs: {
    id : { type: 'number', allowNull: false, required: true }
  },

  exits: {
    redirect: {
      description: 'Created new Bar - redirect to category overview',
      responseType: 'redirect'
    }
  },

  fn: async ({id}) => {
    await Category.destroyOne({id});
    // TODO find better way to manage redirect
    throw { redirect: '/category/index' };
  }
};
