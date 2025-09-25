export function Header() {
  return (
    <header className="w-full border-b border-primary/20">
      <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex justify-center items-center space-x-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 bg-secondary">
              <img
                src="../../public/profielfoto.webp"
                alt="Luc Linders - Profielfoto"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-secondary">Luc Linders</h1>
              <p className="text-xl text-secondary">Softwareontwikkelaar en data engineer</p>
              <p className="max-w-2xl mx-auto text-base text-secondary/80 leading-relaxed">
              </p>
            </div>
          </div>
          

      </div>
    </header>
  );
}