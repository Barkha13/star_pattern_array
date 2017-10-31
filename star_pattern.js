/*Create a function called starString() that takes a number and 
returns a string of that many * */
function starString(num){
    let star = "";
    for (let i =0;i<num;i++){
        star += "*";
    }
    return star;
    // return star.repeat(num);
}
console.log(starString(8));



/*Create a function called drawStars() that takes an array of numbers and prints out *. */
function drawStars(arr){
    for (let i = 0; i<arr.length;i++){
        let x = starString(arr[i]);
        console.log(x);
    }
}
drawStars([3,5,2,7]);



/*Modify the function above. Allow an array containing integers and strings 
to be passed to the drawStars() function. When a string is passed, instead of displaying *, 
display the first letter of the string according to the example below. 
You may use the .toLowerCase() string method for this part. */
function drawStars1(arr){
    for (let i = 0;i<arr.length;i++){
        var star = "";
        if (arr[i].constructor == String){
            for (let k = 0;k<arr[i].length;k++){
                star += arr[i][0].toLowerCase();
            }
        }
        else if(arr[i].constructor == Number){
            star = starString(arr[i]);
        }
        console.log(star);
    }
}

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
drawStars1(x);