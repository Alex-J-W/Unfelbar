module.exports = {

  friendlyName: 'Create Bartour entry',

  description: 'Create tour.',

  inputs: {},

  exits: {
    success: {
      description: 'Bartour stored, redirect to show',
      viewTemplatePath: 'pages/tour/show'
    }
  },

  fn: async function () {

    let tour = await Bartour.create({
      name: 'Tour vom ' + Date.now(),
      customer: this.req.me.id,
      barList: this.req.session.tour
    }).fetch();

    return {tour};
  }
};
