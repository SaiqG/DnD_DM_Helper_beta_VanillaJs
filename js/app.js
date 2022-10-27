
// //JQuary
$(function () {
    $("[active-menu]").on("click", function (event) {
        event.preventDefault();
        var $this = $(this);
        $("#menu a").removeClass("active");
        $this.addClass("active");
        $("#list div").removeClass("active");
        $($(this).attr("active-menu")).addClass("active");
        // console.log($(this).attr("active-menu"));
        // console.log($($(this).attr("active-menu")))

    })
});


//js
// document.querySelector('.stats__pos').addEventListener('change', (stats) => {

//     document.getElementById(stats.target.id).addEventListener('change', () => {

//         let stat = Math.round((+document.getElementById(stats.target.id).value - 10) / 2 - 0.1);
//         let stt = "#" + stats.target.id + "Ch";
//         let sts = "#" + stats.target.id + "Sub > div ";
//         if (Math.sign(stat) == 1) {
//             document.querySelector(stt).innerHTML = '+' + stat;

//         }
//         else {
//             document.querySelector(stt).innerHTML = stat;
//         }

//         document.querySelectorAll(sts).forEach(element => {
//             if (element.lastChild.checked) {
//                 stat += 1;
//                 if (Math.sign(stat) == 1) {
//                     element.firstChild.textContent = '+' + stat;
//                     stat -= 1;
//                 }
//                 else {
//                     element.firstChild.textContent = stat;
//                     stat -= 1;
//                 }
//             }
//             else if (element.lastChild.indeterminate) {
//                 stat += 2;
//                 if (Math.sign(stat) == 1) {
//                     element.firstChild.textContent = '+' + stat;
//                     stat -= 2;
//                 }
//                 else {
//                     element.firstChild.textContent = stat;
//                     stat -= 2;
//                 }
//             }

//             else {
//                 if (Math.sign(stat) == 1) {
//                     element.firstChild.textContent = '+' + stat;
//                 }
//                 else {
//                     element.firstChild.textContent = stat;
//                 }
//             }

//         });

//     });

// });
// console.log(document.querySelectorAll("#Sub > div"))


document.querySelector("#char").addEventListener('change', () => 
{ 
    RefreshStats();
});

function RefreshStats() {
    document.querySelectorAll("#Sub > div").forEach(element => {
        let stat = "#" + element.id[0] + element.id[1] + element.id[2];
        let id = stat + "Sub > div";
        let stt = stat + "Ch";
        stat = Math.round((document.querySelector(stat).value - 10) / 2 - 0.1);
        if (Math.sign(stat) == 1) {
            document.querySelector(stt).innerHTML = '+' + stat;

        }
        else {
            document.querySelector(stt).innerHTML = stat;
        }

        document.querySelectorAll(id).forEach(element1 => {
            if (element1.lastChild.checked) {
                stat += 1;
                if (Math.sign(stat) >= 0) {
                    element1.firstChild.textContent = '+' + stat;
                    stat -= 1;
                }
                else {
                    element1.firstChild.textContent = stat;
                    stat -= 1;
                }
            }
            else if (element1.lastChild.indeterminate) {
                stat += 2;
                if (Math.sign(stat) >= 0) {
                    element1.firstChild.textContent = '+' + stat;
                    stat -= 2;
                }
                else {
                    element1.firstChild.textContent = stat;
                    stat -= 2;
                }
            }

            else {
                if (Math.sign(stat) >= 0) {
                    element1.firstChild.textContent = '+' + stat;
                }
                else {
                    element1.firstChild.textContent = stat;
                }
            }
        });

    });
}

function DoubleCheckbox(cb) {
    if (cb.readOnly) cb.checked = cb.readOnly = false;
    else if (!cb.checked) cb.readOnly = cb.indeterminate = true;
}

