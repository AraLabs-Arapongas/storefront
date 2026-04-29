<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Workflow rules

**Never use git worktrees in this repo.** Always work directly in the main checkout. Do not create worktrees, do not suggest them, do not invoke `superpowers:using-git-worktrees` or any skill that depends on them. If a session starts inside `.claude/worktrees/...`, warn the user and merge back to the main branch before continuing.
