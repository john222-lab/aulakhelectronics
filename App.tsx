import React, { useState } from 'react';
import { Menu, X, Globe, Cpu, Bot, Zap, MapPin, Phone, Mail, ArrowRight, ChevronRight, Facebook, Linkedin, Instagram, Tv, Thermometer, ShoppingBag, Box, Package, Cog, CheckCircle, TrendingUp, Layers } from 'lucide-react';
import { motion } from 'motion/react';

type Category = 'All' | 'Industrial Automation' | 'Robotics' | 'Home Appliances';
interface Product {
  id: number; name: string; category: Category; price: string; image: string; description: string; badge?: string; specs?: string[];
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Automatic Rotary Pouch Packing Machine', category: 'Industrial Automation', price: 'B2B Quote Only', image: 'https://images.unsplash.com/photo-1764745021344-317b80f09e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNoYXJlY2h8MXx4aGVsXRvbWF0ZWFtMjBwYWNrYWdpYm1jbE1qBtYWNoaW5lJTIwZmFjZGVyOXllWHxlbnwxfHx8MTN6AzMzQwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'High-speed rotary packaging system for food and granular products.', badge: 'Best Seller', specs: ['60 pouches/min', 'PLC Control', 'Stainless Steel'] },
  { id: 2, name: '6-Axis Industrial Palletizing Robot', category: 'Robotics', price: 'B2B Quote Only', image: 'https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNoYXJlY2h8YmJvdHNoVXyMHBpY2tpbmjbVFlM2BwbGmphW5nJTIwYm94ZWE4ZW58MXx8fHdzNzc0MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Heavy-duty robotic arm for end-of-line packaging.', badge: 'Industrial Grade', specs: ['180kg Payload', '3m Reach', 'IP67 Rated'] },
  { id: 3, name: 'Conveyor Belt Sorting System', category: 'Industrial Automation', price: 'Custom Config', image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNoYXJlY2h8IHBibVIxYzNSeWFWRnNKVEl3YTMudmV5b3IlMjBiZmx0JTIwc3lzdGVmRndu fD8fHx8MTc3TURNMzNDNDI5M3ww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Intelligent sorting conveyor with vision sensors.', specs: ['Variable Speed', 'Vision Integration', 'Modular'] },
  { id: 4, name: 'Inverter Refrigerator Double Door', category: 'Home Appliances', price: 'Rs. 125,000', image: 'https://images.unsplash.com/photo-1758488438758-5e2eedf769ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNoYXJlY2h8dG2Rlcm4lMjByZWRyaWdlcmF0b3IlMjBrYVhRamFHVnufRndufD8fHx8MTc3TURNwMDc2M3ww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Energy-efficient inverter technology.' },
  { id: 5, name: '1.5 Ton DC Inverter AC', category: 'Home Appliances', price: 'Rs. 110,000', image: 'https://images.unsplash.com/photo-1762341123870-d706f257a12e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNoYXJlY2h8zGxpZHUyMGFpciUyMGNvbmRpdGlvbmVyJTIwd2FzbHxlbnwxfHx8MTE3NzA3Mzk4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'High-efficiency cooling with WiFi control.' },
  { id: 6, name: 'Pharmaceutical Blister Packing Machine', category: 'Industrial Automation', price: 'B2B Quote Only', image: 'https://images.unsplash.com/photo-1663059270712-2b183b24b251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNoYXJlY2h8dGFlYmWFZXV0aWNhbCU2MHBybGZpbG0lMjBhdWF0aW9ufGVufHx8MTc3TURNMzNDNDI5M3ww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Precision blister packing for pharmaceutical tablets.', specs: ['High Output', 'Auto-Reject'] }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a href="https://aulakhelectronics.com/" className="flex-shrink-0 flex items-center group transition-all">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-3 shadow-lg group-hover:bg-blue-700 transition-all">
              <Zap size={24} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">AULAKH</span>
              <span className="text-xs font-bold text-blue-600 uppercase">Electronics</span>
            </div>
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-gray-600 hover:text-blue-600 font-medium text-sm uppercase">Home</a>
            <a href="#automation" className="text-gray-600 hover:text-blue-600 font-medium text-sm uppercase">Automation</a>
            <a href="#products" className="text-gray-600 hover:text-blue-600 font-medium text-sm uppercase">Products</a>
            <button onClick={() => window.location.href='#contact'} className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-medium text-sm shadow-md">Get Quote</button>
          </div>
          <div className="md:hidden flex items-center"><button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28}/> : <Menu size={28}/>}</button></div>
        </div>
      </div>
    </nav>
  );
};

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: 'Packaging Machine', message: '' });
  const handleSubmit = async (e) => {
    e.preventDefault(); setStatus('loading');
    try {
      const res = await fetch('/api/send-quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (res.ok) setStatus('success'); else setStatus('error');
    } catch { setStatus('error'); }
  };
  if (status === 'success') return (
    <section id="contact" className="py-32 bg-gray-900 text-center text-white"><CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6"/><h2 className="text-4xl font-bold mb-4">Request Sent!</h2><p className="text-gray-400">Team will email <b>{formData.email}</b> within 24 hours.</p><button onClick={()=>setStatus('idle')} className="mt-8 text-blue-500 font-bold hover:underline">New Request</button></section>
  );
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div><h2 className="text-5xl font-bold mb-8">Ready to Automate?</h2><div className="space-y-8"><div className="flex items-center"><MapPin className="text-blue-500 w-12 h-12 mr-6"/><p>Hafizabad Road, Nokhar Mandi, Gujranwala</p></div><div className="flex items-center"><Phone className="text-blue-500 w-12 h-12 mr-6"/><p>+92 308 6456623</p></div></div></div>
        <div className="bg-white rounded-2xl p-10 text-gray-900 shadow-2xl">
          <h3 className="text-2xl font-bold mb-8">Request an Import Quote</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input placeholder="Full Name" required className="w-full p-4 bg-gray-50 border rounded-xl" value={formData.name} onChange={e=>setFormData({...formData, name:e.target.value})} />
            <input placeholder="Email Address" type="email" required className="w-full p-4 bg-gray-50 border rounded-xl" value={formData.email} onChange={e=>setFormData({...formData, email:e.target.value})} />
            <input placeholder="Phone Number" required className="w-full p-4 bg-gray-50 border rounded-xl" value={formData.phone} onChange={e=>setFormData({...formData, phone:e.target.value})} />
            <select className="w-full p-4 bg-gray-50 border rounded-xl" value={formData.interest} onChange={e=>setFormData({...formData, interest:e.target.value})}><option>Packaging Machine</option><option>Industrial Robot Arm</option><option>Other</option></select>
            <textarea placeholder="Requirements..." required rows="4" className="w-full p-4 bg-gray-50 border rounded-xl" value={formData.message} onChange={e=>setFormData({...formData, message:e.target.value})}></textarea>
            <button type="submit" disabled={status==='loading'} className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/30">{status==='loading'?'Sending...':'Get Free Consultation'}</button>
            {status==='error' && <p className="text-red-500 text-center font-bold">Something went wrong. Check Vercel logs.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center bg-gray-900 overflow-hidden">
    <div className="absolute inset-0 opacity-40"><img src="https://images.unsplash.com/photo-1742767069929-0c663150b164?cs=tinysrgb&fit=max&fm=jpg&w=1080" className="w-full h-full object-cover"/></div>
    <div className="relative z-10 max-w-7xl mx-auto px-4"><motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{duration:0.8}}><h1 className="text-6xl md:text-8xl font-black text-white mb-8">Revolutionizing <span className="text-blue-500">Automation</span></h1><p className="text-xl text-gray-300 max-w-2xl mb-10">We import world-class industrial machinery directly to your factory floor in Pakistan.</p><div className="flex gap-4"><a href="#automation" className="bg-blue-600 px-8 py-4 rounded-lg font-bold text-white shadow-xl shadow-blue-600/30">Explore Solutions</a></div></motion.div></div>
  </section>
);

