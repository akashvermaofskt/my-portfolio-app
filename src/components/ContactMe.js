import React from 'react';

const ContactMe = () => {
  return (
    <div className="container" id="cm">
        <div className="row">
            <div className="col text-center">
                <form className="bg-dark" id="mail-me" >
                    <h3>
                        Contact Me:
                    </h3>
                    <div className="field">
                        <label><input name="name" type="text" placeholder="Name"/></label>
                    </div>
                    <div className="field">
                        <label><input name="email" type="text" placeholder="Email Address"/></label>
                    </div>
                    <div className="field">
                        <label> <input name="phone" type="number" placeholder="Mobile Number"/></label>
                    </div>
                    <div className="field">
                        <label><textarea name="msg"  placeholder="Message"></textarea></label>
                    </div>
                    <button className="btn btn-light">Submit</button>
                </form>
            </div>
            <div className="col" id="ct" >
                <p className="text-center align-middle" >Want to get in touch with me? Be it to request more info about myself or my experience, random questions about the universe and the meaning of life.. just feel free to drop me a line anytime.
                    I promise to reply A.S.A.P.
                <br/>Note: No spamming! :) 
                </p>
            </div>
        </div>
    </div>
  );
}

export default ContactMe;
