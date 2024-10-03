function Board() {
	const board = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];

	const getBoard = () => board;
	const isEmpty = (row, col) => board[row][col] === 0;
	const markCell = (row, col, id) => {
		board[row][col] = id;
	};
	const checkWinner = (row, col, playerId) => {
		if (checkRow(row, playerId)) return true;
		if (checkCol(col, playerId)) return true;
		if (checkDiag(playerId)) return true;

		return false;
	};

	const checkRow = (row, id) => {
		for (let col = 0; col < 3; col++) {
			if (board[row][col] !== id) return false;
		}
		return true;
	};

	const checkCol = (col, id) => {
		for (let row = 0; row < 3; row++) {
			if (board[row][col] !== id) return false;
		}
		return true;
	};

	const checkDiag = (id) => {
		for (let i = 0; i < 3; i++) {
			if (board[i][i] !== id) return false;
		}
		return true;
	};

	return { getBoard, markCell, isEmpty, checkWinner };
}


	const getValue = () => value;

	return { getValue };
}
