// app/page.tsx

'use client';

import { useState, useEffect } from 'react';
import JokeDisplay from './components/JokeDisplay';
import FetchButton from './components/FetchButton';

interface Joke {
  setup: string;
  punchline: string;
}

export default function Home() {
  const [joke, setJoke] = useState<Joke>({ setup: '', punchline: '' });

  const fetchJoke = async () => {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    setJoke(data);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <JokeDisplay setup={joke.setup} punchline={joke.punchline} />
      <FetchButton onClick={fetchJoke} />
    </div>
  );
}
