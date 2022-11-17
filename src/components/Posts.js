import { Fragment } from 'react';
import { usePostsQuery } from '../api';

function Posts() {
	const { data: posts, error, isLoading } = usePostsQuery();

	// getPosts will be called first before useEffect
	// useEffect(() => {
	// 	console.log('component mounted');
	// }, []);

	// posts && console.log(posts);

	if (isLoading) {
		console.log('loading...');
		return <div>Loading...</div>;
	}

	if (error) return <div>Error</div>;

	return (
		<>
			<h1>Posts</h1>
			<br />
			{posts?.slice(0, 10)?.map((post, idx) => (
				<Fragment key={idx}>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
				</Fragment>
			))}
		</>
	);
}

export default Posts;
