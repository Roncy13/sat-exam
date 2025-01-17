import { inBody } from '@utilities/constants';
import { Schema }  from 'express-validator';

/**
 * Change the [sampleFieldName] to the property you are using.
 * Change the Field Name to the name of the property you are using.
 * In Body just tells that the schema be used in the Body section of the request.
 */

export const QuestionCreateSchema: Schema = {
  question: {
    ...inBody,
    optional: false,
  },
  multipleChoice: {
    ...inBody,
    optional: false,
    isArray: {
      options: {
        min: 4,
        max: 4,
      }
    }
  },
  'multipleChoice.*': {
    isString: true,
  },
  explanation: {
    ...inBody,
    optional: true,
    isString: true,
  },
  imageUrl: {
    ...inBody,
    optional: true,
    isURL: true,
  },
  answer: {
    ...inBody,
    optional: false,
  },
  steps: {
    isArray: true,
    optional: true,
  },
  'steps.*.title': {
    ...inBody,
    isString: true,
    optional: false,
  },
  'steps.*.result': {
    ...inBody,
    isString: true,
    optional: false,
  },
  'steps.*.imageUrl': {
    ...inBody,
    isString: true,
    optional: true,
  },
};

export const QuestionUpdateSchema: Schema = {
  question: {
    ...inBody,
    optional: true,
  },
  multipleChoice: {
    ...inBody,
    optional: true,
    isArray: {
      options: {
        min: 4,
        max: 4,
      }
    }
  },
  explanation: {
    ...inBody,
    optional: true,
    isString: true,
  },
  imageUrl: {
    ...inBody,
    optional: true,
    isURL: true,
  },
  answer: {
    ...inBody,
    optional: true,
  },
  steps: {
    isArray: true,
    optional: true,
  },
  'steps.*.title': {
    ...inBody,
    isString: true,
    optional: false,
  },
  'steps.*.result': {
    ...inBody,
    isString: true,
    optional: false,
  },
  'steps.*.imageUrl': {
    ...inBody,
    isString: true,
    optional: true,
  },
};