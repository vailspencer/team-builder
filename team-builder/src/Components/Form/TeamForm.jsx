import React, {useState} from 'react'
import './TeamForm.css'



const TeamForm = props => {
// structure of cards 
const [card, setCard] = useState({
    name: '',
    email: '',
    role: ''
    });

// Track changes 
    const evtHandler = evt => {
        console.log(evt);
        setCard({...card,  
            [evt.target.name]: evt.target.value});
    };

    // submit data creates new team member card 
    const formSubmit = evt => {
        evt.preventDefault();
        props.addMember(card);
    };

    return (
        <div>
                <form onSubmit={formSubmit}>
                    <div className ='from'>
                        <div className='input-Fields'>
                            <label>Name:&nbsp;</label>
                            <input type='text' id='name' name='name' onChange={evtHandler} placeholder='name' />
                        </div>
                        <div className='input-Fields'>
                            <label>Email:&nbsp;</label>
                            <input type='text' id='email' name='email' onChange={evtHandler} placeholder='email' />
                        </div>
                        <div className='input-Fields'>
                            <label>Role:&nbsp;</label>
                            <input type='text' id='text' name='text' onChange={evtHandler} placeholder='text' />
                        </div>
                    <button type='submit'>Submit</button>
                    </div>
                </form>
        </div>

    )
}

export default TeamForm