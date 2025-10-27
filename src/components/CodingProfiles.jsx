import React from "react";
import "./CodingProfiles.css";
import leetcode from "../assets/leetcode.png";
import codeforces from "../assets/codeforces.png";
import codechef from "../assets/codechef.png";
import hackerrank from "../assets/hackerrank.png";
import gfg from "../assets/gfg.png";    
function CodingProfiles() {
  return (
    <>
      <div id="coding-profiles" data-aos="fade-down">
        <div className="container">
          <h1 className="subtitle">My Coding Profiles</h1>
          <div className="profiles-list">
            <a
              href="https://leetcode.com/u/kumar1119/"
              target="_blank"
              className="profile-card"
              data-aos="flip-left"
            >
              <img src={leetcode} alt="LeetCode" className="profile-logo" />
              <span>LeetCode</span>
            </a>
            <a
              href="https://codeforces.com/profile/kumartatikonda"
              target="_blank"
              className="profile-card"
              data-aos="flip-left"
            >
              <img src={codeforces} alt="Codeforces" className="profile-logo" />
              <span>Codeforces</span>
            </a>
            <a
              href="https://www.codechef.com/users/kumartatiknoda"
              target="_blank"
              className="profile-card"
              data-aos="flip-left"
            >
              <img src={codechef} alt="CodeChef" className="profile-logo" />
              <span>CodeChef</span>
            </a>
            <a
              href="https://www.hackerrank.com/profile/kumartatikonda11"
              target="_blank"
              className="profile-card"
              data-aos="flip-left"
            >
              <img src={hackerrank} alt="HackerRank" className="profile-logo" />
              <span>HackerRank</span>
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/kumartatikonda1119/"
              target="_blank"
              className="profile-card"
              data-aos="flip-left"
            >
              <img src={gfg} alt="GeeksforGeeks" className="profile-logo" />
              <span>GeeksforGeeks</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CodingProfiles;
