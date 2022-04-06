import { useState } from "react";

function EntryForm({ addEntryToAddressBook }) {
  const [presentAddress, setpresentAddress] = useState("");
  const [permanentAddress, setpermanentAddress] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addEntryToAddressBook({ presentAddress, permanentAddress });
  };
  return (
    
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input
        type="text"
        name="presentAddress"
        id="presentAddress"
        placeholder="Present Address"
        value={presentAddress}
        onChange={(e) => setpresentAddress(e.target.value)}
      />
      <input
        type="text"
        name="permanentAddress"
        id="permanentAddress"
        placeholder="Permanent Address"
        value={permanentAddress}
        onChange={(e) => setpermanentAddress(e.target.value)}
      />
      
      <button type="submit" onSubmit={handleSubmit}>
        submit
      </button>
    </form>
  );
}

function DisplayEntries({ entries }) {
  return (
    <table style={{ marginTop: "1em", width: 300 }}>
      <thead>
        <tr>
          <th>Present Address</th>
          <th>Permanent Address</th>
          
        </tr>
      </thead>
      <tbody style={{ marginTop: ".5em" }}>
        {entries.map((entry) => (
          <tr key={`${entry.presentAddress} ${entry.permanentAddress}`}>
            <td>{entry.presentAddress}</td>
            <td>{entry.permanentAddress}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [entries, setEntries] = useState([]);

  const addEntryToAddressBook = (entry) => {
    setEntries(
      [...entries, entry].sort((a, b) =>
        a.permanentAddress.toLowerCase() > b.permanentAddress.toLowerCase() ? 1 : -1
      )
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <EntryForm addEntryToAddressBook={addEntryToAddressBook} />
      <DisplayEntries entries={entries} />
    </div>
  );
}

export default App;