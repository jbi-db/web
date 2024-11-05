navigator.storage.estimate().then(function (estimate) {
    document.getElementById("percent").innerHTML = (
      estimate.usage / estimate.quota
    ).toFixed(2);
  });