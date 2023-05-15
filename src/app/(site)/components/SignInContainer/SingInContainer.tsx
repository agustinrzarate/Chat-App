import React from 'react'
import Form, { InputProps } from '../Form/Form'
import { SignIn, initialStateSignIn } from '../../models/Auth'
import Title from '@/app/components/Title/Title'
import Divider from '@/app/components/Divider/Divider'
import SocialIconButton from '../SocialIconButton/SocialIconButton'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import FooterForm from '../FooterForm/FooterForm'

interface SignInContainerProps {
    toggleVariant: () => void
}

const SignInContainer: React.FC<SignInContainerProps> = ({toggleVariant}) => {

  const INPUTS: {
    [P in keyof SignIn]: InputProps;
  }  = {
    email: {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        textLabel: 'Email',
        inputType: 'text',
        placeholder: 'example@email.com'
    },
    password: {
        textLabel: 'Password',
        inputType: 'text',
        placeholder: 'aE;32s,3'
    }
  }

  return (
  <>
    <Title title=" Sign in to your account"/>
    <div className='mt-7'>
        <div className='flex justify-center'>
          <div className='m-2'>
            <SocialIconButton icon={BsGithub} onClick={() => {}}/>
          </div>
          <div className='m-2'>
            <SocialIconButton icon={BsGoogle} onClick={() => {}}/>
          </div>
        </div>
        <Divider text='or'/>
        <Form<SignIn> defaultValues={initialStateSignIn} onSubmit={() => {}} inputs={INPUTS} submitButtonText='Sign In'/>
        <FooterForm textOne='New to chatt app ?' textTwo='Create an account' toggleVariant={toggleVariant}/>
      </div>
  </> 
  )
}

export default SignInContainer