class HazardAssessmentApp {
    constructor() {
        this.assessments = [];
        this.hazards = [];
        this.selectedHazard = null;
        this.filteredHazards = [];
        this.init();
    }

    async init() {
        await this.loadHazards();
        this.setupEventListeners();
        this.populateCategoryButtons();
        this.displayHazards();
    }

    async loadHazards() {
        this.hazards = [
            // Natural Hazards - Geological
            { id: 'nh_geo_001', name: 'Earthquake', description: 'Seismic ground shaking', category: 'Natural - Geological' },
            { id: 'nh_geo_002', name: 'Tsunami', description: 'Ocean wave caused by seismic activity', category: 'Natural - Geological' },
            { id: 'nh_geo_003', name: 'Volcanic Eruption', description: 'Volcanic activity and ash', category: 'Natural - Geological' },
            { id: 'nh_geo_004', name: 'Landslide', description: 'Ground movement and debris flow', category: 'Natural - Geological' },
            { id: 'nh_geo_005', name: 'Sinkhole', description: 'Ground collapse', category: 'Natural - Geological' },
            { id: 'nh_geo_006', name: 'Erosion', description: 'Soil and rock displacement', category: 'Natural - Geological' },
            { id: 'nh_geo_007', name: 'Avalanche', description: 'Snow and ice slide', category: 'Natural - Geological' },
            { id: 'nh_geo_008', name: 'Dust storms / sandstorms', description: 'Airborne particulate matter', category: 'Natural - Geological' },
            { id: 'nh_geo_009', name: 'Permafrost thaw / subsidence', description: 'Ground thaw and settling', category: 'Natural - Geological' },
            
            // Natural Hazards - Hydrometeorological
            { id: 'nh_hyd_001', name: 'Flooding', description: 'Water overflow', category: 'Natural - Hydrometeorological' },
            { id: 'nh_hyd_002', name: 'Tropical Cyclone (Typhoon, Hurricane)', description: 'Rotating storm system', category: 'Natural - Hydrometeorological' },
            { id: 'nh_hyd_003', name: 'Tornado', description: 'Rotating column of air', category: 'Natural - Hydrometeorological' },
            { id: 'nh_hyd_004', name: 'Waterspout', description: 'Tornado over water', category: 'Natural - Hydrometeorological' },
            { id: 'nh_hyd_005', name: 'Hailstorm', description: 'Ice precipitation', category: 'Natural - Hydrometeorological' },
            { id: 'nh_hyd_006', name: 'Lightning', description: 'Electrical discharge', category: 'Natural - Hydrometeorological' },
            { id: 'nh_hyd_007', name: 'Wildfire', description: 'Uncontrolled fire', category: 'Natural - Hydrometeorological' },
            { id: 'nh_hyd_008', name: 'Extreme Heat', description: 'Dangerous high temperatures', category: 'Natural - Hydrometeorological' },
            { id: 'nh_hyd_009', name: 'Extreme Cold', description: 'Dangerous low temperatures', category: 'Natural - Hydrometeorological' },
            { id: 'nh_hyd_010', name: 'Drought', description: 'Extended dry conditions', category: 'Natural - Hydrometeorological' },
            { id: 'nh_hyd_011', name: 'Urban flooding', description: 'City water overflow', category: 'Natural - Hydrometeorological' },
            { id: 'nh_hyd_012', name: 'Winter storms / blizzards / ice storms', description: 'Severe winter weather', category: 'Natural - Hydrometeorological' },
            { id: 'nh_hyd_013', name: 'Storm surge', description: 'Ocean water pushed ashore', category: 'Natural - Hydrometeorological' },
            { id: 'nh_hyd_014', name: 'Straight-line winds / derechos', description: 'Severe wind events', category: 'Natural - Hydrometeorological' },
            
            // Natural Hazards - Other
            { id: 'nh_oth_001', name: 'Geomagnetic Storm', description: 'Magnetic field disturbance', category: 'Natural - Other' },
            { id: 'nh_oth_002', name: 'Solar flare / Coronal Mass Ejection (CME)', description: 'Solar radiation event', category: 'Natural - Other' },
            
            // Technological Hazards - Accidents
            { id: 'th_acc_001', name: 'Hazardous Chemical Release (Fixed Site)', description: 'Chemical spill at facility', category: 'Technological - Accidents' },
            { id: 'th_acc_002', name: 'Hazardous Chemical Release (Transportation)', description: 'Chemical spill during transport', category: 'Technological - Accidents' },
            { id: 'th_acc_003', name: 'Radiation/Nuclear Release', description: 'Radioactive material release', category: 'Technological - Accidents' },
            { id: 'th_acc_004', name: 'Industrial Explosion', description: 'Explosion at industrial site', category: 'Technological - Accidents' },
            { id: 'th_acc_005', name: 'Transportation Accident', description: 'Vehicle collision or derailment', category: 'Technological - Accidents' },
            { id: 'th_acc_006', name: 'Oil spill', description: 'Petroleum product release', category: 'Technological - Accidents' },
            { id: 'th_acc_007', name: 'Mining accidents', description: 'Mining operation incident', category: 'Technological - Accidents' },
            { id: 'th_acc_008', name: 'Structural fires in industrial facilities', description: 'Fire in industrial building', category: 'Technological - Accidents' },
            
            // Technological Hazards - Infrastructure
            { id: 'th_inf_001', name: 'Dam/Levee Failure', description: 'Water control structure failure', category: 'Technological - Infrastructure' },
            { id: 'th_inf_002', name: 'Power/Utilities Outage', description: 'Loss of electrical power', category: 'Technological - Infrastructure' },
            { id: 'th_inf_003', name: 'Infrastructure Collapse', description: 'Structural failure', category: 'Technological - Infrastructure' },
            { id: 'th_inf_004', name: 'Urban Conflagration', description: 'Large urban fire', category: 'Technological - Infrastructure' },
            { id: 'th_inf_005', name: 'Cyberattack', description: 'Digital system compromise', category: 'Technological - Infrastructure' },
            { id: 'th_inf_006', name: 'Equipment failures', description: 'Mechanical system failure', category: 'Technological - Infrastructure' },
            { id: 'th_inf_007', name: 'Telecommunications outage', description: 'Communication system failure', category: 'Technological - Infrastructure' },
            { id: 'th_inf_008', name: 'Water system contamination', description: 'Water supply pollution', category: 'Technological - Infrastructure' },
            { id: 'th_inf_009', name: 'Transportation infrastructure failure', description: 'Transport system breakdown', category: 'Technological - Infrastructure' },
            
            // Human Caused Events - Intentional Acts
            { id: 'hc_int_001', name: 'Civil Unrest', description: 'Public disorder and riots', category: 'Human Caused - Intentional' },
            { id: 'hc_int_002', name: 'Terrorist Attack', description: 'Coordinated violent act', category: 'Human Caused - Intentional' },
            { id: 'hc_int_003', name: 'Mass Violence', description: 'Large-scale violent incident', category: 'Human Caused - Intentional' },
            { id: 'hc_int_004', name: 'Sabotage/Vandalism', description: 'Deliberate damage or disruption', category: 'Human Caused - Intentional' },
            { id: 'hc_int_005', name: 'Armed Conflict', description: 'Military or paramilitary action', category: 'Human Caused - Intentional' },
            { id: 'hc_int_006', name: 'Active Aggressor', description: 'Individual violent threat', category: 'Human Caused - Intentional' },
            { id: 'hc_int_007', name: 'Anonymous Threats', description: 'Unidentified threatening communication', category: 'Human Caused - Intentional' },
            { id: 'hc_int_008', name: 'Workplace violence', description: 'Violence in work environment', category: 'Human Caused - Intentional' },
            { id: 'hc_int_009', name: 'Cyber-physical attacks', description: 'Digital attack on physical systems', category: 'Human Caused - Intentional' },
            { id: 'hc_int_010', name: 'Bomb threats', description: 'Explosive device threat', category: 'Human Caused - Intentional' },
            { id: 'hc_int_011', name: 'Insider threat', description: 'Internal personnel security risk', category: 'Human Caused - Intentional' },
            
            // Health Emergencies - Biological
            { id: 'he_bio_001', name: 'Epidemic', description: 'Disease outbreak in population', category: 'Health - Biological' },
            { id: 'he_bio_002', name: 'Pandemic', description: 'Global disease outbreak', category: 'Health - Biological' },
            { id: 'he_bio_003', name: 'Infectious disease outbreaks', description: 'Communicable disease spread', category: 'Health - Biological' },
            { id: 'he_bio_004', name: 'Medical emergencies', description: 'Health system crisis', category: 'Health - Biological' },
            { id: 'he_bio_005', name: 'Food poisoning', description: 'Foodborne illness outbreak', category: 'Health - Biological' },
            { id: 'he_bio_006', name: 'Vector-borne disease outbreaks', description: 'Disease spread by insects/animals', category: 'Health - Biological' },
            { id: 'he_bio_007', name: 'Zoonotic spillover events', description: 'Animal-to-human disease transmission', category: 'Health - Biological' },
            
            // Health Emergencies - Chemical/Radiological
            { id: 'he_chr_001', name: 'Mass chemical exposure', description: 'Large-scale chemical contamination', category: 'Health - Chemical/Radiological' },
            { id: 'he_chr_002', name: 'Radiological exposure without release', description: 'Radiation exposure incident', category: 'Health - Chemical/Radiological' },
            
            // Other Hazards - Cross-Cutting/Emerging
            { id: 'oh_eme_001', name: 'Space debris impact / satellite collision', description: 'Orbital debris threat', category: 'Other - Emerging' },
            { id: 'oh_eme_002', name: 'Nanomaterials / biotechnology accidents', description: 'Advanced technology incident', category: 'Other - Emerging' },
            { id: 'oh_eme_003', name: 'Artificial intelligence / autonomous system failures', description: 'AI system malfunction', category: 'Other - Emerging' }
        ];
        this.filteredHazards = [...this.hazards];
        this.searchTerm = '';
        this.selectedCategory = '';
        this.userOverrides = new Map(); // Track user-defined priority overrides
        this.rankedRisks = []; // Store current risk rankings
    }

