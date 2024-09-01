// Import the function to test
const { crosswordSolver } = require('./crosswordSolver');

function captureConsoleOutput(func) {
    const originalLog = console.log;
    let consoleOutput = [];
    console.log = (...args) => consoleOutput.push(args.join(' '));

    try {
        func();
    } finally {
        console.log = originalLog;
    }

    return consoleOutput;
}

function runTests() {
    let passedTests = 0;
    let totalTests = 0;

    function expect(actual) {
        return {
            toBe: (expected) => {
                totalTests++;
                if (JSON.stringify(actual) === JSON.stringify(expected)) {
                    console.log(`✅ Test passed`);
                    passedTests++;
                } else {
                    console.log(`❌ Test failed`);
                    console.log(`   Expected: ${JSON.stringify(expected)}`);
                    console.log(`   Received: ${JSON.stringify(actual)}`);
                }
            }
        };
    }

    function runTest(name, testFn) {
        console.log(`\nRunning test: ${name}`);
        return captureConsoleOutput(testFn);
    }

    // Test Case 1: Valid input - simple puzzle
    const output1 = runTest('inValid input - simple puzzle', () => {
        const emptyPuzzle = '2.1\n111\n1.1';
        const words = ['CAT', 'DOG', 'PIG'];
        crosswordSolver(emptyPuzzle, words);
    });
    expect(output1[0]).toBe('Error');

    // Test Case 2: Invalid input - emptyPuzzle is not a string
    const output2 = runTest('Invalid input - emptyPuzzle is not a string', () => {
        const emptyPuzzle = ['1', '1', '1'];
        const words = ['CAT'];
        crosswordSolver(emptyPuzzle, words);
    });
    expect(output2[0]).toBe('Error');

    // Test Case 3: Invalid input - words is not an array
    const output3 = runTest('Invalid input - words is not an array', () => {
        const emptyPuzzle = '111';
        const words = 'CAT';
        crosswordSolver(emptyPuzzle, words);
    });
    expect(output3[0]).toBe('Error');

    // Test Case 4: Invalid input - words contains non-string elements
    const output4 = runTest('Invalid input - words contains non-string elements', () => {
        const emptyPuzzle = '111';
        const words = ['CAT', 123, 'DOG'];
        crosswordSolver(emptyPuzzle, words);
    });
    expect(output4[0]).toBe('Error');

    // Test Case 5: Invalid input - number of words does not match puzzle
    const output5 = runTest('Invalid input - number of words does not match puzzle', () => {
        const emptyPuzzle = '111\n111';
        const words = ['CAT', 'DOG', 'PIG'];
        crosswordSolver(emptyPuzzle, words);
    });
    expect(output5[0]).toBe('Error');

    // Test Case 6: Valid input - complex puzzle
    const output6 = runTest('Valid input - complex puzzle', () => {
        const emptyPuzzle = '10000\n10000\n1000.\n10010';
const words = ['HELLO', 'WORLD', 'OPEN', 'PEN', 'DO'];
        crosswordSolver(emptyPuzzle, words);
    });
    expect(output6[0]).toBe('HELLO\nWORLD\nOPEN.\nPENDO');

    // Test Case 7: Valid input - puzzle with only horizontal words
    const output7 = runTest('Valid input - puzzle with only vertical words', () => {
        const emptyPuzzle = '111\n000\n000';
        const words = ['CDP', 'AOI', 'TGG'];
        crosswordSolver(emptyPuzzle, words);
    });
    expect(output7[0]).toBe('CAT\nDOG\nPIG');

    // Test Case 8: Valid input - puzzle with only vertical words
    const output8 = runTest('Valid input - puzzle with only horizontal words', () => {
        const emptyPuzzle = '100\n100\n100';
        const words = ['COP', 'ADA', 'TGT'];
        crosswordSolver(emptyPuzzle, words);
    });
    expect(output8[0]).toBe('COP\nADA\nTGT');

    // Test Case 9: Invalid input - words longer than puzzle dimensions
    const output9 = runTest('Invalid input - words longer than puzzle dimensions', () => {
        const emptyPuzzle = '111\n111';
        const words = ['LONGWORD', 'CAT'];
        crosswordSolver(emptyPuzzle, words);
    });
    expect(output9[0]).toBe('Error');

    // Test Case 10: Valid input - puzzle with single-letter words
    const output10 = runTest('inValid input - puzzle with single-letter words', () => {
        const emptyPuzzle = '1.1\n.1.\n1.1';
        const words = ['A', 'B', 'C', 'D'];
        crosswordSolver(emptyPuzzle, words);
    });
    expect(output10[0]).toBe('Error');

    // Print test results
    console.log(`\nTest Results: ${passedTests} passed, ${totalTests - passedTests} failed`);
}

// Run the tests
runTests();

function captureConsoleOutput(func) {
    const originalLog = console.log;
    let consoleOutput = [];
    console.log = (...args) => consoleOutput.push(args.join(' '));

    try {
        func();
    } finally {
        console.log = originalLog;
    }

    return consoleOutput;
}

