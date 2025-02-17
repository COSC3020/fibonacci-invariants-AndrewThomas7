# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”-Andrew Thomas

## Sources
 No.1-
 
 https://www.youtube.com/watch?v=DxJe-9QU0vk- Learned about Binets formula from this video which I used to calcualte my fibbonachi numbers
 No.2- 
 
 https://www.w3schools.com/JSREF/jsref_unshift.asp -Learned about unshift here

 No.3- Chat GPT Querey-'Im appending elements to an array in javascript and when i put in over 6 elements the output of my array is displayed on two lines. How can I fix this? Don't give me code'
 
 -My code was displaying on two lines so I used chat to problem solve. Turned out to be a formatting issue with my terminal

 
## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

## Answer

The invarient I derived for my code is the following:

Array length = Recursive call number

Code wise:  $Arr.length =RecursiveCallNumber$

### Justification:

For any loop through fib(n) we first check to see if n is less than or equal to 1 inside of our functional closure Fib_(n).(Continued) $\downarrow$

``` Javascript
function fib(n){
    //Recursive closure to ensure arr does not change with each recursive call
    function fib_(n,arr){
        if(n<1){
            arr.unshift(0)
            console.log(arr.length)
            return arr;
        }
        arr.unshift(Math.floor(FibExplict(n))) // Appends each fibbonachi value to the beggining of the list
        return fib_(n-1,arr)
    }
    return fib_(n,[])
}

```

This will always be untrue unless we start with the very first element of the fibbonachi sequence. Then we append the corresponding fibonachi number to the array and call again. Thus we are only ever appending one element at a time and then calling recursively again.

This is true before the loop runs, in the base case we have that arr=[] and the number of recursive calls is 0. Then after the loop runs we append an element and have arr=[$a_o$] and recrusive calls =1.

### Why is this a good invariant?

This is a good invariant because it tells us information about the memory complexity of our algorithm. Again we are only appending one element per recursive call and by the end we have n+1 elements leaving us with something like $O(n)$ for complexity. In practical cases this would let you have an idea of how much storage your algorithm takes up and then you could decide if that fits your indivual needs or capabilities of your hardware.(Also note to count the number of recursive calls you would need a variable to incremenet every step such as whats shown below)

```Javascript

function fib(n){
    //Recursive closer to ensure arr does not change with each recursive call
    var count=0; // Recursive Call counter
    function fib_(n,arr){
        if(n<1){
            arr.unshift(0);
            console.log(arr.length);
            return arr;
        }
        arr.unshift(Math.floor(FibExplict(n))) ;// Appends each fibbonachi value to the beggining of the list
        count++;
        return fib_(n-1,arr)
    }
    return fib_(n,[])

}
```
