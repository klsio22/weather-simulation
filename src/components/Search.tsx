import { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Link, useHref } from 'react-router-dom';

export function Search() {
  return (
    <div className='flex flex-col gap-8 items-center'>
      <span className='border-2 border-zinc-700 rounded text-center px-16 py-1  m-4 text-xl'>
        Cidade, UF
      </span>
      <div>
        <ReactLoading
          type={'spokes'}
          color={'#00000'}
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}
