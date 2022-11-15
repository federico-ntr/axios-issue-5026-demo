# Axios jest issue #5026 demonstration

This repo has been created to demonstrate an issue with jest documented [here](https://github.com/axios/axios/issues/5026).

## Steps to reproduce

Note that the steps below assume you have node and yarn installed on your system.

Clone this repo and run

```bash
yarn # Install deps
```

Now that dependencies have been installed run

```bash
CI=true yarn test #CI=true is to avoid executing tests in watch mode
```

Note that this way of passing environment variables to a command doesn't work on Windows, at least outside of WSL.
