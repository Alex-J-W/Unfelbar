module.exports = {

  attributes: {
    name: { type: 'string', required: true },
    customer: { model: 'User', required: true },
    barList: {
      collection: 'bar'
    }
  },
};
