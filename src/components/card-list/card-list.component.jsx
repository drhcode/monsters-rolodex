
import CardBox from '../card-box/card-box.component';
import "./card-list.styles.css"

const CardList = ({monsters}) => (
  <div className='card-list' >
     { monsters.map((monster) => {
        return <CardBox monsters={monster}/>
     })}
     </div>
)


export default CardList;