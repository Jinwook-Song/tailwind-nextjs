import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../components/layout';

const Chat: NextPage = () => {
  return (
    <Layout title='채팅' hasTabBar>
      <div className='divide-y-[1px]'>
        {[...Array(20)].map((_, idx) => (
          <Link href={`/chats/${idx}`} key={idx}>
            <a className='px-4 flex cursor-pointer py-3 items-center space-x-3'>
              <div className='w-12 aspect-square rounded-full bg-slate-300' />
              <div>
                <p className='text-base text-gray-700'>Steve Jebs</p>
                <p className='text-sm text-gray-500'>
                  See you tomorrow in the corner at 2pm!
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chat;
