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
if(index>=arr.length ){
    //console.log(arr  ," ", sum)
    return 
}
for (let i = 0 ; i< arr.length ; i ++){
    for (let j = index  ;j< arr.length; j ++){
        if(i!=j)
        { 
            if(sum==0)
                helper(arr,index+1 , sum+=(arr[i]+arr[j]))
            else 
                helper(arr,index+1 , sum+=arr[j])
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