const getNewBlock = () => {

    // const main = document.querySelector('.addBtn')
    // main.style.border = '2px solid red'
    document.querySelector('.selectNum').style.display = 'flex'


    // const option2 = document.querySelector('.opt2').innerHTML
    // console.log(option2)



    // const getLowerLn = document.querySelector(".getLowerLn")
    // getLowerLn.setAttribute("class",'selectLowerLn')
    // main.append(getLowerLn)


    // const newBlock = document.createElement('button')
    // newBlock.setAttribute('class', 'startBtn')
    // main.append(newBlock)



    // newBlock.innerHTML = 'userInput'

    // const createNewLine = document.createElement("span")
    // createNewLine.setAttribute("class",'line')
    // main.append(createNewLine)

    // const createNewBtn = document.createElement("button")
    // createNewBtn.setAttribute("class",'addBtn')
    // createNewBtn.innerHTML="+"
    // main.append(createNewBtn)

    // const getUpperLn = document.querySelector(".getUpperLn")
    // getUpperLn.setAttribute("class",'upperLine')
    // main.append(getUpperLn)




}

const getOpt1 = () => {







    const option1 = document.querySelector('.opt1').innerHTML
    console.log(option1)

    const selectNum = document.querySelector('.selectNum')
    selectNum.style.display = 'none'

    const main = document.querySelector('.main')
    const getLowerLn = document.querySelector(".getLowerLn")
    getLowerLn.setAttribute("class", 'selectLowerLn')
    main.append(getLowerLn)

    const newBlock = document.createElement('input')
    newBlock.setAttribute('class', 'startBtn')
    newBlock.setAttribute('placeholder', 'Write Here')
    main.append(newBlock)

    const createNewLine = document.createElement("span")
    createNewLine.setAttribute("class",'line')
    main.append(createNewLine)


    
    main.append(selectNum)

    const createNewBtn = document.createElement("button")
    createNewBtn.setAttribute("class",'addBtn')
    createNewBtn.innerHTML="+"
    main.append(createNewBtn)
    createNewBtn.setAttribute("onclick",'getNewBlock()')


}


const getOpt2 = () => {
    const option2 = document.querySelector('.opt2').innerHTML
    console.log(option2)

    const selectNum = document.querySelector('.selectNum')
    selectNum.style.display = 'none'
}



