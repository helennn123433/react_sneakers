import styles from './Card.module.scss'
import { useState, useEffect } from 'react';
import ContentLoader from "react-content-loader"
function Card({ title, imageUrl, price, onPlus, onAddFavorite, isAddFavorite, added = false, loading = false }){

    const [isAdded, setIsAdded] = useState(added);
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

    return (
        <div className={styles.card}>
        {
            loading ? <ContentLoader 
            speed={2}
            width={150}
            height={265}
            viewBox="0 0 150 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="0" ry="0" width="150" height="155" /> 
            <rect x="0" y="167" rx="4" ry="4" width="150" height="15" /> 
            <rect x="0" y="191" rx="4" ry="4" width="100" height="15" /> 
            <rect x="0" y="233" rx="4" ry="4" width="80" height="25" /> 
            <rect x="118" y="233" rx="10" ry="10" width="32" height="32" />
        </ContentLoader> : 
        <>
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
      </>
    }
    </div>
    );
}

export default Card;