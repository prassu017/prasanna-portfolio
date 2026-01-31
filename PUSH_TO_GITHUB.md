# Push this project to GitHub (replace prasanna-portfolio)

Run these commands **in Terminal** from this folder (`Portfolio`).

If you haven’t accepted the Xcode license yet, run this once first:
```bash
sudo xcodebuild -license
```

Then, from the Portfolio folder:

```bash
cd "/Users/prasanna/Library/CloudStorage/OneDrive-UW/projects/Portfolio"

# If this folder is not yet a git repo:
git init
git add .
git commit -m "Portfolio: static site with updated resume"

# Point at GitHub (use existing remote or add it)
git remote remove origin 2>/dev/null
git remote add origin https://github.com/prassu017/prasanna-portfolio.git

# Use main branch and replace everything on GitHub
git branch -M main
git push -u origin main --force
```

**If this folder is already a git repo** (e.g. it already has `origin`), use:

```bash
git add .
git commit -m "Portfolio: static site with updated resume"   # if you have changes
git push origin main --force
```

After pushing, the repo at https://github.com/prassu017/prasanna-portfolio will show this project.  
Turn on **GitHub Pages** in the repo: **Settings → Pages →** Source: **GitHub Actions** (the workflow will deploy the site).
