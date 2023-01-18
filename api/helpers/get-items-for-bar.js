module.exports = {

  fn: async (barId) => {
    let items = await MenuItem.find( {bar: barId});
    return items;
  }
}
