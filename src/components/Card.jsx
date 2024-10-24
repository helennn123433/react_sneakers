function Card(props){
    return(
        <div className="card">
        <div className="cardImageContainer">
        <div className="favorite"><img src="/img/heartunlike.svg" alt="heart" /></div>
        <img width={133} height={112} src="/img/sneakers/image_5.jpg" alt="sneakers" />
        </div>
        <h5>{props.title}</h5>
        <div className="cardBottom">
            <div className="cardBottomInfo">
            <p>Цена:</p>
            <b>12 999 руб.</b>
            </div>
        <button>
            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
        </button>
        </div>
        </div>
    );
}

export default Card;