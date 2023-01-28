module.exports = {
  attributes: {
    name: {
      type: 'string',
      isNotEmptyString: true,
      minLength: 2,
      maxLength: 80,
      required: true
    },
    price: {
      type: 'number',
      min: 0,
      max: 100000,
      required: true
    },
    description: {
      type: 'string',
      minLength: 0,
      maxLength: 255,
      required: false
    },
    category: {
      model: 'category'
    },
    bar: {
      model: 'bar',
      required: true
    }
  },
};
