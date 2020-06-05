const statusComponent = document.querySelector('#status');
const checkLocalStorage = () => {
	chrome.storage.local.get(['darkmodeForFiken'], (localstorage) => {
		chrome.runtime.sendMessage("toggleDarkMode")
		setColorOfStatus(!localstorage.darkmodeForFiken);
	})
}
const toggleDarkMode = () => {
	checkLocalStorage()
}

const setColorOfStatus = (status) => {
	if(status) {
		statusComponent.classList.add("activated")
		statusComponent.innerText = "Activated"
	} else {
		statusComponent.classList.remove("activated")
		statusComponent.innerText = "Deactivated"
	}
}

chrome.storage.local.get(['darkmodeForFiken'], (localstorage) => {
	setColorOfStatus(localstorage.darkmodeForFiken);
})

document.querySelector('.toggleButton').addEventListener('click', toggleDarkMode)