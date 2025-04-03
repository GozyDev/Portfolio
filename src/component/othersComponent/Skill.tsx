import H2 from "../H2";
import SkillsCard from "../../Skills";
export default function Skill() {
  return (
    <>
      <div className="skill_cards">
        <H2 title="SKILLS" />
        <div className="skill_grid">
          <div className="skill_card">
            <h3>Frontend </h3>
            <div className="inner_card">
              <SkillsCard
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                skillname="html"
              />
              <SkillsCard
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                skillname="css"
              />
              <SkillsCard
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                skillname="javascript"
              />
              <SkillsCard
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                skillname="Typescript"
              />
              <SkillsCard
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                skillname="react"
              />
              <SkillsCard
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                skillname="next js"
              />
              <SkillsCard
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                skillname="tailwind css"
              />
            </div>
          </div>

          <div className="skill_card">
            <h3>Backend</h3>
            <div className="inner_card">
              <SkillsCard
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
                skillname="Prisma"
              />
              <SkillsCard
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                skillname="PostgreSQL"
              />
            </div>
          </div>

          <div className="skill_card">
            <h3>Version Control</h3>
            <div className="inner_card">
              <SkillsCard
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                skillname="git"
              />
              <SkillsCard
                classname="devicon-github-original"
                skillname="git hub"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
