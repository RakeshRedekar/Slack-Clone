import  InfoOutlinedIcon  from '@mui/icons-material/InfoOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Chat.css"
import db from './firebase';
import Message from './Message';

function Chat() {
  const {roomID} = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([])
  
  useEffect(()=>{
    if(roomID){
      db.collection('rooms').doc(roomID)
      .onSnapshot(snapshot => (
        setRoomDetails(snapshot.data())
      ))
    }

    db.collection('rooms').doc(roomID)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot =>setRoomMessages(
        snapshot.docs.map(doc => doc.data())
    )
  )
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
        <div className='chatMessages'>
          {roomMessages.map(({message, timestamp, user, userImage})  =>
            <Message 
              message={message}
              timestamp = {timestamp}
              user = {user}
              userImage = {userImage}
            />
          )}
        </div>
    </div>
  )
}

export default Chat;