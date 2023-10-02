
import {toast} from "react-toastify";
import {removeCustomer} from "../../services/CustomerService";

export function ModalDelete(props){
    // eslint-disable-next-line react/prop-types
    const {show, handleClose, selectCustomer} = props;
    const handleDelete = async (selectedBook) => {
        // eslint-disable-next-line react/prop-types
        const res = await removeCustomer(selectedBook.id)
        if (res.status === 200) {
            toast("Delete Okay")
            window.location.reload(true)
        } else {
            toast.error("Delete Fail")
        }
    }
    return (
        <>
            {show && (
                <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title">Confirm Deletion</h6>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                        onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                <p>Do you want to delete <b>{selectCustomer.fullName}</b></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                        onClick={handleClose}>Close
                                </button>
                                <button type="button" className="btn btn-primary"
                                        onClick={() => handleDelete(selectCustomer)}>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}