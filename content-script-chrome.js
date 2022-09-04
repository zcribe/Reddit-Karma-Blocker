var TAGS = [
  ".score",
  "[data-test-id=post-content] > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)",
  "*[id^=vote-arrows-] > div",
  "[data-click-id=background] > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1)",
  "#email-collection-tooltip-id > span:nth-of-type(1) > span:nth-of-type(2) > span:nth-of-type(1)",
  ".userkarma",
];

var COMMENT_TAGS = [
  ".score",
  "[data-test-id=post-content] > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)",
  "*[id^=vote-arrows-] > div",
  "[data-click-id=background] > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1)",
  "#email-collection-tooltip-id > span:nth-of-type(1) > span:nth-of-type(2) > span:nth-of-type(1)",
  ".userkarma",
];

var POST_TAGS = [
  ".score",
  "[data-test-id=post-content] > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)",
  "*[id^=vote-arrows-] > div",
  "[data-click-id=background] > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1)",
  "#email-collection-tooltip-id > span:nth-of-type(1) > span:nth-of-type(2) > span:nth-of-type(1)",
  ".userkarma",
];

var USER_TAGS = [
  "[data-click-id=background] > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1)",
  "#email-collection-tooltip-id > span:nth-of-type(1) > span:nth-of-type(2) > span:nth-of-type(1)",
  ".userkarma",
];

var ARROWS_TAGS = ["*[id^=vote-arrows-]"];


function removeContent(settings) {
  var tags = []
  if (settings.scorePost) {
    tags = POST_TAGS;
  }

  if (settings.scoreComment) {
    tags = tags.concat(COMMENT_TAGS);
  }

  if (settings.scoreUser) {
    tags = tags.concat(USER_TAGS);
  }

  if (settings.arrows) {
    tags = tags.concat(ARROWS_TAGS);
  }

  var sponsored = document.querySelectorAll(tags.toString());
  sponsored.forEach(function (articleItem) {
    articleItem.style.visibility = "hidden";
  });
}

function removeKarma() {
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var settings = chrome.storage.local.get([
    "scorePost",
    "scoreComment",
    "scoreUser",
    "arrows",
  ]);

  settings.then(function (result){removeContent(result)}, onError);
}

removeKarma();

window.addEventListener("scroll", (_event) => {
  removeKarma();
});

window.addEventListener("DOMContentLoaded", (_event) => {
    removeKarma();
});
