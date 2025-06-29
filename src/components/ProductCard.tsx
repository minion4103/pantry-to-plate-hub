
import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  unit: string;
  inStock: boolean;
  isOrganic?: boolean;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  quantity, 
  onAddToCart, 
  onRemoveFromCart 
}) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
      <CardContent className="p-4">
        <div className="relative mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-lg bg-gray-100"
          />
          {product.discount && (
            <Badge variant="destructive" className="absolute top-2 left-2">
              -{product.discount}%
            </Badge>
          )}
          {product.isOrganic && (
            <Badge variant="secondary" className="absolute top-2 right-2 bg-green-100 text-green-800">
              Organic
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-xs text-muted-foreground">/{product.unit}</span>
          </div>

          {product.inStock ? (
            <div className="flex items-center justify-between pt-2">
              {quantity > 0 ? (
                <div className="flex items-center space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onRemoveFromCart(product.id)}
                    className="h-8 w-8 p-0"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="font-semibold min-w-[20px] text-center">{quantity}</span>
                  <Button
                    size="sm"
                    onClick={() => onAddToCart(product)}
                    className="h-8 w-8 p-0"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              ) : (
                <Button
                  size="sm"
                  onClick={() => onAddToCart(product)}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add to Cart
                </Button>
              )}
            </div>
          ) : (
            <Button size="sm" disabled className="w-full">
              Out of Stock
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
