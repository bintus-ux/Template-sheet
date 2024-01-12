import React from 'react'
import { FiUpload } from 'react-icons/fi'

const FileUpload = () => {
  return (
    <div className='dropzone_wrapper'>
      <form className='dropzone-box'>
        <h2>Upload and attach files</h2>
        <p>Attach files to this project</p>
        <div className='dropzone-area'>
          <div className='file-upload-icon'>
            <FiUpload style={{ height: '50px', width: '50px' }} />
          </div>
          <p>Click to upload or drag and drop</p>
          <input type='file' required id='upload-file' name='uploaded-file' />
          <p className='message'>No Files Selected</p>
        </div>
        <div class='dropzone-actions'>
          <button type='reset'> Cancel </button>
          <button id='submit-button' type='submit'>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default FileUpload
