let playList = [

    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }

];

const ol = document.createElement("ol");
const mainDiv = document.getElementById("container");
mainDiv.append(ol);


for (let i in playList) {
    const li = document.createElement("li");
    const pLine = document.createElement("p");
    pLine.append(playList[i].author);
    pLine.append(" --- ");
    pLine.append(`"${playList[i].song}"`);
    li.append(pLine);
    ol.append(li);
}