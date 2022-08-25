---
pagination_next: null
pagination_prev: null
---

# Cognite Transformations CLI

## Transformations CLI

Use the Transformations command-line interface (**Transformations CLI**) to manage the lifecycle of your transformation jobs using the command line. With the Transformations CLI, you can process data from the CDF staging area (RAW) into the CDF data model. To learn more about how the Cognite Transformations CLI package works, see the [documentation](https://cognite-transformations-cli.readthedocs-hosted.com/en/latest/).

The **Transformations CLI** is based on Python and replaces the [Jetfire CLI](https://github.com/cognitedata/jetfire-cli).

### GitHub Action

The **Transformations CLI** provides a GitHub Action to deploy transformations. You'll find the documentation [here](https://github.com/cognitedata/transformations-cli/blob/main/githubaction.md).

We've also created a **CI/CD template** that uses GitHub Workflows. You'll find the documentation [here](https://github.com/cognitedata/transformations-action-template).

### Migrating from Jetfire CLI

**Transformations CLI** replaces the [Jetfire CLI](https://github.com/cognitedata/jetfire-cli). If you've already used the **Jetfire CLI** in a GitHub Action, we recommend migrating to the **Transformations CLI** GitHub Action. You'll find the migration guide [here](https://github.com/cognitedata/transformations-cli/blob/main/migrationguide.md).

### Contributing

We use [poetry](https://python-poetry.org) to manage dependencies and to administrate virtual environments. To develop
**Transformations CLI**, follow these steps to set up your local environment:

1. Install poetry: (add `--user` if desirable)

   ```bash
    pip install poetry
   ```

2. Clone repository:

   ```bash
   git clone git@github.com:cognitedata/transformations-cli.git
   ```

3. Move into the newly created local repository:

   ```bash
   cd transformations-cli
   ```

4. Create a virtual environment and install dependencies:

   ```bash
    poetry install
   ```

5. All the code must pass [black](https://github.com/ambv/black) and [isort](https://github.com/timothycrosley/isort) style
   checks before it can be merged. We recommend installing pre-commit hooks to ensure this locally before you commit your code:

   ```bash
   poetry run pre-commit install
   ```

6. To publish a new version, change the version in `cognite/transformations_cli/__init__.py` and `pyproject.toml`. Make sure to update the `CHANGELOG`.

This project adheres to the [Contributor Covenant v2.0](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)
as a code of conduct.
