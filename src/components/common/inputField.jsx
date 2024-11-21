import { forwardRef } from 'react';

const InputField = forwardRef(
  (
    {
      label,
      type = 'text',
      name,
      value,
      onChange,
      className = '',
      placeholder = '',
      accept,
      required = false,
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          accept={accept}
          required={required}
          placeholder={placeholder}
          className={
            className === ''
              ? 'w-full px-4 py-2.5 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
              : className
          }
        />
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
