import classes from '../styles.module.scss';

const RemoveModal = ({onClose , onConfirm , product}) => {

// const onClose =()=>{

// }

// const onConfirm =(product)=>{

// }

    return ( <div className={`${classes.remove_modal} ${classes.card}`}>

        <div>آیا از حذف محصول {product.name} مطمعن هستید؟</div>
        <div className={classes.rm_button}>
        <button onClick={onConfirm}>بله</button>
        <button onClick={onClose}>خیر</button>
        </div>
    </div> );
}
 
export default RemoveModal;