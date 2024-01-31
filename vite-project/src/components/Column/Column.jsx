import Card from "../Card/Card";
import { CardsColumn, ColumnTitle, MainColumn } from "../Card/Card.styled";
function Column (props) {
   return (
    <MainColumn>
    <ColumnTitle>
        <p>{props.name}</p>
    </ColumnTitle>
    <CardsColumn>
    {props.cardList.map((card) => (
        <Card name={card.title}
        theme={card.theme}
        data={card.data}
        key={card.id}
        />
    ))}   
    </CardsColumn>
    </MainColumn>
)
}
export default Column ;

 