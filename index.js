// Your code here
function mapToNegativize(ary) {
    return ary.map( n => -n)
}

function mapToNoChange(ary) {
    return ary
}
function mapToDouble(ary) {
    return ary.map( n => 2 * n )
}

function mapToSquare(ary) {
    return ary.map( n => n ** 2 )
}

function reduceToTotal(ary, startingPoint) {
    let memo = 0
    ary.forEach(n => {memo += n})
    if (startingPoint) {
        return memo + startingPoint
    }
    else
        {return memo}
}

function reduceToAllTrue(ary) {
    let memo = true
    ary.forEach( b => {memo = (memo && !!b)})
    return memo
}

function reduceToAnyTrue(ary) {
    let memo = false
    ary.forEach(b => {memo = (memo || !!b)})
    return memo
}
