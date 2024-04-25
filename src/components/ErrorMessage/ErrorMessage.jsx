import css from "../ErrorMessage/ErrorMessage.module.css"

export default function ErrorMessage() {
    
    return (
       <p className={css.error}>Error! PLease reload page...</p>
    );
}
