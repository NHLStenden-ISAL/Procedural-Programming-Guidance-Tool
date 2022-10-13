# Change Log

All notable changes to the "procedural-guidance-tool" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2022-10-07
### Added
- Syntax Highlighting for the Annotation Language.
- Configurable test generator for generating JUnit tests based on the provided annotations.
- Annotation Viewer Interface:
    - Displays all annotations for the current class, grouped by type (Internal vs. External).
    - Displays errors and warnings for these annotations, for example in the case of a syntax error.
    - Provides buttons for generating tests and adding annotation stubs to unannotated classes, methods and fields.
