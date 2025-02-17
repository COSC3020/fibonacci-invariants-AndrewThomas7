function FibExplict(n){

    return Math.floor((Math.pow(((1+Math.sqrt(5))/2),n)-Math.pow(((1-Math.sqrt(5))/2),n))/Math.sqrt(5))

}

function fib(n){
    //Recursive closer to ensure arr does not change with each recursive call
    function fib_(n,arr){
        if(n<1){
            arr.unshift(0)
            //console.log(arr.length)
            return arr;
        }
        arr.unshift(Math.floor(FibExplict(n))) // Appends each fibbonachi value to the beggining of the list
        return fib_(n-1,arr)
    }
    return fib_(n,[])

}
