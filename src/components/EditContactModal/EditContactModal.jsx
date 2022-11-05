import { ContactEditorForm } from 'components/ContactEditorForm/ContactEditorForm';
import { Overlay, Modal, Button } from './EditContactModal.styled';
import { LoaderSpiner } from 'components/Loader/Loader';
import { notify } from 'components/Notify/notify';
import { ToastContainer, Flip } from 'react-toastify';
import {
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from 'redux/contactSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from 'redux/modalSlice';
import { createPortal } from 'react-dom';
export const EditContactModal = () => {
  const modal = useSelector(state => state.modal);
  const dispatch = useDispatch();
  const { data: contact, isLoading } = useGetContactByIdQuery(modal.id);
  const [updateMaterial] = useUpdateContactMutation();
  const closeModal = () => dispatch(toggle(null));

  const handleUpdateMaterial = async fields => {
    try {
      await updateMaterial({ id: modal.id, ...fields });
      notify('editContact');
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  const modalRoot = document.querySelector('#modal-root');
  return createPortal(
    <Overlay>
      <Modal>
        {isLoading && <LoaderSpiner />}

        <Button type="button" onClick={closeModal}>
          x
        </Button>
        {contact && (
          <ContactEditorForm
            initialValues={{ name: contact.name, number: contact.number }}
            btnText="Saving"
            onSubmit={handleUpdateMaterial}
          />
        )}
        <ToastContainer
          transition={Flip}
          theme="dark"
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
      </Modal>
    </Overlay>,
    modalRoot
  );
};

// import { useNavigate, useParams } from 'react-router-dom';
// import { ContactEditorForm } from 'components/ContactEditorForm/ContactEditorForm';
// import { Overlay, Modal, Button } from './EditContactModal.styled';
// import {
//   useGetContactByIdQuery,
//   useUpdateContactMutation,
// } from 'redux/contactSlice';

// export const EditContactModal = () => {
//   const { contactId } = useParams();
//   const { data: contact } = useGetContactByIdQuery(contactId);
//   const [updateMaterial] = useUpdateContactMutation();
//   const navigate = useNavigate();
//   const closeModal = () => navigate('/');

//   const handleUpdateMaterial = async fields => {
//     try {
//       await updateMaterial({ id: contactId, ...fields });
//       closeModal();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Overlay>
//       <Modal>
//         <Button type="button" onClick={closeModal}>
//           x
//         </Button>
//         {contact && (
//           <ContactEditorForm
//             initialValues={{ name: contact.name, number: contact.number }}
//             btnText="Saving"
//             onSubmit={handleUpdateMaterial}
//           />
//         )}
//       </Modal>
//     </Overlay>
//   );
// };
