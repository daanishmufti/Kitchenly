import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Get In Touch</h1>
        <p className="contact-sub">Have a recipe to share, a question, or just want to say hi? We'd love to hear from you.</p>
        {sent ? (
          <div className="contact-success">
            <span>🎉</span>
            <p>Thanks for reaching out! We'll get back to you soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Contact
