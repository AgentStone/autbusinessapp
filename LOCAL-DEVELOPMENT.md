# Workstack local development

This checkout contains the source for https://workstack-tools.theautumnks.chatgpt.site.

## Start on Windows

Open PowerShell and run:

```powershell
Set-Location 'C:\Users\iskyf\OneDrive\Code\Aut Business'
npm.cmd run dev
```

Open the localhost URL printed by the server (normally http://localhost:5173).
Press Ctrl+C to stop it. Changes to source files reload during development.

## Main files

- `app/page.tsx`: storefront and interactions
- `app/globals.css`: visual styling
- `lib/catalog.ts`: products, niches, bundles, and placeholder prices
- `app/layout.tsx`: shared page layout and metadata

## Dependencies and checks

Node.js must be at least 22.13.0. This project uses pnpm 11.25.0 and its committed lockfile. Python is not required by this application.

```powershell
# Restore dependencies when needed:
npx.cmd --yes pnpm@11.25.0 install --frozen-lockfile --prefer-offline

# Check and build:
npm.cmd run lint
npm.cmd run build
```

Use `.cmd` commands if PowerShell blocks npm's script wrapper. A clean checkout defaults to the portable Windows-compatible runtime.

Running locally does not publish changes to the hosted site. `origin` points to the GitHub repository at https://github.com/AgentStone/autbusinessapp. The original Sites source repository is preserved as `sites`; it uses temporary credentials, so ask the agent to obtain fresh access when that remote is needed.
