// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import AppProviders from './providers/AppProviders.tsx';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <AppProviders>{children}</AppProviders>;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const customRender = (ui, options?) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';

export { customRender as render };
