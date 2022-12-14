module.exports = {

  friendlyName: 'Create Bartour entry',

  description: 'Create tour.',

  inputs: {},

  exits: {
    success: {
      description: 'Bartour stored, redirect to show',
      responseType: 'redirect'
    }
  },

  fn: async function () {

    let tour = await Bartour.create({
      name: 'Tour ' + Date.now(),
      customer: this.req.me.id,
      barList: this.req.session.tour
    }).fetch();

    this.req.session.tour = {};

    return 'tour/show/'+tour.id;
  }
};
