module.exports = {
  attributes: {
    name: { type: 'string', columnType: 'varchar(80)', required: true },
    items: {
      collection: 'item',
      via: 'category'
    }
  }
};
