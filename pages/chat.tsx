import { NextPage } from 'next';

const Chat: NextPage = () => {
  return (
    <div className='py-10 divide-y-[1px]'>
      {[...Array(5)].map((_, idx) => (
        <div
          key={idx}
          className='px-4 flex cursor-pointer py-3 items-center space-x-3'
        >
          <div className='w-12 aspect-square rounded-full bg-slate-300' />
          <div>
            <p className='text-base text-gray-700'>Steve Jebs</p>
            <p className='text-sm text-gray-500'>
              See you tomorrow in the corner at 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
