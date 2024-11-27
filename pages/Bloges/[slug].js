import { useRouter } from 'next/router'
import Image from 'next/image'
//import code from '.../public/code-stable.png'
import { React ,useState,useEffect} from 'react'
const slug = () => {
    const router = useRouter()
    const [blogs, setblogs] = useState()
    useEffect(() => {
      if (!router.isReady) return;
      const { slug } = router.query
        fetch(`http://localhost:3000/api/getdata?slug=${slug}`).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setblogs(parsed)
            })
    }, [router.isReady]);
  
    return <>
        <div className="card m-3" >
      <Image src="/code-stable.png" alt="Code Stable" width={80} height={250} className="card-img-top p-3"  />
      <div className="card-body">
        <h2 className="card-title text-center">{blogs && blogs.title}</h2>
        <p className="card-text">{blogs && blogs.content}</p>
      </div>
    </div>
    </>
}

export default slug
