

'use client';

import { useState } from 'react';
import ContentBox from '../components/Contentbox';
import FetchButton from '../components/fetchButton';
import '../styles.css';


const FunFacts = () => {
  const [funFact, setFunFact] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFunFact = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');

      if (!response.ok) {
        throw new Error(`Failed to fetch, status: ${response.status}`);
      }

      const data = await response.json();

      // If the API returns a fact
      if (data && data.text) {
        setFunFact(data.text);
      } else {
        setError('No fun fact available');
      }
    } catch (error: any) {
      console.error('Error fetching fun fact:', error);
      setError('Error: ' + (error.message || 'Something went wrong.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section">
    <ContentBox
      title="Fun Fact"
      content={loading ? "Loading..." : error || funFact || "Click below to fetch a fun fact!"}
    >
      <FetchButton onClick={fetchFunFact} label='Get A New Fun Fact' />
      </ContentBox>
      </div>
  );
};

export default FunFacts;
