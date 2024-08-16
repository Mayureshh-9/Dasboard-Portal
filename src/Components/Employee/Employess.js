import React, { useEffect, useState } from "react";
import "./Employees.css";

// PrimeReact components
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function Employess() {
  const [data, setData] = useState([]);

  const size = "small";

  useEffect(() => {
    const fetchEmpy = async () => {
      try {
        const res = await fetch("http://localhost:3005/employees");
        console.log("res" + res);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        try {
          const contentType = res.headers.get("content-type");
          if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Expected JSON, but got something else");
          }
          const fetchedData = await res.json();

          if (Array.isArray(fetchedData)) {
            setData(fetchedData);
          } else {
            console.error("Unexpected data format");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEmpy();
  }, []);

  return (
    <div className="containers">
      <h1>Employees</h1>

      <div className="card">
        <DataTable
          value={data}
          size={size}
          showGridlines
          paginator
          rows={5}
          removableSort
          rowsPerPageOptions={[5, 8]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field="FirstName"
            header="First Name"
            sortable
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="LastName"
            header="Last Name"
            sortable
            style={{ width: "25%" }}
          ></Column>
          <Column field="Department" header="Department"></Column>
          <Column
            field="PhoneNumber"
            header="Phone Number"
            sortable
            style={{ width: "25%" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default Employess;
