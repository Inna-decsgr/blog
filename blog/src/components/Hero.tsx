import React from 'react';
import profileImage from '../../public/images/profile.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='rounded-full mx-auto'
        src={profileImage}
        alt='Picture of Author'
        width={250}
        height={250}
        priority
      />
      <h2 className='text-3xl font-bold mt-2'>Hi, I'm Ina</h2>
      <h3 className='text-xl font-semibold'>Frontend Engineer</h3>
      <p>풀스택 개발자를 꿈꾸는 꿈나무 개발자</p>
      <Link href='/contact'>
        <button className='bg-green-500 font-bold rounded-xl py-1 px-4 mt-4'>Contact me</button>
      </Link>
    </section>
  );
}

