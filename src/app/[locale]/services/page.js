import styles from './page.module.css';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { 
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
  title: "Services | CASA YAPI GROUP",
};

export default async function Services() {
  const t = await getTranslations('Services');

  const services = [
    {
      id: "INDUSTRIAL FACILITY PROJECTS",
      icon: <Factory size={32} strokeWidth={1.5} />
    },
    {
      id: "RESIDENTIAL PROJECTS",
      icon: <HomeIcon size={32} strokeWidth={1.5} />
    },
    {
      id: "CONSTRUCTION CONTRACTING SERVICES",
      icon: <HardHat size={32} strokeWidth={1.5} />
    },
    {
      id: "LAND VALUATION SERVICES",
      icon: <Map size={32} strokeWidth={1.5} />
    },
    {
      id: "LANDSCAPE CONSTRUCTION",
      icon: <TreePine size={32} strokeWidth={1.5} />
    },
    {
      id: "SUSTAINABLE AND ECOLOGIC",
      icon: <Leaf size={32} strokeWidth={1.5} />
    },
    {
      id: "PROPERTY & COMPLEX MANAGEMENT",
      icon: <ClipboardList size={32} strokeWidth={1.5} />
    },
    {
      id: "ENGINEERING SERVICES",
      icon: <Settings2 size={32} strokeWidth={1.5} />
    }
  ];

  return (
    <div className={styles.page}>
      <section className={styles.headerSection}>
        <div className="container">
          <span className={styles.sectionLabel}>{t('label')}</span>
          <h1 className={styles.title}>{t('title')}</h1>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {/* Services Columns */}
          <div className={styles.textColumns}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceItem}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <div className={styles.serviceContent}>
                  <h2>{t(`${service.id}.title`)}</h2>
                  <p>{t(`${service.id}.desc`)}</p>
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
