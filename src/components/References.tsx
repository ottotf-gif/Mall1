const projects = [
  {
    image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Badrumsrenovering',
    location: '[Stadsdel]',
  },
  {
    image: 'https://images.pexels.com/photos/6444268/pexels-photo-6444268.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Rörinstallation',
    location: '[Stadsdel]',
  },
  {
    image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Värmepumpsinstallation',
    location: '[Stadsdel]',
  },
  {
    image: 'https://images.pexels.com/photos/6444107/pexels-photo-6444107.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Komplett badrumsbyte',
    location: '[Stadsdel]',
  },
  {
    image: 'https://images.pexels.com/photos/5691617/pexels-photo-5691617.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Golvvärmeinstallation',
    location: '[Stadsdel]',
  },
  {
    image: 'https://images.pexels.com/photos/6419022/pexels-photo-6419022.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Köksstambyte',
    location: '[Stadsdel]',
  },
];

export default function References() {
  return (
    <section id="referenser" className="bg-brand-darker py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Referenser
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Utförda projekt
          </h2>
          <p className="mt-4 text-brand-muted text-lg">
            Ett urval av våra senaste uppdrag. Kvalitet och noggrannhet i varje projekt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-lg">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm mt-1">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
