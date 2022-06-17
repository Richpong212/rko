import React, {useState} from 'react';
import './new.css'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

function New({inputs,title}) {
  const [file, setFiles] = useState('');

  return (
    <div className='new'>
       <Sidebar />
       <div className='newContainer'>
          <Navbar />
          <div className='n-top'>
             <h1 className='n-top-title'>{title}</h1>
          </div>
          <div className='new-bottom'>
              <div className='new-b-left'>
                 <img 
                   src={file ? URL.createObjectURL(file) : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'}
                   alt='new-user' 
                   className='new-b-left-img' 
                 />
              </div>
              {/* Forms */}
              <div className='new-b-right'>
                <form>
                  <div className='formInput'>
                     <label htmlFor='file'>Image: <DriveFolderUploadIcon className='icon-img'/></label>
                     <input 
                       type='file' 
                       id='file' style={{display: 'none'}}
                       onChange={e => setFiles(e.target.files[0])}
                      />
                  </div>
                  {inputs.map((input)=> (
                      <div className='formInput' key={input.id}>
                        <label>{input.label}</label>
                        <input type={input.type} placeholder={input.placeholder}/>
                      </div>
                  ))}
                  <button>Send</button>
                </form>
              </div>
              {/*End Forms */}
          </div>
       </div>
    </div>
  )
}

export default New