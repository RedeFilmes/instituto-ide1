function App() {
    const [currentPage, setCurrentPage] = React.useState('home');
    const [selectedCourse, setSelectedCourse] = React.useState(null);

    React.useEffect(() => {
        try {
            window.addEventListener('hashchange', handleNavigation);
            handleNavigation();
            return () => window.removeEventListener('hashchange', handleNavigation);
        } catch (error) {
            reportError(error);
        }
    }, []);

    const handleNavigation = () => {
        try {
            const hash = window.location.hash.slice(1) || '/';
            if (hash.startsWith('/curso/')) {
                const courseId = parseInt(hash.split('/')[2]);
                const course = courses.find(c => c.id === courseId);
                if (course) {
                    setSelectedCourse(course);
                    setCurrentPage('course-details');
                    return;
                }
            }
            setCurrentPage(hash);
        } catch (error) {
            reportError(error);
        }
    };

    const navigateTo = (path, data) => {
        try {
            if (data) {
                setSelectedCourse(data.course);
            }
            window.location.hash = path;
        } catch (error) {
            reportError(error);
        }
    };

    const renderPage = () => {
        try {
            switch(currentPage) {
                case '/':
                    return <Home navigateTo={navigateTo} />;
                case '/cursos':
                    return <Courses navigateTo={navigateTo} />;
                case 'course-details':
                    return <CourseDetails course={selectedCourse} navigateTo={navigateTo} />;
                case '/registration':
                    return <Registration courseData={selectedCourse} />;
                case '/sobre':
                    return <About />;
                case '/politica-privacidade':
                    return <PrivacyPolicy />;
                case '/termos':
                    return <Terms />;
                default:
                    return <Home navigateTo={navigateTo} />;
            }
        } catch (error) {
            reportError(error);
            return <div>Erro ao carregar a página</div>;
        }
    };

    return (
        <div className="min-h-screen flex flex-col" data-name="app">
            <Header navigateTo={navigateTo} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer navigateTo={navigateTo} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
