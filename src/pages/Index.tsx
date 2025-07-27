
import { ArrowDown, HardDrive, Cpu, MemoryStick, Database, MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:sales@hitechtechno.com?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const products = [
  {
    // icon: HardDrive,
    title: "SSDs & NVMe Drives",
    description: "High-performance solid state drives for enterprise and consumer applications",
    image: "/lovable-uploads/ssd.jpg"
  },
  {
    // icon: MemoryStick,
    title: "RAM Modules",
    description: "DDR3, DDR4, DDR5 memory modules for servers, desktops, and laptops",
    image: "/lovable-uploads/ram.jpg"
  },
  {
    // icon: Database,
    title: "Flash Memory",
    description: "USB drives, SD cards, and embedded flash storage solutions",
    image: "/lovable-uploads/flash.png"
  },
  {
    // icon: Cpu,
    title: "CPUs & Motherboards",
    description: "Latest processors and compatible motherboards from leading manufacturers, server CPUs from top brands for powerful performance",
    image: "/lovable-uploads/cpu.jpg"
  },
  {
    // icon: HardDrive,
    title: "Storage Devices",
    description: "Traditional HDDs, external storage, and enterprise storage solutions",
    image: "/lovable-uploads/storage.jpg"
  },
  {
    // icon: HardDrive,
    title: "GPU",
    description: "Powerful graphics cards for gaming, AI, and high-performance computing applications.",
    image: "/lovable-uploads/gpu.jpg"
  }
];


  const brands = [
    { name: "Micron", logo: "/lovable-uploads/9f657eaa-3833-480d-bee1-f3e1ba243d23.png" },
    { name: "Iris International", logo: "/lovable-uploads/samsung.jpg"},
     { name: "Transcend", logo: "/lovable-uploads/1b6f9cd3-d9f1-4ade-993f-7e0328b01569.png" },
    { name: "Phison", logo: "/lovable-uploads/3b6fbfbd-70bd-4e4e-8a3c-f6d44439f520.png" },
    { name: "Western Digital", logo: "/lovable-uploads/7adfc1f9-a706-420e-b2fa-e74d4d2c6ae8.png" },
    { name: "SK Hynix", logo: "/lovable-uploads/413231c1-dedc-453d-8d9e-b4c96857c34b.png" },
    { name: "Palit", logo: "/lovable-uploads/60802102-4ded-4260-afb6-793706fe493b.png" },
    { name: "Intel", logo: "/lovable-uploads/5d380548-fd98-46c2-a4cc-57f2dae874ce.png" },
    { name: "AMD", logo: "/lovable-uploads/c712e54c-a428-49e4-93ab-19c3b28b7aec.png" },
    { name: "Iris International", logo: "/lovable-uploads/hp.png"},
    { name: "Kingston", logo: "/lovable-uploads/9cde80eb-27f4-48c8-a1b8-8b714a46dc1b.png" },
    { name: "Iris International", logo: "/lovable-uploads/adata.jpg"},
    { name: "Iris International", logo: "/lovable-uploads/asus.png" },
    { name: "Iris International", logo: "/lovable-uploads/gigabyte.png" },
    { name: "Iris International", logo: "/lovable-uploads/lenovo.png" },
    { name: "Iris International", logo: "/lovable-uploads/msi.png" },
    { name: "Iris International", logo: "/lovable-uploads/crucial.png" },
    { name: "Iris International", logo: "/lovable-uploads/dell.png" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/57bceaa3-bb6e-4136-a729-a5d45512b90d.png" 
                alt="HiTech Techno Limited" 
                className="h-10 w-auto"
              />
              {/* <span className="font-semibold text-xl text-primary">HiTech Techno</span> */}
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
                Home
              </button>
              <button onClick={() => scrollToSection('products')} className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
                Products
              </button>
              <button onClick={() => scrollToSection('brands')} className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
                Brands
              </button>
              <button onClick={() => scrollToSection('location')} className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
                Location
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50/30 to-slate-50/20">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 
  className="text-5xl md:text-6xl font-bold mb-6 mt-20 animate-fade-in-up hover:scale-105 transition-transform duration-300" 
  style={{color: '#007acc'}}
>
  Reliable IT Component Supplier
</h1>

            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up stagger-1">
              Delivering top-tier electronic hardware solutions globally.
            </p>
            
            <Button 
              onClick={() => scrollToSection('products')} 
              size="lg" 
              className="bg-primary hover:bg-primary/90 hover:scale-105 transform transition-all duration-300 text-primary-foreground px-8 py-3 text-lg animate-fade-in-up stagger-2 shadow-lg hover:shadow-xl"
            >
              Explore Products
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#007acc'}}>Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in distributing high-quality electronic components from the world's leading manufacturers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
    <CardContent className="p-6 text-center">
      {/* Product Image */}
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-40 object-cover rounded-lg mb-4" 
      />
{/*       
      Icon
      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <product.icon className="w-8 h-8 text-accent" />
      </div>
       */}
      {/* Title & Description */}
      <h3 className="font-semibold text-lg mb-2" style={{ color: '#007acc' }}>{product.title}</h3>
      <p className="text-muted-foreground text-sm">{product.description}</p>
    </CardContent>
  </Card>
))}
          </div>
        </div>
      </section>

      {/* Product Availability Note */}
