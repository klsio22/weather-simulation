import { Link } from 'react-router-dom';

export function Button() {
  return (
    <div className='bg-slate-800 py-3 px-5 text-white font-extrabold'>
      <Link to='/previsao-do-tempo'>
        <button>Procurar</button>
      </Link>
    </div>
  );
}
