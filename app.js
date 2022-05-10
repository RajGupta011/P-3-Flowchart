const level0selectBtn = () => {
    document.querySelector(".level-0-selectOpt").style.display = 'flex'
}

const level0selectOp1 = () => {
    document.querySelector('.level-1opt1').style.display = 'flex'
    document.querySelector('.level-1opt2').style.display = 'none'

    document.querySelector(".level-0-selectOpt").style.display = 'none'

    
}

const level0selectOp2 = () => {
    document.querySelector('.level-1opt2').style.display = 'flex'
    document.querySelector('.level-1opt1').style.display = 'none'

    document.querySelector(".level-0-selectOpt").style.display = 'none'
    
}
const deletelevel1opt1 = () => {
    document.querySelector('.level-1opt1').style.display = 'none'
    document.querySelector('.rightmost').style.display = 'none'
document.querySelector('.level-2opt6').style.display = 'none'
document.querySelector('.leftmost').style.display = 'none'
document.querySelector('.level-2opt5').style.display = 'none'
document.querySelector('.level-2opt1').style.display = 'none'
document.querySelector('.level-2opt3').style.display = 'none'
document.querySelector('.level-3opt8').style.display = 'none'
document.querySelector('.level-3opt7').style.display = 'none'
document.querySelector('.level-3opt6').style.display = 'none'
document.querySelector('.level-3opt4').style.display = 'none'
document.querySelector('.level-3opt2').style.display = 'none'
document.querySelector('.level-3opt3').style.display = 'none'
document.querySelector('.level-3opt1').style.display = 'none'

} 

const deletelevel1opt2 = () => {
    document.querySelector('.level-1opt2').style.display = 'none'
    document.querySelector('.rightmost').style.display = 'none'
    document.querySelector('.level-2opt6').style.display = 'none'
    document.querySelector('.leftmost').style.display = 'none'
    document.querySelector('.level-2opt5').style.display = 'none'
    document.querySelector('.level-2opt1').style.display = 'none'
    document.querySelector('.level-2opt3').style.display = 'none'
    document.querySelector('.level-3opt8').style.display = 'none'
    document.querySelector('.level-3opt7').style.display = 'none'
    document.querySelector('.level-3opt6').style.display = 'none'
    document.querySelector('.level-3opt4').style.display = 'none'
    document.querySelector('.level-3opt2').style.display = 'none'
    document.querySelector('.level-3opt3').style.display = 'none'
    document.querySelector('.level-3opt1').style.display = 'none'
    
} 




//          LEVEL 1



// center block
const levelselectBtn1 = () => {
    document.querySelector('.level-1selectOpt').style.display = "flex"
}

const level1selectOp1 = () => {
    document.querySelector('.level-2opt1').style.display = 'flex'
    document.querySelector('.level-2opt3').style.display = 'none'
    // document.querySelector('.level-2opt6').style.marginTop = '10vh'

    document.querySelector(".level-1selectOpt").style.display = 'none'
}

const level1selectOp2 = () => {
    document.querySelector('.level-2opt3').style.display = 'flex'
    document.querySelector('.level-2opt1').style.display = 'none'

    document.querySelector(".level-1selectOpt").style.display = 'none'

}

const deletelevel2opt1 = () => {
    document.querySelector('.level-2opt3').style.display = 'none'
    document.querySelector('.level-3opt8').style.display = 'none'
    document.querySelector('.level-3opt7').style.display = 'none'
    document.querySelector('.level-3opt6').style.display = 'none'
    document.querySelector('.level-3opt4').style.display = 'none'
    document.querySelector('.level-3opt2').style.display = 'none'
    document.querySelector('.level-3opt3').style.display = 'none'
    document.querySelector('.level-3opt1').style.display = 'none'

}

