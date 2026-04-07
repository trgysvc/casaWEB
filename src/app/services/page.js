import styles from './page.module.css';
import Image from 'next/image';
import { 
  Building2, 
  Home as HomeIcon, 
  Ruler, 
  HardHat, 
  Hammer, 
  Settings, 
  TreePine, 
  Sun 
} from "lucide-react";

export const metadata = {
  title: "Services | CASA YAPI",
};

export default function Services() {
  const services = [
    {
      title: "Commercial",
      icon: <Building2 size={32} strokeWidth={1.5} />,
      description: "Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details."
    },
    {
      title: "Residential",
      icon: <HomeIcon size={32} strokeWidth={1.5} />,
      description: "Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details."
    },
    {
      title: "Pre-Construction",
      icon: <Ruler size={32} strokeWidth={1.5} />,
      description: "Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details."
    },
    {
      title: "Site Management",
      icon: <HardHat size={32} strokeWidth={1.5} />,
      description: "Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details."
    },
    {
      title: "Special Projects",
      icon: <Hammer size={32} strokeWidth={1.5} />,
      description: "Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details."
    },
    {
      title: "Civil Engineering",
      icon: <Settings size={32} strokeWidth={1.5} />,
      description: "Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details."
    },
    {
      title: "Landscape Construction",
      icon: <TreePine size={32} strokeWidth={1.5} />,
      description: "Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details."
    },
    {
      title: "Sustainable and Ecologic",
      icon: <Sun size={32} strokeWidth={1.5} />,
      description: "Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details."
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
