import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

export default function AllMeetups() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		setIsLoading(true);

		// Json returns a promise as well, that's why I need to insert other then
		fetch('https://react-getting-started-10eca-default-rtdb.firebaseio.com/meetups.json')
			.then((res) => res.json())
			.then((data) => {
				// const meetups = [];

				// for (const key in data) {
				// 	const meetup = {
				// 		id: key,
				// 		...data[key],
				// 	};

				// 	meetups.push(meetup);
				// }

				// Same as above
				const meetups = Object.entries(data).map(([key, data]) => ({
					id: key,
					...data,
				}));

				setLoadedMeetups(meetups);
				setIsLoading(false);
			})
			.finally(() => setIsLoading(false));
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<section>
			<h1>All Meetups</h1>
			<MeetupList meetups={loadedMeetups} />
		</section>
	);
}
