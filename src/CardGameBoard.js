import { useEffect, useState } from 'react'
import compareValues  from './compareValues'
import { createDeckAndDraw, drawCardFromDeck } from './api'
import ButtonsTab from './ButtonsTab'
import ResultInfo from './ResultInfo'




const CardGameBoard = () => {
    const [cardImageUrl, setCardImageUrl] = useState(null)
    const [cardValue, setCardValue] = useState(null)
    const [deckId, setDeckId] = useState(null)
    const [result, setResult] = useState(null)


  useEffect(() => {
    const fetchCardData = async () => {
      const cardData = await createDeckAndDraw()
      setCardImageUrl(cardData.image)
      setCardValue(cardData.value)
      setDeckId(cardData.deckId)
    }
    fetchCardData()
  }, [])


 
  const onButtonClick = async (e) => {
    const bet = e.target.name;
    const {image, value: newCardValue} = await drawCardFromDeck(deckId)


    setCardImageUrl(image)
    console.log(newCardValue, cardValue)
    const result = compareValues({
      bet,
      currentCardValue: newCardValue,
      previousCardValue: cardValue
    })

    setCardValue(newCardValue)
    setResult(result)
    console.log(result)
  }

  if(!cardImageUrl) {
    return (<p>Loading...</p>)
  }

  return (
    <div id="game" class="position-relative text-light bg-success">
    
      <img src={cardImageUrl} alt="This is your card"/>
      <ButtonsTab onButtonClick={onButtonClick} />
      <hr></hr>
      {result && 
        <ResultInfo result={result} />
      }
      
    </div>
    
  )
}


export default CardGameBoard;