//Preparing for interviews//
//Algorithms

//Big O
//Cormen's Intro to Algorithms -- MIT//


// How Effiecient an algorithm is
// Most concerned with orders of Magnitude Differences with time
// an x squared can give huge gaps of data usage

// Big O for 3x^2 + x + 1
// The big O is o(n^2)--> looking at what gives us the biggest values
// That will take the most time

function crossAdd(arr){
	var ans = [];
	for(var i =0;i<arr.length;i++){
		var forward = arr[i];
		var backward = arr[arr.length-1-i];
		ans.push(forward + backward);
	}
	return ans;
}

crossAdd([1,2,3]); // --> [4,4,4];

//The Big O for this occurence is n because we go over everything once.

// Another example is needle in haystack
// Big O for this example is still O(n);

function finder(haystack, needle){
	for(var i =0;i<haystack.length;i++){
		if(haystack[i]===needle){
			return true;
		}
	}
	return false;
}

//// Ex for worst Case
// for [1,2,3] -->[[1,2],[1,3],[2,1],[2,3]]

function Tupler (arr){
	var ans = [];
	for(var i =0;i<arr.length;i++){
		for(var j = 0;j<arr.length;j++){
			ans.push([arr[i],arr[j]]);
		}
	}
	return ans;
}

Tupler[1,2,3];

// This example yields a Big O of o(n^2) as you have two nested loops
// Usually indicative of how many loops there are in your algorithm

// No loops is constant time o(1) -- "constant time"
// o (log n ) -- recursion and recursive algorithms

// Multiple for loops but not within just adds coefficients, does nothing
//////////Recursion///////////
// Doing something in terms of itself
// Defining a function that calls itself


//Example of Recursion

//Fibonacci Sequence
// 1+1 = 2 ; 2+1 = 3; 3+ 2 = 5; 4 + 3 = 7

function fibonacci(n){
	if(n<=2) {
		return 1;
	} else {
		return fibonacci(n-1) + fibonacci(n-2);
	}
};


//under the hood for fibonacci(20), then you would add 1 to itself 6065 times or so
// Is tis feasible.... Maybe once, but not if for every user request

//Recursion factorial
//5! = 5*4*3*2*1

function factorial (n) {
	if(n===0 || n===1){
		return 1;
	} else {
		return n* factorial(n-1);
	}
}

factorial(5);//--> 120



/////Sorting Algorithms/////
//Bubble Sort//





