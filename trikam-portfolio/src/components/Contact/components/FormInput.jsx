// src/components/Contact/components/FormInput.jsx

import React, { forwardRef } from 'react';
import { HiUser, HiMail, HiBriefcase, HiLightBulb } from 'react-icons/hi';

const iconMap = {
  name: HiUser,
  email: HiMail,
  subject: HiBriefcase
};

const FormInput = forwardRef(({
  id,
  name,
  type = 'text',
  label,
  placeholder,
  value,
  error,
  disabled,
  required,
  autoComplete,
  rows,
  maxLength,
  onChange,
  onFocus,
  onBlur,
  focused,
  suggestion,
  onAcceptSuggestion,
  charCount,
  getCharCounterClass
}, ref) => {
  const IconComponent = iconMap[name];
  const isTextarea = type === 'textarea';

  return (
    <div className={`form-group ${error ? 'error' : ''} ${focused ? 'focused' : ''}`}>
      <label htmlFor={id} className="form-label">
        {label} {required && <span className="required">*</span>}
      </label>

      {isTextarea ? (
        <>
          <textarea
            id={id}
            name={name}
            className="form-textarea"
            placeholder={placeholder}
            rows={rows}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            maxLength={maxLength}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${id}-error` : undefined}
          />
          <div className="textarea-footer">
            {error && <span id={`${id}-error`} className="error-message">{error}</span>}
            {charCount !== undefined && (
              <span className={getCharCounterClass()}>{charCount}/{maxLength}</span>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="input-wrapper">
            {IconComponent && (
              <span className="input-icon">
                <IconComponent />
              </span>
            )}
            <input
              ref={ref}
              id={id}
              type={type}
              name={name}
              className="form-input"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              disabled={disabled}
              autoComplete={autoComplete}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? `${id}-error` : undefined}
            />
          </div>
          {error && <span id={`${id}-error`} className="error-message">{error}</span>}
          {suggestion && !error && (
            <button
              type="button"
              className="email-suggestion"
              onClick={onAcceptSuggestion}
              aria-label={`Use suggested email: ${suggestion}`}
            >
              <HiLightBulb style={{ fontSize: '1rem' }} />
              Did you mean <strong>{suggestion}</strong>? Click to use
            </button>
          )}
        </>
      )}
    </div>
  );
});

import PropTypes from 'prop-types';

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  focused: PropTypes.bool,
  suggestion: PropTypes.string,
  onAcceptSuggestion: PropTypes.func,
  charCount: PropTypes.number,
  getCharCounterClass: PropTypes.func,
};

FormInput.displayName = 'FormInput';

export default React.memo(FormInput);
