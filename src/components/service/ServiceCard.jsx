const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 text-center shadow-lg">
      <img src={icon} alt={`${title} icon`} className="w-12 h-12 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;