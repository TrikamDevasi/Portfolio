// src/components/Contact/components/StatusMessage.jsx

import React from 'react';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';

function StatusMessage({ status }) {
  if (status === 'success') {
    return (
      <div className="status-message success">
        <div className="status-icon">
          <HiCheckCircle />
        </div>
        <div className="status-content">
          <h4>Message Sent Successfully!</h4>
          <p>Thanks for reaching out. I'll get back to you soon!</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="status-message error">
        <div className="status-icon">
          <HiXCircle />
        </div>
        <div className="status-content">
          <h4>Oops! Something went wrong</h4>
          <p>
            Please email me directly at{' '}
            <a href="mailto:trikam.devasi.cg@gmail.com">trikam.devasi.cg@gmail.com</a>
          </p>
        </div>
      </div>
    );
  }

  return null;
}

import PropTypes from 'prop-types';

StatusMessage.propTypes = {
  status: PropTypes.string.isRequired,
};

export default React.memo(StatusMessage);
