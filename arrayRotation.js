function arrayRotation(d,n) {
    let arr = [];
    let newArr = [];
    for(let i=0;i<n;i++){
        arr.push(window.prompt());
    }
    newArr = arr.slice(0,d);
    arr.splice(0,d);
    return arr.concat(newArr);
}