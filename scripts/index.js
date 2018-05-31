document.addEventListener("DOMContentLoaded", (event)=>{
    let table_settings = document.getElementById("table_settings")
    let week_of = document.getElementById("schedule_week_of")

    //Set the day
    week_of.innerHTML += `<br> ${Time.prototype.getWeekOf().toLocaleDateString()}`

    //DYNAMICALLY ALTERING TABLE
    table_settings.addEventListener("change", (e) => {
        let time_obj = new Time
        let start_time = document.getElementById("start_time").value
        let end_time = document.getElementById("end_time").value
        let error_msg = document.getElementById("table_error")
        let table = document.querySelector(`body > div > div > main > div.table-responsive > table > tbody`)

        if (time_obj.differenceInMinutes(start_time, end_time) < 0) {
            // debugger;
            let table_settings = document.getElementById("table_settings")
            let error = document.createElement("div")
            error.setAttribute("id", "table_error")
            error.innerHTML =
                `<div id="table_error" class="alert alert-danger">
                <strong> ERROR </strong> Your start time must come before your end time.
                </div>`;
            table_settings.appendChild(error)
            table.innerHTML = ""
        } else {
            if (error_msg){
                error_msg.remove()
            }
            table.innerHTML = ""
            table.innerHTML += time_obj.customizeSchedule(start_time, end_time)
        }
    })

    //RENDER SEARCH PAGE
    let search_button = document.getElementById("search")
    search_button.addEventListener("click", (e) => {
        console.log("You've hit search button")
    })
})