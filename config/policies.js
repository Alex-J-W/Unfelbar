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

  // Per default: Lock all routes for every user but admin
  '*': 'is-super-admin',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'account/view-account-overview': 'is-logged-in',
  'view-homepage-or-redirect': true,
  'view-faq': true,
  'view-contact': true,
  'legal/view-terms': true,
  'legal/view-privacy': true,
  'deliver-contact-form-message': true,

  // Custom policies for actions
  'dashboard/*': true,

  // TODO: Could be removed due to  '*': 'is-super-admin'-rule
  'bar/create-view': 'is-super-admin',
  'bar/create-view-2': 'is-super-admin',
  'bar/create': 'is-super-admin',
  'bar/create-2': 'is-super-admin',

  'bar/edit': 'is-owner',

  'bar/find-all': true,
  'bar/find-by-name': true,
  'bar/show': true,

  'tour/add': 'is-logged-in',
  'tour/remove-position': 'is-logged-in',
  'tour/show-current-tour': 'is-logged-in',
  'tour/create': 'is-logged-in',
  'tour/show': 'is-logged-in',

  // TODO: Could be removed due to  '*': 'is-super-admin'-rule
  'admin/category/create-view':'is-super-admin',
  'admin/category/create': 'is-super-admin',
  'admin/category/delete': 'is-super-admin',
  'admin/category/find': 'is-owner-or-admin',

  'item/create-view': 'is-owner',
  'item/create': 'is-owner',

  'item/find-all': true,
  'item/show': 'is-owner',
  'item/edit': 'is-owner',
  'item/update': 'is-owner',
  'item/delete': 'is-owner',

  // TODO: future
  'event/create-view': true,
};
