# Contribution and review workflow

Medina Nurbek is the sole developer. Keep this repository throughout the diploma and use an identifiable personal Git account. Do not backdate, manufacture commits or split unchanged files solely to inflate contribution counts. Documentation, diagrams, tests and code are substantive work.

## Task to change to evidence

1. Create or update the actual [ACP issue](https://medina-academic-planner.youtrack.cloud/issues/ACP). Include Medina as responsible, expected result, testable acceptance criteria, a deadline and dependencies. Record proposed dates as proposed until agreed.
2. Branch from the reviewed `main`: for example `ACP-7-degree-validator`.
3. Make coherent changes. Example message: `ACP-7: Validate prerequisite and offering constraints`.
4. Run relevant checks; record the real output, limitations and commit.
5. Open a PR using the template. Reference the ACP issue and explain the result and verification.
6. Add the PR or commit URL to the ACP issue. Arrange supervisor review of selected significant changes at agreed checkpoints. Record comments and revisions; self-checks are not supervisor reviews.
7. Merge only the reviewed baseline. Mark a task done only after its own acceptance criteria pass. A prototype screenshot does not complete a production implementation task.

## Submission tags

Use `pre-defense-1`, `pre-defense-2` and `final-pre-defense` for their actual stages. Before creating a tag, record the exact reviewed commit, review evidence, summary, limitations and outstanding tasks using [the checklist](docs/submission-checklist.md). Check `git ls-remote --tags origin`; never overwrite or move a published tag. Do not create all three tags on the current draft.

Once the stage and reviewed SHA are confirmed:

```sh
git tag -a pre-defense-1 REVIEWED_COMMIT_SHA -m "First pre-defense reviewed submission"
git push origin pre-defense-1
```

Replace the placeholder SHA with the actual reviewed commit and use the appropriate stage tag. No historical approval is inferred from running these commands.

## Repository demonstration

Show the README/component boundaries; run the prototype and checks; inspect real history; trace ACP-1 to its branch, commits and PR; explain the author contribution, reviews and resulting changes. Show known implementation limits and all outstanding acceptance checks. Give supervisor/committee access before each pre-defense without publishing private research data.
