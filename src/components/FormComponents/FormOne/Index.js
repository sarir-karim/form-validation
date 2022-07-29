import React, { useState } from 'react'
import './form.css';
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'

const Index = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm(){
    setIsSubmitted(true)
  }
  return (
        <>
        <div className="form-container">
          <div className="close-btn">X</div>
          <div className="form-content-left">
            <img src="https://img.freepik.com/premium-photo/smiling-male-cosmonaut-spacesuit-helmet-pointing-with-hand-right-white-background_325364-727.jpg" alt="" className="form-img" />
          </div>
        {!isSubmitted ? (<FormSignup submitForm = {submitForm} />) : (<FormSuccess/>)}

        </div>
        
        </>
  )
}

export default Index