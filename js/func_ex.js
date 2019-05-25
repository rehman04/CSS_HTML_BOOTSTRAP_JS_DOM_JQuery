function sleepIn(weekday,vacation){
  if (weekday && !vacation){
    return false
  }
  else if (!weekday && vacation) {
    return true
  }
  else {
    return true
  }
}

function stringTimes(a,b){
// for(c=b;c>0;c--){a+=a}
  // while(b > 0){
  //   a=a+a
  //   b++
  // }
  return a.repeat(b)
  // if (a.length > b){return a + " is larger"}
  // else {return b + " is larger"}
}

function luckySum(a,b,c){
  if(a===13){return 0}
  else if (b===13) {return a}
  else if (c===13) {return a+b}
  else{return a+b+c}
}

function caught_speeding(speed,birthday){
if(speed<=60){return 0}
else if(speed>60 && speed<81) {if(speed>60 && speed<66 && birthday==true){return 0}
else {return 1}}
else if(speed>80) {if(speed>80 && speed<86 && birthday==true){return 1}else {return 2}}
}

function makeBricks(small,big,goal){
// one solution performed
// small=small*1
// bigg=big*5
// sum1=small+bigg
// sum2=small+(big/big)*5
// if(sum1===goal || sum2===goal){return true}
// else if (bigg===goal) {return true}
// else if (small===goal) {return true}
// else{return false}
sum1=(small*1) + (big*5)
if(goal%2 == 0 && sum1%2!=0){return true}
else if(goal%2 != 0 && sum1%2==0){return true}
else if(goal%2 == 0 && sum1%2==0){return true}
else {return false}
}
