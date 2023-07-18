import * as yup from 'yup';

export const meetingValidationSchema = yup.object().shape({
  scheduled_time: yup.date().required(),
  organization_id: yup.string().nullable(),
});
