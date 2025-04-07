function linkNavigate(link){
    window.location = link;
}

function openCard(id){
    const card = document.getElementById(id);
    if(card.classList.contains("block")){
        card.classList.replace("block", "card-text");
    }else{
        card.classList.add("card-text","block");
    }
}