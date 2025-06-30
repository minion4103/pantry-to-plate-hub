
import React from 'react';
import { Package, ShoppingCart, TrendingUp, FileText, BarChart3, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'inventory', name: 'Inventory', icon: Package },
  { id: 'sales', name: 'Sales', icon: ShoppingCart },
  { id: 'purchases', name: 'Purchases', icon: TrendingUp },
  { id: 'reports', name: 'Reports', icon: BarChart3 },
  { id: 'orders', name: 'Orders', icon: FileText },
  { id: 'settings', name: 'Settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-64 bg-white border-r border-border h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">📊</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gradient">ShopKeeper</h1>
            <p className="text-xs text-muted-foreground">Management System</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                onClick={() => onTabChange(item.id)}
                className="w-full justify-start"
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.name}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
