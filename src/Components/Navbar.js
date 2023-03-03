
  //  import {Link} from 'react-router-dom';
function Navbar(){
    return (
<>
<nav   className="navbar navbar-expand-lg bg-body-tertiary">
  <div   className="container">
    <a className="navbar-brand" href="/" >logo </a>
    <button   className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span   className="navbar-toggler-icon"></span>
    </button>
    <div   className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul   className="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto">
        <li   className="nav-item">
          <a  className="nav-link active "href='/' aria-current="page" >Home</a>
        </li>
        <li   className="nav-item">
          {/* <a className="nav-link" href='About.js'>about</a> */}
        </li>

      </ul>
      
    </div>
  </div>
</nav>
</>

    );
}
export default Navbar;