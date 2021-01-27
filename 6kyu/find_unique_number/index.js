function findUniq(arr) {

    let unique;
    let bFlag; 

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] != arr[i+1]) {
            arr.filter(val => val === arr[i]).length == 1 ? (unique = arr[i], bFlag = true) : '';
        }
        if (bFlag) { break }
    }
    
    return unique;
}
