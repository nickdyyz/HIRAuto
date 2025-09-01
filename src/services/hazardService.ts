import { Hazard } from '../models/risk';

const PREDEFINED_HAZARDS: Hazard[] = [
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
    { id: 'nh_hyd_002', name: 'Tropical Cyclone', description: 'Rotating storm system', category: 'Natural - Hydrometeorological' },
    { id: 'nh_hyd_003', name: 'Hurricane', description: 'Severe tropical cyclone', category: 'Natural - Hydrometeorological' },
    { id: 'nh_hyd_004', name: 'Tornado', description: 'Rotating column of air', category: 'Natural - Hydrometeorological' },
    { id: 'nh_hyd_005', name: 'Waterspout', description: 'Tornado over water', category: 'Natural - Hydrometeorological' },
    { id: 'nh_hyd_006', name: 'Hailstorm', description: 'Ice precipitation', category: 'Natural - Hydrometeorological' },
    { id: 'nh_hyd_007', name: 'Lightning', description: 'Electrical discharge', category: 'Natural - Hydrometeorological' },
    { id: 'nh_hyd_008', name: 'Wildfire', description: 'Uncontrolled fire', category: 'Natural - Hydrometeorological' },
    { id: 'nh_hyd_009', name: 'Extreme Heat', description: 'Dangerous high temperatures', category: 'Natural - Hydrometeorological' },
    { id: 'nh_hyd_010', name: 'Extreme Cold', description: 'Dangerous low temperatures', category: 'Natural - Hydrometeorological' },
    { id: 'nh_hyd_011', name: 'Drought', description: 'Extended dry conditions', category: 'Natural - Hydrometeorological' },
    { id: 'nh_hyd_012', name: 'Urban flooding', description: 'City water overflow', category: 'Natural - Hydrometeorological' },
    { id: 'nh_hyd_013', name: 'Winter storms / blizzards / ice storms', description: 'Severe winter weather', category: 'Natural - Hydrometeorological' },
    { id: 'nh_hyd_014', name: 'Storm surge', description: 'Ocean water pushed ashore', category: 'Natural - Hydrometeorological' },
    { id: 'nh_hyd_015', name: 'Straight-line winds / derechos', description: 'Severe wind events', category: 'Natural - Hydrometeorological' },
    
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

export class HazardService {
    getAvailableHazards(): Hazard[] {
        return PREDEFINED_HAZARDS;
    }

    getHazardById(id: string): Hazard | undefined {
        return PREDEFINED_HAZARDS.find(hazard => hazard.id === id);
    }

    getHazardsByCategory(category: string): Hazard[] {
        return PREDEFINED_HAZARDS.filter(hazard => hazard.category === category);
    }

    getCategories(): string[] {
        return [...new Set(PREDEFINED_HAZARDS.map(h => h.category))];
    }
}