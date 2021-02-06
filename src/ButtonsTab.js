import styled from 'styled-components';
  
  
    

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
`;

const Button = styled.button`
  padding: 16px 8px;
  border: 3px solid violet;
  border-radius: 4px;
  min-width: 60px;
  color: ${props => props.type === 'down' ? 'black' : 'white'};
  background-color: ${props => (props.type === 'down' ? '#CC00CC' : '#00CC00')};
  cursor: pointer;
  
`;

const ButtonsTab = ({onButtonClick}) => (
  
  <ButtonWrapper>
    <Button type="down" onClick={onButtonClick} name="down">
      Lower 
    </Button>
    <Button name="up" type="up" onClick={onButtonClick}>
      Higher
    </Button>
  </ButtonWrapper>
)

export default ButtonsTab;