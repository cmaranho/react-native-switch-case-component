import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Switch, { Case, Default } from 'react-native-switch-case-component';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: 'red',
  },
  square: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
  },
});

export default App;
