import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';
import Posts from './components/Posts';

// Create a client
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<h1>React Query V4</h1>
				<br />
				<Posts />
			</div>
		</QueryClientProvider>
	);
}

export default App;
