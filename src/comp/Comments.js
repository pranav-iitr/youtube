import React from 'react'
import Avatar from '@material-ui/core/Avatar';
function Comments({title,avatar,text }) {
  return (<>
    <div >
       <div className='author'> 
      <Avatar classname="video_avatar" alt="channel" src={avatar}/> <h4>{title}</h4> 
      </div>
     <p>   {text} </p>
      </div>
  
   
  </>
  )
}

export default Comments