const deletelevel2opt2 = () => {
    document.querySelector('.level-2opt3').style.display = 'none'
    document.querySelector('.level-3opt8').style.display = 'none'
    document.querySelector('.level-3opt7').style.display = 'none'
    document.querySelector('.level-3opt6').style.display = 'none'
    document.querySelector('.level-3opt4').style.display = 'none'
    document.querySelector('.level-3opt2').style.display = 'none'
    document.querySelector('.level-3opt3').style.display = 'none'
    document.querySelector('.level-3opt1').style.display = 'none'

}
const deletelevel2opt3 = () => {
    document.querySelector('.level-2opt1').style.display = 'none'
    document.querySelector('.level-3opt8').style.display = 'none'
    document.querySelector('.level-3opt7').style.display = 'none'
    document.querySelector('.level-3opt6').style.display = 'none'
    document.querySelector('.level-3opt4').style.display = 'none'
    document.querySelector('.level-3opt2').style.display = 'none'
    document.querySelector('.level-3opt3').style.display = 'none'
    document.querySelector('.level-3opt1').style.display = 'none'

}

// left block

const level1selectBtn2 = () => {
    document.querySelector('.level-1selector2Opt').style.display = 'flex'
}

const level1selectOp3 = () => {
    document.querySelector('.level-2opt5').style.display = 'flex'
    document.querySelector('.level-2opt6').style.marginTop = '-19.4vh'
    document.querySelector('.leftmost').style.display = 'none'
    document.querySelector('.level-1selector2Opt').style.display = 'none'

}




const level1selectOp4 = () => {
    document.querySelector('.leftmost').style.display = 'flex'
    document.querySelector('.level-2opt6').style.marginTop = '0vh'

    document.querySelector('.level-2opt5').style.display = 'none'

    document.querySelector('.level-1selector2Opt').style.display = 'none'

}

const level2deleteopt2 = () => {
    document.querySelector('.level-2opt5').style.display = 'none'
    document.querySelector('.level-2opt6').style.marginTop = '0vh'
    // document.querySelector('.level-3opt8').style.display = 'none'
    // document.querySelector('.level-3opt7').style.display = 'none'
    document.querySelector('.level-3opt6').style.display = 'none'
    document.querySelector('.level-3opt4').style.display = 'none'
    document.querySelector('.level-3opt2').style.display = 'none'
    document.querySelector('.level-3opt3').style.display = 'none'
    // document.querySelector('.level-3opt1').style.display = 'none'

}

const level2deleteopt1 = () => {
    document.querySelector('.leftmost').style.display = 'none'
    // document.querySelector('.level-3opt8').style.display = 'none'
    // document.querySelector('.level-3opt7').style.display = 'none'
    document.querySelector('.level-3opt6').style.display = 'none'
    document.querySelector('.level-3opt4').style.display = 'none'
    document.querySelector('.level-3opt2').style.display = 'none'
    document.querySelector('.level-3opt3').style.display = 'none'
    // document.querySelector('.level-3opt1').style.display = 'none'
}

//        RIGHT

const level1selectBtn5 = () => {
    document.querySelector('.level-1selector3Opt').style.display = 'flex'
}

const level1selectrightOp1 = () => {
    document.querySelector('.level-2opt6').style.display = 'flex'
    document.querySelector('.rightmost').style.display = 'none'
    
    document.querySelector('.level-1selector3Opt').style.display = 'none'
}

const level1selectrightOp2 = () => {
    document.querySelector('.rightmost').style.display = 'flex'
    document.querySelector('.level-2opt6').style.display = 'none'
    
    document.querySelector('.level-1selector3Opt').style.display = 'none'
}

const deletelevel2opt4 = () => {
    document.querySelector('.level-2opt6').style.display = 'none'
    document.querySelector('.level-3opt8').style.display = 'none'
    document.querySelector('.level-3opt7').style.display = 'none'
    document.querySelector('.level-3opt6').style.display = 'none'
    // document.querySelector('.level-3opt4').style.display = 'none'
    // document.querySelector('.level-3opt2').style.display = 'none'
    // document.querySelector('.level-3opt3').style.display = 'none'
    // document.querySelector('.level-3opt1').style.display = 'none'
}

