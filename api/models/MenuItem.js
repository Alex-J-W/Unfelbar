module.exports = {
  attributes: {
    name: {
      type: 'string',
      isString: true,
      isNotEmptyString: true,
      minLength: 3,
      maxLength: 80,
      required: true
    },
    price: {
      type: 'number',
      isNumber: true,
      min: 0,
      max: 100000,
      required: true
    },
    description: {
      type: 'string',
      isString: true,
      minLength: 0,
      maxLength: 255,
      required: false
    },
    category: {
      model: 'category',
      via: 'id',
      required: true
    },
    bar: {
      model: 'bar',
      via: 'id',
      required: true
    }
  },
};
