//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    return function wrapper(...args) {
        const hash = md5(args);
        let result = func(...args);

        let objectInCache = cache.find((item) => item.hash === hash);
        if(objectInCache) { 
            console.log("Из кэша: " + objectInCache.result)
            return "Из кэша: " + objectInCache.result;
        }

        cache.push({hash, result});
        if (cache.length > 5) {
            cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
}

// const addAndMultiply = (a, b, c) => (a + b) * c;
// const upgraded = cachingDecoratorNew(addAndMultiply);
// upgraded(1, 2, 3); // вычисляем: 9

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    return function wrapper(...args) {
        if(timeoutId) {  //Повторил код лекции 
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
        console.log(func(...args), delay)
        });
    wrapper.count = 0;
    wrapper.allCount = 0;
    }
}
