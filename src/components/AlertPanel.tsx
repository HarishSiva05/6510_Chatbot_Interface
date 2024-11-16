import React, { useState } from 'react';
import { Alert } from '../types';
import { AlertTriangle, AlertCircle, AlertOctagon } from 'lucide-react';
import { Modal } from './Modal';
import { AlertDetail } from './AlertDetail';

interface AlertPanelProps {
  alerts: Alert[];
}

export const AlertPanel: React.FC<AlertPanelProps> = ({ alerts }) => {
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return <AlertOctagon className="text-red-500" size={20} />;
      case 'medium':
        return <AlertTriangle className="text-orange-500" size={20} />;
      default:
        return <AlertCircle className="text-yellow-500" size={20} />;
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Security Alerts</h2>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="border-l-4 border-red-500 bg-red-50 p-3 rounded cursor-pointer hover:bg-red-100 transition-colors"
              onClick={() => setSelectedAlert(alert)}
            >
              <div className="flex items-center gap-2">
                {getSeverityIcon(alert.severity)}
                <h3 className="font-medium">{alert.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
              <span className="text-xs text-gray-500 mt-2 block">
                {alert.timestamp.toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={selectedAlert !== null}
        onClose={() => setSelectedAlert(null)}
      >
        {selectedAlert && <AlertDetail alert={selectedAlert} />}
      </Modal>
    </>
  );
};