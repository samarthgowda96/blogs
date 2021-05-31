import react from'react';
import './contact.css'

const Contact=()=>{
    return(
        <div className ="contact">
            <div className="contactWrapper">
                <span className="title">Reach me out here.. </span>
                <br></br>
                <div className='container'>
                <span className="subtitle">Email:</span> <span>sg37025p@pace.edu</span>
                <br></br>
                <span className="subtitle">Phone No:</span> <span>+16197634640</span>
                <br></br>
                <span className="subtitle">LinkedIn:</span><a href="https://www.linkedin.com/in/samarth-gowda96/"> Check out my profile</a>
                </div>
                

            </div>
        </div>
    )

}


export default Contact;