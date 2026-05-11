import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import './navebar.css'

const Navebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  };

  return (
    <div className='container'>
        <div className='wrapper'>
            <Link className='left' to='/'>
                Kitchenly
            </Link>
            <ul className='center'>
                <li>
                  <a href='#' className='listitem' onClick={(e) => { e.preventDefault(); if (location.pathname === '/') { window.scrollTo({ top: 0, behavior: 'smooth' }); } else { navigate('/'); } }}>Home</a>
                </li>
                <li>
                    <a href='#about' className='listitem' onClick={scrollTo('about')}>About</a>
                </li>
                <li>
                    <a href='#contact' className='listitem' onClick={scrollTo('contact')}>Contact</a>
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