    getCategories() {
        return [...new Set(this.hazards.map(h => h.category))].sort();
    }

    populateCategoryButtons() {
        const container = document.getElementById('categoryButtons');
        const categories = this.getCategories();
        
        // Add event listener for "All Hazards" button
        const allButton = container.querySelector('[data-category=""]');
        allButton.addEventListener('click', () => this.selectCategoryFilter('', allButton));
        
        categories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 filter-btn';
            button.dataset.category = category;
            button.textContent = category;
            button.addEventListener('click', () => this.selectCategoryFilter(category, button));
            container.appendChild(button);
        });
    }

    selectCategoryFilter(category, clickedButton) {
        // Remove active class from all buttons and reset to inactive styles
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.className = 'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 filter-btn';
        });
        
        // Add active class and styles to clicked button
        clickedButton.classList.add('active');
        clickedButton.className = 'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-blue-500 text-white shadow-md hover:bg-blue-600 active filter-btn';
        
        // Store selected category and filter hazards
        this.selectedCategory = category;
        this.applyFilters();
    }

    applyFilters() {
        let filtered = [...this.hazards];
        
        // Apply category filter
        if (this.selectedCategory) {
            filtered = filtered.filter(h => h.category === this.selectedCategory);
        }
        
        // Apply search filter
        if (this.searchTerm) {
            const searchLower = this.searchTerm.toLowerCase();
            filtered = filtered.filter(h => 
                h.name.toLowerCase().includes(searchLower) ||
                h.description.toLowerCase().includes(searchLower) ||
                h.category.toLowerCase().includes(searchLower)
            );
        }
        
        this.filteredHazards = filtered;
        this.updateResultCount();
        this.displayHazards();
    }

    updateResultCount() {
        const resultCount = document.getElementById('resultCount');
        const searchResults = document.getElementById('searchResults');
        
        if (this.searchTerm || this.selectedCategory) {
            const count = this.filteredHazards.length;
            const hazardText = count === 1 ? 'hazard' : 'hazards';
            searchResults.innerHTML = `<span id="resultCount">${count}</span> ${hazardText} found`;
            searchResults.classList.remove('hidden');
        } else {
            searchResults.classList.add('hidden');
        }
    }

    highlightSearchTerm(text, searchTerm) {
        if (!searchTerm) return text;
        
        const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
    }

    displayHazards() {
        const container = document.getElementById('hazardGrid');
        container.innerHTML = '';

        this.filteredHazards.forEach(hazard => {
            const div = document.createElement('div');
            div.className = 'bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 overflow-hidden hover:shadow-md hazard-card';
            div.dataset.category = hazard.category;
            div.dataset.hazardId = hazard.id;
            
            // Apply search highlighting
            const highlightedName = this.highlightSearchTerm(hazard.name, this.searchTerm);
            const highlightedCategory = this.highlightSearchTerm(hazard.category, this.searchTerm);
            const highlightedDescription = this.highlightSearchTerm(hazard.description, this.searchTerm);
            
            div.innerHTML = `
                <div class="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 hazard-header" onclick="app.toggleHazardAssessment('${hazard.id}')">
                    <div class="flex-1 hazard-info">
                        <div class="font-bold text-gray-900 mb-1 hazard-name">${highlightedName}</div>
                        <div class="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full inline-block mb-2 hazard-category">${highlightedCategory}</div>
                        <div class="text-sm text-gray-600 leading-relaxed hazard-description">${highlightedDescription}</div>
                    </div>
                    <div class="text-xl text-blue-500 font-bold transition-transform duration-200 ml-4 toggle-icon" id="toggle-${hazard.id}">▼</div>
                </div>
                <div class="border-t border-gray-200 bg-gray-50 p-6 hazard-assessment" id="assessment-${hazard.id}" style="display: none;">
                    <div class="space-y-6 inline-assessment">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end assessment-row">
                            <div class="space-y-3 rating-group">
                                <label class="block text-sm font-semibold text-gray-700">Frequency (1-6):</label>
                                <div class="relative">
                                    <input type="range" id="freq-${hazard.id}" min="1" max="6" value="3" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider:bg-blue-500 inline-slider">
                                    <span class="absolute -top-8 right-0 bg-blue-500 text-white px-2 py-1 rounded text-sm font-bold slider-value" id="freq-val-${hazard.id}">3</span>
                                </div>
                            </div>
                            <div class="space-y-3 rating-group">
                                <label class="block text-sm font-semibold text-gray-700">Consequence (1-6):</label>
                                <div class="relative">
                                    <input type="range" id="cons-${hazard.id}" min="1" max="6" value="3" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider:bg-orange-500 inline-slider">
                                    <span class="absolute -top-8 right-0 bg-orange-500 text-white px-2 py-1 rounded text-sm font-bold slider-value" id="cons-val-${hazard.id}">3</span>
                                </div>
                            </div>
                            <button class="w-12 h-12 bg-green-500 text-white rounded-full text-xl font-bold hover:bg-green-600 transition-all duration-200 hover:scale-110 justify-self-center confirm-btn" onclick="app.confirmAssessment('${hazard.id}')">✓</button>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 rating-info">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-blue-500 text-sm text-gray-700 freq-info" id="freq-info-${hazard.id}">Frequency: Unlikely (2-10% chance per year)</div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-orange-500 text-sm text-gray-700 cons-info" id="cons-info-${hazard.id}">Consequence: Moderate (Variable Total: 7-8)</div>
                        </div>
                        <div class="bg-white border-2 border-blue-500 rounded-xl p-6 risk-calculation" id="risk-calc-${hazard.id}">
                            <div class="flex flex-col sm:flex-row justify-between items-center gap-4 risk-preview">
                                <div class="flex items-center gap-4 risk-score-preview">
                                    <span class="text-sm font-semibold text-gray-700 preview-label">HIRA Score:</span>
                                    <span class="text-3xl font-bold text-blue-500 bg-blue-50 px-4 py-2 rounded-lg preview-score" id="preview-score-${hazard.id}">25</span>
                                </div>
                                <div class="flex flex-col items-center gap-1 risk-level-preview">
                                    <span class="font-bold text-lg uppercase tracking-wide preview-level" id="preview-level-${hazard.id}">Moderate</span>
                                    <span class="text-sm text-gray-600 preview-range" id="preview-range-${hazard.id}">(21-30)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            container.appendChild(div);
            
            // Add event listeners for sliders
            this.setupSliderListeners(hazard.id);
        });
    }


    toggleHazardAssessment(hazardId) {
        const assessmentDiv = document.getElementById(`assessment-${hazardId}`);
        const toggleIcon = document.getElementById(`toggle-${hazardId}`);
        
        if (assessmentDiv.style.display === 'none') {
            // Close all other assessments
            document.querySelectorAll('.hazard-assessment').forEach(div => {
                div.style.display = 'none';
            });
            document.querySelectorAll('.toggle-icon').forEach(icon => {
                icon.textContent = '▼';
            });
            
            // Open this assessment
            assessmentDiv.style.display = 'block';
            toggleIcon.textContent = '▲';
        } else {
            // Close this assessment
            assessmentDiv.style.display = 'none';
            toggleIcon.textContent = '▼';
        }
    }

    setupSliderListeners(hazardId) {
        const freqSlider = document.getElementById(`freq-${hazardId}`);
        const consSlider = document.getElementById(`cons-${hazardId}`);
        
        freqSlider.addEventListener('input', (e) => {
            document.getElementById(`freq-val-${hazardId}`).textContent = e.target.value;
            this.updateFrequencyInfo(hazardId, parseInt(e.target.value));
            this.updateRiskCalculation(hazardId);
        });
        
        consSlider.addEventListener('input', (e) => {
            document.getElementById(`cons-val-${hazardId}`).textContent = e.target.value;
            this.updateConsequenceInfo(hazardId, parseInt(e.target.value));
            this.updateRiskCalculation(hazardId);
        });
    }

    updateFrequencyInfo(hazardId, value) {
        const freqInfo = document.getElementById(`freq-info-${hazardId}`);
        const labels = [
            '', // 0 index unused
            'Rare (<1% chance per year)',
            'Very Unlikely (1-2% chance per year)',
            'Unlikely (2-10% chance per year)',
            'Probable (10-50% chance per year)',
            'Likely (50-100% chance per year)',
            'Almost Certain (100% chance per year)'
        ];
        freqInfo.textContent = `Frequency: ${labels[value]}`;
    }

    updateConsequenceInfo(hazardId, value) {
        const consInfo = document.getElementById(`cons-info-${hazardId}`);
        const labels = [
            '', // 0 index unused
            'Minor (Variable Total: 1-4)',
            'Slight (Variable Total: 5-6)',
            'Moderate (Variable Total: 7-8)',
            'Severe (Variable Total: 9-10)',
            'Very Severe (Variable Total: 11-12)',
            'Catastrophic (Variable Total: 13)'
        ];
        consInfo.textContent = `Consequence: ${labels[value]}`;
    }

    updateRiskCalculation(hazardId) {
        const frequency = parseInt(document.getElementById(`freq-${hazardId}`).value);
        const consequence = parseInt(document.getElementById(`cons-${hazardId}`).value);
        const riskScore = frequency * consequence;
        const riskData = this.calculateRiskPriority(riskScore);
        
        // Update the risk calculation display
        document.getElementById(`preview-score-${hazardId}`).textContent = riskData.hiraScore;
        document.getElementById(`preview-level-${hazardId}`).textContent = riskData.level;
        document.getElementById(`preview-range-${hazardId}`).textContent = `(${riskData.range})`;
        
        // Update color coding
        const previewLevel = document.getElementById(`preview-level-${hazardId}`);
        previewLevel.style.color = this.getRiskColor(riskData.level);
    }

    confirmAssessment(hazardId) {
        const hazard = this.hazards.find(h => h.id === hazardId);
        const frequency = parseInt(document.getElementById(`freq-${hazardId}`).value);
        const consequence = parseInt(document.getElementById(`cons-${hazardId}`).value);
        
        const assessment = {
            hazardId,
            hazard,
            frequency,
            consequence
        };

        this.assessments.push(assessment);
        this.displayAssessments();
        
        // Close the assessment panel
        this.toggleHazardAssessment(hazardId);
        
        // Reset sliders to default
        document.getElementById(`freq-${hazardId}`).value = 3;
        document.getElementById(`cons-${hazardId}`).value = 3;
        document.getElementById(`freq-val-${hazardId}`).textContent = '3';
        document.getElementById(`cons-val-${hazardId}`).textContent = '3';
        this.updateFrequencyInfo(hazardId, 3);
        this.updateConsequenceInfo(hazardId, 3);
        this.updateRiskCalculation(hazardId);
        
        document.getElementById('calculateRisk').classList.remove('hidden');
    }


    setupEventListeners() {
        // Calculate risk button
        document.getElementById('calculateRisk').addEventListener('click', () => {
            this.calculateRiskRankings();
        });

        // Search input
        const searchInput = document.getElementById('hazardSearch');
        const clearSearchBtn = document.getElementById('clearSearch');

        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.trim();
            this.applyFilters();
            
            // Show/hide clear button
            if (this.searchTerm) {
                clearSearchBtn.classList.remove('hidden');
            } else {
                clearSearchBtn.classList.add('hidden');
            }
        });

        // Clear search button
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            this.searchTerm = '';
            clearSearchBtn.classList.add('hidden');
            this.applyFilters();
            searchInput.focus();
        });

        // Enhanced search with Enter key
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchInput.value = '';
                this.searchTerm = '';
                clearSearchBtn.classList.add('hidden');
                this.applyFilters();
                searchInput.blur();
            }
        });

        // Reset rankings button
        const resetButton = document.getElementById('resetRankings');
        resetButton.addEventListener('click', () => {
            this.resetToAutoRankings();
        });
    }


    displayAssessments() {
        const container = document.getElementById('assessmentList');
        container.innerHTML = '';

        this.assessments.forEach((assessment, index) => {
            const div = document.createElement('div');
            div.className = 'bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 assessment-item';
            div.innerHTML = `
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <div class="font-semibold text-gray-900 text-lg mb-2">${assessment.hazard.name}</div>
                        <div class="text-xs text-gray-600 bg-white px-3 py-1 rounded-full inline-block mb-3 border hazard-category">${assessment.hazard.category}</div>
                        <div class="text-sm text-gray-700">
                            <span class="font-medium">Frequency:</span> ${assessment.frequency} | 
                            <span class="font-medium">Consequence:</span> ${assessment.consequence}
                        </div>
                    </div>
                    <button onclick="app.removeAssessment(${index})" class="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors duration-200 ml-4">
                        Remove
                    </button>
                </div>
            `;
            container.appendChild(div);
        });
    }

    removeAssessment(index) {
        this.assessments.splice(index, 1);
        this.displayAssessments();
        
        if (this.assessments.length === 0) {
            document.getElementById('calculateRisk').classList.add('hidden');
            document.getElementById('results').classList.add('hidden');
        }
    }

    calculateRiskRankings() {
        const risks = this.assessments.map(assessment => {
            const riskScore = assessment.frequency * assessment.consequence;
            const riskData = this.calculateRiskPriority(riskScore);

            return {
                ...assessment,
                riskScore,
                riskLevel: riskData.level,
                priority: riskData.priority,
                hiraScore: riskData.hiraScore,
                range: riskData.range
            };
        });

        const rankedRisks = risks.sort((a, b) => b.riskScore - a.riskScore);
        this.displayResults(rankedRisks);
    }

    calculateRiskPriority(riskScore) {
        // HIRA Risk Assessment System
        // Risk Score = Frequency (1-6) × Consequence (1-6) = Range 1-36
        // Extended to 100-point scale for HIRA compatibility
        const hiraScore = Math.round((riskScore / 36) * 100);
        
        if (hiraScore >= 51) {
            return {
                level: 'Extreme',
                priority: 1,
                hiraScore: hiraScore,
                range: '51-100'
            };
        } else if (hiraScore >= 41) {
            return {
                level: 'Very High',
                priority: 2,
                hiraScore: hiraScore,
                range: '41-50'
            };
        } else if (hiraScore >= 31) {
            return {
                level: 'High',
                priority: 3,
                hiraScore: hiraScore,
                range: '31-40'
            };
        } else if (hiraScore >= 21) {
            return {
                level: 'Moderate',
                priority: 4,
                hiraScore: hiraScore,
                range: '21-30'
            };
        } else if (hiraScore >= 11) {
            return {
                level: 'Low',
                priority: 5,
                hiraScore: hiraScore,
                range: '11-20'
            };
        } else {
            return {
                level: 'Very Low',
                priority: 6,
                hiraScore: hiraScore,
                range: '0-10'
            };
        }
    }

    displayResults(rankedRisks) {
        this.rankedRisks = rankedRisks;
        const container = document.getElementById('resultsList');
        container.innerHTML = '';

        rankedRisks.forEach((risk, index) => {
            const borderColor = this.getRiskBorderColor(risk.riskLevel);
            const div = document.createElement('div');
            const isUserOverride = this.userOverrides.has(risk.hazard.id);
            const overrideClass = isUserOverride ? 'ring-2 ring-blue-400' : '';
            
            div.className = `bg-white rounded-xl shadow-lg overflow-hidden border-l-8 ${borderColor} hover:shadow-xl transition-all duration-300 cursor-move ${overrideClass} risk-item risk-${risk.riskLevel.toLowerCase().replace(' ', '-')}`;
            div.draggable = true;
            div.dataset.riskId = risk.hazard.id;
            div.dataset.index = index;
            
            div.innerHTML = `
                <div class="p-6 risk-result-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <svg class="w-6 h-6 text-gray-400 drag-handle cursor-move" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
                            </svg>
                            <input type="number" min="1" max="${rankedRisks.length}" value="${index + 1}" 
                                   class="text-2xl font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg min-w-[3rem] text-center priority-number border-2 border-transparent hover:border-blue-300 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                                   onchange="app.changePriority('${risk.hazard.id}', this.value, ${index})"
                                   onblur="app.validatePriorityInput(this, ${index + 1})"
                                   onfocus="this.select()">
                            </input>
                        </div>
                        ${isUserOverride ? `
                            <div class="flex items-center gap-2 text-blue-600 text-xs font-medium bg-blue-50 px-3 py-1 rounded-full">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z"></path>
                                </svg>
                                User Priority
                            </div>
                        ` : ''}
                    </div>
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4 risk-header">
                        <div class="flex-1 risk-title">
                            <div class="text-xl font-bold text-gray-900 mb-2">${risk.hazard.name}</div>
                            <div class="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block hazard-category">${risk.hazard.category}</div>
                        </div>
                        <div class="text-center sm:text-right risk-score-display">
                            <div class="text-4xl font-bold text-gray-900 mb-1 hira-score">${risk.hiraScore}</div>
                            <div class="text-sm text-gray-600 mb-2 score-range">(${risk.range})</div>
                            <div class="text-sm font-semibold uppercase tracking-wide px-3 py-1 rounded-full risk-level" style="color: ${this.getRiskColor(risk.riskLevel)}; background-color: ${this.getRiskColor(risk.riskLevel)}20">${risk.riskLevel}</div>
                        </div>
                    </div>
                    <div class="border-t border-gray-200 pt-4 risk-details">
                        <div class="text-sm text-gray-700 assessment-values">
                            <span class="font-semibold">Frequency:</span> ${risk.frequency} | 
                            <span class="font-semibold">Consequence:</span> ${risk.consequence}
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(div);
        });

        this.setupDragAndDrop();

        document.getElementById('results').classList.remove('hidden');
        document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
    }

    setupDragAndDrop() {
        const container = document.getElementById('resultsList');
        let draggedElement = null;
        let draggedIndex = -1;

        // Add event listeners to all risk items
        container.querySelectorAll('.risk-item').forEach((item, index) => {
            item.addEventListener('dragstart', (e) => {
                draggedElement = item;
                draggedIndex = index;
                item.classList.add('opacity-50');
                
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/plain', index.toString());
            });

            item.addEventListener('dragend', (e) => {
                item.classList.remove('opacity-50');
                // Remove all drop indicators
                container.querySelectorAll('.drop-indicator').forEach(indicator => {
                    indicator.remove();
                });
            });

            item.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                
                if (draggedElement !== item) {
                    // Remove existing indicators
                    container.querySelectorAll('.drop-indicator').forEach(indicator => {
                        indicator.remove();
                    });
                    
                    const rect = item.getBoundingClientRect();
                    const midpoint = rect.top + rect.height / 2;
                    
                    // Create drop indicator
                    const indicator = document.createElement('div');
                    indicator.className = 'drop-indicator bg-blue-400 h-1 rounded-full mx-4 my-2';
                    
                    if (e.clientY < midpoint) {
                        item.parentNode.insertBefore(indicator, item);
                    } else {
                        item.parentNode.insertBefore(indicator, item.nextSibling);
                    }
                }
            });

            item.addEventListener('drop', (e) => {
                e.preventDefault();
                const targetIndex = index;
                
                if (draggedIndex !== targetIndex && draggedIndex !== -1) {
                    this.reorderRisks(draggedIndex, targetIndex);
                }
                
                draggedIndex = -1;
                
                // Clean up indicators
                container.querySelectorAll('.drop-indicator').forEach(indicator => {
                    indicator.remove();
                });
            });
        });

        // Handle drops on container (between items)
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        container.addEventListener('drop', (e) => {
            e.preventDefault();
            // Clean up indicators
            container.querySelectorAll('.drop-indicator').forEach(indicator => {
                indicator.remove();
            });
        });
    }

    reorderRisks(fromIndex, toIndex) {
        console.log(`Moving from ${fromIndex} to ${toIndex}`);
        
        // Adjust toIndex if dragging down (because we remove the item first)
        let adjustedToIndex = toIndex;
        if (fromIndex < toIndex) {
            adjustedToIndex--;
        }
        
        // Move the risk in the array
        const movedRisk = this.rankedRisks.splice(fromIndex, 1)[0];
        this.rankedRisks.splice(adjustedToIndex, 0, movedRisk);
        
        // Mark all items as user overrides (since order was manually changed)
        this.rankedRisks.forEach((risk, index) => {
            this.userOverrides.set(risk.hazard.id, index + 1);
        });
        
        // Show reset button
        document.getElementById('resetRankings').classList.remove('hidden');
        
        // Re-render the results
        this.displayResults(this.rankedRisks);
    }

    resetToAutoRankings() {
        // Clear user overrides
        this.userOverrides.clear();
        
        // Hide reset button
        document.getElementById('resetRankings').classList.add('hidden');
        
        // Recalculate and display results with original rankings
        this.calculateRiskRankings();
    }

    changePriority(hazardId, newPriority, currentIndex) {
        const newPriorityNum = parseInt(newPriority);
        const maxPriority = this.rankedRisks.length;
        
        // Validate input range
        if (newPriorityNum < 1 || newPriorityNum > maxPriority || isNaN(newPriorityNum)) {
            // Reset to current position if invalid
            this.displayResults(this.rankedRisks);
            return;
        }
        
        // Don't do anything if priority hasn't changed
        if (newPriorityNum === currentIndex + 1) {
            return;
        }
        
        // Calculate the target index (priority is 1-based, index is 0-based)
        const targetIndex = newPriorityNum - 1;
        
        // Move the risk to the new position
        const riskToMove = this.rankedRisks.splice(currentIndex, 1)[0];
        this.rankedRisks.splice(targetIndex, 0, riskToMove);
        
        // Mark all items as user overrides and update their priority numbers
        this.rankedRisks.forEach((risk, index) => {
            this.userOverrides.set(risk.hazard.id, index + 1);
        });
        
        // Show reset button since user made manual changes
        document.getElementById('resetRankings').classList.remove('hidden');
        
        // Re-render with new order
        this.displayResults(this.rankedRisks);
    }
    
    validatePriorityInput(inputElement, originalPriority) {
        const value = parseInt(inputElement.value);
        const maxPriority = this.rankedRisks.length;
        
        // If invalid input, reset to original
        if (isNaN(value) || value < 1 || value > maxPriority) {
            inputElement.value = originalPriority;
        }
    }

    getRiskColor(level) {
        switch(level) {
            case 'Extreme': return '#8B0000';       // Dark Red
            case 'Very High': return '#dc3545';     // Red
            case 'High': return '#fd7e14';          // Orange  
            case 'Moderate': return '#ffc107';      // Yellow
            case 'Low': return '#17a2b8';           // Teal
            case 'Very Low': return '#28a745';      // Green
            default: return '#000';
        }
    }

    getRiskBorderColor(level) {
        switch(level) {
            case 'Extreme': return 'border-red-900';
            case 'Very High': return 'border-red-500';
            case 'High': return 'border-orange-500';
            case 'Moderate': return 'border-yellow-500';
            case 'Low': return 'border-teal-500';
            case 'Very Low': return 'border-green-500';
            default: return 'border-gray-500';
        }
    }
}

const app = new HazardAssessmentApp();