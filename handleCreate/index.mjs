import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
  'id': String,
  'name': String,
});

const personModel = dynamoose.model('people', schema);

export const handler = async (event) => {
  let parsedBody = JSON.parse(event.body);

  const response = { statusCode: null, body: null };

  try {
    let newPerson = await personModel.create(parsedBody);
    response.body = JSON.stringify(newPerson);
    response.statusCode = 300;
  } catch (error) {
    response.body = JSON.stringify(error.message);
    response.statusCode = 400;
  }


  return response;
};