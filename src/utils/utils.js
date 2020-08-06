exports.createObj=(el)=>{
    let start = el.start_time.split(" ");
    start=start.filter(el=>{
        return el!=="";
    });

    let end = el.end_time.split(" ");
    const obj={
        month:start[0],
        date:start[1],
        year:start[2],
        start_time:start[3],
        end_time:end[3]
    }
    return obj;
}

