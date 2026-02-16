// src/components/Contact/components/ContactForm.jsx

import React, { useRef, useEffect } from 'react';
import { HiTrash, HiPaperAirplane } from 'react-icons/hi';
import { FaSpinner } from 'react-icons/fa';
import FormInput from './FormInput';

function ContactForm({
  formData,
  errors,
  status,
  charCount,
  formProgress,
  hasInteracted,
  emailSuggestion,
  focusedField,
  onFieldChange,
  onFieldFocus,
  onFieldBlur,
  onSubmit,
  onClearDraft,
  onAcceptEmailSuggestion
}) {
  const formRef = useRef(null);
  const nameInputRef = useRef(null);

  // Handle form submission with shake animation on error
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = onSubmit(e);

    if (!isValid) {
      formRef.current?.classList.add('shake');
      setTimeout(() => {
        formRef.current?.classList.remove('shake');
      }, 500);
    }
  };

  // Get character counter class
  const getCharCounterClass = () => {
    if (charCount > 900) return 'char-counter danger';
    if (charCount > 800) return 'char-counter warning';
    return 'char-counter';
  };

  return (
    <div className="contact-form-wrapper">
      {/* Form Progress Bar */}
      {hasInteracted && formProgress > 0 && (
        <div className="form-progress-bar">
          <div
            className="form-progress-fill"
            style={{ width: `${formProgress}%` }}
          />
        </div>
      )}

      <div className="form-header">
        <h3 className="form-heading">Send a Message</h3>
        {hasInteracted && formProgress > 0 && formProgress < 100 && (
          <button
            type="button"
            className="clear-draft-btn"
            onClick={onClearDraft}
            title="Clear draft"
            aria-label="Clear draft"
          >
            <HiTrash />
          </button>
        )}
      </div>

      <form
        ref={formRef}
        className="contact-form"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Name Input */}
        <FormInput
          ref={nameInputRef}
          id="name"
          name="name"
          type="text"
          label="Name"
          placeholder="Your full name"
          value={formData.name}
          error={errors.name}
          disabled={status === 'loading'}
          required
          autoComplete="name"
          onChange={onFieldChange}
          onFocus={() => onFieldFocus('name')}
          onBlur={onFieldBlur}
          focused={focusedField === 'name'}
        />

        {/* Email Input */}
        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          value={formData.email}
          error={errors.email}
          disabled={status === 'loading'}
          required
          autoComplete="email"
          onChange={onFieldChange}
          onFocus={() => onFieldFocus('email')}
          onBlur={onFieldBlur}
          focused={focusedField === 'email'}
          suggestion={emailSuggestion}
          onAcceptSuggestion={onAcceptEmailSuggestion}
        />

        {/* Subject Input */}
        <FormInput
          id="subject"
          name="subject"
          type="text"
          label="Subject"
          placeholder="What's this about?"
          value={formData.subject}
          error={errors.subject}
          disabled={status === 'loading'}
          required
          onChange={onFieldChange}
          onFocus={() => onFieldFocus('subject')}
          onBlur={onFieldBlur}
          focused={focusedField === 'subject'}
        />

        {/* Message Textarea */}
        <FormInput
          id="message"
          name="message"
          type="textarea"
          label="Message"
          placeholder="Tell me about your project, opportunity, or just say hi..."
          value={formData.message}
          error={errors.message}
          disabled={status === 'loading'}
          required
          rows={6}
          maxLength={1000}
          onChange={onFieldChange}
          onFocus={() => onFieldFocus('message')}
          onBlur={onFieldBlur}
          focused={focusedField === 'message'}
          charCount={charCount}
          getCharCounterClass={getCharCounterClass}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className={`submit-btn ${status}`}
          disabled={status === 'loading' || formProgress === 0}
          aria-label="Send message"
        >
          {status === 'loading' ? (
            <>
              <FaSpinner className="btn-spinner" />
              Sending...
            </>
          ) : (
            <>
              <HiPaperAirplane className="btn-icon" />
              Send Message
              <span className="keyboard-hint">Ctrl + Enter</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

import PropTypes from 'prop-types';

ContactForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    subject: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
  status: PropTypes.string.isRequired,
  charCount: PropTypes.number.isRequired,
  formProgress: PropTypes.number.isRequired,
  hasInteracted: PropTypes.bool.isRequired,
  emailSuggestion: PropTypes.string,
  focusedField: PropTypes.string,
  onFieldChange: PropTypes.func.isRequired,
  onFieldFocus: PropTypes.func.isRequired,
  onFieldBlur: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClearDraft: PropTypes.func.isRequired,
  onAcceptEmailSuggestion: PropTypes.func.isRequired,
};

export default React.memo(ContactForm);
