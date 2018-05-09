export const initialState = {
  pendings: [],
}

export const getIsLoading = (state, type) =>
  state.loading.pendings.find(p => p === type) !== undefined
