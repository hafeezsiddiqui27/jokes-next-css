'use client';

import { useState, useEffect } from 'react';
import ContentBox from '../components/Contentbox';
import FetchButton from '../components/fetchButton';

const FunnyJokes: React.FC = () => {
  const [joke, setJoke] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchJoke = async () => {
    setLoading(true); // Set loading state to true when fetching
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.error('Failed to fetch joke:', error);
      setJoke('Oops! Something went wrong. Try again later.');
    } finally {
      setLoading(false); // Set loading state to false when done
    }
  };

  // Fetch a joke once when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="container">
      <ContentBox title="Funny Jokes 😂" content={joke}>
        {/* Display the loading spinner if loading */}
        {loading ? <div className="loading">Loading...</div> : null}
        <FetchButton onClick={fetchJoke} label="Another Joke" />
      </ContentBox>
    </div>
  );
};

export default FunnyJokes;
