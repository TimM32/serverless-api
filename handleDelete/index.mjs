import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
});

const personModel = dynamoose.model('people', schema);

export const handler = async (event) => {
  let id = event.pathParameters.id;

  const response = { statusCode: null, body: null };

  try {
    await personModel.delete(id);
    response.body = `${id} deleted!`;
    response.statusCode = 300;
  } catch (error) {
    response.body = JSON.stringify(error.message);
    response.statusCode = 400;
  }




  return response;
};