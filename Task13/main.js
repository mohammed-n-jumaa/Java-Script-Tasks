// DOM Elements
const createNoteBtn = document.getElementById('toggle-form');
const addNoteBtn = document.getElementById('add-note');
const noteInput = document.getElementById('note-input');
const noteForm = document.getElementById('note-form');
const notesContainer = document.getElementById('notes-container');

// Load notes from local storage when the page loads
document.addEventListener('DOMContentLoaded', loadNotes);

// Event listener to toggle the note creation form
createNoteBtn.addEventListener('click', () => {
    noteForm.style.display = noteForm.style.display === 'none' ? 'block' : 'none';
});

// Event listener for adding a new note
addNoteBtn.addEventListener('click', createNewNote);

// Function to load notes from local storage
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => {
        addNoteToDOM(note);
    });
}

// Function to create a new note
function createNewNote() {
    const noteText = noteInput.value.trim();

    if (noteText) {
        const note = {
            id: Date.now(),
            text: noteText
        };

        addNoteToDOM(note);
        saveNoteToLocalStorage(note);
        noteInput.value = ''; // Clear the input field after adding the note
    }
}

// Function to add a note to the DOM
function addNoteToDOM(note) {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
        <p>${note.text}</p>
        <button class="delete-btn" onclick="deleteNote(${note.id})">🗑️</button>
    `;

    notesContainer.appendChild(noteElement);
}

// Function to save a note to local storage
function saveNoteToLocalStorage(note) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to delete a note
function deleteNote(noteId) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = notes.filter(note => note.id !== noteId);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));

    // Remove note from DOM
    notesContainer.innerHTML = '';
    loadNotes();
}
