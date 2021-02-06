var Points=0;

const ResultInfo = ({result}) => {
  const resultLabel = result === "Win" ? "Congratulations Winner" : "Oh no! You lost!"
  if(result=="Win"){
    Points+=1;
   return (
    <p>{resultLabel}: {Points}</p>
  )
  }  else{
    Points+=-1;
   return (
    <p>{resultLabel}: {Points}</p>
    
  )
  }
}

    
export default ResultInfo;
