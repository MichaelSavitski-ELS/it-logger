import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech.' });
        } else {

        }
    };

    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Enter System Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input className='text' name='message' value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor='message' className='active'>
                            Log Message
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <select name='tech' value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
                            <option value='' disabled>Select Technician</option>
                            <option value='Sam'>Sam</option>
                            <option value='Bob'>Bob</option>
                            <option value='Jean'>Jean</option>
                            <option value='Jen'>Jen</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <p>
                        <label>
                            <input type='checkbox' className='filled-in' checked={attention} value={attention} onChange={e => setAttention(!attention)} />
                            <span>Needs Attention</span>
                        </label>
                    </p>
                </div>
            </div>
            <div className='modal-footer'>
                <a href='#!' onClick={onSubmit} className='modal-close waves-effect blue waves-light btn'>Enter</a>
            </div>
        </div>
    )
};

const modalStyle = {
    width: '75%',
    height: '75%'
};

export default AddLogModal;