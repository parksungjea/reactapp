import { Link } from "react-router-dom";

function header(){

    //JSX
    return(
        <>
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <ul className="nav">
  <li className="nav-item">
    <Link to='/' className="nav-link active">Home</Link>
  </li>
  <li className="nav-item">
  <Link to='/notice' className="nav-link active">Board</Link>
  </li>
  <li className="nav-item">
  </li>
  <li className="nav-item">
  </li>
</ul>
        </nav>
        </>
    );
}
export default header