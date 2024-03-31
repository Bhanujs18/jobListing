import styles from '../Alert/Alert.module.css';

const  AlertBox = ({message}) => {

    return (
      <div className={styles.container}  onClose={() => setShow(false)} dismissible>
        <div className={styles.heading}>{message} <button className={styles.button} onClick={()=>setTimer(false)}>close</button></div>
      </div>
    );
  }


export default AlertBox;