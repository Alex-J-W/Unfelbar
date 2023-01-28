module.exports = {

  friendlyName: 'Create Bartour entry',

  description: 'Create a new tour entry for a specific user.',

  inputs: {},

  exits: {
    success: {
      description: 'Bartour stored, redirect to show',
      responseType: 'redirect'
    }
  },

  fn: async function () {

    // Creates the tour with the given bar Ids. Tour is named after time stamp and can be renamed by user.
    let tour = await Bartour.create({
      name: 'Tour ' + Date.now(),
      customer: this.req.me.id,
      barList: this.req.session.tour
    }).fetch();

    this.req.session.tour = [];

    return '/tour/show/'+tour.id;
  }
};
