import { Avatar, IconButton } from '@material-ui/core'
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic'
import { useEffect, useState } from 'react'
import './Chat.css'

const Chat = () => {
  const [seed, setSeed] = useState('')
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
        <div className='chat_headerInfo'>
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className='chat_headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        <p className='chat_message'>
          <span className='chat_name'>Christian</span>
          This is a chat message
          <span className='chat_timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat_message chat_receiver'>
          <span className='chat_name'>Bruno</span>
          This is a message back
          <span className='chat_timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat_message'>
          <span className='chat_name'>Christian</span>
          This is a message again
          <span className='chat_timestamp'>{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className='chat_footer'>
        <InsertEmoticon />
        <form>
          <input placeholder='Type a message' type='text' />
          <button type='submit'>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
