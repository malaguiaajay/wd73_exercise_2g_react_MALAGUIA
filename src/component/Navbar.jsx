function Navbar(){
    return (
        <>
       
       <div className="container">
         <div className="row">
          <nav className="navbar bg-danger d-flex flex-row">
                   <div className="nav nav-tabs collapse navbar-collapse " id="navbarSupportedContent">
                   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                          <span  className="nav-link" aria-current="page" onclick="navigateToHome()">Home</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                      
                          <span className="nav-link" onclick="navigateToAbout()">About</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                      
                      
                          <span className="nav-link" onclick="navigateToJobs()">Jobs</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                     
                         <span className="nav-link" onclick="navigateToTestimonial()">Testimonial</span>
                       
                       
                    </ul>
              
        </div>
        </nav>
     
        </div>
        </div>
        </>
    )
}

export default Navbar
