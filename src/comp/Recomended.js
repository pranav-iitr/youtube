import React ,{useEffect,useState} from 'react'
import "./recomended.css"
import axios from 'axios'
import Videocard from './VideoCard'

/*{props.snip.map((det)=>{
          
    return <Videocard image={det.snippet.thumbnails.medium.url}  title={det.snippet.title} channel={det.snippet.channelTitle}/>

   })
   
   
   } */
 
   

  
 export  const Recomended = (props) => {
    const [snip, setsnip] = useState([])
    const [numcheck,setnumcheck]=useState(0)
    const [sercheck,setsercheck]=useState("")
    const vs=(x,y)=>{
    
        props.setdescription(y)
        props.setplay(true)
        props.setid(x)
        console.log(0)
    }
    const num=props.num
    const ser=props.ser
    return (<>
        
        <div className="recomended">
         <div className="recomended_videos">
        { useEffect(() => {
  


    
  async function getData(){

  if(numcheck!={num}.num ){
  
  const res= ser? await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${props.num}&q=${props.ser}&key=AIzaSyCQ821zBB8iCIgxqAZO3l0fuXjXTWXZQ30`) : await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${props.num}&regionCode=IN&key=AIzaSyCQ821zBB8iCIgxqAZO3l0fuXjXTWXZQ30`)
  setsnip(res.data.items)
  setnumcheck({num}.num)
  
  console.log({ser},sercheck)}
}
getData()
})}
    {console.log(Object.entries(snip))}     
     <div className="rec" >
    {Object.entries(snip).map((det)=>{
          let s=ser? det[1].id.videoId:det[1].id
          return   < Videocard  className="vc" id={s} setdescription={props.setdescription} desc={det[1].snippet.description} image={det[1].snippet.thumbnails.medium.url}  title={det[1].snippet.title} channel={det[1].snippet.channelTitle} vs={vs}/>
         })
         
         
         }  </div>    
</div >
        </div> </>
    )
}
export default Recomended