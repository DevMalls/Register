import { adminEmail } from '../store/constants';
let password = "";
let confirmPassword = "";

const isEmpty = value => value.trim() === '';
const checkPassword = value => value.length !== 8 || value === confirmPassword ;
const validEmail = value => !value.includes('@');
export const checkConfirmPassword = (password, confirmPassword) => password !== confirmPassword;
export const setSessionStorage = (itemName, data) => sessionStorage.setItem(itemName,data);
export const getSessionStorage = (itemName) => sessionStorage.getItem(itemName);
export const removeSessionStorage = (itemName) => sessionStorage.removeItem(itemName);
export const getLocalStorage = itemName => JSON.parse(localStorage.getItem(itemName));
export const setLocalStorageItem = (itemName, data) => localStorage.setItem(itemName, JSON.stringify(data));
export const hasNoError = (formData) => ((Object.values(formData)).every((value) => value.error === false));
export const isEmptyObject = object => (Object.keys(object).length === 0);

const existEmail = (email) => {
    const existingData = getLocalStorage("existingData");
    let checkEmail;
    if (email === adminEmail) {
        checkEmail = true;
    }
    else if (existingData !== null) {
        checkEmail = existingData.some((value) => value.email === email)
    }
    else if (existingData === null) {
        checkEmail = false;
    }
    return checkEmail;
}

const checkBeforeDate = (value) => {
    const inputDate = new Date(value);
    const currentDate = new Date();
    return inputDate >= currentDate;
};

export const getLocalStorageSingleItem = (itemName, id) => {
    const existingData = getLocalStorage(itemName);
    let getSingleItem = existingData.filter((data) => data.id === id);
    getSingleItem = { ...getSingleItem[0], password: window.atob(getSingleItem[0].password), confirmPassword: window.atob(getSingleItem[0].password) };
    return getSingleItem;
}

/*  ------ Start: Update single item data in local storage data ------ */
export const updateSingleItem = (id, entryData) => {
    let existingData = getLocalStorage("existingData");
    existingData = existingData.map((data) => {
        if (data.id === id) {
            return {
                ...entryData,
            }
        }
        return data;
    })
    setLocalStorageItem("existingData", existingData);
}
/*  ------ End: Update single item data in local storage data ------ */

/*  ------ Start: Update status value in local storage data ------ */
export const updateStatusLocalStorageItem = (id, key, value) => {
    let existingData = getLocalStorage("existingData");
    existingData = existingData.map((data) => {
        if (data.id === id) {
            return {
                ...data,
                [key]: value,
            }
        }
        return data;
    })
    setLocalStorageItem("existingData", existingData);
}
/*  ------ End: Update status value in local storage data ------ */

export const nameChangeHandler = (value) => {
    return {
        value: value,
        error: isEmpty(value)
    };
}

export const dateChangeHandler = (value) => {
    return {
        value: value,
        error: checkBeforeDate(value)
    };
}

export const genderChangeHandler = (value) => {
    return {
        value: value,
        error: isEmpty(value)
    }
}

export const emailChangeHandler = (value) => {
    return {
        value: value,
        error: existEmail(value)
    };
}

export const userEmailChangeHandler = (value) => {
    return {
        value: value,
        error: validEmail(value)
    };
}

export const passwordChangeHandler = (value) => {
    password = value;
    return {
        value: value,
        error: checkPassword(value)
    };
}

export const confirmPasswordChangeHandler = (value) => {
    confirmPassword = value;
    return {
        value: value,
        error: checkConfirmPassword(password,value)
    };
}


