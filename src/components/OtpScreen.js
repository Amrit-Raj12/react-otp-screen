import React, { useState } from 'react'

const OtpScreen = () => {
    const[otp, setOtp]=useState(new Array(6).fill(""));

    const handleChange=((element, index)=>{
        if(isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx)=>(idx===index)?element.value:d)]);

        // Focus next input
        if(element.nextSibling){
            element.nextSibling.focus();
        }
    });

    // Delete and navigate
   function handleKeyPress(event){
       if(event.target.id>1 && event.which===37){
        console.log(event.target.id-1)
        document.getElementById(event.target.id-1).focus();
       } else if(event.target.id<6 && event.which===39){
            let e=parseInt(event.target.id)+1;
            console.log(e)
            document.getElementById(e).focus();
       } else if(event.target.id>1 && event.which===8){
        console.log(event.target.id-1)
        if(event.target.id)
        document.getElementById(event.target.id).value="";
        document.getElementById(event.target.id-1).focus();
        
        document.getElementById(event.target.id-1).value="";
        
       }
   }
    return (
        <div className="row">
        <div className="col text-center">
            <h2>Phone Varification</h2>
            <hr/>
            <p>Enter the OTP you received on +91 XX-XXXX-XXXX</p>
            
            
            {otp.map((data, index) => {
                
                 let id=index+1;
                return (

                  <>
                  
                    <input
                        className="otp-field"
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={e => handleChange(e.target, index)}
                        onFocus={e => e.target.select()}      
                        onKeyDown={handleKeyPress}
                        id={id}
                    />
                    
                    </>
                );
              
            })}
            
            <br/><br/>
            <div className="ch-rd">
                <a href="/">Change Number</a>
                <a href="/" className="rd">Resend OTP</a>
            </div>

            <br/>
            <p>OTP Entered - {otp.join("")}</p>
            <p>
                <button
                    className="btn btn-secondary mr-2"
                    onClick={e => setOtp([...otp.map(v => "")])}
                >
                    Clear
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                    className="btn btn-success"
                    onClick={e =>
                        alert("Entered OTP is " + otp.join(""))
                    }
                >
                    Verify Phone Number
                </button>
            </p>
        </div>
    </div>
    )
}

export default OtpScreen
