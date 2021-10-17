let student = {
    name: 'Sarah', 
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() {
        console.log("Hello!");
    },
    'Favorite Teacher': {
        name: "Thomas Powell",
        course: 'CSE 110',
        'rating g': 1
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    console.log(newArr);
    return newArr;
}

function doSomething(num) {
    return num * 2;
}

function printNums() {
    console.log(1);
    setTimeout(function() {console.log(2)}, 1000);
    setTimeout(function() {console.log(3)}, 0);
    console.log(4);
}

printNums();