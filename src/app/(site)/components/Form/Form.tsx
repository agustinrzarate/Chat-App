import Button from '@/app/components/Button/Button';
import Input from '@/app/components/Input/Input'
import React, { FC, useEffect } from 'react'
import { FieldValues, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form'

export interface InputProps {
    textLabel: string,
    inputType:'text' | 'email' | 'password' | 'number',
    placeholder: string
    pattern?: RegExp
} 

interface FormProps<TForm> {
  submitButtonText: string
  defaultValues: TForm;
  onSubmit: (data: TForm) => void;
  inputs: {
    [P in keyof TForm]: InputProps;
  };
}

const Form = <TForm extends {}> ({ defaultValues, onSubmit, inputs, submitButtonText }: FormProps<TForm>) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({defaultValues });

  const handleSubmitData: SubmitHandler<TForm> = (data) => { onSubmit(data) };

  useEffect(() => {
    console.log(errors)
  }, [errors])
  
  return (
    <form onSubmit={handleSubmit(handleSubmitData as SubmitHandler<FieldValues>)} className='mt-5'>
      {Object.keys(inputs).map((key) => (
        <div key={key} className='mb-5'>
          <Input
          pattern={inputs[key as keyof TForm].pattern}
          id={key}
          textLabel={inputs[key as keyof TForm].textLabel}
          inputType={inputs[key as keyof TForm].inputType}
          placeholder={inputs[key as keyof TForm].placeholder}
          register={register  as UseFormRegister<FieldValues>}
          error={errors[key]?  errors[key]?.type === 'required'? 'Required' : `Invalid ${inputs[key as keyof TForm].textLabel}` : '' }
          required
        />
        </div>
        
      ))}
      <Button fullWidth type="submit">
        {submitButtonText}
      </Button>
    </form>
  );
};

export default Form;