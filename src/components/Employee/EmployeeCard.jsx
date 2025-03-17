import PropTypes from "prop-types";

const EmployeeCard = ({ company, role, duration, description, logo, link }) => {
  return (
    <div className="flex flex-col gap-2 item-center xs:flex-row sm:gap-4 md:items-start rounded-lg group">
      {/* Company Logo */}
      <img src={logo} alt={company} className="w-16 h-16 rounded-full md:rounded-md object-cover" />

      <div className="text-gray-300">
        <h2 className="text-white font-bold text-[12px] md:text-sm">
          {company} • <span className="text-[10px] font-normal">{duration}</span>
        </h2>
        <p className="italic font-semibold text-[10px] md:text-[12px] mb-2 font-semibold">{role}</p>
        <p className="text-[10px] md:text-[12px] text-[#C2C2C2]">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm font-medium hover:text-blue-500 flex items-center gap-1"
          >
            View App<span>🔗</span>
          </a>
        )}
      </div>
    </div>
  );
};

// ✅ Add PropTypes validation
EmployeeCard.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  link: PropTypes.string, // Not required since it's optional
};

export default EmployeeCard;
