module.exports = {

  friendlyName: 'Remove position',

  description: 'Removes a tour item from the active planning list',

  inputs: {
    id: { type: 'number', required: true }
  },

  exits: {
    success: {
      description: 'Removed item from currently planned tour',
      responseType: 'redirect'
    }
  },

  fn: async function ({id}) {

    this.req.session.tour.splice(id, 1);

    return '/tour/plan';
  }
};
