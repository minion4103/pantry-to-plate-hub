
import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SaleItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

const availableProducts = [
  { id: '1', name: 'Fresh Bananas', price: 2.99, stock: 50 },
  { id: '2', name: 'Whole Milk', price: 3.49, stock: 5 },
  { id: '3', name: 'Chicken Breast', price: 8.99, stock: 25 },
  { id: '4', name: 'Bread Loaf', price: 2.49, stock: 15 },
];

const SalesForm: React.FC = () => {
  const [saleItems, setSaleItems] = useState<SaleItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToSale = (product: typeof availableProducts[0]) => {
    const existingItem = saleItems.find(item => item.id === product.id);
    if (existingItem) {
      setSaleItems(saleItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
          : item
      ));
    } else {
      setSaleItems([...saleItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        total: product.price
      }]);
    }
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setSaleItems(saleItems.filter(item => item.id !== id));
    } else {
      setSaleItems(saleItems.map(item =>
        item.id === id
          ? { ...item, quantity: newQuantity, total: newQuantity * item.price }
          : item
      ));
    }
  };

  const totalAmount = saleItems.reduce((sum, item) => sum + item.total, 0);

  const filteredProducts = availableProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Process Sale</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Selection */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Select Products</h3>
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {filteredProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-muted-foreground">${product.price.toFixed(2)} • {product.stock} in stock</p>
                </div>
                <Button
                  size="sm"
                  onClick={() => addToSale(product)}
                  disabled={product.stock === 0}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Sale Items */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Sale Items</h3>
          {saleItems.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No items added to sale</p>
          ) : (
            <div className="space-y-4">
              {saleItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-medium">${item.total.toFixed(2)}</p>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <Button className="w-full mt-4" size="lg">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Complete Sale
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default SalesForm;
