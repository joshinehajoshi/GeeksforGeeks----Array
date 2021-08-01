function reverseArray(n){
    let arr = [];
    for(let i=0;i<n;i++){
        arr.push(window.prompt());
    }
    console.log(arr);
    let newArr = [];
    for(let j=0;j<arr.length;j++){
        newArr.unshift(arr[j]);
    }
    console.log(newArr);
}