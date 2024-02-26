import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './Services.css'; // Import your CSS file

const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      icon: <FontAwesomeIcon icon={faCode}  style={{ fontSize: '2rem' }}/>,
      description: 'I create responsive websites and web apps with React, and Tailwind CSS for fast and accessible user experiences.',
    },
    {
      title: 'Backend Development',
      icon: <FontAwesomeIcon icon={faCode}  style={{ fontSize: '2rem' }}/>,
      description: 'I build scalable backend systems with Node.js, Express, and MongoDB to ensure robust and maintainable application.',
    },
    {
      title: 'App development',
      icon: <FontAwesomeIcon icon={faCode}  style={{ fontSize: '2rem' }} />,
      description: 'I build cross-platform mobile applications using React Native and Expo, ensuring a consistent user experience across different devices.',
    },
  ];

  
  return (
    <div className="services-container">
      <h2 className="services-title">Services</h2>
      <span className="section__subtitle" style={{fontSize:'18px'}}>What i offer</span>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <div className="service-details">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default Services;
