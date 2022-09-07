import  InfoOutlinedIcon  from '@mui/icons-material/InfoOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Chat.css"
import db from './firebase';

function Chat() {
  const {roomID} = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  
  useEffect(()=>{
    if(roomID){
      db.collection('rooms').doc(roomID)
      .onSnapshot(snapshot => (
        setRoomDetails(snapshot.data())
      ))
    }
  }, [roomID]);

  return (
    <div className='chat'>
        <div className='chatHeader'>
          <div className='chatHeaderLeft'>
              <h4 className='chatHeaderName'>
                <strong>#{roomDetails?roomDetails.name:"channel"}</strong>
                <StarBorderOutlinedIcon />
              </h4> 
          </div>
          <div className='chatHeaderRight'>
            <p>
              <InfoOutlinedIcon /> Details
            </p>
          </div>
        </div>
    </div>
  )
}

export default Chat;