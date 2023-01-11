// code your solution here

// Test #1
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Test #2
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// Test #3
function wrapAdjective(string = "*") {
    return function(adj = "special") {
        return `You are ${string}${adj}${string}!`
    }
}