
import React from 'react';
import { TrendingUp, Package, ShoppingCart, DollarSign } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Products',
      value: '156',
      change: '+12%',
      icon: Package,
      color: 'text-blue-600'
    },
    {
      title: 'Today\'s Sales',
      value: '$1,234',
      change: '+8%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Low Stock Items',
      value: '23',
      change: '-5%',
      icon: TrendingUp,
      color: 'text-orange-600'
    },
    {
      title: 'Orders Pending',
      value: '8',
      change: '+3%',
      icon: ShoppingCart,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change}</p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Sales</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span>Fresh Bananas</span>
              <span className="font-medium">$15.99</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span>Whole Milk</span>
              <span className="font-medium">$3.49</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span>Chicken Breast</span>
              <span className="font-medium">$26.97</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Low Stock Alert</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span>Whole Milk</span>
              <span className="text-red-600 font-medium">5 units</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span>Bread Loaf</span>
              <span className="text-red-600 font-medium">0 units</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span>Eggs</span>
              <span className="text-yellow-600 font-medium">8 units</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
