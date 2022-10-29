import React, { useState } from 'react';
import axios from 'axios';
import { fetchPhotos, openUploadWidget } from "../../CloudinaryService.jsx";
import { modalBoxStyle, modalViewStyle, buttonStyle, ErrorStyle, UploadPhotos, uploadPhotoStyle } from '../QandA/components/QandA_Styles.jsx'


function FileUpload({photos, setPhotos}) {


  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "dbij37ike",
      tags: [tag],
      uploadPreset: "cc8qp3hn"
    };

    openUploadWidget(uploadOptions, (error, uploadPhoto) => {
      if (!error) {
        if(uploadPhoto.event === 'success'){
          setPhotos([...photos, uploadPhoto.info.secure_url]);
        }
      } else {
        console.log(error);
      }
    })
  }

  if (photos.length < 5) {
    return (
      <>
      <div
      style={{
        ...buttonStyle, backgroundColor: '#899489', color: 'white', borderColor: 'white', fontSize: 'small', width: '80px', borderStyle: 'outset', cursor: 'pointer'
      }}
      onClick={(e) => {
        e.preventDefault();
        beginUpload()
      }}>Upload Image
    </div>
    <UploadPhotos>
    {photos.map((p,index)=> {
      return  <img style={uploadPhotoStyle} key={index} src={p}></img>
    })}
  </UploadPhotos>
  </>
    )
  } else {
    return (
      <UploadPhotos>
    {photos.map((p,index)=> {
      return  <img style={uploadPhotoStyle} key={index} src={p}></img>
    })}
  </UploadPhotos>
    )
  }

}

export default FileUpload;

