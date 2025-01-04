function Header({ navigateTo }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [showCourseMenu, setShowCourseMenu] = React.useState(false);

    const handleNavigation = (e, path) => {
        e.preventDefault();
        navigateTo(path);
        setIsMenuOpen(false);
        setShowCourseMenu(false);
    };

    return (
        <header className="bg-gray-900 text-white" data-name="header">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="h-12" data-name="logo">
                    <img 
                        src="img/logo.jpeg" 
                        alt="Instituto IDE"
                        className="h-full w-auto cursor-pointer"
                        onClick={(e) => handleNavigation(e, '/')}
                    />
                </div>
                <nav className="hidden md:flex space-x-4" data-name="navigation">
                    <a href="#/" onClick={(e) => handleNavigation(e, '/')} className="nav-link">
                        Início
                    </a>
                    <div className="relative" onMouseEnter={() => setShowCourseMenu(true)} onMouseLeave={() => setShowCourseMenu(false)}>
                        <a href="#/cursos" onClick={(e) => handleNavigation(e, '/cursos')} className="nav-link">
                            Cursos
                        </a>
                        {showCourseMenu && (
                            <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50" data-name="course-menu">
                                {courses.map(course => (
                                    <a
                                        key={course.id}
                                        href={`#/curso/${course.id}`}
                                        onClick={(e) => handleNavigation(e, `/curso/${course.id}`)}
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        {course.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <a href="#/contato" onClick={(e) => handleNavigation(e, '/contato')} className="nav-link">
                        Contato
                    </a>
                </nav>

                <button 
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    data-name="menu-button"
                >
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden" data-name="mobile-menu">
                    <a href="#/" onClick={(e) => handleNavigation(e, '/')} className="block py-2 px-4 hover:bg-gray-800">
                        Início
                    </a>
                    <div className="relative">
                        <button 
                            onClick={() => setShowCourseMenu(!showCourseMenu)}
                            className="w-full text-left py-2 px-4 hover:bg-gray-800"
                        >
                            Cursos
                        </button>
                        {showCourseMenu && (
                            <div className="bg-gray-800 py-2">
                                {courses.map(course => (
                                    <a
                                        key={course.id}
                                        href={`#/curso/${course.id}`}
                                        onClick={(e) => handleNavigation(e, `/curso/${course.id}`)}
                                        className="block py-2 px-8 hover:bg-gray-700"
                                    >
                                        {course.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <a href="#/contato" onClick={(e) => handleNavigation(e, '/contato')} className="block py-2 px-4 hover:bg-gray-800">
                        Contato
                    </a>
                </div>
            )}
        </header>
    );
}
