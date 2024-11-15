import React from 'react'

interface ContactProps {
    isMobile: boolean;
  }

function Contact({ isMobile }: ContactProps): JSX.Element  {
  return (
    <div>Contact</div>
  )
}

export default Contact;