import React from "react";
import './Home.css';
import pic from '../images/pic.png';

export default function Home(){
    return(
        <div className="home">

            <div className="label">
            <h2>Hello.</h2>
            <h4>Shloka Mahesheka this side!</h4>
            </div>
           

            <div className="hollow circle">
                <img src={pic}/>
                <p className="first">Software Developer</p>
                <p className="second">Web Developer</p>
                <p className="third">Java Developer</p>
                <p className="fourth">Enthusiastic Coder</p>
                
            </div>

           
        </div>
    )
}