/*

Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'

s
r += ",,djksjdf"
*/

function groceries(array) {
    let groceryStr = ""

    for (let i = 0; i < array.length ; i++) {
        groceryStr += array[i].item

        if(i == array.length - 2) {
            groceryStr += ` and `

        } else {
            groceryStr += `, `
        }
   
    }

    return groceryStr // Output
}

console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));

console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));

