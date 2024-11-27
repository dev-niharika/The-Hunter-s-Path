import Link from 'next/link'


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container-fluid">
                  <h4 className='text-light'> Navbar</h4>  
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0  mx-3">
                            <li className="nav-item mx-3 ">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                            <Link className="nav-link active" aria-current="page" href="/about">About</Link>
                            </li>
                            <li className="nav-item mx-3">
                            <Link className="nav-link active" aria-current="page" href="/contact">Contact</Link>
                            </li>
                            <li className="nav-item mx-3">
                            <Link className="nav-link active" aria-current="page" href="/blogs">Blogs</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
