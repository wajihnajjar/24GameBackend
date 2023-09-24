const { error } = require("console");
const db= require("../database/index")
const fs = require('fs');

const CreateAllArrays =  (a,b,c,d)=>{
    
    let  arr = []
    let tempArray = [-1 , -1  , -1 , -1]
    for(let i = 0 ; i<a; i ++){
        tempArray[0] = i
        for (let j = 0  ;j< b ; j ++){
            tempArray[1] = j
            for (let k = 0 ; k< c ; k ++){
                tempArray[2] = k 
                for (r = 0 ; r < d ; r++){
                    tempArray[3] = r 
                    arr.push(tempArray.join())
                }

            }
        }
    }
    return (arr)

}
//Divison Added
let  k = 0  
const MakeSureTheSequenceTrue = (str)=>{
    let Done = false 
for (let i = 1 ; i< str.length ; i +=2){
    if(Done==true && (str[i]=="*" ||str[i]=="/"))
    return false 
    if(str[i]=="+")
        Done=true

}
return true 
}
let mark = [false , false , false , false ]
const helper = async  (arr,  index,sum,s)=>{
if(index>=arr.length ){
    if(sum==24 && MakeSureTheSequenceTrue(s)){

        console.log("Yuy" , sum , " ", s)
     db.query(`INSERT INTO levels (content) values ('${(JSON.stringify(s))}') `,(err , res)=>{
        if(err)
            console.log(err)
        else 
            console.log(res)
     })
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
        if(sum==24)
        break
        s.length== 0 ? s+=`${arr[i]}`  : s+=`-${arr[i]}`

        helper(arr , index+1 , sum-=arr[i],s)
        s= s.substr(0,s.length-1)
        s= s.substr(0,s.length-1)

        sum+=arr[i]
        if(sum==24)
        break
        s.length== 0 ? s+=`${arr[i]}`  : s+=`+${arr[i]}`

        helper(arr , index+1 , sum+=arr[i],s)
        s= s.substr(0,s.length-1)
        s= s.substr(0,s.length-1)

        sum-=arr[i]
        if(sum==24)
        break
        if( arr[i]!=0 && sum!=0 &&sum%arr[i]==0){
        s.length== 0 ? s+=`${arr[i]}`  : s+=`/${arr[i]}`
        helper(arr , index+1 , sum/=arr[i],s)
        s= s.substr(0,s.length-1)
        s= s.substr(0,s.length-1)
        sum*=arr[i]
        if(sum==24)
        break
        }


        mark[i]=false 


    }


} 





}
//Must check For Unique Combination while Creating The Array 
const CreateAllPossibleCombination =(req,res)=>{
const Arr = req.body.arr ; 
let arr = JSON.parse(Arr)
let s = new Set()
let Elem = CreateAllArrays(5,5,5,5)
for (let i = 0 ; i< Elem.length; i ++){
    let k = Elem[i].split(",")
    if(s.has(k.toSorted().join(","))==false){
    for (let j = 0 ; j< k.length; j ++){
        k[j]= parseInt(k[j])   
    }
    helper(k,0,0,"")
    s.add(k.toSorted().join(","))
}
}


res.send("Done")



}

module.exports={
    CreateAllArrays,
    CreateAllPossibleCombination

}