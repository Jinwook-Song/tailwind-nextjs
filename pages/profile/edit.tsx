import { NextPage } from 'next';

const EditProfile: NextPage = () => {
  return (
    <div className='px-4 py-10 space-y-4'>
      <div className='flex items-center space-x-3'>
        <div className='w-14 aspect-square rounded-full bg-slate-300' />
        <label
          htmlFor='photo'
          className='cursor-pointer px-2 py-3 text-gray-700 border border-r-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
        >
          Change
          <input type='file' id='photo' accept='image/*' className='hidden' />
        </label>
      </div>
      <div className='space-y-1'>
        <label htmlFor='email' className='text-sm font-medium text-gray-700'>
          Email address
        </label>
        <input
          id='email'
          type='email'
          className='appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500'
          required
        />
      </div>
      <div className='space-y-1'>
        <label htmlFor='phone' className='text-sm font-medium text-gray-700'>
          Phone number
        </label>
        <div className='flex rounded-md shadow-sm'>
          <span className='flex justify-center items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm'>
            +82
          </span>
          <input
            id='input'
            type='number'
            className='appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500'
            required
          />
        </div>
      </div>
      <button className='w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none'>
        Update Profile
      </button>
    </div>
  );
};

export default EditProfile;
