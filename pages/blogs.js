import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import code from '../public/code-stable.png';

export async function getStaticProps() {
    const directory = path.join(process.cwd(), 'BlogData'); // Path to JSON files
    const filenames = await fs.promises.readdir(directory);

    const blogs = await Promise.all(
        filenames.map(async (filename) => {
            const filePath = path.join(directory, filename);
            const fileContents = await fs.promises.readFile(filePath, 'utf8');
            return JSON.parse(fileContents); // Parse JSON file
        })
    );

    return {
        props: {
            blogs, // Pass data to the page as props
        },
    };
}

export default function Blogs({ blogs }) {
    return (
        <div className="row m-4">
            {blogs.map((blog) => (
                <div className="col-sm-4" key={blog.slug}>
                    <div className="card">
                        <Image
                            src={code}
                            width={40}
                            height={100}
                            className="card-img-top p-3"
                            alt="Blog Image"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text">{blog.content.substr(0, 110)}...</p>
                            <Link href={`/Bloges/${blog.slug}`}>
                                <a className="btn btn-outline-dark btn-sm">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
