// find the duplicate array from the given array

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