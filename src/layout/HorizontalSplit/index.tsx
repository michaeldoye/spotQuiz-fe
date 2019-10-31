import React, { Component } from 'react';
import { PageContainer } from '../PageContainer';

export interface HorizontalSplitProps {
  leftSide?: React.FC;
  rightSide?: React.FC;
}

export const HorizontalSplit: React.FC<HorizontalSplitProps> = ({
  leftSide,
  rightSide
}) => (
  <PageContainer>
    {leftSide}
    {rightSide}
  </PageContainer>
);
