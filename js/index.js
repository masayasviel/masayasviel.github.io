const genelateDom = ()=>{
    let panels = "";
    panelData.forEach(data=>{
        panels += "<div class=\"col-xs-12 col-md-3\"><div class=\"card bg-dark\">" +
            "<img class=\"card-img-top\" src=" + data[2] + " alt=" + data[3] + ">" +
            "<div class=\"card-body\">" +
            "<h4 class=\"card-title text-light\">" + data[0] + "</h4>" +
            "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">" +
            "<button type=\"button\" class=\"btn btn-primary\">" +
            "<a href=" + data[4] + ">play</a></button>" +
            "<button type=\"button\" class=\"btn btn-primary\" id=" +
            data[1] + " onclick=\"getId(this)\">how</button>" +
            "<button type=\"button\" class=\"btn btn-primary\">" +
            "<a href=" + data[5] + " class=\"text-light\">code</a></button>" +
            "</div></div></div></div>";
    });
    return panels;
};

$(document).ready(()=>{
    const $cards = $("#cards");
    $cards.html(genelateDom());
});

const getId = ele=>{
    window.alert(howData[ele.id]);
}