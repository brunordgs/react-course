import { useContext } from 'react';
import FavoritesContext from '../../../store/favorites-context';
import Card from '../../ui/Card';
import styles from './styles.module.css';

export default function MeetupItem(props) {
	const favoritesCtx = useContext(FavoritesContext);

	const itemIsFavorite = favoritesCtx.itemIsFavorite(props.meetup.id);

	function toggleFavoriteStatusHandler() {
		if (itemIsFavorite) {
			favoritesCtx.removeFavorite(props.meetup.id);
		} else {
			favoritesCtx.addFavorite(props.meetup);
		}
	}

	return (
		<li className={styles.item}>
			<Card>
				<div className={styles.image}>
					<img src={props.meetup.image} alt={props.meetup.title} />
				</div>

				<div className={styles.content}>
					<h3>{props.meetup.title}</h3>
					<address>{props.meetup.address}</address>
					<p>{props.meetup.description}</p>
				</div>

				<div className={styles.actions}>
					<button onClick={toggleFavoriteStatusHandler}>
						{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
					</button>
				</div>
			</Card>
		</li>
	);
}
