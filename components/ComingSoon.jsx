import React from "react";
import Image from "next/image";
import IconFacebook from "../public/facebook.svg";
import IconTwitter from "../public/twitter.svg";
import IconGithub from "../public/github.svg";
import classes from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={classes.card_container}>
      <div className={classes.card}>
        <div className={classes.header}>
          <div className={classes.logo}>
            <a href=".">NUBOT</a>
          </div>
          <div className={classes.social}>
            <a
              href="https://facebook.com"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <IconFacebook className={classes.icon} /> */}
              <div className={classes.icon}>
                <Image src={IconFacebook} alt="Facebook" />
              </div>
            </a>
            <a
              href="https://twitter.com"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <IconTwitter className={classes.icon} /> */}
              <div className={classes.icon}>
                <Image src={IconTwitter} alt="Twitter" />
              </div>
            </a>
            <a
              href="#"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <IconGithub className={classes.icon} /> */}
              <div className={classes.icon}>
                <Image src={IconGithub} alt="GitHub" />
              </div>
            </a>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.title}>
            <h1 className={classes.heading}>Website coming soon.</h1>
            <p className={classes.para}>
              Get ready for the change. Please check back to know more.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ComingSoon;
