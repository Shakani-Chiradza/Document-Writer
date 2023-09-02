var letterCount = 0
var countColors = 0

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

    
    if (document.getElementById("blank-page").scrollHeight != 773){
        document.getElementById("blank-page1").style.display = 'block'
        document.getElementById("blank-page").scrollHeight == 773
       
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
        if (countColors < 5) {
        blankPage[i].style.backgroundColor = bgColors[countColors]
        }
        else {
            let manyColors = countColors % 5
            blankPage[i].style.backgroundColor = bgColors[manyColors]
        }
    }

    countColors += 1


}
