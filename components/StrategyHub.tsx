
import React from 'react';

const StrategyHub: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section>
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Phase 1: Architecture & Engineering</h2>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-indigo-600 mb-4 flex items-center">
              <span className="mr-2">🧩</span> System Orchestration
            </h3>
            <p className="text-slate-600 leading-relaxed">
              The backend (FastAPI) acts as a high-performance bridge. 
              <strong> Setu AA</strong> (Consent Manager) pushes encrypted financial objects. 
              Our <strong>Painless Skim Engine</strong> parses these for discretionary spending. 
              Simultaneously, <strong>Microsoft Graph/Google API</strong> feeds calendar availability to the 
              <strong> Gemini Reasoning Engine</strong>, which generates 15-minute learning blocks based on skills gaps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-800 mb-3 underline">Painless Skim Algorithm</h4>
              <pre className="text-xs bg-slate-900 text-slate-300 p-4 rounded-lg overflow-x-auto">
{`FUNCTION calculate_painless_skim(transactions, config):
  total_skim = 0
  daily_limit = config.max_percent * daily_income
  
  FOR txn IN transactions:
    # Chillar Logic
    round_up = CEIL(txn.amt / 10) * 10
    skim = round_up - txn.amt
    
    # Context Logic
    IF txn.category == 'discretionary':
      skim += txn.amt * 0.05 # Extra 5% for coffee/dining
      
    total_skim += MIN(skim, daily_limit)
    
  RETURN total_skim`}
              </pre>
            </div>

            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
              <h4 className="font-bold text-indigo-800 mb-3 underline">Data Schema Highlights</h4>
              <ul className="text-sm text-indigo-900 space-y-2">
                <li><strong>User:</strong> {`{ id, onboarding_vibe, target_role_id }`}</li>
                <li><strong>Skill:</strong> {`{ id, name, proficiency_score, market_gap_flag }`}</li>
                <li><strong>Goal:</strong> {`{ id, type: "CHILLAR", bucket_id, milestone }`}</li>
                <li><strong>Wellness:</strong> {`{ user_id, calendar_lock_active, risk_score }`}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Privacy & Compliance (RBI Framework)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Non-Custodial", icon: "🛡️", desc: "We use Account Aggregator for 'Read-Only' access. We never store bank login credentials." },
            { title: "Consent Lifecycle", icon: "🔑", desc: "Users define 'Purpose' and 'Expiry' for data sharing per RBI's NBFC-AA guidelines." },
            { title: "Data Anonymization", icon: "🌫️", desc: "Transaction metadata is parsed for skim logic, then raw statements are purged from hot storage." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StrategyHub;
