
import React, { useState } from 'react';
import { Plus, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface PurchaseItem {
  id: string;
  productName: string;
  quantity: number;
  unitCost: number;
  total: number;
}

const PurchaseForm: React.FC = () => {
  const [supplier, setSupplier] = useState('');
  const [purchaseItems, setPurchaseItems] = useState<PurchaseItem[]>([]);
  const [newItem, setNewItem] = useState({
    productName: '',
    quantity: 0,
    unitCost: 0
  });

  const addPurchaseItem = () => {
    if (newItem.productName && newItem.quantity > 0 && newItem.unitCost > 0) {
      const item: PurchaseItem = {
        id: Date.now().toString(),
        productName: newItem.productName,
        quantity: newItem.quantity,
        unitCost: newItem.unitCost,
        total: newItem.quantity * newItem.unitCost
      };
      setPurchaseItems([...purchaseItems, item]);
      setNewItem({ productName: '', quantity: 0, unitCost: 0 });
    }
  };

  const removePurchaseItem = (id: string) => {
    setPurchaseItems(purchaseItems.filter(item => item.id !== id));
  };

  const totalAmount = purchaseItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Purchase Entry</h2>
      
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Purchase Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Supplier Name</label>
            <Input
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              placeholder="Enter supplier name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Purchase Date</label>
            <Input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Add Items</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">Product Name</label>
            <Input
              value={newItem.productName}
              onChange={(e) => setNewItem({...newItem, productName: e.target.value})}
              placeholder="Product name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <Input
              type="number"
              value={newItem.quantity}
              onChange={(e) => setNewItem({...newItem, quantity: parseInt(e.target.value) || 0})}
              placeholder="Quantity"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Unit Cost</label>
            <Input
              type="number"
              step="0.01"
              value={newItem.unitCost}
              onChange={(e) => setNewItem({...newItem, unitCost: parseFloat(e.target.value) || 0})}
              placeholder="Unit cost"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">&nbsp;</label>
            <Button onClick={addPurchaseItem} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </div>
        </div>

        {purchaseItems.length > 0 && (
          <div className="mt-6">
            <h4 className="font-medium mb-3">Purchase Items</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Product</th>
                    <th className="text-left p-2">Quantity</th>
                    <th className="text-left p-2">Unit Cost</th>
                    <th className="text-left p-2">Total</th>
                    <th className="text-left p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {purchaseItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-2">{item.productName}</td>
                      <td className="p-2">{item.quantity}</td>
                      <td className="p-2">${item.unitCost.toFixed(2)}</td>
                      <td className="p-2">${item.total.toFixed(2)}</td>
                      <td className="p-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removePurchaseItem(item.id)}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <div className="text-xl font-bold">
                Total Amount: ${totalAmount.toFixed(2)}
              </div>
              <Button size="lg">
                <Save className="h-4 w-4 mr-2" />
                Save Purchase
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default PurchaseForm;
