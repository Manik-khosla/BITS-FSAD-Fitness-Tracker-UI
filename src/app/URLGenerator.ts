export class URLGenerator {

static BaseURL = "http://localhost:3000/"
static NutritionServiceBaseURL = "http://localhost:3809/"

// login
static LoginURL = URLGenerator.BaseURL + "api/v1/sessions/sign_in"
static GetUserDetailsURL = URLGenerator.BaseURL + "api/v1/sessions/"

// signup
static SignupURL = URLGenerator.BaseURL + "api/v1/sessions/sign_up"

//Logout
static LogoutURL=URLGenerator.BaseURL + "api/v1/sessions/sign_out"

// nutrition Add
static CreateNutritionData = this.NutritionServiceBaseURL + "api/v1/mynutrition/create-nutritiondata"

// nutrition Get
static GetNutritionData = this.NutritionServiceBaseURL + "api/v1/mynutrition/getNutritionData/"


}