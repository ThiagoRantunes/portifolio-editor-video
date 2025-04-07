function linkNavigate(link){
    window.location = link;
}

function toggleCard(id){
    const textBlock = document.getElementById(`card-${id}`);
    textBlock.classList.toggle("show")
}