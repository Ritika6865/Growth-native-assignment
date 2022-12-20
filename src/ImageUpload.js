import React from 'react';
import {useState} from 'react'


function ImageUpload()
{
   /* const[image,setImage]=useState('')
    function handleImage(e)
    {
        console.log(e.target.file)
        setImage(e.target.files[0])
    }*/

    return(
        <div>
             IMAGE UPLOAD 
             <input type="file"/>

        </div>
    )
}

export default ImageUpload