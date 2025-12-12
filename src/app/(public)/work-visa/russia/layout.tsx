import { metadata } from './metadata';
import { ReactNode } from 'react';

export { metadata };

export default function RussiaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
} 