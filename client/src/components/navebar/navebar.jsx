import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import './navebar.css'

const Navebar = () => {
  return (
    <div className='container'>
        <div className='wrapper'>
            <Link className='left'>
                Kitchenly
            </Link>
            <ul className='center'>
                <li>
                  <Link to='/' className='listitem'>Home</Link>
                </li>
                <li>
                    <Link to='/about' className='listitem'>About</Link>
                </li>
                <li>
                    <Link to='/' className='listitem'>Contact</Link>
                </li>
            </ul>
            <div className='right'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='social-link'>
                    <FaFacebook className='social-icon' />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='social-link'>
                    <FaInstagram className='social-icon' />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className='social-link'>
                    <FaYoutube className='social-icon' />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navebar