console.log('app.js');
 showNotes();

let addBtn = document.getElementById("addNoteBtn");
addBtn.addEventListener('click', function (e) {
    let txt = document.getElementById("TxttoAdd");
    let notes = localStorage.getItem("notes");
    let title = document.getElementById("TitletoAdd");
    if (notes == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(notes);
       
    }
    obj = {
        title : title.value,
        text : txt.value 
    }
    arr.push(obj);
    localStorage.setItem("notes", JSON.stringify(arr));
    txt.value = "";
    title.value = "";
    // console.log("note added");
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(notes);
    }
    let html = "";
    arr.forEach(function (element, index) {
        html +=
            `      <div class="card noteCard mx-2 my-2" style="width: 18rem;">
       
        <div class="card-body">
          <h5 class="card-title" contenteditable="true">${element.title}</h5>
          <div class="form-group">
            
           <p>${element.text}</p>
          </div>
          <button class="btn btn-primary" id="${index}" onclick="deleteNote(${index})">Delete Note</a>
        </div>
      </div>
        `;
    });
    let notesElem = document.querySelector(".Added-Notes");
    if(arr.length == 0){
        notesElem.innerHTML = `<h3>No Notes Saved</h3>`;
    }
    else{
        notesElem.innerHTML = html;
    }

}
function deleteNote(index){
    console.log("deleting note",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(notes);
    }
    arr.splice(index,1);
    notes = JSON.stringify(arr);
    localStorage.setItem("notes",notes);
    showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputTxt = search.value.toLowerCase();
    let arr = document.getElementsByClassName("noteCard");
    Array.from(arr).forEach(function(element){
        let txt = element.getElementsByTagName("p")[0].innerText;
        if(txt.includes(inputTxt)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    });
});
/*
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
*/