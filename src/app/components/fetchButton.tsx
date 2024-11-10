// // // // app/components/FetchButton.tsx

// // // import React from 'react';
// // // import styles from "../styles/fetchbutton.module.css";

// // // interface FetchButtonProps {
// // //   onClick: () => void;
// // // }

// // // const FetchButton: React.FC<FetchButtonProps> = ({ onClick }) => (
// // //   <button className={styles.button} onClick={onClick}>
// // //     Get a New Joke
// // //   </button>
// // // );

// // // export default FetchButton;
// // // app/components/FetchButton.tsx

// // import React from 'react';
// // import styles from '../styles/FetchButton.module.css';

// // interface FetchButtonProps {
// //   onClick: () => void;
// // }

// // const FetchButton: React.FC<FetchButtonProps> = ({ onClick }) => (
// //   <button className={styles.button} onClick={onClick}>
// //     Get a New Joke 🎉
// //   </button>
// // );

// // export default FetchButton;
// // app/components/FetchButton.tsx

// import React from 'react';
// import './FetchButton.css';

// interface FetchButtonProps {
//   onClick: () => void;
//   label: string;
// }

// const FetchButton: React.FC<FetchButtonProps> = ({ onClick, label }) => (
//   <button onClick={onClick} className="fetch-button">
//     {label}
//   </button>
// );

// export default FetchButton;
// app/components/FetchButton.tsx

import React from 'react';
import './FetchButton.css';

interface FetchButtonProps {
  onClick: () => void;
  label: string;
}

const FetchButton: React.FC<FetchButtonProps> = ({ onClick, label }) => {
  return (
    <button className="fetch-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default FetchButton;
