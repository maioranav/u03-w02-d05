const initialState = {
   //IL NOSTRO STATO INIZIALE
   favs: [],
   city: { name: "", lat: 0, lon: 0 }
}

const mainReducer = (state = initialState, action) => {


   //eseguo qualcosa per ogni azione.tipo del reducer interpellato

   switch (action.type) {
      case "CHANGE_CITY":
         return state = { ...state, city: { name: action.payload.name, lat: action.payload.lat, lon: action.payload.lon } }
      case "ADD_CITY":
         return state = { ...state, favs: [...state.favs, action.payload.name] }
      default:
         return state;
   }

}

export default mainReducer