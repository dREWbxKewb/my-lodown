'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Function takes in an input value and ruturns it unchanged.
 * 
 * @param {Value}: Function take in any input value.
 * @return {Value}: Function returns input unchanged
 */
 function identity(value){
    return value;
}

/**
 * typeOf: Function that will give us the data type in a string
 * 
 * @param {Value}: Function takes in a value
 * @return {typeof value}: Function returns the data type in a string
 */
function typeOf(value){ //Function takes in a value
    //Create a conditional that check if the value is an array
    if (Array.isArray(value) === true){
        //Return string array
        return "array";
    } else if (Array.isArray(value) !== true && value === null){ //This conditional checks if value is not an array and value is strickly equal to null
        //Return string null
        return "null";
    }
    //Default to the typeof of the value
  return typeof value;
}

/**
 * first: This function will give us the values of an array starting at the first index
 * 
 * @param {Array}: Function takes in an array
 * @param {Number}: Function takes in number
 * @return {Array.splice(0, Number)}: Returns the sliced array starting at the 0 index and ending at number
 */
 function first(array, number){ //Function that takes in an array and number
    //Create a conditional that checks if the array parameter isn't an array or if number is less than 0
    if (!Array.isArray(array) || number < 0){
        //return array literal as it's value
        return [];
    }
    //Create a new conditional that checks if number exist or if it is not a number
    if (isNaN(number)){
        //Return the first element in the array
        return array[0];
    }
    //Determine if the number is greater than the length of the array
    if(number > array.length){
        //Return the whole array
        return array;
    }
    //Return the array point with the slice method
    return array.slice(0, number);
}

/**
 * last: This function returns the last indexes in an array starting at number
 * 
 * @param {Array}: Function takes in an array
 * @param {Number}: Function takes in a number
 * @return {Array.slice(-number)}: Returns the spliced array starting at number and ending at last index
 */
 function last(array, number){ //Function takes in array and number as parameters
    //Determine if array is not an array or if number is negative
    if (!Array.isArray(array) || number < 0){
        //Return array literal
        return [];
    }
    //Determine if number is a number
    if (isNaN(number)){
        //Return the last element in array
        return array[array.length - 1];
    }
    //Determine if number is greater than array length
    if (number > array.length){
        return array;
    }
    //Return the last elements of the array using the slice method and subtracting the number parameter
    return array.slice(-number);

}

/**
 * indexOf: This function will give us the first instance of an array's value
 * 
 * @param {Array}: Function takes in an array
 * @param {value}: Function takes in a value
 * @return {Index or -1}: Will return either the index number or -1 if it doesn't exist
 */
 function indexOf(array, value){ //Function takes in array and value as parameters
    //Iterate through the array index
    for (var i = 0; i < array.length; i++){
        //Determine if the index of array is equal to value
        if (value === array[i]){
            //Return the array at index
            return i;
        }
    }
    //Return -1 by default
    return -1;
}

/**
 * contains: This function returns a true or false of whether a value is in an array
 * 
 * @param {Array}: Function takes in an array
 * @param {Value}: Function takes in a value
 * @return {True or False}: Returns true or false
 */
 function contains(array, value){ //Function takes in array and value
    //Return ternary operator that uses the includes method as the condition
    return array.includes(value) ? true: false;
    
}

/**
 * each: This function that calls an anonmyous function that takes in the
 * index of array, index number, and array if array
 * OR
 * key values of object, keys, and object if an object
 * 
 * @param {Collection}: Function takes in a collection
 * @param {Function}: Function takes in an anonymous function
 */
 function each(collection, func){
    //Create an conditional that checks if collection is an array
    if (Array.isArray(collection)){
        //Iterate through the collection using a for loop
        for (var i = 0; i < collection.length; i++){
            //Call the input func on each element
            func(collection[i], i, collection);
        }
    } else { //If collection is an object
        //Iterate through the collection using a for in loop
        for (var key in collection){
            //Call the input func for each property
            func(collection[key], key, collection);
        }
    }
}

