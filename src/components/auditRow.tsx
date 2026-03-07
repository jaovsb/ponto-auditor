import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import type { AuditRowType } from '../types/audit';

interface AuditRowProps {
  row: AuditRowType;
  onUpdate: <K extends keyof AuditRowType>(id: string, field: K, value: AuditRowType[K]) => void;
  onRemove: (id: string) => void;
}

export const AuditRowComponent: React.FC<AuditRowProps> = ({ row, onUpdate, onRemove }) => {
  
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 9) value = value.slice(0, 9);

    let formatted = value;
    if (value.length > 4) {
      formatted = `${value.slice(0, -4)}:${value.slice(-4, -2)}:${value.slice(-2)}`;
    } else if (value.length > 2) {
      formatted = `${value.slice(0, -2)}:${value.slice(-2)}`;
    }

    onUpdate(row.id, 'time', formatted);
  };

  const toggleType = () => {
    onUpdate(row.id, 'type', row.type === 'add' ? 'subtract' : 'add');
  };

  return (
    <div className="group flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all">
      <button
        onClick={toggleType}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors flex-shrink-0 ${
          row.type === 'add' 
            ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100' 
            : 'bg-amber-50 text-amber-600 hover:bg-amber-100'
        }`}
      >
        {row.type === 'add' ? <Plus size={18} /> : <Minus size={18} />}
      </button>

      <div className="flex-1">
        <input
          type="text"
          value={row.time}
          onChange={handleTimeChange}
          placeholder="00:00:00"
          className="w-full bg-transparent font-mono text-lg font-medium text-slate-700 focus:outline-none placeholder:text-slate-200"
        />
      </div>

      <button
        onClick={() => onRemove(row.id)}
        className="opacity-0 group-hover:opacity-100 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all flex-shrink-0"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};