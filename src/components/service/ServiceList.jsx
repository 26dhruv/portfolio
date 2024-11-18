import ServiceCard from './ServiceCard';
import backtesticon from '/Users/dhruvthakkar/Desktop/Devlopment/techify_internship/portfolio/src/assets/backtest.png'
import datascience from '/Users/dhruvthakkar/Desktop/Devlopment/techify_internship/portfolio/src/assets/datascience.jpeg'
import rjs from '/Users/dhruvthakkar/Desktop/Devlopment/techify_internship/portfolio/src/assets/React-JS-Development.jpeg'
const services = [
  {
    title: "Backtesting of Algorithms",
    description: "We offer comprehensive backtesting services to validate your trading algorithms.",
    icon: backtesticon // Replace with actual icon or image
  },
  {
    title: "Data Science Solutions",
    description: "We provide data-driven insights and predictive models for business growth.",
    icon: datascience // Replace with actual icon or image
  },
  {
    title: "Web Development in React.js",
    description: "We specialize in building dynamic and responsive web applications using React.js.",
    icon: rjs // Replace with actual icon or image
  }
];

const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard 
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
};

export default ServiceList;