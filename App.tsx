import React, { useState } from 'react';
import { Menu, X, Globe, Cpu, Bot, Zap, MapPin, Phone, Mail, ArrowRight, ChevronRight, Facebook, Linkedin, Instagram, Tv, Thermometer, ShoppingBag, Box, Package, Cog, CheckCircle, TrendingUp, Layers } from 'lucide-react';
import { motion } from 'motion/react';

// --- Types ---
type Category = 'All' | 'Industrial Automation' | 'Robotics' | 'Home Appliances';

interface Product {
  id: number;
  name: string;
  category: Category;
  price: string;
  image: string;
  description: string;
  badge?: string;
  specs?: string[];
}

// --- Mock Data ---
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Automatic Rotary Pouch Packing Machine',
    category: 'Industrial Automation',
    price: 'B2B Quote Only',
    image: 'https://images.unsplash.com/photo-1764745021344-317b80f09e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0ZWQlMjBwYWNrYWdpbmclMjBtYWNoaW5lJTIwZmFjdG9yeXxlbnwxfHx8fDE3NzAzMzQwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'High-speed rotary packaging system for food and granular products. Imported from premier Shenzhen manufacturers.',
    badge: 'Best Seller',
    specs: ['60 pouches/min', 'PLC Control', 'Stainless Steel']
  },
  {
    id: 2,
    name: '6-Axis Industrial Palletizing Robot',
    category: 'Robotics',
    price: 'B2B Quote Only',
    image: 'https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMHBpY2tpbmclMjBhbmQlMjBwbGFjaW5nJTIwYm94ZXN8ZW58MXx8fHwxNzcwMzM0MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Heavy-duty robotic arm designed for end-of-line packaging and palletizing. Increases warehouse efficiency by 400%.',
    badge: 'Industrial Grade',
    specs: ['180kg Payload', '3m Reach', 'IP67 Rated']
  },
  {
    id: 3,
    name: 'Conveyor Belt Sorting System',
    category: 'Industrial Automation',
    price: 'Custom Config',
    image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29udmV5b3IlMjBiZWx0JTIwc3lzdGVtfGVufDF8fHx8MTc3MDMzNDA5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Intelligent sorting conveyor with vision sensors for logistics and distribution centers.',
    specs: ['Variable Speed', 'Vision Integration', 'Modular']
  },
  {
    id: 4,
    name: 'Inverter Refrigerator Double Door',
    category: 'Home Appliances',
    price: 'Rs. 125,000',
    image: 'https://images.unsplash.com/photo-1758488438758-5e2eedf769ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZWZyaWdlcmF0b3IlMjBraXRjaGVufGVufDF8fHx8MTc3MDMwMDc2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Energy-efficient inverter technology with rapid cooling and spacious storage.'
  },
  {
    id: 5,
    name: '1.5 Ton DC Inverter AC',
    category: 'Home Appliances',
    price: 'Rs. 110,000',
    image: 'https://images.unsplash.com/photo-1762341123870-d706f257a12e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGxpdCUyMGFpciUyMGNvbmRpdGlvbmVyJTIwd2FsbHxlbnwxfHx8fDE3NzAzMzM4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'High-efficiency cooling with WiFi control and energy saving mode.'
  },
  {
    id: 6,
    name: 'Pharmaceutical Blister Packing Machine',
    category: 'Industrial Automation',
    price: 'B2B Quote Only',
    image: 'https://images.unsplash.com/photo-1663059270712-2b183b24b251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHBhY2thZ2luZyUyMGxpbmUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3MDMzNDA5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Precision blister packing for pharmaceutical tablets and capsules. GMP compliant.',
    specs: ['High Output', 'Auto-Reject', 'Touch Screen']
  }
];

