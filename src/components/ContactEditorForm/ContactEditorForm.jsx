import { Formik } from 'formik';

import {
  ContactsForm,
  ListForContactsForm,
  ItemsForContactsForm,
  InputForContactsForm,
  LabelForContactsForm,
  ButtonForContactsForm,
} from './ContactEditorForm.styled';

export const ContactEditorForm = ({
  initialValues = { name: '', number: '' },
  onSubmit,
  btnText,
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
              {btnText}
            </ButtonForContactsForm>
          </ContactsForm>
        )}
      </Formik>
    </>
  );
};
