const gameBoard = (function () {
	const cols = 3;
	const rows = 3;
	const board = [];

	for (let row = 0; row < rows; row++) {
		board[row] = [];
		for (let col = 0; col < cols; col++) {
			board[row].push(Cell());
		}
	}

	const getBoard = () => board;

	return { getBoard };
})();

function Cell() {
	let value;

	const getValue = () => value;

	return { getValue };
}
