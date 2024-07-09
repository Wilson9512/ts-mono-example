這是一個 TypeScript monorepo 專案，包含多個子包。該專案使用 Yarn 4.x 作為包管理工具。
This is a TypeScript monorepo project that contains multiple sub-packages. It uses Yarn 4.x as the package manager.

## Prerequisites

- Node.js (Recommended version: 16.x or newer)
- Yarn 4.x

## Installation

1. Clone the repository to your local machine:

   bash:
   `
   git clone https://github.com/your-repo/ts-monorepo.git
   cd ts-monorepo
   `

2. Install dependencies:

   bash:
   `
   yarn install
   `

3. Build all packages:

   bash:
   `
   yarn build
   `

## Running `app1`

1. Navigate to the `app1` directory:

   bash:
   `
   cd packages/app1
   `

2. Start the application:

   bash:
   `
   yarn start
   `

## Directory Structure

- **packages/app1**: This is a sample React Native application.
- **packages/common**: This is a shared package containing various TypeScript functions that can be used in other packages.

## Scripts

Some useful scripts defined in the root `package.json`:

- **`yarn build`**: Builds all packages in the workspace.
- **`yarn postinstall`**: Automatically builds all packages after dependencies are installed.

## Troubleshooting

### Issue: Installation failed

If you encounter issues during the installation process, try cleaning the existing installation and reinstalling:

bash:
`
rm -rf node_modules yarn.lock packages/*/node_modules
yarn install
`

### Issue: Build failed

If you encounter issues during the build process, check the build logs to diagnose the error. The log file path is usually provided in the error message.
