// console.log("One");
// console.log("Two");
// setTimeout(function(){
//     console.log("This will be executed after 3 seconds!");
// }, 3000)
// console.log("Three");


function getCandies(){
    setTimeout(() => {
        const candies = "🍬";
        console.log("Here is our candies",candies);
        return candies;
    }, 5000);
}
console.log(getCandies());
