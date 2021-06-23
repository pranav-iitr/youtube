import React from 'react'
import Avatar from '@material-ui/core/Avatar';
function Video(props) {
  const onpl=(e)=>{
    e.preventDefault()
    props.vs(props.id,props.desc)
   }
   var x=props.title.slice(0,25)
  return (<>
  <button onClick={onpl}>
    <div className="Vediocard">
      <img src={props.image} className="videocard_thumbnail" alt="" />
   
    <div className="videocard_info">
      <Avatar classname="video_avatar" alt="channel" src={props.channelimage}/>
      <div className="video_text">
      <h4 >{x}</h4> 
      <p className="channelname">{props.channel}
      
      </p>
      </div>
    </div>
    </div></button>
  </>
  )
}

export default Video
