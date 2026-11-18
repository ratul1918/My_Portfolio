# Deployment and verification

This portfolio uses the existing GitHub repository and Vercel hosting setup.

- Repository: https://github.com/ratul1918/My_Portfolio
- Production branch: `main`
- Public URL: https://rafiurrahman1918.vercel.app

## Before publishing

Use Node.js 22 LTS and run:

```sh
npm ci
npm run typecheck
npm run build
npm run preview
```

Check navigation, project links, mobile layout, theme switching, and the research section in the production preview. Theme preference should survive a reload. The contact action opens an email client; it does not submit to a server.

## Existing Vercel project

Keep the existing project linked to `ratul1918/My_Portfolio` and its production branch set to `main`. The tracked `vercel.json` declares Vite, `npm ci`, `npm run build`, and `dist` output. No environment variables are required.

Push the reviewed changes to `main`. If the Git integration is enabled, Vercel creates a new deployment. In the Vercel project dashboard, verify that the production deployment is Ready and its source commit matches the pushed commit before treating publication as complete.

## Verify the public site

1. Open the public URL and confirm the page title includes “Learner, Builder & Aspiring Researcher”.
2. Confirm recent projects and the AI/ML/computer vision research section are present.
3. Switch between light and dark themes and reload to check persistence.
4. Check the mobile menu, section links, project links, and copy-email control.
5. Confirm production JavaScript, CSS, and the portrait load successfully.

The `/github` and `/linkedin` redirects are retained. Section URLs use fragments (for example `/#research`) and do not need a server-side router.

## Troubleshooting

- **Old site still visible:** check whether the latest Git commit produced a deployment, whether it is Ready, and whether the production domain points to it. A local build does not verify a Vercel deployment.
- **Install failure:** use the committed lockfile with `npm ci` and confirm the configured Node version is supported by the dependencies.
- **Build failure:** reproduce `npm run build` locally and inspect the Vercel build log.
- **Repository-wide type errors:** unused legacy template components have existing import issues. `npm run typecheck` checks the active application via `tsconfig.app.json`.
- **External demo unavailable:** those projects have separate hosting and are not deployed with this portfolio.

Never commit environment files, access tokens, or Vercel credentials.
