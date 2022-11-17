import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const getPosts = async () => {
	console.log('fetch posts...');
	const { data } = await axios.get(
		'https://jsonplaceholder.typicode.com/posts'
	);

	return data;
};

export const usePostsQuery = () => {
	return useQuery({
		queryKey: ['posts'],
		queryFn: getPosts,
		refetchOnWindowFocus: false
		// staleTime: 60000
		// keepPreviousData : true
	});
};
