const sidebar_Items = [
    "lesson1",
    "lesson1-1",
    "lesson1-2",
    "lesson1-3",
    "lesson1-4",
    "lesson1-5",
    "lesson1-6",
    "lesson2",
    "lesson3",
    "lesson4",
    "lesson5"
]

// Get all sections
const sections = document.querySelectorAll('.lesson');

// Function to check if section is in view
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to update active section
function updateActiveSection() {
    sections.forEach(section => {
        if (isInView(section)) {
            if(section.classList.contains('1')){
                var Main_SideBar_Item = document.getElementById('lesson1')
                Main_SideBar_Item.classList.add('active')
            }
        }
        else{
            var Main_SideBar_Items = document.querySelectorAll('.Label')
            Main_SideBar_Items.forEach((item) => {
                item.classList.remove('active')
            })
        }
    });
}

function removeACtive(filter){
    sidebar_Items.forEach((item) => {
        console.log(item !== filter);
        if(item !== filter){
            var sidebar_Item = document.getElementById(item)
            if(sidebar_Item){
                sidebar_Item.classList.remove('active');
            }
        }
        
    })
}

function scrollToLesson(lesson){
    var lesson_Item = document.getElementById(lesson)
    if(lesson === 'lessonNo1' || lesson === 'lessonNo2' || lesson === 'lessonNo3' || lesson === 'lessonNo4' || lesson === 'lessonNo5'){
        lesson_Item.scrollIntoView({behavior: "smooth", block: 'end'})
    }
    else{
        lesson_Item.scrollIntoView({behavior: "smooth", block: 'start'})
    }
    
}



// Listen for scroll events
window.addEventListener('scroll', updateActiveSection);
// Call updateActiveSection on page load
window.addEventListener('load', updateActiveSection);