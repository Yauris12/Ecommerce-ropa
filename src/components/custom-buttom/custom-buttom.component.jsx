import React from 'react'
import './custom-buttom.styles.scss'
const CustomButtom = ({ children, isGoogleSignIn, ...otherProps }) => (
  // <button
  //   className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
  //   {...otherProps}
  // >
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)
export default CustomButtom
