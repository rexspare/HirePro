const services = {};

const handleCart = (state = services, action) => {
    const service = action.payload;

    switch (action.type) {
        case "ADDSERVICE":
            return service

            break;

        case "DELSERVICE":

            return {}

            break;

        case "RESET":
            return {}

            break;

        default:
            return state;
            break;
    }

}

export default handleCart;