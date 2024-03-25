import Alert from 'react-bootstrap/Alert';
import styles from '../Alert/Alert.module.css';

const  AlertBox = () => {
    return (
      <Alert className={styles.container}  onClose={() => setShow(false)} dismissible>
        <Alert.Heading className={styles.heading}>Oh snap! You got an error!</Alert.Heading>
      </Alert>
    );
  }

export default AlertBox;