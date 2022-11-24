module.exports = {
  attributes: {
    name: { type: 'string', columnType: 'varchar(80)', required: true },
    address: {type: 'string', columnType: 'varchar(80)'},
    description: {type: 'string', columnType: 'varchar(80)'},
    openingHours: {type: 'string', columnType: 'varchar(80)'},
    picture: {type: 'string', columnType: 'varchar(80)'}
  }
};
