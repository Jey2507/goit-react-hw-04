import css from "../ImageCard/ImageCard.module.css"

export default function ImageCard({urls, alt_description}) {
    return (
        <div className={css.div}>
            <img className={css.image} src={urls.small} alt={alt_description} />   
        </div>
    )
}