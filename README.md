# Odigos UI Utils

This library contains the utils for all Odigos UI libraries ([ui-icons](https://github.com/odigos-io/ui-icons), [ui-components](https://github.com/odigos-io/ui-components), [ui-containers](https://github.com/odigos-io/ui-containers)).

## Installation

Using **npm**:

```shell
npm i @odigos/ui-utils
```

Using **yarn**:

```shell
yarn add @odigos/ui-utils
```

## Usage

Import a util, and call it with it's params:

```tsx
import { useKeyDown } from '@odigos/ui-utils'

const App = () => {
  useKeyDown(
    {
      key: 'Enter',
      active: true,
    },
    () => {
      console.log('key pressed')
    }
  )

  return <div>hi mom</div>
}
```
