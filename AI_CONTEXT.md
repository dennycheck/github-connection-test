# AI Assistant Context - GitHub Connection Test Project

## Project Overview
This is a test repository for verifying GitHub connection and deployment workflows. The project includes a simple HTML/CSS/JavaScript website that's hosted on GitHub Pages.

**Public URL:** https://dennycheck.github.io/github-connection-test/

## Current State
- ✅ GitHub connection working
- ✅ GitHub Pages deployment active
- ✅ Multi-device workflow tested and working
- ✅ Cache-busting implemented (`?v=2` parameters on CSS/JS)

## Key Features Implemented
1. **Timestamp Display** - Shows current date/time when page loads
2. **Click Counter Button** - Original "Click Me!" button with counter
3. **Test Button** - Pink "Run Test" button that displays random test status messages
4. **Cache-Busting** - Version parameters (`?v=2`) added to CSS and JS files to prevent browser caching issues

## Important Notes for AI Assistants

### Cache-Busting Strategy
- CSS and JS files include version parameters: `styles.css?v=2` and `script.js?v=2`
- **IMPORTANT:** When updating CSS or JS files, increment the version number (e.g., `?v=3`) to force browsers to reload
- This prevents caching issues where local changes don't appear on the GitHub-hosted version

### Multi-Device Workflow
- User works on multiple computers
- Changes are pushed/pulled via GitHub
- Always check `git status` and `git pull` before making changes to ensure sync

### Recent Issues Resolved
- **Browser caching:** Fixed by adding cache-busting parameters to CSS/JS files
- **Merge conflicts:** Resolved conflicts in `test.txt` when syncing between devices

## File Structure
- `index.html` - Main HTML file
- `styles.css` - Stylesheet (includes pink gradient for `.btn-secondary`)
- `script.js` - JavaScript functionality (timestamp, button interactions)
- `test.txt` - Testing notes and progress tracking
- `AI_CONTEXT.md` - This file (for AI assistant context)

## Git Workflow
- Main branch: `main`
- Remote: `origin` → `https://github.com/dennycheck/github-connection-test.git`
- Always pull before pushing to avoid conflicts

## For Future AI Assistants
When picking up work on this project:
1. Read this file first to understand context
2. Check `git status` to see current state
3. Pull latest changes if needed
4. Remember to increment cache-busting version numbers when updating CSS/JS
5. Update this file if making significant changes or decisions

---
*Last updated: 2025-11-29*

