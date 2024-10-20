// To-Do List

function addTodo() {
    const todoInput = document.getElementById('todo-input').value;
    if (todoInput.trim()) {
        const ul = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.textContent = todoInput;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => ul.removeChild(li);
        li.appendChild(removeButton);
        ul.appendChild(li);
        document.getElementById('todo-input').value = ''; 
    }
}

// Notes Section

document.addEventListener('DOMContentLoaded', () => {
    loadNotes();
});

// Save Note function

function saveNote() {
    const notesInput = document.getElementById('notes-input').value;
    if (notesInput.trim()) {
        const notes = getNotesFromLocalStorage();
        notes.push(notesInput);
        localStorage.setItem('notes', JSON.stringify(notes)); 
        displayNotes();
        document.getElementById('notes-input').value = '';
    }
}

// Load and display notes from local storage

function loadNotes() {
    displayNotes();
}

// Display notes on the page
function displayNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = ''; 

    const notes = getNotesFromLocalStorage();

    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.textContent = note;

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => {
            deleteNote(index);
        };
        noteDiv.appendChild(deleteButton);

        notesList.appendChild(noteDiv);
    });
}

// Delete a specific note
function deleteNote(index) {
    let notes = getNotesFromLocalStorage();
    notes.splice(index, 1); 
    localStorage.setItem('notes', JSON.stringify(notes)); 
    displayNotes(); 
}

// Get notes from local storage
function getNotesFromLocalStorage() {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}

var speech = true; 
window.SpeechRecognition = window.SpeechRecognition 
                || window.webkitSpeechRecognition; 

const recognition = new SpeechRecognition(); 
recognition.interimResults = true; 
const words = document.querySelector('.words'); 
words.appendChild(p); 

recognition.addEventListener('result', e => { 
    const transcript = Array.from(e.results) 
        .map(result => result[0]) 
        .map(result => result.transcript) 
        .join('') 

    document.getElementById("p").innerHTML = transcript; 
    console.log(transcript); 
}); 
  
if (speech == true) { 
    recognition.start(); 
    recognition.addEventListener('end', recognition.start); 
} 