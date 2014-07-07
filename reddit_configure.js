Template.configureLoginServiceDialogForReddit.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForReddit.fields = function () {
  return [
    {property: 'clientId', label: 'API Key'},
    {property: 'secret', label: 'Secret Key'}
  ];
};
