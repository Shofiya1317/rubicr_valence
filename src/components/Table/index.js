import React from "react";

export default function Table({ columns = [], data = [] }) {
  return (
    <div className="custom-table-container">
      <div className="custom-table-header">
        {columns.map((col) => (
          <div key={col.accessor} className="table-header-cell">
            {col.label}
          </div>
        ))}
      </div>

      <div className="custom-table-body">
        {data.map((row, i) => (
          <div key={i} className="table-row">
            {columns.map((col) => (
              <div key={col.accessor} className="table-cell">
                {row[col.accessor]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
