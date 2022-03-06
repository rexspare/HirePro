// FOR ADD ITEM CART
export const AddService = (service) => {
    return {
        type: "ADDSERVICE",
        payload: service
    }
}

// FOR DELETE ITEM CART
export const DelService = (service) => {
    return {
        type: "DELSERVICE",
        payload: service
    }
}

export const ResetService = () => {
    return {
        type: "RESET"
    }
}