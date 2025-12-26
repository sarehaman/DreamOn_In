
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area 
} from 'recharts';
import { BurnoutMetric, FinancialGoal } from '../types';

interface DashboardProps {
  burnoutData: BurnoutMetric[];
  goals: FinancialGoal[];
}

const Dashboard: React.FC<DashboardProps> = ({ burnoutData, goals }) => {
  const totalSavings = goals.reduce((acc, g) => acc + g.currentAmount, 0);
  const totalTarget = goals.reduce((acc, g) => acc + g.targetAmount, 0);
  const progressPercent = Math.round((totalSavings / totalTarget) * 100);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Money Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-slate-500 font-medium">Dream Fund</h3>
            <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full">+12% this month</span>
          </div>
          <p className="text-3xl font-bold text-slate-800">₹{totalSavings.toLocaleString('en-IN')}</p>
          <div className="mt-4 bg-slate-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full rounded-full transition-all duration-1000" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-sm text-slate-400 mt-2">{progressPercent}% of aggregate goals reached</p>
        </div>

        {/* Time Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-slate-500 font-medium">Skill Hours</h3>
            <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">3 Gaps Closed</span>
          </div>
          <p className="text-3xl font-bold text-slate-800">24.5h</p>
          <p className="text-sm text-slate-400 mt-4">Micro-learning sessions completed</p>
          <div className="flex mt-2 space-x-1">
            {[1,1,1,1,0,0,0].map((v, i) => (
              <div key={i} className={`h-4 w-4 rounded-sm ${v ? 'bg-indigo-500' : 'bg-slate-100'}`} />
            ))}
          </div>
        </div>

        {/* Burnout Risk Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-slate-500 font-medium">Burnout Score</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${burnoutData[burnoutData.length-1].intensity > 80 ? 'bg-rose-100 text-rose-700' : 'bg-blue-100 text-blue-700'}`}>
              {burnoutData[burnoutData.length-1].intensity > 80 ? 'High Risk' : 'Healthy'}
            </span>
          </div>
          <p className="text-3xl font-bold text-slate-800">{burnoutData[burnoutData.length-1].intensity}%</p>
          <p className="text-sm text-slate-400 mt-4">Calendar Density Trend (Last 7 Days)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar Density Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold mb-6">Calendar Intensity</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={burnoutData}>
                <defs>
                  <linearGradient id="colorIntensity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="intensity" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorIntensity)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Savings Growth */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold mb-6">Savings Momentum (₹)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={burnoutData.map((d, i) => ({ day: d.date, saved: 150 + (i * 45) }))}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                   cursor={{fill: '#f8fafc'}}
                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="saved" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
