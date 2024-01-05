import { useState } from 'react';

export default function JokesForm({ onAddJokes }) {
	const [text, setText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddJokes(text);
		setText('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="text">New Joke</label>
			<input
				type="text"
				id="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button type="submit">Add Joke</button>
		</form>
	);
}
