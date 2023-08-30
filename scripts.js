var letterCount = 0

function checkOverflow(){

    letterCount +=1
    //console.log(letterCount)
    let count  = 1
    var gogo = document.getElementById("blank-page")  //change var name
    console.log(document.getElementById("blank-page").scrollHeight)
    
    var content  = gogo.value //change var name
    var linemanyama = content.substring(content.lastIndexOf('\n')+1) //change var name
    console.log(linemanyama.length)  //change var name

    if (linemanyama.length == 90 && this.event.key != 'Backspace') {
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
    
}
