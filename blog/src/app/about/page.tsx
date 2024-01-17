import Hero from '@/components/Hero';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Ina 스킬 소개'
}

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2'
export default function Aboutpage() {
  return (
    <>
      <Hero />
      <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>개발을 사랑하는 프론트엔드 개발자</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React, Javascript<br/>
        Git, Clean Code<br/>
        VS Code</p>
      </section>
    </>
  );
}

