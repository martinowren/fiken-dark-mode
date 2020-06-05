// document.querySelector('body').classList.add('dark-mode');
chrome.storage.local.get(['fikenDarkmode'], function(result) {
	console.log(result.fikenDarkmode);
	if(result.fikenDarkmode == false) {
		document.querySelector('body').classList.remove('dark-mode');
	} else {
		document.querySelector('body').classList.add('dark-mode');
	}
});
