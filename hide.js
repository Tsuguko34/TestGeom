function toggleVisibility(dropdown) {
            // var liElements = document.querySelectorAll('.DEFAULT li');

            // liElements.forEach(function(liElement) {
            //     liElement.style.display = (liElement.style.display === 'none') ? 'list-item' : 'none';
            // });

            // // Move the visible elements down when showing the hidden elements
            // document.querySelectorAll('.DEFAULT .overlap').forEach(function(overlapElement) {
            //     overlapElement.style.transform = (overlapElement.style.transform === 'translateY(0)') ? 'translateY(30px)' : 'translateY(0)';
            // });
    var container = document.getElementById(dropdown)
    console.log(container.classList.contains('open'));

    if(container.classList.contains('open')){
        container.classList.remove('open')
    }
    else{
        container.classList.add('open')
    }
}