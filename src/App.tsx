import { useState, useMemo } from 'react';
import { PlusCircle, FileCheck2, Eraser } from 'lucide-react';

import type { AuditRowType } from './types/audit';
import { timeToSeconds, secondsToTime } from './utils/timeUtils';
import { TotalDisplay } from './components/totalDisplay';
import { AuditRowComponent } from './components/auditRow';

export default function App() {
  const [rows, setRows] = useState<AuditRowType[]>([
    { id: crypto.randomUUID(), time: '08:00:00', type: 'add' }
  ]);

  const addRow = () => {
    setRows(prev => [...prev, {
      id: crypto.randomUUID(),
      time: '00:00:00',
      type: 'add'
    }]);
  };

  const clearAll = () => {
    setRows([{
      id: crypto.randomUUID(),
      time: '00:00:00',
      type: 'add'
    }]);
  };

  const removeRow = (id: string) => {
    if (rows.length === 1) {
      updateRow(id, 'time', '00:00:00');
      return;
    }
    setRows(prev => prev.filter(row => row.id !== id));
  };

  const updateRow = <K extends keyof AuditRowType>(id: string, field: K, value: AuditRowType[K]) => {
    setRows(prev => prev.map(row => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const totalBalance = useMemo(() => {
    const totalSeconds = rows.reduce((acc, row) => {
      const seconds = timeToSeconds(row.time);
      return row.type === 'add' ? acc + seconds : acc - seconds;
    }, 0);
    return secondsToTime(totalSeconds);
  }, [rows]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 p-6">
      <div className="max-w-xl mx-auto py-8">
        
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg">
              <FileCheck2 size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-slate-800">Ponto Auditor</h1>
              <p className="text-slate-400 text-sm font-medium">Suporte Técnico</p>
            </div>
          </div>
        </header>

        <section className="mb-10">
          <TotalDisplay totalValue={totalBalance} />
        </section>

        <section className="space-y-4">
          <div className="flex justify-between items-center mb-2 px-2">
            <div className="flex items-center gap-2">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Registros</h2>
              <span className="text-[10px] bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full font-bold uppercase">
                {rows.length}
              </span>
            </div>
            
            <button 
              onClick={clearAll}
              className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 hover:text-red-500 transition-colors uppercase tracking-wider bg-slate-200/50 hover:bg-red-50 px-2 py-1.5 rounded-lg"
            >
              <Eraser size={12} />
              Limpar Tudo
            </button>
          </div>

          <div className="space-y-3">
            {rows.map((row) => (
              <AuditRowComponent 
                key={row.id} 
                row={row} 
                onUpdate={updateRow} 
                onRemove={removeRow} 
              />
            ))}
          </div>

          <button
            onClick={addRow}
            className="group w-full mt-6 py-5 flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-300 text-slate-400 font-bold hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all active:scale-[0.98]"
          >
            <PlusCircle size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            NOVO REGISTRO
          </button>
        </section>

        <footer className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-300 text-[10px] uppercase font-bold tracking-widest">
          Sistema de Auditoria Interna
        </footer>
      </div>
    </div>
  );
}