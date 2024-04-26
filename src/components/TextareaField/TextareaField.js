import React from 'react';

const TextareaField = ({ placeholder, fieldName }) => {
  return (
    <textarea
      className="inputField"
      placeholder={placeholder}
      name={fieldName}
      rows={3}
    ></textarea>
  );
};

export default TextareaField;
