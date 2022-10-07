const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '507928871317-a5lde3t1thmc86h58l14iq9os5eumh00.apps.googleusercontent.com'

const client = new OAuth2Client(CLIENT_ID);


const validarGoogleIdToken = async (token)=> {

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [CLIENT_ID, "507928871317-q0qvt5lmgbi795alpa228bgbk167m5ur.apps.googleusercontent.com",],
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        console.log(payload);
        
    
        return {
            name: payload['name'],
            picture: payload['picture'],
            email:payload['email']
        };
    } catch (error) {
        console.log(error);
        return null;
    }
    
}


module.exports = {
    validarGoogleIdToken,
}