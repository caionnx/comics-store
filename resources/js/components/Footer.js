import React from 'react'

const Footer = (props) => (
  <div className='l-content-container u-text-center'>
    <div className='c-footer'>
      Made with
      <svg className='c-footer__badge' xmlns='http://www.w3.org/2000/svg' placeholder='React' width='20' height='20' viewBox='0 0 220 196'>
        <path fill='none' stroke='#6FCFF0' strokeWidth='7' strokeMiterlimit='10' d='M110 78.244c10.91 0 19.756 8.845 19.756 19.756S120.91 117.756 110 117.756 90.244 108.91 90.244 98 99.09 78.244 110 78.244zm0-19.756c57.283 0 103.72 17.69 103.72 39.512S167.283 137.512 110 137.512 6.28 119.822 6.28 98 52.717 58.488 110 58.488zm34.22 59.268c-28.642 49.608-67.18 80.98-86.08 70.068s-11-59.972 17.642-109.58 67.18-80.98 86.078-70.068 11 59.972-17.64 109.58zm0-39.512c28.64 49.608 36.54 98.67 17.64 109.58s-57.437-20.46-86.08-70.068-36.54-98.67-17.64-109.58 57.437 20.46 86.08 70.068z' />
      </svg>
      by <a className='c-footer__link' target='_blank' href='https://github.com/caionnx'>Caio Nunes</a>
    </div>
  </div>
)

export default Footer
