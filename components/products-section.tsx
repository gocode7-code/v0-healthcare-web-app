'use client'

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export function ProductsSection() {
  const products = [
    {
      name: 'Immunity Booster',
      category: 'Wellness Formula',
      benefits: 'Enhances immune system, fights infections naturally',
      price: 'PKR 1,500',
    },
    {
      name: 'Stress Relief',
      category: 'Mental Health',
      benefits: 'Reduces anxiety, promotes restful sleep',
      price: 'PKR 1,200',
    },
    {
      name: 'Digestive Care',
      category: 'GI Health',
      benefits: 'Improves digestion, reduces bloating and discomfort',
      price: 'PKR 1,300',
    },
    {
      name: 'Skin Clarity',
      category: 'Beauty & Wellness',
      benefits: 'Natural solution for clear, healthy skin',
      price: 'PKR 1,600',
    },
    {
      name: 'Energy Tonic',
      category: 'Vitality Formula',
      benefits: 'Boosts energy and stamina naturally',
      price: 'PKR 1,400',
    },
    {
      name: "Women's Health",
      category: 'Wellness',
      benefits: 'Supports hormonal balance and wellness',
      price: 'PKR 1,500',
    },
  ]

  const handleAddToCart = (productName: string, price: string) => {
    const message = `Hi! I want to order *${productName}* (${price}) from Khursheed Health Hub.`
    const whatsappUrl = `https://wa.me/923332103056?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Natural Health Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium, natural health products formulated for optimal wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group fade-in-up bg-white/70 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 hover:bg-white/90 transition-all duration-300 flex flex-col justify-between"
              style={{ animationDelay: `${(index % 3) * 100}ms` }}
            >
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-primary font-semibold mb-3">
                  {product.category}
                </p>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {product.benefits}
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-lg font-bold text-foreground">
                  {product.price}
                </span>
                <button
                  onClick={() => handleAddToCart(product.name, product.price)}
                  className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All products are 100% natural and manufactured under strict quality control
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-md"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
