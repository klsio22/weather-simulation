import { Button } from "../components/Butoon";

export function Home() {

  function searchForecast(){
    
  }


  return (
    <div>
      <h2 className='text-4xl font-medium mb-5'>Previsão do tempo</h2>

      <div className='flex items-center justify-center flex-col gap-4'>
        <div className=''>
          <input
            type='text'
            className='border border-gray-700 rounded px-6 h-12 text-center'
            placeholder='Busque por cidade'
          />
        </div>
        <Button/>
      </div>
    </div>
  );
}
