
not work  
error TS6053: File 'src/**/*.ts' not found.

```shell
npx tsc ./src/**/*.ts
```

This works

```shell
npx tsc ./src/main.ts
```

This also works
use API to build

```shell
npm run build
```