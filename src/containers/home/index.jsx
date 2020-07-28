import ModalApp from '../../component/modal';
import React from 'react';

const Home = () => {
  return (
    <div  style={{fontSize:"3rem",padding:"5%",textAlign:"center"}}>
          Welcome to the Restaurant <div className="watermelon" style={{fontFamily:'Pacifico',marginBottom:"4px"}}>Pastèque
          </div>
            <ModalApp />
    </div>
  );
};

export default Home;