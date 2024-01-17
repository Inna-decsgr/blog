import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

export const metadata:Metadata = {
  title: 'Contact Me',
  description: 'Ina에게 메일 보내기'
}

const LINKS = [
  {icon:<AiFillGithub />, url:'https://github.com/Inna-decsgr'},
  {icon:<AiFillLinkedin />, url:'https://www.linkedin.com/'}
]
export default function Contactpage() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
      <p>anjgkwl27@gmail.com</p>
      <ul className='flex gap-4 my-2 mb-8'>
        {LINKS.map((link, index) =>
          <a 
            key={index}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className='text-5xl hover:text-yellow-400'
          >
            {link.icon}
          </a>
        )}
      </ul>
      <h2 className='text-3xl font-bold'>Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}

