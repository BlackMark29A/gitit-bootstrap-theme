$(document).ready(function() {

  /* Put your custom script here: */

  /* Add external link icon */
  $('#content a')
    .filter(function() {
      return this.hostname && this.hostname !== location.hostname
    })
    .append('<i class="external-link fa fa-external-link-alt small"></i>');

  /* Search and replace localization */
  var prefLang = getPreferredLanguage();
  var lang = getParameterValue("lang");

  if (!lang)
    lang = prefLang;
  if (lang) String.locale = lang;

  localizeAllNodes();
});

/* Localization helper functions */

function getParameterValue(parameter) {
  parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + parameter + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results == null)
    return "";
  else
    return results[1];
}

function getPreferredLanguage() {
  return navigator.languages
    ? navigator.languages[0]
    : (navigator.language || navigator.userLanguage);
}

function localizeAllNodes() {
  var node;
  var walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT, null, false);
  while (node = walker.nextNode()) {
    node.textContent = node.textContent.toLocaleString();
  }
}
