'use client'

import { Post } from '@/service/posts';
import React, { useState } from 'react';
import PostsGrid from './PostsGrid';
import Categories from './Categories';

type Props = {
  posts: Post[];
  categories: string[];
}
const ALL_POST = 'All Post'
export default function FilterablePosts({posts, categories} : Props) {
  const [selected, setSelected] = useState(ALL_POST);
  const filtered = selected === ALL_POST ? posts : posts.filter(post => post.category === selected)

  return (
    <section className='m-4 p-4'>
      <Categories 
        categories={[ALL_POST, ...categories]} 
        selected={selected} 
        onClick={(selected)=> setSelected(selected)}
      />
      <PostsGrid posts={filtered}/>
    </section>
  );
}

