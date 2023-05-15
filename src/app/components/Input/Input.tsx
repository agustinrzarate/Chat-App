import clsx from "clsx";
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  textLabel: string;
  inputType: string;
  placeholder: string;
  error?: string;
  required?: boolean
  pattern?: RegExp
  register: UseFormRegister<FieldValues>
}

const Input: React.FC<InputProps> = ({
  id,
  textLabel,
  inputType,
  placeholder,
  required,
  register,
  error,
  pattern
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={clsx(
          "block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600",
          error && "focus-within:border-red-600 focus-within:ring-red-600"
        )}
      >
        <span className="text-xs font-medium text-gray-700">{textLabel}</span>
        <input
          type={inputType}
          id={id}
          placeholder={placeholder}
          className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          { ...register(id, { required, pattern })}
        />
      </label>
      <span className="text-red-500 text-xs h-4 pl-3">{ error }</span>
    </div>
  );
};

export default Input;
