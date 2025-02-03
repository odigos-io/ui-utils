# Odigos UI Utils

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
