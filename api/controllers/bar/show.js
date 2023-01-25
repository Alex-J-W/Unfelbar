module.exports = {

  friendlyName: 'Show bar',

  description: 'Shows a single bar with its attributes.',

  inputs: {
    id : { type: 'number', required: true }
  },

  exits: {
    success: {
      description: 'Show details of specific bar',
      viewTemplatePath: 'pages/bar/show'
    },
    barNotFound: {
      description: 'Could not find bar with this ID',
      responseType: 'redirect'
    }
  },

  fn: async ({id}) => {

    let bar = await Bar.findOne(id);

    let tickets = await Barevent.find({bar : bar.id, date: { '>=' : new Date()}});

    let ticketsArray = [];
    tickets.forEach((ticket) => ticketsArray.push(ticket));


    if(!bar){
      throw { barNotFound: '/bars'};
    }

    return {bar, tickets};
  }
};
