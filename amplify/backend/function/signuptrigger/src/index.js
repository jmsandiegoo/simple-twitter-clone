/* Amplify Params - DO NOT EDIT
	API_SIMPLETWITTERCLONE_GRAPHQLAPIENDPOINTOUTPUT
	API_SIMPLETWITTERCLONE_GRAPHQLAPIIDOUTPUT
	API_SIMPLETWITTERCLONE_GRAPHQLAPIKEYOUTPUT
	AUTH_SIMPLETWITTERCLONED8CE95B6_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
