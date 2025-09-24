export function Header() {
  return (
    <header className="w-full bg-white border-b border-primary/20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 bg-muted">
              <img
                src="https://via.placeholder.com/150/000000/FFFFFF?text=👤"
                alt="Luc Linders - Profielfoto"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-primary">Luc Linders</h1>
            <p className="text-xl text-muted-foreground">Softwareontwikkelaar en data engineer</p>
            <p className="max-w-2xl mx-auto text-base text-foreground/80 leading-relaxed">
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}