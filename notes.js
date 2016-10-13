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

//[5,7,6,4]
//[5,6,7,4]
//[5,6,4,7]
//[5,4,6,7]
//[4,5,6,7]


var bubbleSort = function(nums){
	var swapped;
	do {
		 swapped = false;
		for(var i =0;i<nums.length;i++){
			if(nums[i] > nums[i+1]){
				var temp = nums[i];
				nums[i] = nums[i+1];
				nums[i+1] = temp;
				swapped = true;
			}
		}
	} while(swapped);
}

bubbleSort([10,5,3,6,1,2]);


//Insertion Sort
// Very Usable -- > Arrays are almost sorted
// Falls apart if Array is not sorted at all
//[5,3,6]
//[5] -- > then evaluates 3  and 6
// will have O(n^2) as there are two nested loops


//Two loops i and j --> i points to the first index
//j is everything after i  and places each index
// inner loop only does part of the arrau at a time, not the all of it
// Big O cheatsheet .com --> Insertion and Bubble Sort

function insertionSort(nums){
	for(var i = 1;i<nums.length;i++){ // start at 1
		for(var j = 0; j<i;j++){ // only look at the first part of the array
			if(nums[i]<nums[j]){
				var spliced = nums.splice(i,1); // removes from teh array, destructive
				nums.splice(j,0, spliced[0]);// inserts at particular array spot
			}
		}
	}
}


var a = [4,1,6, 8 , 7, 3, 42];

insertionSort(a);
 
 console.log(a);

 //Call insertionSort much less than we would bubbleSort
 // insertionSort does not have to do nearly as much work


////Merge////
// The most common sort -> array.sort uses merge sort underneath the hood
//uses Recursion and is very consistent
// takes a bigger list and breaks it down into smaller lists
// the Big O is n log (n);



function mergeSort(nums){
	if(nums.length<2){ //if length of one it is already sorted
		return nums;
	}
	var length = nums.length;
	var middle = Math.floor(length/2); // will always round down and give smallest number
	var left = nums.slice(0,middle);
	var right = nums.slice(middle, length);
	// Left array and a right array that are split.


	return stitch(mergeSort(left), mergeSort(right));
}

// now right the stitch function

var stitch = function(left, right){
	var results = [];

	while(left.length && right.length){
		if(left[0]<= right[0]){
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}

	}
	while (left.length) {
		results.push(left.shift());
	}
	while(right.length){
		results.push(right.shift());
	}

	return results;
};


/////Median Values/////
// Reddit Interview Question
// Two sorted arrays, Get the median between the two arrays//

//[1,5,8,9]
//[2,3,7,10]
//[1,2,3,4,7,8,9,10];



///Quick Sort///
// Similar to mergeSort
//[5,7,4,9,6]
// Choose a Pivot --> choose the last number in the array
//[5,4] lower than six -- [7,9] greater than 6-- this continues to break down
//[4,5,6,7,9]; All hinges upon choosing a pivot point





