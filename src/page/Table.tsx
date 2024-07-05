import {useState} from 'react'
import FragranceX from './screen/FragranceX';
import FragranceNet from './screen/FragranceNet';
import MorrisCostumes from './screen/MorrisCostumes';



const Table = () => {
  const [page, setPage] = useState<string | null>(null);

  return (
    <div className='mx-auto p-4 '>
       <div className="fixed top-[4rem] z-10 bg-white w-screen  ">
       <div className="flex justify-start space-x-4 mb-4 p-4 ">
       <button
         className='bg-blue-500 text-white px-4 py-2 rounded'
        onClick={() => setPage('frangX')}
        >
          FragranceX
        </button>
        <button
         className='bg-blue-500 text-white px-4 py-2 rounded'
        onClick={() => setPage('frangN')}
        >
          FragranceNet
        </button>
        <button
         className='bg-blue-500 text-white px-4 py-2 rounded'
        onClick={() => setPage('morris')}
        >
          Morris Costumes
        </button>
       </div>
        
      </div>

      <div>
        {page === 'frangX' && <FragranceX/>}
        {page === 'frangN' && <FragranceNet/>}
        {page === 'morris' && <MorrisCostumes/>}
      </div>
    </div>
  )
}

export default Table
