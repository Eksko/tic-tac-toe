function Board() {
	const board = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];

	const getBoard = () => board;
	const isEmpty = (x, y) => board[x][y] === 0;
	const markCell = (x, y, value) => {
		board[x][y] = value;
	};

	return { getBoard, markCell, isEmpty };
}


	const getValue = () => value;

	return { getValue };
}
