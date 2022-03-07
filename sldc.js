// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Analysis of Requirements (2)
// Design (3)
// Implementation (4)
// Maintain (6)
// Planning (1)
// Testing & Integration (5)


//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added."

var planningArr = ['Planning',  'Analysis', 'Desgin', 'Implementation', 'Testing & Integration','Maintain']

var index = 0

console . log(planningArr[index])
//This will print 'Planning' to the console. 

// however, if we change the value index later in the later in the file,
//we can access another value. 

index = 2 
console . log(planningArr[index])
// Because the value index is now 2, this print 'Analysis' to the console. 

index = 3 
console . log (planningArr[index])
// // Because the value index is now 3, this print 'Desgin' to the console.

index = 4 
console . log(planningArr[index])
// // Because the value index is now 4, this print 'Implementation' to the console.

index = 5 
console . log(planningArr[index])
//// // Because the value index is now 5, this print 'Testing & Integration' to the console.

index = 6 
console .log(planningArr[index])
/// // Because the value index is now 6, this print 'Maintain to the console.

