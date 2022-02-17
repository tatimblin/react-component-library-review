import React from 'react';

interface Props {
  content: any
  bgColor?: string
}

const Container: React.FC<Props> = ({ content, bgColor = 'bg-transparent' }) => {
  return (
    <section className={`${bgColor} min-h-screen flex flex-col justify-center align-center`}>
      <div className="container mx-auto">
        {content}
      </div>
    </section>
  );
}

export default Container;
