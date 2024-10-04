/**
 * @copyright 2024 Shubham-Mi
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

/**
 * Primary button
 */
const ButtonPrimary = ({ href, target = "_self", label, icon, classNames }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-primary ${classNames}`}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden={true}>
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classNames}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden={true}>
            {icon}
          </span>
        )}
      </button>
    );
  }
};

ButtonPrimary.prototype = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classNames: PropTypes.string,
};

export { ButtonPrimary };
