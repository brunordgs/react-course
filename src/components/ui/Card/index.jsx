import styles from './styles.module.css';

export default function Card(props) {
	return <div className={styles.card}>{props.children}</div>;
}
