Free personal profile website template for everyone for striking online presence.

## My-profile

Check this out : [My-profile](https://hussaings.gitlab.io/my-profile/)

Download the source code from github(https://hussaings.gitlab.io/my-profile/) and update
```
src/App/utils/data.json
```
to create a website for you.
<br/>
<br/>
Note: Do not create a new node or delete a node from data.json
<br/>
Note: Please do not add empty strings in data.json
<br/>
<br/>

```
{
    "name": "Hussain Gadisaaz",
    "profiles": [                                                           // list of profiles to show
        "I'm Salesforce Developer",
        "I'm Vlocity Developer",
        "I'm ReactJs Developer",
        "I'm Freelancer"
    ],
    "profile_url": "https://hussaings.gitlab.io/my-profile/profile.jpg",   // profile img url
    "certifications":[                                                     // add a new subnode to add new certificate
        {
            "image_url":"https://hussaings.gitlab.io/my-profile/trailhead.png",
            "title":"167",
            "subtitle":"Badges"
        },
        {
            "image_url":"https://hussaings.gitlab.io/my-profile/salesforce.png",
            "title":"PD1",
            "subtitle":"Certified"
        }
    ],
    "skills": [                                                             // add a new subnode for new
        {                                                                   // skill
            "name": "Salesforce",
            "percentage": "65"
        },
        {
            "name": "Salesforce Vlocity",
            "percentage": "15"                                              // add percentage number 
                                                                            // do not add % sign
        },
        {
            "name": "Salesforce - Lightning",
            "percentage": "50"
        },
        {
            "name": "React Js",
            "percentage": "35"
        },
        {
            "name": "HTML/CSS/Bootstrap",
            "percentage": "40"
        },
        {
            "name": "Version Control",
            "percentage": "45"
        }
    ],
    "connect": {
        "email": "hgsaaz@gmail.com",
        "phone": "+919887179382",
        "skype": "live:hgsaaz",
        "linkedin": "Hussain Gadisaaz"
    },
    "experience": [                                                             // add a new subnode for new 
        {                                                                       // experience
            "designation": "Vlocity Developer",
            "duration": "April 2020 - Present",
            "organization": "Vlocity Inc, Bangalore, India",
            "extra": [
                "Working on Vlocity Products.",                                 // add new item for new point
                "Customization on Omniscripts, Integration Procedures, Data Raptors and other VLocity tools."
            ]
        },
        {
            "designation": "Salesforce Developer",
            "duration": "Jan 2017 - March 2020",
            "organization": "Metacube Software Pvt. Ltd, Jaipur, India",
            "extra": [
                "Working as a Salesforce Developer in TheWarrantyGroup-US for building business logic in Apex, triggers, integration of Visualforce pages and components with Apex, Lightning components and Applications with apex server integration.",
                "Customization on Visualforce Pages, Apex customization, custom objects, fields, formulas.",
                "Developed Lightning components, lightning events and to manage components within the application.",
                "ANT Deployments tool and SFDX."
            ]
        }
    ],
    "education": [                                                                  // add a new subnode for
        {                                                                           // extra education
            "course": "Bachelor's in Technology",
            "duration": "2013 - 2017",
            "institution": "Geetanjali Institute of Technical Studies, India",
            "extra": [
                "Computer Science Engg.",
                "Honoured with overall 80%."
            ]
        }
    ]
}
```