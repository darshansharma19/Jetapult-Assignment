import { useContext } from 'react';

import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
`

const Note = ({ note }) => {

    const { notes, setNotes, setAcrchiveNotes, setDeleteNotes } = useContext(DataContext);

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setAcrchiveNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prevArr => [note, ...prevArr]);
    }

    const handleNoteHeadingChange = (e) => {
        const temp = [...notes];
        for(let i = 0; i<notes.length; i++) {
            if(notes[i].id === note.id) {
                temp[i].heading = e.target.value;
                break;
            }
        }
        console.log({temp})
        setNotes(temp);
    }

    const handleNoteTextChange = (e) => {
        const temp = [...notes];
        for(let i = 0; i<notes.length; i++) {
            if(notes[i].id === note.id) {
                temp[i].text = e.target.value;
                break;
            }
        }
        setNotes(temp);
    }

    return (
        <StyledCard>
                <CardContent>
                    <input class="inpt-edit" onChange={handleNoteHeadingChange} value={note.heading}></input>
                    <input class="inpt-edit" onChange={handleNoteTextChange} value={note.text}></input>
                </CardContent>
                <CardActions>
                    <Archive 
                        fontSize="small" 
                        style={{ marginLeft: 'auto' }} 
                        onClick={() => archiveNote(note)}
                    />
                    <Delete 
                        fontSize="small"
                        onClick={() => deleteNote(note)}
                    />
                </CardActions>
        </StyledCard>
    )
}

export default Note;