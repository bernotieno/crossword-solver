function crosswordSolver(emptyPuzzle, words) {

    const puzzle = emptyPuzzle.split('\n').map(row => row.split(''));
    const height = puzzle.length;
    const width = puzzle[0].length;

     words.sort((a, b) => b.length - a.length);
    const minWordLength = words[words.length-1].length
let track = 0
    const wordStarts = [];
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (puzzle[i][j] === '2') {
                track += 2
            } else if (puzzle[i][j] === '1'){
                track +=1
            }
            if (puzzle[i][j] === '1' || puzzle[i][j] === '2') {
                if (j === 0 || puzzle[i][j-1] === '0' || puzzle[i][j-1] === '.') {
                   
                    let k = j;
                    while (k < width && (puzzle[i][k] === '1' || puzzle[i][k] === '2' || puzzle[i][k] === '.' || puzzle[i][k] === '0')) {
                        k++;
                    }
                    if (k - j >= minWordLength) { 
                        wordStarts.push({ row: i, col: j, direction: 'across' });
                    }
                }
                if (i === 0 || puzzle[i-1][j] === '0' || puzzle[i-1][j] === '.') {
                 
                    let k = i;
                    while (k < height && (puzzle[k][j] === '1' || puzzle[k][j] === '2' || puzzle[k][j] === '.' || puzzle[k][j] === '0')) {
                        k++;
                    }
                    if (k - i >= minWordLength) { 
                        wordStarts.push({ row: i, col: j, direction: 'down' });
                    }
                }
            }
        }
    }

    if (track !== words.length) {
        console.log('Error');
        return;
    }

    function fillPuzzle(index) {
        if (index === words.length) {
            return true; 
        }

        const word = words[index];
        for (const start of wordStarts) {
            if (canPlaceWord(word, start)) {
                placeWord(word, start);
                if (fillPuzzle(index + 1)) {
                    return true;
                }
                removeWord(word, start);
            }
        }

        return false;
    }

    function canPlaceWord(word, start) {
        let { row, col, direction } = start;
        for (let i = 0; i < word.length; i++) {
            if (row >= height || col >= width) return false;
            if (puzzle[row][col] !== '0' && puzzle[row][col] !== '1' && puzzle[row][col] !== '2' && puzzle[row][col] !== word[i]) {
                return false;
            }
            direction === 'across' ? col++ : row++;
        }
        return true;
    }

    function placeWord(word, start) {
        let { row, col, direction } = start;
        for (let i = 0; i < word.length; i++) {
            puzzle[row][col] = word[i];
            direction === 'across' ? col++ : row++;
        }
    }

    function removeWord(word, start) {
        console.log(puzzle.map(row => row.join('')))
        let { row, col, direction } = start;
        for (let i = 0; i < word.length; i++) {
            puzzle[row][col] = '0'
            direction === 'across' ? col++ : row++;
        }
    }
    if (fillPuzzle(0)) {
        console.log(puzzle.map(row => row.join('')).join('\n'));
    } else {
        console.log('Error');
    }
}