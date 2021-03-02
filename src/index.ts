import Ajv from 'ajv';
const ajv = new Ajv();

function validate<T>(schema: Record<string, unknown>, data: T): T {
  const isValid = ajv.validate(schema, data);

  if (!isValid) {
    const errorMessages = ajv.errorsText();
    throw new Error(`\nValidation Error:\n${errorMessages}`);
  }

  return data;
}

export { validate };
