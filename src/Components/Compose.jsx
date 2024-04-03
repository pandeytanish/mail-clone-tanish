import React from 'react'
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export default function Compose() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
  
    const handleSendEmail = async () => {
      const emailData = {
        to: to,
        subject: subject,
        body: body
      };
      let token = localStorage.getItem("Token")
      
      try {
        const response = await fetch ("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            raw: btoa(`To: ${emailData.to}\nSubject: ${emailData.subject}\n\n${emailData.body}`)
          })
        });
        const data = await response.json();
        console.log('Email sent:', data);
        // Reset the form fields after sending email
        setTo('');
        setSubject('');
        setBody('');
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };
  return (
    <div>
            <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <button onClick={closeModal}>close</button>
        <div className="compose-container">
      <div className="compose-header">
        <h2>New Message</h2>
        <button onClick={handleSendEmail}>Send</button>
      </div>
      <div className="compose-form">
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
    </div>
      </Modal>
    </div>
    </div>
  )
}