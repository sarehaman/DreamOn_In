
import React, { useState } from 'react';
import { getCareerRoadmap } from '../services/geminiService';

const CareerGPS: React.FC = () => {
  const [targetRole, setTargetRole] = useState('Senior Product Manager');
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<any>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const data = await getCareerRoadmap(targetRole, 'Software Engineer');
      setRoadmap(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-xl shadow-indigo-100 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Career GPS</h2>
          <p className="text-indigo-100 opacity-90 mb-6 max-w-lg">
            Scan market trends in Bengaluru, Pune, and NCR to find your next level. 
            We'll block 15 mins daily to bridge the gap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              placeholder="Enter Target Role (e.g. Solution Architect)"
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-xl hover:bg-indigo-50 transition-colors disabled:opacity-50"
            >
              {loading ? 'Analyzing Market...' : 'Generate Roadmap'}
            </button>
          </div>
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {roadmap && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <span className="bg-indigo-100 p-2 rounded-lg mr-3">🚀</span>
              Top Skill Gaps
            </h3>
            <div className="space-y-4">
              {roadmap.skills.map((skill: any, idx: number) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="font-medium text-slate-800">{skill.name}</p>
                    <p className="text-xs text-slate-500">Market Standard: {skill.level}</p>
                  </div>
                  {skill.gap && (
                    <span className="text-[10px] uppercase tracking-wider font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded">Missing</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <span className="bg-amber-100 p-2 rounded-lg mr-3">⏱️</span>
              Micro-Learning Blocks
            </h3>
            <div className="space-y-4">
              {roadmap.skills.map((skill: any, idx: number) => (
                <div key={idx} className="flex items-center space-x-4 p-3 rounded-xl border border-dashed border-slate-200">
                  <div className="bg-slate-100 h-10 w-10 flex items-center justify-center rounded-lg text-slate-500 font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 text-sm">{skill.microLearningTopic}</p>
                    <p className="text-xs text-indigo-600 font-semibold mt-1 flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      Scheduled for 10:45 AM
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerGPS;
