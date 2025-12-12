import { metadata } from './metadata';
import { ReactNode } from 'react';

export { metadata };

export default function SingaporeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
} 