import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState([]);
    const [archiveNotes, setAcrchiveNotes] = useState([]);
    const [deleteNotes, setDeleteNotes] = useState([]);
    
    useEffect(() => {
        const temp = localStorage.getItem("notes");
        if(temp) {
            console.log("zzz", temp)
            // localStorage.setItem("notes", temp);
            setNotes(JSON.parse(temp));
        }
    }, [])
    useEffect(() => {
        if(notes) {
            console.log("zz", {notes})
            localStorage.setItem("notes", JSON.stringify(notes));
        }
    }, [notes])
    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setAcrchiveNotes,
            deleteNotes,
            setDeleteNotes
        }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;