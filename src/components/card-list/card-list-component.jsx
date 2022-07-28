
import './card-list-styles.css';
import Card from '../card/card-component';

const CardList = ({monsters}) => {
    return ( // on to robil bez return
        <div className="card-list" >
            {monsters.map((monster) => {
                return (
                // <h1 key={monster.id} >{monster.name}</h1> // {/* bez ID wywali ostrzezenie */}
                    <Card monster={monster}/>
                );
            })}
        </div>
    )
    
}

export default CardList;