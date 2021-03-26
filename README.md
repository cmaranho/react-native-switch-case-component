# react-native-switch-case-component

A Switch case component to project

## Installation

```sh
npm install react-native-switch-case-component
```

## Usage

```js
import * as React from 'react';
import Switch, { Case, Default } from "react-native-switch-case-component";

// ...
type FormatTypes = 'square' | 'circle';

const Circle = () => {
  return <View style={styles.circle} />;
};

const App = () => {
  const format: FormatTypes = 'circle';

  return (
    <View style={styles.container}>
      <Switch<FormatTypes> condition={format}>
        <Case value="square" style={styles.square} />
        <Case value="circle">
          <Circle />
        </Case>
        <Default>
          <Text>Default value!</Text>
        </Default>
      </Switch>
    </View>
  );
};

// ...

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
