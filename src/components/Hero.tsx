
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Shield, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-orange-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Fresh <span className="text-gradient">Groceries</span>
                <br />
                Delivered Fast
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Get the freshest produce, premium quality products, and everyday essentials 
                delivered to your doorstep in under 30 minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Browse Categories
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">Under 30 min</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Fresh Quality</h3>
                <p className="text-sm text-muted-foreground">100% Fresh</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">24/7 Service</h3>
                <p className="text-sm text-muted-foreground">Always open</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/api/placeholder/300/300"
                  alt="Fresh vegetables"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="/api/placeholder/300/200"
                  alt="Fresh fruits"
                  className="w-full h-32 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/api/placeholder/300/200"
                  alt="Dairy products"
                  className="w-full h-32 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="/api/placeholder/300/300"
                  alt="Bakery items"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
