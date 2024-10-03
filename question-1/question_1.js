const lowerCaseWords = (arr) => {
    return new Promise((resolve,reject) => {
        if (Array.isArray(arr) == "false") {
            reject("The input should be a mixed array");
        } else {
            const newArray = arr.filter(item => typeof item == "string").map(item => item.toLowerCase());
            resolve(newArray);
        }
    });
}
let arr = ['PIZZA', 10, true, 25, false,'Wings'];
lowerCaseWords(arr).then(item => console.log(item)).catch(errorMessage => console.log(errorMessage));
