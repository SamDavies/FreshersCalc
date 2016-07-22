/// action types

export const INCREASE_NIGHT_COUNT = 'INCREASE_NIGHT_COUNT';
export const DECREASE_NIGHT_COUNT = 'DECREASE_NIGHT_COUNT';

/// action creators

export function increaseNightCount(dayId) {
    return {
        type: INCREASE_NIGHT_COUNT,
        dayId: dayId
    }
}

export function decreaseNightCount(dayId) {
    return {
        type: DECREASE_NIGHT_COUNT,
        dayId: dayId
    }
}


