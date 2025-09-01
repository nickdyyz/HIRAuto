# Hazard Risk Assessment Framework (HIRA)

🚀 **Professional Risk Management System** | ⚡ **HIRA-Compliant Scoring** | 🎯 **Interactive Risk Prioritization**

## Overview

The Hazard Risk Assessment Framework is a comprehensive web-based system designed for professional risk management and hazard identification. Built with TypeScript and featuring an intuitive web interface, it provides systematic hazard assessment, automated risk scoring, and intelligent prioritization based on industry-standard HIRA methodologies.

### 🌟 Key Features

- **📊 Professional Risk Assessment**: HIRA-compliant scoring system (0-100 scale)
- **🗂️ Comprehensive Hazard Database**: 100+ predefined hazards across 6 major categories
- **🔍 Advanced Search & Filtering**: Find hazards by name, category, or description
- **⚖️ Interactive Risk Scoring**: Visual sliders for frequency and consequence assessment
- **📈 Automated Risk Ranking**: Smart prioritization with manual override capability
- **🎯 Drag & Drop Reordering**: Intuitive risk priority management
- **📱 Responsive Design**: Works seamlessly across desktop, tablet, and mobile
- **🔄 Real-time Calculations**: Instant risk score updates as you assess

## 📋 Risk Categories Covered

- **🌍 Natural Hazards**: Geological, Hydrometeorological, and Space Weather
- **⚙️ Technological Hazards**: Industrial Accidents, Infrastructure Failures
- **👥 Human-Caused Events**: Intentional Acts, Security Threats
- **🏥 Health Emergencies**: Biological, Chemical, and Radiological
- **🚀 Emerging Threats**: AI Failures, Nanotechnology, Space Debris
- **🔬 Specialized Risks**: Cyber-Physical Attacks, Supply Chain Disruptions

## 🏗️ Project Architecture

```
📁 hazard-risk-assessment-framework/
├── 📁 src/                    # TypeScript Backend Services
│   ├── 📁 algorithm/          # Risk Calculation Engine
│   │   └── proprietaryAlgorithm.ts
│   ├── 📁 models/             # Data Models & Interfaces
│   │   └── risk.ts
│   ├── 📁 logic/              # Assessment Logic
│   │   └── assessment.ts
│   ├── 📁 services/           # Business Logic Services
│   │   ├── riskAssessmentService.ts
│   │   └── hazardService.ts
│   ├── 📁 utils/              # Utility Functions
│   │   └── index.ts
│   └── index.ts               # Main Export File
├── 📄 index.html              # Frontend Interface
├── 📄 app.js                  # Frontend Application Logic
├── 📄 server.js               # Development Server
├── 📄 package.json            # Dependencies & Scripts
└── 📄 tsconfig.json           # TypeScript Configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/hazard-risk-assessment-framework.git
   cd hazard-risk-assessment-framework
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   # or
   node server.js
   ```

4. **Open in browser:**
   ```
   http://localhost:4501
   ```

### Production Build

```bash
# Build TypeScript
npm run build

# Start production server
npm start
```

## 💻 Usage Guide

### 1. **Hazard Selection**
- Browse the comprehensive hazard database
- Use search functionality to find specific hazards
- Filter by category (Natural, Technological, Human-Caused, etc.)
- Click on hazards to expand assessment panels

### 2. **Risk Assessment**
- **Frequency Rating (1-6)**: Assess likelihood of occurrence
  - 1: Rare (<1% chance per year)
  - 6: Almost Certain (100% chance per year)
- **Consequence Rating (1-6)**: Evaluate potential impact
  - 1: Minor impact
  - 6: Catastrophic impact
- Click ✓ to confirm assessment

### 3. **Risk Analysis**
- View calculated HIRA scores (0-100 scale)
- See automatic risk level classification:
  - 🔴 **Extreme (51-100)**: Immediate action required
  - 🟠 **Very High (41-50)**: Urgent attention needed
  - 🟡 **High (31-40)**: Priority action required
  - 🟢 **Moderate (21-30)**: Planned response
  - 🔵 **Low (11-20)**: Monitor and review
  - ⚪ **Very Low (0-10)**: Acceptable risk

### 4. **Priority Management**
- Review auto-generated risk rankings
- Drag and drop to manually reorder priorities
- Reset to automatic rankings anytime
- Export results for reporting

## 🛠️ API Reference

### TypeScript Services

```typescript
// Import the framework
import { RiskAssessmentService, HazardService } from './src/index';

// Initialize services
const riskService = new RiskAssessmentService();
const hazardService = new HazardService();

// Get available hazards
const hazards = hazardService.getAvailableHazards();

// Assess risks
const assessments = [
  { hazardId: 'nh_geo_001', frequency: 3, consequence: 4 }
];
const results = riskService.assessRisks(assessments);
```

### Core Functions

#### Risk Calculation
```typescript
import { calculateRisk, getRiskLevel } from './src/algorithm/proprietaryAlgorithm';

const riskScore = calculateRisk(frequency, consequence);
const riskLevel = getRiskLevel(riskScore);
```

#### Assessment Logic
```typescript
import { assessRisk, rankRisks } from './src/logic/assessment';

const risk = assessRisk(hazard, frequency, consequence);
const rankedRisks = rankRisks(risks);
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Configure build settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy static files:**
   - Upload `index.html`, `app.js`, and `dist/` to your hosting provider
   - Configure your server to serve static files

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 🎨 Customization

### Adding New Hazards

Edit `src/services/hazardService.ts`:

```typescript
const NEW_HAZARD: Hazard = {
  id: 'custom_001',
  name: 'Custom Hazard',
  description: 'Description of the hazard',
  category: 'Custom Category'
};
```

### Modifying Risk Algorithm

Update `src/algorithm/proprietaryAlgorithm.ts`:

```typescript
export function calculateRisk(frequency: number, consequence: number): number {
    // Implement your custom risk calculation
    return frequency * consequence * customFactor;
}
```

### Styling Customization

The frontend uses Tailwind CSS for styling. Modify classes in `index.html` and `app.js` to customize the appearance.

## 📊 Technical Specifications

- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Backend**: TypeScript, Node.js
- **Risk Algorithm**: HIRA-compliant scoring (Frequency × Consequence)
- **Database**: In-memory hazard database (100+ predefined hazards)
- **Scoring Scale**: 0-100 with 6-tier risk classification
- **Browser Support**: Modern browsers (ES6+)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain test coverage above 80%
- Use semantic commit messages
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Based on industry-standard HIRA methodologies
- Hazard classifications follow international emergency management standards
- UI/UX inspired by modern risk management platforms

---

**Made with ❤️ for Professional Risk Management**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/hazard-risk-assessment-framework)
