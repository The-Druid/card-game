import styled from 'styled-components'; 

import "./ResultInfo.css"
var Points=50;



const ResultInfo = ({result}) => {
  const resultLabel = result === "Win" ? "Congratulations Winner" : "Oh no! You lost!"
  if(result=="Win"){
    Points=Points+3;
    if(Points>100){
      Points=100;
    
    return (<div class="text-center">
    <p class="bg-primary text-warning text-center">{resultLabel}: {Points}</p>
    <br></br>
    <button name="saveBTN" type="Save" class="btn btn-secondary btn-lg" >Save</button>
    </div> 
    )}
   return (<div class="text-center">
    <p class="bg-primary text-warning text-center">{resultLabel}: {Points}</p>
    <br></br>
    <button name="saveBTN" type="Save" class="btn btn-secondary btn-lg"disabled >Save</button>
    </div>
    
  )
  }  else{
    
     Points=Points-2.75;
     if(Points<0){
       Points=0;
       return (<div class="text-center">
        <p class="bg-danger text-warning text-center">{resultLabel}: {Points}</p>
        <br></br>
        <button name="resetBTN" type="Reset" class="btn btn-secondary btn-lg" >Reset</button>
        
        </div>
        
      )
     }
    }
   return (<div class="text-center">
    <p class="bg-danger text-warning text-center">{resultLabel}: {Points}</p>
    <br></br>
    <button name="BTN" type="Reset" class="btn btn-secondary btn-lg " disabled>Reset</button>
    
    </div>
    
  )
  }


    
export default ResultInfo;
