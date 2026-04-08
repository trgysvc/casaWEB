import styles from './page.module.css';
import Image from 'next/image';
import { 
  Building2, 
  Home as HomeIcon, 
  HardHat, 
  Map, 
  TreePine, 
  Leaf, 
  ClipboardList, 
  Settings2,
  Factory
} from "lucide-react";

export const metadata = {
  title: "Services | CASA YAPI",
};

export default function Services() {
  const services = [
    {
      title: "INDUSTRIAL FACILITY PROJECTS",
      icon: <Factory size={32} strokeWidth={1.5} />,
      description: "Specialized engineering and construction solutions for manufacturing plants, warehouses, and complex industrial complexes."
    },
    {
      title: "RESIDENTIAL PROJECTS",
      icon: <HomeIcon size={32} strokeWidth={1.5} />,
      description: "From luxury villa complexes to modern apartment buildings, we create high-quality living spaces tailored for comfort and durability."
    },
    {
      title: "CONSTRUCTION CONTRACTING SERVICES",
      icon: <HardHat size={32} strokeWidth={1.5} />,
      description: "Professional project management and execution services, delivering complex projects on time and within budget through expert craftsmanship."
    },
    {
      title: "LAND VALUATION SERVICES",
      icon: <Map size={32} strokeWidth={1.5} />,
      description: "Expert appraisal and feasibility studies to determine the highest and best use for land investments and urban development."
    },
    {
      title: "LANDSCAPE CONSTRUCTION",
      icon: <TreePine size={32} strokeWidth={1.5} />,
      description: "Transforming outdoor spaces with aesthetic and functional landscaping solutions, integrating natural beauty with architectural precision."
    },
    {
      title: "SUSTAINABLE AND ECOLOGIC",
      icon: <Leaf size={32} strokeWidth={1.5} />,
      description: "Environmentally conscious building practices and green technologies designed to minimize carbon footprint and maximize energy efficiency."
    },
    {
      title: "PROPERTY & COMPLEX MANAGEMENT",
      icon: <ClipboardList size={32} strokeWidth={1.5} />,
      description: "Professional administrative, technical, and social management services for residential complexes and commercial properties, ensuring premium living standards."
    },
    {
      title: "ENGINEERING SERVICES",
      icon: <Settings2 size={32} strokeWidth={1.5} />,
      description: "Advanced structural and civil engineering solutions providing technical excellence for the most challenging architectural visions."
    }
  ];

  return (
    <div className={styles.page}>
      <section className={styles.headerSection}>
        <div className="container">
          <span className={styles.sectionLabel}>OUR SERVICES</span>
          <h1 className={styles.title}>We Offer a Range of Services <br/> to Meet Your Needs</h1>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {/* Services Columns */}
          <div className={styles.textColumns}>
            {services.map((service, idx) => (
              <div key={service.title} className={styles.serviceItem}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <div className={styles.serviceContent}>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Vertical Image Column */}
          <div className={styles.verticalImageColumn}>
            <Image 
              src="/images/hero.png" 
              alt="Construction Site" 
              fill
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
