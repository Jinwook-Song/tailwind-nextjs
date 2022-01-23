import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='bg-slate-400 py-20 px-8 flex flex-col space-y-5'>
      <div className='bg-white p-6 rounded-lg shadow-2xl'>
        <span className='font-semibold text-3xl'>Select Item</span>
        <div className='flex justify-between my-2'>
          <span className='text-gray-500'>Grey Chair</span>
          <span className='font-semibold'>$19</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-500'>Tooly Table</span>
          <span className='font-semibold'>$8</span>
        </div>
        <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed'>
          <span>Total</span>
          <span className='font-semibold'>$27</span>
        </div>
        <div className='mt-5 bg-blue-500 text-white py-3 text-center rounded-3xl w-3/4 mx-auto'>
          Checkout
        </div>
      </div>
      <div className='bg-white p-10 rounded-lg shadow-2xl'></div>
      <div className='bg-white p-10 rounded-lg shadow-2xl'></div>
      <div className='bg-white p-10 rounded-lg shadow-2xl'></div>
    </div>
  );
};
export default Home;
