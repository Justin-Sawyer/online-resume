$(document).ready(function () {
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith("fr")) {
            /*window.location.href = '../fr/index.html';*/
            $(".en").hide();
            $(".fr").show();
    }
    else {
            /*window.location.href = '../en/index.html';*/
            $(".fr").hide();
            $(".en").show();
    }
});