module.exports = {
  attributes: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 80,
      required: true
    },
    address: {
      type: 'string',
      minLength: 3,
      maxLength: 80,
      required: true
    },
    description: {
      type: 'string',
      maxLength: 255,
      required: true
    },
    openingHours: {
      type: 'string',
      maxLength: 255,
      required: true
    },
    picture: {
      type: 'string',
      required: true
    },
    owner: {
      model: 'user',
      required: true
    },
    items: {
      collection: 'menuitem',
      via: 'bar',
      required: false
    },
    starRating: {
      type: 'number',
      allowNull: true,
      min: 1,
      max: 5,
    }
  }
};
