let itineraryItemsDatabase = [{label: 'Hertz Rental Car', details: 'We are renting a white nissan altima, the reservation is under James. The rental will be $27 a day', day: '2022-05-22', time: '01:30'}];

let toDoDatabase = [];

let friendsDatabase = [{name: "James", id:"012351"}, {name: "roger", id: "487945"}]

const addItemsToItinerary = (itineraryArray) => {
  itineraryItemsDatabase.push(itineraryArray[0])

}

export { itineraryItemsDatabase, toDoDatabase, friendsDatabase, addItemsToItinerary}