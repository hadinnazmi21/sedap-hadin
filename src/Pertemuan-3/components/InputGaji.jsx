export default function InputGaji({ gaji, placeholder, label, type, onChange}) {
  return (
    <div className="mb-3">
      <label className="block text-gray-788 font-medium mb-1">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        gaji={gaji}
        className="w-full p-2 border border-gray-300 rounded"
        onChange={onChange} 
      />
     
        
    </div>
  );
}
