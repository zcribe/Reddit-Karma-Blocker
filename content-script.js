var TAGS = [

];

var COMMENT_TAGS = [
  ".score",
];

var POST_TAGS = [
  "*[id^=vote-arrows-] > div",
  "#siteTable > .thing > .midcol > .score",
];

var USER_TAGS = [
  "[data-click-id=background] > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1)",
  "#email-collection-tooltip-id > span:nth-of-type(1) > span:nth-of-type(2) > span:nth-of-type(1)",
  ".userkarma",
];

var AWARD_TAGS = [
  ".awardings-bar",
  "*[id^=PostAwardBadges--]",
  "*[id^=CommentAwardBadges--]",
  "[data-test-id^=post-content] > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3)",
  "[data-click-id^=background] > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)> div:nth-of-type(2)",
];

var ARROWS_TAGS = [
  ".arrow",
  ".arrow-up",
  ".arrow-down",
  ".icon-upvote",
  "*[id^=upvote-button-]",
  "*[data-click-id^=upvote]",
  "*[data-click-id^=downvote]"
];

function removeContent(settings) {
  var tags = [];
  if (settings.scorePost) {
    tags = POST_TAGS;
  }

  if (settings.scoreComment) {
    tags = tags.concat(COMMENT_TAGS);
  }

  if (settings.scoreUser) {
    tags = tags.concat(USER_TAGS);
  }

  if (settings.awards) {
    tags = tags.concat(AWARD_TAGS);
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

  var settings = browser.storage.local.get([
    "scorePost",
    "scoreComment",
    "scoreUser",
    "arrows",
    "awards",
  ]);

  settings.then(function (result) {
    if (Object.keys(result).length !== 0) {
      removeContent(result);
    } else {
      removeContent({
        scorePost: true,
        scoreComment: true,
        scoreUser: true,
        arrows: true,
        awards: true,
      });
    }
  }, onError);
}

removeKarma();

window.addEventListener("scroll", (_event) => {
  removeKarma();
});

window.addEventListener("DOMContentLoaded", (_event) => {
  removeKarma();
});
