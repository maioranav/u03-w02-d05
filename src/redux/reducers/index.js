const initialState = {
   //IL NOSTRO STATO INIZIALE
   favs: [],
   city: { name: "Milazzo", lat: 0, lon: 0 },
   current: {},
   hourly: [],
   daily: [],
   isLoading: false
}

const mainReducer = (state = initialState, action) => {


   //eseguo qualcosa per ogni azione.tipo del reducer interpellato

   switch (action.type) {
      case "CHANGE_LOC":
         return state = { ...state, city: { name: action.payload.name, lat: action.payload.lat, lon: action.payload.lon } }
      case "CHANGE_CITY":
         return state = { ...state, city: { ...state.city, name: action.payload.name } }
      case "ADD_CITY":
         return state = { ...state, favs: [...state.favs, action.payload.name] }
      case "SAVE_CURRENT":
         return state = { ...state, current: action.payload }
      case "SAVE_3HFORE":
         return state = { ...state, hourly: action.payload }
      case "SAVE_DAILY":
         return state = { ...state, daily: action.payload }
      case "LOADTOGGLE":
         return state = { ...state, isLoading: action.payload }
      default:
         return state;
   }

}

export default mainReducer