import pic from ".stockmanComputer.jpg";

const Content = () => {
    return ( 
        <div className="content">

            <ul>

                <li><a className="specialText" href="">About</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Apprenticeships</a></li>

            </ul>


            <div>
                
            <img src={pic} alt="" />
            
            </div>


        </div>
     );
}
 
export default Content;
