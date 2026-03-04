import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import './SuccessModal.css'
const SuccessModal = ({ isOpen, onCancel }) => {
    if (!isOpen) return null;

    return (

        < div className="modal" >
            <div className="modal-content">
                <FaEnvelopeCircleCheck />
                <h3>Thank you for your application.</h3>
                <p>
                    We sent you a mail confirmation of the successful registration.
                    Please check your email soon.
                </p>
                <button onClick={onCancel}>Ok, Excellent!</button>
            </div>
        </div >
    );
};

export default SuccessModal;