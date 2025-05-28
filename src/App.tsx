import React, { useState } from "react";
import BusinessesList from "./components/BusinessesList";
import BusinessInfoForm from "./components/BusinessInfoForm";
import BusinessAdvancedForm from "./components/BusinessAdvancedForm";
import AccountingSystem from "./components/AccountingSystem";
import { Business, BusinessBasicInfo, BusinessAdvancedInfo } from "./components/types";

type Page = "list" | "basic" | "advanced" | "accounting";

const App: React.FC = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [page, setPage] = useState<Page>("list");
  const [selectedBusinessId, setSelectedBusinessId] = useState<string | null>(null);
  const [tempBasic, setTempBasic] = useState<Partial<BusinessBasicInfo>>({});
  const [tempAdvanced, setTempAdvanced] = useState<Partial<BusinessAdvancedInfo>>({});

  // حذف کسب و کار
  const handleDelete = (id: string) => {
    setBusinesses((prev) => prev.filter((b) => b.id !== id));
    if (selectedBusinessId === id) {
      setSelectedBusinessId(null);
      setPage("list");
    }
  };

  // انتخاب کسب و کار و ورود به حسابداری
  const handleSelect = (id: string) => {
    setSelectedBusinessId(id);
    setPage("accounting");
  };

  // شروع افزودن کسب و کار جدید
  const handleAddBusiness = () => {
    setTempBasic({});
    setTempAdvanced({});
    setSelectedBusinessId(null);
    setPage("basic");
  };

  // مرحله اول: اطلاعات پایه
  const handleBasicSubmit = (data: BusinessBasicInfo) => {
    setTempBasic({ ...data, id: Date.now().toString() });
    setPage("advanced");
  };

  // مرحله دوم: اطلاعات تخصصی
  const handleAdvancedSubmit = (adv: BusinessAdvancedInfo) => {
    const newBusiness: Business = { ...(tempBasic as BusinessBasicInfo), ...adv };
    setBusinesses((prev) => [...prev, newBusiness]);
    setSelectedBusinessId(newBusiness.id);
    setPage("accounting");
  };

  const selectedBusiness = businesses.find((b) => b.id === selectedBusinessId);

  return (
    <div style={{ direction: "rtl", fontFamily: "Tahoma, sans-serif", background: "#fafafa", minHeight: "100vh", padding: 32 }}>
      <div style={{ maxWidth: 700, margin: "0 auto", background: "#fff", borderRadius: 10, boxShadow: "0 2px 8px #0001", padding: 40 }}>
        {page === "list" && (
          <>
            <BusinessesList businesses={businesses} onDelete={handleDelete} onSelect={handleSelect} />
            <button onClick={handleAddBusiness} className="primary-btn" style={{ marginTop: 24 }}>
              افزودن کسب‌وکار جدید
            </button>
          </>
        )}
        {page === "basic" && (
          <BusinessInfoForm
            onSubmit={handleBasicSubmit}
            onCancel={() => setPage("list")}
          />
        )}
        {page === "advanced" && (
          <BusinessAdvancedForm
            onSubmit={handleAdvancedSubmit}
            onCancel={() => setPage("basic")}
          />
        )}
        {page === "accounting" && selectedBusiness && (
          <AccountingSystem business={selectedBusiness} onBack={() => setPage("list")} />
        )}
      </div>
    </div>
  );
};

export default App;