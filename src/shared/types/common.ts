export type WithClassName = {
  className?: string;
};

export type WithChildren = {
  children: React.ReactNode;
};

export type BaseProps = WithClassName & WithChildren;
