function smallestNumberArray(n) {
    let arr = [];
    for (let i=0;i<n;i++){
        arr.push(window.prompt());
    }
    console.log(arr);
    let newArr = [];
    newArr.push(arr[0]);
    for(let j=0;j<arr.length;j++){
        if(arr[j]<newArr[0]){
            newArr.splice(0,1,arr[j])
        }
    }
    console.log(newArr);
  
}