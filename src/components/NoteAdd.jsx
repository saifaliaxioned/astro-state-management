import { useState } from 'react';
import { useStore } from "@nanostores/react";
import { addNote, notes } from "../store";

export default function NoteAdder() {
  const [note, setNote] = useState('');
  const $data = useStore(notes);
  const handleInputChange = (e) => {
    setNote(e.target.value);
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    console.log(note);
    if (note !== '') {
    addNote(note);
    setNote('');
    }
  };
  return (
    <>
      <form method='post' onSubmit={handleAddNote} action='#FIXME' className="flex my-5 items-end gap-2 mx-5">
        <div className="input-group">
          <label className='block' htmlFor="note">Add a note:</label>
          <input className='border p-2' type="text" name="note" id="note" placeholder='please add note'  value={note} onChange={handleInputChange} />
        </div>
        <div className="input-control">
          <input className='border bg-black text-white px-5 py-2' type='submit' value="add"/>
        </div>
      </form>
      <ul className='w-1/2 flex flex-col mx-5'>
        {
          $data.map((note, idx) => <li className='inline-block border break-words p-2' key={idx}>{note}</li>)
        }
      </ul>
    </>
  );
}
