var letterCount = 0
var countBgColors = 0
var countFontsUp = 0
var countFontsDown = 0
var countFontColors = 0

function checkOverflow(){

    letterCount +=1
    //console.log(letterCount)
    let count  = 1
    var pageContent = document.getElementById("blank-page")  
    console.log(document.getElementById("blank-page").scrollHeight)
    
    var content  = pageContent.value 
    var pageLine = content.substring(content.lastIndexOf('\n')+1) 
    console.log(pageLine.length)  

    if (pageLine.length == 90 && this.event.key != 'Backspace') {
        document.getElementById("blank-page").value = content + '\n'
    }

    
    if (document.getElementById("blank-page").scrollHeight != 1051){
        document.getElementById("blank-page1").style.display = 'block'
        document.getElementById("blank-page").scrollHeight == 1051
       
        if (this.event.key != 'Backspace'){
                { document.getElementById("blank-page1").focus()}
        }
        
    }
    else
        {document.getElementById("blank-page1").style.display = 'none'}
    


};


function clickedMenuItem(id) {
    try {
        var currentClass = localStorage.getItem('current-class')
    document.getElementById(currentClass).classList.remove('active')
    document.getElementById(id).classList.add('active')
    localStorage.setItem('current-class',id)
    }

    catch {
        document.getElementById(id).classList.add('active')
    localStorage.setItem('current-class',id)
    }

   // Code for dropping down menu items for navbar items with submenus
   // NB: implement map instead of for loops

   let fileOptions = document.getElementsByClassName('file-options-items')
   let insertItems = document.getElementsByClassName('insert-items')
   let fontOptions = document.getElementsByClassName('font-options-items')
   let layoutOptions = document.getElementsByClassName('layout-options-items')
   let searchOptions = document.getElementsByClassName('search-options-items')

    if(document.getElementById('file-options').classList.contains('active')){
        for (let i = 0; i < fileOptions.length; i++){
            fileOptions[i].style.display = 'block'
        }
        for (let i = 0; i < insertItems.length; i++){
            insertItems[i].style.display = 'none'
        }
        for (let i = 0; i < fontOptions.length; i++){
            fontOptions[i].style.display = 'none'
        }
        for (let i = 0; i < layoutOptions.length; i++){
            layoutOptions[i].style.display = 'none'
        }
        for (let i = 0; i < searchOptions.length; i++){
            searchOptions[i].style.display = 'none'
        }
        
    }
    else if(document.getElementById('insert').classList.contains('active')){
        for (let i = 0; i < fileOptions.length; i++){
            fileOptions[i].style.display = 'none'
        }
        for (let i = 0; i < insertItems.length; i++){
            insertItems[i].style.display = 'block'
        }
        for (let i = 0; i < fontOptions.length; i++){
            fontOptions[i].style.display = 'none'
        }
        for (let i = 0; i < layoutOptions.length; i++){
            layoutOptions[i].style.display = 'none'
        }
        for (let i = 0; i < searchOptions.length; i++){
            searchOptions[i].style.display = 'none'
        }
    }
    else if(document.getElementById('font-options').classList.contains('active')){
        for (let i = 0; i < fileOptions.length; i++){
            fileOptions[i].style.display = 'none'
        }
        for (let i = 0; i < insertItems.length; i++){
            insertItems[i].style.display = 'none'
        }
        for (let i = 0; i < fontOptions.length; i++){
            fontOptions[i].style.display = 'block'
        }
        for (let i = 0; i < layoutOptions.length; i++){
            layoutOptions[i].style.display = 'none'
        }
        for (let i = 0; i < searchOptions.length; i++){
            searchOptions[i].style.display = 'none'
        }
    }

    else if(document.getElementById('layout-options').classList.contains('active')){
        for (let i = 0; i < fileOptions.length; i++){
            fileOptions[i].style.display = 'none'
        }
        for (let i = 0; i < insertItems.length; i++){
            insertItems[i].style.display = 'none'
        }
        for (let i = 0; i < fontOptions.length; i++){
            fontOptions[i].style.display = 'none'
        }
        for (let i = 0; i < layoutOptions.length; i++){
            layoutOptions[i].style.display = 'block'
        }
        for (let i = 0; i < searchOptions.length; i++){
            searchOptions[i].style.display = 'none'
        }
    }

    else if(document.getElementById('search-options').classList.contains('active')){
        for (let i = 0; i < fileOptions.length; i++){
            fileOptions[i].style.display = 'none'
        }
        for (let i = 0; i < insertItems.length; i++){
            insertItems[i].style.display = 'none'
        }
        for (let i = 0; i < fontOptions.length; i++){
            fontOptions[i].style.display = 'none'
        }
        for (let i = 0; i < layoutOptions.length; i++){
            layoutOptions[i].style.display = 'none'
        }
        for (let i = 0; i < searchOptions.length; i++){
            searchOptions[i].style.display = 'block'
        }
    }

    else if(document.getElementById('home').classList.contains('active')){
        for (let i = 0; i < fileOptions.length; i++){
            fileOptions[i].style.display = 'none'
        }
        for (let i = 0; i < insertItems.length; i++){
            insertItems[i].style.display = 'none'
        }
        for (let i = 0; i < fontOptions.length; i++){
            fontOptions[i].style.display = 'none'
        }
        for (let i = 0; i < layoutOptions.length; i++){
            layoutOptions[i].style.display = 'none'
        }
        for (let i = 0; i < searchOptions.length; i++){
            searchOptions[i].style.display = 'none'
        }
    }
    
}

function changeBackground() {
    let blankPage = document.getElementsByClassName('blank-page')
    const bgColors = ['lightyellow', 'lightgreen', 'pink', 'lightBlue', 'white']

    for (let i = 0; i < blankPage.length; i++){
        if (countBgColors < 5) {
        blankPage[i].style.backgroundColor = bgColors[countBgColors]
        }
        else {
            let manyColors = countBgColors % 5
            blankPage[i].style.backgroundColor = bgColors[manyColors]
        }
    }

    countBgColors += 1

}


function bold() {
    var pageContent = document.getElementById("blank-page")
    pageContent.style.fontWeight = 'bold'
}

function italic() {
    var pageContent = document.getElementById("blank-page")
    pageContent.style.fontStyle = 'italic'
}

function underline() {
    var pageContent = document.getElementById("blank-page")
    pageContent.style.textDecoration = 'underline'
}

function increaseFont() {
    var pageContent = document.getElementById("blank-page")
    const fontPixels = ['30px', '35px', '40px', '45px']
    if(countFontsUp < 4) {
        pageContent.style.fontSize = fontPixels[countFontsUp]
    }
    else{
        let manyFonts = countFontsUp % 4
        pageContent.style.fontSize = fontPixels[manyFonts]
    }

    countFontsUp += 1
    
}

function decreaseFont() {
    var pageContent = document.getElementById("blank-page")
    console.log(pageContent)
    const fontPixels = ['20px', '15px', '10px', '5px']
    if(countFontsDown < 4) {
        pageContent.style.fontSize = fontPixels[countFontsDown]
        
    }
    else{
        let manyFonts = countFontsDown % 4
        pageContent.style.fontSize = fontPixels[manyFonts]
    }

    countFontsDown += 1
}

function changeFontColor() {
    var pageContent = document.getElementById("blank-page")
    const fontColors = ['blue', 'red', 'purple', 'orange', 'black']
    if(countFontColors < 5){
        pageContent.style.color = fontColors[countFontColors]
    }
    else{
        let manyColors = countFontColors % 5
        pageContent.style.color = fontColors[manyColors]
    }

    countFontColors += 1
}
