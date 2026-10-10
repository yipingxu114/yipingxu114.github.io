# Yiping Xu — Portfolio

A data-driven UX design and UX engineering portfolio built with React, Vite, TypeScript, and CSS. It deploys to GitHub Pages whenever `main` is updated.

## Run locally in VS Code

1. Open this folder in VS Code.
2. Install Node.js 22 or later.
3. Open the integrated terminal and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite.

Before pushing a change, run `npm run build` to catch TypeScript or build errors.

## Edit personal details

Edit `src/data/site.ts` for the introduction, email, GitHub link, and resume link. The email is intentionally an obvious placeholder until a real address is supplied.

## Edit or rearrange projects

All project and research content lives in `src/data/projects.ts`.

- Edit text directly within a project object.
- Rearrange the objects in the `projects` array to change their display order.
- Add a new project by copying an existing object and giving it a unique `slug`.
- Keep `status` accurate: `Completed work`, `Work in progress`, or `Proposed / planned`.
- Add, remove, or reorder objects in `sections` to change the case study.

The reusable page at `src/pages/CaseStudy.tsx` renders every case study automatically.

## Replace project covers

The current covers are intentionally abstract, code-generated placeholders in `src/components/ProjectVisual.tsx` and `src/styles.css`. To use real images:

1. Put optimized images in `public/covers/` (WebP or AVIF recommended).
2. Add an optional `image` path to the `Project` type and the appropriate project object in `src/data/projects.ts`.
3. In `ProjectVisual.tsx`, render `<img src={project.image} alt="..." />` when `image` exists.

Aim for images around 1600px wide and under 500 KB. Write useful alt text for screenshots; use empty alt text only for purely decorative images.

## Add screenshots, video, code, or Figma embeds

Case study sections currently support text, bullets, and documentation notes. To add richer media:

1. Extend `CaseSection` in `src/data/projects.ts` with a field such as `image`, `video`, `code`, or `embedUrl`.
2. Add the media path or URL to the desired section.
3. Render that optional field in the section loop in `src/pages/CaseStudy.tsx`.

Use `public/media/<project-slug>/` for local screenshots and videos. For Figma, use a public prototype embed URL and include a regular fallback link.

## Upload a resume

1. Replace `public/resume/README.md` with a PDF named `Yiping-Xu-Resume.pdf`.
2. Change `resume` in `src/data/site.ts` to `/resume/Yiping-Xu-Resume.pdf`.
3. Update the resume link text in `src/pages/About.tsx` and remove the `disabled-link` class.

## Change the visual design

Global colors, typography, spacing, breakpoints, project-cover art, and component styling are in `src/styles.css`. The main design tokens are at the top under `:root`.

## Add a new case study

1. Copy a project object in `src/data/projects.ts`.
2. Change its title, unique slug, category, status, tags, cover style, and sections.
3. If it is regular work, keep `kind: 'project'` and add it to `projects`. If it is research, expand the research data model and research listing as needed.
4. The route `/work/<slug>` is created automatically by React Router.

## Deployment

`.github/workflows/deploy.yml` builds and deploys the `dist` directory on every push to `main`. In the GitHub repository settings, Pages → Build and deployment must be set to **GitHub Actions**.

For direct URLs, `public/404.html` redirects GitHub Pages requests back into the React router.
