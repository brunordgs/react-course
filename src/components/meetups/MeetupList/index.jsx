import MeetupItem from '../MeetupItem';
import styles from './styles.module.css';

export default function MeetupList(props) {
	return (
		<ul className={styles.list}>
			{props.meetups.map((meetup) => (
				<MeetupItem key={meetup.id} meetup={meetup} />
			))}
		</ul>
	);
}
