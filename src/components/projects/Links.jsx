import externalLink from '../../icons/external-link.svg';
import gitHub from '../../icons/433-github.svg';

export default function Links({ links }) {
  return (
    <>
      <a href={links.repositorie} target="_blank" rel="noreferrer">
        <img src={gitHub} alt="git" className="hover:scale-105" />
      </a>
      {links?.deploy && (
        <a href={links.deploy} target="_blank" rel="noreferrer">
          <img
            src={externalLink}
            alt="link"
            className="hover:scale-110 transition-all"
          />
        </a>
      )}
    </>
  );
}
