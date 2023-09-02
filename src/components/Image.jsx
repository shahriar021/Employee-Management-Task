import React from 'react';
import {useRef,useState} from 'react';


export  function Image() {
    const inputRef = useRef(null);
    const [image,setImage] = useState("");
    const handleImageClick = () =>{
        inputRef.current.click();
    }
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      console.log(file);
      setImage(event.target.files[0]);
    };
  return (
    <div >
      <div onClick={handleImageClick}>
        {image ? (
          <img src={URL.createObjectURL(image)} style={{width:"300px",height:"300px"}}/>
        ) : (
          <img src="./images.jpeg" alt="" />
        )}
        <input
          type="file"
          onChange={handleImageChange}
          ref={inputRef}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}
