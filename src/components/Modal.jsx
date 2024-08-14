import PropTypes from 'prop-types';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full p-4 h-60" >
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-600 hover:[#4BAF47] text-xl">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
  };

export default Modal;
