import { UPDATE_FILTER } from './filter-actions.js';


export const VisibilityFilter = { 
  SHOW_ANALYSEREN : 'analyseren',
  SHOW_ADVIESEREN : 'adviseren',
  SHOW_ONTWERPEN : 'ontwerpen',
  SHOW_REALISEREN : 'realiseren',
  SHOW_MANAGE : 'manage',
  SHOW_ALL : 'all'
};


  
  const INITIAL_STATE = {
    // categorien moeten hier te vinden zijn
    categorieen: [],
    filter: VisibilityFilter.SHOW_ALL
  };
  
  export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  

  const getFilterSelector = state => state.filter;



// TODO: hier moet je de opgehaalde categorieen filtreren op basis van de huidige state


// export const getVisibleTodosSelector = createSelector(
//   getTodosSelector, getFilterSelector, 
//   (todos, filter) => { 
//     switch (filter) {
//       case VisibilityFilters.SHOW_COMPLETED:
//         return analyseren;
//       case VisibilityFilters.SHOW_ACTIVE:
//         return todos.filter(todo => !todo.complete);
//       default:
//         return todos;
        
//     }
//   }
// );
