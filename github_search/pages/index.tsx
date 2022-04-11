import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image';
import { Card } from '../components/card';

type User = {
  login: string,
  name: string,
}

const Home = ({user}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='w-full h-full'>
      <div className='container max-w-6xl h-screen mx-auto flex flex-col justify-evenly items-center'>
        <div className='container mx-auto w-fit flex flex-col justify-between items-center'>
          <Image src={'/icons/github.png'} alt='Logo do GitHub' width={120} height={120} />
          <h1 className='text-4xl font-bold text-[#2B3640]'>GitHub Search´s</h1>
        </div>

        <div className=' w-full h-1/6'>
          <form onSubmit={() => { }} className='flex flex-col h-full justify-between w-full items-center'>
            <input type='search' className='w-5/12 h-14 rounded-2xl border-2 border-[#2B3640] text-[#2B3640] text-center text-lg focus:outline-none search-cancel-button' placeholder='...' />
            <button type='submit' className='w-5/12 h-14 rounded-2xl border-2 border-[#2B3640] text-[#2b3640] text-center text-xl font-medium button-search' >Search</button>
          </form>
        </div>
      </div>
      <div className='container max-w-6xl h-full mx-auto flex flex-col justify-evenly items-center'>

      </div>

    </div>
  )
}
export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const resp = await fetch('https://api.github.com/users/JoVi0li');
  const user = await resp.json();
  console.log(user)

  return {
    props: {
      user: user
    },
    revalidate: 10
  }
}