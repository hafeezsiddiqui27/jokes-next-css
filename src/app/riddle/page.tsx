// // app/riddle-corner/page.tsx

// 'use client';

// import { useState, useEffect } from 'react';
// import ContentBox from '../components/Contentbox';
// import FetchButton from '../components/fetchButton';

// const RiddleCorner: React.FC = () => {
//   const [riddle, setRiddle] = useState<{ question: string; answer: string } | null>(null);
//   const [showAnswer, setShowAnswer] = useState(false);

//   const fetchRiddle = async () => {
//     const response = await fetch('https://api.api-ninjas.com/v1/riddles', {
//       headers: { 'X-Api-Key': 'YOUR_API_KEY' },
//     });
//     const data = await response.json();
//     setRiddle(data[0]);
//     setShowAnswer(false);
//   };

//   useEffect(() => {
//     fetchRiddle();
//   }, []);

//   return (
//     <div className="container">
//       {riddle && (
//         <ContentBox
//           title="Riddle Corner 🤔"
//           content={riddle.question}
//         >
//           {showAnswer ? (
//             <p><strong>Answer:</strong> {riddle.answer}</p>
//           ) : (
//             <FetchButton onClick={() => setShowAnswer(true)} label="Reveal Answer" />
//           )}
//           <FetchButton onClick={fetchRiddle} label="Get Another Riddle" />
//         </ContentBox>
//       )}
//     </div>
//   );
// };

// export default RiddleCorner;
// app/riddle-corner/page.tsx

// 'use client';

// import { useState, useEffect } from 'react';
// import ContentBox from '../components/Contentbox';
// import FetchButton from '../components/fetchButton';
// import '../styles.css';

// const RiddleCorner: React.FC = () => {
//   const [riddle, setRiddle] = useState<{ question: string; answer: string } | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [showAnswer, setShowAnswer] = useState(false);

//   const fetchRiddle = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://api.api-ninjas.com/v1/riddles', {
//         headers: { 'X-Api-Key': 'YOUR_API_KEY' },
//       });
//       const data = await response.json();
//       setRiddle(data[0]);
//       setShowAnswer(false);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRiddle();
//   }, []);

//   return (
//     <div className="container">
//       {loading ? (
//         <p className="loading">Loading Riddle...</p>
//       ) : (
//         riddle && (
//           <ContentBox title="Riddle Corner 🤔" content={riddle.question}>
//             {showAnswer ? (
//               <p><strong>Answer:</strong> {riddle.answer}</p>
//             ) : (
//               <FetchButton onClick={() => setShowAnswer(true)} label="Reveal Answer" />
//             )}
//             <FetchButton onClick={fetchRiddle} label="Get Another Riddle" />
//           </ContentBox>
//         )
//       )}
//     </div>
//   );
// };

// export default RiddleCorner;
// app/riddle-corner/page.tsx

'use client';

import { useState, useEffect } from 'react';
import ContentBox from '../components/Contentbox';
import FetchButton from '../components/fetchButton';
import '../styles.css';

const RiddleCorner: React.FC = () => {
  const [riddle, setRiddle] = useState<{ question: string; answer: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const fetchRiddle = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=twopart');
      const data = await response.json();
      console.log('Fetched Riddle Data:', data); // Debugging log

      if (data && data.setup && data.delivery) {
        setRiddle({ question: data.setup, answer: data.delivery });
        setShowAnswer(false);
      } else {
        console.error('No riddle data found!');
        setRiddle(null);
      }
    } catch (error) {
      console.error('Error fetching riddle:', error);
      setRiddle(null); // Handle error gracefully
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRiddle();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p className="loading">Loading Riddle...</p>
      ) : (
        riddle ? (
          <ContentBox title="Riddle Corner 🤔" content={riddle.question}>
            {showAnswer ? (
              <p><strong>Answer:</strong> {riddle.answer}</p>
            ) : (
              <FetchButton onClick={() => setShowAnswer(true)} label="Reveal Answer" />
            )}
            <FetchButton onClick={fetchRiddle} label="Get Another Riddle" />
          </ContentBox>
        ) : (
          <p className="loading">No riddle found, try again later.</p>
        )
      )}
    </div>
  );
};

export default RiddleCorner;
