
import './App.css';
import React ,{useEffect,useState} from 'react'

import InfiniteScroll from 'react-infinite-scroll-component';
import Sidebar from './comp/Sidebar'
import Recomended from './comp/Recomended'
import Watchscreen from './comp/Watchscreen'

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
/*window.addEventListener("scroll", ()=>{
  if(window.innerHeight + document.documentElement.scrollTop==document.documentElement.offsetHeight){
     setNum(num+9)
}
AIzaSyDebp8YbaAoLs5XNgf0DkkAsOdnWu4Ny00
})*/
/* {useEffect(() =>{
      
         if(window.innerHeight + document.documentElement.scrollTop==document.documentElement.offsetHeight){
          console.log("trigg")
          setNum(num+24)
      }
    }
  
    )} */
function App() {
  const [ser, setSearch] = useState() 
  const [num, setNum] = useState(24)
  const  [play, setplay] = useState(false)
  const  [id, setid] = useState()
  const [description, setdescription] = useState('')
 
 const onsearch=(e)=>{
  e.preventDefault()
  setSearch(document.getElementById('ser').value)
  setNum(num+6)
  setplay(false)
  console.log(ser)
 }
 const onhome=(e)=>{
  e.preventDefault()
  setSearch(null)
  setNum(num-3)
  setplay(false)
  console.log(ser)
 }
const cnum=()=>{
  setNum(num+9)
}

 function gd(){
  console.log(play)
if(!play){
  
return <> <Recomended ser={ser} setdescription={setdescription} num={num} setplay={setplay} setid={setid} /></>
}
else{
  return <Watchscreen id={id} description={description}/>
}


}

const insy=()=>{
  

}

  return (
    <>
 
    < div className="header">
        < div className="header_left">

          <MenuIcon />
          <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/300px-YouTube_Logo_2017.svg.png" />
        </div>
        <div className="header_input">
          <input id="ser"  placeholder="search" type="text" />
        <button onClick={onsearch}> <SearchIcon className="hinb"/></button>
        </div><div className="header_icons">
          <VideoCallIcon className="heade_icon"/>
          <AppsIcon className="heade_icon"/>
          <NotificationsIcon className="heade_icon"/>
        </div>
      </div>
     
    <div className='fl'>
    <Sidebar onhome={onhome}/>
   
    <div className='watch'>
    
   {gd()}
  
   </div>
    </div>
    
    {window.addEventListener("scroll", ()=>{
  if(window.innerHeight + document.documentElement.scrollTop==document.documentElement.offsetHeight){
     setNum(num+12)
}})}
    </>
  );
}

export default App;
