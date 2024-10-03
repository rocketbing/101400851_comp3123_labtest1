const resolvedPromise = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let sucess = {'message': 'delayed success!'};
            console.log(sucess);
        },500)
    })
}
resolvedPromise()
    .then((item) => console.log(item));


const rejectedPromise = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let error = {'error':'delayed exception!'};
            console.log(error);
        },500)
    })
}
rejectedPromise()
    .then((item) => console.log(item));