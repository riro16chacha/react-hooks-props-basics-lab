import React from "react";

function About({bio, github, linkedin}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {(bio?.trim().length>0)?<p>{bio}</p>:null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
