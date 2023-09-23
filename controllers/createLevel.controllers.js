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
let  k = 0  
const MakeSureTheSequenceTrue = (str)=>{
    let Done = false 
for (let i = 1 ; i< str.length ; i +=2){
    if(Done==true && str[i]=="*")
    return false 
    if(str[i]=="+")
        Done=true

}
return true 
}
let mark = [false , false , false , false ]
const helper = (arr,  index,sum,s)=>{
if(index>=arr.length ){
    if(sum==24 && MakeSureTheSequenceTrue(s)){

        console.log("Yuy" , sum , " ", s)
        console.log(++k)
    }
    return 
}
for (let i = 0 ; i< arr.length ; i ++){
    if(!mark[i]){
        mark[i] = true 
        s.length== 0 ? s+=`${arr[i]}`  : s+=`*${arr[i]}`
        helper(arr , index+1 , sum*=arr[i],s)
        s= s.substr(0,s.length-1)

        s= s.substr(0,s.length-1)
        sum/=arr[i]
        s.length== 0 ? s+=`${arr[i]}`  : s+=`-${arr[i]}`

        helper(arr , index+1 , sum-=arr[i],s)
        s= s.substr(0,s.length-1)
        s= s.substr(0,s.length-1)

        sum+=arr[i]
        s.length== 0 ? s+=`${arr[i]}`  : s+=`+${arr[i]}`

        helper(arr , index+1 , sum+=arr[i],s)
        s= s.substr(0,s.length-1)
        s= s.substr(0,s.length-1)

        sum-=arr[i]
        mark[i]=false 


    }


} 





}
const CreateAllPossibleCombination =(req,res)=>{
const Arr = req.body.arr ; 
let arr = JSON.parse(Arr)
helper(arr, 0 ,0,"") 
res.send("T")



}

module.exports={
    CreateAllArrays,
    CreateAllPossibleCombination

}