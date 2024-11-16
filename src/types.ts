export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'normal' | 'alert' | 'warning';
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: Date;
}

export interface Repository {
  name: string;
  status: 'secure' | 'warning' | 'critical';
  lastScan: Date;
}