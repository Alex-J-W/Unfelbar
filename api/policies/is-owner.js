/**
 * is-owner
 *
 * A simple policy that allows any request from an authenticated bar owner.
 */
module.exports = async function (req, res, proceed) {

  // First, check whether the request comes from a logged-in user.
  // > For more about where `req.me` comes from, check out this app's
  // > custom hook (`api/hooks/custom/index.js`).
  if (!req.me) {
    return res.unauthorized();
  }//•

  // Then check that this user is a "bar owner".
  if (!req.me.isOwner) {
    return res.forbidden().view("403");
  }//•

  // IWMIH, we've got ourselves a "bar owner".
  return proceed();
};
