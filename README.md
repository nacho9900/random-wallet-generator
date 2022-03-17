# Random Ethereum wallet generator

This code will generate an `addresses.txt` file which will contains a set of N addresses.

## How to run it

1. Install dependencies:

```shell
yarn install
```

2. Compile

```shell
tsc
```

3. Run with parameter (after step 2 only repeat this step to run)

n = number of addresses (default 10k)

```shell
node dist/index.js 100000
```