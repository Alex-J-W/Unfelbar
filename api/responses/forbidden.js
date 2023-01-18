module.exports = function forbidden() {

  let req = this.req;
  let res = this.res;

  sails.log.verbose('Ran custom response: res.forbidden()');

  if (req.wantsJSON) {
    return res.status(403).send('Access Forbidden: You do not have the necessary permissions to access this resource');
  }
  else {
    return res.status(403).view('403');
  }

};
