export class URLGenerator {

static BaseURL = "http://localhost:3000/"

// login
static LoginURL = URLGenerator.BaseURL + "api/v1/sessions/sign_in"
static GetUserDetailsURL = URLGenerator.BaseURL + "api/v1/sessions/"

// signup
static SignupURL = URLGenerator.BaseURL + "api/v1/sessions/sign_up"

//Logout
static LogoutURL=URLGenerator.BaseURL + "api/v1/sessions/sign_out"
}