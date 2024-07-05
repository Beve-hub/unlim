import { useEffect, useState } from 'react';
import axios from 'axios';

interface UserData {
  id: number;
  Image_1: string; 
  SKU: string;
  Name: string;
  Cost_Price: number;
  Quantity: number;
  Title: string;
  height: number;
  weight: number;
  Description: string;
}


const MorrisCostumes = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [storedData, setStoredData] = useState<UserData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    const transactionsPerPage = 10;
    const totalPages = Math.ceil(storedData.length / transactionsPerPage);
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = storedData.slice(indexOfFirstTransaction, indexOfLastTransaction);
  
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get<UserData[]>('http://3.88.1.181:8000/products/public/catalog?supplier=Morris Costumes');
          console.log(response.data); // Debugging: log response data
          setStoredData(response.data);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            setError(error.message);
          } else {
            setError('An unexpected error occurred: ' + error);
          }
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error: {error}</p>;
    }
    if (storedData.length === 0) {
      return <p>No transactions found.</p>;
    }
  
    return (
      <div className='grid justify-center pt-[10rem] w-screen overflow-x-auto overflow-y-hidden'>
        <p className='font-bold text-lg bg-[--bg-color] text-[--text-extra] rounded-lg px-2 py-2 w-full lg:w-[70rem]'>Department List</p>
        <table className="table-auto w-full lg:w-[70rem] items-center mt-2 bg-[--layer-color] rounded-lg p-4">
          <thead className='border-b-2'>
            <tr>
              <th className="px-4 py-2">
              <label htmlFor='check' className='flex gap-2'>
                  <input type='checkbox' name='check' />
                  <span className='ml-2'>S/N</span>
                </label>
              </th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">SKU</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>            
              <th className="px-4 py-2">Cost Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Height</th>
              <th className="px-4 py-2">Weight</th>
            </tr>
          </thead>
          <tbody className='border-t-2 mt-4'>
            {currentTransactions.map((transaction, index) => (
              <tr key={transaction.id} className="text-center">
                <td className="px-4 py-2">
                <label htmlFor='check' className='flex gap-2'>
                    <input type='checkbox' name='check' />
                    <span className='px-2'>
                      {index + 1 + indexOfFirstTransaction}
                    </span>
                  </label>
                </td>
                <td className="px-4 py-2">
                  <img 
                    src={transaction.Image_1} 
                    alt=''
                    className="h-12 w-12 object-cover" 
                    onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/150')}
                  />
                 
                </td>
                <td className="px-4 py-2">{transaction.SKU}</td>
                <td className="px-4 py-2 text-start">{transaction.Name}</td>
                <td className="px-4 py-2 text-start">{transaction.Title}</td>
                <td className="px-4 py-2 text-start">{transaction.Description}</td>
                
                <td className="px-4 py-2">${transaction.Cost_Price}</td>
                <td className="px-4 py-2">{transaction.Quantity}</td>
                <td className="px-4 py-2">{transaction.height}</td>
                <td className="px-4 py-2">{transaction.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-center mt-4'>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-2 py-1 mx-1 text-sm ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };

export default MorrisCostumes