const IndustrialSolutions = () => (
  <section id="automation" className="py-24 bg-white"><div className="max-w-7xl mx-auto px-4 text-center"><h2 className="text-4xl font-bold mb-16">Advanced Automation Solutions</h2><div className="grid md:grid-cols-3 gap-8"><div className="p-8 bg-gray-50 rounded-2xl border hover:border-blue-500 transition-all"><Package className="mx-auto mb-6 text-blue-600 w-12 h-12"/><h3 className="text-2xl font-bold mb-4">Smart Packaging</h3><p className="text-gray-600">Automated vertical and rotary packing systems for food & pharma.</p></div><div className="p-8 bg-gray-50 rounded-2xl border hover:border-blue-500 transition-all"><Layers className="mx-auto mb-6 text-blue-600 w-12 h-12"/><h3 className="text-2xl font-bold mb-4">Assembly Lines</h3><p className="text-gray-600">Custom robotic assembly imported from China's top firms.</p></div><div className="p-8 bg-gray-50 rounded-2xl border hover:border-blue-500 transition-all"><TrendingUp className="mx-auto mb-6 text-blue-600 w-12 h-12"/><h3 className="text-2xl font-bold mb-4">End-of-Line</h3><p className="text-gray-600">Robotic palletizers and downstream warehouse solutions.</p></div></div></div></section>
);

const ProductCatalog = () => (
  <section id="products" className="py-24 bg-white border-t"><div className="max-w-7xl mx-auto px-4"><h2 className="text-3xl font-bold mb-12">Import Catalog</h2><div className="grid md:grid-cols-3 gap-8">{PRODUCTS.map(p=>(<div key={p.id} className="border rounded-xl overflow-hidden hover:shadow-xl transition-all"><img src={p.image} className="w-full h-48 object-cover"/><div className="p-6"><h3 className="font-bold text-lg mb-2">{p.name}</h3><p className="text-gray-500 text-sm mb-4">{p.description}</p><div className="flex justify-between items-center"><span className="text-blue-600 font-bold">{p.price}</span><button className="text-sm font-bold flex items-center">Details <ChevronRight size={16}/></button></div></div></div>))}</div></div></section>
);

const Footer = () => (
  <footer className="bg-gray-950 text-white py-12 border-t border-gray-900"><div className="max-w-7xl mx-auto px-4 text-center"><div className="flex items-center justify-center mb-6"><Zap className="text-blue-500 mr-2"/><span className="font-bold text-xl">AULAKH</span></div><p className="text-gray-600">© {new Date().getFullYear()} Aulakh Electronics. Pakistan's Automation Leader.</p></div></footer>
);

function App() { return (<div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth"><Navigation/><Hero/><IndustrialSolutions/><ProductCatalog/><Contact/><Footer/></div>); }
export default App;