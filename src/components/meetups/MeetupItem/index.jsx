import styles from './styles.module.css';

export default function MeetupItem(props) {
	return (
		<li className={styles.item}>
			<div className={styles.image}>
				<img src={props.meetup.image} alt={props.meetup.title} />
			</div>

			<div className={styles.content}>
				<h3>{props.meetup.title}</h3>
				<address>{props.meetup.address}</address>
				<p>{props.meetup.description}</p>
			</div>

			<div className={styles.actions}>
				<button>To Favorites</button>
			</div>
		</li>
	);
}
