/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'view-homepage-or-redirect': true,
  'view-faq': true,
  'view-contact': true,
  'legal/view-terms': true,
  'legal/view-privacy': true,
  'deliver-contact-form-message': true,

  // Custom policies for actions
  'dashboard/view-landing': true,

  // TODO: Make logged-bar-user only
  'bar/create-view': true,
  'bar/create': true,

  'bar/find-all': true,
  'bar/find-by-name': true,

  // TODO: Make all down from here super user only !!!!
  'admin/category/create-view': true,
  'admin/category/create': true,
  'admin/category/delete': true,
  'admin/category/find': true,
  // TODO: Make all up from here super user only !!!!

  // Todo: change to logged-bar-user
  'item/create': true,
  'item/create-view': true,
  'item/find-all': true,

};
