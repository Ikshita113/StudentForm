import React from 'react';

export default function FormField({ label, name, type = 'text', as, options = [], formik }) {
  const error = formik.touched[name] && formik.errors[name];
  return (
    <div>
      <label>{label}:</label>
      {as === 'textarea' ? (
        <textarea
          name={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          className={error ? 'error' : ''}
        />
      ) : as === 'select' ? (
        <select
          name={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          className={error ? 'error' : ''}
        >
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          className={error ? 'error' : ''}
        />
      )}
      {error && <div className="error-message">{formik.errors[name]}</div>}
    </div>
  );
}
