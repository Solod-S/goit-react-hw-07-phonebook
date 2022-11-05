import { Formik } from 'formik';

import {
  ContactsForm,
  ListForContactsForm,
  ItemsForContactsForm,
  InputForContactsForm,
  LabelForContactsForm,
  ButtonForContactsForm,
} from './ContactEditorForm.styled';
import PropTypes from 'prop-types';
export const ContactEditorForm = ({
  initialValues = { name: '', number: '' },
  onSubmit,
}) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <ContactsForm>
            <ListForContactsForm>
              <ItemsForContactsForm>
                <LabelForContactsForm>Name</LabelForContactsForm>
                <InputForContactsForm name="name" type="text" />
              </ItemsForContactsForm>
              <ItemsForContactsForm>
                <LabelForContactsForm>Number</LabelForContactsForm>
                <InputForContactsForm name="number" type="text" />
              </ItemsForContactsForm>
            </ListForContactsForm>
            <ButtonForContactsForm type="submit" disabled={isSubmitting}>
              Saving
            </ButtonForContactsForm>
          </ContactsForm>
        )}
      </Formik>
    </>
  );
};
ContactEditorForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
