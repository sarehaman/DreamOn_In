
import React, { useState } from 'react';
import { Transaction } from '../types';

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', date: '2023-11-01', merchant: 'Starbucks Indiranagar', amount: 245, category: 'Food & Dining', isUpi: true },
  { id: '2', date: '2023-11-01', merchant: 'Swiggy', amount: 382, category: 'Food & Dining', isUpi: true },
  { id: '3', date: '2023-11-02', merchant: 'Amazon India', amount: 1299, category: 'Shopping', isUpi: false },
  { id: '4', date: '2023-11-02', merchant: 'Shell Petrol Pump', amount: 800, category: 'Transport', isUpi: true },
  { id: '5', date: '2023-11-03', merchant: 'Blue Tokai', amount: 210, category: 'Food & Dining', isUpi: true },
];

const DreamFund: React.FC = () => {
  const [savingsConfig, setSavingsConfig] = useState(10); // Round to nearest 10
  
  const calculateSkim = (amount: number) => {
    const nextMultiple = Math.ceil(amount / savingsConfig) * savingsConfig;
    return nextMultiple - amount;
  };

  const totalSkim = MOCK_TRANSACTIONS.reduce((acc, t) => acc + calculateSkim(t.amount), 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">UPI Chillar Engine</h3>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              {[10, 50, 100].map(val => (
                <button
                  key={val}
                  onClick={() => setSavingsConfig(val)}
                  className={`px-4 py-1 text-sm rounded-md transition-all ${savingsConfig === val ? 'bg-white shadow-sm font-bold text-indigo-600' : 'text-slate-500'}`}
                >
                  ₹{val}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-400 text-xs uppercase tracking-wider">
                  <th className="pb-4 font-medium">Merchant</th>
                  <th className="pb-4 font-medium">Spent</th>
                  <th className="pb-4 font-medium">Auto-Skim</th>
                  <th className="pb-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_TRANSACTIONS.map(t => (
                  <tr key={t.id} className="group hover:bg-slate-50 transition-colors">
                    <td className="py-4">
                      <p className="font-medium text-slate-800">{t.merchant}</p>
                      <p className="text-xs text-slate-400">{t.category}</p>
                    </td>
                    <td className="py-4 font-mono text-slate-600">₹{t.amount}</td>
                    <td className="py-4">
                      <span className="text-emerald-600 font-bold">₹{calculateSkim(t.amount)}</span>
                    </td>
                    <td className="py-4">
                      <button className="text-slate-300 group-hover:text-emerald-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-emerald-600 rounded-3xl p-6 text-white shadow-xl shadow-emerald-100">
          <h3 className="text-lg font-semibold mb-4">Daily Skim Potential</h3>
          <p className="text-4xl font-bold mb-2">₹{totalSkim}</p>
          <p className="text-emerald-100 text-sm mb-6">Calculated from last 3 days of activity.</p>
          <button className="w-full bg-white text-emerald-600 font-bold py-3 rounded-xl hover:bg-emerald-50 transition-colors">
            Move to Dream Fund
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-semibold mb-4">Current Goal</h3>
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-amber-100 p-3 rounded-xl text-2xl">🏖️</div>
            <div>
              <p className="font-bold text-slate-800">Trip to Goa</p>
              <p className="text-xs text-slate-500">Target: ₹45,000</p>
            </div>
          </div>
          <div className="bg-slate-100 h-2 rounded-full overflow-hidden mb-2">
            <div className="bg-amber-500 h-full w-[45%]"></div>
          </div>
          <div className="flex justify-between text-xs text-slate-400">
            <span>₹20,250 saved</span>
            <span>45%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamFund;
