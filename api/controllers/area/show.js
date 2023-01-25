module.exports = {

  friendlyName: 'Show area',

  description: 'Shows area of specific logged in user.',

  inputs: {},

  exits: {
    success: {
      description: 'Show area with fetched information',
      viewTemplatePath: 'pages/area/show'
    }

  },

  fn: async function () {

    let customer = this.req.me.id;

    let tours = await Bartour.find({customer});
    let tickets = await Ticket.find({customer});

    let data = {tours, tickets};

    return {data};

  }


};
