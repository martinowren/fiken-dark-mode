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