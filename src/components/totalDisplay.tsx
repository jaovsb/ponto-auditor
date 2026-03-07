import React from 'react';
import { Clock } from 'lucide-react';

interface TotalDisplayProps {
  totalValue: string;
}

export const TotalDisplay: React.FC<TotalDisplayProps> = ({ totalValue }) => {
  const isNegative = totalValue.startsWith('-');

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg shadow-slate-200/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
            <Clock size={20} />
          </div>
          <span className="text-sm font-bold text-slate-400 uppercase tracking-tight">
            Saldo da Auditoria
          </span>
        </div>
      </div>
      
      <div className="mt-4">
        <span className={`text-5xl font-mono font-black tracking-tighter transition-colors duration-500 ${
          isNegative ? 'text-red-500' : 'text-emerald-500'
        }`}>
          {totalValue}
        </span>
        <p className="text-slate-400 text-xs mt-2 font-medium">
          {isNegative 
            ? 'Atenção: Você possui horas devedoras no período.' 
            : 'Parabéns: Você possui saldo positivo no banco.'}
        </p>
      </div>
    </div>
  );
};