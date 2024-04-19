function firstLetter() {
    const str = "Go Academy Get Set Go";
    console.log("Given Data : ", str);
    let result = "";
    const firstArr = str.split(" ");

    firstArr.forEach(arr => {
        if (arr.length > 0) {
            result = result + arr[0];
        }
    });
    console.log(result);
}
firstLetter();