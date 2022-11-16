
// //JQuary
$(function () {
    $("[active-menu]").on("click", function (event) {
        event.preventDefault();
        var $this = $(this);
        $("#menu a").removeClass("active");
        $this.addClass("active");
        $("#list div").removeClass("active");
        $($(this).attr("active-menu")).addClass("active");

    })
});


//vanilla js

document.querySelector("#char").addEventListener('change', () => {
    RefreshStats();
});

RefreshStats = () => {
    document.querySelectorAll("#Sub > div").forEach(element => {

        let stat = "#" + element.id[0] + element.id[1] + element.id[2];
        let id = stat + "Sub > div";
        let stt = stat + "Ch";
        let mastery = +document.querySelector("#mastery").value;

        stat = Math.round((document.querySelector(stat).value - 10) / 2 - 0.1);

        if (Math.sign(stat) == 1) {
            document.querySelector(stt).innerHTML = '+' + stat;

        }
        else {
            document.querySelector(stt).innerHTML = stat;
        }

        document.querySelectorAll(id).forEach(element1 => {
            if (element1.lastChild.checked) {
                stat += mastery;
                if (Math.sign(stat) >= 0) {
                    element1.firstChild.textContent = '+' + stat;
                    stat -= mastery;
                }
                else {
                    element1.firstChild.textContent = stat;
                    stat -= mastery;
                }
            }
            else if (element1.lastChild.indeterminate) {
                stat += mastery + 1;
                if (Math.sign(stat) >= 0) {
                    element1.firstChild.textContent = '+' + stat;
                    stat -= mastery + 1;
                }
                else {
                    element1.firstChild.textContent = stat;
                    stat -= mastery + 1;
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
    document.querySelector("#mastery").value = "+" + +document.querySelector("#mastery").value;
}

DoubleCheckbox = (cb) => {
    if (cb.readOnly) cb.checked = cb.readOnly = false;
    else if (!cb.checked) cb.readOnly = cb.indeterminate = true;
}

ScrollMonst = () => {
    document.querySelector("#second__screen").scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
    });

}

ScrollMain = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

const apiUrl = "https://www.dnd5eapi.co";

FindMob = async () => {
    try {
        const monstersUrl = `${apiUrl}/api/monsters`
        const response = await fetch(monstersUrl);
        const data = await response.json();

        return data;

    } catch (error) {
        alert("Ты опять обосрался ахахах 1")
    }

}


ShowMob = async (select) => {
    try {
        const mobsList = await FindMob();
        const count = mobsList.count;
        let mobIndex;
        if (select === -1) { mobIndex = Math.floor(Math.random() * count) }
        else mobIndex = select.id;

        document.querySelector(".monster__name").innerText = mobsList.results[mobIndex].name;

        let mob = await (await fetch(apiUrl + mobsList.results[mobIndex].url)).json();

        document.querySelector(".monster__hp").innerText = `${mob.hit_points} HP`;
        document.querySelector(".monster__dmg").innerText = `${mob.hit_dice} dmg`;

        if (mob.hasOwnProperty("image")) {
            document.querySelector("#mob__pic").src = apiUrl + mob.image;
        }
        else document.querySelector("#mob__pic").src = "assets/img/unnamed.png";

        document.querySelector(".mob__found").innerHTML = "";
        search.value = "";

    } catch (error) {
        alert("Ты опять обосрался ахахах 2")
    }
}

const form = document.querySelector("form");
const search = document.querySelector(".mob__search");

form.addEventListener("input", async (mob) => {
    mob.preventDefault();
    let count = 0;
    document.querySelector(".mob__found").innerHTML = "";
    const mobsList = await FindMob();
    let mobs = mobsList.results;
    let mobN = search.value;

    mobs.forEach(name => {
        if (name.name.match(mobN) && count < 5) {
            console.log(mobs.indexOf(name));
            count++;
            document.querySelector(".mob__found").innerHTML +=
                `<dt class="search__res" id="${mobs.indexOf(name)}" onclick="ShowMob(this)">${name.name}</dt>`
        }
        if (mobN == "") document.querySelector(".mob__found").innerHTML = "";

    })
})





