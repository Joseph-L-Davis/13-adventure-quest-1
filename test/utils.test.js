// IMPORT MODULES under test here:
import { findById } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arr = [
        { id: 1, species: 'lizard' },
        { id: 2, species: 'mammal' }
    ];

    const expected = { id: 1, species: 'lizard' };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(arr, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});  
