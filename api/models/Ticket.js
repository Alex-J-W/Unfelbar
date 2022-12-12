// TODO: fix columnType if error
module.exports = {
  attributes: {
    eventName: { type: 'string', required: true },
    eventDate: { type: 'string', columnType: 'date', required: true },
    price: { type: 'number', required: true },
    event: { model: 'Barevent', required: true },
    customer: { model: 'User', required: true},
  },
};