const deletelevel2opt5 = () => {
    document.querySelector('.rightmost').style.display = 'none'
    document.querySelector('.level-3opt8').style.display = 'none'
    document.querySelector('.level-3opt7').style.display = 'none'
    document.querySelector('.level-3opt6').style.display = 'none'
    // document.querySelector('.level-3opt4').style.display = 'none'
    // document.querySelector('.level-3opt2').style.display = 'none'
    // document.querySelector('.level-3opt3').style.display = 'none'
    // document.querySelector('.level-3opt1').style.display = 'none'
}


// document.querySelector('.rightmost').style.display = 'none'
// document.querySelector('.level-2opt6').style.display = 'none'
// document.querySelector('.leftmost').style.display = 'none'
// document.querySelector('.level-2opt5').style.display = 'none'
// document.querySelector('.level-2opt1').style.display = 'none'
// document.querySelector('.level-2opt3').style.display = 'none'
// document.querySelector('.level-3opt8').style.display = 'none'R
// document.querySelector('.level-3opt7').style.display = 'none'R
// document.querySelector('.level-3opt6').style.display = 'none'
// document.querySelector('.level-3opt4').style.display = 'none'L
// document.querySelector('.level-3opt2').style.display = 'none'L
// document.querySelector('.level-3opt3').style.display = 'none'L
// document.querySelector('.level-3opt1').style.display = 'none'M






//     LEVEL 3

const selectendopt1 = () => { 

    document.querySelector('.level-3opt1').style.display = 'flex'
    
}

const level3DeleteOpt1 = () => {
    
    document.querySelector('.level-3opt1').style.display = 'none'
}

const selectendopt2 = () => {
    
    document.querySelector('.level-3opt3').style.display = 'flex'
    
}

const level3DeleteOpt2 = () => {
    
    document.querySelector('.level-3opt3').style.display = 'none'
    
}

const selectendopt3 = () => {
    
    document.querySelector('.level-3opt2').style.display = 'flex'
    document.querySelector('.level-3opt3').style.marginTop = '-16.4vh'
    
}

const level3DeleteOpt3 = () => {
    
    document.querySelector('.level-3opt2').style.display = 'none'
    document.querySelector('.level-3opt3').style.marginTop = '0vh'
}

const selectendopt4 = () => {
    
    document.querySelector('.level-3opt4').style.display = 'flex'
    document.querySelector('.level-3opt8').style.marginTop = '0vh'

    
}

const level3DeleteOpt4 = () => {
    document.querySelector('.level-3opt4').style.display = 'none'


}

const selectendopt5 = () => {
    
    document.querySelector('.level-3opt2').style.display = 'flex'
    // document.querySelector('.level-3opt6').style.marginTop = '-16.4vh'
    
}
const selectendopt6 = () => {
    
    document.querySelector('.level-3opt6').style.display = 'flex'
    
}

const level3DeleteOpt6 = () => {
    
    document.querySelector('.level-3opt6').style.display = 'none'
    
}
const selectendopt7 = () => {
    
    document.querySelector('.level-3opt7').style.display = 'flex'
    
}

const level3DeleteOpt7 = () => {
    
    document.querySelector('.level-3opt7').style.display = 'none'

}


const selectendopt8 = () => {
    
    document.querySelector('.level-3opt8').style.display = 'flex'
    
}

const level3DeleteOpt8 = () => {

    document.querySelector('.level-3opt8').style.display = 'none'

} 
// const selectendopt9 = () => {
    
//     document.querySelector('.level-3opt2').style.display = 'flex'
    
// }


// document.querySelector('.level-3opt8').style.display = 'none'R
// document.querySelector('.level-3opt7').style.display = 'none'R
// document.querySelector('.level-3opt6').style.display = 'none'
// document.querySelector('.level-3opt4').style.display = 'none'L
// document.querySelector('.level-3opt2').style.display = 'none'L
// document.querySelector('.level-3opt3').style.display = 'none'L
// document.querySelector('.level-3opt1').style.display = 'none'M





