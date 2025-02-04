# LKT TS Interfaces

In this package are located the interfaces used by lkt-web-tech project.

## LktObject

This interface polyfills the traditional Javascript object to Typescript.

### Usage

```typescript
import {LktObject} from "lkt-ts-interfaces";

const myObject: LktObject = {};

// With this interface, you can add props dynamically:
const props = ['lorem', 'ipsum'];
props.forEach(prop => {myObject[prop] = prop});

// Or like this:
myObject.may = '...the force be with you!'
```

