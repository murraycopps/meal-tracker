type Day = {
    date: string;
    distance: number;
    intensity: number;
    feel: number;

    notes: string;
    meals: Meal[];
}

type Meal = {
    name: string;
    calories: number;
    notes: string;
}

export type { Day, Meal };