import CarouselPosts from '@/components/CarouselPosts';
import FeaturedPosts from '@/components/FeaturedPosts';
import Hero from '@/components/Hero';
import React from 'react';



export default function Home() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Server Component*/}
      <FeaturedPosts />
      {/* @ts-expect-error Server Component*/}
      <CarouselPosts />
    </>
  );
}

