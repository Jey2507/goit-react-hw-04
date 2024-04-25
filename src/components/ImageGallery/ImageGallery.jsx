import ImageCard from "../ImageCard/ImageCard"
import css from "../ImageGallery/ImageGallery.module.css"

export default function ImageDallery({images, onOpen}) {
    return (
        <ul className={css.list}>
            {images.map((image) => (
                <li onClick={() => onOpen(image)} className={css.item} key={image.id}>
                   <ImageCard urls={image.urls} alt_description={image.alt_description} />
                </li>
            ))}
        </ul>
    )
}