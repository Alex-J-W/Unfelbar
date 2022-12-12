module.exports = {
  attributes: {
    name: { type: 'string', columnType: 'varchar(80)', allowNull: false, required: true },
    items: {
      collection: 'menuitem',
      via: 'category'
    }
  }
};
