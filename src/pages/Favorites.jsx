import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

export default function Favorites() {
	const favoritesCtx = useContext(FavoritesContext);

	return (
		<section>
			<h1>My Favorites</h1>
			{favoritesCtx.favorites.length ? (
				<MeetupList meetups={favoritesCtx.favorites} />
			) : (
				<p style={{ marginTop: '2rem' }}>You got no favorites yet. Start adding some?</p>
			)}
		</section>
	);
}
