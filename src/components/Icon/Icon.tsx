import React, { ReactComponentElement } from 'react';

interface IconComponentProps {
  icon: string | null;
}

export const IconComponent: React.FC<IconComponentProps> = ({
  icon
}): ReactComponentElement<any> => {
  return <i className="material-icons">{icon}</i>;
};
