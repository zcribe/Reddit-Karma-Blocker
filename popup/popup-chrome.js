function saveOptions(e) {
  e.preventDefault();
  chrome.storage.local.set({
    scorePost: document.querySelector("#scores_post").checked,
    scoreComment: document.querySelector("#scores_comment").checked,
    scoreUser: document.querySelector("#scores_user").checked,
    arrows: document.querySelector("#arrows").checked,
    awards: document.querySelector("#awards").checked
  });
  chrome.tabs.reload();
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#scores_post").checked = typeof result.scorePost !== 'undefined' ? result.scorePost: true;
    document.querySelector("#scores_comment").checked = typeof result.scoreComment !== 'undefined' ? result.scoreComment: true;
    document.querySelector("#scores_user").checked = typeof result.scoreUser !== 'undefined' ? result.scoreUser: true;
    document.querySelector("#arrows").checked = typeof result.arrows !== 'undefined' ? result.arrows: true;
    document.querySelector("#awards").checked = typeof result.awards !== 'undefined' ? result.awards: true;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = chrome.storage.local.get(['scorePost', 'scoreComment', 'scoreUser', 'arrows', 'awards']);
  getting.then(setCurrentChoice, onError);
}

function onError(error) {
  console.log(`Error: ${error}`);
};



document.querySelector("#reddit-karma-blocker-logo").src = chrome.runtime.getURL("icons/new/128.png");
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