/**
 * unique: This function uses the indexOf function created to
 * return a new array of elements from an array with duplicates removed
 * 
 * @param {Array}: Function takes in an array
 * @return {NewArray}: Returns the new array created that has no duplicate values
 */
 function unique(array){
    //Create an array variable that puts non duplicates
    var newArray = [];
    //Iterate through the array
    for (var i = 0; i < array.length; i++){
        //Create a conditional that checks if the indexOf function value is equal to the index
        if (_.indexOf(array, array[i]) === i){
            //Push the array index into the newArray array
            newArray.push(array[i]);
        }
    }
    //Return the newArray variable
    return newArray;
}

/**
 * filter: This function calls an anonymous function and 
 * returns a new array that is truthy
 * @param {Array}: Function takes in an array
 * @param {Function}: Function takes in a function that takes in element, index, and array of array
 * @return {NewArray}: Returns a new array that pushes the function call's truthy
 */
 function filter(array, func){ //Function that takes in array and func
    //Create an array
    var newArray = [];
    //Iterate through array
    for (let i = 0; i < array.length; i++){
        //Determine if the function is true
        if (func(array[i], i, array) === true){
            //Push array index into new array
            newArray.push(array[i]);
        }
    }
    //Return variable
    return newArray;
}

/**
 * reject: This function is the opposite of the filter array, we will be returning
 * an array that holds the falsey of the function call
 * @param {Array}: Function takes in an array
 * @param {Function}: Function takes in function that takes in element, index, and array of array
 * @return {NewArray}: Returns the falsey of the function call in an array
 */
 function reject(array, func){ //Function that takes in array and function
    //Create an array
    var newArray = [];
    //Iterate through array
    for (let i = 0; i < array.length; i++){
        //Determine if the function is true
        if (func(array[i], i, array) === false){
            //Push array index into new array
            newArray.push(array[i]);
        }
    }
    //Return variable
    return newArray;
}

/**
 * partition: This function will return two different arrays in an array
 * first array is the truthy array
 * second array is the falsey array
 * @param {Array}: Function takes in an array
 * @param {Function}: Function takes in a function that takes in element, index, array in array
 * @return {NewArray}: Returns the new array that has the pushed arrays of truthy and falsey
 */
function partition(array, func){ //Function that takes in array and function
    //Create 3 variables for array true and false
    var newArray = [];
    var trueA = [];
    var falseA = [];
    //Iterate through array
    for (var i = 0; i < array.length; i++){
        //Determine if function is true
        if (func(array[i], i , array) === true){
            //Push array index into true bin
            trueA.push(array[i]);
        } else { //If false
            //Push array index into false bin
            falseA.push(array[i]);
        }
    }
    newArray.push(trueA);
    newArray.push(falseA);
    return newArray;
}

/**
 * map: This function checks collection is either an array or object,
 * then calls a function and returns the saved function call in an array
 * 
 * @param {Collection}: Function takes in a collection
 * @param {Function}: Function takes in a function that takes in
 *                    Object: object key value, key, and object
 *                    Array: array index value, index, and array
 * @return {MapArray}: Returns the collection into the array
 */
 function map(collection, func){ //Function that takes in collection and function
    //Create an array
    var mapArray = [];
    //Determine if an array is an array
    if (Array.isArray(collection)){
        //Iterate collection
        for (var i = 0; i < collection.length; i++){
            //Push the function into the mapArray
            mapArray.push(func(collection[i], i, collection));
        }
    } else { //If not an array
        //Iterate object
        for (var key in collection){
            //Push function into array
            mapArray.push(func(collection[key], key, collection));
        }
    }
    //Return the mapArray
    return mapArray;
}

/**
 * pluck: This function is a user of the map function.
 * Will return all the property values in the array of objects
 * @param {Array}: Function takes in array
 * @return {Object property value}: Returns the map function returning the object's property value
 */
 _.pluck = function(array, property){
    //Return the map function that calls the object and returns the object property
    return array.map(function(obj){return obj[property]});
}

/**
 * every: This function calls a function for the object or array
 * Will return true if the function is truthy or false if function is falsey
 * @param {Collection}: Function will take in collection
 * @return {True or False}: Returns true or false
 */
