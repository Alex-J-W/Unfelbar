module.exports = {

  friendlyName: 'Create event',

  description: 'Create an event for a specific bar.',

  inputs: {
    name: { type: 'string', allowNull: false, required: true},
    description: { type: 'string', allowNull: false, required: true},
    ticketVolume: { type: 'number', allowNull: false, required: true},
    date: { type: 'string', allowNull: false, required: true },
    price: { type:'number', allowNull: false, required: true },
  },

  exits: {
    success: {
      description: 'Event for specific bar created',
      responseType: 'redirect' }
  },

  fn: async function (inputs) {

    inputs.bar = this.req.me.isOwnerOf;
    inputs.ticketsSold = 0;
    inputs.date = inputs.date.slice(0, 10);

    let barEvent = await Barevent.create(inputs).fetch();

    return '/event/' + barEvent.id;
  }
};
