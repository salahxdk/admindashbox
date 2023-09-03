// pages/faq.js

import { Space } from "lucide-react"

export default function Help() {

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="spacer">
      </div>
      <div className="faq-section">
        <h2>Account</h2>
        
        <div className="faq">
          <h3>How do I reset my password?</h3>
          <p>You can reset your password by going to your account settings and clicking the "Reset Password" button. You'll be sent an email with instructions to create a new password.</p> 
        </div>
        
        <div className="faq">
          <h3>How do I update my email address?</h3>  
          <p>To update your email, go to your account settings and enter your new email in the email field. Be sure to click save once you've entered the new email.</p>
        </div>
        
      </div>
      
      <div className="faq-section">
        <h2>Payments</h2>  
        
        <div className="faq">
          <h3>What payment methods do you accept?</h3>
          <p>We accept Visa, Mastercard, American Express and PayPal. To update your payment method, go to your billing settings.</p>
        </div>
        
      </div>
      
    </div>
  )

}