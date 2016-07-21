/// action types

export const SET_BUDGET = 'SET_BUDGET';

/// action creators

export function setBudget(budget) {
    return {
        type: SET_BUDGET,
        budget: budget
    }
}

