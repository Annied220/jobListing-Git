/*

*/

function subLength(str, userChar) {
    let count = 0 // A function-scoped variable  
    

    let foundFirst = true    for (let i = 0; i < str.length; i ++) {
        // iteration 0: currentChar = S
        let currentChar = str[i]
        if (foundFirst) { // If we already found the first match
            
            if (currentChar === userChar) {
                // This is the last match
                count ++
                foundLast = true
                break // break means terminate the for loop even if it is not done
            } else {
                // We're still counting - counting the character between the userChar variable
                count ++
            }
        } else {
            // I we haven't found the first match yet
            if (currentChar === userChar) {
                count++
                foundFirst = true
            }
        }
    }

    // When the for loop is done
    if (foundLast) {
        return count
    } else {
        return 0
    }
}

console.log(subLength('Saturday', 'a'))
console.log(subLength('Summer', 'm'))
console.log(subLength('Cheesecake', 'k'))