import clsx from 'clsx';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const OuterContainer = forwardRef<HTMLDivElement, ContainerProps>(function OuterContainer(
  { className, children, ...props }: ContainerProps,
  ref,
) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className='mx-auto max-w-7xl lg:px-8'>{children}</div>
    </div>
  );
});

export const InnerContainer = forwardRef<HTMLDivElement, ContainerProps>(function InnerContainer(
  { className, children, ...props }: ContainerProps,
  ref,
) {
  return (
    <div ref={ref} className={clsx('relative px-4 sm:px-8 lg:px-12', className)} {...props}>
      <div className='mx-auto max-w-2xl lg:max-w-5xl'>{children}</div>
    </div>
  );
});

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { children, ...props }: ContainerProps,
  ref,
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});
