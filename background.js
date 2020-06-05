chrome.tabs.onUpdated.addListener(() => {
	chrome.storage.local.get({'darkmodeForFiken': true}, (localstorage) => {
		if(localstorage.darkmodeForFiken == true) {
			setDarkMode()
		}
	})	
})



const setDarkMode = () => {
	chrome.tabs.query({currentWindow: true, active: true}, (tab) => {
		if(!(tab.length == 0)){
			if(tab[0].url.includes("fiken.no") && tab[0].status === 'loading') {
				chrome.tabs.insertCSS(tab[0].id, {
					file: 'styles.css',
					runAt: 'document_end'
				})
			}
		}
	})
}

chrome.runtime.onMessage.addListener( (request, sender, sendReponse) => {
		if(request === 'toggleDarkMode') {
			chrome.storage.local.get(['darkmodeForFiken'], (data) => {
				if(data.darkmodeForFiken === false) {
					chrome.storage.local.set({'darkmodeForFiken': true}, () => {
						chrome.tabs.reload();
					})
				} else {
					chrome.storage.local.set({'darkmodeForFiken': false}, () => {
						chrome.tabs.reload();
					})
				}
			})
		}
})
