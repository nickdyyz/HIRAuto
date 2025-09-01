# Changelog

All notable changes to HIRAuto will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2025-01-09

### Fixed
- ESLint configuration issues preventing CI/CD pipeline from completing
- TypeScript `any` type warnings in utils functions
- Simplified ESLint configuration to resolve compatibility issues

### Changed
- Improved type safety by replacing `any` types with `unknown` and `Record<string, unknown>`
- Updated ESLint configuration to be more compatible with current TypeScript versions
- Enhanced development workflow reliability

## [1.1.0] - 2025-01-09

### Added
- Enhanced drag-and-drop reordering system with precise drop zone detection
- Visual feedback improvements (scaling effects, hover states, drop indicators)
- Priority number input validation with real-time error handling
- Professional branding update ("Welcome to HIRAuto")
- Comprehensive console logging for debugging drag operations
- Semantic versioning implementation with Git tags

### Fixed
- Drag-and-drop positioning accuracy when moving hazards down
- Drop zone detection for proper insertion point identification  
- Index calculation flaws causing incorrect item placement
- Visual feedback insufficient during drag operations
- Missing `changePriority()` and `validatePriorityInput()` functions

### Changed
- Complete rewrite of drag-and-drop event handling system
- Improved array manipulation methods for risk reordering
- Enhanced user interface feedback throughout drag lifecycle
- Better error handling with comprehensive bounds checking

### Technical
- Added `reorderRisksImproved()` method with more reliable array operations
- Enhanced event listener management and cleanup
- Improved state variable handling (draggedElement, currentDropTarget)
- Better separation of concerns between old and new reordering methods

## [1.0.0] - 2025-01-09

### Added
- Initial release of HIRAuto - Professional HIRA-compliant risk assessment framework
- Interactive web interface with 100+ predefined hazards across 6 major categories
- TypeScript backend services with proper separation of concerns
- Comprehensive hazard database covering Natural, Technological, Human-Caused, Health, and Emerging threats
- HIRA-compliant scoring system (0-100 scale) with 6-tier risk classification
- Advanced search and filtering capabilities
- Automated risk ranking with manual override capability
- Responsive design optimized for desktop, tablet, and mobile
- Jest testing framework with comprehensive unit tests
- Vercel deployment configuration with security headers
- Complete documentation and MIT license
- GitHub Actions CI/CD pipeline for automated testing and deployment

### Technical Features
- Risk calculation algorithm: Frequency × Consequence with HIRA methodology
- In-memory hazard database with categorized risk classifications
- Real-time risk score calculations with visual feedback
- Professional documentation with deployment guides
- Production-ready build system and configuration

---

## Version Strategy

- **MAJOR.MINOR.PATCH** semantic versioning
- **Major** (X.0.0): Breaking changes, fundamental architecture changes
- **Minor** (1.X.0): New features, enhancements, significant improvements
- **Patch** (1.1.X): Bug fixes, minor improvements, security updates

## Release Types

- 🚀 **Major Release**: New major features, UI overhauls, breaking changes
- ✨ **Minor Release**: Feature additions, enhancements, improvements  
- 🐛 **Patch Release**: Bug fixes, security patches, minor tweaks
- 📚 **Documentation**: Updates to docs, README, deployment guides
