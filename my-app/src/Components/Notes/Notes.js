import { useState } from 'react';
import AddNote from "./AddNote/AddNote";
import FilterNote from './FilterNote/FilterNote';
import NoteItem from "./NoteItem/NoteItem";

const INITIAL_NOTES = [
    { id: "101", title: "Grocery", amount: 12.99, createdAt: new Date("Dec 21, 2021") },
    { id: "102", title: "shopping", amount: 10.19, createdAt: new Date("Jan 1, 2022") },
    { id: "103", title: "insurance", amount: 22.39, createdAt: new Date("Aug 16, 2019") },
    { id: "104", title: "planting", amount: 1.99, createdAt: new Date("Sept 2, 2020") }
]

const Notes = () => {

    const [notes, setNotes] = useState(INITIAL_NOTES)   

    const [show, setShow] = useState(false)
    
    const toggleHandler = () => {
        setShow(!show)
    }

    // to add Note
    const addNote = (note) => {
        console.log("ADDING NOTE : ", note)
        setNotes((prevNote) => {
            return [note, ...prevNote]
        })
    }

    const deleteNote = noteId => {
        setNotes(prevState =>  prevState.filter(note => note.id !== noteId))
    }
    return (
        <div>
            <h3 className="text-center display-4">Notes App</h3>
            <div className="row">
                <div className="col-4 offset-4">
                    <button className="btn btn-dark btn-block" 
                        onClick={toggleHandler}>
                            {show ? 'Hide Form' : 'Show Form'}
                        </button>
                </div>
                <div className='col-4'>
                    <FilterNote />
                </div>
            </div>
            {show && <AddNote onAddNote = { addNote } onCancel={() => setShow(!show)}/>}
            <br />
            <div className="row">
               {notes.map(note => <NoteItem note={note} onDeleteItem={deleteNote} />)}
            </div>
        </div>
    )

}

export default Notes;