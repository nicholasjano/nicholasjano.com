const Intro = () => {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center space-y-2 bg-gradient-radial from-surface-secondary from-[0.01%] to-surface-primary to-[100%]">
      <h1 className="text-7xl font-bold bg-gradient-to-r from-brand-green from-20% via-brand-blue via-50% to-brand-green to-80% text-transparent bg-clip-text bg-400% animate-gradient">
        Nicholas Jano
      </h1>
      <p className="text-2xl">Student at Queen's University</p>
      <p className="text-2xl">Software Engineer</p>
    </section>
  );
};

export default Intro;
