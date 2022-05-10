const getNewBlock1 = () => {

    // const main = document.querySelector('.addBtn')
    // main.style.border = '2px solid red'
    document.querySelector('.selectNum').style.display = 'flex'

}

const getOpt1 = () => {
    document.querySelector('.oneof0').style.display = 'flex'
    document.querySelector('.secof0').style.display = 'none'



    document.querySelector('.selectNum').style.display = 'none'


}

const getOpt2 = () => {
    document.querySelector('.secof0').style.display = 'flex'
    document.querySelector('.oneof0').style.display = 'none'

    document.querySelector('.selectNum').style.display = 'none'


}


// LEVEL 1

const getNewBlock2 = () => {

    // const main = document.querySelector('.addBtn')
    // main.style.border = '2px solid red'
    document.querySelector('.selectNum1of1').style.display = 'flex'

}

const getOpt2of1 = () => {
    document.querySelector('.oneof1').style.display = 'flex'
    document.querySelector('.secof1').style.display = 'none'



    document.querySelector('.selectNum1of1').style.display = 'none'


}


const getOpt2of2 = () => {
    document.querySelector('.secof1').style.display = 'flex'
    document.querySelector('.oneof1').style.display = 'none'

    document.querySelector('.selectNum1of1').style.display = 'none'


}


const getNewBlock3 = () => {

    document.querySelector('.selectNum1forsecof2').style.display = 'flex'
    // const main = document.querySelector('.addBtn')
    // main.style.border = '2px solid red'

}

const getOpt1forsecof2 = () => {
    document.querySelector('.oneofsecof0').style.display = 'flex'
    document.querySelector('.one2ofsecof0').style.display = 'none'
    document.querySelector('.selectNum1forsecof2').style.display = 'none'
    document.querySelector('.forupline').style.marginTop = '-15vh'
    document.querySelector('.forupline').style.height = '3vh'
    document.querySelector('.forupline2').style.marginTop = '-15vh'
    document.querySelector('.forupline2').style.height = '3vh'
    // document.querySelector('.two2ofsecof0').style.marginTop = "-10vh"

    
    
}

const getOpt2forsecof2 = () => {
    document.querySelector('.one2ofsecof0').style.display = 'flex'
    document.querySelector('.oneofsecof0').style.display = 'none'
    document.querySelector('.selectNum1forsecof2').style.display = 'none'
    document.querySelector('.two2ofsecof0').style.marginTop = '-26vh'
    document.querySelector('.forupline').style.marginTop = '-41vh'
    document.querySelector('.forupline').style.height = '8.3vh'

}



// for leftside
const getNewBlock4 = () => {
    document.querySelector('.selectNum2forsecof2').style.display = 'flex'
    
}

const getOpt3forsecof2 = () => {
    document.querySelector('.twoofsecof0').style.display = "flex"
    document.querySelector('.two2ofsecof0').style.display = "none"
    document.querySelector('.selectNum2forsecof2').style.display = 'none'
    
}
const getOpt4forsecof2 = () => {
    document.querySelector('.two2ofsecof0').style.display = "flex"
    document.querySelector('.twoofsecof0').style.display = "none"
    document.querySelector('.selectNum2forsecof2').style.display = 'none'

}