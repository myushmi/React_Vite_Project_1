export default function Jokes({
	id,
	text,
	onDelete,
	likes,
	onLike,
	onDisLike,
}) {
	const handleLike = () => {
		onLike(id);
	};
	const handleDisLike = () => {
		if (likes > 0) {
			onDisLike(id);
		}
	};

	return (
		<div>
			<p>{text}</p>
			<p>Likes: {likes}</p>
			<button onClick={handleLike}>❤️</button>
			<button onClick={handleDisLike}>🤢</button>
			<button onClick={() => onDelete(id)}>Delete</button>
		</div>
	);
}
