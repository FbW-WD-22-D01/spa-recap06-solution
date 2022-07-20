
    //Array aus Aufgabe in Code übertragen
    let myItems=['grün', 'blau', 'gelb', 'rot']


    //Elemente selektieren (Formular, Tabelle)
    const form = document.querySelector('form')
    const table = document.querySelector('table')


// 1. Dropdown erzeugen
    // Für Dropdown ein <select> Element erzeugen
    const select = document.createElement('select')

    //Den Array durchlaufen und die Elemente als Dropdown hinzufügen
    myItems.forEach((el) =>{
        select.innerHTML += `<option value="${el}">${el}</option>`
    })
    
    // Dropdown zum Formular hinzufügen
    form.appendChild(select)



    // 2. Werte aus Dropdown Liste zu Tabelle hinzufügen 
    
    //Funktion die beim absenden des Formulars ausgelöst wird
    function handleSubmit(e)  {
        //weil Formlar - verhindern, dass die Seite neu geladen wird
        e.preventDefault()
    
        //Select Liste haben ein paar hilfreiche Eigenschaften
         // select.selectedIndex gibt die index Position des ausgewälten Elements zurück
        console.log('Die Position des selektierten Element: ',select.selectedIndex)    
    
        //select.children --> gibt die options als Liste aus
        console.log('Die Kinder als List: ',select.children)
    
        //select[0] --> gibt das erste Kind zurück
        // dadurch select[select.selectedIndex] --> gibt das selektierte Element zurück
        console.log('Das selektierte Element: ', select[select.selectedIndex])
        
        const selectedItem =  select[select.selectedIndex]
        
        //Funktion zum Hinzufügen zur Tabelle, den Value übergeben
        addToTable(selectedItem.value)
        
    }
    
//Funktion um Elemente zu Tabelle hinzufügen 
function addToTable(element){
    // Elemente erzeugen (neue Reihe mit 2 Zellen)
    const newRow = document.createElement('tr')
    const newCell1 = document.createElement('td')
    const newCell2 = document.createElement('td')

    //Element in die neue Zelle eintragen
    newCell2.innerText= element
    
    //Ranglistenposition ermitteln erzeugen (Bonus)
    const rang = getPosition()
    newCell1.innerText = rang
    
    //Die Zellen an die neue Reihe anhängen
    newRow.appendChild(newCell1)
    newRow.appendChild(newCell2)

    // die neue Reihe an die Tabelle anhängen 
    table.appendChild(newRow)

    //Elemente aus der Dropdown löschen (Bonus)
    deleteFromDrop(element)
    
    
    

}


//Bonus Die Rangliste in der Tabelle
function getPosition(){
    //Die children Eigenschaften, gibt eine Liste an Kindelementen zurück
    console.log('Children of table: ',table.children)
    
    // Diese Liste hat Eigenschaft Länge, -->  entspricht der letzten Ranglistenpostion 
    const lastPosition = table.children.length
    
    return lastPosition
}


//Bonus Element aus Dropdown löschen
function deleteFromDrop(deleteItem){
    //Das Element aus dem Array entfernen
    const positionInArray = myItems.indexOf(deleteItem)
    myItems.splice(positionInArray, 1)

    //alten Dropdown löschen
    select.innerHTML=''
    
    // Aus der gefilterten Liste eine neue Dropdown erzeugen
    myItems.forEach((el) =>{
        select.innerHTML += `<option value="${el}">${el}</option>`
    })
    
}


// EventListener für das Formular erzeugen -> submit Event für Formulare
form.addEventListener('submit', handleSubmit)

