import data from './data.js'

const jobListingEl = document.getElementById("listing-items")
let tags = []

renderJobListings(data)

function handleClick(label) {
    tags.push(label)
    console.log(tags)
}

function renderJobListings(listings){
    jobListingEl.innerHTML = ""
    listings.forEach(renderList)
}
function renderList(item, itemIndex) {

    let buttonLabels = [item.role, ...item.languages, ...item.tools]

    jobListingEl.innerHTML += 
    `
        <div class="each-job-listing">
            <img class="job-image" src="${item.logo}">

            <div class="job-details">
                <div class="job-company-row">
                    <div class="job-company">${item.company}</div>
                   ${item.new ? 
                    ` <div class="new">New!</div>` : ""}
                    ${item.featured ? 
                        ` <div class="featured">Featured</div>` : ""}
                </div>
                <div class="job-position">${item.position}</div>
                <div class="post-details">
                    ${item.postedAt} •
                    ${item.contract} •
                    ${item.location}
                </div>
            </div>

            <div class="tag-labels" id="tag-label-${itemIndex}"></div>
        </div>
    `
    setTimeout(() => {

        let labelEl = document.querySelector('#tag-label-'+itemIndex)
        buttonLabels.forEach((label, labelIndex) => {
            //Create Element
            let button = document.createElement('button')
            //Modify Element
            button.classList.add = 'label-button'
            button.innerText = label
            //Append Element
            labelEl.append(button)
            button.addEventListener('click', function() {
                handleClick(label)
            })
        })
    }, 10)

    }
    
