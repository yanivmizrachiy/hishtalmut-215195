# Public reader deployment contract

This file records the non-secret deployment facts for the linear-function digital reader.

## Production

- Permanent public URL: `https://linear-function-digital-book.vercel.app/`
- Vercel Team/Org ID: `team_lvylZaui6gt5QxzzssXTIKma`
- Vercel Project ID: `prj_6ywVoEYEUFFpVV7gp7TcQqZl5HNq`
- GitHub repository: `yanivmizrachiy/hishtalmut-215195`
- Reader source: `reader/index.html`
- Vercel workflow: `.github/workflows/vercel-reader.yml`

## Workbook source served to the reader

- GitHub Pages base: `https://yanivmizrachiy.github.io/hishtalmut-215195/`
- Manifest source: `https://raw.githubusercontent.com/yanivmizrachiy/hishtalmut-215195/main/meta/pages.json`
- Generated workbook pages are published by `.github/workflows/workbook-qa.yml`.
- The reader is also published at `https://yanivmizrachiy.github.io/hishtalmut-215195/reader/` as a token-independent fallback.

## Required secret

The Vercel deploy workflow requires one GitHub Actions repository secret:

- `VERCEL_TOKEN`

Never commit the token value to the repository, README, workflow, source code, issues, or chat logs.

The token should be scoped to the Vercel project above when possible.

To create a Vercel token with the CLI:

```bash
vercel tokens add "linear-function-github-ci" --project prj_6ywVoEYEUFFpVV7gp7TcQqZl5HNq
```

Then store the returned token as the GitHub Actions secret `VERCEL_TOKEN` for `yanivmizrachiy/hishtalmut-215195`.

If GitHub CLI is installed, the secure command is:

```bash
gh secret set VERCEL_TOKEN --repo yanivmizrachiy/hishtalmut-215195
```

Paste the token only into the hidden prompt from `gh secret set`.

After the secret exists, run or re-run `Deploy public reader to Vercel`. Future changes under `reader/**` deploy automatically to production.
