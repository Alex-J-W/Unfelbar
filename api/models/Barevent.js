module.exports = {
  attributes: {
    name: { type: 'string', required: true },
    description: { type: 'string', required: true },
    capacity: { type: 'number', required: true },
    date: { type: 'string', columnType: 'date', required: true},
    bar: { model: 'Bar', required: true }
  },
};
