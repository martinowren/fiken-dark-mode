// const toggleDarkMode = () => {
// 	const curValue = chrome.storage.local.get(['fikenDarkmode'])
// 	console.log(curValue)
// 	chrome.storage.local.set({'fikenDarkmode': !curValue}, function() {
// 		console.log("Value is set to " + !curValue);
// 	});
// }
const toggleDarkMode = () => {
	chrome.runtime.sendMessage("toggleDarkMode")
}
document.querySelector('.toggleButton').addEventListener('click', toggleDarkMode)
