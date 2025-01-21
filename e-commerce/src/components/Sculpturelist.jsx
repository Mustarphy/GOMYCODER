import { useState } from 'react';
import { sculptureList } from './data';

export default function Sculpturelist() {
  const [index, setIndex] = useState (0);

  function handClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <section className='container mx-10'>
    <><button className='bg-black shadow-sm p-1 text-white rounded' onClick={handClick}>
        NEXT
    </button>
    <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
        </h2>
        <h3>({index + 1} of {Sculpturelist.length -1})</h3>
        <div className='bg-slate-300 w-80 text-center border border-r-slate-800 shadow-slate-950'>
        < img className='size-full' src={sculpture.url} alt={sculpture.alt} />
        <h3 className='font-medium p-5'>{sculpture.description}</h3>
        </div>
    </>
    </section>
  );
}
