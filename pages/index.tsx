import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='dark bg-slate-400 py-20 px-8 lg:place-content-center grid md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-5 min-h-screen'>
      {/* firt card */}
      <div className='bg-white dark:bg-slate-500 p-6 flex flex-col justify-between rounded-lg shadow-2xl'>
        <span className='font-semibold text-3xl'>Select Item</span>
        <ul>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className='flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-50 first:bg-teal-50 last:bg-amber-50'
            >
              <span className='text-gray-500'>Grey Chair</span>
              <span className='font-semibold'>$19</span>
            </div>
          ))}
        </ul>
        <ul className='space-y-2'>
          {['a', 'b', 'c', ''].map((element, idx) => (
            <div key={idx}>
              <li className='bg-red-500 empty:hidden'>{element}</li>
            </div>
          ))}
        </ul>
        <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed'>
          <span>Total</span>
          <span className='font-semibold'>$27</span>
        </div>
        <button
          className='block mt-5 bg-blue-500 text-white p-3 text-center rounded-3xl w-3/4 mx-auto hover:bg-teal-500 hover:text-black
          active:bg-yellow-500 focus:bg-red-500'
        >
          Checkout
        </button>
      </div>
      {/* second card */}
      <div className='bg-white overflow-hidden rounded-lg shadow-2xl group'>
        <div className='bg-blue-500 portrait:bg-green-500 landscape:bg-yellow-500 p-6 pb-14 lg:pb-32'>
          <span className='text-white text-2xl'>Profile</span>
        </div>
        <div className='rounded-3xl p-6 bg-white relative -top-5'>
          <div className='flex relative -top-16 items-end justify-between'>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Orders</span>
              <span className='font-medium'>340</span>
            </div>
            <div className='h-24 w-24 bg-pink-200 rounded-full group-hover:bg-pink-500' />
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Spent</span>
              <span className='font-medium'>$340</span>
            </div>
          </div>
          <div className='relative  flex flex-col items-center -mt-10 -mb-5'>
            <span className='text-lg font-medium'>Jinwook Song</span>
            <span className='text-sm text-gray-500'>Seoul, Korea</span>
          </div>
        </div>
      </div>
      {/* third card */}
      <div className='bg-white p-6 rounded-lg shadow-2xl md:col-span-2 lg:col-span-1'>
        <div className='flex mb-5 justify-between items-center'>
          <span>&larr;</span>
          <div className='space-x-3'>
            <span>⭐️ 4.9</span>
            <span className='shadow-xl p-2 rounded-md'>💖</span>
          </div>
        </div>
        <div className='bg-zinc-400 h-72 mb-5' />
        <div className='flex flex-col'>
          <span className='font-medium text-xl'>Swoon Lounge</span>
          <span className='text-xs text-gray-500'>Chair</span>
          <div className='mt-3 mb-5 flex justify-between items-center'>
            <div className='space-x-2'>
              <button className='w-5 h-5 focus:scale-90 rounded-full bg-yellow-500 ring-opacity-50 focus:ring-2 ring-offset-1 ring-yellow-500 transition' />
              <button className='w-5 h-5 focus:scale-90 rounded-full bg-indigo-500 ring-opacity-50 focus:ring-2 ring-offset-1 ring-indigo-500 transition' />
              <button className='w-5 h-5 focus:scale-90 rounded-full bg-teal-500 ring-opacity-50 focus:ring-2 ring-offset-1 ring-teal-500 transition' />
            </div>
            <div className='flex items-center space-x-5'>
              <button className='rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500'>
                -
              </button>
              <span>1</span>
              <button className='rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500'>
                +
              </button>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <span className='font-medium text-2xl'>$450</span>
            <button className='bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
