function seggregateArray(n) {
    let arr = [];
    for(let i=0;i<n;i++){
        arr.push(window.prompt());
    }
    console.log(arr);
    let newArr = [];
    for(let j=0;j<arr.length;j++){
        if(arr[j]%2 == 0){
            newArr.unshift(arr[j])
        }else {
            newArr.push(arr[j]);
        }
    }
    console.log(newArr);
}