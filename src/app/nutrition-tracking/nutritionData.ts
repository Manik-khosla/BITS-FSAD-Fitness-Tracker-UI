export class NutritionData {

    public name!: String
    public calories!: String
    public protein!: String
    public carbs!: String
    public fat!: String
    public description!: String
    public img!: String
    
    static Items = [
        {
            "name":"Banana",
            "calories":"110",
            "protein":"1 gram",
            "carbs":"28 grams",
            "fat":"1.1 grams",
            "description":"Bananas are mainly composed of carbs. Unripe bananas may contain decent amounts of resistant starch, which functions like fiber, aiding your gut and promoting healthy blood sugar levels.",
            "img":"../assets/Nutrition/Banana.jpeg"
        },
        {
            "name":"Soybean",
            "calories":"172",
            "protein":"18.2 grams",
            "carbs":"8.4 grams",
            "fat":"9 grams",
            "description":"Soybeans are a very rich source of plant-based protein and fat. What’s more, their high fiber content is good for your gut health",
            "img":"../assets/Nutrition/Soybean.jpeg"
        },
        {
            "name":"Egg",
            "calories":"77",
            "protein":"6.3 grams",
            "carbs":"0.6 grams",
            "fat":"5.3 grams",
            "description":"Hard-boiled eggs are low in calories and rich in many important vitamins, minerals and nutrients. While the yolk provides nutrients, fat and protein, the white is almost exclusively protein.",
            "img":"../assets/Nutrition/Egg.jpeg"
        },
        {
            "name":"Almonds",
            "calories":"164",
            "protein":"6 grams",
            "carbs":"6.1 grams",
            "fat":"14.2 grams",
            "description":"Almonds are very popular tree nuts. They are high in healthy monounsaturated fats, fiber, protein, and various important nutrients.",
            "img":"../assets/Nutrition/Almonds.jpeg"
        },
        {
            "name":"Chicken-Breast",
            "calories":"128",
            "protein":"26 grams",
            "carbs":"0 grams",
            "fat":"2.7 grams",
            "description":"Chicken is a popular option for lean protein, as it packs a considerable amount into a single serving without much fat.",
            "img":"../assets/Nutrition/Chicken.jpeg"
        }
    ]
}