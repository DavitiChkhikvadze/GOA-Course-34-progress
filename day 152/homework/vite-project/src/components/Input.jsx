export default function Input({ onChange }) {
    return <input type="text" onChange={(e) => onChange(e.target.value)} className="border p-2" />;
  }
  