import React, { Component } from 'react';
import { PageContainer } from '../PageContainer';

export interface HorizontalSplitProps {
  leftSide?: Component;
  rightSide?: Component;
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
