module.exports = {

  friendlyName: 'Create a new ticket into DB',

  description: 'Create ticket for a specific event for a user.',

  inputs: {

    number: { type: "number", required: true },
    barEvent: { type: "number", required: true },

  },

  exits: {},

  fn: async function (inputs) {

    console.log(inputs);
    sails.log(inputs);
    inputs.customer = this.req.me.id;

    await Ticket.create(inputs);

    // All done.
    return;

  }


};
