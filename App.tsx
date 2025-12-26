
import React, { useState } from 'react';
import { BurnoutMetric, FinancialGoal } from './types';
import Dashboard from './components/Dashboard';
import CareerGPS from './components/CareerGPS';
import DreamFund from './components/DreamFund';
import StrategyHub from './components/StrategyHub';

const MOCK_BURNOUT: BurnoutMetric[] = [
  { date: 'Mon', workHours: 9, intensity: 65 },
  { date: 'Tue', workHours: 10, intensity: 78 },
  { date: 'Wed', workHours: 11, intensity: 88 },
  { date: 'Thu', workHours: 11, intensity: 92 },
  { date: 'Fri', workHours: 8, intensity: 70 },
  { date: 'Sat', workHours: 2, intensity: 20 },
  { date: 'Sun', workHours: 1, intensity: 15 },
];

const MOCK_GOALS: FinancialGoal[] = [
  { id: '1', name: 'Goa Trip', targetAmount: 45000, currentAmount: 20250, category: 'Travel' },
  { id: '2', name: 'Emergency Fund', targetAmount: 200000, currentAmount: 55000, category: 'Investment' }
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Overview', icon: '📊' },
    { id: 'career', label: 'Career GPS', icon: '🧭' },
    { id: 'money', label: 'Dream Fund', icon: '💰' },
    { id: 'strategy', label: 'Strategy Hub', icon: '🧠' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard burnoutData={MOCK_BURNOUT} goals={MOCK_GOALS} />;
      case 'career': return <CareerGPS />;
      case 'money': return <DreamFund />;
      case 'strategy': return <StrategyHub />;
      default: return <Dashboard burnoutData={MOCK_BURNOUT} goals={MOCK_GOALS} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <nav className="w-full md:w-64 bg-white border-r border-slate-100 p-6 flex flex-col sticky top-0 md:h-screen">
        <div className="flex items-center space-x-3 mb-10">
          <div className="bg-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-100">
            D
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">DreamOn</span>
        </div>

        <div className="flex-1 space-y-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-slate-100">
          <div className="bg-slate-50 p-4 rounded-2xl flex items-center space-x-3">
            <img 
              src="https://picsum.photos/seed/rahul/40/40" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
              alt="User"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-slate-800 truncate">Rahul Sharma</p>
              <p className="text-xs text-slate-400 truncate">SDE-II @ TechCorp</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 bg-slate-50/50">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              {navItems.find(n => n.id === activeTab)?.label}
            </h1>
            <p className="text-slate-500 text-sm">Welcome back, Rahul. Your success silo is 85% aligned.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm text-slate-400 hover:text-slate-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </button>
            <div className="bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm flex items-center space-x-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-slate-600">Setu AA Linked</span>
            </div>
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
};

export default App;
