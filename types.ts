
export interface User {
  id: string;
  name: string;
  role: string;
  company?: string;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  gap: boolean;
  resource?: string;
}

export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  category: 'Travel' | 'Investment' | 'Purchase';
}

export interface Transaction {
  id: string;
  date: string;
  merchant: string;
  amount: number;
  category: string;
  isUpi: boolean;
}

export interface BurnoutMetric {
  date: string;
  workHours: number;
  intensity: number; // 0-100
}

export interface StrategySection {
  title: string;
  content: string;
  icon: string;
}
