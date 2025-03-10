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

 No.4-https://launchschool.com/books/advanced_dsa/read/time_and_space_complexity_recursive -Used to look at some examples of complexity within recursive calls
 
## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

# Answer

The Invariant for my algorithm is the following:

For every iteration the last element of the array is either the sum of itself and the previous element

$f_n=f_n+f_{n-1}$,     $(I)$

or the sum of the previous two terms

$f_n=f_{n-1}+f_{n-2}$. $(II)$

To clarify it is always one or the other and cannot be both.

### An Example:

For $n=3$: 

*Before iteration:*  $arr=[0,1]$ which satisfies the first property $(I)$ because the last element $arr[1]=1+0$

*After Iteration:* $arr=[0,1,1]$ where $arr[2]=1+0$ which satisfies the second property $(II)$.


Next Iteration: n=2: 

*Before Iteration:* $arr=[0,1,1]$ where $arr[2]=1+0$ which satisfies the second property $(II)$.

*After Iteration:* $arr=[0,1,1,2]$ where $arr[3]=1+1$ which satisfies the second property $(II)$.

Last Iteration: n=1:

*Before Iteration:* $arr=[0,1,1,2]$ where $arr[3]=1+1$ which satisfies the second property $(II)$.

*After Iteration:* $arr=[0,1,1,2,3]$ where $arr[4]=2+1$, which satisfies proeprty $(II)$

Exit:

Then because this property holds before and after every itertation it is an invariant for this algorithm. It also tells us that the last element cooresponds with the $nth$ iteration of the fibbonachi sequence and that the sequence is built out of it's previous elements.


