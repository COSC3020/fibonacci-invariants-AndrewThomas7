function fib2(n){
    if(n==0){
        return a=[0];
    }
    function fib2_(n,arr){
        var first=arr.length-1
        var second=arr.length-2
        if(n<=1){
            return arr;
        }
        arr.push(arr[(first)]+arr[(second)])
       return fib2_(n-1,arr)

    }
    return fib2_(n,[0,1])
}
