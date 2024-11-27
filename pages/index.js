import Head from 'next/head';
import Blogs from '../Component/Blogs';


export default function Home() {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container text-center my-4">
      <h1>WellCome to Blogs</h1>
      </div>
      <div className='container'> 
      <h1 className='my-3'>Latest Blogs</h1>
         <Blogs />
        </div>

    </>
  );
}
