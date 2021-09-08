import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) =>{
        event.preventDefault();

        await axios.post('http://localhost:4000/posts')
    }
    

    return <div>
        <form>
            <div className="form-group">
                <label>Title</label>
                <input className="form-control" />
            </div>
            <button className="btn btn-primary">Submit </button>
        </form>
    </div>
}