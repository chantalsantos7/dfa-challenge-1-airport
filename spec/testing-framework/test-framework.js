export const assertEquals = (actualValue, expectedValue) => {
    if (actualValue !== expectedValue) throw new Error(`expected ${expectedValue}, but got ${actualValue}`);
    return true;
}

export const assertBooleanTrue = (actualValue) => actualValue === true; //assert that the value is actually the boolean value of true

export const assertBooleanFalse = actualValue => actualValue === false; //assert that the value is actually the boolean value of false

// export const assertTrue = actualValue => actualValue == true; //assert that the 

export const it = (str, testFunc) => {
    try {
        testFunc();
        console.log("\x1b[32m%s\x1b[0m", `\t${str}`);
    }
    catch (err)
    {
        console.log("\x1b[31m%s\x1b[0m", `\t${str}`);
        console.error(err.message);
        console.log(err.stack);
    }
}