// --- Components ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-3 shadow-blue-500/30 shadow-lg">
              <Zap size={24} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-gray-900 leading-none">AULAKH</span>
              <span className="text-xs font-bold text-blue-600 tracking-[0.2em] uppercase mt-0.5">Electronics</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide">Home</a>
            <a href="#automation" className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide">Automation</a>
            <a href="#products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide">Products</a>
            <a href="#global" className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide">Global</a>
            <a href="#contact" className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 font-medium text-sm">Get Quote</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 pb-4 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Home</a>
            <a href="#automation" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Automation Solutions</a>
            <a href="#products" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Product Catalog</a>
            <a href="#global" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Global Network</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-blue-600 bg-blue-50 rounded-md">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-gray-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMHBpY2tpbmclMjBhbmQlMjBwbGFjaW5nJTIwYm94ZXN8ZW58MXx8fHwxNzcwMzM0MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Advanced Factory Automation" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-blue-900/30"></div>
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 -skew-x-12 transform origin-top"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-md">
            <Globe className="w-4 h-4 mr-2" />
            Direct Imports from China's Tech Hubs
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
            Revolutionizing Pakistan's <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Automation Industry</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
            We supply the backbone of modern manufacturing. From high-speed packaging lines to intelligent robotic arms, we import world-class industrial machinery directly to your factory floor in Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#automation" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/40 hover:-translate-y-1">
              Explore Industrial Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#products" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-gray-600 bg-gray-800/40 rounded-lg hover:bg-gray-700/60 transition-all hover:border-gray-400 backdrop-blur-sm">
              View Product Catalog
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-700/50 pt-8">
            <div>
              <p className="text-3xl font-bold text-white mb-1">50+</p>
              <p className="text-sm text-gray-400">Factories Automated</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-sm text-gray-400">Direct Import</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">24/7</p>
              <p className="text-sm text-gray-400">Tech Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const IndustrialSolutions = () => {
  return (
    <section id="automation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Industrial Expertise</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Packaging & Automation Solutions</h2>
          <p className="text-gray-600 text-lg">
            We specialize in importing advanced machinery that streamlines production, reduces labor costs, and ensures consistent quality for Pakistani manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors duration-300 group border border-gray-100 hover:border-blue-100">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Package size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Packaging</h3>
            <p className="text-gray-600 mb-6">
              Fully automated vertical and rotary packaging machines for food, pharmaceuticals, and consumer goods. Capable of filling, sealing, and labeling at high speeds.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500 mr-2" /> Flow Wrapping
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500 mr-2" /> Vacuum Sealing
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500 mr-2" /> Multi-head Weighing
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors duration-300 group border border-gray-100 hover:border-blue-100">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Layers size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Assembly Automation</h3>
            <p className="text-gray-600 mb-6">
              Custom robotic assembly lines imported from China's top robotics firms. Perfect for electronics assembly, automotive parts, and precision manufacturing.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500 mr-2" /> Pick & Place Robots
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500 mr-2" /> Screw Locking
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500 mr-2" /> Soldering Bots
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors duration-300 group border border-gray-100 hover:border-blue-100">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">End-of-Line Systems</h3>
            <p className="text-gray-600 mb-6">
              Complete downstream solutions including carton erectors, case packers, and robotic palletizers to automate your warehouse dispatch area.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500 mr-2" /> Robotic Palletizing
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500 mr-2" /> Case Packing
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle size={16} className="text-green-500 mr-2" /> Stretch Wrapping
              </li>
            </ul>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96">
           <img 
            src="https://images.unsplash.com/photo-1764745021344-317b80f09e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0ZWQlMjBwYWNrYWdpbmclMjBtYWNoaW5lJTIwZmFjdG9yeXxlbnwxfHx8fDE3NzAzMzQwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Factory Line"
            className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent flex flex-col justify-center px-12">
              <h3 className="text-3xl font-bold text-white mb-4">Why Automate with Us?</h3>
              <p className="text-gray-300 max-w-lg mb-8 text-lg">
                We handle the entire import process—from sourcing the right machine in China to customs clearance and delivery in Gujranwala. You get world-class tech without the logistical headache.
              </p>
              <a href="#contact" className="w-fit bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Request a Consultation
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

const GlobalSourcingSection = () => {
  return (
    <section id="global" className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29udmV5b3IlMjBiZWx0JTIwc3lzdGVtfGVufDF8fHx8MTc3MDMzNDA5M3ww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Logistics" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1663059270712-2b183b24b251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHBhY2thZ2luZyUyMGxpbmUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3MDMzNDA5M3ww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Pharma Tech" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
              Global Supply Network
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bridging International Tech with Local Industry
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Aulakh Electronics serves as the vital link between Pakistan's growing industrial sector and the world's most advanced manufacturing hubs. 
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our management team actively scouts and partners with tier-1 manufacturers in China to bring you machines that are not just affordable, but engineered for durability and high output. We handle all import complexities so you can focus on production.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sourcing from Shenzhen & Shanghai</h4>
                  <p className="text-sm text-gray-500">Partnered with top industrial zones in China</p>
                </div>
              </div>
              <div className="flex items-center">
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600">
                  <Cog size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Customized Machinery</h4>
                  <p className="text-sm text-gray-500">Machines built to your specific voltage and output needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Import Catalog</h2>
            <p className="text-gray-600">Browse our selection of ready-to-ship appliances and B2B industrial machinery.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['All', 'Industrial Automation', 'Robotics', 'Home Appliances'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as Category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-gray-900 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-gray-900 uppercase tracking-wide border border-gray-200 shadow-sm">
                  {product.category}
                </div>
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide shadow-md">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">{product.name}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">{product.description}</p>
                
                {product.specs && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.specs.map((spec, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200">
                        {spec}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-blue-600 font-bold text-lg">{product.price}</span>
                  <button className="text-sm font-bold text-gray-900 flex items-center hover:text-blue-600 transition-colors">
                    View Specs <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', phone: '', interest: 'Packaging Machine', message: '' });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) setStatus('success'); else setStatus('error');
    } catch { setStatus('error'); }
  };
  if (status === 'success') {
    return (
      <section id="contact" className="py-20 bg-gray-900 text-white flex items-center justify-center min-h-[600px]">
        <div className="text-center p-10 bg-white rounded-2xl text-gray-900 max-w-md mx-4">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Quote Request Sent!</h2>
          <p className="text-gray-600">Our engineering team will contact you within 24 hours.</p>
          <button onClick={() => setStatus('idle')} className="mt-6 text-blue-600 font-bold hover:underline">Send another request</button>
        </div>
      </section>
    );
  }
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2 block">Start Your Upgrade</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Automate?</h2>
            <p className="text-gray-400 text-lg mb-10">
              Whether you need a single packaging machine or a full factory upgrade, Aulakh Electronics is your direct line to China's best manufacturing tech.
            </p>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 mr-6 border border-gray-700">
                  <MapPin className="text-blue-500 w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Head Office</h4>
                  <p className="text-gray-400 mt-1">Hafizabad Road, Nokhar Mandi<br />Gujranwala, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 mr-6 border border-gray-700">
                  <Phone className="text-blue-500 w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Contact Sales</h4>
                  <p className="text-gray-400 mt-1">+92 308 6456623</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 mr-6 border border-gray-700">
                  <Mail className="text-blue-500 w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Email Us</h4>
                  <p className="text-gray-400 mt-1">info@aulakhelectronics.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl text-gray-900">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request an Import Quote</h3>
            <p className="text-gray-500 mb-8">Fill out the form below and our engineering team will get back to you.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-gray-50" placeholder="Ali Khan" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-gray-50" placeholder="+92 300..." />
                </div>
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-1">Machine Type</label>
                <select id="interest" value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-gray-50">
                  <option>Packaging Machine</option>
                  <option>Industrial Robot Arm</option>
                  <option>Conveyor System</option>
                  <option>Pharmaceutical Line</option>
                  <option>Home Appliances (Bulk)</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Production Requirements</label>
                <textarea id="message" rows="4" required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-gray-50" placeholder="E.g., I need to pack 50 bags per minute..."></textarea>
              </div>
              <button type="submit" disabled={status === 'loading'} className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 text-lg">
                {status === 'loading' ? 'Sending...' : 'Get Free Consultation'}
              </button>
              {status === 'error' && <p className="text-red-500 text-center font-semibold">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
               <Zap size={24} className="text-blue-500 mr-2" />
               <span className="font-bold text-xl tracking-tight">AULAKH</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering Pakistani industry with cutting-edge automation and reliable home electronics since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 transition-colors text-white border border-gray-800">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 transition-colors text-white border border-gray-800">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 transition-colors text-white border border-gray-800">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-6 text-white uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Packaging Automation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Robotic Assembly</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Factory Upgrades</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Industrial Spares</a></li>
            </ul>
          </div>

           <div>
            <h4 className="text-base font-bold mb-6 text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Global Partners</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Import Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-6 text-white uppercase tracking-wider">Showroom</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span>10 AM - 9 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>4 PM - 9 PM</span>
              </li>
              <li className="mt-4 text-xs text-gray-600">
                Hafizabad Road, Nokhar Mandi, Gujranwala
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Aulakh Electronics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-200 selection:text-blue-900 scroll-smooth">
      <Navigation />
      <Hero />
      <IndustrialSolutions />
      <GlobalSourcingSection />
      <ProductCatalog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
