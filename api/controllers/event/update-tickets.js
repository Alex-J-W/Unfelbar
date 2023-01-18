module.exports = {

  friendlyName: 'Update amount sold tickets',

  description: 'Updates the sold ticket amount after tickets have been bought',

  inputs: {
    amountTicketsBought: { type:'number', required: true },
    barEvent: { type: 'number', required: true }
  },

  exits: {

  },


  fn: async function (inputs) {

    sails.log(inputs);
    let tickets = await Barevent.findOne({id: inputs.barEvent});
    console.log("amountTicketsSold before", tickets);

    await Barevent.updateOne({id: inputs.barEvent}).set({
      ticketsSold: tickets.ticketsSold + inputs.amountTicketsBought,
    });

    return;

  }
};
