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

    const [selectedYear, setSelectedYear] = useState('2019')
    
    const toggleHandler = () => setShow(!show);

    // to add Note
    const addNote = (note) => {
        setNotes((prevNote) => {
            return [note, ...prevNote]
        });
        setShow(!show)
    }

    const deleteNote = noteId => setNotes(prevState =>  prevState.filter(note => note.id !== noteId));
    const onSelectedYear = (yearSelected) => setSelectedYear(yearSelected);

    const filteredNote = notes.filter(note => note.createdAt.getFullYear().toString() === selectedYear)

    // const throwMyError = () => {
    //     throw new Error("I intentionally throw this error")
    // }

    const rnd = Math.floor(Math.random() * 10)
    if(rnd < 5){
        throw new Error("Too less Value")
    }

    return (
        <div>
            {/* <button className='btn btn-danger' onClick={throwMyError}>Throw Error</button> */}
            <h3 className="text-center display-4">Notes App</h3>
            <div className="row">
                <div className="col-4 offset-4">
                    <button className="btn btn-dark btn-block" 
                        onClick={toggleHandler}>
                            {show ? 'Hide Form' : 'Show Form'}
                        </button>
                </div>
                <div className='col-4'>
                    <FilterNote onYearSelect={onSelectedYear} initialYear={selectedYear} />
                </div>
            </div>
            {show && <AddNote onAddNote = { addNote } onCancel={() => setShow(!show)}/>}
            <br />
            <div className="row">
               {filteredNote.map(note => <NoteItem key={note.id} note={note} onDeleteItem={deleteNote} />)}
            </div>
        </div>
    )

}

export default Notes;