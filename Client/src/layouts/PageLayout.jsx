import PropTypes from "prop-types";

export default function PageLayout({ children, extra, ...props }) {
  return (
    <div className={`mt-5 py-5 px-3 ${extra}`} {...props}>
      {children}
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  extra: PropTypes.string,
  extra: PropTypes.object,
};