module.exports = {

  friendlyName: 'Tour view',

  description: 'Show view with added bars for tour',

  inputs: {
    id: { type: 'number', allowNull: false, required: true },
  },

  exits: {
    success: {
      description: 'Bar added to bar tour.',
      responseType: 'redirect'
    }
  },

  fn: async function ({id}) {

    // Push the ID of a bar into the tour array
    this.req.session.tour.push(id);

    return '/tour/plan';
  }
};
