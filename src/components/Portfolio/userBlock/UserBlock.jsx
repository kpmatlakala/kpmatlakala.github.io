import React from 'react';
import "./UserBlock.css";
// import { user } from "/assets/react.svg"



function UserBlock() {
  return (
    <>
    <div className="userProfile">
        <div className='userIcon'>               
            {
                // user ? ( <img src={user}/>
                // ) : 
                ( 
                    <div className="icn">
                        <i className="fa fa-user" style={{ fontSize: 32}}/>
                    </div> 
                )
            }                               
        </div>                  
        <div className='nameNemail'> 
            <div>
                KP Matlakala
            </div>  
            <small>             
                matlakalakabelo1@gmail.com
            </small>
            
            {/* <div className="job-avail-status">
                Open to new opportunities
            </div>  */}
        </div> 
    </div> 
    
    </> 
  )
}

export default UserBlock

