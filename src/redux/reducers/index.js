const initialState = {
   //IL NOSTRO STATO INIZIALE
   city: { name: "", lat: 0, lon: 0 }
}

const mainReducer = (state = initialState, action) => {


   //eseguo qualcosa per ogni azione.tipo del reducer interpellato

   switch (action.type) {
      case "CHANGE_CITY":
         return state.city = { name: action.payload.city, lat: action.payload.lat, lon: action.payload.lon }
      default:
         return state;
   }

}

export default mainReducer