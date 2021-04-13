import { getUser, setUser } from '../local-storage-utils.js';


const test = QUnit.test;

test('should get the user', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = {
        hp: 50,
        gold: 0,
        name: 'mamba',
        class: 'dog',
        completed: {}
    };

    localStorage.setItem('USER', JSON.stringify(user));

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getUser();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, user);
});

test('should set the user into local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = {
        hp: 50,
        gold: 0,
        name: 'mamba',
        class: 'dog',
        completed: {}
    };

    setUser(user);

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = JSON.parse(localStorage.getItem('USER'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, user);
});

test('should get the user', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = {
        hp: 50,
        gold: 0,
        name: 'mamba',
        class: 'dog',
        completed: {}
    };

    localStorage.setItem('USER', JSON.stringify(user));

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getUser();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, user);
});

// test('should update user values', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const user = {
//         hp: 50,
//         gold: 0,
//         name: 'mamba',
//         class: 'dog',
//         completed: {}
//     };

//     setUser(user);

//     const choice = {
//         hp: 25,
//         gold: 3
//     };

//     const expected = {
//         hp: 75,
//         gold: 3,
//         name: 'mamba',
//         class: 'dog',
//         completed: {
//             banana: true
//         }
//     };
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     updateUserChoice('banana', choice);

//     const actual = JSON.parse(getUser('USER'));

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.deepEqual(actual, expected);
// });