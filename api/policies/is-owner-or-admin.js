/**
 * is-owner-or-admin
 *
 * A simple policy that blocks requests from non-super-admins.
 *
 * For more about how to use policies, see:
 *   https://sailsjs.com/config/policies
 *   https://sailsjs.com/docs/concepts/policies
 *   https://sailsjs.com/docs/concepts/policies/access-control-and-permissions
 */
module.exports = async function (req, res, proceed) {

  // First, check whether the request comes from a logged-in user.
  // > For more about where `req.me` comes from, check out this app's
  // > custom hook (`api/hooks/custom/index.js`).
  if (!req.me) {
    return res.unauthorized();
  }//•

  // Then check that this user is a "super admin" or "owner"
  if (!req.me.isSuperAdmin) {
    if (!req.me.isOwner) {
      return res.forbidden().view("403");
    }
  };

  // IWMIH, we've got ourselves a "super admin".
  return proceed();
};
