// chrome.storage.local.set({'fikenDarkmode': true}, function() {
// 	console.log("Value is set to True");
// });
// chrome.tabs.onUpdated.addListener((activeTabID, changeInfo, tab) => {
// 	console.log("On updated");
// 	console.log(activeTabID);
// 	console.log(changeInfo);
// 	console.log(tab);
// 	chrome.tabs.query
// 	chrome.tabs.get(activeTabID, (tab) => {
// 		console.log(tab)
// 	});
// });
chrome.tabs.onUpdated.addListener(() => {
	chrome.tabs.query({currentWindow: true, active: true}, (tab) => {
		if(!(tab.length == 0)){
			if(tab[0].url.includes("fiken.no") && tab[0].status === 'loading') {
				console.log(tab);
				chrome.tabs.insertCSS(tab[0].id, {
					file: 'styles.css',
					runAt: 'document_end'
				})
			}
		}
	})
})
// chrome.tabs.getCurrent(function(tab){
// 	console.log(tab);
// });
