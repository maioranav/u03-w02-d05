const initialState = {
   //IL NOSTRO STATO INIZIALE
   favs: [],
   city: { name: "Milazzo", lat: 0, lon: 0 },
   current: {}
}

const mainReducer = (state = initialState, action) => {


   //eseguo qualcosa per ogni azione.tipo del reducer interpellato

   switch (action.type) {
      case "CHANGE_CITY":
         return state = { ...state, city: { name: action.payload.name, lat: action.payload.lat, lon: action.payload.lon } }
      case "ADD_CITY":
         return state = { ...state, favs: [...state.favs, action.payload.name] }
      case "SAVE_CURRENT":
         return state = { ...state, current: action.payload }
      default:
         return state;
   }

}

export default mainReducer