import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import code from '../public/code-stable.png'
import Link from 'next/link'
export default function blogs() {

    const [blogs, setblogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/blog').then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setblogs(parsed)
            })
    }, []);
    return (
        <><div className="row m-4">
            {blogs.map((blogsit) => {
                return <div class="col-sm-4">
                        <div className="card"  key={blogsit.slug}>
                            <Image src={code} width={40} height={100} className="card-img-top p-3 " alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{blogsit.title}</h5>
                                <p className="card-text">{blogsit.content.substr(0, 110)}</p>
                                <Link href={`/Bloges/${blogsit.slug}`} className="btn btn-outline-dark btn-sm">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
            })}
            </div>

        </>
    )
}
