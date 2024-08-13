import React, { useState } from 'react';

const Todolist = () => {
    const [todolist, setTodolist] = useState([]);
    const [inputtext, setInputText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handlesubmit = (e) => {
        e.preventDefault();

        if (inputtext.trim() !== '') {
            // Properly update the todolist by adding the new item
            setTodolist([...todolist, inputtext]);
            setInputText(''); // Clear the input field
        }
    };

const handleDelete = (index)=>{

   const filtered = todolist.filter((item,i)=>i !== index)
   setTodolist(filtered)
}

const handleUpdate = (index) => {
  setInputText(todolist[index]);
  setIsEditing(true);
  setCurrentIndex(index);
};

    return (
        <div className='container mt-5'>
            <form onSubmit={handlesubmit}>
                <div className='d-flex'>
                    <input 
                        className='form-control' 
                        value={inputtext} 
                        onChange={(e) => setInputText(e.target.value)} 
                        type="text" 
                    />
                    <button className='btn btn-primary' type='submit'>
                        Send
                    </button>
                </div>
            </form>

            <div className=' mt-3'>
                {todolist.length > 0 && todolist.map((item, index) => (
                    <div className=' border p-2 rounded-2 d-flex justify-content-between m-3' key={index}>
                        <h1>{item}</h1>
                        
                        <div >
                        <button onClick={()=>{handleDelete(index)}} className='btn btn-danger '>
                          delete
                        </button>
                        <button onClick={()=>{}} className='btn btn-warning '>
                          update
                        </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todolist;
