export const initialState = {
  pendings: [],
}

export const getIsLoading = (state, type, property, value) => (
  property ?
    state.loading.pendings.find(p => p.type === type && p[property] === value) !== undefined :
    state.loading.pendings.find(p => p.type === type) !== undefined
)
