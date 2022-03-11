module.exports = ({
  name,
  designation,
  email,
  phone,
  address,
  github,
  linkedin,
  portfolio,
  mastery,
  comfortable,
  familiar,
  tools,
  education,
  course1,
  course2,
  course3,
  project,
  description,
  site,
  frontend,
  backend,
}) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>PDF Resume Template</title>
          <style>
             .pdf-box{
                max-width: 800px;
                margin: auto;
                padding: 30px;
                border-left: 1px solid #eee;
                border-right: 1px solid #eee;
                box-shadow: 0 0 10px rgba(0, 0, 0, .15);
                font-size: 18px;
                line-height: 28px;
                font-family: 'Helvetica Neue', 'Helvetica';
                color: #555;
             }
             .designation{
                font-size: 24px;
                color: gray;
                margin-top: 0px;
                margin-bottom: 20px;
             }
             .contact{
                border: 1px solid #eee;
                border-radius: 10px;
                padding: 5px;
             }
             .contact-info{
                display: flex;
                justify-content: center;
                align-items: center;
             }
             .contact-info h2{
                font-size: 16px;
                color: gray;
                margin: 2px;
                padding: 0px;
             }
             .project{
                border: 1px solid #eee;
                border-radius: 10px;
                padding: 10px;
                margin-bottom: 10px;
             }
             .description{
                text-align: justify;
                margin-bottom: 0px;
             }
          </style>
       </head>
       <body class="pdf-box">
          <div>
             <h1 class="title">${name}</h1>
             <hr />
             <h2 class="designation">${designation}</h2>
          </div>
          <div class="contact">
             <div class="contact-info">
                <h2>Email : ${email}</h2>
                <h2>Phone : ${phone}</h2>
                <h2> Address : ${address}</h2>
             </div>
             <div class="contact-info">
                <h2>GitHub : ${github}</h2>
                <h2>LinkedIn : ${linkedin}</h2>
                <h2>Portfolio : ${portfolio}</h2>
             </div>
          </div>
          <div>
             <h3>Skills :</h3>
             <ul>
                <li><u>Mastery in:</u> ${mastery}</li>
                <li><u>Comfortable with:</u> ${comfortable}</li>
                <li><u>Familiar with:</u> ${familiar}</li>
                <li><u>Tool's use:</u> ${tools}</li>
             </ul>
          </div>
          <div>
             <h3>Projects :</h3>
             <ol>
                <li class="project">
                ${project}
                      <br />
                      <p class="description">${description}</p>
                      <br />
                      <a href="${site}">Live Site</a>
                      <a href="${frontend}">Frontend</a>
                      <a href="${backend}">Backend</a>
                </li>
             </ol>
          </div>
          <div>
             <h3>Education & Courses :</h3>
             <ul>
                <li>${education}</li>
                ${course1 ? `<li>${course1}</li>` : ""}
                ${course2 ? `<li>${course2}</li>` : ""}
                ${course3 ? `<li>${course3}</li>` : ""}
             </ul>
          </div>
       </body>
    </html>
    `;
};
