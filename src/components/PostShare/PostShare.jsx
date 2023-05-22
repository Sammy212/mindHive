import React, { useState, useRef } from 'react';
import "./PostShare.css";
import Profile from "../../img/Samuel.jpg";
import 
    { 
        UilScenery, 
        UilSchedule,
        UilPlayCircle,
        UilLocationPoint,
        UilTimes
    } from "@iconscout/react-unicons"

const PostShare = () => {
    const [image, setImage] = useState(null)
    const  imageRef = useRef()

    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            })
        }
    }

  return (
    <div className="PostShare">
        <img src={Profile} alt="" />
        <div>
            <input type="text" placeholder="Share what's on your mind" />
            <div className="postOptions">
                <div className="option" style={{color: "var(--photo)"}}
                    onClick={() => imageRef.current.click()}
                ><UilScenery/>Photo</div>
                <div className="option" style={{color: "var(--video)"}}><UilPlayCircle/>Video</div>
                <div className="option" style={{color: "var(--location)"}}><UilLocationPoint/>Location</div>
                <div className="option" style={{color: "var(--schedule)"}}><UilSchedule/>Schedule</div>
                <button className='button ps-button'>POST</button>
                <div style={{display: "none"}}>
                    <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
                </div>
            </div>
            {/* preview image logic */}
            {
                image && 
                    <div className="previewImage">
                        <UilTimes onClick = {() => setImage(null)}/>
                        <img src={image.image} alt="" />
                    </div>
            }
        </div>
    </div>
  )
}

export default PostShare