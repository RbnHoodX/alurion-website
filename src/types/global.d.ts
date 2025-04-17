
declare interface Window {
  setActiveSolution?: (id: string) => void;
}

declare module 'react-router-hash-link' {
  import * as React from 'react';
  import { NavLinkProps } from 'react-router-dom';

  export interface HashLinkProps extends Omit<NavLinkProps, 'to'> {
    to: string;
    scroll?: (element: HTMLElement) => void;
    elementId?: string;
  }

  export function HashLink(props: React.PropsWithRef<HashLinkProps>): JSX.Element;
  export function NavHashLink(props: React.PropsWithRef<HashLinkProps>): JSX.Element;
}
