import React from 'react';
import { Header } from '../components/Header';
import { Building2, Users, Zap, Shield, Star, ArrowRight, CheckCircle } from 'lucide-react';

export const BusinessServices: React.FC = () => {
  const services = [
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      description: 'Custom plans for large organizations with advanced features and dedicated support',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      features: ['Unlimited downloads', 'Custom licensing', 'API access', 'Dedicated support', 'Brand guidelines'],
      price: 'Custom pricing'
    },
    {
      id: 'team',
      title: 'Team Collaboration',
      description: 'Streamline your teams creative workflow with shared libraries and permissions',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      features: ['Team workspaces', 'Shared collections', 'User management', 'Usage analytics', 'Collaboration tools'],
      price: '₹500/month per team'
    },
    {
      id: 'api',
      title: 'Developer API',
      description: 'Integrate AetherLens directly into your applications with our powerful API',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      features: ['REST API', 'Real-time search', 'Bulk operations', 'Webhooks', 'SDK libraries'],
      price: 'Pay per usage'
    },
    {
      id: 'white-label',
      title: 'White Label Solution',
      description: 'Launch your own branded stock photo platform with our infrastructure',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      features: ['Custom branding', 'Domain setup', 'Payment processing', 'Content management', 'Analytics dashboard'],
      price: 'Contact for pricing'
    }
  ];

  const benefits = [
    'Free services up to 10 image downloads',
    'No setup fees or hidden costs',
    'Dedicated account manager',
    '99.9% uptime guarantee',
    'Priority customer support',
    'Custom integration assistance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-800 mb-6">
            Business
            <span className="block bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto mb-8">
            Scale your creative operations with enterprise-grade tools and dedicated support
          </p>
          
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Schedule a Demo
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-200"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-amber-800 mb-2">{service.title}</h3>
                      <p className="text-amber-600 mb-4">{service.description}</p>
                      <div className="text-lg font-semibold text-amber-700">{service.price}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-amber-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <section className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl shadow-xl p-12 text-white mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose AetherLens for Business?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 px-8 py-3 bg-white text-amber-600 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-200 transform hover:scale-105">
                Contact Sales
              </button>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Scale?</h3>
                <p className="mb-6 text-white/90">
                  Join over 10,000 businesses already using AetherLens to power their creative workflows
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">10K+</div>
                    <div className="text-sm text-white/80">Businesses</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">99.9%</div>
                    <div className="text-sm text-white/80">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-12 border border-amber-200">
          <h2 className="text-3xl font-bold text-amber-800 mb-4">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl text-amber-600 mb-8 max-w-2xl mx-auto">
            Experience the power of AetherLens business solutions with our free trial. No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-amber-500 text-amber-700 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};