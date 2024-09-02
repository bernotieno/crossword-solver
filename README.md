# Crossword Solver

`crosswordSolver` is a JavaScript function designed to solve a crossword puzzle based on an empty puzzle string and a list of words. The function fills the puzzle with the words provided, ensuring that each word fits the given constraints. If the puzzle cannot be solved or the inputs are invalid, the function returns an error message.

## Function Signature

```javascript
function crosswordSolver(emptyPuzzle, words)
```
## Parameters
* `emptyPuzzle`: A string representing the empty crossword puzzle grid. The grid uses the following characters:

  * `.` (dot) for empty cells that cannot be filled.
  * `1` for cells where a letter can be placed horizontally.
  * `2` for cells where a letter can be placed both horizontally and vertically.
  * `0` for cells where a letter can be placed vertically.
  * `\n` to separate rows.
* `words`: An array of strings containing the words to be placed in the puzzle. The array must contain at least 3 words, and all words must be unique.

## How It Works
1. **Input Validation**:

    * The function checks if `emptyPuzzle` is a string.
    * The function checks if `words` is a valid array containing at least 3 strings    with no duplicates.
    * The function checks if `emptyPuzzle` contains only valid characters (`.`, `\n`, `0`, `1`, `2`).

2. **Puzzle Preparation**:

    * The function converts the emptyPuzzle string into a 2D array.
    * Words are sorted by length in descending order to optimize placement.
3. **Word Placement**:

    * The function identifies potential starting points for placing words either across or down.
    * It recursively attempts to place each word in the puzzle.
    * If a word can be placed, it is added to the puzzle. If a word placement fails, the function backtracks and tries a different placement.
4. **Completion**:

    * If all words are successfully placed, the completed puzzle is printed.
    * If the puzzle cannot be completed or if there is an error in input, the function prints "Error".
## Example Usage
```javascript
const emptyPuzzle = "10\n02";
const words = ["HI", "NO"];
crosswordSolver(emptyPuzzle, words);
```
This example will solve the crossword puzzle based on the given `emptyPuzzle` and `words`. If successful, the function will output the completed puzzle.

## Error Handling
* The function will output `Error` in the following scenarios:

    * Invalid input types (e.g., emptyPuzzle is not a string).
    * Invalid puzzle string format.
    * Invalid or insufficient list of words.
    * Puzzle cannot be solved with the given words.

## Notes
* The function uses a recursive backtracking algorithm to place words in the puzzle, ensuring that all possibilities are explored.
* This function assumes that the input puzzle and word list are well-formed and that the puzzle guarantees a unique solution if solvable.

## License
This project is licensed under the MIT License.

```javascript
This `README.md` provides an overview of the `crosswordSolver` function, detailing its purpose, usage, and functionality.
```

## Authors

[Bernad Okumu](bernadokumu1@gmail.com)

[Ray Caleb](https://learn.zone01kisumu.ke/git/rcaleb/crossword.git)