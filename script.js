// laivai:
// 1x4
// 2x3
// 3x2
// 4x1

// bus kuriamas dvieju dimenciju masyvas

let cardContainer = document.getElementById("cardContainer");

let winMessage = document.getElementById("winMessage");

winMessage.style.display = "none";

let cards = [];

let emptyColor = "blue";

let shipColor = "red";

//kuriama f-ja tikrinanti card masyve ar tam tikra koordinate yra uzimta (1-tai)
function checkCoordinate(row, column) {
	if (row < 0 || row > 9 || column < 0 || column > 9) { //naudojamas ne &&(ir), o ar (||), nes kitaip klaida, nes tinka betkuri kondicija, kad grazintu true		
		return true;
	}
	console.log(row, column);
	if (cards[row][column] === 0) {
		return true;
	} else {
		return false;
	}
}

// gridas 10x10 su nuliais (100 nuliu)
function createCards() {
	for (let x = 0; x < 10; x++) {
		let row = [];
		cards.push(row);
		for (let i = 0; i < 10; i++) {
			row.push(0);
		}
	}
	//laivu poziciju kurimas / 4 vienvieciai
	for (let x = 0; x < 4; x++) {		
		for (let search = 0; search < 100; search++) { //search - bandymas rasti tuscia vieta

			let column = Math.floor(Math.random() * 10); //Math.random - grazina sk. tarp nulio ir vieneto visada
			let row = Math.floor(Math.random() * 10);

			if (
				checkCoordinate(row, column) &&
				checkCoordinate(row, column + 1) && //checkCoordinate(row, column + 1) istraukiamas vienu desiniau / ir patikrinamos visos puses
				checkCoordinate(row, column - 1) && //checkCoordinate(row, column - 1) istraukiamas vienu kairiau
				checkCoordinate(row - 1, column) &&
				checkCoordinate(row + 1, column) &&
				checkCoordinate(row - 1, column - 1) && //tikrinami kampai
				checkCoordinate(row - 1, column + 1) && //tikrinami kampai
				checkCoordinate(row + 1, column + 1) && //tikrinami kampai
				checkCoordinate(row + 1, column - 1)
			) {
				cards[row][column] = 1; //jei tuscia - dedamas laivelis
				break; //break - nutraukia artimiausia hierarchine prasme cikla for (let search = 0; search < 10; search++) {}
			}
		}
	}
	for (let x = 0; x < 3; x++) {
		for (let search = 0; search < 100; search++) {
			let column = Math.floor(Math.random() * 10);
			let row = Math.floor(Math.random() * 10);
			let horizontal = Math.random() > 0.5;

			if (horizontal) {
				if (
					checkCoordinate(row, column) &&
					checkCoordinate(row, column + 1) && 
					checkCoordinate(row, column - 1) && 
					checkCoordinate(row - 1, column) &&
					checkCoordinate(row + 1, column) &&
					checkCoordinate(row - 1, column - 1) && 
					checkCoordinate(row - 1, column + 1) && 
					checkCoordinate(row + 1, column + 1) && 
					checkCoordinate(row + 1, column - 1) && 
					checkCoordinate(row - 1, column + 2) &&
					checkCoordinate(row, column + 2) &&
					checkCoordinate(row + 1, column + 2) &&
					column + 1 <= 9
				) {
					cards[row][column] = 1;
					cards[row][column + 1] = 1;
					break;
				}
			} else {
				if (
					checkCoordinate(row, column) &&
					checkCoordinate(row, column + 1) && 
					checkCoordinate(row, column - 1) && 
					checkCoordinate(row - 1, column) &&
					checkCoordinate(row + 1, column) &&
					checkCoordinate(row - 1, column - 1) && 
					checkCoordinate(row - 1, column + 1) && 
					checkCoordinate(row + 1, column + 1) && 
					checkCoordinate(row + 1, column - 1) && 
					checkCoordinate(row + 2, column - 1) &&
					checkCoordinate(row + 2, column) &&
					checkCoordinate(row + 2, column + 1) &&
					row + 1 <= 9
				) {
					cards[row][column] = 1;
					cards[row + 1][column] = 1;
					break;
				}
			}
		}
	}

	for (let x = 0; x < 2; x++) {
		for (let search = 0; search < 100; search++) {
			let column = Math.floor(Math.random() * 10);
			let row = Math.floor(Math.random() * 10);
			let horizontal = Math.random() > 0.5;

			if (horizontal) {
				if (
					checkCoordinate(row, column) &&
					checkCoordinate(row, column + 1) &&
					checkCoordinate(row, column - 1) &&
					checkCoordinate(row - 1, column) &&
					checkCoordinate(row + 1, column) &&
					checkCoordinate(row - 1, column - 1) &&
					checkCoordinate(row - 1, column + 1) &&
					checkCoordinate(row + 1, column + 1) &&
					checkCoordinate(row + 1, column - 1) &&
					checkCoordinate(row - 1, column + 2) &&
					checkCoordinate(row, column + 2) &&
					checkCoordinate(row + 1, column + 2) &&
					checkCoordinate(row - 1, column + 3) &&
					checkCoordinate(row, column + 3) &&
					checkCoordinate(row + 1, column + 3) &&
					column + 1 <= 9 &&
					column + 2 <= 9
				) {
					cards[row][column] = 1;
					cards[row][column + 1] = 1;
					cards[row][column + 2] = 1;
					break;
				}
			} else {
				if (
					checkCoordinate(row, column) &&
					checkCoordinate(row, column + 1) && 
					checkCoordinate(row, column - 1) &&
					checkCoordinate(row - 1, column) &&
					checkCoordinate(row + 1, column) &&
					checkCoordinate(row - 1, column - 1) &&
					checkCoordinate(row - 1, column + 1) &&
					checkCoordinate(row + 1, column + 1) &&
					checkCoordinate(row + 1, column - 1) && //tikrinami kampai
					checkCoordinate(row + 2, column - 1) &&
					checkCoordinate(row + 2, column) &&
					checkCoordinate(row + 2, column + 1) &&
					checkCoordinate(row + 3, column - 1) && //aplinkinis patikrinimas
					checkCoordinate(row + 3, column) &&
					checkCoordinate(row + 3, column + 1) &&
					row + 1 <= 9 &&
					row + 2 <= 9
				) {
					cards[row][column] = 1;
					cards[row + 1][column] = 1;
					cards[row + 2][column] = 1;
					break;
				}
			}
		}
	}

	for (let x = 0; x < 1; x++) {
		for (let search = 0; search < 1000; search++) {
			let column = Math.floor(Math.random() * 10);
			let horizontal = Math.random() > 0.5;

			if (horizontal) {
				if (
					checkCoordinate(row, column) &&
					checkCoordinate(row, column + 1) &&
					checkCoordinate(row, column - 1) &&
					checkCoordinate(row - 1, column) &&
					checkCoordinate(row + 1, column) &&
					checkCoordinate(row - 1, column - 1) && 
					checkCoordinate(row - 1, column + 1) && 
					checkCoordinate(row + 1, column + 1) && 
					checkCoordinate(row + 1, column - 1) && //tikrinami kampai
					checkCoordinate(row - 1, column + 2) &&
					checkCoordinate(row, column + 2) &&
					checkCoordinate(row + 1, column + 2) &&
					checkCoordinate(row - 1, column + 3) && //aplinkinis patikrinimas
					checkCoordinate(row, column + 3) &&
					checkCoordinate(row + 1, column + 3) &&
					checkCoordinate(row - 1, column + 4) && //aplinkinis patikrinimas
					checkCoordinate(row, column + 4) &&
					checkCoordinate(row + 1, column + 4) &&
					column + 1 <= 9 &&
					column + 2 <= 9 &&
					column + 3 <= 9
				) {
					cards[row][column] = 1;
					cards[row][column + 1] = 1;
					cards[row][column + 2] = 1;
					cards[row][column + 3] = 1;
					break;
				}
			} else {
				if (
					checkCoordinate(row, column) &&
					checkCoordinate(row, column + 1) && 
					checkCoordinate(row, column - 1) && 
					checkCoordinate(row - 1, column) &&
					checkCoordinate(row + 1, column) &&
					checkCoordinate(row - 1, column - 1) && 
					checkCoordinate(row - 1, column + 1) && 
					checkCoordinate(row + 1, column + 1) && 
					checkCoordinate(row + 1, column - 1) && 
					checkCoordinate(row + 2, column - 1) &&
					checkCoordinate(row + 2, column) &&
					checkCoordinate(row + 2, column + 1) &&
					checkCoordinate(row + 3, column - 1) && 
					checkCoordinate(row + 3, column) &&
					checkCoordinate(row + 3, column + 1) &&
					checkCoordinate(row + 4, column - 1) && 
					checkCoordinate(row + 4, column) &&
					checkCoordinate(row + 4, column + 1) &&
					row + 1 <= 9 &&
					row + 2 <= 9 &&
					row + 3 <= 9
				) {
					cards[row][column] = 1; 
					cards[row + 1][column] = 1;
					cards[row + 2][column] = 1;
					cards[row + 3][column] = 1;
					break;
				}
			}
		}
	}

	//kuriama zaidimu lenteles atvaizdavimas
	for (let row = -1; row < 10; row++) {
		for (let column = -1; column < 10; column++) {
			if (row === -1 && column === -1) {
				cardContainer.innerHTML += `<div class="card"><div class="cardInner"></div></div>`;
				continue; //nutraukia viena ciklo dali
			}
			if (row === -1) {
				let letters = [
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
				];
				cardContainer.innerHTML += `<div class="card"><div class="cardInner">${letters[column]}</div></div>`;
			} else if (column === -1) {
				cardContainer.innerHTML += `<div class="card"><div class="cardInner">${
					row + 1
				}</div></div>`;
			} else {
				let cell = cards[row][column];
				//id negali tureti tarpo!!!
				cardContainer.innerHTML += `<div class="card" id="${row}-${column}" onclick="clickCard(event)">
					<div class="cardInner">
						<div class="cardFace cardFace-front"></div>
						<div class="cardFace cardFace-back" style="background-color: ${
							cell === 0 ? emptyColor : shipColor
						}"></div>
						<!-- ${
							cell === 0 ? emptyColor : shipColor
						} kitaip if === 0 tada emptyColor else shipColor -->
					</div>
				</div>`;
			}
		}
	}
}

createCards();

function clickCard(event) {
	let selectedCardId = event.composedPath()[2].id;
	console.log(selectedCardId, event.composedPath());
	let card = document.getElementById(selectedCardId); //selectedCardId - elementas paspaustos koteles id="${row}-${column}
	if (!card.classList.contains("is-flipped")) {
		//classList grazina visas klases kaip masyva (ypatingas masyvas, kuris turi patogius metodus dirbti su klasemis)
		card.className += " is-flipped";
	}
}
