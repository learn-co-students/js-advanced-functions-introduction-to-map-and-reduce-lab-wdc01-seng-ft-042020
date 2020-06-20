// Your code here
function mapToNegativize(sourceArray) {
    let newArray = []
    for(let i=0; i<sourceArray.length; i++){
        newArray.push(sourceArray[i]*-1)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for(let i=0; i<sourceArray.length; i++){
    newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for(let i=0; i<sourceArray.length; i++){
        newArray.push(sourceArray[i]*2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    for(let i=0; i<sourceArray.length; i++){
        newArray.push(sourceArray[i]*sourceArray[i])
    }
    return newArray
}

function reduceToTotal(srcArr, start=0) {
    let total = start
    for(let i = 0; i < srcArr.length; i++){
        total = total + srcArr[i]
    }
    return total
}


function reduceToAllTrue(srcArr) {
    for(let i = 0; i < srcArr.length; i++){
        if(!srcArr[i]){
            return false
        } 
    }
    return true
}
    


function reduceToAnyTrue(srcArr) {
    for(let i = 0; i < srcArr.length; i++){
        if(srcArr[i]){
            return true
      
        }
    }
    return false
}



