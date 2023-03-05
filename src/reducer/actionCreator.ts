interface ActionType<T> {
    type: string;
    payload?: T;
}

export function createAction<T>(type: string, payload?: T): ActionType<T> {
    return {
        type,
        payload,
    }
}