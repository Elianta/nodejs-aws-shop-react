# React-shop-cloudfront

This is frontend starter project for nodejs-aws mentoring program. It uses the following technologies:

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool

## Available Scripts

### `start`

Starts the project in dev mode with mocked API on local environment.

### `build`

Builds the project for production in `dist` folder.

### `preview`

Starts the project in production mode on local environment.

### `test`, `test:ui`, `test:coverage`

Runs tests in console, in browser or with coverage.

### `lint`, `prettier`

Runs linting and formatting for all files in `src` folder.

## Deploying React Application to AWS

#### Prerequisites

- AWS CLI configured with appropriate credentials
- AWS CDK CLI installed globally
- React application ready for deployment

### 1. Create a .env file in the infrastructure directory:

```
CDK_DEFAULT_ACCOUNT=your-aws-account-id
CDK_DEFAULT_REGION=your-preferred-region
```

### 2. Install Dependencies

```markdown
# Install project dependencies

npm install

# Install infrastructure dependencies

cd infrastructure
npm install
```

### 3. Make sure you have AWS CLI configured with appropriate credentials:

```
aws configure
```

### 4. Bootstrap CDK in your AWS account (first time only):

```
cd infrastructure
cdk bootstrap
```

### 5. Deploy your application:

```
# Return to project root
cd ..
npm run deploy
```
