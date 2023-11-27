import data from './data.json' assert { type: 'json' };

const jobListingEl = document.getElementById("listing-items")
console.log(data);


for (let eachjob of data) {
    console.log(eachjob)

    renderListing(eachjob)
}


function renderListing(item) {

    for ( let language of item.languages){
        for(let tool of item.tools) {
    
    jobListingEl.innerHTML += 
    `
        <div class="each-job-listing">
            <img class="job-image" src="${item.logo}">

            <div class="job-details">
                <div class="job-company-row">
                    <div class="job-company">${item.company}</div>
                    <div class="show-new" id="show-new">New!</div>
                    <div class="show-featured" id="show-featured">Featured</div>
                </div>
                <div class="job-position">${item.position}</div>
                <div class="post-details">
                    ${item.postedAt} •
                    ${item.contract} •
                    ${item.location}
                </div>
            </div>

            <div class="job-language" id="language-el">
            ${language} 
            
            ${tool}</div>
        </div>

        `
    }}
        console.log(item.tools)
    if(item.new == false) {
        document.getElementById("show-new").style.display = 'none'
    }
    if (!item.featured) {
        document.getElementById("show-featured").style.display = 'none'

    }
    
}