module.exports = {
  attributes: {
    number: { type: 'number', required: true },
    barEvent: { model: 'Barevent', required: true },
    customer: { model: 'User', required: true},
  },
};
