# Agent Guidelines for SvelteKit Tutorials

## Container-Only Development

- Do not run `node`, `npm`, `npx`, or `pnpm` on the host.
- Podman is the only host-side development dependency.
- Run all Node and npm commands in the official Node container.
- Mount dependencies and the npm cache in Podman volumes so they are
  not installed in the project or elsewhere on the host.
- Run commands from the repository root. The source mount is writable
  so formatters, migrations, and SvelteKit can update project files.

Install dependencies after cloning or changing `package-lock.json`:

```bash
podman run --rm -it \
  --init \
  --cap-drop=all \
  --security-opt=no-new-privileges \
  -v "$PWD:/workspace:Z" \
  -v sveltekit-blog-node-modules:/workspace/node_modules \
  -v sveltekit-blog-npm-cache:/root/.npm \
  -w /workspace \
  docker.io/library/node:22-bookworm \
  npm install
```

For non-server commands, use the same container and replace
`npm install` with the required command. For example:

```bash
podman run --rm -it \
  --init \
  --cap-drop=all \
  --security-opt=no-new-privileges \
  -v "$PWD:/workspace:Z" \
  -v sveltekit-blog-node-modules:/workspace/node_modules \
  -v sveltekit-blog-npm-cache:/root/.npm \
  -w /workspace \
  docker.io/library/node:22-bookworm \
  npm run check
```

Use `npm ci` instead of `npm install` once `package-lock.json` is in
sync with `package.json`. Never install packages globally.

## Build/Lint/Test Commands

### Development

- `npm run dev -- --host 0.0.0.0` - Start the development server in
  the container with hot reload. Add
  `-p 127.0.0.1:3000:3000` to the Podman command before the image.
- `npm run build` - Build for production in the container
- `npm run preview -- --host 0.0.0.0` - Preview the production build.
  Add `-p 127.0.0.1:4173:4173` to the Podman command before the image.

### Code Quality

- `npm run check` - Type check with svelte-check and sync in the
  container
- `npm run check:watch` - Watch type checking in the container
- `npm run lint` - Check formatting with Prettier in the container
- `npm run format` - Auto-format in the container

## Code Style Guidelines

### Formatting (Prettier)

- Double quotes (`"`)
- No trailing commas
- 70 character line width
- Svelte plugin enabled

### TypeScript

- Strict mode enabled
- PascalCase for interfaces and types
- camelCase for variables and functions
- Explicit return types for exported functions

### Svelte Components

- PascalCase for component names (e.g., `BasicButton.svelte`)
- Use Svelte 5 `$props()` syntax
- TypeScript interfaces for component props
- Use `Snippet` type for children/icon slots

### Imports

- `$lib/` for internal library imports
- Relative imports for local files
- Group imports: external libs, then internal, then types
- Use `.js` extension in TypeScript imports (ES modules)

### Naming Conventions

- Components: PascalCase
- Variables/Functions: camelCase
- Files: PascalCase for components, camelCase for utilities
- Directories: lowercase with hyphens if needed

### Error Handling

- Use try/catch blocks for async operations
- Return early with descriptive error messages
- Use `fail()` and `message()` from sveltekit-superforms

### Styling

- Tailwind CSS with custom utilities
- Use `cn()` utility for conditional classes
- Dark mode support with `dark:` prefixes
- Responsive design with Tailwind breakpoints
