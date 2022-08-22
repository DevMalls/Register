import { adminEmail} from '../../store/constants';
let password = "";

const isEmpty = value => value.trim() === '';
const checkPassword = value => value.length !== 8;
const validEmail = value =>!value.includes('@');
const checkConfirmPassword = value => password !== value;
export const getLocalStorage = itemName => JSON.parse(localStorage.getItem(itemName));
export const setLocalStorageItem = (itemName, data) => localStorage.setItem(itemName, JSON.stringify(data));
export const hasNoError = (formData) => ((Object.values(formData)).every((value)=> value.error === false ));

const existEmail = (email) => {
    const existingData = getLocalStorage("existingData");
    let checkEmail;
    if(email === adminEmail){
        checkEmail = true;
    }
    else if(existingData !== null){
        checkEmail = existingData.some((value) =>value.email === email)
    }
    else if(existingData === null){
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
    const getSingleItem =  existingData.filter((data) => data.id === id );
    return getSingleItem;        
}

/*  ------ Start: Update status value in local storage data ------ */
export const updateLocalStorageItem = (id,key,value) => {
    let existingData = getLocalStorage("existingData");
        existingData = existingData.map((data) => {
            if(data.id === id){
                return {
                    ...data,
                    [key]: value,
                }
            }
        return data;
        })
    setLocalStorageItem("existingData",existingData);
}
/*  ------ End: Update status value in local storage data ------ */

export const nameChangeHandler = (value) => {
    return {
        value : value,
        error: isEmpty(value)
    };
}

export const dateChangeHandler = (value) => {   
    return {
        value : value,
        error: checkBeforeDate(value)
    };
}

export const genderChangeHandler = (value) => {   
    return {
        value : value,
        error: isEmpty(value)
    }
}

export const emailChangeHandler = (value) => {
    return {
        value : value,
        error: existEmail(value)
    };
}

export const userEmailChangeHandler = (value) => {
    return {
        value : value,
        error: validEmail(value)
    };
}

export const passwordChangeHandler = (value) => {     
    password = value;  
    return {
        value : value,
        error: checkPassword(value)
    };
}

export const confirmPasswordChangeHandler = (value) => {   
    return {
        value : value,
        error: checkConfirmPassword(value)
    };
}


