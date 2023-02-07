import { Link } from "react-router-dom";

export function ButtonBack() {
  return (
    <div className='text-center mt-5 text-white font-medium text-lg'>
      <Link to={'/'}>
        <button className='border rounded border-zinc-600 p-2 bg-slate-500 '>
          Fazer uma nova consulta
        </button>
      </Link>
    </div>
  );
}
