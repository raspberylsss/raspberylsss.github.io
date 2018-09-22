let blog_details = {
    "blogs": [
        {
            "name": "one.html",
            "description": "Oh, hello there!",
            "date": "2018-09-23"
        }
    ]
}
const blogs = blog_details["blogs"];

for(let i=0; i< blogs.length; i++) {
    
    let html_tbe = 
    `
        <span>${blogs[i]["date"]}</span>
        <a href="blogs/${blogs[i]["name"]}">${blogs[i]["description"]}</a>
    `;
    let list_elem = document.createElement('li');
    list_elem.innerHTML = html_tbe;
    document.querySelector('.blog-list').appendChild(list_elem);
}