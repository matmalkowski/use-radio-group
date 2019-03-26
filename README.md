[![Stable Release](https://img.shields.io/npm/v/use-radio-group.svg)](https://npm.im/use-radio-group)
[![Build](https://travis-ci.org/matmalkowski/use-radio-group.svg?branch=master)](https://travis-ci.org/matmalkowski/use-radio-group)
[![gzip size](http://img.badgesize.io/https://unpkg.com/use-radio-group@latest/lib/index.js?compression=gzip)](https://unpkg.com/use-radio-group@latest/lib/index.js)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

# use-radio-group { react hook 🐠 }

Single state hook to handle radio like components checked state.

## Installation

```
# with npm:
npm add use-radio-group

# with yarn
yarn add use-radio-group
```
## Usage
To use it, import it:
```typescript
import useRadioGroup from "use-radio-group";
```

`useRadioGroup` hook returns array of 2 elements, first being the state of your radio group, second being setChecked method, to update the state.

The state is an array, so when creating your inputs, you should use indexer with key of your choice to refer to current checked/unchecked value:

```tsx
const [checked, setChecked] = useRadioGroup(1);

<input
    type="checkbox"
    key={1}
    value={1}
    checked={!!checked[1]}
    onChange={() => setChecked(1)}
/>
```

> Note that you need to cast the `checked` value to boolean by `!!` to avoid react warnings in case the retrived value for the state is undefined (falsy)

The idea behind the hook is that it can be used easly with different grouping components that act as containers for radio-like buttons etc.

## Examples

Check our more complex example with buttons on CodeSandbox:

[![Edit 8l0k8p7zkl](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/8l0k8p7zkl)

## API
```typescript
// call to get the state - @initial is inital key to be marked as checked.
const [checked, setChecked] = useRadioGroup(initial);
// checked: {[key: string]: boolean}
// setChecked: (key: string | number) => void
```

---

MIT License.

---
