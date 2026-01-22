import Header from "./Header";
import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import Bio from "./Bio";
import { useState } from "react";
// import ThemeSwitch from "./ThemeSwitch";


import './Portpolio_card.css';

function Portpoliocard(){
    const [dark, setdark] = useState(false);
    const [likes, setlikes] = useState(0);
    return(
        <div className={dark ? "dark" : "portpolio-card"}>
            <Header/>
            <div className="card-content">
               <Avatar/>
               <PersonalInfo/>
               <Bio/>
               {/* <ThemeSwitch/> */}
               <button onClick={()=> setdark(!dark)} className="theme_btn">
                <img
                    src={dark ? "https://cdn-icons-png.flaticon.com/128/4946/4946096.png" : "https://cdn-icons-png.flaticon.com/128/833/833508.png"}
                    alt="theme icon"
                    className="theme-icon"/>
               </button>
               <span className="theme_btn"
                   onClick={() => setlikes(likes + 1)}><img src="https://cdn-icons-png.flaticon.com/128/14022/14022668.png" alt="likes" className="theme-icon"/> {likes}
                   </span>
                <span onClick={()=> alert("Hello! Welcome to my portpolio-card.")}>
            <img src="https://cdn-icons-png.flaticon.com/128/1827/1827314.png" alt="icon" className="theme-icon"/></span>
            </div>
        </div>
    );
}
export default Portpoliocard;