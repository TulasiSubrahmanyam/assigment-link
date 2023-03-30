
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="AppContainer">
      <header >
       <div className="AppHeader">
           <img src="../logo.png" alt="logo" className="logo mt-3"/> 
           <h1>HOME</h1> 
           <p className="contact">+91 8971580265</p>
        </div> 
      </header>
      {/*cards containers*/}
      <div className="d-flex flex-row justify-content-center">
      {/*first card*/}
      <div className="card1">
        <h1 className="cardHeading">Features</h1>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row m-2">
          <img src="../Digitize.png" alt="imgDigitize" className="imgs"/>
          <div>
          <h1 className="sideHeading">Digitize</h1>
          <p className="para">A Bird eye view of the entire Biomedical Operations.</p>
          </div>
         </div>

          <div className="d-flex flex-row m-2">
            <img src="../Track.png" alt="imgTrack" className="imgs"/>
            <div>
            <h1 className="sideHeading">Track</h1>
            <p className="para">Track the product life cycle and service history.</p>
            </div>
          </div>

          <div className="d-flex flex-row m-2">
            <img src="../budget.png" alt="imgbudget" className="imgs"/>
            <div>
            <h1 className="sideHeading">Biomedical Budget</h1>
            <p className="para">Regular and save budget through analysed data and informed.</p>
            </div>
          </div>
        </div>
       </div>
       {/*sign card*/}
       <div className="card2">
       
        <h1 className="signHeading">Sign in</h1>
       <hr className="horizontalLine"/>
        <div className="formContent">
           <h1 className="signSideheading"> Sign in to your account</h1>
            <form > 
              <div className="d-fle flex-column justify-content-start">
                <lable className="labeHeading" htmlFor="emailId">Email Id</lable>
                <input text="email" className="inputData" placeHolder="xxxxxxxxxxx" id="emailId" />
              </div>
              <div>
                <lable className="labeHeading" htmlFor="password">Password</lable>
                <input text="password" className="inputData" placeHolder="xxxxxxxxxxx" id="password" />
              </div>
                <p className="forgotext">Forgot Password</p>
                <button type="button" className='button'>Sign in</button>
                <p className="cardFotter">New to vajra? <span style={{color:"#F78117",fontSize:"10px",fontWeight:"600"}}>Sign UP Now</span></p>
            </form>
        </div>
       </div>
       
      
      </div>
      {/*download details*/}
      <div className="d-flex flex-row justify-content-center mt-5">
      <h1 className="download">Download Our App</h1>
      <img src="../AppleStore.png" alt="appleStoreImg" class="downLoadImg"/>
      <img src="../googlePlay.png" alt="googlePlayImg" class="downLoadImg"/>
      </div>
      {/*footer*/}
      <footer >
      <div className="footerContainer">
      <div className="d-flex flex-row justify-content-between" >
      <div className="mt-2">
        <img src="../logo.png" alt="logo" className="logo2"/> 
        <p className="copyRights">@2020 VIZI, All Rights Reserved</p> 
      </div>
      <p className="terms">Terms&Conditions | FAQs</p>
      </div>
      </div>
      </footer>
    </div>
  );
}

export default App;
