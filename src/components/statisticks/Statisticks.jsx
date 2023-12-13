import React from "react";
import "./Statisticks.css";

function Statisticks() {
  return (
    <div>
      <section className="statistics section" id="statistics">
        <section className="react-activity-calendar">
          <div className="max-width">
            <h2 className="title">My GitHub Contribution</h2>
          </div>
          <script src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"></script>
          <link
            rel="stylesheet"
            href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
          />
          <div className="image-container">
            <img src="https://ghchart.rshah.org/abhinaba900" alt="" />
          </div>
          <div className="regular">
            <div className="git-card">
              <img
                id="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com/?user=abhinaba900&theme=shades-of-purple&hide_border=false"
                alt="stat-card"
              />
            </div>
            <div className="git-card">
              <img
                id="github-top-langs"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=abhinaba900&theme=shades-of-purple&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
                alt="chandan"
              />
            </div>
            <div className="git-card">
              <img
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=abhinaba900&theme=shades-of-purple&hide_border=false&include_all_commits=true&count_private=true"
                alt="top-languages"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Statisticks;
