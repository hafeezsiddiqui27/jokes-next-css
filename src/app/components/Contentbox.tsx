// // app/components/ContentBox.tsx

// import React from 'react';
// import './contentbox.css';

// interface ContentBoxProps {
//   title: string;
//   content: string;
//   children?: React.ReactNode;
// }

// const ContentBox: React.FC<ContentBoxProps> = ({ title, content, children }) => (
//   <div className="content-box">
//     <h2>{title}</h2>
//     <p>{content}</p>
//     {children}
//   </div>
// );

// export default ContentBox;
// app/components/ContentBox.tsx

import React from 'react';
// import './ContentBox.css';

interface ContentBoxProps {
  title: string;
  content: React.ReactNode;
  children: React.ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = ({ title, content, children }) => {
  return (
    <div className="content-box">
      <h2>{title}</h2>
      <p>{content}</p>
      {children}
    </div>
  );
};

export default ContentBox;
