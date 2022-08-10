// Code your solutions in this file
function writeCards(array,eventName)
{
    let newArray = [];
    for (let i=0;i<array.length;i++)
    {
        newArray[i]=`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`
    
    }
    
    return newArray;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(e) {
    if (e>0)
    {
        while (e>=0)
        {
            console.log(e)
            e=e-1;
        }
    }
}
