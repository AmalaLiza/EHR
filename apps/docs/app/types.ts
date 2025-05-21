export type PatientType = {
  patient_id: string;
  patient_name: string;
  nationality: string;
  person_unified_identifier: string;
  birth_date: string;
  gender: string;
  height: string;
  weight: string;
  registration_date: string;
  discharge_date: string;
};

export type PatientDataType = {
  gender: string;
  height: string;
  weight: string;
  allergy: {
    allergy: string;
    severity: string;
    substance: string;
  }[];
  birth_date: string;
  nationality: string;
  patient_name: string;
  discharge_date: string;
  surgery_details: {
    consciousLevel: string;
    radiology: string[];
    lab: {
      unit: string;
      task_assay: string;
      result_text: string;
      result_value: string;
      result_status: string;
      completed_date: string;
      order_category: string;
      order_mnemonic: string;
      order_sub_category: string;
      result_value_alpha: string;
      result_value_numeric: number;
    }[];
    visit: {
      building: string;
      facility: string;
      discharge_date: string;
      encounter_type: string;
      medical_service: string;
      registration_date: string;
      admittedFrom: string;
    }[];
    diagnosis: {
      diagnosis_code: string;
      diagnosis_date: string;
      encounter_type: string;
      medical_service: string;
      diagnosis_display: string;
      diagnosed_personnel: string;
      diagnosis_code_source: string;
      diagnosis_description: string;
    }[];
    surgery: {
      building: string;
      facility: string;
      reg_dt_tm: string;
      case_level: string;
      department: string;
      med_service: string;
      proc_dur_min: string;
      order_mnemonic: string;
      primary_surgeon: string;
      proc_start_dt_tm: string;
      operation_room: string;
      surgery_speciality: string;
    };
    warning_signs: string[];
    chief_complaint: string[];
    discharge_advice: string[];
    surgery_medication: {
      order_date: string;
      completed_date: string;
      medication_name: string;
    }[];
    discharge_medication: {
      order_date: string;
      completed_date: string;
      medication_name: string;
    }[];
    lifestyle_recommendations: string[];
  };
  registration_date: string;
  previous_medical_history: PreviousMedicalHistory;
  person_unified_identifier: string;
  home_medications: string[];
};

export type DischargeResponseType = {
  id: number;
  patient_id: string;
  patient_data: PatientDataType;
  discharge_summary: DischargeSummary;
  created_at: string;
  updated_at: string;
};

export type MedicationReconciliationResponseType = {
  discharge_medication: MedicationReconciliation;
  surgery_medication: MedicationReconciliation;
};

interface PatientDetails {
  fullName: string;
  medicalRecordNumber: string;
  dateOfBirth: string;
  age: string;
  nationality: string;
  gender: string;
  height: string;
  weight: string;
}

interface AdmissionDetails {
  hospitalName: string;
  department: string;
  admissionDateTime: string;
  dischargeDateTime: string;
  admissionType: string;
}

interface PastMedicalHistory {
  pastMedicalCondition: string[];
  allergies: string[];
}

export interface Medication {
  name: string;
  significant?: boolean;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate: string;
}

interface HospitalCourse {
  latestLabResults: {
    observation: string;
    normal: boolean;
  }[];
  latestRadiologyResults: string[];
  medicationsAdministered: Medication[];
  proceduresPerformed: string;
  physicalExamination: string[];
  latestVitals: string[];
  medicationReconciliation?: MedicationReconciliation;
}

interface DischargePlan {
  dischargeCondition: string[];
  followupAppointment: string[];
  warningSigns: string[];
  dischargeDestination: string[];
}

interface DischargeNote {
  note: string;
}

interface Discharge {
  dischargeDiagnosisIcd10: string[];
  dischargePlan: DischargePlan;
  dischargeOrders: string[];
  dischargeMedications: {
    name: string;
    dosage: string;
    frequency: string;
    startDate: string;
    endDate: string;
  }[];
  dischargeNote: DischargeNote;
  medicationReconciliation?: MedicationReconciliation;
}

export type DuplicateIngredient = {
  ingredient: {
    name: string;
    drugbank_id: string;
  };
  duplicate_product_concept: Array<{
    name: string;
    drugbank_pcid: string;
    original_drug_names: string[];
  }>;
};

export type DuplicateTherapy = {
  condition: {
    title: string;
    drugbank_id: string;
  };
  duplicate_product_concept: Array<{
    name: string;
    drugbank_pcid: string;
    original_drug_names: string[];
  }>;
};

export type Severity = "major" | "moderate" | "minor";

export type DrugInteraction = {
  first_main_drug_name?: string;
  first_ingredient_name?: string;
  first_ingredient_drug_bank_id?: string;
  first_original_drug_names?: string[];
  second_main_drug_name?: string;
  second_ingredient_name?: string;
  second_ingredient_drug_bank_id?: string;
  second_original_drug_names?: string[];
  llm_description?: string;
  description: string;
  extended_description: string;
  severity: Severity;
};

export type DuplicationDetails = {
  duplicate_by_ingredient: DuplicateIngredient[];
  duplicate_by_therapy: DuplicateTherapy[];
};

export interface ReconciliationMedication {
  medication_name: string;
  completed_date: string;
  order_date: string;
}

export interface MedicationReconciliation {
  drug_duplication_response: {
    duplication_details: DuplicationDetails;
    missed_drug?: string[];
    summary: string;
  };
  drug_interaction_response: {
    interaction_details: DrugInteraction[];
    missed_drug?: string[];
    actual_to_main_individual_medications?: {
      [key: string]: {
        individual_medications: string[];
        main_medication: string[];
      };
    };
    summary: string;
  };
  medication_list: ReconciliationMedication[];
}

export interface DischargeSummary {
  patientDetails: PatientDetails;
  admissionDetails: AdmissionDetails;
  physicianDetails: {
    referringPhysician: string;
    attendingPhysician: string;
    title: string;
  };
  admissionDiagnosisIcd10: string[];
  pastMedicalHistory: PastMedicalHistory;
  homeMedications: Medication[];
  admissionCondition: string;
  hospitalCourse: HospitalCourse;
  discharge: Discharge;
  emergencyContact?: {
    hospitalEmergencyNumber: string;
    onCallDoctor: string;
  };
  procedureLocation: string;
}

export type Diagnosis = {
  diagnosis_code: string;
  diagnosis_date: string;
  encounter_type: string;
  medical_service: string;
  diagnosis_display: string;
  diagnosed_personnel: string;
  diagnosis_code_source: string;
  diagnosis_description: string;
};

type PreviousMedicalHistory = {
  [key: string]: {
    lab: {
      unit: string;
      task_assay: string;
      result_text: string;
      result_value: string;
      result_status: string;
      completed_date: string;
      order_category: string;
      order_mnemonic: string;
      order_sub_category: string;
      result_value_alpha: string;
      result_value_numeric: number;
    }[];
    diagnosis: Diagnosis[];
    medication: any[];
  };
};
