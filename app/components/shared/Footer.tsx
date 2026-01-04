const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About</a>
        <a className="link link-hover">Projects</a>
        <a className="link link-hover">LinkedIn</a>
        <a className="link link-hover">GitHub</a>
      </nav> 
      <aside>
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-primary text-primary-content h-8 w-8 flex items-center justify-center rounded font-bold">D</div>
          <p className="font-bold uppercase tracking-widest">Durjoy.Dev</p>
        </div>
        <p>© 2024 - Built with Next.js & DaisyUI v5</p>
      </aside>
    </footer>
  );
};

export default Footer;