# Random Quote Generator

A simple TypeScript console application that displays random inspirational quotes.

## Features

- Displays random quotes from a curated collection
- Clean console output with formatted display
- TypeScript for type safety
- Easy to extend with more quotes

## Installation

1. Navigate to the project directory:
```bash
cd "random quote generator"
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode (using ts-node)
```bash
npm run dev
```

### Production Mode
1. Build the TypeScript files:
```bash
npm run build
```

2. Run the compiled JavaScript:
```bash
npm start
```

### Watch Mode (auto-compile on changes)
```bash
npm run watch
```

## Project Structure

```
random quote generator/
├── src/
│   └── index.ts          # Main TypeScript source file
├── dist/                 # Compiled JavaScript (generated after build)
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies and scripts
└── README.md            # This file
```

## Adding More Quotes

Edit `src/index.ts` and add more quote objects to the `quotes` array:

```typescript
{
  text: "Your quote here",
  author: "Author Name"
}
```

## Requirements

- Node.js (v14 or higher recommended)
- npm

