import React, { ReactComponentElement } from 'react';
import backBtn from '../../assets/icons/arrow_back-24px.svg';

interface PageTitleComponentProps {
  history: any;
  text: string;
  hasBackBtn?: boolean;
}

export const PageTitleComponent: React.FC<PageTitleComponentProps> = ({
  history,
  text,
  hasBackBtn
}): ReactComponentElement<any> => {
  return (
    <div className="page-title-component">
      <div className="page-title-component__container">
        {hasBackBtn && (
          <img
            data-testid="back-btn"
            src={backBtn}
            alt="back button"
            className="page-title-component__back"
            onClick={() => history.goBack()}
          />
        )}
        <div className="page-title-component__title">{text}</div>
      </div>
    </div>
  );
};
