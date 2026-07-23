'use client'

import Link from 'next/link'
import { ArrowRight, Leaf, ShoppingCart } from 'lucide-react'

const products = [
  {
    name: 'Immunity Booster',
    category: 'Supplements',
    price: 'PKR 1,500',
    description: 'Natural supplement to strengthen immune system and protect against infections.',
    benefits: ['Strengthens immunity', 'Natural ingredients', 'Safe for all ages']
  },
  {
    name: 'Stress Relief Tonic',
    category: 'Wellness',
    price: 'PKR 1,200',
    description: 'Herbal tonic for anxiety, stress, and mental fatigue without side effects.',
    benefits: ['Reduces stress', 'Improves sleep', 'Natural and safe']
  },
  {
    name: 'Digestive Care',
    category: 'Digestive Health',
    price: 'PKR 1,300',
    description: 'Complete digestive support for stomach issues, bloating, and acid reflux.',
    benefits: ['Improves digestion', 'Reduces bloating', 'Natural remedies']
  },
  {
    name: 'Joint & Bone Support',
    category: 'Pain Management',
    price: 'PKR 1,600',
    description: 'Natural relief for joint pain, arthritis, and bone-related conditions.',
    benefits: ['Pain relief', 'Improves mobility', 'Strengthens bones']
  },
  {
    name: 'Skin Care Range',
    category: 'Skin Health',
    price: 'PKR 1,400',
    description: 'Natural skincare products for acne, eczema, psoriasis, and other skin conditions.',
    benefits: ['Clears acne', 'Soothes irritation', 'Natural ingredients']
  },
  {
    name: 'Women Health',
    category: 'Women Care',
    price: 'PKR 1,500',
    description: "Comprehensive natural products for women's health and hormonal balance.",
    benefits: ['Hormonal balance', 'Period comfort', 'Natural support']
  }
]

export default function ProductsPage() {
  const handleOrder = (productName: string, price: string) => {
    const message = `Hi! I want to inquire/order *${productName}* (${price}) from Khursheed Health Hub.`
    const whatsappUrl = `https://wa.me/923332103056?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Natural Health Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of natural, effective health products designed for your wellness journey
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {products.map((product, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-bold text-foreground bg-primary/10 px-3 py-1 rounded-full text-sm">
                    {product.price}
                  </span>
                </div>

                <p className="text-sm font-medium text-primary mb-2">
                  {product.category}
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.name}
                </h3>

                <p className="text-muted-foreground mb-6 text-sm">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.benefits.map((benefit, j) => (
                    <li key={j} className="flex gap-2 text-sm text-foreground">
                      <span className="text-primary font-bold">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleOrder(product.name, product.price)}
                className="w-full mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ShoppingCart className="h-4 w-4" />
                Order via WhatsApp
              </button>
            </div>
          ))}
        </div>

        {/* Why Our Products */}
        <div className="bg-primary/5 rounded-2xl border border-primary/20 p-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Why Choose Our Products?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: '100% Natural', desc: 'No artificial chemicals, preservatives, or additives' },
              { title: 'Scientifically Formulated', desc: 'Based on years of research and expertise' },
              { title: 'Clinically Tested', desc: 'Proven effectiveness with satisfied customers' },
              { title: 'Safe & Effective', desc: 'No harmful side effects, gentle on the body' },
              { title: 'Quality Assured', desc: 'Highest standards of manufacturing and testing' },
              { title: 'Affordable', desc: 'Accessible healthcare for everyone' }
            ].map((point, i) => (
              <div key={i} className="text-center">
                <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 bg-card rounded-xl border border-border p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Need Personalized Product Recommendations?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experts can recommend the perfect products based on your specific health needs and conditions.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Get Recommendations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