<section className="py-10 px-4 bg-secondary/20">
  <div className="container mx-auto text-center max-w-2xl">
    <p className="text-lg text-muted-foreground">
      All products available in <strong>Pulled/Refurbished</strong> and <strong>Brand New</strong> conditions
    </p>
  </div>
</section>


      {/* Brands Section */}
      <section id="brands" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#007acc'}}>Brands We Work With</h2>
            <p className="text-lg text-muted-foreground">
             Trusted sourcing of products from industry-leading manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="bg-white border border-border rounded-lg p-6 flex items-center justify-center h-24 hover:shadow-lg hover:scale-110 transition-all duration-300 animate-fade-in-up cursor-pointer"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-12 max-w-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#007acc'}}>Our Office</h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of China's technology hub
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="animate-fade-in-up hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4" style={{color: '#007acc'}}>Hitech Techno Limited</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-center">
                      <span className="w-2 h-2   mr-3"></span>
                      33-35 Chatham Rd South, 2nd floor flat F, Union Mansion 

                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2  mr-3"></span>
                      Tsim Sha Tsui Kowloon, Hong Kong
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6 animate-fade-in-up stagger-1">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold" style={{color: '#007acc'}}>Phone</h4>
                        <p className="text-muted-foreground">+852-6201-0004</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold" style={{color: '#007acc'}}>Email</h4>
                        <p className="text-muted-foreground">hitechtechnoltd@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-white">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4" style={{ color: '#007acc' }}>
        Global Presence
      </h2>
      <p className="text-lg text-muted-foreground">
        Regions We Deal In
      </p>
    </div>

    <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-center animate-fade-in-up">
      {['North America', 'Middle East', 'Asia', 'Europe'].map((region) => (
        <div
          key={region}
          className="bg-secondary/20 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-primary">{region}</h3>
        </div>
      ))}
    </div>

    <div className="text-center mt-10">
      <p className="text-lg text-muted-foreground">
        Clients from over <strong>15+ countries</strong> served
      </p>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#007acc'}}>Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Ready to discuss your hardware requirements? Contact us today
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="animate-fade-in-up hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2" style={{color: '#007acc'}}>
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="transition-all duration-300 focus:scale-105"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2" style={{color: '#007acc'}}>
                        Company Name *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="transition-all duration-300 focus:scale-105"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{color: '#007acc'}}>
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="transition-all duration-300 focus:scale-105"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2" style={{color: '#007acc'}}>
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="min-h-[120px] transition-all duration-300 focus:scale-105"
                      placeholder="Tell us about your hardware requirements..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
  <div className="container mx-auto text-center space-y-4">
    <p className="text-sm">© 2025 Hitech Techno Limited. All rights reserved.</p>

    <div className="flex justify-center items-center flex-wrap gap-6 text-primary-foreground/90 text-sm">
      <a 
        href="mailto:hitechtechnoltd@gmail.com" 
        className="flex items-center gap-2 hover:underline"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Mail className="w-4 h-4" />
        hitechtechnoltd@gmail.com
      </a>

      <a 
        href="tel:+85262010004" 
        className="flex items-center gap-2 hover:underline"
      >
        <Phone className="w-4 h-4" />
        +852-6201-0004
      </a>

      <a 
        href="https://wa.me/85262010004" 
        className="flex items-center gap-2 hover:underline"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Send className="w-4 h-4" />
        WhatsApp
      </a>
    </div>

    <div className="text-sm text-primary-foreground/80 flex flex-col items-center gap-1">
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        <span></span>
      </div>
      <p>33–35 Chatham Rd South,2nd Floor</p>
      <p>Flat F, Union Mansion</p>
      <p>Tsim Sha Tsui, Kowloon, Hong Kong</p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Index;
