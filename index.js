//Code your solution here

function findMatching(arr, targetName) {
    return arr.filter(element => element.toUpperCase() === targetName.toUpperCase());
}

// function findMatching(arr, targetName) {
//     return arr.filter(function (element) {
//         return element.toUpperCase() === targetName.toUpperCase();
//     })
// }

function  fuzzyMatch(arr, targetName) {
    return arr.filter(function(element) {
        return element.toUpperCase()[0] === targetName.toUpperCase()[0];
    })
}

function matchName (arr, targetName) {
    return arr.filter (element => element.name === targetName);
}