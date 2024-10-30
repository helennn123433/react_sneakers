import styles from './Card.module.scss'

function Card(props){
    // const onClickButton = () => {
    //     alert("Hello");
    // }
    return(
        <div className={styles.card}>
        <div className={styles.cardImageContainer}>
            <div className={styles.favorite}>
                <img src="/img/heartunlike.svg" alt="heart" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
        </div>
        <h5>{props.title}</h5>
        <div className={styles.cardBottom}>
            <div className={styles.cardBottomInfo}>
                <p>Цена:</p>
                <b>{props.price} руб.</b>
            </div>
        <button onClick={props.onClickPlus}>
            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
        </button>
        </div>
        </div>
    );
}

export default Card;