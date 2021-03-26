import React from 'react';
import { View, ViewProps } from 'react-native';

type ConditionType = string | number | boolean;

interface CaseProps extends ViewProps {
  value: ConditionType;
  children?: React.ReactNode | React.ReactNode[];
}

interface DefaultProps extends ViewProps {
  children?: React.ReactNode | React.ReactNode[];
}

interface SwitchProps<T extends ConditionType> {
  condition: T;
  children: React.ReactElement<CaseProps> | React.ReactElement<CaseProps>[];
}

function Switch<T extends ConditionType>(props: SwitchProps<T>): JSX.Element {
  const childs = React.Children.map(props.children, (child) => {
    return child;
  });

  const defaultChild =
    childs.find((c) => {
      if (React.isValidElement<CaseProps>(c)) {
        return c.type === Default;
      }
      return;
    }) ?? null;

  const child =
    childs.find((c) => {
      if (React.isValidElement<CaseProps>(c)) {
        return c.props?.value === props.condition;
      }
      return;
    }) ?? defaultChild;

  return child as React.ReactElement<CaseProps>;
}

export function Case(props: CaseProps): JSX.Element {
  return <View style={props.style}>{props.children}</View>;
}

export function Default(props: DefaultProps): JSX.Element {
  return <View style={props.style}>{props.children}</View>;
}

export default Switch;
