import React ,{useEffect,useState} from 'react'
import YouTube from 'react-youtube';
import axios from 'axios'
import Comments from './Comments'
import "./Watch.css"
/*https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.commentThreads.list?
part=snippet,replies
&videoId=wtLJPvx7-ys*/
function Watchscreen({id,description}) {
     console.log(id)
     const [ress, setress] = useState(false)
    const opts = {
        height: '600',
        width: '1300',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }}
    const  onReady =(e)=> {
            // access to player in all event handlers via event.target\

            e.target.pauseVideo();
          }
    return (<>
    
        { useEffect(() => {
  


            console.log(ress)
            async function getData(){
            if(!ress){
            const ress=  await axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=AIzaSyCQ821zBB8iCIgxqAZO3l0fuXjXTWXZQ30`) 
           
            console.log(ress.data.items)
            setress(ress.data.items)}
          }
          getData()
          })}
        <div className="video">
        <YouTube videoId={id} opts={opts}  />
        <h2>Description</h2>
        {description}
        <h2>Comments</h2>
        {Object.entries(ress).map((det)=>{
          
          return  <Comments title={det[1].snippet.topLevelComment.snippet.authorDisplayName} avatar={det[1].snippet.topLevelComment.snippet.authorProfileImageUrl} text={det[1].snippet.topLevelComment.snippet.textDisplay}  />
    
         })
         
         
         }   
          
        </div>
</>
    )
}

export default Watchscreen
