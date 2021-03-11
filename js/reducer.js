const init = {
    todos: [
        {
            title: "Learn Js",
            completed: false,
        },
        {
            title: "Learn Ruby on Rails",
            completed: true,
        },
        {
            title: "Learn NodeJs",
            completed: false,
        }
    ]
};

export default function reducer(state = init, action, args) {
    switch (action) {
        // case "ADD":
        //     const [newCar] = args;
        //     return {
        //         ...state,
        //         cars: [...state.cars, newCar],
        //     };
        default:
            return state;
    }
}
