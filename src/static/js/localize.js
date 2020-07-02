$(document).ready(function () {
    /* Search and replace localization */
    var prefLang = getPreferredLanguage();
    var lang = getParameterValue("lang");

    if (!lang)
        lang = prefLang;
    if (lang) String.locale = lang;

    localizeAllNodes();
    localizeAttributeText();
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

function localizeAttributeText() {
    var node;
    var walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT, null, false);
    while (node = walker.nextNode()) {
        if (node.value)
            node.value = node.value.toLocaleString();
        if (node.placeholder) {
            node.placeholder = node.placeholder.toLocaleString();
        }
    }
}
