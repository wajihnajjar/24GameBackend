const { error } = require("console");
const db= require("../database/index")
const fs = require('fs');

const CreateAllArrays =  (a,b,c,d,a0 , b0 , c0 ,d0)=>{
    
    let  arr = []
    let tempArray = [-1 , -1  , -1 , -1]
    for(let i = a0 ; i<a; i ++){
        tempArray[0] = i
        for (let j = b0  ;j< b ; j ++){
            tempArray[1] = j
            for (let k = c0 ; k< c ; k ++){
                tempArray[2] = k 
                for (r = d0 ; r < d ; r++){
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
//1+10*2+4
let mark = [false , false , false , false ]
const helper = async  (arr,  index,sum,s,find)=>{
  
    if(find[0]){
        return

    } 
if(index>=arr.length ){
    if(arr[0]==1 && arr[1]==2 && arr[2]==3 && arr[3]==4){
        console.log("efssssfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
    }

    if(sum==24 && MakeSureTheSequenceTrue(s) && !find[0]){
        find[0]=true
        console.log("Yuy" , sum , " ", s , " ", arr)
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
        helper(arr , index+1 , sum*=arr[i],s,find)
      
        s= s.substr(0,s.length-1)
        s= s.substr(0,s.length-1)
        if(arr[i]>=10)
        s= s.substr(0,s.length-1)
        sum/=arr[i]
        if(sum==24){

            find[0]=true

            break
        }
        s.length== 0 ? s+=`${arr[i]}`  : s+=`-${arr[i]}`

        helper(arr , index+1 , sum-=arr[i],s,find)
        s= s.substr(0,s.length-1)
        s= s.substr(0,s.length-1)
        if(arr[i]>=10)

        s= s.substr(0,s.length-1)

        sum+=arr[i]
        if(sum==24){
            find[0]=true

            break
        }
        s.length== 0 ? s+=`${arr[i]}`  : s+=`+${arr[i]}`

        helper(arr , index+1 , sum+=arr[i],s,find)
        s= s.substr(0,s.length-1)
        s= s.substr(0,s.length-1)
        if(arr[i]>=10)

        s= s.substr(0,s.length-1)

        sum-=arr[i]
        if(sum==24){
            find[0]=true

            break
        }        if( arr[i]!=0 && sum!=0 &&sum%arr[i]==0){
        s.length== 0 ? s+=`${arr[i]}`  : s+=`/${arr[i]}`
        helper(arr , index+1 , sum/=arr[i],s,find)
        s= s.substr(0,s.length-1)
        s= s.substr(0,s.length-1)
        if(arr[i]>=10)

        s= s.substr(0,s.length-1)

        sum*=arr[i]
        if(sum==24){
            find[0]=true

            break
        }        }


        mark[i]=false 


    }


} 





}
//Must check For Unique Combination while Creating The Array 
const CreateAllPossibleCombination =(req,res)=>{
const Arr = req.body.arr ; 
let arr = JSON.parse(Arr)
let s = new Set()
let Elem = CreateAllArrays(10,10,10,10,0,0,0,0)
console.log(Elem[Elem.length-1])
for (let i = 0 ; i< Elem.length; i ++){
    let k = Elem[i].split(",") 
    let y = [...k]
    if(s.has(y.sort().join(","))==false){
    for (let j = 0 ; j< k.length; j ++){
        k[j]= parseInt(k[j])   
    }
    let x = [false]
    for (let f = 0 ; f < mark.length ;f++){
        mark[f]=false
    }
    helper(k,0,0,"",x)
    s.add(y.sort().join(","))
}
}


res.send("Done")



}

module.exports={
    CreateAllArrays,
    CreateAllPossibleCombination

}