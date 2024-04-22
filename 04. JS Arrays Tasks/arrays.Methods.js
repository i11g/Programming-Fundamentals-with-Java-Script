//Pop ()
//Removes the last element of an array and returns that element. Change the length of an array
let nums=[1,2,3,4,8];
console.log(nums.length);
console.log(nums.pop());
console.log(nums.length);
console.log(nums);
//Push ()
//Adds one or more elements to the end of an array and returns the new length of the array
let nums1=[1,2,3,4,8];
console.log(nums1.length);
console.log(nums1.push(10));
console.log(nums1)
//Shift ()
//Shift method() removes the first element from and array and retruns that removed element
//Changes the length of an array
let nums3=[10,30,50,100]
console.log(nums3.shift());
console.log(nums3)
//Unshift ()
//Adds one or more elements to the beginning of an array and returns the new lenght of an array
let nums4=[10,30,50,100]
console.log(nums4.unshift(50));
console.log(nums4)
console.log(nums4.unshift(200,300));
console.log(nums4) 
//Splice () 
//Changes the contents of an array by removing or replacing existing elements and/or adding new elements
let nums5 =[1,2,3,4,5];
//insert at index 1
nums5.splice(1,0,10);
console.log(nums5);
//replaces 1 element at index 4
nums5.splice(4,1,19);
console.log(nums5);
//removes 1 element at index 2
let newnums=nums5.splice(2,1);
console.log(nums5);
console.log(newnums);
//Reverse () 
//Reverse the array - the first element becomes last and the last element becomes first
let array=[100,200,300];
let reverseArray=array.reverse();
console.log(reverseArray);

  