export default function (data) {
  const {
    avatar,
    name,
    image,
    role,
    quote,
    about = [],
    skills = [],
    projects = [],
    media,
  } = data;
  return `<header>
    <nav class="navbar">
        <div class="avatar">
            <h1> ${avatar} </h1>
        </div>
        <div class="menu-wrapper">
            <button class="hamburger" id='moreIcon'>
                <div class="hamburger-item">
                    <span class="hamburger-line"></span><span class="hamburger-line"></span><span class="hamburger-line"></span>
                </div>
            </button>
            <ul class="menu">
                <li>
                    <a href="#skills" class="nav-link">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#projects" class="nav-link">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#resume" class="nav-link">
                        Resume
                    </a>
                </li>
                <li>
                    <a href="#contact" class="nav-link">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    </header>
    <main>
    <section class="intro" id='home'>
        <div class="image">
            <img src="${image}" class="profileImg"></img>
        </div> 
        <div class="intro-content">
            <div class="intro-title">
                <span class="intro-title-hello"> Hi,👋 I am  </span>
                <span class="intro-title-name"> ${name} </span>
            </div>
            <div class="intro-subtitle"> ${role}</div>
            <div class="contact-button">
                <button id="contact" class="button">
                    Contact
                </button>
            </div>
        </div>
    </section>
    <section class="about-me" id="about">
        <div class="center">
            <header class="about-title">
                <h2> About Me </h2>
            </header>
            <div class="about-content">
                <p>
                  ${about.content}
                </p>
            </div>
        </div>
    </section>
    <section class="skills" id="skills">
        <div class="center">
            <header class="about-title">
                <h2> Skills </h2>
            </header>
            <div class="grid-tile-parent">
                ${skills.reduce((prevSkillVal, currentSkillVal) => {
                  const { type, text } = currentSkillVal;
                  let children = '';
                  if (type === 'image') {
                    children = `<div class="img" title="${text}"><img class="grid-tile-image" src="${currentSkillVal.image}" alt="JS"></div>`;
                  }
                  if (type === 'icon') {
                    children = `<div class="grid-tile-icon" title="${text}"><i class="${currentSkillVal.iconClass}"></i></div>`;
                  }
                  if (type === 'text') {
                    children = `<div class="grid-tile-text" title="${text}"><span>${text.slice(
                      0,
                      2
                    )}</span></div>`;
                  }
                  const skillElement = `<div class="grid-tile grid"> ${children}</div>`;
                  return prevSkillVal + skillElement;
                }, '')}
            </div>
        </div>
    </section>
    <section class="projects" id="projects">
        <div class="center">
            <header class="about-title">
                <h2> Projects </h2>
            </header>
            <div class="grid-tile-parent">
            ${projects.reduce((prevProjectVal, currentProject) => {
              const { title, description, srcURL, image } = currentProject;
              const projectElement = `
                <a href="${srcURL}" target="_blank">
                <div class="grid project-grid-tile">
                    <div class="img" title="${title}"><img class="grid-tile-image" src="${image}" alt="${title}"></div>
                    <div class="project-intro">
                        <div class="project-header">
                            <div class="caption"> ${title} </div>
                        </div>
                        <div class="project-subtitle">
                            <p class="project-explanation">
                                ${description}
                            </p>
                        </div>
                    </div>
                </div>
                </a>
                `;
              return prevProjectVal + projectElement;
            }, '')}
            </div>
        </div>
    </section>
    <section class="contact" id='contact'>
        <div class="center">
            <header class="about-title">
                <h2> Contact me </h2>
            </header>
            <div class="contact-content">
                <div class="contact-form">
                    <div class="field field-text">
                        <label for='name'> Name</label>
                        <input type="text" placeholder='Enter your name' id='name' name='name'/>
                    </div>
                    <div class="field field-text">
                        <label for='name'> Email</label>
                        <input type="email" placeholder='Enter your email' id='email'/>
                    </div>
                    <div class="field field-long">
                        <label for='name'> Message </label>
                        <textarea name="message" placeholder='Type your message' id="message"></textarea>
                    </div>
                    <div class="send-button">
                        <button class='button' id="send">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
    <footer>
    <div class="footer center">
        <div class="footer-grid">
            <div class="quote-text">
                <h1 class="quote">${quote.text}</h1>
                <i><h3>-${quote.author}</h3> </i>
            </div>
            <div class="footer-social-links">
                ${media.reduce((prevMedia, currentMedia) => {
                  const { iconClass, url, text } = currentMedia;
                  const mediaElement = `
                    <a class="footer-social-link-item" title="${text}" target="_blank" href="${url}">
                        <i class="${iconClass}"></i>
                    </a>
                    `;
                  return prevMedia + mediaElement;
                }, '')}
            </div>
        </div>
    </div>
    </footer>
    `;
}
