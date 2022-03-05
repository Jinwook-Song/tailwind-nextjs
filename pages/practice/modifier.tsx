import { NextPage } from 'next';

const Modifier: NextPage = () => {
  return (
    <div className='flex flex-col space-y-2 p-5'>
      <details className='select-none open:text-white open:bg-indigo-400'>
        <summary className=' cursor-pointer'>What is my fav. food.</summary>
        <span className='selection:bg-indigo-400 selection:text-white'>
          pizza
        </span>
      </details>
      <ul className='list-decimal marker:text-amber-600'>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </ul>
      <input
        type='file'
        className='file:border-0 file:rounded-lg file:px-5 file:bg-purple-400 file:hover:bg-indigo-400 file:text-white file: cursor-pointer'
      />
      <p className='first-letter:text-8xl first-letter:active:text-rose-500 first-line:bg-lime-300'>
        nomad coder, nico !
      </p>
    </div>
  );
};

export default Modifier;
