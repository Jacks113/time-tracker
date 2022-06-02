export function getData(setData){
    const data = fetch("../data.json").then(response => response.json()).then(data =>{ setData(data)});
    return;
}

