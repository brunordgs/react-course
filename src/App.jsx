import { Routes, Route } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';

export default function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<AllMeetups />} />
				<Route path="/new-meetup" element={<NewMeetup />} />
				<Route path="/favorites" element={<Favorites />} />
			</Routes>
		</Layout>
	);
}
