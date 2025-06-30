
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import InventoryTable from '@/components/InventoryTable';
import SalesForm from '@/components/SalesForm';
import PurchaseForm from '@/components/PurchaseForm';

const Index = () => {
  const [activeTab, setActiveTab] = useState('inventory');

  const renderContent = () => {
    switch (activeTab) {
      case 'inventory':
        return <InventoryTable />;
      case 'sales':
        return <SalesForm />;
      case 'purchases':
        return <PurchaseForm />;
      case 'reports':
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
