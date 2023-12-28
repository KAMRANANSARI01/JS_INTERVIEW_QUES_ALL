//Q-1 find the duplicate array from the given array

// const duplicateArray = ( arr)=>{
//     const duplicate = arr.filter((ele , index , array)=>array.indexOf(ele)!==index)
//     return duplicate;
// }

// console.log(duplicateArray([2,3,4,2,4,5,6,7,6,8,9]))

// second method

const duplicateArrayfind = (arr)=>{
    const uniqueArray = new Set();
    const duplicateArray = new Set()
    for(let ele of arr){
        if(uniqueArray.has(ele)){
            duplicateArray.add(ele)
        }else{
            uniqueArray.add(ele)
        }
    }
    return Array.from(duplicateArray)//array.from is used to change set into array
}
// console.log(duplicateArrayfind([2,3,4,2,4,5,6,7,6,8,9]))


// here we are discribing some general predefind method of array and object

// itrate the key and values of the object.
let object = {
    name : "kamran",
    add : "abc",
    age : 19,
    number : 23345464343
}

// if you want to convert whole objct into array 

const arrayofobject = Object.entries(object)
console.log(arrayofobject)

//if you want to take only keys of this object and put it on an array

    let keys =  Object.keys(object)

console.log(keys)

// if you want to fetch only values from object then

let objectValues = Object.values(object)
console.log(objectValues)

//if you want to get any particular keys from the object then

let uniqueKeys = Object.keys(object).filter((key)=>key==="name")
console.log(uniqueKeys)

//if you want to get any particular value from the object then

let uniqueValues = Object.values(object).filter((value)=>value==="kamran")
console.log(uniqueValues)

//Q-2 find the max and min num in given array

const findMaxMin = (arr)=>{
    let sortedArray = arr.sort((a,b)=>a-b)
    let maxNum = sortedArray.pop()
    let minNum = sortedArray[0]
    console.log(`Maximum number is ${maxNum}`)
    console.log(`Minimum number is ${minNum}`)
}

let array = [2,33,44,55,66,77,43,73,99,45]

findMaxMin(array)

//Q-3 find the missing num of array

let arrays = [2,3,4,6,8,9]

const missingNum = (arr)=>{
    let setArr= new Set(arr)
    let  missNum = []
    for(let i=0; i<=arr.length; i++){
        if(!setArr.has(i)){
           missNum.push(i)
        }
    }
    return missNum;
}
console.log(missingNum(arrays))

//Q-4 find the factorial of a num

let factorial = (num)=>{
    let fact = 1
    for(let i=1; i<=num; i++){
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(3))

//Q-5 find the number of vowels in given string

let vowelsNum = (str)=>{
    let count =0;
    let vowels = ['a','e','i','o','u']
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}

console.log(vowelsNum('janiu'))

//Q-6 if you want to iterate the vowels in given string

let vowels = (string)=>{
    let vowels = ['a','e','i','o','u']
    let vowelsArr = []
    stringArray = string.split('')
    for(let char of stringArray){
      if(vowels.includes(char)){
         vowelsArr.push(char)
      }
    }
    let vowelonly = new Set(vowelsArr)
    return Array.from(vowelonly)
}

console.log(vowels('kamran'))

//Q-7 merge to array and sort them

let arr1 = [2,3,45,6,7,8,77]
let arr2 = [21,31,451,16,71,83,377]

let mergedarray = [...arr1,...arr2]
console.log(mergedarray)//merged array

//now sorting two array

let sortedArray = mergedarray.sort((a,b)=>a-b)
console.log(sortedArray)

//Q-8 checking two arrays are similar or not

const isSimilarArray = (arr1, arr2)=>{
    return arr1.length === arr2.length && arr1.every((value ,index)=> value == arr2[index])
}

let array1 = [3,2,4,5,76]
let array2 = [3,4,2,5,76]

console.log(isSimilarArray(array1,array2))