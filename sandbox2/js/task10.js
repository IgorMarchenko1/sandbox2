function NotificationException() {}

function ErrorException() {}

function primitiveMultiply(a, b) {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    } else if (rand > 0.85) {
        throw new ErrorException()
    } else {
        throw new NotificationException()
    }
}

function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch (ErrorException) {
        if (ErrorException instanceof NotificationException) {
            return reliableMultiply(a, b);
        } else {
            throw ErrorException;
        }
    }
}
console.log(reliableMultiply(8, 8))

////


function NotificationException() {}

function ErrorException() {}

function primitiveMultiply(a, b) {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    } else if (rand > 0.85) {
        throw new ErrorException()
    } else {
        throw new NotificationException()
    }
}

function reliableMultiply(a, b) {
    for (;;) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (e instanceof NotificationException) {
                console.log("ErrorException")
            } else throw e;
        }
    }
}
console.log(reliableMultiply(8, 8));