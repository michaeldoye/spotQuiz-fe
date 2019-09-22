import React from 'react';

export interface PageContainerProps {
  title?: string;
  paragraph?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  title,
  paragraph,
  children
}) => (
  <div className="container">
    {title && <h2>{title}</h2>}
    {paragraph && <p>{paragraph}</p>}
    {children}
  </div>
);
