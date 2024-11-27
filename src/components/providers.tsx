'use client';

import ThemeSwitcher from '@/app/prime/theme.switcher';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function RootProviders({
  children,
}: Readonly<{ children?: ReactNode }>): JSX.Element {
  return (
    <ThemeProvider attribute="class">
      <ThemeSwitcher />
      <div className="container mx-auto px-12">{children}</div>
    </ThemeProvider>
  );
}
