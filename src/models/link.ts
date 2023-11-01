import React from 'react';
import { IconType } from 'react-icons';

export interface LinkProps {
  Icon: IconType;
  linkName: string;
  onClick?: () => void;
}
