import React from 'react';

export default function CheckboxGroup({ label, name, options, formik }) {
  const error = formik.touched[name] && formik.errors[name];
  return (
    <div>
      <label>{label}:</label>
      <div className="inline">
        {options.map((opt) => (
          <label key={opt}>
            <input
              type="checkbox"
              name={name}
              value={opt}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values[name].includes(opt)}
            />{' '}
            {opt}
          </label>
        ))}
      </div>
      {error && <div className="error-message">{formik.errors[name]}</div>}
    </div>
  );
}
