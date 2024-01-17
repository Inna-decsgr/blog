import React from 'react';

type Props = {
  categories: string[];
  selected: string;
  onClick: (category:string) => void
}

export default function Categories({categories, selected, onClick} : Props) {
  return (
    <section>
      <h2 className='text-xl font-bold pb-2'>Category</h2>
      <ul className='flex gap-4 mb-8'>
        {categories.map(category => 
        <li
          className={`inline-block cursor-pointer hover:text-green-500 ${category === selected && 'text-green-600 font-bold border-b border-green-600 pb-1'}`}
          key={category} 
          onClick={()=> onClick(category)
        }>
          {category}
        </li>)}
      </ul>
    </section>
  );
}

