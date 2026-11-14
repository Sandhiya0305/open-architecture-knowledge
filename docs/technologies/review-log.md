# Catalogue review log

## November 2026 review

- **Reviewed:** 14 November 2026
- **Scope:** Java, Python, Node.js/TypeScript, PHP and cross-stack entries
- **Method:** Check official documentation, project release or maintenance information, and licensing notices where a project has changed its licensing model
- **Selection:** Include tools with a distinct implementation role and usable official documentation. This is a functional catalogue, not a popularity ranking or endorsement.

### Changes in this review

- Corrected the REST reference to Roy Fielding's dissertation, which defines REST as an architectural style. Microsoft API guidelines remain useful API-design guidance, not the source of REST.
- Added a version-specific licensing note for Redis.
- Added a licensing note for Terraform releases from 1.6 onward and linked OpenTofu as an alternative to evaluate.
- Added Starlette and two task-queue alternatives to the Python ecosystem.
- Broadened the Java framework examples beyond the Spring ecosystem.
- Consolidated the review date here rather than repeating an unverifiable date on every ecosystem page.

### Maintenance policy

Run a short monthly check for major releases, support changes and licensing notices. Perform a full catalogue review quarterly, checking official documentation and project maintenance signals. Remove a tool when its project is archived, unsupported or no longer relevant to the stated role. A listed tool is not automatically recommended for every project.

**Next monthly check:** 14 December 2026. **Next full catalogue review:** 14 February 2027. These are manual review targets, not automated freshness guarantees.

### Sources checked for this review

- [Roy Fielding's dissertation - Architectural Styles and the Design of Network-based Software Architectures](https://ics.uci.edu/~fielding/pubs/dissertation/abstract.htm)
- [Redis licensing overview](https://redis.io/legal/licenses/)
- [Terraform license](https://github.com/hashicorp/terraform/blob/main/LICENSE)
- [Starlette documentation](https://www.starlette.io/)
- [Dramatiq documentation](https://dramatiq.io/)
- [RQ documentation](https://python-rq.org/)

### Version-specific licensing and maintenance notes

| Project | Version scope | License | Maintenance signal |
|---|---|---|---|
| Redis | 7.2 and earlier; 7.4; 8 and later | BSD-3-Clause; RSALv2/SSPLv1; RSALv2/SSPLv1/AGPLv3 respectively | [Official releases](https://github.com/redis/redis/releases) and [license overview](https://redis.io/legal/licenses/) |
| Terraform | 1.5.7 and earlier; 1.6.0 and later | MPL-2.0; Business Source License 1.1 respectively | [Official releases](https://github.com/hashicorp/terraform/releases) and [license file](https://github.com/hashicorp/terraform/blob/main/LICENSE) |

The remaining catalogue entries are not assigned a single pinned version or a blanket active status. Release cadence and support policy differ by project; consult the linked official project documentation and release history for the exact version being evaluated.

### Documentation toolchain maintenance

- **MkDocs core 1.6.1:** the latest stable 1.x release checked on this review date (2024-08-30). MkDocs 2.0 development pre-releases exist, but they are a rewrite that does not read this site?s `mkdocs.yml`; do not install them with `--pre` for this project. Keep the stable 1.6.1 pin while evaluating the separate Zensical migration path.
- **Material for MkDocs 9.8.1:** released 7 November 2026. The maintainers have ended feature development and placed it in maintenance mode; critical fixes and security updates are scheduled through 5 May 2027.
- **Zensical 0.1.1:** on the 0.x release line and pinned as a compatibility build, not yet the production publisher. CI builds both Zensical and the existing MkDocs Material site so migration can be evaluated without changing the deployed output.

Recheck the upstream release notes before updating these pins. Do not treat the Material maintenance window as an assurance of support after 5 May 2027.

Sources: [MkDocs release notes](https://www.mkdocs.org/about/release-notes/); [MkDocs 2.0 pre-release history](https://pypi.org/project/mkdocs/); [Material for MkDocs changelog and end-of-life notice](https://squidfunk.github.io/mkdocs-material/changelog/); [Zensical release history](https://pypi.org/project/zensical/); [Zensical migration guidance](https://zensical.org/docs/compatibility/mkdocs/migration/).
