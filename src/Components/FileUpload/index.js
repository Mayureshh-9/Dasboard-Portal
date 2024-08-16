import React from 'react';
import { FileUpload } from 'primereact/fileupload';

export const FileUploadComponent = () => {
    console.log("we are in fileupload");

    return (
        <div className='containers'>
            <h1>File Upload</h1>
            <div className="card">
                <FileUpload
                    name="demo[]"
                    url={'/api/upload'}
                    multiple
                    accept="image/*"
                    maxFileSize={1000000}
                    emptyTemplate={<p className="m-0">Drag and drop files here to upload.</p>}
                />
            </div>
        </div>
    );
};