function every(collection, func){ //Function that takes in collection and function
    //Determine if a func is not provided
    if (func === undefined){
        //Determine if collection is an array
        if (Array.isArray(collection)){
            //Iterate through array
            for (let i = 0; i < collection.length; i++){
                //Determine if collection at index is a falsey dataype
                if(!collection[i]){
                    //Return false
                    return false;
                } 
            }
        } else { //Else if the collection is a function
            //Iterate through the object
            for (let key in collection){
                //Determine if collection key is a falsy datatype
                if (!collection[key]){
                    //Return false
                    return false;
                }
            }
        }
    } else { //Else func was provided
        //Determine if collection is an array
        if (Array.isArray(collection)){
            //Iterate through the collection
            for (let i = 0; i < collection.length; i++){
                //Determine if the function is equal to false
                if (func(collection[i], i, collection) === false){
                    //Return false
                    return false;
                }
            }
        } else { //If not an array
            //Iterate for an object
            for (let key in collection){
                //Determine if the function is false
                if (func(collection[key], key, collection) === false){
                    //Return false;
                    return false;
                }
            }
        }
    }
    //Return true by default
    return true;
}

/**
 * some: Similarly written to every, this function does the opposite
 * Will call function and determine if 1 or more arguments are true, else it will be false
 * Return true if function doesn't exist
 * @param {Collection}: Function takes in a collection
 * @param {Function}: Function takes in a function that takes elements for object or array
 * return {False or True}: Returns false by default, but true if any conditions are met
 */
 _.some = function(collection, func){
    //Determine if a func is not provided
    if (func === undefined){
        //Determine if collection is an array
        if (Array.isArray(collection)){
            //Iterate through array
            for (let i = 0; i < collection.length; i++){
                //Determine if collection at index is a falsey dataype
                if(!collection[i]){
                    //Return false
                    return false;
                } 
            }
        } else { //Else if the collection is a function
            //Iterate through the object
            for (let key in collection){
                //Determine if collection key is a falsy datatype
                if (!collection[key]){
                    //Return false
                    return false;
                }
            }
        }
        //Return true
        return true;
    } else { //Else func was provided
        //Determine if collection is an array
        if (Array.isArray(collection)){
            //Iterate through the collection
            for (let i = 0; i < collection.length; i++){
                //Determine if the function is equal to true
                if (func(collection[i], i, collection) === true){
                    //Return true
                    return true;
                }
            }
        } else { //If not an array
            //Iterate for an object
            for (let key in collection){
                //Determine if the function is true
                if (func(collection[key], key, collection) === true){
                    //Return true;
                    return true;
                }
            }
        }
    }
    //Return true by default
    return false;
}

/**
 * reduce: This function will continue to reassign it's seed by adding the it to the current index value
 * Will return the final result
 * @param {Array}: Function takes in array
 * @param {Function}: Function takes in a function that takes in the seed, index value, index, and array
 * @param {Seed}: Function CAN take in this seed value, but doesn't need too
 * @return {Result}: Returns the final result
 */
 function reduce(array, func, seed){ //Function that takes in array, function and seed
    //Create a result variable
    let result;
    //Determine if a seed doesn't have value
    if (seed === undefined){
        //Assign result with the first item in array
        result = array[0];
        //Iterate through array starting at 1 index
        for (let i = 1; i < array.length; i++){
            //Reassign result to the result of invoking the function
            result = func(result, array[i], i, array);
        }

    } else { //If seed has value
        //Assign result to value
        result = seed;
        //Iterate through array
        for (let i = 0; i < array.length; i++){
            //Reassign result to the result of invoking the function
            result = func(result, array[i], i, array);
        }
    }
    //Return result
    return result;
}

/**
 * extend: This function copies an object into another object
 * Will return the object that took in the copies
 * 
 * @param {Object1}: Function takes in an object
 * @param {Object2}: Function takes in another object
 * @param {...Object}: This is the interesting one, so this resting operator represents more object that can be added as parameters
 * @return {Return}: Returns Object1 which has been changed
 */
 function extend(object1, object2, ...object){//Function takes in an object, another object, and should be able to take in as many objects as possible
    //Assign object 1 to object2 and the rest param
    Object.assign(object1, object2, ...object);
    //Return the new object1
    return object1;
}