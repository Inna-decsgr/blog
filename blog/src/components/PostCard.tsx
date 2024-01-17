import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {post : Post}

export default function PostCard({post: {title, description, date, category, path}} : Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='rounded-md overflow-hidden shadow-md hover:shadow-xl'>
        <Image
          className='w-full'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className='flex flex-col items-center p-4'>
          <time className='self-end text-gray-700'>{date.toString()}</time>
          <h3 className='w-full truncate text-center text-lg font-bold'>{title}</h3>
          <p className='w-full truncate text-center'>{description}</p>
          <span className='text-sm text-gray-700 font-bold rounded-lg bg-yellow-300 px-4 my-4'>{category}</span>
        </div>
      </article>
    </Link>
  );
}

