
function saturdayFun(act = "roller-skate") {
   return `This Saturday, I want to ${act}!`
}


function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(wrapper = "*"){
    const innerFunction = function(work = "special") {
        return `You are ${wrapper}${work}${wrapper}!`;
    } 
    return innerFunction 

}



