window.addEventListener('load', (e) => {
	const objectOfDates = {};
	const arrayOfValues = [];
	const getDate = (el) => {
		return el.cells[0].innerText;
	};
	const erKid = (el) => {
		return el.cells[1].innerText.includes('KID');
	};
	const listOfAllTransactions = document.querySelectorAll(
		'.panel.panel-default table tbody tr'
	);

	// Legger inn alle dagene vi har
	listOfAllTransactions.forEach((el) => {
		const date = getDate(el);
		objectOfDates[date] = [];
	});

	// Legger inn alle posteringene i objektet
	listOfAllTransactions.forEach((el) => {
		const date = getDate(el);
		objectOfDates[date].push(el);
	});

	for (var key in objectOfDates) {
		if (objectOfDates.hasOwnProperty(key)) {
			const kidArr = objectOfDates[key].filter(erKid);
			if (kidArr.length > 0) {
				let sum = 0;
				kidArr.forEach((el) => {
					sum += Number(
						el.cells[2].innerText.replace(',', '.').replace(' ', '')
					);
				});
				const tr = document.createElement('tr');
				const td = document.createElement('td');
				td.classList.add('text-success');
				td.style.textAlign = 'center';
				td.colSpan = 100;
				td.innerText =
					'Summen av dagens kid: ' + Math.round(sum * 100) / 100;
				tr.appendChild(td);
				if (kidArr[kidArr.length - 1].nextSibling) {
					kidArr[kidArr.length - 1].parentNode.insertBefore(
						tr,
						kidArr[kidArr.length - 1].nextSibling
					);
				} else {
					kidArr[kidArr.length - 1].parentNode.appendChild(tr);
				}
			}
		}
	}
});
