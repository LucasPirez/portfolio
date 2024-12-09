import externalLink from '../../icons/external-link.svg';
import gitHub from '../../icons/433-github.svg';

export default function Links({ links }) {
  if (!links?.repositorie.length && !links?.deploy) return;

  return (
    <div className="absolute right-1 top-1 z-10 flex items-center bg-slate-200 p-[3px] rounded-md ">
      {links?.repositorie.length ? (
        <a href={links.repositorie} target="_blank" rel="noreferrer">
          <img
            src={gitHub}
            alt="git"
            className="cursor-pointer hover:scale-110 "
          />
        </a>
      ) : (
        ''
      )}
      {links?.deploy ? (
        <a href={links.deploy} target="_blank" rel="noreferrer">
          <img
            src={externalLink}
            alt="link"
            className="hover:scale-110 transition-all"
          />
        </a>
      ) : (
        ''
      )}
    </div>
  );
}
