function fib(n){
    function fib_(n,arr){
        var first=arr.length-1
        var second=arr.length-2
        if(n<=1){
            return arr;
        }
        arr.push(arr[(first)]+arr[(second)])
       return fib_(n-1,arr)

    }
    return fib_(n,[0,1])
}
