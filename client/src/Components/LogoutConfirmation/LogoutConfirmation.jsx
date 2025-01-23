import PropTypes from "prop-types";

const LogoutConfirmation = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal homepage-navbar-modal-logout">
      <div className="modal-dialog">
        <div className="modal-content homepage-navbar-modal-content">
          <div className="modal-header homepage-modal-logout-header">
            <h5 className="modal-title">Are you sure you want to Logout?</h5>
          </div>
          <div className="modal-footer homepage-modal-logout-footer">
            <button className="btn btn-danger w-25" onClick={onConfirm}>
              Yes
            </button>
            <button className="btn btn-secondary w-25" onClick={onCancel}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
LogoutConfirmation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default LogoutConfirmation;
