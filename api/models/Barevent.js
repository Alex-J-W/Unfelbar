module.exports = {
  attributes: {
    name: { type: 'string', required: true },
    description: { type: 'string', required: true },
    ticketVolume: { type: 'number', required: true },
    ticketsSold: { type: 'number', required: true },
    date: { type: 'ref', columnType: 'DATE', required: true},
    price:{ type: 'number', required: true },
    bar: { model: 'Bar', required: true }
  },
};
