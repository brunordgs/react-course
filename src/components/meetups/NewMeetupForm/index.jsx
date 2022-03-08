import { useRef } from 'react';
import Card from '../../ui/Card';
import styles from './styles.module.css';

export default function NewMeetupForm(props) {
	// I'm using refs because I just only care about input value once instead after each change
	// and I just need it to read input value, I'll not update it or something like that
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const meetupData = {
			title: titleInputRef.current.value,
			image: imageInputRef.current.value,
			address: addressInputRef.current.value,
			description: descriptionInputRef.current.value,
		};

		props.onAddMeetup(meetupData);
	}

	return (
		<Card>
			<form className={styles.form} onSubmit={submitHandler}>
				<div className={styles.control}>
					<label htmlFor="title">Meetup Title</label>
					<input ref={titleInputRef} type="text" required id="title" />
				</div>

				<div className={styles.control}>
					<label htmlFor="image">Meetup Image</label>
					<input ref={imageInputRef} type="url" required id="image" />
				</div>

				<div className={styles.control}>
					<label htmlFor="address">Meetup Address</label>
					<input ref={addressInputRef} type="text" required id="address" />
				</div>

				<div className={styles.control}>
					<label htmlFor="description">Meetup Description</label>
					<textarea ref={descriptionInputRef} required id="description" rows="5" />
				</div>

				<div className={styles.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}
