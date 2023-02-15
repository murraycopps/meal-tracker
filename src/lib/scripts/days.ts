import type { Day } from "./types";

// create a list of days
const days: Day[] = [
    {
        date: "2023-01-01",
        distance: 10,
        intensity: 4,
        feel: 8,
        notes: "First day of the year!",
        meals: [
            {
                name: "Breakfast",
                calories: 500,
                notes: "Eggs and toast"
            },
            {
                name: "Lunch",
                calories: 700,
                notes: "Sandwich"
            },
            {
                name: "Dinner",
                calories: 900,
                notes: "Steak and potatoes"
            }
        ]
    },
    {
        date: "2023-01-02",
        distance: 5,
        intensity: 9,
        feel: 6,
        notes: "Track Workout",
        meals: [
            {
                name: "Breakfast",
                calories: 500,
                notes: "Oatmeal"
            },
            {
                name: "Lunch",
                calories: 700,
                notes: "Burrito"
            },
            {
                name: "Dinner",
                calories: 900,
                notes: "Chicken and rice"
            }
        ]
    },
    {
        date: "2023-01-03",
        distance: 15,
        intensity: 6,
        feel: 7,
        notes: "Long run",
        meals: [
            {
                name: "Breakfast",
                calories: 500,
                notes: "Cereal"
            },
            {
                name: "Lunch",
                calories: 700,
                notes: "Salad"
            },
            {
                name: "Dinner",
                calories: 900,
                notes: "Pasta"
            }
        ]
    }

];

export default days;