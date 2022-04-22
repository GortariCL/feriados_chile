$(document).ready(function () {

    $.ajax({
        url: "https://www.feriadosapp.com/api/holidays.json",
        success: function (data) {
            const datos = data.data;

            $(datos).each((i, e) => {
                const day = e.date
                const holliday = e.title

                $('#datos').append(`<tr>
                <td>${day}</td>
                <td>${holliday}</td>
                </tr>`);
            });
        }
    });
});