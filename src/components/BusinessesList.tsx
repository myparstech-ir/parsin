import React from "react";
import { Business } from "./types";

interface Props {
  businesses: Business[];
  onDelete: (id: string) => void;
  onSelect: (id: string) => void;
}

const BusinessesList: React.FC<Props> = ({ businesses, onDelete, onSelect }) => {
  return (
    <div>
      <h2>کسب‌وکارها</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {businesses.map((b) => (
          <li key={b.id} style={{ marginBottom: 12, border: "1px solid #eee", borderRadius: 8, padding: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 16, fontWeight: 500 }}>{b.name}</span>
            <div>
              <button onClick={() => onSelect(b.id)} className="primary-btn" style={{ marginLeft: 8 }}>
                ورود / مشاهده
              </button>
              <button onClick={() => onDelete(b.id)} className="danger-btn">
                حذف
              </button>
            </div>
          </li>
        ))}
        {businesses.length === 0 && <li>کسب‌وکاری ثبت نشده است.</li>}
      </ul>
    </div>
  );
};

export default BusinessesList;