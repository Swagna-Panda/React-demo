// Contact.js
import React, { useContext } from 'react';
import { AppContext } from '../Services/usecontext';

function Contact() {
  const { contentData } = useContext(AppContext);

  return (
    <div>
      <h2>Learning Resources</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {contentData.map((content) => (
          <div key={content.id} style={{ border: '1px solid #ccc', padding: '10px', width: '250px' }}>
            <img src={content.image} alt={content.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{content.title}</h3>
            <a href={content.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
