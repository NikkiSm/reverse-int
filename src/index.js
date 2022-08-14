module.exports = function reverse (n) {
    //let numberString = n.toString();
   
    
    /*if (numberString[0] == '-')
    {return numberString[3]+numberString[2]+numberString[1]}
    if (numberString[2] == 0)
    {return numberString[1]+numberString[0]}
     else 
    {return numberString[2]+numberString[1]+numberString[0]}*/
  
    const num = Math.abs(n);
    const reverseNum=Number(num.toString().split('').reverse().join(''));
    return reverseNum
}
