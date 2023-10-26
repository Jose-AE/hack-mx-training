## Getting Started

```bash
npx create-next-app@latest
```

## Setting up Chakra UI

```bash
npm i @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion
```

```ts
// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
```
