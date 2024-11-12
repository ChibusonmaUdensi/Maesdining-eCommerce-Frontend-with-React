import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <header className="py-3 my-5" style={{backgroundColor: '#4169E1'}}>
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bold ">404 Page Not Found!</h1>
            <p className="fs-4 text-white">The page you tried accessing does not exist</p>
            <Link to="/" href="/" className="btn btn-light btn-lg rounded-pill px-4 py-2">Go back to home</Link>
          </div>
        </div>
    </header>
  )
}

export default NotFoundPage