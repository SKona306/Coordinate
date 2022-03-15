let itineraryItemsDatabase = [{label: 'Hertz Rental Car', details: 'We are renting a white nissan altima, the reservation is under James. The rental will be $27 a day', day: '2022-05-22', time: '01:30'}];
let toDoDatabase = [{label: 'Hawaii Safe Travels', details: 'go to hawaii safe travels form to fill out application', date: '2022-05-22'}];

let friendsDatabase = [{name: "James", id:"012351"}, {name: "Roger", id: "487945"}]

const addItemsToItinerary = (itineraryArray) => {
  itineraryArray.forEach(element => {
    itineraryItemsDatabase.push(element)
  });
}

const addTodoItems = (todoItemsArray) => {
  todoItemsArray.forEach(element => {
    toDoDatabase.push(element)
  });
}

export { itineraryItemsDatabase, toDoDatabase, friendsDatabase, addItemsToItinerary, addTodoItems}