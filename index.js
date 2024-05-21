//Write a function to find the sum of all elements in an array.

const array1=[6,8,11];
function sumArr(element)
{
    let sum = 0;
    for(let i=0;i<element.length;i++)
    {
        sum += element[i];
    }
    return sum;
}
console.log(sumArr(array1));







    
    

