const db= require("../database/index")

const CreateAllArrays = (req,res)=>{
    let  arr = []
    let tempArray = [-1 , -1  , -1 , -1]
    for(let i = 0 ; i<10 ; i ++){
        tempArray[0] = i
        for (let j = 0  ;j< 10 ; j ++){
            tempArray[1] = j
            for (let k = 0 ; k< 10 ; k ++){
                tempArray[2] = k 
                for (r = 0 ; r < 10 ; r++){
                    tempArray[3] = r 
                    arr.push(tempArray)
                }
            }
        }
    }
    res.send(arr)

}
module.exports={
    CreateAllArrays

}