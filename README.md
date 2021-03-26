# react-native-switch-case-component

A Switch case component to project

## Installation

```sh
npm install react-native-switch-case-component
```

## Usage

```js
import SwitchCaseComponent from "react-native-switch-case-component";

// ...

const format: FormatTypes = 'circle';

<Switch<FormatTypes> condition={format}>
   <Case value="square" style={styles.square} />
   <Case value="circle">
      <Circle />
    </Case>
   <Default>
     <Text>Default value!</Text>
   </Default>
</Switch>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
