/**An array is a special variable, which can hold more than one value at a time. */

let arr:number[] =[4,5,6];

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

console.log("\n")

/**generic array */

let arrList:Array<number> = [9,8,6];

arrList.forEach(element => {
    console.log(element);
});

