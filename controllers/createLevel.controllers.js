const db= require("../database/index")
const fs = require('fs');

const CreateAllArrays =async  (req,res)=>{
    let  arr = []
    let tempArray = [-1 , -1  , -1 , -1]
    for(let i = 0 ; i<10; i ++){
        tempArray[0] = i
        for (let j = 0  ;j< 10 ; j ++){
            tempArray[1] = j
            for (let k = 0 ; k< 10 ; k ++){
                tempArray[2] = k 
                for (r = 0 ; r < 10 ; r++){
                    tempArray[3] = r 
                    arr.push(tempArray.join())
                }

            }
        }
    }
    res.send(arr)

}

//  1 2 3 4 
// 
const helper = (arr,  index,sum)=>{
if(arr.length==1 ){
    //console.log(arr  ," ", sum)
    return 
}
for (let i = 0 ; i< arr.length ; i ++){
    for (let j = 0  ;j< arr.length; j ++){
        if(i!=j)
        { 
        let x = arr[i] 
        let y = arr[j]  
        arr.splice(i,1)
        arr.splice(j-1,1)
        arr.push(x+y)
        helper(arr,index,sum)
        console.log("before Popping "  , arr)
        arr.pop() ; 
        arr.splice(i,0,x)
        arr.splice(j,0,y)
        console.log(arr, " ", i , " ", j)
        }
    }
} 





}
const CreateAllPossibleCombination =(req,res)=>{
const Arr = req.body.arr ; 
let arr = JSON.parse(Arr)
helper(arr, 0 ,0) 
res.send("T")



}

module.exports={
    CreateAllArrays,
    CreateAllPossibleCombination

}