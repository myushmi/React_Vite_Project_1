import './App.css';
import Jokes from './components/Jokes/Jokes';
import { useReducer } from 'react';
import JokesForm from './components/JokesForm/JokesForm';

function jokesReducer(jokes, action) {
	switch (action.type) {
		case 'add_joke':
			return [action.joke, ...jokes];
		case 'deleted_joke':
			return jokes.filter((joke) => joke.id !== action.id);
		case 'liked_joke':
			return jokes.map((joke) => {
				if (joke.id === action.id) {
					return { ...joke, likes: joke.likes + 1 };
				} else {
					return joke;
				}
			});
		case 'disliked_joke':
			return jokes.map((joke) => {
				if (joke.id === action.id) {
					return { ...joke, likes: joke.likes - 1 };
				} else {
					return joke;
				}
			});
		case 'sorted_joke':
			return [...jokes].sort((a, b) => b.likes - a.likes);
	}
}

function App() {
	const [jokes, dispatch] = useReducer(jokesReducer, [
		{
			id: 1,
			text: "I'm afraid for the calendar. It's day sare numbered.",
			likes: 0,
		},
		{
			id: 2,
			text: "I used to be addicted to soap, bun I'm clean now.",
			likes: 0,
		},
	]);

	const handleAddJokes = (text) => {
		const joke = {
			text,
			id: self.crypto.randomUUID(),
			likes: 0,
		};
		dispatch({ type: 'added_joke', joke });
	};

	const handleDelete = (id) => {
		dispatch({ type: 'deleted_joke', id });
	};

	const handleLike = (id) => {
		dispatch({ type: 'liked_joke', id });
	};
	const handleDisLike = (id) => {
		dispatch({ type: 'disliked_joke', id });
	};

	const handleSort = () => {
		dispatch({ type: 'sorted_joke' });
	};

	return (
		<div className="app">
			<h1>Mike Jokes</h1>

			<button onClick={handleSort}>Sort</button>

			<JokesForm onAddJokes={handleAddJokes} />

			{jokes.map((joke) => (
				<Jokes
					onDelete={handleDelete}
					key={joke.id}
					onLike={handleLike}
					onDisLike={handleDisLike}
					{...joke}
				/>
			))}
		</div>
	);
}

export default App;
