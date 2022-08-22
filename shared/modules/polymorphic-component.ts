/**
 * SEE: https://github.com/kripod/react-polymorphic-types/blob/0da9a47f15359f34143e4583c763a0d6b74b2a92/index.d.ts
 */

/**
 * type A = {
 *     id: string
 *     name: string
 * }
 *
 * type B = {
 *     id: number
 *     age: number
 * }
 *
 * Merge<A,B>
 * => { id: number name: string age: number }
 */
type Merge<T, U> = Omit<T, keyof U> & U;

type PolymorphicPropsName = "as";

type PropsWithPolymorphicProps<P, T extends React.ElementType> = P &
  { [key in PolymorphicPropsName]?: T };

export type PolymorphicPropsWithoutRef<P, T extends React.ElementType> = Merge<
  T extends keyof JSX.IntrinsicElements
    ? React.PropsWithoutRef<JSX.IntrinsicElements[T]>
    : React.ComponentPropsWithoutRef<T>,
  PropsWithPolymorphicProps<P, T>
>;

export type PolymorphicPropsWithRef<P, T extends React.ElementType> = Merge<
  T extends keyof JSX.IntrinsicElements
    ? React.PropsWithRef<JSX.IntrinsicElements[T]>
    : React.ComponentPropsWithRef<T>,
  PropsWithPolymorphicProps<P, T>
>;

type PolymorphicExoticComponent<
  P = Record<string, unknown>,
  T extends React.ElementType = React.ElementType
> = Merge<
  React.ExoticComponent<P & { [key: string]: unknown }>,
  {
    /**
     * **NOTE**: Exotic components are not callable.
     */
    <InstanceT extends React.ElementType = T>(
      props: PolymorphicPropsWithRef<P, InstanceT>
    ): React.ReactElement | null;
  }
>;

export type PolymorphicForwardRefExoticComponent<
  P,
  T extends React.ElementType
> = Merge<
  React.ForwardRefExoticComponent<P & { [key: string]: unknown }>,
  PolymorphicExoticComponent<P, T>
>;

export type PolymorphicMemoExoticComponent<P, T extends React.ElementType> =
  Merge<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.MemoExoticComponent<React.ComponentType<any>>,
    PolymorphicExoticComponent<P, T>
  >;

export type PolymorphicLazyExoticComponent<P, T extends React.ElementType> =
  Merge<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.LazyExoticComponent<React.ComponentType<any>>,
    PolymorphicExoticComponent<P, T>
  >;
