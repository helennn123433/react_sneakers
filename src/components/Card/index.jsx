import styles from './Card.module.scss'
import { useState, useEffect } from 'react';
function Card({ title, imageUrl, price, onPlus, onAddFavorite, isAddFavorite }){

    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(isAddFavorite);
    
     useEffect(() => {
        setIsFavorite(isAddFavorite);
     }, [isAddFavorite]);
    
    
    const onClickPlus = () =>{
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () =>{
        onAddFavorite({ title, price, imageUrl });
        setIsFavorite(!isFavorite);
    }

    return(
        <div className={styles.card}>
        <div className={styles.cardImageContainer}>
            <div className={styles.favorite}>
                <img onClick={onClickFavorite} src={ isFavorite  ? '/img/heartLike.svg' : '/img/heartunlike.svg'} alt="heart" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="sneakers" />
        </div>
        <h5>{title}</h5>
        <div className={styles.cardBottom}>
            <div className={styles.cardBottomInfo}>
                <p>Цена:</p>
                <b>{price} руб.</b>
            </div>
            <img onClick={onClickPlus} width={32} height={32} src={isAdded ? "/img/checked.svg" : "/img/plus.svg"} className={styles.addCartButton} alt="plus"/>
        </div>
        </div>
    );
}

export default Card;