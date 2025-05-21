import Image from "next/image";
import Section from "@repo/ui/section";
import { DischargeSummary, PatientDataType } from "./types";
import { mockDischargeResponse } from "./mock";

type PatientDetailsProps = {
  patientData: PatientDataType;
};

type PatientFieldProps = {
  icon: string;
  label: string;
  value: string;
  isLastField?: boolean;
};

const PatientField = ({
  icon,
  label,
  value,
  isLastField = false,
}: PatientFieldProps) => (
  <div
    className={`flex flex-col gap-2.5 ${!isLastField ? "md:border-e md:border-border-secondary" : ""}`}
  >
    <span className="flex items-center text-text-secondary gap-2.5">
      <div className="p-1 border rounded-lg">
        <Image alt="section icon" src={icon} width={16} height={16} />
      </div>
      <span className="font-semibold">{label}</span>
    </span>
    <span data-testid={label}>{value}</span>
  </div>
);

function PatientDetails({ patientData }: PatientDetailsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-3 text-base">
      <PatientField
        icon="/identification-badge.svg"
        label="MRN"
        value={patientData.person_unified_identifier}
      />
      <PatientField
        icon="/calendar.svg"
        label="Date Of Birth"
        value={`${(new Date(patientData.birth_date), "dd MMM yyyy")} (Age:${(new Date(), new Date(patientData.birth_date))})`}
      />
      <PatientField
        icon="/gender-female.svg"
        label="Gender"
        value={patientData.gender}
      />
      <PatientField
        icon="/flag-02.svg"
        label="Nationality"
        value={patientData.nationality}
        isLastField
      />
    </div>
  );
}

type AdmissionDetailsProps = {
  admissionData: DischargeSummary["admissionDetails"];
};

const AdmissionField = ({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) => (
  <p>
    <span className="text-text-secondary font-semibold">{label}:</span>&nbsp;
    {value || "N/A"}
  </p>
);

function AdmissionDetails({ admissionData }: AdmissionDetailsProps) {
  const {
    hospitalName,
    department,
    admissionDateTime,
    dischargeDateTime,
    admissionType,
  } = admissionData;
  return (
    <div className="flex flex-col gap-3 p-3 text-base">
      <AdmissionField label="Hospital name" value={hospitalName} />
      <AdmissionField label="Department" value={department} />
      <AdmissionField
        label="Admission date and time"
        value={admissionDateTime}
      />
      <AdmissionField
        label="Discharge date and time"
        value={dischargeDateTime}
      />
      <AdmissionField label="Admission type" value={admissionType} />
    </div>
  );
}

export default function Home() {
  const {
    patient_data: patientData,
    discharge_summary: { admissionDetails },
  } = mockDischargeResponse;
  return (
    <section className="flex flex-col bg-background-primary rounded-3xl">
      <div className="flex bg-background-primary pt-8 pb-6 sticky -top-0 z-20">
        <div className="flex flex-col flex-1 gap-6">
          <h2 className="text-2xl font-semibold">Discharge Summary</h2>
        </div>
      </div>
      <div className="flex gap-8">
        <section className="flex flex-col gap-6 w-full">
          <Section
            title="Patient Demographic Data"
            icon="/file-attachement.svg"
          >
            {patientData && <PatientDetails patientData={patientData} />}
          </Section>

          <Section title="Admission Details" icon="/file-check-02.svg">
            {admissionDetails && (
              <AdmissionDetails admissionData={admissionDetails} />
            )}
          </Section>
        </section>
      </div>
    </section>
  );
}
